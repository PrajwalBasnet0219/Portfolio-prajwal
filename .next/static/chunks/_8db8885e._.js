(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/cursor/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const isGridHoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hoveredElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridHoverSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Disable custom cursor on touch/mobile — native cursor + save CPU/battery
            if ("object" !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768)) return;
            const dot = dotRef.current;
            const ring = ringRef.current;
            if (!dot || !ring) return;
            const gridSelector = ".skill-card, .exp-item, .contact-info-card";
            const controlSelector = "button, a, input, textarea, [contenteditable]";
            const updateRingForHover = {
                "CustomCursor.useEffect.updateRingForHover": (el, isGrid)=>{
                    if (!ring) return;
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        const pad = isGrid ? 14 : 8;
                        const w = rect.width + pad * 2;
                        const h = rect.height + pad * 2;
                        const radius = isGrid ? "16px" : "10px";
                        gridHoverSizeRef.current = {
                            w,
                            h,
                            radius
                        };
                        isGridHoverRef.current = true;
                        hoveredElRef.current = el;
                        // transparent background for rectangle bracket [ (grid box) ] or [button/input] — really fast
                        ring.style.background = "transparent";
                        ring.style.boxShadow = "none";
                        ring.style.borderWidth = "1px";
                        ring.style.borderColor = isGrid ? "rgba(221,221,221,0.9)" : "rgba(221,221,221,0.85)";
                        ring.style.width = "".concat(w, "px");
                        ring.style.height = "".concat(h, "px");
                        ring.style.borderRadius = radius;
                        dot.style.opacity = "0.7";
                    } else {
                        isGridHoverRef.current = false;
                        hoveredElRef.current = null;
                        gridHoverSizeRef.current = null;
                        ring.style.background = "transparent";
                        ring.style.boxShadow = "none";
                        ring.style.borderWidth = "1px";
                        ring.style.borderColor = "rgba(221,221,221,0.35)";
                        ring.style.width = "";
                        ring.style.height = "";
                        ring.style.borderRadius = "";
                        dot.style.opacity = "";
                    }
                }
            }["CustomCursor.useEffect.updateRingForHover"];
            const onPointerOver = {
                "CustomCursor.useEffect.onPointerOver": (e)=>{
                    const target = e.target;
                    const gridEl = target.closest(gridSelector);
                    if (gridEl) {
                        if (gridEl !== hoveredElRef.current) updateRingForHover(gridEl, true);
                        return;
                    }
                    const controlEl = target.closest(controlSelector);
                    if (controlEl && controlEl !== hoveredElRef.current) {
                        updateRingForHover(controlEl, false);
                        return;
                    }
                    if (hoveredElRef.current) {
                        const stillOver = target.closest("".concat(gridSelector, ", ").concat(controlSelector));
                        if (!stillOver) updateRingForHover(null, false);
                    }
                }
            }["CustomCursor.useEffect.onPointerOver"];
            const onMouseMove = {
                "CustomCursor.useEffect.onMouseMove": (e)=>{
                    targetRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    // If hovering grid, keep ring centered on element, not cursor
                    if (isGridHoverRef.current && hoveredElRef.current) {
                        const rect = hoveredElRef.current.getBoundingClientRect();
                        const cx = rect.left + rect.width / 2;
                        const cy = rect.top + rect.height / 2;
                    // Override target for ring to snap to box center
                    // Keep dot at cursor, ring at box center — we handle in animate loop via direct set when isGridHover
                    }
                }
            }["CustomCursor.useEffect.onMouseMove"];
            // Legacy hover handling for non-grid interactive (keeps original dot/ring behavior if needed)
            const onMouseEnterInteractive = {
                "CustomCursor.useEffect.onMouseEnterInteractive": ()=>{
                    if (!isGridHoverRef.current) ring.classList.add("hovering");
                }
            }["CustomCursor.useEffect.onMouseEnterInteractive"];
            const onMouseLeaveInteractive = {
                "CustomCursor.useEffect.onMouseLeaveInteractive": ()=>{
                    if (!isGridHoverRef.current) ring.classList.remove("hovering");
                }
            }["CustomCursor.useEffect.onMouseLeaveInteractive"];
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("pointerover", onPointerOver);
            window.addEventListener("pointerout", onPointerOver);
            // Fallback for older [data-cursor-hover] handling (kept for compatibility)
            const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
            interactiveElements.forEach({
                "CustomCursor.useEffect": (el)=>{
                    el.addEventListener("mouseenter", onMouseEnterInteractive);
                    el.addEventListener("mouseleave", onMouseLeaveInteractive);
                }
            }["CustomCursor.useEffect"]);
            let rafId;
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    // dot always follows cursor (snappy)
                    dot.style.transform = "translate(".concat(targetRef.current.x - 3, "px, ").concat(targetRef.current.y - 3, "px)");
                    let rx, ry;
                    if (isGridHoverRef.current && hoveredElRef.current) {
                        // Ring smoothly glides to hovered box center — very smooth bracket [ (grid box) ]
                        const rect = hoveredElRef.current.getBoundingClientRect();
                        rx = rect.left + rect.width / 2;
                        ry = rect.top + rect.height / 2;
                    } else {
                        rx = targetRef.current.x;
                        ry = targetRef.current.y;
                    }
                    // really fast — snaps to box without lag
                    posRef.current.x += (rx - posRef.current.x) * 0.38;
                    posRef.current.y += (ry - posRef.current.y) * 0.38;
                    ring.style.transform = "translate3d(".concat(posRef.current.x, "px, ").concat(posRef.current.y, "px, 0) translate(-50%, -50%)");
                    rafId = requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            animate();
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("pointerover", onPointerOver);
                    window.removeEventListener("pointerout", onPointerOver);
                    cancelAnimationFrame(rafId);
                    interactiveElements.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener("mouseenter", onMouseEnterInteractive);
                            el.removeEventListener("mouseleave", onMouseLeaveInteractive);
                        }
                    }["CustomCursor.useEffect"]);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "cursor-dot hidden md:block"
            }, void 0, false, {
                fileName: "[project]/components/cursor/CustomCursor.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "cursor-ring hidden md:block"
            }, void 0, false, {
                fileName: "[project]/components/cursor/CustomCursor.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "s+8pJ10n4ON/3SaFlOG1nM5bg6U=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/background/NoiseOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoiseOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function NoiseOverlay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/background/NoiseOverlay.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vignette"
            }, void 0, false, {
                fileName: "[project]/components/background/NoiseOverlay.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = NoiseOverlay;
var _c;
__turbopack_context__.k.register(_c, "NoiseOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lightswind/wavy-ripple-background.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WavyRippleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const VERTEX_SHADER = "#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}";
const FRAGMENT_SHADER = "#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform vec2 uResolution;\nuniform vec3 uWaveColor;\nuniform float uSpeed;\nuniform float uFrequency;\nuniform float uScale;\nuniform float uMaxOpacity;\n\nout vec4 fragColor;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / uResolution;\n  \n  // Center is locked to bottom-middle\n  vec2 center = vec2(0.5, 0.0);\n  \n  // Apply aspect ratio correction for perfect concentric circular arcs\n  float aspect = uResolution.x / uResolution.y;\n  vec2 dir = uv - center;\n  dir.x *= aspect;\n  float dist = length(dir);\n  \n  // Concentric wave angle\n  float angle = dist * uFrequency - uTime * uSpeed;\n  float wave = sin(angle);\n  float cosWave = cos(angle);\n  \n  // Map sin wave from [-1, 1] to [0, 1]\n  float normWave = wave * 0.5 + 0.5;\n  \n  // Shape the wave to be thick and pillowy (wide peaks, thin valleys)\n  float ringIntensity = pow(normWave, uScale);\n  \n  // High-fidelity 3D shading:\n  // Compute height derivative (slope)\n  float dH = uFrequency * cosWave * uScale * pow(normWave, max(0.01, uScale - 1.0)) * 0.5;\n  \n  // Radial normal mapping\n  vec2 normal2D = normalize(dir) * dH;\n  vec3 normal = normalize(vec3(normal2D.x, normal2D.y, 1.0));\n  \n  // Light from top-front\n  vec3 lightDir = normalize(vec3(0.0, 1.0, 0.8));\n  \n  // Diffuse illumination\n  float diffuse = max(0.0, dot(normal, lightDir));\n  \n  // Specular highlight for a glossy, premium plastic/glass finish\n  vec3 viewDir = vec3(0.0, 0.0, 1.0);\n  vec3 halfDir = normalize(lightDir + viewDir);\n  float specular = pow(max(0.0, dot(normal, halfDir)), 24.0) * 0.3;\n  \n  // Combine wave color with 3D highlights and shadows\n  vec3 litColor = uWaveColor * (0.35 + 0.65 * diffuse) + vec3(1.0) * specular;\n  \n  // Concentric half-ripple fade:\n  // Fade out as it expands higher up the screen (uv.y: 0.0 -> 1.0) and further radially\n  float distFade = smoothstep(0.85, 0.15, dist);\n  float heightFade = smoothstep(0.85, 0.15, uv.y);\n  \n  float alpha = ringIntensity * distFade * heightFade * uMaxOpacity;\n  \n  fragColor = vec4(litColor, alpha);\n}";
function WavyRippleBackground(param) {
    let { className = "", waveColor = "#3b82f6", backgroundColor = "transparent", speed = 0.8, frequency = 3.5, ringSharpness = 0.55, maxOpacity = 0.65 } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WavyRippleBackground.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if ("object" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const isMobile = "object" !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
            // Mobile: lower DPR + pause when offscreen saves GPU/battery
            const dpr = isMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true,
                antialias: !isMobile,
                dpr
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            if (geometry.attributes.uv) delete geometry.attributes.uv;
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: VERTEX_SHADER,
                fragment: FRAGMENT_SHADER,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uResolution: {
                        value: [
                            container.offsetWidth,
                            container.offsetHeight
                        ]
                    },
                    uWaveColor: {
                        value: ({
                            "WavyRippleBackground.useEffect": ()=>{
                                const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](waveColor);
                                return [
                                    c.r,
                                    c.g,
                                    c.b
                                ];
                            }
                        })["WavyRippleBackground.useEffect"]()
                    },
                    uSpeed: {
                        value: speed
                    },
                    uFrequency: {
                        value: frequency
                    },
                    uScale: {
                        value: ringSharpness
                    },
                    uMaxOpacity: {
                        value: maxOpacity
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            container.appendChild(gl.canvas);
            const resize = {
                "WavyRippleBackground.useEffect.resize": ()=>{
                    const w = container.offsetWidth;
                    const h = container.offsetHeight;
                    renderer.setSize(w, h);
                    program.uniforms.uResolution.value = [
                        w,
                        h
                    ];
                }
            }["WavyRippleBackground.useEffect.resize"];
            window.addEventListener("resize", resize);
            resize();
            let animationId;
            let isVisible = true;
            const io = new IntersectionObserver({
                "WavyRippleBackground.useEffect": (param)=>{
                    let [e] = param;
                    isVisible = e.isIntersecting;
                }
            }["WavyRippleBackground.useEffect"], {
                threshold: 0
            });
            io.observe(container);
            const animate = {
                "WavyRippleBackground.useEffect.animate": (time)=>{
                    animationId = requestAnimationFrame(animate);
                    if (!isVisible || document.hidden) return;
                    program.uniforms.uTime.value = time * 0.001;
                    program.uniforms.uWaveColor.value = ({
                        "WavyRippleBackground.useEffect.animate": ()=>{
                            const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](waveColor);
                            return [
                                c.r,
                                c.g,
                                c.b
                            ];
                        }
                    })["WavyRippleBackground.useEffect.animate"]();
                    program.uniforms.uSpeed.value = speed;
                    program.uniforms.uFrequency.value = frequency;
                    program.uniforms.uScale.value = ringSharpness;
                    program.uniforms.uMaxOpacity.value = maxOpacity;
                    renderer.render({
                        scene: mesh
                    });
                }
            }["WavyRippleBackground.useEffect.animate"];
            animate(0);
            const onVis = {
                "WavyRippleBackground.useEffect.onVis": ()=>{}
            }["WavyRippleBackground.useEffect.onVis"];
            document.addEventListener("visibilitychange", onVis);
            return ({
                "WavyRippleBackground.useEffect": ()=>{
                    var _gl_getExtension;
                    cancelAnimationFrame(animationId);
                    io.disconnect();
                    document.removeEventListener("visibilitychange", onVis);
                    window.removeEventListener("resize", resize);
                    if (gl.canvas.parentNode === container) {
                        container.removeChild(gl.canvas);
                    }
                    (_gl_getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.loseContext();
                }
            })["WavyRippleBackground.useEffect"];
        }
    }["WavyRippleBackground.useEffect"], [
        waveColor,
        speed,
        frequency,
        ringSharpness,
        maxOpacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 w-full h-full z-0 overflow-hidden ".concat(className),
        style: {
            backgroundColor
        }
    }, void 0, false, {
        fileName: "[project]/components/lightswind/wavy-ripple-background.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(WavyRippleBackground, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = WavyRippleBackground;
var _c;
__turbopack_context__.k.register(_c, "WavyRippleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cursor/FisheyeCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FisheyeCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * FisheyeCursor.tsx
 * ---------------------------------------------------------------------------
 * A cursor-following fisheye lens that ONLY warps whatever it wraps (the
 * background layer). Content rendered above it stays untouched.
 *
 * How it works: the wrapped background sits inside a div with an SVG
 * `feDisplacementMap` filter. The displacement map is a small offscreen canvas
 * redrawn each frame with a radial "sink" centered on the cursor — pixels near
 * the cursor are pulled toward the center (pushed outward) and blend smoothly to
 * nothing at the lens border, like content being pushed away from the cursor.
 *
 * A faint glowing ring marks the lens edge so the light-bending is visible.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FisheyeCursor(param) {
    let { className, children, strength = 110, radius = 380, mapScale = 5, damping = 0.16, ring = true, ringColor = "#ffffff" } = param;
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const filterId = "fisheye-".concat(rawId.replace(/[^a-zA-Z0-9_-]/g, ""));
    const isRectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hoveredElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoveredRectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mobile/touch: render children without displacement — saves GPU/battery
    if ("object" !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
    // This is checked again inside effect to avoid SSR mismatch; render passthrough
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FisheyeCursor.useEffect": ()=>{
            // Disable fisheye on touch, small screens, or reduced-motion — just show children unfiltered
            if ("object" !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
            const root = rootRef.current;
            if (!root) return;
            const target = {
                x: -9999,
                y: -9999
            };
            const current = {
                x: -9999,
                y: -9999
            };
            let moved = false;
            let lastEncoded = "";
            let raf = 0;
            // Only grid boxes become rectangle [ (grid box) ]; everything else stays circle
            const gridSelector = ".skill-card, .exp-item, .contact-info-card";
            const onPointerOver = {
                "FisheyeCursor.useEffect.onPointerOver": (e)=>{
                    var _targetEl_closest;
                    const targetEl = e.target;
                    const gridEl = targetEl === null || targetEl === void 0 ? void 0 : (_targetEl_closest = targetEl.closest) === null || _targetEl_closest === void 0 ? void 0 : _targetEl_closest.call(targetEl, gridSelector);
                    const shouldRect = !!gridEl;
                    const prevRect = isRectRef.current;
                    isRectRef.current = shouldRect;
                    hoveredElRef.current = gridEl;
                    if (shouldRect && gridEl) {
                        const rect = gridEl.getBoundingClientRect();
                        const rootRect = root.getBoundingClientRect();
                        const pad = 14;
                        const w = rect.width + pad * 2;
                        const h = rect.height + pad * 2;
                        hoveredRectRef.current = {
                            w,
                            h
                        };
                        // Lock lens to grid center — background will bend only outside the rectangle
                        target.x = rect.left + rect.width / 2 - rootRect.left;
                        target.y = rect.top + rect.height / 2 - rootRect.top;
                        if (ringRef.current) {
                            ringRef.current.style.width = "".concat(w, "px");
                            ringRef.current.style.height = "".concat(h, "px");
                            ringRef.current.style.borderRadius = "16px";
                            ringRef.current.style.opacity = "1";
                        }
                        if (!moved) {
                            moved = true;
                            current.x = target.x;
                            current.y = target.y;
                            rebuild();
                            updateRing();
                        }
                    } else if (!shouldRect && prevRect) {
                        hoveredRectRef.current = null;
                        hoveredElRef.current = null;
                        if (ringRef.current) {
                            ringRef.current.style.width = "".concat(radius * 2, "px");
                            ringRef.current.style.height = "".concat(radius * 2, "px");
                            ringRef.current.style.borderRadius = "50%";
                        }
                    }
                }
            }["FisheyeCursor.useEffect.onPointerOver"];
            window.addEventListener("pointerover", onPointerOver);
            window.addEventListener("pointerout", onPointerOver);
            const canvas = mapRef.current;
            const rebuild = {
                "FisheyeCursor.useEffect.rebuild": ()=>{
                    if (!canvas || !imageRef.current) return;
                    const rect = root.getBoundingClientRect();
                    const w = Math.max(1, Math.round(rect.width / mapScale));
                    const h = Math.max(1, Math.round(rect.height / mapScale));
                    if (canvas.width !== w) canvas.width = w;
                    if (canvas.height !== h) canvas.height = h;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) return;
                    const img = ctx.createImageData(w, h);
                    const data = img.data;
                    const cx = current.x / mapScale;
                    const cy = current.y / mapScale;
                    const r = radius / mapScale;
                    const isRect = isRectRef.current;
                    const hovered = hoveredRectRef.current;
                    const rectHalfW = hovered ? hovered.w / 2 / mapScale : 80 / mapScale;
                    const rectHalfH = hovered ? hovered.h / 2 / mapScale : 22 / mapScale;
                    for(let y = 0; y < h; y++){
                        for(let x = 0; x < w; x++){
                            const dx = x - cx;
                            const dy = y - cy;
                            const i = (y * w + x) * 4;
                            let fall = 0;
                            let nx = 0;
                            let ny = 0;
                            let inside = false;
                            if (isRect) {
                                const ax = Math.abs(dx) / (rectHalfW || 1);
                                const ay = Math.abs(dy) / (rectHalfH || 1);
                                const outerDist = Math.max(ax, ay);
                                // Only outside the rectangle bends — inside is pure grid content, no background warp
                                // Big radius edge: warp extends ~38% beyond border like air flowing around wall
                                if (outerDist < 1) {
                                    inside = false;
                                } else if (outerDist < 1.38) {
                                    fall = 1 - (outerDist - 1) / 0.38;
                                    fall = Math.pow(fall, 1.2);
                                    nx = dx / (rectHalfW || 1);
                                    ny = dy / (rectHalfH || 1);
                                    const nlen = Math.sqrt(nx * nx + ny * ny) || 1;
                                    nx /= nlen;
                                    ny /= nlen;
                                    inside = true;
                                } else {
                                    inside = false;
                                }
                            } else {
                                const len = Math.sqrt(dx * dx + dy * dy);
                                if (len < r && len >= 0.0001) {
                                    fall = 1 - len / r;
                                    nx = dx / len;
                                    ny = dy / len;
                                    inside = true;
                                }
                            }
                            if (!inside) {
                                data[i] = 128;
                                data[i + 1] = 128;
                                data[i + 2] = 0;
                                data[i + 3] = 255;
                                continue;
                            }
                            const s = fall * fall * (isRect ? 145 : 128);
                            data[i] = 128 - Math.round(nx * s);
                            data[i + 1] = 128 - Math.round(ny * s);
                            data[i + 2] = 0;
                            data[i + 3] = 255;
                        }
                    }
                    ctx.putImageData(img, 0, 0);
                    const url = canvas.toDataURL("image/png");
                    if (url !== lastEncoded) {
                        lastEncoded = url;
                        imageRef.current.setAttribute("href", url);
                    }
                }
            }["FisheyeCursor.useEffect.rebuild"];
            const updateRing = {
                "FisheyeCursor.useEffect.updateRing": ()=>{
                    if (!ringRef.current) return;
                    ringRef.current.style.transform = "translate3d(".concat(current.x, "px, ").concat(current.y, "px, 0) translate(-50%, -50%)");
                }
            }["FisheyeCursor.useEffect.updateRing"];
            const onMove = {
                "FisheyeCursor.useEffect.onMove": (e)=>{
                    // When hovering a grid box, lens is locked to the box center (big bracket), not cursor
                    if (isRectRef.current && hoveredElRef.current) return;
                    // Map the cursor to the lens root's local coordinates so the lens
                    // follows the pointer correctly even when the root isn't the viewport
                    // (e.g. a FisheyeCursor scoped to the footer).
                    const rect = root.getBoundingClientRect();
                    target.x = e.clientX - rect.left;
                    target.y = e.clientY - rect.top;
                    // Snap onto the cursor on the first move instead of easing in from
                    // the top-left corner on page load.
                    if (!moved) {
                        moved = true;
                        current.x = target.x;
                        current.y = target.y;
                        if (ringRef.current) ringRef.current.style.opacity = "1";
                        rebuild();
                        updateRing();
                    }
                }
            }["FisheyeCursor.useEffect.onMove"];
            const loop = {
                "FisheyeCursor.useEffect.loop": ()=>{
                    raf = requestAnimationFrame(loop);
                    const dx = target.x - current.x;
                    const dy = target.y - current.y;
                    if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) {
                        current.x += dx * damping;
                        current.y += dy * damping;
                        rebuild();
                        updateRing();
                    }
                }
            }["FisheyeCursor.useEffect.loop"];
            window.addEventListener("pointermove", onMove);
            raf = requestAnimationFrame(loop);
            return ({
                "FisheyeCursor.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("pointerover", onPointerOver);
                    window.removeEventListener("pointerout", onPointerOver);
                }
            })["FisheyeCursor.useEffect"];
        }
    }["FisheyeCursor.useEffect"], [
        damping,
        mapScale,
        radius
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: className,
        style: {
            overflow: "hidden",
            pointerEvents: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "0",
                height: "0",
                style: {
                    position: "absolute"
                },
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: filterId,
                        x: "0",
                        y: "0",
                        width: "100%",
                        height: "100%",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feImage", {
                                ref: imageRef,
                                result: "map",
                                x: "0",
                                y: "0",
                                width: "100%",
                                height: "100%",
                                preserveAspectRatio: "none"
                            }, void 0, false, {
                                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                in: "SourceGraphic",
                                in2: "map",
                                scale: strength,
                                xChannelSelector: "R",
                                yChannelSelector: "G"
                            }, void 0, false, {
                                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    filter: "url(#".concat(filterId, ")")
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            ring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "fisheye-ring",
                style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: radius * 2,
                    height: radius * 2,
                    borderColor: ringColor,
                    opacity: 0,
                    transition: "opacity 0.3s ease, width 0.14s cubic-bezier(0.2,0.9,0.2,1), height 0.14s cubic-bezier(0.2,0.9,0.2,1), border-radius 0.14s ease"
                }
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: mapRef,
                className: "hidden",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cursor/FisheyeCursor.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
_s(FisheyeCursor, "xdcHunRtdfY0QX6sKAC7oMRncLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = FisheyeCursor;
var _c;
__turbopack_context__.k.register(_c, "FisheyeCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$wavy$2d$ripple$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lightswind/wavy-ripple-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cursor/FisheyeCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const GLITCH_CHARS = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";
const NAMES = [
    "PRAJWAL BASNET",
    "प्रज्वल बस्नेत"
];
function HighlightWord(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-block font-medium text-[#a78bfa]",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/hero/Hero.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = HighlightWord;
function Hero() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollIndicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glitchLinesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const glitchTransition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[glitchTransition]": (targetName)=>{
            if (!nameRef.current) return;
            const el = nameRef.current;
            let iteration = 0;
            const totalIterations = 20;
            const interval = setInterval({
                "Hero.useCallback[glitchTransition].interval": ()=>{
                    const progress = iteration / totalIterations;
                    el.innerText = targetName.split("").map({
                        "Hero.useCallback[glitchTransition].interval": (char, index)=>{
                            if (char === " ") return " ";
                            if (index < progress * targetName.length) {
                                return targetName[index];
                            }
                            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                        }
                    }["Hero.useCallback[glitchTransition].interval"]).join("");
                    iteration++;
                    if (iteration > totalIterations) {
                        clearInterval(interval);
                        el.innerText = targetName;
                    }
                }
            }["Hero.useCallback[glitchTransition].interval"], 50);
        }
    }["Hero.useCallback[glitchTransition]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    var _nameRef_current;
                    const current = ((_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.innerText) || NAMES[0];
                    const nextName = current === NAMES[0] ? NAMES[1] : NAMES[0];
                    glitchTransition(nextName);
                }
            }["Hero.useEffect.interval"], 10000);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        glitchTransition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    var _glitchLinesRef_current;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(leftRef.current, {
                        opacity: 0,
                        x: -40
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.3
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(rightRef.current, {
                        opacity: 0,
                        x: 40
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.6
                    });
                    const lines = (_glitchLinesRef_current = glitchLinesRef.current) === null || _glitchLinesRef_current === void 0 ? void 0 : _glitchLinesRef_current.querySelectorAll(".glitch-line");
                    lines === null || lines === void 0 ? void 0 : lines.forEach({
                        "Hero.useEffect.ctx": (line, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(line, {
                                scaleX: 0,
                                opacity: 0
                            }, {
                                scaleX: 1,
                                opacity: 1,
                                duration: 0.6,
                                ease: "power3.out",
                                delay: 0.8 + i * 0.12,
                                transformOrigin: "left center"
                            });
                        }
                    }["Hero.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(scrollIndicatorRef.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.8,
                        delay: 2
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(scrollIndicatorRef.current, {
                        y: 10,
                        duration: 1.5,
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                        delay: 2
                    });
                }
            }["Hero.useEffect.ctx"], sectionRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-void",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute inset-0 z-0 pointer-events-none",
                strength: 110,
                radius: 360,
                damping: 0.14,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$wavy$2d$ripple$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute inset-0",
                        waveColor: "#5b21b6",
                        backgroundColor: "#05010a",
                        speed: 0.9,
                        frequency: 3.2,
                        ringSharpness: 0.6,
                        maxOpacity: 0.55
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-void/25"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glitchLinesRef,
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[20%] left-0 w-[40%] h-px bg-pure/10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[35%] right-0 w-[30%] h-px bg-pure/15"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[55%] left-[10%] w-[25%] h-px",
                        style: {
                            background: "rgba(255,255,255,0.08)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[70%] right-[15%] w-[35%] h-px",
                        style: {
                            background: "rgba(255,255,255,0.12)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[85%] left-[5%] w-[20%] h-px bg-pure/10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-0 left-[20%] w-px h-[30%] bg-pure/5"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[40%] right-[25%] w-px h-[25%] bg-pure/8"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute bottom-[10%] left-[60%] w-px h-[20%] bg-pure/5"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: Array.from({
                    length: 12
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "particle",
                        style: {
                            left: "".concat(i * 8.3 % 100, "%"),
                            animation: "float-up ".concat(10 + i % 5 * 3, "s linear infinite"),
                            animationDelay: "".concat(i % 4 * 2, "s"),
                            width: "".concat(1 + i % 2, "px"),
                            height: "".concat(1 + i % 2, "px"),
                            opacity: 0.05 + i % 3 * 0.03
                        }
                    }, i, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-center w-full max-w-7xl px-6 md:px-10 gap-10 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftRef,
                        className: "flex flex-col items-center lg:items-start text-center lg:text-left opacity-0 flex-1 w-full lg:max-w-[60%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl tracking-[0.4em] text-bone uppercase mb-3 font-light",
                                children: "Hi, I'm"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                ref: nameRef,
                                className: "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-8xl font-light tracking-[0.14em] text-pure uppercase leading-none overflow-hidden",
                                style: {
                                    fontFamily: "'Courier New', monospace",
                                    minHeight: "1.15em"
                                },
                                children: NAMES[0]
                            }, void 0, false, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center gap-3 lg:justify-start justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-px bg-pure/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-px bg-pure/15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-xs md:text-sm tracking-[0.3em] text-bone uppercase",
                                children: "Based in Kathmandu, Nepal"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightRef,
                        className: "opacity-0 w-full lg:max-w-[440px] flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-2xl bg-ghost/30 border border-pure/10 backdrop-blur-md p-6 md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-pure/15 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] tracking-[0.32em] text-bone/70 uppercase mb-3 font-mono",
                                    children: "— ABOUT"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-[17px] leading-relaxed text-pure font-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "Software Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        " crafting modern, responsive web experiences. Passionate about ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "web development"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 208,
                                            columnNumber: 32
                                        }, this),
                                        ", design, and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "video editing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this),
                                        " — blending clean code with creative visuals."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-bone",
                                    children: "Fast, functional, and refined — from concept to final cut."
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-mist uppercase",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 bg-pure/60 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        "Available for new projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero/Hero.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollIndicatorRef,
                className: "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-[0.3em] text-bone uppercase",
                        children: "Descend"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-gradient-to-b from-bone to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-8 w-16 h-16 border-l border-t border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-8 w-16 h-16 border-r border-t border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-8 w-16 h-16 border-l border-b border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 w-16 h-16 border-r border-b border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/Hero.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(Hero, "DK9W8IDwcFgbqqt/v6tNkcJ06U8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "HighlightWord");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cursor/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/NoiseOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/NavigationGate.tsx [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const About = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/about/About.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/about/About.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 14,
            columnNumber: 94
        }, ("TURBOPACK compile-time value", void 0))
});
_c = About;
const Project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/project/Project.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/project/Project.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 15,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = Project;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/layout/Footer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/layout/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 16,
            columnNumber: 97
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = Footer;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SectionFallback = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-16 bg-gradient-to-b from-fog/50 to-transparent animate-pulse"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SectionFallback;
function Home() {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "Home.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["Home.useEffect"],
                smoothWheel: true
            });
            lenisRef.current = lenis;
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add({
                "Home.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["Home.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            // Slide-up + blur-to-clear on scroll for main sections
            const reveals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".reveal");
            reveals.forEach({
                "Home.useEffect": (el)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                        y: 80,
                        autoAlpha: 0,
                        filter: "blur(10px)"
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>{
                    lenis.destroy();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach({
                        "Home.useEffect": (t)=>t.kill()
                    }["Home.useEffect"]);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const handleProjectClick = ()=>navigate("/project", "project");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative min-h-screen bg-void",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scanline"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 31
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 88,
                            columnNumber: 31
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Project, {
                            onProjectClick: handleProjectClick
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "reveal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionFallback, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 31
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                            onProjectClick: handleProjectClick
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Home, "KBB1Ltd6wPYvpB4/aCc7p1yt1Aw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"]
    ];
});
_c4 = Home;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "About");
__turbopack_context__.k.register(_c1, "Project");
__turbopack_context__.k.register(_c2, "Footer");
__turbopack_context__.k.register(_c3, "SectionFallback");
__turbopack_context__.k.register(_c4, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8db8885e._.js.map