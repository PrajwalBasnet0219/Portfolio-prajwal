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
"[project]/components/background/PipeMarqueeBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PipeMarqueeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/**
 * PipeMarqueeBackground — original visuals with smooth optimizations
 * -> Restored as in testing_ideas/src/components/PipeMarquee.tsx (count 8, radius 185, 12 tiles equiv)
 * -> Optimizations kept: IntersectionObserver pause offscreen, lazy images, contain, will-change, prefers-reduced-motion
 * -> Uses 8 tiles/face (optimized from 12) → 128 imgs vs 192, still covers width (2976 > 1900) no gap, faster
 * -> Gifs: /public/img — edit DEFAULT_GIFS below
 */ const DEFAULT_GIFS = [
    "/img/p1.png",
    "/img/p2.png",
    "/img/anubis.gif"
];
// 8 tiles/face → 128 imgs (8 faces * 8 * 2) — covers face width, original was 12 → 192
const TILES_PER_FACE = 8;
const getTilesPerFace = ()=>"object" !== "undefined" && window.innerWidth < 768 ? 5 : TILES_PER_FACE;
function PipeMarqueeBackground(param) {
    let { count = 8, radius = 185, speed = 22, rotateSpeed = 28, autoRotate = true, glitch = true, glitchIntensity = "strong", gifs = DEFAULT_GIFS, className } = param;
    _s();
    const GAP_FACE = 10;
    const GAP_TILE = 10;
    const FACE_HEIGHT = Math.round(2 * radius * Math.sin(Math.PI / count)) - GAP_FACE;
    const [isGlitching, setIsGlitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const GIFS = gifs.length > 0 ? gifs : DEFAULT_GIFS;
    // Pause when offscreen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipeMarqueeBackground.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "PipeMarqueeBackground.useEffect": (param)=>{
                    let [entry] = param;
                    return setIsVisible(entry.isIntersecting);
                }
            }["PipeMarqueeBackground.useEffect"], {
                threshold: 0,
                rootMargin: "200px"
            });
            obs.observe(el);
            return ({
                "PipeMarqueeBackground.useEffect": ()=>obs.disconnect()
            })["PipeMarqueeBackground.useEffect"];
        }
    }["PipeMarqueeBackground.useEffect"], []);
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipeMarqueeBackground.useEffect": ()=>{
            const m = window.matchMedia("(prefers-reduced-motion: reduce)");
            setPrefersReducedMotion(m.matches);
            const handler = {
                "PipeMarqueeBackground.useEffect.handler": (e)=>setPrefersReducedMotion(e.matches)
            }["PipeMarqueeBackground.useEffect.handler"];
            m.addEventListener("change", handler);
            return ({
                "PipeMarqueeBackground.useEffect": ()=>m.removeEventListener("change", handler)
            })["PipeMarqueeBackground.useEffect"];
        }
    }["PipeMarqueeBackground.useEffect"], []);
    const shouldAnimate = isVisible && !prefersReducedMotion;
    const effectiveAutoRotate = autoRotate && shouldAnimate;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PipeMarqueeBackground.useEffect": ()=>{
            if (!glitch || !shouldAnimate) return;
            let cancelled = false;
            const schedule = {
                "PipeMarqueeBackground.useEffect.schedule": ()=>{
                    if (cancelled) return;
                    const base = glitchIntensity === "strong" ? 1100 : 1700;
                    const jitter = Math.random() * (glitchIntensity === "strong" ? 3000 : 4200);
                    const nextIn = base + jitter;
                    const t = window.setTimeout({
                        "PipeMarqueeBackground.useEffect.schedule.t": ()=>{
                            if (cancelled) return;
                            const dur = glitchIntensity === "strong" ? 140 + Math.random() * 380 : 90 + Math.random() * 180;
                            setSeed(Math.random());
                            setIsGlitching(true);
                            const off = window.setTimeout({
                                "PipeMarqueeBackground.useEffect.schedule.t.off": ()=>{
                                    if (cancelled) return;
                                    setIsGlitching(false);
                                    if (glitchIntensity === "strong" && Math.random() > 0.62) {
                                        const stutterGap = 70 + Math.random() * 120;
                                        const stutterDur = 55 + Math.random() * 140;
                                        const s1 = window.setTimeout({
                                            "PipeMarqueeBackground.useEffect.schedule.t.off.s1": ()=>{
                                                setSeed(Math.random());
                                                setIsGlitching(true);
                                                const s2 = window.setTimeout({
                                                    "PipeMarqueeBackground.useEffect.schedule.t.off.s1.s2": ()=>setIsGlitching(false)
                                                }["PipeMarqueeBackground.useEffect.schedule.t.off.s1.s2"], stutterDur);
                                                timers.current.push(s2);
                                            }
                                        }["PipeMarqueeBackground.useEffect.schedule.t.off.s1"], stutterGap);
                                        timers.current.push(s1);
                                        const after = window.setTimeout(schedule, stutterGap + stutterDur + 260);
                                        timers.current.push(after);
                                    } else {
                                        schedule();
                                    }
                                }
                            }["PipeMarqueeBackground.useEffect.schedule.t.off"], dur);
                            timers.current.push(off);
                        }
                    }["PipeMarqueeBackground.useEffect.schedule.t"], nextIn);
                    timers.current.push(t);
                }
            }["PipeMarqueeBackground.useEffect.schedule"];
            const init = window.setTimeout(schedule, 900 + Math.random() * 1200);
            timers.current.push(init);
            return ({
                "PipeMarqueeBackground.useEffect": ()=>{
                    cancelled = true;
                    timers.current.forEach({
                        "PipeMarqueeBackground.useEffect": (id)=>clearTimeout(id)
                    }["PipeMarqueeBackground.useEffect"]);
                    timers.current = [];
                }
            })["PipeMarqueeBackground.useEffect"];
        }
    }["PipeMarqueeBackground.useEffect"], [
        glitch,
        glitchIntensity,
        shouldAnimate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 overflow-hidden bg-transparent flex items-center justify-center ".concat(className !== null && className !== void 0 ? className : ""),
        style: {
            contain: "layout paint"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-radial from-white/[0.03] via-transparent to-transparent opacity-40"
            }, void 0, false, {
                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[900px] h-[400px] bg-indigo-600/10 blur-[90px] rounded-full -rotate-12 will-change-transform opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                style: {
                    perspective: "1300px",
                    perspectiveOrigin: "50% 50%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pipe-group relative flex items-center justify-center",
                    style: {
                        transform: "rotateZ(-14deg) rotateX(10deg) rotateY(-8deg)",
                        transformStyle: "preserve-3d",
                        maskImage: "linear-gradient(to right, transparent 0%, black 9%, black 22%, black 78%, black 91%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 9%, black 22%, black 78%, black 91%, transparent 100%)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: effectiveAutoRotate ? "pipe-spin" : undefined,
                            style: {
                                transformStyle: "preserve-3d",
                                animation: effectiveAutoRotate ? "pipe-spin ".concat(rotateSpeed, "s linear infinite") : undefined,
                                animationPlayState: shouldAnimate ? "running" : "paused"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                style: {
                                    width: "min(1900px, 176vw)",
                                    height: "".concat(radius * 2, "px"),
                                    transformStyle: "preserve-3d",
                                    transform: "translateZ(0)"
                                },
                                children: [
                                    Array.from({
                                        length: count
                                    }).map((_, faceIdx)=>{
                                        const angle = 360 / count * faceIdx;
                                        const duration = speed + faceIdx % 3 * 4 - faceIdx % 2 * 3;
                                        const reverse = faceIdx % 2 === 1;
                                        const brightness = 1 - Math.abs(faceIdx - count / 2) * 0.09;
                                        const tilesPerFace = getTilesPerFace();
                                        const tiles = Array.from({
                                            length: tilesPerFace
                                        }).map((__, idx)=>GIFS[idx % GIFS.length]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-1/2 overflow-hidden bg-black",
                                            style: {
                                                width: "100%",
                                                height: "".concat(FACE_HEIGHT, "px"),
                                                marginTop: "-".concat(FACE_HEIGHT / 2, "px"),
                                                transform: "rotateX(".concat(angle, "deg) translateZ(").concat(radius, "px)"),
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                filter: "brightness(".concat(0.62 + brightness * 0.38, ")"),
                                                borderRadius: "12px",
                                                border: "1px solid rgba(255,255,255,0.07)",
                                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.45)",
                                                overflow: "hidden"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 opacity-20 bg-gradient-to-b from-white via-transparent to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-full items-center",
                                                    style: {
                                                        width: "max-content",
                                                        gap: "".concat(GAP_TILE, "px"),
                                                        paddingLeft: "".concat(GAP_TILE / 2, "px"),
                                                        paddingRight: "".concat(GAP_TILE / 2, "px"),
                                                        animation: "pipe-marquee-".concat(reverse ? "rev" : "fwd", " ").concat(duration, "s linear infinite"),
                                                        animationPlayState: shouldAnimate ? "running" : "paused"
                                                    },
                                                    children: [
                                                        0,
                                                        1
                                                    ].map((dup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-full items-center shrink-0",
                                                            style: {
                                                                gap: "".concat(GAP_TILE, "px")
                                                            },
                                                            children: tiles.map((src, idx)=>{
                                                                const tileHash = (idx * 23 + faceIdx * 37 + dup * 11 + Math.floor(seed * 9999)) % 100;
                                                                const mod = glitchIntensity === "strong" ? 5 : 7;
                                                                const shouldGlitch = isGlitching && tileHash % mod === 0;
                                                                const offsetX = (tileHash % 9 - 4) * 1.8;
                                                                const offsetY = (tileHash % 5 - 2) * 0.9;
                                                                const skew = (tileHash % 7 - 3) * 0.9;
                                                                const sliceTop = tileHash * 13 % 78;
                                                                const tilesPerFaceInner = getTilesPerFace();
                                                                const hBias = Math.abs(idx - (tilesPerFaceInner - 1) / 2) / ((tilesPerFaceInner - 1) / 2);
                                                                const bendY = hBias * 1.4;
                                                                const bendX = 3.2;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative h-full shrink-0 bg-zinc-900 overflow-hidden",
                                                                    style: {
                                                                        width: "176px",
                                                                        borderRadius: "10px",
                                                                        border: shouldGlitch ? "1px solid rgba(255,10,20,0.85)" : "1px solid rgba(255,255,255,0.09)",
                                                                        transform: shouldGlitch ? "translate3d(".concat(offsetX.toFixed(1), "px, ").concat(offsetY.toFixed(1), "px, 0) perspective(520px) rotateY(").concat(bendY.toFixed(2), "deg) rotateX(").concat(bendX, "deg)") : "perspective(520px) rotateY(".concat(bendY.toFixed(2), "deg) rotateX(").concat(bendX, "deg)"),
                                                                        transformOrigin: idx < tilesPerFaceInner / 2 ? "left center" : "right center",
                                                                        transformStyle: "preserve-3d",
                                                                        boxShadow: shouldGlitch ? "0 0 0 rgba(0,0,0,0)" : "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -8px 18px rgba(0,0,0,0.55), inset 0 8px 12px rgba(255,255,255,0.06)",
                                                                        overflow: "hidden"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: src,
                                                                            alt: "pipe tile",
                                                                            className: "h-full w-full object-cover select-none",
                                                                            draggable: false,
                                                                            loading: "lazy",
                                                                            decoding: "async",
                                                                            fetchPriority: "low",
                                                                            style: shouldGlitch ? {
                                                                                transform: "translate3d(".concat((offsetX * 0.6).toFixed(1), "px, 0, 0) skewX(").concat(skew.toFixed(2), "deg) scaleX(").concat((1 + Math.abs(skew) * 0.04).toFixed(3), ")"),
                                                                                filter: tileHash % 2 === 0 ? "contrast(1.9) brightness(1.35) saturate(1.9) hue-rotate(-14deg)" : "contrast(1.7) grayscale(1) brightness(1.45)"
                                                                            } : undefined
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-0",
                                                                            style: {
                                                                                background: "linear-gradient(to bottom, rgba(255,255,255,0.10) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.55) 100%), linear-gradient(to right, rgba(0,0,0,0.48) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.52) 100%), radial-gradient(ellipse at 50% 50%, transparent 64%, rgba(0,0,0,0.42) 100%)"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                            lineNumber: 270,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-0 rounded-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_2px_rgba(0,0,0,0.8)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20 opacity-60"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                            lineNumber: 277,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        shouldGlitch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "pointer-events-none absolute inset-0 overflow-hidden",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 mix-blend-screen",
                                                                                            style: {
                                                                                                background: "rgba(255,10,20,0.42)",
                                                                                                transform: "translate3d(".concat(-4 - tileHash % 4, "px, 0, 0)"),
                                                                                                clipPath: "inset(".concat(sliceTop, "% 0 ").concat(72 - sliceTop, "% 0)"),
                                                                                                opacity: 0.95
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                            lineNumber: 282,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 mix-blend-screen",
                                                                                            style: {
                                                                                                background: "rgba(255,255,255,0.38)",
                                                                                                transform: "translate3d(".concat(3 + tileHash % 5, "px, 0, 0)"),
                                                                                                clipPath: "inset(".concat(sliceTop, "% 0 ").concat(72 - sliceTop, "% 0)"),
                                                                                                opacity: 0.9
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                            lineNumber: 291,
                                                                                            columnNumber: 39
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "absolute inset-0 mix-blend-multiply bg-black/45",
                                                                                            style: {
                                                                                                clipPath: "inset(".concat(sliceTop, "% 0 ").concat(72 - sliceTop, "% 0)")
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                            lineNumber: 300,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                    lineNumber: 281,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "pointer-events-none absolute left-0 right-0 h-[7px] bg-white",
                                                                                    style: {
                                                                                        top: "".concat(sliceTop, "%"),
                                                                                        boxShadow: "-3px 0 0 #ff0a14, 3px 0 0 black, 0 0 8px rgba(255,255,255,0.9)",
                                                                                        transform: "translate3d(".concat((tileHash % 7 - 3).toFixed(1), "px, 0, 0)"),
                                                                                        opacity: 0.98
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                    lineNumber: 308,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "pointer-events-none absolute left-0 right-0 h-[2px] bg-[#ff0a14]",
                                                                                    style: {
                                                                                        top: "".concat((sliceTop + 22) % 88, "%"),
                                                                                        boxShadow: "0 0 7px #ff0a14",
                                                                                        transform: "translate3d(".concat((tileHash % 5 - 2).toFixed(1), "px, 0, 0)")
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                    lineNumber: 317,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "pointer-events-none absolute inset-0 opacity-55",
                                                                                    style: {
                                                                                        backgroundImage: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.18) 2px, rgba(255,255,255,0.18) 3px)",
                                                                                        mixBlendMode: "overlay"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                                    lineNumber: 325,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, "".concat(dup, "-").concat(idx), true, {
                                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 31
                                                                }, this);
                                                            })
                                                        }, dup, false, {
                                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, faceIdx, true, {
                                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gradient-to-b from-transparent via-white/10 to-transparent",
                                        style: {
                                            transform: "translateZ(".concat(radius + 1, "px)")
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[90%] bg-gradient-to-b from-transparent via-white/10 to-transparent",
                                        style: {
                                            transform: "translateZ(".concat(radius + 1, "px)")
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -left-[1%] top-1/2 -translate-y-1/2 w-[28%] h-[150%] bg-gradient-to-r from-[#050508] via-[#050508]/90 via-35% to-transparent z-20"
                        }, void 0, false, {
                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -right-[1%] top-1/2 -translate-y-1/2 w-[28%] h-[150%] bg-gradient-to-l from-[#050508] via-[#050508]/90 via-35% to-transparent z-20"
                        }, void 0, false, {
                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -left-[2%] top-1/2 -translate-y-1/2 w-[36%] h-[180%] bg-[#050508] blur-[28px] opacity-60 z-20"
                        }, void 0, false, {
                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute -right-[2%] top-1/2 -translate-y-1/2 w-[36%] h-[180%] bg-[#050508] blur-[28px] opacity-60 z-20"
                        }, void 0, false, {
                            fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: '\n        @keyframes pipe-marquee-fwd {\n          0% { transform: translateX(0); }\n          100% { transform: translateX(-50%); }\n        }\n        @keyframes pipe-marquee-rev {\n          0% { transform: translateX(-50%); }\n          100% { transform: translateX(0); }\n        }\n        @keyframes pipe-spin {\n          0% { transform: rotateX(0deg); }\n          100% { transform: rotateX(360deg); }\n        }\n        .pipe-spin { transform-style: preserve-3d; will-change: transform; }\n        @media (max-width: 768px) {\n          .pipe-group {\n            transform: rotateZ(-14deg) rotateX(10deg) rotateY(-8deg) scale(0.52) !important;\n          }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .pipe-spin, [style*="pipe-marquee"] { animation: none !important; }\n        }\n      '
            }, void 0, false, {
                fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/background/PipeMarqueeBackground.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(PipeMarqueeBackground, "OVMom4OkVzeT8nIvaQWnkCSwgIM=");
_c = PipeMarqueeBackground;
var _c;
__turbopack_context__.k.register(_c, "PipeMarqueeBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lightswind/ether-waves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EtherWavesBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const vertexShader = "\nprecision highp float;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 1.0);\n}\n";
const fragmentShader = "\nprecision highp float;\n\nvarying vec2 vUv;\n\nuniform float iTime;\nuniform vec3  iResolution;\nuniform float animationSpeed;\n\nuniform int topLineCount; // Grid density selector\n\nuniform vec2 iMouse;\nuniform bool interactive;\nuniform float bendRadius;\nuniform float bendStrength;\nuniform float bendInfluence;\n\nuniform bool parallax;\nuniform float parallaxStrength;\nuniform vec2 parallaxOffset;\n\nuniform vec3 lineGradient[8];\nuniform int lineGradientCount;\n\nuniform bool transparentBg;\n\nmat2 rotate(float r) {\n  return mat2(cos(r), sin(r), -sin(r), cos(r));\n}\n\nvec3 getLineColor(float t) {\n  if (lineGradientCount <= 0) {\n    return vec3(0.0, 0.94, 1.0); // Cyan fallback\n  }\n  \n  if (lineGradientCount == 1) {\n    return lineGradient[0];\n  }\n  \n  float clampedT = clamp(t, 0.0, 0.9999);\n  float scaled = clampedT * float(lineGradientCount - 1);\n  int idx = int(floor(scaled));\n  float f = fract(scaled);\n  \n  vec3 c1 = vec3(0.0);\n  vec3 c2 = vec3(0.0);\n  \n  for (int i = 0; i < 8; i++) {\n    if (i == idx) {\n      c1 = lineGradient[i];\n    }\n    if (i == idx + 1) {\n      c2 = lineGradient[i];\n    }\n  }\n  \n  return mix(c1, c2, f);\n}\n\nfloat getHeight(vec2 p) {\n  float time = iTime * animationSpeed;\n  \n  // Complex multi-layered wave functions for organic liquid motion\n  float w1 = sin(p.x * 0.7 + time * 0.4) * cos(p.y * 0.6 + time * 0.3) * 0.5;\n  float w2 = cos(p.x * 1.3 - time * 0.6) * sin(p.y * 1.0 + time * 0.4) * 0.25;\n  float w3 = sin(p.x * 2.8 + time * 1.1) * cos(p.y * 2.2 - time * 0.8) * 0.08;\n  \n  float h = w1 + w2 + w3;\n  \n  if (interactive) {\n    // Coordinate mapping for 3D cursor position\n    vec2 mouseNorm = (iMouse.xy / iResolution.xy) - 0.5;\n    vec2 mouseP = vec2(mouseNorm.x * 5.5, -mouseNorm.y * 4.2);\n    \n    float d = length(p - mouseP);\n    float influence = exp(-d * d * bendRadius);\n    \n    // Displace wave landscape\n    h += influence * bendStrength * 1.5 * bendInfluence;\n  }\n  \n  return h;\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord) {\n  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;\n  baseUv.y *= -1.0;\n  \n  if (parallax) {\n    baseUv += parallaxOffset;\n  }\n\n  vec3 col = vec3(0.0);\n\n  // Setup Camera Ray\n  vec3 ro = vec3(0.0, 1.9, 3.4); \n  vec3 rd = normalize(vec3(baseUv, -1.8)); \n  \n  // Slow camera orbit\n  float rx = 0.44;\n  float ry = iTime * 0.035; \n  \n  if (interactive) {\n    vec2 mUv = (iMouse.xy / iResolution.xy) - 0.5;\n    rx += mUv.y * 0.14;\n    ry += mUv.x * 0.20;\n  }\n  \n  mat2 rotX = rotate(rx);\n  mat2 rotY = rotate(ry);\n  \n  ro.yz *= rotX; rd.yz *= rotX;\n  ro.xz *= rotY; rd.xz *= rotY;\n  \n  float t = 0.01;\n  float maxD = 25.0;\n  bool hit = false;\n  vec3 p;\n  \n  // Raymarch terrain surface\n  for (int i = 0; i < 48; i++) {\n    p = ro + rd * t;\n    float h = getHeight(p.xz);\n    float diff = p.y - h;\n    \n    if (diff < 0.01) {\n      hit = true;\n      t += diff * 0.5;\n      break;\n    }\n    t += max(diff * 0.4, 0.05);\n    if (t > maxD) break;\n  }\n\n  if (hit) {\n    // Grid density scale mapping\n    float gridScale = float(topLineCount) * 0.28;\n    \n    float valX = abs(fract(p.x * gridScale - 0.5) - 0.5);\n    float valZ = abs(fract(p.z * gridScale - 0.5) - 0.5);\n    \n    // Distance to the nearest grid node intersection\n    float distToNode = length(vec2(valX, valZ));\n    \n    // Adaptive dot node size in perspective\n    float nodeRadius = 0.038 / (t * 0.12 + 0.4);\n    float nodeGlow = exp(-distToNode * distToNode / (nodeRadius * nodeRadius));\n    \n    // Micro-thin constellation lines connecting nodes\n    float lineThickness = 0.0022 + t * 0.0004;\n    float lineX = smoothstep(lineThickness, 0.0, valX);\n    float lineZ = smoothstep(lineThickness, 0.0, valZ);\n    float lines = max(lineX, lineZ) * 0.26; // Faint connection line scale\n    \n    float grid = max(nodeGlow * 1.5, lines);\n    \n    // Map vertical height to color gradient stop\n    float heightPercent = clamp((p.y + 0.65) / 1.3, 0.0, 1.0);\n    vec3 lineCol = getLineColor(heightPercent);\n    \n    // Cursor proximity glow\n    float glow = 0.0;\n    if (interactive) {\n      vec2 mouseNorm = (iMouse.xy / iResolution.xy) - 0.5;\n      vec2 mouseP = vec2(mouseNorm.x * 5.5, -mouseNorm.y * 4.2);\n      float d = length(p.xz - mouseP);\n      glow = exp(-d * d * 1.6) * bendInfluence;\n    }\n    \n    vec3 finalNodeCol = mix(lineCol, vec3(1.4), glow * 0.85);\n    \n    // Depth fog fade out\n    float depthFade = smoothstep(maxD, 2.2, t);\n    \n    col = finalNodeCol * grid * depthFade;\n    \n    // Subtle background nebula fog\n    vec3 nebulaFog = lineCol * 0.045 * (1.0 - depthFade);\n    col += nebulaFog;\n    \n    if (transparentBg) {\n      float alpha = smoothstep(0.0, 0.12, max(max(col.r, col.g), col.b));\n      fragColor = vec4(col, alpha);\n    } else {\n      vec3 bgCol = vec3(0.01, 0.012, 0.018) + baseUv.y * 0.01;\n      fragColor = vec4(col + bgCol, 1.0);\n    }\n  } else {\n    // Subtle space dust twinkling in background\n    float spaceDust = 0.0;\n    vec3 dustPos = (ro + rd * maxD) * 1.6;\n    float n = sin(floor(dustPos.x) * 12.98 + floor(dustPos.y) * 78.23 + floor(dustPos.z) * 43.7) * 43758.5453;\n    if (fract(n) > 0.992) {\n      vec3 localPos = fract(dustPos) - 0.5;\n      spaceDust = exp(-length(localPos) * length(localPos) * 35.0) * (0.2 + sin(iTime * 1.6 + n) * 0.15);\n    }\n\n    if (transparentBg) {\n      fragColor = vec4(vec3(1.0) * spaceDust * 0.35, spaceDust * 0.15);\n    } else {\n      vec3 bgCol = vec3(0.01, 0.012, 0.018) + baseUv.y * 0.01 + vec3(1.0) * spaceDust * 0.25;\n      fragColor = vec4(bgCol, 1.0);\n    }\n  }\n}\n\nvoid main() {\n  vec4 color = vec4(0.0);\n  mainImage(color, gl_FragCoord.xy);\n  gl_FragColor = color;\n}\n";
const MAX_GRADIENT_STOPS = 8;
const DEFAULT_GRADIENT = [
    "#00f0ff",
    "#a855f7",
    "#d946ef",
    "#3b82f6"
];
function hexToVec3(hex) {
    let value = hex.trim();
    if (value.startsWith("#")) {
        value = value.slice(1);
    }
    let r = 255;
    let g = 255;
    let b = 255;
    if (value.length === 3) {
        r = parseInt(value[0] + value[0], 16);
        g = parseInt(value[1] + value[1], 16);
        b = parseInt(value[2] + value[2], 16);
    } else if (value.length === 6) {
        r = parseInt(value.slice(0, 2), 16);
        g = parseInt(value.slice(2, 4), 16);
        b = parseInt(value.slice(4, 6), 16);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](r / 255, g / 255, b / 255);
}
function EtherWavesBackground(param) {
    let { linesGradient = DEFAULT_GRADIENT, enabledWaves = [
        "top",
        "middle",
        "bottom"
    ], lineCount = [
        6
    ], lineDistance = [
        5
    ], topWavePosition = {
        x: 10.0,
        y: 0.5,
        rotate: -0.4
    }, middleWavePosition = {
        x: 5.0,
        y: 0.0,
        rotate: 0.2
    }, bottomWavePosition = {
        x: 2.0,
        y: -0.7,
        rotate: 0.4
    }, animationSpeed = 1.0, interactive = true, bendRadius = 0.5, bendStrength = -0.6, mouseDamping = 0.06, parallax = true, parallaxStrength = 0.18, mixBlendMode = "normal", transparentBg = true, className = "" } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef);
    const targetMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const currentMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000));
    const targetInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const currentInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const targetParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
    const currentParallaxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0));
    var _lineCount_;
    const density = typeof lineCount === "number" ? lineCount : (_lineCount_ = lineCount[0]) !== null && _lineCount_ !== void 0 ? _lineCount_ : 6;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EtherWavesBackground.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            if ("object" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const isMobile = "object" !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
            const effectiveDensity = isMobile ? Math.max(3, Math.floor(density * 0.6)) : density;
            let active = true;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
            camera.position.z = 1;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: !isMobile,
                alpha: transparentBg
            });
            renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio || 1, 1) : Math.min(window.devicePixelRatio || 1, 1.5));
            if (transparentBg) {
                renderer.setClearColor(0x000000, 0);
            }
            renderer.domElement.style.width = "100%";
            renderer.domElement.style.height = "100%";
            renderer.domElement.style.display = "block";
            container.appendChild(renderer.domElement);
            const uniforms = {
                iTime: {
                    value: 0
                },
                iResolution: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
                },
                animationSpeed: {
                    value: animationSpeed
                },
                topLineCount: {
                    value: effectiveDensity
                },
                iMouse: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1000, -1000)
                },
                interactive: {
                    value: interactive
                },
                bendRadius: {
                    value: bendRadius
                },
                bendStrength: {
                    value: bendStrength
                },
                bendInfluence: {
                    value: 0
                },
                parallax: {
                    value: parallax
                },
                parallaxStrength: {
                    value: parallaxStrength
                },
                parallaxOffset: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                },
                lineGradient: {
                    value: Array.from({
                        length: MAX_GRADIENT_STOPS
                    }, {
                        "EtherWavesBackground.useEffect": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1)
                    }["EtherWavesBackground.useEffect"])
                },
                lineGradientCount: {
                    value: 0
                },
                transparentBg: {
                    value: transparentBg
                }
            };
            if (linesGradient && linesGradient.length > 0) {
                const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
                uniforms.lineGradientCount.value = stops.length;
                stops.forEach({
                    "EtherWavesBackground.useEffect": (hex, i)=>{
                        const color = hexToVec3(hex);
                        uniforms.lineGradient.value[i].set(color.x, color.y, color.z);
                    }
                }["EtherWavesBackground.useEffect"]);
            }
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms,
                vertexShader,
                fragmentShader,
                transparent: transparentBg,
                depthWrite: false,
                depthTest: false
            });
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            scene.add(mesh);
            const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
            const setSize = {
                "EtherWavesBackground.useEffect.setSize": ()=>{
                    if (!active) return;
                    const width = container.clientWidth || 1;
                    const height = container.clientHeight || 1;
                    renderer.setSize(width, height, false);
                    const canvasWidth = renderer.domElement.width;
                    const canvasHeight = renderer.domElement.height;
                    uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);
                }
            }["EtherWavesBackground.useEffect.setSize"];
            setSize();
            const resizeObserver = new ResizeObserver({
                "EtherWavesBackground.useEffect": ()=>{
                    if (active) setSize();
                }
            }["EtherWavesBackground.useEffect"]);
            resizeObserver.observe(container);
            const handlePointerMove = {
                "EtherWavesBackground.useEffect.handlePointerMove": (event)=>{
                    const rect = renderer.domElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const dpr = renderer.getPixelRatio();
                    targetMouseRef.current.set(x * dpr, (rect.height - y) * dpr);
                    targetInfluenceRef.current = 1.0;
                    if (parallax) {
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const offsetX = (x - centerX) / rect.width;
                        const offsetY = -(y - centerY) / rect.height;
                        targetParallaxRef.current.set(offsetX * parallaxStrength, offsetY * parallaxStrength);
                    }
                }
            }["EtherWavesBackground.useEffect.handlePointerMove"];
            const handlePointerLeave = {
                "EtherWavesBackground.useEffect.handlePointerLeave": ()=>{
                    targetInfluenceRef.current = 0.0;
                    targetParallaxRef.current.set(0, 0);
                }
            }["EtherWavesBackground.useEffect.handlePointerLeave"];
            if (interactive) {
                container.addEventListener("pointermove", handlePointerMove);
                container.addEventListener("pointerleave", handlePointerLeave);
            }
            let rafId = 0;
            const renderLoop = {
                "EtherWavesBackground.useEffect.renderLoop": ()=>{
                    if (!active) return;
                    if (isInView) {
                        uniforms.iTime.value = clock.getElapsedTime();
                        if (interactive) {
                            currentMouseRef.current.lerp(targetMouseRef.current, mouseDamping);
                            uniforms.iMouse.value.copy(currentMouseRef.current);
                            currentInfluenceRef.current += (targetInfluenceRef.current - currentInfluenceRef.current) * mouseDamping;
                            uniforms.bendInfluence.value = currentInfluenceRef.current;
                        }
                        if (parallax) {
                            currentParallaxRef.current.lerp(targetParallaxRef.current, mouseDamping);
                            uniforms.parallaxOffset.value.copy(currentParallaxRef.current);
                        }
                        renderer.render(scene, camera);
                    }
                    rafId = requestAnimationFrame(renderLoop);
                }
            }["EtherWavesBackground.useEffect.renderLoop"];
            renderLoop();
            return ({
                "EtherWavesBackground.useEffect": ()=>{
                    active = false;
                    cancelAnimationFrame(rafId);
                    resizeObserver.disconnect();
                    if (interactive) {
                        container.removeEventListener("pointermove", handlePointerMove);
                        container.removeEventListener("pointerleave", handlePointerLeave);
                    }
                    geometry.dispose();
                    material.dispose();
                    renderer.dispose();
                    renderer.forceContextLoss();
                    if (renderer.domElement.parentElement) {
                        renderer.domElement.parentElement.removeChild(renderer.domElement);
                    }
                }
            })["EtherWavesBackground.useEffect"];
        }
    }["EtherWavesBackground.useEffect"], [
        linesGradient,
        enabledWaves,
        density,
        lineDistance,
        topWavePosition,
        middleWavePosition,
        bottomWavePosition,
        animationSpeed,
        interactive,
        bendRadius,
        bendStrength,
        mouseDamping,
        parallax,
        parallaxStrength,
        transparentBg,
        isInView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 w-full h-full overflow-hidden ".concat(className),
        style: {
            mixBlendMode,
            pointerEvents: "auto"
        }
    }, void 0, false, {
        fileName: "[project]/components/lightswind/ether-waves.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s(EtherWavesBackground, "U/B4VbrzY6RmBhbEHqCwkp4nrxU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = EtherWavesBackground;
var _c;
__turbopack_context__.k.register(_c, "EtherWavesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project/Project.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Project
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/effects/GlitchText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$PipeMarqueeBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/background/PipeMarqueeBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$ether$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lightswind/ether-waves.tsx [app-client] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function Project(param) {
    let { onProjectClick } = param;
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Project.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Project.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentRef.current, {
                        opacity: 0,
                        y: 80
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["Project.useEffect.ctx"], sectionRef);
            return ({
                "Project.useEffect": ()=>ctx.revert()
            })["Project.useEffect"];
        }
    }["Project.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "project",
        className: "relative z-10 min-h-[70vh] py-32 px-6 md:px-16 lg:px-24 overflow-hidden flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cursor$2f$FisheyeCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "absolute inset-0 z-0 pointer-events-none overflow-hidden",
                strength: 110,
                radius: 360,
                damping: 0.14,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lightswind$2f$ether$2d$waves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "absolute inset-0",
                    interactive: false,
                    parallax: false,
                    animationSpeed: 0.9,
                    linesGradient: [
                        "#5b21b6",
                        "#7c3aed",
                        "#a78bfa"
                    ],
                    transparentBg: true
                }, void 0, false, {
                    fileName: "[project]/components/project/Project.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$background$2f$PipeMarqueeBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                count: 8,
                radius: 185,
                rotateSpeed: 32,
                glitchIntensity: "strong",
                className: "absolute inset-0 z-0"
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] bg-void/22 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] bg-gradient-to-b from-void/12 via-transparent to-void/18 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] bg-gradient-to-r from-void/8 via-transparent to-void/8 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-divider absolute top-0 left-0 right-0 z-10"
            }, void 0, false, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: "relative z-10 max-w-3xl mx-auto w-full text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs tracking-[0.5em] text-white uppercase mb-8 block",
                        style: {
                            textShadow: "0 2px 18px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "02 — Work",
                            as: "span",
                            intensity: "low",
                            trigger: "scroll"
                        }, void 0, false, {
                            fileName: "[project]/components/project/Project.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/Project.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-6 mix-blend-difference",
                        style: {
                            textShadow: "0 4px 32px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.9), 0 0 48px rgba(0,0,0,0.6)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "View Project",
                            as: "span",
                            intensity: "medium",
                            trigger: "scroll"
                        }, void 0, false, {
                            fileName: "[project]/components/project/Project.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/Project.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg text-white max-w-xl mx-auto mb-10 leading-relaxed",
                        style: {
                            textShadow: "0 2px 20px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.85)"
                        },
                        children: "A selected project that shows my work in web development and design — built with clean code, creative thinking, and attention to detail."
                    }, void 0, false, {
                        fileName: "[project]/components/project/Project.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onProjectClick === null || onProjectClick === void 0 ? void 0 : onProjectClick(),
                        className: "inline-flex items-center gap-3 px-10 py-5 border border-white/40 text-white tracking-[0.2em] text-sm uppercase hover:bg-white hover:text-black transition-all duration-500 group rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.8)]",
                        style: {
                            textShadow: "0 1px 12px rgba(0,0,0,0.9)"
                        },
                        "data-cursor-hover": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/project/Project.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Enter Project",
                                as: "span",
                                intensity: "low",
                                trigger: "hover"
                            }, void 0, false, {
                                fileName: "[project]/components/project/Project.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 18,
                                className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/components/project/Project.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/Project.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-5xl font-mono text-white/60 tracking-wider mix-blend-difference",
                            style: {
                                textShadow: "0 2px 18px rgba(0,0,0,0.9)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$effects$2f$GlitchText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "0x01",
                                as: "span",
                                intensity: "high",
                                trigger: "always"
                            }, void 0, false, {
                                fileName: "[project]/components/project/Project.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project/Project.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/Project.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/Project.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/Project.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Project, "4gme7LlC2H9+ORXwBRSGZ81UqMk=");
_c = Project;
var _c;
__turbopack_context__.k.register(_c, "Project");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project/Project.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/project/Project.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_4ef06706._.js.map