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
"[project]/components/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
        lineNumber: 15,
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
        className: "relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glitchLinesRef,
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[20%] left-0 w-[40%] h-px bg-pure/10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[35%] right-0 w-[30%] h-px bg-pure/15"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[55%] left-[10%] w-[25%] h-px",
                        style: {
                            background: "rgba(255,255,255,0.08)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[70%] right-[15%] w-[35%] h-px",
                        style: {
                            background: "rgba(255,255,255,0.12)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[85%] left-[5%] w-[20%] h-px bg-pure/10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-0 left-[20%] w-px h-[30%] bg-pure/5"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute top-[40%] right-[25%] w-px h-[25%] bg-pure/8"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glitch-line absolute bottom-[10%] left-[60%] w-px h-[20%] bg-pure/5"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 123,
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
                        lineNumber: 137,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 135,
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
                                lineNumber: 159,
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
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center gap-3 lg:justify-start justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-px bg-pure/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-6 h-px bg-pure/15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-xs md:text-sm tracking-[0.3em] text-bone uppercase",
                                children: "Based in Kathmandu, Nepal"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/Hero.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 155,
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
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] tracking-[0.32em] text-bone/70 uppercase mb-3 font-mono",
                                    children: "— ABOUT"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base md:text-[17px] leading-relaxed text-pure font-light",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "Software Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        " crafting modern, responsive web experiences. Passionate about ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "web development"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 194,
                                            columnNumber: 32
                                        }, this),
                                        ", design, and",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightWord, {
                                            children: "video editing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        " — blending clean code with creative visuals."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-relaxed text-bone",
                                    children: "Fast, functional, and refined — from concept to final cut."
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-mist uppercase",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 bg-pure/60 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        "Available for new projects"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/Hero.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero/Hero.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 153,
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
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-8 bg-gradient-to-b from-bone to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-8 w-16 h-16 border-l border-t border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 right-8 w-16 h-16 border-r border-t border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-8 w-16 h-16 border-l border-b border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 w-16 h-16 border-r border-b border-pure/15"
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/Hero.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(Hero, "7TDhjRLB/KUYVcjyvxxN0oqV6ic=");
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
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region package.json
__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
;
var version = "1.3.26";
//#endregion
//#region packages/core/src/maths.ts
/**
* Clamp a value between a minimum and maximum value
*
* @param min Minimum value
* @param input Value to clamp
* @param max Maximum value
* @returns Clamped value
*/ function clamp(min, input, max) {
    return Math.max(min, Math.min(input, max));
}
/**
*  Linearly interpolate between two values using an amount (0 <= t <= 1)
*
* @param x First value
* @param y Second value
* @param t Amount to interpolate (0 <= t <= 1)
* @returns Interpolated value
*/ function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}
/**
* Damp a value over time using a damping factor
* {@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}
*
* @param x Initial value
* @param y Target value
* @param lambda Damping factor
* @param dt Time elapsed since the last update
* @returns Damped value
*/ function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
/**
* Calculate the modulo of the dividend and divisor while keeping the result within the same sign as the divisor
* {@link https://anguscroll.com/just/just-modulo}
*
* @param n Dividend
* @param d Divisor
* @returns Modulo
*/ function modulo(n, d) {
    return (n % d + d) % d;
}
//#endregion
//#region packages/core/src/animate.ts
/**
* Animate class to handle value animations with lerping or easing
*
* @example
* const animate = new Animate()
* animate.fromTo(0, 100, { duration: 1, easing: (t) => t })
* animate.advance(0.5) // 50
*/ var Animate = class {
    /**
	* Advance the animation by the given delta time
	*
	* @param deltaTime - The time in seconds to advance the animation
	*/ advance(deltaTime) {
        var _this_onUpdate, _this;
        if (!this.isRunning) return;
        let completed = false;
        if (this.duration && this.easing) {
            this.currentTime += deltaTime;
            const linearProgress = clamp(0, this.currentTime / this.duration, 1);
            completed = linearProgress >= 1;
            const easedProgress = completed ? 1 : this.easing(linearProgress);
            this.value = this.from + (this.to - this.from) * easedProgress;
        } else if (this.lerp) {
            this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
            if (Math.round(this.value) === Math.round(this.to)) {
                this.value = this.to;
                completed = true;
            }
        } else {
            this.value = this.to;
            completed = true;
        }
        if (completed) this.stop();
        (_this_onUpdate = (_this = this).onUpdate) === null || _this_onUpdate === void 0 ? void 0 : _this_onUpdate.call(_this, this.value, completed);
    }
    /** Stop the animation */ stop() {
        this.isRunning = false;
    }
    /**
	* Set up the animation from a starting value to an ending value
	* with optional parameters for lerping, duration, easing, and onUpdate callback
	*
	* @param from - The starting value
	* @param to - The ending value
	* @param options - Options for the animation
	*/ fromTo(from, to, param) {
        let { lerp, duration, easing, onStart, onUpdate } = param;
        this.from = this.value = from;
        this.to = to;
        this.lerp = lerp;
        this.duration = duration;
        this.easing = easing;
        this.currentTime = 0;
        this.isRunning = true;
        onStart === null || onStart === void 0 ? void 0 : onStart();
        this.onUpdate = onUpdate;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isRunning", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "value", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "from", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "to", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentTime", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lerp", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "duration", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "easing", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onUpdate", void 0);
    }
};
//#endregion
//#region packages/core/src/debounce.ts
function debounce(callback, delay) {
    let timer;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = void 0;
            callback.apply(this, args);
        }, delay);
    };
}
//#endregion
//#region packages/core/src/dimensions.ts
/**
* Dimensions class to handle the size of the content and wrapper
*
* @example
* const dimensions = new Dimensions(wrapper, content)
* dimensions.on('resize', (e) => {
*   console.log(e.width, e.height)
* })
*/ var Dimensions = class {
    destroy() {
        var _this_wrapperResizeObserver, _this_contentResizeObserver;
        (_this_wrapperResizeObserver = this.wrapperResizeObserver) === null || _this_wrapperResizeObserver === void 0 ? void 0 : _this_wrapperResizeObserver.disconnect();
        (_this_contentResizeObserver = this.contentResizeObserver) === null || _this_contentResizeObserver === void 0 ? void 0 : _this_contentResizeObserver.disconnect();
        if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize);
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "width", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "height", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollHeight", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "scrollWidth", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "debouncedResize", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "wrapperResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "contentResizeObserver", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resize", ()=>{
            this.onWrapperResize();
            this.onContentResize();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWrapperResize", ()=>{
            if (this.wrapper instanceof Window) {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            } else {
                this.width = this.wrapper.clientWidth;
                this.height = this.wrapper.clientHeight;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onContentResize", ()=>{
            if (this.wrapper instanceof Window) {
                this.scrollHeight = this.content.scrollHeight;
                this.scrollWidth = this.content.scrollWidth;
            } else {
                this.scrollHeight = this.wrapper.scrollHeight;
                this.scrollWidth = this.wrapper.scrollWidth;
            }
        });
        this.wrapper = wrapper;
        this.content = content;
        if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize);
            else {
                this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
                this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
    }
};
//#endregion
//#region packages/core/src/emitter.ts
/**
* Emitter class to handle events
* @example
* const emitter = new Emitter()
* emitter.on('event', (data) => {
*   console.log(data)
* })
* emitter.emit('event', 'data')
*/ var Emitter = class {
    /**
	* Emit an event with the given data
	* @param event Event name
	* @param args Data to pass to the event handlers
	*/ emit(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        var _callbacks_i;
        const callbacks = this.events[event] || [];
        for(let i = 0, length = callbacks.length; i < length; i++)(_callbacks_i = callbacks[i]) === null || _callbacks_i === void 0 ? void 0 : _callbacks_i.call(callbacks, ...args);
    }
    /**
	* Add a callback to the event
	* @param event Event name
	* @param cb Callback function
	* @returns Unsubscribe function
	*/ on(event, cb) {
        if (this.events[event]) this.events[event].push(cb);
        else this.events[event] = [
            cb
        ];
        return ()=>{
            var _this_events_event;
            this.events[event] = (_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter((i)=>cb !== i);
        };
    }
    /**
	* Remove a callback from the event
	* @param event Event name
	* @param callback Callback function
	*/ off(event, callback) {
        var _this_events_event;
        this.events[event] = (_this_events_event = this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter((i)=>callback !== i);
    }
    /**
	* Remove all event listeners and clean up
	*/ destroy() {
        this.events = {};
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "events", {});
    }
};
//#endregion
//#region packages/core/src/virtual-scroll.ts
const LINE_HEIGHT = 100 / 6;
const listenerOptions = {
    passive: false
};
function getDeltaMultiplier(deltaMode, size) {
    if (deltaMode === 1) return LINE_HEIGHT;
    if (deltaMode === 2) return size;
    return 1;
}
var VirtualScroll = class {
    /**
	* Add an event listener for the given event and callback
	*
	* @param event Event name
	* @param callback Callback function
	*/ on(event, callback) {
        return this.emitter.on(event, callback);
    }
    /** Remove all event listeners and clean up */ destroy() {
        this.emitter.destroy();
        window.removeEventListener("resize", this.onWindowResize);
        this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
        this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    constructor(element, options = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "touchStart", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastDelta", {
            x: 0,
            y: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "window", {
            width: 0,
            height: 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        /**
	* Event handler for 'touchstart' event
	*
	* @param event Touch event
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchStart", (event)=>{
            const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
            this.touchStart.x = clientX;
            this.touchStart.y = clientY;
            this.lastDelta = {
                x: 0,
                y: 0
            };
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event
            });
        });
        /** Event handler for 'touchmove' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchMove", (event)=>{
            const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
            const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
            const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = clientX;
            this.touchStart.y = clientY;
            this.lastDelta = {
                x: deltaX,
                y: deltaY
            };
            this.emitter.emit("scroll", {
                deltaX,
                deltaY,
                event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchEnd", (event)=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event
            });
        });
        /** Event handler for 'wheel' event */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWheel", (event)=>{
            let { deltaX, deltaY, deltaMode } = event;
            const multiplierX = getDeltaMultiplier(deltaMode, this.window.width);
            const multiplierY = getDeltaMultiplier(deltaMode, this.window.height);
            deltaX *= multiplierX;
            deltaY *= multiplierY;
            deltaX *= this.options.wheelMultiplier;
            deltaY *= this.options.wheelMultiplier;
            this.emitter.emit("scroll", {
                deltaX,
                deltaY,
                event
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWindowResize", ()=>{
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        });
        this.element = element;
        this.options = options;
        window.addEventListener("resize", this.onWindowResize);
        this.onWindowResize();
        this.element.addEventListener("wheel", this.onWheel, listenerOptions);
        this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
        this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
        this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
};
//#endregion
//#region packages/core/src/lenis.ts
const defaultEasing = (t)=>Math.min(1, 1.001 - 2 ** (-10 * t));
var Lenis = class {
    /**
	* Destroy the lenis instance, remove all event listeners and clean up the class name
	*/ destroy() {
        this.emitter.destroy();
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
        this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
        if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick);
        this.virtualScroll.destroy();
        this.dimensions.destroy();
        this.cleanUpClassName();
        if (this._rafId) cancelAnimationFrame(this._rafId);
    }
    on(event, callback) {
        return this.emitter.on(event, callback);
    }
    off(event, callback) {
        return this.emitter.off(event, callback);
    }
    get overflow() {
        const property = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[property];
    }
    checkOverflow() {
        if ([
            "hidden",
            "clip"
        ].includes(this.overflow)) this.internalStop();
        else this.internalStart();
    }
    setScroll(scroll) {
        if (this.isHorizontal) this.options.wrapper.scrollTo({
            left: scroll,
            behavior: "instant"
        });
        else this.options.wrapper.scrollTo({
            top: scroll,
            behavior: "instant"
        });
    }
    isTouchOnSelectionHandle(event) {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed || selection.rangeCount === 0) return false;
        var _event_targetTouches_;
        const touch = (_event_targetTouches_ = event.targetTouches[0]) !== null && _event_targetTouches_ !== void 0 ? _event_targetTouches_ : event.changedTouches[0];
        if (!touch) return false;
        const rects = selection.getRangeAt(0).getClientRects();
        if (rects.length === 0) return false;
        const first = rects[0];
        const last = rects[rects.length - 1];
        const HANDLE_RADIUS = 40;
        const nearStart = Math.hypot(touch.clientX - first.left, touch.clientY - first.top) <= HANDLE_RADIUS;
        const nearEnd = Math.hypot(touch.clientX - last.right, touch.clientY - last.bottom) <= HANDLE_RADIUS;
        return nearStart || nearEnd;
    }
    /**
	* Force lenis to recalculate the dimensions
	*/ resize() {
        this.dimensions.resize();
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.emit();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        this.isLocked = false;
        this.isScrolling = false;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity = 0;
        this.animate.stop();
    }
    /**
	* Start lenis scroll after it has been stopped
	*/ start() {
        if (!this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.removeProperty("overflow");
            return;
        }
        this.internalStart();
    }
    internalStart() {
        if (!this.isStopped) return;
        this.reset();
        this.isStopped = false;
        this.emit();
    }
    /**
	* Stop lenis scroll
	*/ stop() {
        if (this.isStopped) return;
        if (this.options.autoToggle) {
            this.rootElement.style.setProperty("overflow", "clip");
            return;
        }
        this.internalStop();
    }
    internalStop() {
        if (this.isStopped) return;
        this.reset();
        this.isStopped = true;
        this.emit();
    }
    /**
	* Scroll to a target value
	*
	* @param target The target value to scroll to
	* @param options The options for the scroll
	*
	* @example
	* lenis.scrollTo(100, {
	*   offset: 100,
	*   duration: 1,
	*   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
	*   lerp: 0.1,
	*   onStart: () => {
	*     console.log('onStart')
	*   },
	*   onComplete: () => {
	*     console.log('onComplete')
	*   },
	* })
	*/ scrollTo(_target) {
        let { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.prefersReducedMotion) if (programmatic) immediate = true;
        else {
            lerp = 1;
            duration = void 0;
            easing = void 0;
        }
        if ((this.isStopped || this.isLocked) && !force) return;
        let target = _target;
        let adjustedOffset = offset;
        if (typeof target === "string" && [
            "top",
            "left",
            "start",
            "#"
        ].includes(target)) target = 0;
        else if (typeof target === "string" && [
            "bottom",
            "right",
            "end"
        ].includes(target)) target = this.limit;
        else {
            let node = null;
            if (typeof target === "string") {
                node = target.startsWith("#") ? document.getElementById(target.slice(1)) : document.querySelector(target);
                if (!node) if (target === "#top") target = 0;
                else console.warn("Lenis: Target not found", target);
            } else if (target instanceof HTMLElement && (target === null || target === void 0 ? void 0 : target.nodeType)) node = target;
            if (node) {
                if (this.options.wrapper !== window) {
                    const wrapperRect = this.rootElement.getBoundingClientRect();
                    adjustedOffset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
                }
                const rect = node.getBoundingClientRect();
                const targetStyle = getComputedStyle(node);
                const scrollMargin = this.isHorizontal ? Number.parseFloat(targetStyle.scrollMarginLeft) : Number.parseFloat(targetStyle.scrollMarginTop);
                const containerStyle = getComputedStyle(this.rootElement);
                const scrollPadding = this.isHorizontal ? Number.parseFloat(containerStyle.scrollPaddingLeft) : Number.parseFloat(containerStyle.scrollPaddingTop);
                target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll - (Number.isNaN(scrollMargin) ? 0 : scrollMargin) - (Number.isNaN(scrollPadding) ? 0 : scrollPadding);
            }
        }
        if (typeof target !== "number") return;
        target += adjustedOffset;
        if (this.options.infinite) {
            if (programmatic) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const distance = target - this.animatedScroll;
                if (distance > this.limit / 2) target -= this.limit;
                else if (distance < -this.limit / 2) target += this.limit;
            }
        } else target = clamp(0, target, this.limit);
        if (target === this.targetScroll) {
            onStart === null || onStart === void 0 ? void 0 : onStart(this);
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
            return;
        }
        this.userData = userData !== null && userData !== void 0 ? userData : {};
        if (immediate) {
            this.animatedScroll = this.targetScroll = target;
            this.setScroll(this.scroll);
            this.reset();
            this.preventNextNativeScrollEvent();
            this.emit();
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
            this.userData = {};
            requestAnimationFrame(()=>{
                this.dispatchScrollendEvent();
            });
            return;
        }
        if (!programmatic) this.targetScroll = target;
        if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
        else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
        this.animate.fromTo(this.animatedScroll, target, {
            duration,
            easing,
            lerp,
            onStart: ()=>{
                if (lock) this.isLocked = true;
                this.isScrolling = "smooth";
                onStart === null || onStart === void 0 ? void 0 : onStart(this);
            },
            onUpdate: (value, completed)=>{
                this.isScrolling = "smooth";
                this.lastVelocity = this.velocity;
                this.velocity = value - this.animatedScroll;
                this.direction = Math.sign(this.velocity);
                this.animatedScroll = value;
                this.setScroll(this.scroll);
                if (programmatic) this.targetScroll = value;
                if (!completed) this.emit();
                if (completed) {
                    this.reset();
                    this.emit();
                    onComplete === null || onComplete === void 0 ? void 0 : onComplete(this);
                    this.userData = {};
                    requestAnimationFrame(()=>{
                        this.dispatchScrollendEvent();
                    });
                    this.preventNextNativeScrollEvent();
                }
            }
        });
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = true;
        requestAnimationFrame(()=>{
            this._preventNextNativeScrollEvent = false;
        });
    }
    hasNestedScroll(node, param) {
        let { deltaX, deltaY } = param;
        const time = Date.now();
        if (!node._lenis) node._lenis = {};
        const cache = node._lenis;
        let hasOverflowX;
        let hasOverflowY;
        let isScrollableX;
        let isScrollableY;
        let hasOverscrollBehaviorX;
        let hasOverscrollBehaviorY;
        let scrollWidth;
        let scrollHeight;
        let clientWidth;
        let clientHeight;
        var _cache_time;
        if (time - ((_cache_time = cache.time) !== null && _cache_time !== void 0 ? _cache_time : 0) > 2e3) {
            cache.time = Date.now();
            const computedStyle = window.getComputedStyle(node);
            cache.computedStyle = computedStyle;
            hasOverflowX = [
                "auto",
                "overlay",
                "scroll"
            ].includes(computedStyle.overflowX);
            hasOverflowY = [
                "auto",
                "overlay",
                "scroll"
            ].includes(computedStyle.overflowY);
            hasOverscrollBehaviorX = [
                "auto"
            ].includes(computedStyle.overscrollBehaviorX);
            hasOverscrollBehaviorY = [
                "auto"
            ].includes(computedStyle.overscrollBehaviorY);
            cache.hasOverflowX = hasOverflowX;
            cache.hasOverflowY = hasOverflowY;
            if (!(hasOverflowX || hasOverflowY)) return false;
            scrollWidth = node.scrollWidth;
            scrollHeight = node.scrollHeight;
            clientWidth = node.clientWidth;
            clientHeight = node.clientHeight;
            isScrollableX = scrollWidth > clientWidth;
            isScrollableY = scrollHeight > clientHeight;
            cache.isScrollableX = isScrollableX;
            cache.isScrollableY = isScrollableY;
            cache.scrollWidth = scrollWidth;
            cache.scrollHeight = scrollHeight;
            cache.clientWidth = clientWidth;
            cache.clientHeight = clientHeight;
            cache.hasOverscrollBehaviorX = hasOverscrollBehaviorX;
            cache.hasOverscrollBehaviorY = hasOverscrollBehaviorY;
        } else {
            isScrollableX = cache.isScrollableX;
            isScrollableY = cache.isScrollableY;
            hasOverflowX = cache.hasOverflowX;
            hasOverflowY = cache.hasOverflowY;
            scrollWidth = cache.scrollWidth;
            scrollHeight = cache.scrollHeight;
            clientWidth = cache.clientWidth;
            clientHeight = cache.clientHeight;
            hasOverscrollBehaviorX = cache.hasOverscrollBehaviorX;
            hasOverscrollBehaviorY = cache.hasOverscrollBehaviorY;
        }
        if (!(hasOverflowX && isScrollableX || hasOverflowY && isScrollableY)) return false;
        const orientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
        let scroll;
        let maxScroll;
        let delta;
        let hasOverflow;
        let isScrollable;
        let hasOverscrollBehavior;
        if (orientation === "horizontal") {
            scroll = Math.round(node.scrollLeft);
            maxScroll = scrollWidth - clientWidth;
            delta = deltaX;
            hasOverflow = hasOverflowX;
            isScrollable = isScrollableX;
            hasOverscrollBehavior = hasOverscrollBehaviorX;
        } else if (orientation === "vertical") {
            scroll = Math.round(node.scrollTop);
            maxScroll = scrollHeight - clientHeight;
            delta = deltaY;
            hasOverflow = hasOverflowY;
            isScrollable = isScrollableY;
            hasOverscrollBehavior = hasOverscrollBehaviorY;
        } else return false;
        if (!hasOverscrollBehavior && (scroll >= maxScroll || scroll <= 0)) return true;
        return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
    }
    /**
	* The root element on which lenis is instanced
	*/ get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
	* The limit which is the maximum scroll value
	*/ get limit() {
        if (this.options.naiveDimensions) {
            if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
            return this.rootElement.scrollHeight - this.rootElement.clientHeight;
        }
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    /**
	* Whether or not the scroll is horizontal
	*/ get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    /**
	* The actual scroll value
	*/ get actualScroll() {
        const wrapper = this.options.wrapper;
        var _wrapper_scrollX, _wrapper_scrollY;
        return this.isHorizontal ? (_wrapper_scrollX = wrapper.scrollX) !== null && _wrapper_scrollX !== void 0 ? _wrapper_scrollX : wrapper.scrollLeft : (_wrapper_scrollY = wrapper.scrollY) !== null && _wrapper_scrollY !== void 0 ? _wrapper_scrollY : wrapper.scrollTop;
    }
    /**
	* The current scroll value
	*/ get scroll() {
        return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
	* The progress of the scroll relative to the limit
	*/ get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
	* Current scroll state
	*/ get isScrolling() {
        return this._isScrolling;
    }
    set isScrolling(value) {
        if (this._isScrolling !== value) {
            this._isScrolling = value;
            this.updateClassName();
        }
    }
    /**
	* Check if lenis is stopped
	*/ get isStopped() {
        return this._isStopped;
    }
    set isStopped(value) {
        if (this._isStopped !== value) {
            this._isStopped = value;
            this.updateClassName();
        }
    }
    /**
	* Check if lenis is locked
	*/ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        if (this._isLocked !== value) {
            this._isLocked = value;
            this.updateClassName();
        }
    }
    /**
	* Check if lenis is smooth scrolling
	*/ get isSmooth() {
        return this.isScrolling === "smooth";
    }
    /**
	* Whether the user prefers reduced motion and lenis is honoring it (see `respectReducedMotion` option)
	*/ get prefersReducedMotion() {
        return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
    }
    /**
	* The class name applied to the wrapper element
	*/ get className() {
        let className = "lenis";
        if (this.options.autoToggle) className += " lenis-autoToggle";
        if (this.isStopped) className += " lenis-stopped";
        if (this.isLocked) className += " lenis-locked";
        if (this.isScrolling) className += " lenis-scrolling";
        if (this.isScrolling === "smooth") className += " lenis-smooth";
        return className;
    }
    updateClassName() {
        this.cleanUpClassName();
        this.className.split(" ").forEach((className)=>{
            this.rootElement.classList.add(className);
        });
    }
    cleanUpClassName() {
        for (const className of Array.from(this.rootElement.classList))if (className === "lenis" || className.startsWith("lenis-")) this.rootElement.classList.remove(className);
    }
    constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = .075, touchInertiaExponent = 1.7, duration, easing, lerp = .1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false, respectReducedMotion = true } = {}){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isScrolling", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isStopped", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isLocked", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_preventNextNativeScrollEvent", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_resetVelocityTimeout", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_rafId", null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_isDraggingSelection", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "reducedMotionMediaQuery", window.matchMedia("(prefers-reduced-motion: reduce)"));
        /**
	* Whether or not the user is touching the screen
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isTouching", void 0);
        /**
	* Whether or not the device is running iOS
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isIos", void 0);
        /**
	* The time in ms since the lenis instance was created
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "time", 0);
        /**
	* User data that will be forwarded through the scroll event
	*
	* @example
	* lenis.scrollTo(100, {
	*   userData: {
	*     foo: 'bar'
	*   }
	* })
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "userData", {});
        /**
	* The last velocity of the scroll
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "lastVelocity", 0);
        /**
	* The current velocity of the scroll
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "velocity", 0);
        /**
	* The direction of the scroll
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "direction", 0);
        /**
	* The options passed to the lenis instance
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "options", void 0);
        /**
	* The target scroll value
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "targetScroll", void 0);
        /**
	* The animated scroll value
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animatedScroll", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "animate", new Animate());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "emitter", new Emitter());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dimensions", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "virtualScroll", void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onScrollEnd", (e)=>{
            if (!(e instanceof CustomEvent)) {
                if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "dispatchScrollendEvent", ()=>{
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: true
                }
            }));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTransitionEnd", (event)=>{
            var _event_propertyName;
            if (((_event_propertyName = event.propertyName) === null || _event_propertyName === void 0 ? void 0 : _event_propertyName.includes("overflow")) && event.target === this.rootElement) this.checkOverflow();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onClick", (event)=>{
            const linkElementsUrls = event.composedPath().filter((node)=>node instanceof HTMLAnchorElement && node.href).map((element)=>new URL(element.href));
            const currentUrl = new URL(window.location.href);
            if (this.options.anchors) {
                const anchorElementUrl = linkElementsUrls.find((targetUrl)=>currentUrl.host === targetUrl.host && currentUrl.pathname === targetUrl.pathname && targetUrl.hash);
                if (anchorElementUrl) {
                    const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
                    const target = decodeURIComponent(anchorElementUrl.hash);
                    this.scrollTo(target, options);
                    return;
                }
            }
            if (this.options.stopInertiaOnNavigate) {
                if (linkElementsUrls.some((targetUrl)=>currentUrl.host === targetUrl.host && currentUrl.pathname !== targetUrl.pathname)) {
                    this.reset();
                    return;
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onPointerDown", (event)=>{
            if (event.button === 1) this.reset();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onVirtualScroll", (data)=>{
            if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
            const { deltaX, deltaY, event } = data;
            this.emitter.emit("virtual-scroll", {
                deltaX,
                deltaY,
                event
            });
            if (event.ctrlKey) return;
            if (event.lenisStopPropagation) return;
            const isTouch = event.type.includes("touch");
            const isWheel = event.type.includes("wheel");
            if (isTouch && this.isIos) {
                if (event.type === "touchstart") this._isDraggingSelection = this.isTouchOnSelectionHandle(event);
                if (this._isDraggingSelection) {
                    if (event.type === "touchend") this._isDraggingSelection = false;
                    return;
                }
            }
            this.isTouching = event.type === "touchstart" || event.type === "touchmove";
            const isClickOrTap = deltaX === 0 && deltaY === 0;
            if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
                this.reset();
                return;
            }
            const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
            if (isClickOrTap || isUnknownGesture) return;
            let composedPath = event.composedPath();
            composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
            const prevent = this.options.prevent;
            const gestureOrientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
            if (composedPath.find((node)=>{
                var _node_hasAttribute, _node_hasAttribute1, _node_hasAttribute2, _node_hasAttribute3, _node_hasAttribute4;
                return node instanceof HTMLElement && (typeof prevent === "function" && (prevent === null || prevent === void 0 ? void 0 : prevent(node)) || ((_node_hasAttribute = node.hasAttribute) === null || _node_hasAttribute === void 0 ? void 0 : _node_hasAttribute.call(node, "data-lenis-prevent")) || gestureOrientation === "vertical" && ((_node_hasAttribute1 = node.hasAttribute) === null || _node_hasAttribute1 === void 0 ? void 0 : _node_hasAttribute1.call(node, "data-lenis-prevent-vertical")) || gestureOrientation === "horizontal" && ((_node_hasAttribute2 = node.hasAttribute) === null || _node_hasAttribute2 === void 0 ? void 0 : _node_hasAttribute2.call(node, "data-lenis-prevent-horizontal")) || isTouch && ((_node_hasAttribute3 = node.hasAttribute) === null || _node_hasAttribute3 === void 0 ? void 0 : _node_hasAttribute3.call(node, "data-lenis-prevent-touch")) || isWheel && ((_node_hasAttribute4 = node.hasAttribute) === null || _node_hasAttribute4 === void 0 ? void 0 : _node_hasAttribute4.call(node, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.hasNestedScroll(node, {
                    deltaX,
                    deltaY
                }));
            })) return;
            if (this.isStopped || this.isLocked) {
                if (event.cancelable) event.preventDefault();
                return;
            }
            if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
                this.isScrolling = "native";
                this.animate.stop();
                event.lenisStopPropagation = true;
                return;
            }
            let delta = deltaY;
            if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
            else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
            if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
            if (event.cancelable) event.preventDefault();
            const isSyncTouch = isTouch && this.options.syncTouch;
            const hasTouchInertia = isTouch && event.type === "touchend";
            if (hasTouchInertia) delta = Math.sign(delta) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
            this.scrollTo(this.targetScroll + delta, {
                programmatic: false,
                ...isSyncTouch ? {
                    lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onNativeScroll", ()=>{
            if (this._resetVelocityTimeout !== null) {
                clearTimeout(this._resetVelocityTimeout);
                this._resetVelocityTimeout = null;
            }
            if (this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = false;
                return;
            }
            if (this.isScrolling === false || this.isScrolling === "native") {
                const lastScroll = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll;
                this.lastVelocity = this.velocity;
                this.velocity = this.animatedScroll - lastScroll;
                this.direction = Math.sign(this.animatedScroll - lastScroll);
                if (!this.isStopped) this.isScrolling = "native";
                this.emit();
                if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity;
                    this.velocity = 0;
                    this.isScrolling = false;
                    this.emit();
                }, 400);
            }
        });
        /**
	* RequestAnimationFrame for lenis
	*
	* @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
	*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "raf", (time)=>{
            const deltaTime = time - (this.time || time);
            this.time = time;
            this.animate.advance(deltaTime * .001);
            if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
        });
        window.lenisVersion = version;
        if (!window.lenis) window.lenis = {};
        window.lenis.version = version;
        if (orientation === "horizontal") window.lenis.horizontal = true;
        if (syncTouch === true) window.lenis.touch = true;
        this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        if (!wrapper || wrapper === document.documentElement) wrapper = window;
        if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
        else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
        this.options = {
            wrapper,
            content,
            eventsTarget,
            smoothWheel,
            syncTouch,
            syncTouchLerp,
            touchInertiaExponent,
            duration,
            easing,
            lerp,
            infinite,
            gestureOrientation,
            orientation,
            touchMultiplier,
            wheelMultiplier,
            autoResize,
            prevent,
            virtualScroll,
            overscroll,
            autoRaf,
            anchors,
            autoToggle,
            allowNestedScroll,
            naiveDimensions,
            stopInertiaOnNavigate,
            respectReducedMotion
        };
        this.dimensions = new Dimensions(wrapper, content, {
            autoResize
        });
        this.updateClassName();
        this.targetScroll = this.animatedScroll = this.actualScroll;
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
        this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: true
        });
        if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick);
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
        this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier,
            wheelMultiplier
        });
        this.virtualScroll.on("scroll", this.onVirtualScroll);
        if (this.options.autoToggle) {
            this.checkOverflow();
            this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
        }
        if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
    }
};
;
 //# sourceMappingURL=lenis.mjs.map
}),
]);

//# sourceMappingURL=_4117e605._.js.map