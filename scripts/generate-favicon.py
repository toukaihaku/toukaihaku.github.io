from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
FONT = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"

INK = "#0B1D2A"
PAPER = "#F1EEE7"
ACCENT = "#B18145"


def build_mark(size: int = 1024) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    scale = size / 1024

    def box(values: tuple[int, int, int, int]) -> tuple[int, int, int, int]:
        return tuple(round(value * scale) for value in values)

    # The circular seal matches the site's existing KT wordmark.
    draw.ellipse(box((48, 48, 976, 976)), fill=INK)
    draw.ellipse(box((92, 92, 932, 932)), outline=PAPER, width=max(2, round(12 * scale)))

    font = ImageFont.truetype(FONT, round(390 * scale))
    k_font = ImageFont.truetype(FONT, round(375 * scale))

    # Split coloring makes T the selected path while keeping KT legible at 16 px.
    draw.text((205 * scale, 236 * scale), "K", font=k_font, fill=PAPER, stroke_width=0)
    draw.text((500 * scale, 226 * scale), "T", font=font, fill=ACCENT, stroke_width=0)

    # Choice architecture: one starting point branches into three possible outcomes.
    path_width = max(2, round(9 * scale))
    thin_width = max(1, round(6 * scale))
    start = (round(512 * scale), round(850 * scale))
    junction = (round(512 * scale), round(790 * scale))
    options = [(380, 710), (512, 690), (644, 710)]

    draw.line([start, junction], fill=PAPER, width=path_width)
    for x, y in options:
        draw.line(
            [junction, (round(x * scale), round(y * scale))],
            fill=(ACCENT if x == 644 else PAPER),
            width=(path_width if x == 644 else thin_width),
        )

    # A lateral intervention visibly nudges the decision toward the highlighted path.
    arrow_y = round(810 * scale)
    draw.line(
        [(round(418 * scale), arrow_y), (round(482 * scale), arrow_y)],
        fill=ACCENT,
        width=path_width,
    )
    draw.polygon(
        [
            (round(482 * scale), arrow_y),
            (round(458 * scale), round(794 * scale)),
            (round(458 * scale), round(826 * scale)),
        ],
        fill=ACCENT,
    )

    target_radius = max(2, round(22 * scale))
    target_outline = max(1, round(8 * scale))
    for x, y in options:
        cx, cy = round(x * scale), round(y * scale)
        bounds = (cx - target_radius, cy - target_radius, cx + target_radius, cy + target_radius)
        if x == 644:
            draw.ellipse(bounds, fill=ACCENT)
        else:
            draw.ellipse(bounds, outline=PAPER, width=target_outline)

    start_radius = max(2, round(16 * scale))
    draw.ellipse(
        (start[0] - start_radius, start[1] - start_radius, start[0] + start_radius, start[1] + start_radius),
        fill=PAPER,
    )

    return image


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    master = build_mark()
    resampling = Image.Resampling.LANCZOS

    master.resize((512, 512), resampling).save(PUBLIC / "favicon-512.png", optimize=True)
    master.resize((180, 180), resampling).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    master.resize((32, 32), resampling).save(PUBLIC / "favicon-32.png", optimize=True)
    master.save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )


if __name__ == "__main__":
    main()
