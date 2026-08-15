"use client";

import { useEffect, useRef } from "react";
import { Camera, Geometry, Mesh, Program, Renderer } from "ogl";

const vertexShader = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;

  varying vec3 vColor;

  void main() {
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 9.0;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    modelPosition.x += sin(uTime * random.z + 6.283 * random.w) * mix(0.08, 0.7, random.x);
    modelPosition.y += sin(uTime * random.y + 6.283 * random.x) * mix(0.08, 0.6, random.w);
    modelPosition.z += sin(uTime * random.w + 6.283 * random.y) * mix(0.08, 0.5, random.z);

    vec4 viewPosition = viewMatrix * modelPosition;
    gl_PointSize = uBaseSize * mix(0.62, 1.18, random.x) / length(viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec3 vColor;

  void main() {
    float distanceFromCenter = length(gl_PointCoord.xy - vec2(0.5));
    float alpha = (1.0 - smoothstep(0.12, 0.5, distanceFromCenter)) * 0.72;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

const particleColors = ["#b18145", "#6f94a7", "#d6b98f", "#3f687d"];

function hexToRgb(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.slice(1), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

/**
 * A performance-bounded adaptation of React Bits' OGL Particles background.
 * Source and license: https://github.com/DavidHDev/react-bits
 */
export default function HeroParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = reducedMotionQuery.matches;
    const compact = window.matchMedia("(max-width: 760px)").matches;
    const saveData = "connection" in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    const particleCount = saveData ? 24 : compact ? 40 : 82;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: 1, depth: false, alpha: true });
    } catch {
      return;
    }

    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.setAttribute("aria-hidden", "true");
    canvas.setAttribute("role", "presentation");
    container.appendChild(canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 16 });
    camera.position.set(0, 0, 20);

    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount * 4);
    const colors = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      let x = 0;
      let y = 0;
      let z = 0;
      let length = 0;

      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        length = x * x + y * y + z * z;
      } while (length > 1 || length === 0);

      const radius = Math.cbrt(Math.random());
      positions.set([x * radius, y * radius, z * radius], index * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], index * 4);
      colors.set(hexToRgb(particleColors[index % particleColors.length]), index * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: compact ? 5.4 : 7.2 },
        uBaseSize: { value: compact ? 58 : 68 },
      },
      transparent: true,
      depthTest: false,
    });
    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      renderer.render({ scene: particles, camera });
    };

    let animationFrame = 0;
    let elapsed = 0;
    let lastTime = performance.now();
    let inView = true;
    const minimumFrameInterval = 1000 / 30;

    const render = (time: number) => {
      animationFrame = 0;
      if (!inView || document.hidden) return;

      if (!reducedMotion && time - lastTime < minimumFrameInterval) {
        animationFrame = requestAnimationFrame(render);
        return;
      }

      const delta = Math.min(time - lastTime, 50);
      lastTime = time;
      elapsed += delta * 0.035;
      program.uniforms.uTime.value = elapsed * 0.001;
      particles.rotation.x = Math.sin(elapsed * 0.00018) * 0.055;
      particles.rotation.y = Math.cos(elapsed * 0.00024) * 0.085;
      particles.rotation.z += delta * 0.0000168;
      renderer.render({ scene: particles, camera });

      if (!reducedMotion) animationFrame = requestAnimationFrame(render);
    };

    const start = () => {
      if (reducedMotion || animationFrame || !inView || document.hidden) return;
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(render);
    };

    const stop = () => {
      if (!animationFrame) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    const resizeObserver = new ResizeObserver(resize);
    const handleVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      if (reducedMotion) {
        stop();
        render(performance.now());
      } else {
        start();
      }
    };

    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener("change", handleMotionPreference);
    resize();

    if (reducedMotion) render(performance.now());
    else start();

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", handleMotionPreference);
      geometry.remove();
      program.remove();
      canvas.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className="hero-particle-field" aria-hidden="true" />;
}
