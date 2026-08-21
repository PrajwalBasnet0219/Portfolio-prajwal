"use client";

import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useMemo, useCallback } from "react";
import type { CSSProperties } from "react";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;

uniform vec2  uGridMul;
uniform float uDigitSize;
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uTint;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;
uniform float uPageLoadProgress;
uniform float uUsePageLoadAnimation;
uniform float uBrightness;
uniform float uZoom;
uniform float uShake;
uniform float uGlitchFlash;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p)
{
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2;
}

mat2 rotate(float angle)
{
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p)
{
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp;

  mat2 modify0 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.454545;

  mat2 modify1 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify1 * p * 2.0;
  amp *= 0.454545;

  mat2 modify2 = rotate(time * 0.08);
  f += amp * noise(p);

  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  vec2 offset1 = vec2(1.0);
  vec2 offset0 = vec2(0.0);
  mat2 rot01 = rotate(0.1 * time);
  mat2 rot1 = rotate(0.1);

  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));
  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));
  return fbm(p + r);
}

float digit(vec2 p){
    vec2 grid = uGridMul * 15.0;
    vec2 s = floor(p * grid) / grid;
    p = p * grid;
    vec2 q, r;
    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;

    if(uUseMouse > 0.5){
        vec2 mouseWorld = uScale * (0.5 + (uMouse - 0.5) / uZoom);
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;
        intensity += mouseInfluence;

        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }

    if(uUsePageLoadAnimation > 0.5){
        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);
        float cellDelay = cellRandom * 0.8;
        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);

        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);
        intensity *= fadeAlpha;
    }

    p = fract(p);
    p *= uDigitSize;

    float px5 = p.x * 5.0;
    float py5 = (1.0 - p.y) * 5.0;
    float x = fract(px5);
    float y = fract(py5);

    float i = floor(py5) - 2.0;
    float j = floor(px5) - 2.0;
    float n = i * i + j * j;
    float f = n * 0.0625;

    float isOn = step(0.1, intensity - f);
    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);

    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;
}

float onOff(float a, float b, float c)
{
  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;
}

float displace(vec2 look)
{
    float y = look.y - mod(iTime * 0.25, 1.0);
    float window = 1.0 / (1.0 + 50.0 * y * y);
    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;
}

float redCell(vec2 p) {
    // Per-cell random that decides whether this digit box lights up red.
    vec2 grid = uGridMul * 15.0;
    vec2 cell = floor(p * grid);
    float cellRand = hash21(cell);

    // Red bursts arrive in random sequences (~15-20% of the time).
    float rTime = iTime * 1.5;
    float seqId = floor(rTime);
    float seqRand = hash21(vec2(seqId, 91.7));
    float redActive = max(step(0.82, seqRand), uGlitchFlash);
    float seqFrac = fract(rTime);
    float redPulse = smoothstep(0.0, 0.25, seqFrac) * (1.0 - smoothstep(0.6, 0.9, seqFrac));

    // Only a fraction of the digit boxes turn red within a burst.
    return redActive * redPulse * step(0.75, cellRand);
}

