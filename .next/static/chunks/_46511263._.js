(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/effects/GlitchText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlitchText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
const glitchChars = "▓▒░█▄▀■□▪▫◊◦●○◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯";
function GlitchText(param) {
    let { text, className = "", as: Tag = "div", intensity = "medium", trigger = "hover" } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(text);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getGlitchCount = ()=>{
        switch(intensity){
            case "low":
                return 1;
            case "high":
                return 4;
            default:
                return 2;
        }
    };
    const scramble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlitchText.useCallback[scramble]": ()=>{
            if (!ref.current) return;
            const el = ref.current;
            const str = originalText.current;
            const count = getGlitchCount();
            let iteration = 0;
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval({
                "GlitchText.useCallback[scramble]": ()=>{
                    el.innerText = str.split("").map({
                        "GlitchText.useCallback[scramble]": (char, index)=>{
                            if (char === " ") return " ";
                            if (index < iteration) return str[index];
                            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        }
                    }["GlitchText.useCallback[scramble]"]).join("");
                    iteration += count;
                    if (iteration >= str.length) {
                        if (intervalRef.current) clearInterval(intervalRef.current);
                        el.innerText = str;
                    }
                }
            }["GlitchText.useCallback[scramble]"], 30);
        }
    }["GlitchText.useCallback[scramble]"], [
        intensity
    ]);
    const glitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlitchText.useCallback[glitch]": ()=>{
            if (!ref.current) return;
            const el = ref.current;
            const str = originalText.current;
            // Random character replacement glitch
            const glitched = str.split("").map({
                "GlitchText.useCallback[glitch].glitched": (char)=>{
                    if (char === " ") return " ";
                    if (Math.random() > 0.7) {
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    return char;
                }
            }["GlitchText.useCallback[glitch].glitched"]).join("");
            el.innerText = glitched;
            setTimeout({
                "GlitchText.useCallback[glitch]": ()=>{
                    if (ref.current) ref.current.innerText = str;
                }
            }["GlitchText.useCallback[glitch]"], 100);
        }
    }["GlitchText.useCallback[glitch]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlitchText.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (trigger === "always") {
                const interval = setInterval({
                    "GlitchText.useEffect.interval": ()=>{
                        if (Math.random() > 0.7) glitch();
                    }
                }["GlitchText.useEffect.interval"], 2000);
                return ({
                    "GlitchText.useEffect": ()=>clearInterval(interval)
                })["GlitchText.useEffect"];
            }
            if (trigger === "scroll") {
                const observer = new IntersectionObserver({
                    "GlitchText.useEffect": (entries)=>{
                        entries.forEach({
                            "GlitchText.useEffect": (entry)=>{
                                if (entry.isIntersecting) {
                                    scramble();
                                }
                            }
                        }["GlitchText.useEffect"]);
                    }
                }["GlitchText.useEffect"], {
                    threshold: 0.5
                });
                observer.observe(el);
                return ({
                    "GlitchText.useEffect": ()=>observer.disconnect()
                })["GlitchText.useEffect"];
            }
            // hover trigger
            const handleMouseEnter = {
                "GlitchText.useEffect.handleMouseEnter": ()=>scramble()
            }["GlitchText.useEffect.handleMouseEnter"];
            el.addEventListener("mouseenter", handleMouseEnter);
            return ({
                "GlitchText.useEffect": ()=>el.removeEventListener("mouseenter", handleMouseEnter)
            })["GlitchText.useEffect"];
        }
    }["GlitchText.useEffect"], [
        trigger,
        scramble,
        glitch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: "glitch-text-wrapper ".concat(className),
        "data-text": text,
        children: text
    }, void 0, false, {
        fileName: "[project]/components/effects/GlitchText.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(GlitchText, "NJyR485HE43M70CMr7G3sEJSW9E=");
_c = GlitchText;
var _c;
__turbopack_context__.k.register(_c, "GlitchText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/components/background/Lightfall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Lightfall.tsx
 * ---------------------------------------------------------------------------
 * React Bits "Lightfall" background (TS-CSS variant), converted for Next.js.
 * Falling streaks of light rendered with an ogl fragment shader.
 * Source: https://reactbits.dev/backgrounds/lightfall
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_COLORS = 8;
const hexToRGB = (hex)=>{
    const c = hex.replace("#", "").padEnd(6, "0");
    const r = parseInt(c.slice(0, 2), 16) / 255;
    const g = parseInt(c.slice(2, 4), 16) / 255;
    const b = parseInt(c.slice(4, 6), 16) / 255;
    return [
        r,
        g,
        b
    ];
};
const prepColors = (input)=>{
    const base = (input && input.length ? input : [
        "#A6C8FF",
        "#5227FF",
        "#FF9FFC"
    ]).slice(0, MAX_COLORS);
    const count = base.length;
    const arr = [];
    for(let i = 0; i < MAX_COLORS; i++)arr.push(hexToRGB(base[Math.min(i, base.length - 1)]));
    const avg = [
        0,
        0,
        0
    ];
    for(let i = 0; i < count; i++){
        avg[0] += arr[i][0];
        avg[1] += arr[i][1];
        avg[2] += arr[i][2];
    }
    avg[0] /= count;
    avg[1] /= count;
    avg[2] /= count;
    return {
        arr,
        count,
        avg
    };
};
const vertex = "\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
const fragment = "\nprecision highp float;\n\nuniform vec3  iResolution;\nuniform vec2  iMouse;\nuniform float iTime;\n\nuniform vec3  uColor0;\nuniform vec3  uColor1;\nuniform vec3  uColor2;\nuniform vec3  uColor3;\nuniform vec3  uColor4;\nuniform vec3  uColor5;\nuniform vec3  uColor6;\nuniform vec3  uColor7;\nuniform int   uColorCount;\n\nuniform vec3  uBgColor;\nuniform vec3  uMouseColor;\nuniform float uSpeed;\nuniform int   uStreakCount;\nuniform float uStreakWidth;\nuniform float uStreakLength;\nuniform float uGlow;\nuniform float uDensity;\nuniform float uTwinkle;\nuniform float uZoom;\nuniform float uBgGlow;\nuniform float uOpacity;\nuniform float uMouseEnabled;\nuniform float uMouseStrength;\nuniform float uMouseRadius;\n\nvarying vec2 vUv;\n\nvec3 palette(float h) {\n  int count = uColorCount;\n  if (count < 1) count = 1;\n  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));\n  if (idx <= 0) return uColor0;\n  if (idx == 1) return uColor1;\n  if (idx == 2) return uColor2;\n  if (idx == 3) return uColor3;\n  if (idx == 4) return uColor4;\n  if (idx == 5) return uColor5;\n  if (idx == 6) return uColor6;\n  return uColor7;\n}\n\nvec3 tanhv(vec3 x) {\n  vec3 e = exp(-2.0 * x);\n  return (1.0 - e) / (1.0 + e);\n}\n\nvec2 sceneC(vec2 frag, vec2 r) {\n  vec2 P = (frag + frag - r) / r.x;\n  float z = 0.0;\n  float d = 1e3;\n  vec4 O = vec4(0.0);\n  for (int k = 0; k < 39; k++) {\n    if (d <= 1e-4) break;\n    O = z * normalize(vec4(P, uZoom, 0.0)) - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;\n    d = 1.0 - sqrt(length(O * O));\n    z += d;\n  }\n  return vec2(O.x, atan(O.z, O.y));\n}\n\nvoid mainImage(out vec4 o, vec2 C) {\n  vec2 r = iResolution.xy;\n  vec2 uv0 = (C + C - r) / r.x;\n  float T = 0.1 * iTime * uSpeed + 9.0;\n  float angRings = max(1.0, floor(6.28318530718 * max(uDensity, 0.05) + 0.5));\n  vec2 Y = vec2(5e-3, 6.28318530718 / angRings);\n\n  vec2 c0 = sceneC(C, r);\n  vec2 cdx = sceneC(C + vec2(1.0, 0.0), r);\n  vec2 cdy = sceneC(C + vec2(0.0, 1.0), r);\n  vec2 dCx = cdx - c0;\n  vec2 dCy = cdy - c0;\n  dCx.y -= 6.28318530718 * floor(dCx.y / 6.28318530718 + 0.5);\n  dCy.y -= 6.28318530718 * floor(dCy.y / 6.28318530718 + 0.5);\n  vec2 fw = abs(dCx) + abs(dCy);\n  C = c0;\n\n  vec2 P = vec2(2.0, 1.0) * uv0 - (r / r.x) * vec2(0.0, 1.0);\n  vec4 O = vec4(uBgColor * 90.0 * uBgGlow / (1e3 * dot(P, P) + 6.0), 0.0);\n\n  float mGlow = 0.0;\n  if (uMouseEnabled > 0.5) {\n    vec2 mN = (iMouse + iMouse - r) / r.x;\n    float md = length(uv0 - mN);\n    mGlow = exp(-md * md / max(uMouseRadius * uMouseRadius, 1e-4)) * uMouseStrength;\n    O.rgb += uMouseColor * mGlow * 0.25;\n  }\n\n  float zr = 5e-4 * uStreakWidth;\n  vec2 rr = vec2(max(length(fw), 1e-5));\n  float tail = 19.0 / max(uStreakLength, 0.05);\n\n  for (int m = 0; m < 16; m++) {\n    if (m >= uStreakCount) break;\n    float jf = float(m) + 1.0;\n    float ic = fract(sin(dot(vec2(jf, floor(C.x / Y.x + 0.5)), vec2(7.0, 11.0)) * 73.0));\n    vec2 Pp = C - (T + T * ic) * vec2(0.0, 1.0);\n    Pp -= floor(Pp / Y + 0.5) * Y;\n    float h = fract(8663.0 * ic);\n    vec3 col = palette(h);\n    float weight = mix(1.5, 1.0 + sin(T + 7.0 * h + 4.0), uTwinkle);\n    weight *= (1.0 + mGlow * 2.0);\n    vec2 inner = vec2(length(max(Pp, vec2(-1.0, 0.0))), length(Pp) - zr) - zr;\n    vec2 sm = vec2(1.0) - smoothstep(-rr, rr, inner);\n    O.rgb += dot(sm, vec2(exp(tail * Pp.y), 3.0)) * col * weight;\n    C.x += Y.x / 8.0;\n  }\n\n  vec3 colr = sqrt(tanhv(max(O.rgb * uGlow - vec3(0.04, 0.08, 0.02), 0.0)));\n  o = vec4(colr, uOpacity);\n}\n\nvoid main() {\n  vec4 color;\n  mainImage(color, vUv * iResolution.xy);\n  gl_FragColor = color;\n}\n";
const Lightfall = (param)=>{
    let { className, dpr, paused = false, colors = [
        "#A6C8FF",
        "#5227FF",
        "#FF9FFC"
    ], backgroundColor = "#0A29FF", speed = 0.5, streakCount = 2, streakWidth = 1, streakLength = 1, glow = 1, density = 0.6, twinkle = 1, zoom = 3, backgroundGlow = 0.5, opacity = 1, mouseInteraction = true, mouseStrength = 0.5, mouseRadius = 1, mouseDampening = 0.15, mixBlendMode } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const programRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        0,
        0
    ]);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightfall.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr: dpr !== null && dpr !== void 0 ? dpr : ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio || 1 : "TURBOPACK unreachable",
                alpha: true,
                antialias: true
            });
            rendererRef.current = renderer;
            const gl = renderer.gl;
            const canvas = gl.canvas;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.display = "block";
            container.appendChild(canvas);
            const { arr, count, avg } = prepColors(colors);
            const uniforms = {
                iResolution: {
                    value: [
                        gl.drawingBufferWidth,
                        gl.drawingBufferHeight,
                        1
                    ]
                },
                iMouse: {
                    value: [
                        0,
                        0
                    ]
                },
                iTime: {
                    value: 0
                },
                uColor0: {
                    value: arr[0]
                },
                uColor1: {
                    value: arr[1]
                },
                uColor2: {
                    value: arr[2]
                },
                uColor3: {
                    value: arr[3]
                },
                uColor4: {
                    value: arr[4]
                },
                uColor5: {
                    value: arr[5]
                },
                uColor6: {
                    value: arr[6]
                },
                uColor7: {
                    value: arr[7]
                },
                uColorCount: {
                    value: count
                },
                uBgColor: {
                    value: hexToRGB(backgroundColor)
                },
                uMouseColor: {
                    value: avg
                },
                uSpeed: {
                    value: speed
                },
                uStreakCount: {
                    value: Math.max(1, Math.min(16, Math.round(streakCount)))
                },
                uStreakWidth: {
                    value: streakWidth
                },
                uStreakLength: {
                    value: streakLength
                },
                uGlow: {
                    value: glow
                },
                uDensity: {
                    value: density
                },
                uTwinkle: {
                    value: twinkle
                },
                uZoom: {
                    value: zoom
                },
                uBgGlow: {
                    value: backgroundGlow
                },
                uOpacity: {
                    value: opacity
                },
                uMouseEnabled: {
                    value: mouseInteraction ? 1 : 0
                },
                uMouseStrength: {
                    value: mouseStrength
                },
                uMouseRadius: {
                    value: mouseRadius
                }
            };
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex,
                fragment,
                uniforms
            });
            programRef.current = program;
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            geometryRef.current = geometry;
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            meshRef.current = mesh;
            const resize = {
                "Lightfall.useEffect.resize": ()=>{
                    const rect = container.getBoundingClientRect();
                    renderer.setSize(rect.width, rect.height);
                    uniforms.iResolution.value = [
                        gl.drawingBufferWidth,
                        gl.drawingBufferHeight,
                        1
                    ];
                }
            }["Lightfall.useEffect.resize"];
            resize();
            const ro = new ResizeObserver(resize);
            ro.observe(container);
            const onPointerMove = {
                "Lightfall.useEffect.onPointerMove": (e)=>{
                    const rect = canvas.getBoundingClientRect();
                    const scale = renderer.dpr || 1;
                    const x = (e.clientX - rect.left) * scale;
                    const y = (rect.height - (e.clientY - rect.top)) * scale;
                    mouseTargetRef.current = [
                        x,
                        y
                    ];
                    if (mouseDampening <= 0) {
                        uniforms.iMouse.value = [
                            x,
                            y
                        ];
                    }
                }
            }["Lightfall.useEffect.onPointerMove"];
            if (mouseInteraction) {
                canvas.addEventListener("pointermove", onPointerMove);
            }
            const loop = {
                "Lightfall.useEffect.loop": (t)=>{
                    rafRef.current = requestAnimationFrame(loop);
                    uniforms.iTime.value = t * 0.001;
                    if (mouseDampening > 0) {
                        if (!lastTimeRef.current) lastTimeRef.current = t;
                        const dt = (t - lastTimeRef.current) / 1000;
                        lastTimeRef.current = t;
                        const tau = Math.max(1e-4, mouseDampening);
                        let factor = 1 - Math.exp(-dt / tau);
                        if (factor > 1) factor = 1;
                        const target = mouseTargetRef.current;
                        const cur = uniforms.iMouse.value;
                        cur[0] += (target[0] - cur[0]) * factor;
                        cur[1] += (target[1] - cur[1]) * factor;
                    } else {
                        lastTimeRef.current = t;
                    }
                    if (!paused && programRef.current && meshRef.current) {
                        try {
                            renderer.render({
                                scene: meshRef.current
                            });
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }
            }["Lightfall.useEffect.loop"];
            rafRef.current = requestAnimationFrame(loop);
            return ({
                "Lightfall.useEffect": ()=>{
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    if (mouseInteraction) canvas.removeEventListener("pointermove", onPointerMove);
                    ro.disconnect();
                    if (canvas.parentElement === container) {
                        container.removeChild(canvas);
                    }
                    const callIfFn = {
                        "Lightfall.useEffect.callIfFn": (obj, key)=>{
                            const fn = obj && obj[key];
                            if (typeof fn === "function") {
                                fn.call(obj);
                            }
                        }
                    }["Lightfall.useEffect.callIfFn"];
                    callIfFn(programRef.current, "remove");
                    callIfFn(geometryRef.current, "remove");
                    callIfFn(meshRef.current, "remove");
                    callIfFn(rendererRef.current, "destroy");
                    programRef.current = null;
                    geometryRef.current = null;
                    meshRef.current = null;
                    rendererRef.current = null;
                }
            })["Lightfall.useEffect"];
        }
    }["Lightfall.useEffect"], [
        dpr,
        paused,
        colors,
        backgroundColor,
        speed,
        streakCount,
        streakWidth,
        streakLength,
        glow,
        density,
        twinkle,
        zoom,
        backgroundGlow,
        opacity,
        mouseInteraction,
        mouseStrength,
        mouseRadius,
        mouseDampening
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "".concat(className !== null && className !== void 0 ? className : "").trim(),
        style: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            ...mixBlendMode && {
                mixBlendMode: mixBlendMode
            }
        }
    }, void 0, false, {
        fileName: "[project]/components/background/Lightfall.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Lightfall, "M4AQTOTyliuQWcLgb59Fn3S1u5s=");
_c = Lightfall;
const __TURBOPACK__default__export__ = Lightfall;
var _c;
__turbopack_context__.k.register(_c, "Lightfall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/background/Strands.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Strands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$RenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/RenderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const MAX_STRANDS = 12;
const MAX_COLORS = 8;
const VERT = "#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
const FRAG = "#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform vec2 uResolution;\nuniform vec3 uColors[".concat(MAX_COLORS, "];\nuniform int uColorCount;\nuniform int uStrandCount;\nuniform float uSpeed;\nuniform float uAmplitude;\nuniform float uWaviness;\nuniform float uThickness;\nuniform float uGlow;\nuniform float uTaper;\nuniform float uSpread;\nuniform float uHueShift;\nuniform float uIntensity;\nuniform float uOpacity;\nuniform float uScale;\nuniform float uSaturation;\n\nout vec4 fragColor;\n\nconst float PI = 3.14159265;\n\nvec3 spectrum(float t) {\n  return 0.5 + 0.5 * cos(2.0 * PI * (t + vec3(0.00, 0.33, 0.67)));\n}\n\nvec3 samplePalette(float t) {\n  t = fract(t);\n  float scaled = t * float(uColorCount);\n  int idx = int(floor(scaled));\n  float blend = fract(scaled);\n  int nextIdx = idx + 1;\n  if (nextIdx >= uColorCount) nextIdx = 0;\n  return mix(uColors[idx], uColors[nextIdx], blend);\n}\n\nvec3 strandColor(float t) {\n  if (uColorCount > 0) return samplePalette(t);\n  return spectrum(t);\n}\n\nvoid main() {\n  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;\n  uv /= max(uScale, 0.0001);\n\n  float e = 0.06 + uIntensity * 0.94;\n  float env = pow(max(cos(uv.x * PI * 1.3), 0.0), uTaper);\n\n  vec3 col = vec3(0.0);\n\n  for (int i = 0; i < ").concat(MAX_STRANDS, "; i++) {\n    if (i >= uStrandCount) break;\n\n    float fi = float(i);\n    float ph = fi * 1.7 * uSpread;\n    float freq = (2.0 + fi * 0.35) * uWaviness;\n    float spd = 1.4 + fi * 1.2;\n\n    float tt = uTime * uSpeed;\n    float w = sin(uv.x * freq + tt * spd + ph) * 0.60\n            + sin(uv.x * freq * 1.1 - tt * spd * 0.7 + ph * 1.7) * 0.40;\n\n    float amp = (0.1 + 0.02 * e) * env * uAmplitude;\n    float y = w * amp;\n\n    float d = abs(uv.y - y);\n    float thick = (0.001 + 0.05 * e) * (0.35 + env) * uThickness;\n    float g = thick / (d + thick * 0.45);\n    g = g * g;\n\n    float h = fi / float(uStrandCount) + uv.x * 0.30 + uTime * 0.04 + uHueShift;\n    col += strandColor(h) * g * env;\n  }\n\n  col *= 0.45 + 0.7 * e;\n  col = 1.0 - exp(-col * uGlow);\n\n  float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));\n  col = max(mix(vec3(gray), col, uSaturation), 0.0);\n\n  float lum = max(max(col.r, col.g), col.b);\n  float alpha = clamp(lum, 0.0, 1.0) * uOpacity;\n\n  fragColor = vec4(col * uOpacity, alpha);\n}\n");
const GLASS_FRAG = "#version 300 es\nprecision highp float;\n\nuniform sampler2D uScene;\nuniform vec2 uResolution;\nuniform float uRadius;\nuniform float uRefraction;\nuniform float uDispersion;\n\nout vec4 fragColor;\n\nvec2 toUv(vec2 p) {\n  return p * (uResolution.y / uResolution) + 0.5;\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;\n  float d = length(p);\n  float r = uRadius;\n\n  float edge = fwidth(d) * 1.5;\n  float mask = 1.0 - smoothstep(r - edge, r + edge, d);\n  if (mask <= 0.0) {\n    fragColor = vec4(0.0);\n    return;\n  }\n\n  // sphere height: 0 at the rim, 1 at the center\n  float z = sqrt(max(r * r - d * d, 0.0)) / r;\n  float nd = d / r; // 0 at the center, 1 at the rim\n\n  // refraction is confined to a narrow band near the rim; the rest stays undistorted\n  vec2 dir = d > 0.0 ? p / d : vec2(0.0);\n  float lens = smoothstep(0.85, 1.0, nd) * pow(nd, 6.0);\n  vec2 offset = -dir * lens * uRefraction * 0.15;\n  vec2 disp = -dir * lens * uDispersion * 0.012;\n\n  vec3 light;\n  light.r = texture(uScene, toUv(p + offset - disp)).r;\n  light.g = texture(uScene, toUv(p + offset)).g;\n  light.b = texture(uScene, toUv(p + offset + disp)).b;\n\n  // neutral fresnel rim (no color tint so the glass stays clear)\n  float fres = pow(1.0 - z, 3.0);\n  vec3 rim = vec3(1.0) * fres * 0.18;\n\n  // specular highlight from the upper-left\n  vec2 lightDir = normalize(vec2(-0.55, 0.6));\n  float spec = pow(max(dot(p / max(r, 1e-4), lightDir), 0.0), 6.0);\n  spec *= smoothstep(r, r * 0.55, d);\n\n  vec3 emissive = light + rim + vec3(spec) * 0.4;\n  float emissiveA = clamp(max(max(emissive.r, emissive.g), emissive.b), 0.0, 1.0);\n\n  // almost clear glass body: only a faint neutral darkening, mostly near the rim\n  float bodyA = 0.05 + fres * 0.05;\n\n  // composite emissive light over the clear body (premultiplied)\n  float outA = emissiveA + bodyA * (1.0 - emissiveA);\n  vec3 outRGB = emissive;\n\n  outRGB *= mask;\n  outA *= mask;\n\n  fragColor = vec4(outRGB, outA);\n}\n";
const buildPalette = (colors)=>{
    const filled = colors && colors.length ? colors : [
        '#ffffff'
    ];
    const padded = [];
    for(let i = 0; i < MAX_COLORS; i++){
        var _filled_i;
        const hex = (_filled_i = filled[i]) !== null && _filled_i !== void 0 ? _filled_i : filled[filled.length - 1];
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex);
        padded.push([
            c.r,
            c.g,
            c.b
        ]);
    }
    return padded;
};
function Strands(param) {
    let { colors = [
        '#FF4242',
        '#7C3AED',
        '#06B6D4',
        '#EAB308'
    ], count = 3, speed = 0.5, amplitude = 1, waviness = 1, thickness = 0.7, glow = 2.6, taper = 3, spread = 1, hueShift = 0, intensity = 0.6, saturation = 1.5, opacity = 1, scale = 1.5, glass = false, refraction = 1, dispersion = 1, glassSize = 1, className = '', style } = param;
    _s();
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        colors,
        count,
        speed,
        amplitude,
        waviness,
        thickness,
        glow,
        taper,
        spread,
        hueShift,
        intensity,
        saturation,
        opacity,
        scale,
        glass,
        refraction,
        dispersion,
        glassSize
    });
    propsRef.current = {
        colors,
        count,
        speed,
        amplitude,
        waviness,
        thickness,
        glow,
        taper,
        spread,
        hueShift,
        intensity,
        saturation,
        opacity,
        scale,
        glass,
        refraction,
        dispersion,
        glassSize
    };
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Strands.useEffect": ()=>{
            const ctn = ctnDom.current;
            if (!ctn) return;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: true,
                premultipliedAlpha: true,
                antialias: true
            });
            const gl = renderer.gl;
            gl.clearColor(0, 0, 0, 0);
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.backgroundColor = 'transparent';
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            if (geometry.attributes.uv) {
                delete geometry.attributes.uv;
            }
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: VERT,
                fragment: FRAG,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uResolution: {
                        value: [
                            ctn.offsetWidth,
                            ctn.offsetHeight
                        ]
                    },
                    uColors: {
                        value: buildPalette(propsRef.current.colors)
                    },
                    uColorCount: {
                        value: Math.min(propsRef.current.colors.length, MAX_COLORS)
                    },
                    uStrandCount: {
                        value: Math.min(propsRef.current.count, MAX_STRANDS)
                    },
                    uSpeed: {
                        value: speed
                    },
                    uAmplitude: {
                        value: amplitude
                    },
                    uWaviness: {
                        value: waviness
                    },
                    uThickness: {
                        value: thickness
                    },
                    uGlow: {
                        value: glow
                    },
                    uTaper: {
                        value: taper
                    },
                    uSpread: {
                        value: spread
                    },
                    uHueShift: {
                        value: hueShift
                    },
                    uIntensity: {
                        value: intensity
                    },
                    uOpacity: {
                        value: opacity
                    },
                    uScale: {
                        value: scale
                    },
                    uSaturation: {
                        value: saturation
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            const renderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$RenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTarget"](gl, {
                width: ctn.offsetWidth,
                height: ctn.offsetHeight
            });
            const glassProgram = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: VERT,
                fragment: GLASS_FRAG,
                uniforms: {
                    uScene: {
                        value: renderTarget.texture
                    },
                    uResolution: {
                        value: [
                            ctn.offsetWidth,
                            ctn.offsetHeight
                        ]
                    },
                    uRadius: {
                        value: 0.46 * glassSize
                    },
                    uRefraction: {
                        value: refraction
                    },
                    uDispersion: {
                        value: dispersion
                    }
                }
            });
            const glassMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program: glassProgram
            });
            ctn.appendChild(gl.canvas);
            function resize() {
                if (!ctn) return;
                const width = ctn.offsetWidth;
                const height = ctn.offsetHeight;
                renderer.setSize(width, height);
                program.uniforms.uResolution.value = [
                    width,
                    height
                ];
                renderTarget.setSize(width, height);
                glassProgram.uniforms.uResolution.value = [
                    width,
                    height
                ];
            }
            window.addEventListener('resize', resize);
            const resizeObserver = new ResizeObserver({
                "Strands.useEffect": ()=>resize()
            }["Strands.useEffect"]);
            resizeObserver.observe(ctn);
            resize();
            let animateId = 0;
            const update = {
                "Strands.useEffect.update": (t)=>{
                    animateId = requestAnimationFrame(update);
                    const current = propsRef.current;
                    program.uniforms.uTime.value = t * 0.001;
                    program.uniforms.uColors.value = buildPalette(current.colors);
                    program.uniforms.uColorCount.value = Math.min(current.colors.length, MAX_COLORS);
                    program.uniforms.uStrandCount.value = Math.min(Math.max(Math.round(current.count), 1), MAX_STRANDS);
                    program.uniforms.uSpeed.value = current.speed;
                    program.uniforms.uAmplitude.value = current.amplitude;
                    program.uniforms.uWaviness.value = current.waviness;
                    program.uniforms.uThickness.value = current.thickness;
                    program.uniforms.uGlow.value = current.glow;
                    program.uniforms.uTaper.value = current.taper;
                    program.uniforms.uSpread.value = current.spread;
                    program.uniforms.uHueShift.value = current.hueShift;
                    program.uniforms.uIntensity.value = current.intensity;
                    program.uniforms.uOpacity.value = current.opacity;
                    program.uniforms.uScale.value = current.scale;
                    program.uniforms.uSaturation.value = current.saturation;
                    if (current.glass) {
                        renderer.render({
                            scene: mesh,
                            target: renderTarget
                        });
                        glassProgram.uniforms.uScene.value = renderTarget.texture;
                        glassProgram.uniforms.uRefraction.value = current.refraction;
                        glassProgram.uniforms.uDispersion.value = current.dispersion;
                        glassProgram.uniforms.uRadius.value = 0.46 * current.glassSize;
                        renderer.render({
                            scene: glassMesh
                        });
                    } else {
                        renderer.render({
                            scene: mesh
                        });
                    }
                }
            }["Strands.useEffect.update"];
            animateId = requestAnimationFrame(update);
            return ({
                "Strands.useEffect": ()=>{
                    var _gl_getExtension;
                    cancelAnimationFrame(animateId);
                    window.removeEventListener('resize', resize);
                    resizeObserver.disconnect();
                    if (ctn && gl.canvas.parentNode === ctn) {
                        ctn.removeChild(gl.canvas);
                    }
                    (_gl_getExtension = gl.getExtension('WEBGL_lose_context')) === null || _gl_getExtension === void 0 ? void 0 : _gl_getExtension.loseContext();
                }
            })["Strands.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Strands.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "strands-container ".concat(className),
        style: style
    }, void 0, false, {
        fileName: "[project]/components/background/Strands.tsx",
        lineNumber: 399,
        columnNumber: 10
    }, this);
}
_s(Strands, "H3hEXxgRK/TFJBuH98B1fA30BZI=");
_c = Strands;
var _c;
__turbopack_context__.k.register(_c, "Strands");
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
    const [isEnabled, setIsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FisheyeCursor.useEffect": ()=>{
            const check = {
                "FisheyeCursor.useEffect.check": ()=>window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches
            }["FisheyeCursor.useEffect.check"];
            setIsEnabled(!check());
            const onResize = {
                "FisheyeCursor.useEffect.onResize": ()=>setIsEnabled(!check())
            }["FisheyeCursor.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "FisheyeCursor.useEffect": ()=>window.removeEventListener("resize", onResize)
            })["FisheyeCursor.useEffect"];
        }
    }["FisheyeCursor.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FisheyeCursor.useEffect": ()=>{
            if (!isEnabled) return;
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
        radius,
        isEnabled
    ]);
    if (!isEnabled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: rootRef,
            className: className,
            style: {
                overflow: "hidden"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/cursor/FisheyeCursor.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this);
    }
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
                                lineNumber: 278,
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
                                lineNumber: 279,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 268,
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
                lineNumber: 290,
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
                lineNumber: 295,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: mapRef,
                className: "hidden",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/cursor/FisheyeCursor.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cursor/FisheyeCursor.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_s(FisheyeCursor, "+6kuPNwIdbw5VLiMPJUzntpfrgo=", false, function() {
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
"[project]/app/project/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paw-print.js [app-client] (ecmascript) <export default as PawPrint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/effects/GlitchText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cursor/CustomCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/NoiseOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Lightfall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/Lightfall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Strands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/Strands.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cursor/FisheyeCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$wavy$2d$ripple$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lightswind/wavy-ripple-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/NavigationGate.tsx [app-client] (ecmascript)");
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
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const projects = [
    {
        id: 1,
        title: "Anubis Paws",
        shortName: "Anubis Paws",
        category: "Pet Adoption & Marketplace",
        year: "2025",
        description: "A pet adoption and marketplace platform where pets thrive with love. Discover pets looking for a forever home and shop premium pet products — everything in one place.",
        longDescription: "At Anubis Paws, I'm building more than just a pet platform. From finding a new animal friend, to getting the right care, to shopping trusted products — everything you and your pets need, all in one place. Featuring an adoption system, a marketplace, and a modern landing experience.",
        tags: [
            {
                name: "Next.js",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            },
            {
                name: "Adoption",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"]
            },
            {
                name: "Marketplace",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
            },
            {
                name: "Web App",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
            }
        ],
        video: "/img/anubis.mp4",
        image: "",
        liveUrl: "https://anubispaws.vercel.app/",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Voyage",
        shortName: "Voyage",
        category: "Travel Landing Page",
        year: "2024",
        description: "A clean travel tour landing page built with pure HTML and CSS. Showcases destinations, tour packages, and a responsive layout focused on exploration.",
        longDescription: "Voyage is a frontend travel site I built while learning HTML & CSS fundamentals. It features hero banners, destination cards, and tour sections — all responsive and built without JavaScript frameworks. A practice project that taught me layout and visual hierarchy.",
        tags: [
            {
                name: "HTML",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
            },
            {
                name: "CSS",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            },
            {
                name: "Responsive",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"]
            },
            {
                name: "Landing Page",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"]
            }
        ],
        video: "",
        image: "",
        liveUrl: "https://traveltournojs.netlify.app/",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "NBS Studio",
        shortName: "NBS Studio",
        category: "Business Landing Page",
        year: "2024",
        description: "A modern business agency landing page crafted with HTML and CSS. Clean sections for services, about, and contact with a professional look.",
        longDescription: "NBS Studio is a frontend business site created during my early HTML/CSS learning phase. It focuses on clean typography, sectioned layout, and a minimal business aesthetic — built to practice structure and responsive design from scratch.",
        tags: [
            {
                name: "HTML",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
            },
            {
                name: "CSS",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            },
            {
                name: "Agency",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
            },
            {
                name: "Frontend",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paw$2d$print$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PawPrint$3e$__["PawPrint"]
            }
        ],
        video: "",
        image: "",
        liveUrl: "https://nbswebpr.netlify.app/",
        githubUrl: "#"
    }
];
function ProjectPage() {
    _s();
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ProjectPage.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".page-header", {
                        opacity: 0,
                        y: 40
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.3
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".project-grid-item", {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        stagger: 0.12,
                        delay: 0.6
                    });
                }
            }["ProjectPage.useEffect.ctx"], containerRef);
            return ({
                "ProjectPage.useEffect": ()=>ctx.revert()
            })["ProjectPage.useEffect"];
        }
    }["ProjectPage.useEffect"], []);
    const handleBack = ()=>navigate("/", "home");
    const toggleProject = (id)=>{
        setActiveId((prev)=>prev === id ? null : id);
    };
    const handleKeyToggle = (e, id)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleProject(id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative min-h-screen bg-void overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$CustomCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$NoiseOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scanline"
                }, void 0, false, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "fixed inset-0 pointer-events-none z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$wavy$2d$ripple$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "absolute inset-0",
                            waveColor: "#5b21b6",
                            backgroundColor: "#05010a",
                            speed: 0.85,
                            frequency: 3.2,
                            ringSharpness: 0.62,
                            maxOpacity: 0.5
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Strands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "absolute inset-0 opacity-[0.12]",
                            colors: [
                                "#1a1a1a",
                                "#3a3a3a",
                                "#888888",
                                "#dddddd"
                            ],
                            count: 3,
                            speed: 0.25,
                            amplitude: 0.7,
                            waviness: 1,
                            thickness: 0.55,
                            glow: 1.2,
                            taper: 2.5,
                            spread: 1.1,
                            intensity: 0.45,
                            opacity: 0.85,
                            scale: 1.15,
                            saturation: 0.1
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Lightfall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "absolute inset-0",
                            colors: [
                                "#dddddd",
                                "#666666",
                                "#444444",
                                "#ffffff"
                            ],
                            backgroundColor: "#050505",
                            speed: 0.35,
                            streakCount: 5,
                            streakWidth: 1,
                            streakLength: 1,
                            glow: 1,
                            density: 0.6,
                            twinkle: 0.8,
                            zoom: 2.8,
                            backgroundGlow: 0.45,
                            opacity: 0.78,
                            mouseInteraction: true,
                            mouseStrength: 0.5,
                            mouseRadius: 1
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-void/60"
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-void/20 via-transparent to-void/40"
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "fixed top-20 left-6 md:left-10 z-50 flex items-center gap-2 text-sm text-bone hover:text-pure transition-colors duration-300 group",
                    "data-cursor-hover": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16,
                            className: "group-hover:-translate-x-1 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tracking-wider uppercase",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/app/project/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "relative z-10 pt-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "page-header mb-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs tracking-[0.5em] text-bone uppercase mb-4 block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "02 — Work",
                                            as: "span",
                                            intensity: "low",
                                            trigger: "scroll"
                                        }, void 0, false, {
                                            fileName: "[project]/app/project/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-7xl font-light tracking-wider text-pure mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "Projects",
                                            as: "span",
                                            intensity: "medium",
                                            trigger: "scroll"
                                        }, void 0, false, {
                                            fileName: "[project]/app/project/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-lg text-bone max-w-2xl mx-auto leading-relaxed",
                                        children: "Click any project to expand and view details, preview, and links."
                                    }, void 0, false, {
                                        fileName: "[project]/app/project/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/project/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
                                children: projects.map((project)=>{
                                    const isActive = activeId === project.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        layout: true,
                                        transition: {
                                            type: "spring",
                                            stiffness: 420,
                                            damping: 34,
                                            mass: 0.9
                                        },
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: ()=>toggleProject(project.id),
                                        onKeyDown: (e)=>handleKeyToggle(e, project.id),
                                        className: "project-grid-item group relative text-left border backdrop-blur-sm p-5 md:p-6 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-pure/30 ".concat(isActive ? "bg-ghost/30 border-pure/30 shadow-[0_0_30px_rgba(221,221,221,0.08)] md:col-span-2" : "bg-ghost/15 border-pure/10 hover:border-pure/25 hover:bg-ghost/25"),
                                        "data-cursor-hover": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] tracking-[0.32em] text-bone uppercase block mb-1",
                                                                children: [
                                                                    "Project_",
                                                                    String(project.id).padStart(2, "0"),
                                                                    " — ",
                                                                    project.year
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl md:text-2xl font-light tracking-wider text-pure leading-none truncate",
                                                                children: project.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs tracking-widest text-bone uppercase mt-1",
                                                                children: project.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ".concat(isActive ? "bg-pure text-void border-pure rotate-180" : "border-pure/20 text-bone group-hover:border-pure/40 group-hover:text-pure"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/project/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/project/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-video overflow-hidden bg-ghost rounded-xl border border-pure/10 mb-4",
                                                children: [
                                                    project.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        src: project.video,
                                                        className: "absolute inset-0 w-full h-full object-cover",
                                                        autoPlay: true,
                                                        muted: true,
                                                        loop: true,
                                                        playsInline: true,
                                                        preload: "auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-ghost via-fog to-ghost flex flex-col items-center justify-center p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-14 h-14 rounded-full border border-pure/20 flex items-center justify-center mb-4 bg-pure/[0.04]",
                                                                children: [
                                                                    project.id === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                                                        size: 22,
                                                                        className: "text-pure/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 50
                                                                    }, this),
                                                                    project.id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                        size: 22,
                                                                        className: "text-pure/70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 50
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs tracking-[0.3em] text-pure uppercase",
                                                                children: project.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-void/30 to-transparent pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/project/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-bone line-clamp-2",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/project/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                    initial: {
                                                        height: 0,
                                                        opacity: 0,
                                                        y: -12,
                                                        scale: 0.98
                                                    },
                                                    animate: {
                                                        height: "auto",
                                                        opacity: 1,
                                                        y: 0,
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        height: 0,
                                                        opacity: 0,
                                                        y: -8,
                                                        scale: 0.99
                                                    },
                                                    transition: {
                                                        height: {
                                                            type: "spring",
                                                            stiffness: 420,
                                                            damping: 36,
                                                            mass: 0.9
                                                        },
                                                        opacity: {
                                                            duration: 0.28,
                                                            ease: "easeOut"
                                                        },
                                                        y: {
                                                            type: "spring",
                                                            stiffness: 480,
                                                            damping: 30,
                                                            mass: 0.8
                                                        },
                                                        scale: {
                                                            type: "spring",
                                                            stiffness: 420,
                                                            damping: 28
                                                        }
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-6 mt-6 border-t border-pure/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "lg:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-sm tracking-[0.3em] text-bone uppercase mb-3",
                                                                                children: "About"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm leading-relaxed text-bone",
                                                                                children: project.longDescription
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 284,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-sm tracking-[0.3em] text-bone uppercase mb-3",
                                                                                children: "Tools"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 287,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex flex-wrap gap-2 mb-6",
                                                                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex items-center gap-1.5 text-xs px-3 py-1.5 border border-pure/15 text-bone tracking-wider rounded-full",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tag.icon, {
                                                                                                size: 12
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                                lineNumber: 294,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            tag.name
                                                                                        ]
                                                                                    }, tag.name, true, {
                                                                                        fileName: "[project]/app/project/page.tsx",
                                                                                        lineNumber: 290,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 288,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-3 text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-bone uppercase tracking-wider text-xs",
                                                                                                children: "Year"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                                lineNumber: 301,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-pure",
                                                                                                children: project.year
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                                lineNumber: 302,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/project/page.tsx",
                                                                                        lineNumber: 300,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-bone uppercase tracking-wider text-xs",
                                                                                                children: "Role"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                                lineNumber: 305,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-pure text-xs text-right",
                                                                                                children: "Web Developer"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                                lineNumber: 306,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/project/page.tsx",
                                                                                        lineNumber: 304,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 286,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-3 mt-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: project.liveUrl,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        className: "inline-flex items-center gap-2 px-6 py-3 bg-pure text-void text-sm tracking-wider uppercase hover:bg-bone transition-colors duration-300 rounded-full font-medium",
                                                                        "data-cursor-hover": true,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 321,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            "Live Demo"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: project.githubUrl,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        className: "inline-flex items-center gap-2 px-6 py-3 border border-pure/20 text-pure text-sm tracking-wider uppercase hover:bg-pure hover:text-void transition-all duration-300 rounded-full",
                                                                        "data-cursor-hover": true,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/project/page.tsx",
                                                                                lineNumber: 332,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            "Source Code"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/project/page.tsx",
                                                                        lineNumber: 324,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/project/page.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/project/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/project/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/project/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this),
                                            !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-xs tracking-[0.2em] text-mist uppercase group-hover:text-bone transition-colors",
                                                children: "Click to expand →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/project/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, project.id, true, {
                                        fileName: "[project]/app/project/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/project/page.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/project/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/project/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/project/page.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ProjectPage, "mQyPe7STefb5yVk8oMjKzUUWpNs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"]
    ];
});
_c = ProjectPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_46511263._.js.map