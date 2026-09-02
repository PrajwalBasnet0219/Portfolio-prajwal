(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/background/LightTunnel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const hexToRgb = (hex)=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [
        1,
        1,
        1
    ];
    return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
    ];
};
const vertex = "#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
const fragment = "#version 300 es\nprecision highp float;\nuniform vec2 iResolution;\nuniform float iTime;\nuniform float uSpeed;\nuniform float uFlowDir;\nuniform float uPulseSpeed;\nuniform float uPulseLength;\nuniform float uPulseBlend;\nuniform float uPulseWidth;\nuniform float uCableCount;\nuniform float uThickness;\nuniform float uRimWidth;\nuniform float uWaviness;\nuniform float uSway;\nuniform float uSize;\nuniform vec2 uCenter;\nuniform vec2 uMouseOffset;\nuniform float uGlow;\nuniform float uFadeNear;\nuniform float uFadeFar;\nuniform float uBrightness;\nuniform float uColorVariance;\nuniform float uOpacity;\nuniform vec3 uCableColor;\nuniform vec3 uPulseColor;\nuniform vec3 uTunnelColor;\nuniform float uTunnelOpacity;\nuniform float uGrain;\nuniform float uGrainIntensity;\nuniform float uLightMode;\nout vec4 fragColor;\n\nvoid mainImage(out vec4 o, in vec2 fragCoord) {\n  float size = uSize * 2.0;\n  float flowDir = uFlowDir;\n  float speedBase = uSpeed * 4.0 * flowDir;\n  float waviness = uWaviness * 0.15;\n  float rotationOsc = uSway * 0.5;\n  float baseThick = uThickness * 0.35 + 0.05;\n  float borderWeight = uRimWidth * 0.15 + 0.01;\n  float cablesCount = floor(uCableCount);\n\n  vec2 res = iResolution.xy;\n  vec2 uv = (fragCoord - 0.5 * res) / min(res.y, res.x);\n  uv -= (uCenter + uMouseOffset);\n  uv /= (size + 0.0001);\n\n  float r = length(uv);\n  float angle = atan(uv.y, uv.x);\n  float depth = -log(r + 0.0001);\n\n  float swing = sin(iTime * (uSpeed * 0.5 + 0.1)) * rotationOsc;\n  float waveOffset = sin(depth * 1.2 + iTime * speedBase * 0.25) * waviness;\n\n  float angleNormalized = (angle / 6.2831853) + 0.5;\n  float finalAngle = fract(angleNormalized + waveOffset + swing);\n\n  float cableID = floor(finalAngle * cablesCount);\n  float gvX = (fract(finalAngle * cablesCount) - 0.5);\n\n  float rand = fract(sin(cableID * 12.9898) * 43758.5453);\n  float randSpeed = (0.4 + rand * 0.6) * speedBase * uPulseSpeed;\n  float cableThick = baseThick * (0.6 + rand * 0.4);\n\n  vec3 cableCol = uCableColor;\n  cableCol *= 1.0 + (rand - 0.5) * 0.4 * uColorVariance;\n  cableCol = mix(cableCol, uPulseColor, rand * 0.25 * uColorVariance);\n\n  // small color glitch — 1-3 random tunnels, white OR black per tunnel, 2sec with per-tunnel delay when >1\n  float glitchCycle = floor(iTime * 0.45); // 2.22s cycle\n  float glitchSeed = fract(sin(cableID * 78.233 + glitchCycle * 19.19) * 43758.5453);\n  float glitchActive = step(0.82, glitchSeed); // ~18% of 18 => ~3, 1-3 random\n  // per-cable stagger so multi-glitch doesn't fire together — 0-0.42s delay\n  float perCableDelay = fract(cableID * 0.37 + glitchSeed * 0.51) * 0.42;\n  float glitchTime = fract(iTime * 0.45 + perCableDelay);\n  float glitchWindow = step(glitchTime, 0.88); // 0.88/0.45=1.95s ≈2s, now per-cable offset\n  glitchActive *= glitchWindow;\n  float glitchStrength = glitchActive * 0.96;\n  // per-tunnel pick white or black (not both)\n  float colorPick = fract(sin(cableID * 54.32 + glitchCycle * 7.77) * 43758.54);\n  vec3 glitchCol = colorPick < 0.5 ? vec3(1.0) : vec3(0.02);\n  cableCol = mix(cableCol, glitchCol, glitchStrength * 0.98);\n\n  float scroll = depth + (iTime * randSpeed);\n  float pulseFact = fract(scroll);\n\n  float distToCore = abs(gvX);\n  float wireMask = smoothstep(cableThick, cableThick - 0.05, distToCore);\n  float rimGlow = smoothstep(borderWeight, 0.0, abs(distToCore - cableThick));\n\n  float pulseThick = cableThick * uPulseWidth;\n  float pulseMask = smoothstep(pulseThick, pulseThick - 0.05 * uPulseWidth, distToCore);\n\n  float pulseDist = abs(pulseFact - 0.5);\n  float pulseTotal = uPulseLength;\n  float pulseCore = pulseTotal * (1.0 - uPulseBlend);\n  float pulseLo = min(pulseCore, pulseTotal - max(fwidth(scroll), 1e-4));\n  float dataPulse = 1.0 - smoothstep(pulseLo, pulseTotal, pulseDist);\n\n  // flicker for glitching tunnels — slowed\n  float pulseFlicker = 1.0;\n  if (glitchActive > 0.5) {\n    float flickSeed = fract(sin(floor(iTime * 5.0) * 12.9898 + cableID * 78.233) * 43758.54);\n    float strobe = step(0.45, fract(sin(iTime * 7.0 + cableID * 5.3) * 9.11));\n    pulseFlicker = 0.45 + 0.55 * strobe + 0.22 * flickSeed;\n    float slowFlick = step(0.5, fract(sin(iTime * 8.5 + cableID * 7.1) * 12.9898));\n    pulseFlicker *= 0.68 + 0.32 * slowFlick;\n  }\n  float dataPulseFlick = dataPulse * pulseFlicker;\n\n  float aBody = wireMask * uTunnelOpacity;\n  float aRim = rimGlow;\n  float aPulse = clamp(dataPulseFlick * pulseMask, 0.0, 1.0);\n\n  vec3 pulseColEff = mix(uPulseColor, glitchCol, glitchStrength * 0.97);\n  vec3 fiberCol = uTunnelColor * aBody\n    + cableCol * aRim * 1.3 * uGlow\n    + pulseColEff * dataPulseFlick * 3.8 * pulseMask * (1.0 + glitchActive * 0.9);\n\n  float distFade = smoothstep(0.0, uFadeNear, r) * smoothstep(uFadeFar, uFadeFar - 0.9, r);\n  float inten = clamp(aBody + aRim + aPulse, 0.0, 1.0) * distFade;\n\n  vec3 finalCol = fiberCol * uBrightness;\n  float alpha = clamp(inten, 0.0, 1.0) * uOpacity;\n  vec3 outRgb = finalCol * alpha;\n\n  if (uGrain > 0.5) {\n    float gv = (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + iTime) * 43758.5453) - 0.5) * uGrainIntensity;\n    outRgb = clamp(outRgb + gv, 0.0, 1.0);\n    alpha = clamp(alpha + gv, 0.0, 1.0);\n  }\n\n  o = vec4(outRgb, alpha);\n}\n\nvoid main() {\n  vec4 o = vec4(0.0);\n  mainImage(o, gl_FragCoord.xy);\n  if (uLightMode > 0.5) {\n    float peak = max(o.r, max(o.g, o.b));\n    vec3 chroma = pow(clamp(o.rgb / max(peak, 0.0001), 0.0, 1.0), vec3(1.16));\n    fragColor = vec4(mix(vec3(1.0), chroma, o.a * 0.95), 1.0);\n  } else {\n    fragColor = o;\n  }\n}\n";
const ctxMap = new WeakMap();
const LightTunnel = (param)=>{
    let { cableColor = '#A855F7', pulseColor = '#A855F7', tunnelColor = '#5227FF', tunnelOpacity = 0, speed = 0.1, flowDirection = 'outward', pulseSpeed = 2, pulseLength = 0.28, pulseBlend = 1, pulseWidth = 1, cableCount = 20, thickness = 0.35, rimWidth = 0.15, waviness = 0.3, sway = 0.5, size = 1.0, centerX = 0.0, centerY = 0.0, glow = 1.0, fadeNear = 0.5, fadeFar = 2, brightness = 1.0, colorVariance = true, grain = true, grainIntensity = 0.05, opacity = 1.0, mouseInteraction = true, mouseStrength = 0.1, lightMode = false, className = '' } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseEnabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mouseInteraction);
    const mouseStrengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(mouseStrength);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightTunnel.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if ("object" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const isMobile = "object" !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                webgl: 2,
                alpha: true,
                premultipliedAlpha: true,
                antialias: !isMobile,
                dpr: isMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5)
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            const canvas = gl.canvas;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.display = 'block';
            container.appendChild(canvas);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex,
                fragment,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new Float32Array([
                            1,
                            1
                        ])
                    },
                    uSpeed: {
                        value: 0.1
                    },
                    uFlowDir: {
                        value: -1.0
                    },
                    uPulseSpeed: {
                        value: 2.0
                    },
                    uPulseLength: {
                        value: 0.28
                    },
                    uPulseBlend: {
                        value: 1.0
                    },
                    uPulseWidth: {
                        value: 1.0
                    },
                    uCableCount: {
                        value: 20
                    },
                    uThickness: {
                        value: 0.35
                    },
                    uRimWidth: {
                        value: 0.15
                    },
                    uWaviness: {
                        value: 0.3
                    },
                    uSway: {
                        value: 0.5
                    },
                    uSize: {
                        value: 1.0
                    },
                    uCenter: {
                        value: new Float32Array([
                            0,
                            0
                        ])
                    },
                    uMouseOffset: {
                        value: new Float32Array([
                            0,
                            0
                        ])
                    },
                    uGlow: {
                        value: 1.0
                    },
                    uFadeNear: {
                        value: 0.5
                    },
                    uFadeFar: {
                        value: 2.0
                    },
                    uBrightness: {
                        value: 1.0
                    },
                    uColorVariance: {
                        value: 1.0
                    },
                    uOpacity: {
                        value: 1.0
                    },
                    uCableColor: {
                        value: new Float32Array([
                            0.65882353,
                            0.33333333,
                            0.96862745
                        ])
                    },
                    uPulseColor: {
                        value: new Float32Array([
                            0.65882353,
                            0.33333333,
                            0.96862745
                        ])
                    },
                    uTunnelColor: {
                        value: new Float32Array([
                            0.32156863,
                            0.15294118,
                            1
                        ])
                    },
                    uTunnelOpacity: {
                        value: 0.0
                    },
                    uGrain: {
                        value: 1.0
                    },
                    uGrainIntensity: {
                        value: 0.05
                    },
                    uLightMode: {
                        value: 0.0
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            ctxMap.set(container, {
                renderer,
                program,
                mesh
            });
            const setSize = {
                "LightTunnel.useEffect.setSize": ()=>{
                    const rect = container.getBoundingClientRect();
                    const w = Math.max(1, Math.floor(rect.width));
                    const h = Math.max(1, Math.floor(rect.height));
                    renderer.setSize(w, h);
                    const res = program.uniforms.iResolution.value;
                    res[0] = gl.drawingBufferWidth;
                    res[1] = gl.drawingBufferHeight;
                    renderer.render({
                        scene: mesh
                    });
                }
            }["LightTunnel.useEffect.setSize"];
            const ro = new ResizeObserver(setSize);
            ro.observe(container);
            setSize();
            let currentMouse = [
                0.5,
                0.5
            ];
            let targetMouse = [
                0.5,
                0.5
            ];
            const handleMouseMove = {
                "LightTunnel.useEffect.handleMouseMove": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    targetMouse = [
                        (e.clientX - rect.left) / rect.width,
                        1.0 - (e.clientY - rect.top) / rect.height
                    ];
                }
            }["LightTunnel.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "LightTunnel.useEffect.handleMouseLeave": ()=>{
                    targetMouse = [
                        0.5,
                        0.5
                    ];
                }
            }["LightTunnel.useEffect.handleMouseLeave"];
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseleave', handleMouseLeave);
            let raf = 0;
            let isVisible = true;
            let isPageVisible = !document.hidden;
            const t0 = performance.now();
            const loop = {
                "LightTunnel.useEffect.loop": (t)=>{
                    program.uniforms.iTime.value = (t - t0) * 0.001;
                    if (mouseEnabledRef.current) {
                        currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
                        currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
                    } else {
                        currentMouse[0] += 0.05 * (0.5 - currentMouse[0]);
                        currentMouse[1] += 0.05 * (0.5 - currentMouse[1]);
                    }
                    const off = program.uniforms.uMouseOffset.value;
                    off[0] = (currentMouse[0] - 0.5) * mouseStrengthRef.current;
                    off[1] = (currentMouse[1] - 0.5) * mouseStrengthRef.current;
                    renderer.render({
                        scene: mesh
                    });
                    raf = requestAnimationFrame(loop);
                }
            }["LightTunnel.useEffect.loop"];
            const tryStart = {
                "LightTunnel.useEffect.tryStart": ()=>{
                    if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
                }
            }["LightTunnel.useEffect.tryStart"];
            const tryStop = {
                "LightTunnel.useEffect.tryStop": ()=>{
                    if (raf !== 0) {
                        cancelAnimationFrame(raf);
                        raf = 0;
                    }
                }
            }["LightTunnel.useEffect.tryStop"];
            const io = new IntersectionObserver({
                "LightTunnel.useEffect": (param)=>{
                    let [entry] = param;
                    isVisible = entry.isIntersecting;
                    isVisible ? tryStart() : tryStop();
                }
            }["LightTunnel.useEffect"], {
                threshold: 0
            });
            io.observe(container);
            const onVisibility = {
                "LightTunnel.useEffect.onVisibility": ()=>{
                    isPageVisible = !document.hidden;
                    isPageVisible ? tryStart() : tryStop();
                }
            }["LightTunnel.useEffect.onVisibility"];
            document.addEventListener('visibilitychange', onVisibility);
            tryStart();
            return ({
                "LightTunnel.useEffect": ()=>{
                    var _gl_getExtension;
                    tryStop();
                    ro.disconnect();
                    io.disconnect();
                    document.removeEventListener('visibilitychange', onVisibility);
                    canvas.removeEventListener('mousemove', handleMouseMove);
                    canvas.removeEventListener('mouseleave', handleMouseLeave);
                    ctxMap.delete(container);
                    try {
                        container.removeChild(canvas);
                    } catch (e) {}
                    (_gl_getExtension = gl.getExtension('WEBGL_lose_context')) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.loseContext();
                }
            })["LightTunnel.useEffect"];
        }
    }["LightTunnel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LightTunnel.useEffect": ()=>{
            mouseEnabledRef.current = mouseInteraction;
            mouseStrengthRef.current = mouseStrength;
            const container = containerRef.current;
            if (!container) return;
            const ctx = ctxMap.get(container);
            if (!ctx) return;
            const { program } = ctx;
            const u = program.uniforms;
            u.uSpeed.value = speed;
            u.uFlowDir.value = flowDirection === 'outward' ? -1.0 : 1.0;
            u.uPulseSpeed.value = pulseSpeed;
            u.uPulseLength.value = pulseLength;
            u.uPulseBlend.value = pulseBlend;
            u.uPulseWidth.value = pulseWidth;
            u.uCableCount.value = cableCount;
            u.uThickness.value = thickness;
            u.uRimWidth.value = rimWidth;
            u.uWaviness.value = waviness;
            u.uSway.value = sway;
            u.uSize.value = size;
            const center = u.uCenter.value;
            center[0] = centerX;
            center[1] = centerY;
            u.uGlow.value = glow;
            u.uFadeNear.value = fadeNear;
            u.uFadeFar.value = fadeFar;
            u.uBrightness.value = brightness;
            u.uColorVariance.value = colorVariance ? 1.0 : 0.0;
            u.uGrain.value = grain ? 1.0 : 0.0;
            u.uGrainIntensity.value = grainIntensity;
            u.uOpacity.value = opacity;
            u.uLightMode.value = lightMode ? 1.0 : 0.0;
            const cable = hexToRgb(cableColor);
            const cableU = u.uCableColor.value;
            cableU[0] = cable[0];
            cableU[1] = cable[1];
            cableU[2] = cable[2];
            const pulse = hexToRgb(pulseColor);
            const pulseU = u.uPulseColor.value;
            pulseU[0] = pulse[0];
            pulseU[1] = pulse[1];
            pulseU[2] = pulse[2];
            const tunnel = hexToRgb(tunnelColor);
            const tunnelU = u.uTunnelColor.value;
            tunnelU[0] = tunnel[0];
            tunnelU[1] = tunnel[1];
            tunnelU[2] = tunnel[2];
            u.uTunnelOpacity.value = tunnelOpacity;
        }
    }["LightTunnel.useEffect"], [
        cableColor,
        pulseColor,
        tunnelColor,
        tunnelOpacity,
        speed,
        flowDirection,
        pulseSpeed,
        pulseLength,
        pulseBlend,
        pulseWidth,
        cableCount,
        thickness,
        rimWidth,
        waviness,
        sway,
        size,
        centerX,
        centerY,
        glow,
        fadeNear,
        fadeFar,
        brightness,
        colorVariance,
        grain,
        grainIntensity,
        opacity,
        mouseInteraction,
        mouseStrength,
        lightMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "light-tunnel-container ".concat(className).trim()
    }, void 0, false, {
        fileName: "[project]/components/background/LightTunnel.tsx",
        lineNumber: 484,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LightTunnel, "tiAQmwcQ/EhsSKKoOW02pTIfDcc=");
_c = LightTunnel;
const __TURBOPACK__default__export__ = LightTunnel;
var _c;
__turbopack_context__.k.register(_c, "LightTunnel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/background/LightTunnel.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/background/LightTunnel.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_background_LightTunnel_tsx_ba4881ee._.js.map