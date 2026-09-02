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
"[project]/components/effects/ShinyText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ShinyText = (param)=>{
    let { text, disabled = false, speed = 2, className = '', color = '#b5b5b5', shineColor = '#ffffff', spread = 120, yoyo = false, pauseOnHover = false, direction = 'left', delay = 0 } = param;
    _s();
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const elapsedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const directionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(direction === 'left' ? 1 : -1);
    const animationDuration = speed * 1000;
    const delayDuration = delay * 1000;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "ShinyText.useAnimationFrame": (time)=>{
            if (disabled || isPaused) {
                lastTimeRef.current = null;
                return;
            }
            if (lastTimeRef.current === null) {
                lastTimeRef.current = time;
                return;
            }
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;
            elapsedRef.current += deltaTime;
            // Animation goes from 0 to 100
            if (yoyo) {
                const cycleDuration = animationDuration + delayDuration;
                const fullCycle = cycleDuration * 2;
                const cycleTime = elapsedRef.current % fullCycle;
                if (cycleTime < animationDuration) {
                    // Forward animation: 0 -> 100
                    const p = cycleTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else if (cycleTime < cycleDuration) {
                    // Delay at end
                    progress.set(directionRef.current === 1 ? 100 : 0);
                } else if (cycleTime < cycleDuration + animationDuration) {
                    // Reverse animation: 100 -> 0
                    const reverseTime = cycleTime - cycleDuration;
                    const p = 100 - reverseTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else {
                    // Delay at start
                    progress.set(directionRef.current === 1 ? 0 : 100);
                }
            } else {
                const cycleDuration = animationDuration + delayDuration;
                const cycleTime = elapsedRef.current % cycleDuration;
                if (cycleTime < animationDuration) {
                    // Animation phase: 0 -> 100
                    const p = cycleTime / animationDuration * 100;
                    progress.set(directionRef.current === 1 ? p : 100 - p);
                } else {
                    // Delay phase - hold at end (shine off-screen)
                    progress.set(directionRef.current === 1 ? 100 : 0);
                }
            }
        }
    }["ShinyText.useAnimationFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShinyText.useEffect": ()=>{
            directionRef.current = direction === 'left' ? 1 : -1;
            elapsedRef.current = 0;
            progress.set(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ShinyText.useEffect"], [
        direction
    ]);
    // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
    const backgroundPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, {
        "ShinyText.useTransform[backgroundPosition]": (p)=>"".concat(150 - p * 2, "% center")
    }["ShinyText.useTransform[backgroundPosition]"]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShinyText.useCallback[handleMouseEnter]": ()=>{
            if (pauseOnHover) setIsPaused(true);
        }
    }["ShinyText.useCallback[handleMouseEnter]"], [
        pauseOnHover
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShinyText.useCallback[handleMouseLeave]": ()=>{
            if (pauseOnHover) setIsPaused(false);
        }
    }["ShinyText.useCallback[handleMouseLeave]"], [
        pauseOnHover
    ]);
    const gradientStyle = {
        backgroundImage: "linear-gradient(".concat(spread, "deg, ").concat(color, " 0%, ").concat(color, " 35%, ").concat(shineColor, " 50%, ").concat(color, " 65%, ").concat(color, " 100%)"),
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
        className: "shiny-text ".concat(className),
        style: {
            ...gradientStyle,
            backgroundPosition
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: text
    }, void 0, false, {
        fileName: "[project]/components/effects/ShinyText.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShinyText, "co3YAjti6vji+J2Ba/g5Ec1mEUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ShinyText;
const __TURBOPACK__default__export__ = ShinyText;
var _c;
__turbopack_context__.k.register(_c, "ShinyText");
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
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/NavigationGate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/effects/GlitchText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$ShinyText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/effects/ShinyText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Strands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/Strands.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cursor/FisheyeCursor.tsx [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const EMAIL = "prajwalbasnet0219@gmail.com";
const socials = [
    {
        name: "GitHub",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        href: "https://github.com/PrajwalBasnet0219"
    },
    {
        name: "Facebook",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        href: "#"
    },
    {
        name: "Instagram",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        href: "#"
    }
];
const navLinks = [
    {
        label: "Home",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        label: "About Me",
        href: "/#about",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        label: "Contact",
        href: "/contact",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"]
    }
];
function Footer(param) {
    let { onProjectClick } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const columnsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const { navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNavClick = (e, href, label)=>{
        // Hash links (e.g. /#about) should scroll, not trigger loading screen
        if (href.includes("#")) return;
        if (pathname === href) {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        navigate(href, label.toLowerCase());
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Footer.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(columnsRef.current, {
                        opacity: 0,
                        y: 60
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: columnsRef.current,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(nameRef.current, {
                        opacity: 0,
                        y: 40
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: nameRef.current,
                            start: "top 95%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["Footer.useEffect.ctx"], sectionRef);
            return ({
                "Footer.useEffect": ()=>ctx.revert()
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    const handleMouseMove = (e)=>{
        var _sectionRef_current;
        const rect = (_sectionRef_current = sectionRef.current) === null || _sectionRef_current === void 0 ? void 0 : _sectionRef_current.getBoundingClientRect();
        if (!rect) return;
        setMousePos({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: sectionRef,
        id: "contact",
        className: "relative z-10 min-h-screen flex flex-col overflow-hidden bg-void",
        onMouseMove: handleMouseMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "absolute inset-0 pointer-events-none",
                        ring: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$Strands$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "absolute inset-0",
                            colors: [
                                "#dddddd",
                                "#888888",
                                "#3a3a3a",
                                "#7a0e18"
                            ],
                            count: 6,
                            speed: 0.15,
                            amplitude: 0.8,
                            waviness: 1.1,
                            thickness: 0.9,
                            glow: 2.4,
                            taper: 3,
                            spread: 1.2,
                            intensity: 0.4,
                            saturation: 0.35,
                            opacity: 0.45,
                            scale: 1.6,
                            hueShift: 0
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-void/60"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void/80"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] pointer-events-none transition-opacity duration-1000",
                style: {
                    background: "radial-gradient(600px circle at ".concat(mousePos.x * 100, "% ").concat(mousePos.y * 100, "%, rgba(255,255,255,0.04), transparent 60%)")
                }
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center px-6 md:px-16 py-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-divider mb-16"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: columnsRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative flex w-2 h-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inline-flex h-full w-full rounded-full bg-pure opacity-60 animate-ping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative inline-flex w-2 h-2 rounded-full bg-pure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs tracking-[0.3em] text-mist uppercase",
                                                        children: "Open to work"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base leading-relaxed text-ash",
                                                children: "Every pixel placed with intent. Every frame cut to tell a story."
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:".concat(EMAIL),
                                                className: "mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-pure hover:text-glow transition-colors duration-300 group",
                                                "data-cursor-hover": true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 14,
                                                        className: "text-mist group-hover:text-pure transition-colors duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Say hello",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 14,
                                                        className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs tracking-[0.3em] text-mist uppercase mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "Navigate",
                                                    as: "span",
                                                    intensity: "low",
                                                    trigger: "scroll"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            onClick: (e)=>handleNavClick(e, link.href, link.label),
                                                            className: "group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300 cursor-pointer",
                                                            "data-cursor-hover": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                                    size: 14,
                                                                    className: "text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, link.label, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs tracking-[0.3em] text-mist uppercase mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "Socials",
                                                    as: "span",
                                                    intensity: "low",
                                                    trigger: "scroll"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: social.href,
                                                            target: social.href.startsWith("http") ? "_blank" : undefined,
                                                            rel: social.href.startsWith("http") ? "noopener noreferrer" : undefined,
                                                            className: "group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300",
                                                            "data-cursor-hover": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(social.icon, {
                                                                    size: 14,
                                                                    className: "text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: social.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, social.name, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs tracking-[0.3em] text-mist uppercase mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "Reach Out",
                                                    as: "span",
                                                    intensity: "low",
                                                    trigger: "scroll"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:".concat(EMAIL),
                                                            className: "group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300",
                                                            style: {
                                                                fontFamily: "'Courier New', monospace"
                                                            },
                                                            "data-cursor-hover": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    size: 14,
                                                                    className: "text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Contact"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>onProjectClick === null || onProjectClick === void 0 ? void 0 : onProjectClick(),
                                                            className: "group inline-flex items-center gap-3 text-pure text-base hover:text-glow transition-colors duration-300 cursor-pointer",
                                                            "data-cursor-hover": true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                                    size: 14,
                                                                    className: "text-mist group-hover:text-pure group-hover:translate-x-0.5 transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Project"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                    size: 14,
                                                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 border-t border-fog/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-mist tracking-wider font-mono",
                                        children: [
                                            "© ",
                                            new Date().getFullYear(),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                text: "ERR_NULL",
                                                as: "span",
                                                intensity: "low",
                                                trigger: "always"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] tracking-[0.3em] text-mist/40 uppercase font-mono text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: "SEG_FAULT_0x00",
                                            as: "span",
                                            intensity: "high",
                                            trigger: "always"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Footer.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: nameRef,
                className: "relative z-10 w-full pointer-events-none overflow-visible flex items-center justify-center pt-10 pb-16 mt-6",
                style: {
                    minHeight: "clamp(100px, 14vh, 160px)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-center leading-none px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$ShinyText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "Prajwal Basnet",
                        speed: 3,
                        spread: 150,
                        color: "#bbbbbb",
                        shineColor: "#ffffff",
                        yoyo: true,
                        className: "font-mono font-extrabold tracking-[-0.05em] leading-[0.85] whitespace-nowrap text-[clamp(2.4rem,8.5vw,8.5rem)]"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Footer.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Footer, "hKqLY/VkhZqdlFNhiKS3XBFdoCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$NavigationGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/layout/Footer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_638815cc._.js.map