vec3 getColor(vec2 p){

    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;
    bar *= uScanlineIntensity;

    float displacement = displace(p);
    p.x += displacement;

    if (uGlitchAmount != 1.0) {
      float extra = displacement * (uGlitchAmount - 1.0);
      p.x += extra;
    }

    float middle = digit(p);

    const float off = 0.002;
    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +
                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +
                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));

    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;

    // Red corruption — some digit boxes turn red instead of gray/white, and
    // the monitor glitch (black & white static) is confined to those boxes.
    float red = redCell(p);
    if (red > 0.001) {
        vec2 grid = uGridMul * 15.0;
        vec2 cell = floor(p * grid);
        vec2 cellAnim = cell + vec2(floor(iTime * 30.0), floor(iTime * 12.0));

        // Red version of the digit
        vec3 redCol = vec3(0.95, 0.06, 0.09) * (middle + sum * 0.1 * bar);

        // Black & white monitor glitch flicker
        float bwRand = hash21(cellAnim);
        vec3 bw = vec3(step(0.5, bwRand));
        float glitchOn = max(step(0.4, hash21(cell + vec2(floor(iTime * 7.0), 3.7))), uGlitchFlash * 0.9);

        vec3 corrupt = mix(redCol, bw, glitchOn * 0.85);
        baseColor = mix(baseColor, corrupt, red);
    }

    return baseColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }

    // Small jitter shake while the user is typing
    if (uShake > 0.0) {
      float tFrame = floor(iTime * 40.0);
      uv.x += (hash21(vec2(tFrame, 1.0)) - 0.5) * uShake * 0.04;
      uv.y += (hash21(vec2(tFrame, 2.0)) - 0.5) * uShake * 0.04;
    }

    // Zoom toward the viewer from the screen center — cells grow outward
    // from the middle instead of the bottom-left corner.
    vec2 p = uScale * (0.5 + (uv - 0.5) / uZoom);
    vec3 col = getColor(p);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      col.r = getColor(p + ca).r;
      col.b = getColor(p - ca).b;
    }

    col *= uTint;
    col *= uBrightness;

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const num = parseInt(h.slice(0, 6), 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

interface FaultyTerminalProps {
  scale?: number;
  gridMul?: number[];
  digitSize?: number;
  timeScale?: number;
  pause?: boolean;
  scanlineIntensity?: number;
  glitchAmount?: number;
  flickerAmount?: number;
  noiseAmp?: number;
  chromaticAberration?: number;
  dither?: number | boolean;
  curvature?: number;
  tint?: string;
  mouseReact?: boolean;
  mouseStrength?: number;
  dpr?: number;
  pageLoadAnimation?: boolean;
  brightness?: number;
  /** Smoothly zoom the pattern toward the viewer while the user types. */
  typing?: boolean;
  /** Shake intensity 0..1 applied while typing. */
  shake?: number;
  /** Increment to fire a ~2s glitch burst (e.g. blank form submit). */
  glitchTrigger?: number;
  /** Running count of keystrokes; each one nudges the zoom-in slightly. */
  typeCount?: number;
  className?: string;
  style?: CSSProperties;
}

const ZOOM_MAX = 7;

export default function FaultyTerminal({
  scale = 1,
  gridMul = [2, 1],
  digitSize = 1.5,
  timeScale = 0.3,
  pause = false,
  scanlineIntensity = 0.3,
  glitchAmount = 1,
  flickerAmount = 1,
  noiseAmp = 1,
  chromaticAberration = 0,
  dither = 0,
  curvature = 0.2,
  tint = "#ffffff",
  mouseReact = true,
  mouseStrength = 0.2,
  dpr,
  pageLoadAnimation = true,
  brightness = 1,
  typing = false,
  shake = 0,
  glitchTrigger = 0,
  typeCount = 0,
  className,
  style,
}: FaultyTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<Program>(null);
  const rendererRef = useRef<Renderer>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const frozenTimeRef = useRef(0);
  const rafRef = useRef(0);
  const loadAnimationStartRef = useRef(0);
  const timeOffsetRef = useRef(Math.random() * 100);

  const effectiveDpr =
    dpr ??
    (typeof window === "undefined"
      ? 1
      : Math.min(window.devicePixelRatio || 1, 2));

  const tintVec = useMemo(() => hexToRgb(tint), [tint]);

  // Stable content-based reference so parent re-renders (e.g. typing in the
  // contact form) never re-run the WebGL effect and restart the animation.
  const gridUniform = useMemo(
    () => new Float32Array([gridMul[0] ?? 2, gridMul[1] ?? 1]),
    [gridMul[0], gridMul[1]]
  );

  // Dynamic, high-frequency props are read via refs so the effect stays mounted.
  const typingRef = useRef(typing);
  typingRef.current = typing;
  const shakeRef = useRef(shake);
  shakeRef.current = shake;
  const glitchTriggerRef = useRef(glitchTrigger);
  glitchTriggerRef.current = glitchTrigger;
  const typeCountRef = useRef(typeCount);
  typeCountRef.current = typeCount;

  const ditherValue = useMemo(
    () => (typeof dither === "boolean" ? (dither ? 1 : 0) : dither),
    [dither]
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const ctn = containerRef.current;
    if (!ctn) return;
    const rect = ctn.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1 - (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x, y };
  }, []);

  useEffect(() => {
    const ctn = containerRef.current;
    if (!ctn) return;

    const renderer = new Renderer({ dpr: effectiveDpr });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uScale: { value: scale },

        uGridMul: { value: gridUniform },
        uDigitSize: { value: digitSize },
        uScanlineIntensity: { value: scanlineIntensity },
        uGlitchAmount: { value: glitchAmount },
        uFlickerAmount: { value: flickerAmount },
        uNoiseAmp: { value: noiseAmp },
        uChromaticAberration: { value: chromaticAberration },
        uDither: { value: ditherValue },
        uCurvature: { value: curvature },
        uTint: {
          value: new Color(tintVec[0], tintVec[1], tintVec[2]),
        },
        uMouse: {
          value: new Float32Array([
            smoothMouseRef.current.x,
            smoothMouseRef.current.y,
          ]),
        },
        uMouseStrength: { value: mouseStrength },
        uUseMouse: { value: mouseReact ? 1 : 0 },
        uPageLoadProgress: { value: pageLoadAnimation ? 0 : 1 },
        uUsePageLoadAnimation: { value: pageLoadAnimation ? 1 : 0 },
        uBrightness: { value: brightness },
        uZoom: { value: 1 },
        uShake: { value: 0 },
        uGlitchFlash: { value: 0 },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });

    // Zoom / shake / glitch-burst state, driven from refs so re-renders
    // (typing) never tear down the GL context.
    const zoomCur = { value: 1 };
    const flashVal = { value: 0 };
    const flashTimer = { value: 0 };
    const prevGlitchTrigger = { value: glitchTriggerRef.current };
    const prevTypeCount = { value: typeCountRef.current };
    let lastFrameT = 0;

    function resize() {
      if (!ctn || !renderer) return;
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      program.uniforms.iResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(ctn);
    resize();

    const update = (t: number) => {
      rafRef.current = requestAnimationFrame(update);

      if (pageLoadAnimation && loadAnimationStartRef.current === 0) {
        loadAnimationStartRef.current = t;
      }

      if (!pause) {
        const elapsed = (t * 0.001 + timeOffsetRef.current) * timeScale;
        program.uniforms.iTime.value = elapsed;
        frozenTimeRef.current = elapsed;
      } else {
        program.uniforms.iTime.value = frozenTimeRef.current;
      }

      if (pageLoadAnimation && loadAnimationStartRef.current > 0) {
        const animationDuration = 2000;
        const animationElapsed = t - loadAnimationStartRef.current;
        const progress = Math.min(animationElapsed / animationDuration, 1);
        program.uniforms.uPageLoadProgress.value = progress;
      }

      if (mouseReact) {
        const dampingFactor = 0.08;
        const smoothMouse = smoothMouseRef.current;
        const mouse = mouseRef.current;
        smoothMouse.x += (mouse.x - smoothMouse.x) * dampingFactor;
        smoothMouse.y += (mouse.y - smoothMouse.y) * dampingFactor;

        const mouseUniform = program.uniforms.uMouse.value as Float32Array;
        mouseUniform[0] = smoothMouse.x;
        mouseUniform[1] = smoothMouse.y;
      }

      const dt = lastFrameT === 0 ? 0.016 : (t - lastFrameT) / 1000;
      lastFrameT = t;

      // Zoom is driven per keystroke: each typed character nudges the pattern
      // closer to the viewer by a tiny amount, so a single word barely moves
      // it and it takes a long stretch of typing to reach ZOOM_MAX. When
      // typing stops, it drifts back out at normal speed.
      if (typeCountRef.current !== prevTypeCount.value) {
        prevTypeCount.value = typeCountRef.current;
        zoomCur.value += (ZOOM_MAX - zoomCur.value) * 0.006;
      }
      if (!typingRef.current) {
        zoomCur.value += (1 - zoomCur.value) * 0.07;
      }
      program.uniforms.uZoom.value = zoomCur.value;

      // Small shake while typing.
      program.uniforms.uShake.value = typingRef.current
        ? Math.min(Math.max(shakeRef.current, 0), 1)
        : 0;

      // ~2s glitch burst (e.g. blank form submit).
      if (glitchTriggerRef.current !== prevGlitchTrigger.value) {
        prevGlitchTrigger.value = glitchTriggerRef.current;
        flashVal.value = 1;
        flashTimer.value = 2.0;
      }
      if (flashTimer.value > 0) {
        flashTimer.value -= dt;
        if (flashTimer.value <= 0) flashVal.value = 0;
      }
      program.uniforms.uGlitchFlash.value = flashVal.value;

      renderer.render({ scene: mesh });
    };
    rafRef.current = requestAnimationFrame(update);
    ctn.appendChild(gl.canvas);

    if (mouseReact) ctn.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      if (mouseReact) ctn.removeEventListener("mousemove", handleMouseMove);
      if (gl.canvas.parentElement === ctn) ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      loadAnimationStartRef.current = 0;
      timeOffsetRef.current = Math.random() * 100;
    };
  }, [
    effectiveDpr,
    pause,
    timeScale,
    scale,
    gridUniform,
    digitSize,
    scanlineIntensity,
    glitchAmount,
    flickerAmount,
    noiseAmp,
    chromaticAberration,
    ditherValue,
    curvature,
    tintVec,
    mouseReact,
    mouseStrength,
    pageLoadAnimation,
    brightness,
    handleMouseMove,
  ]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className ?? ""}`.trim()}
      style={style}
    />
  );
}