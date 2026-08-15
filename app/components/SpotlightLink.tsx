"use client";

import {
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type PointerEvent,
} from "react";

type SpotlightStyle = CSSProperties & {
  "--spotlight-color"?: string;
};

type SpotlightLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  spotlightColor?: string;
};

/**
 * Adapted for a semantic link from React Bits' SpotlightCard interaction.
 * Source and license: https://github.com/DavidHDev/react-bits
 */
export default function SpotlightLink({
  children,
  className = "",
  spotlightColor = "color-mix(in srgb, var(--blue) 16%, transparent)",
  onPointerLeave,
  onPointerMove,
  style,
  ...props
}: SpotlightLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const canTrackPointerRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateCapability = () => {
      canTrackPointerRef.current = finePointer.matches && !reducedMotion.matches;
    };

    updateCapability();
    finePointer.addEventListener("change", updateCapability);
    reducedMotion.addEventListener("change", updateCapability);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      finePointer.removeEventListener("change", updateCapability);
      reducedMotion.removeEventListener("change", updateCapability);
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event);
    if (!canTrackPointerRef.current) return;
    pointerRef.current = { x: event.clientX, y: event.clientY };

    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null;
      const link = linkRef.current;
      if (!link) return;

      const rect = link.getBoundingClientRect();
      link.style.setProperty("--spot-x", `${pointerRef.current.x - rect.left}px`);
      link.style.setProperty("--spot-y", `${pointerRef.current.y - rect.top}px`);
    });
  };

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event);
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    linkRef.current?.style.setProperty("--spot-x", "50%");
    linkRef.current?.style.setProperty("--spot-y", "50%");
  };

  return (
    <a
      {...props}
      ref={linkRef}
      className={className}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{ ...style, "--spotlight-color": spotlightColor } as SpotlightStyle}
    >
      <span className="react-bits-spotlight-layer" aria-hidden="true" />
      {children}
    </a>
  );
}
