import {r as o, j as e} from "./main-CYXXZbJT.js";
const u = (...a) => a.filter( (s, r, i) => !!s && s.trim() !== "" && i.indexOf(s) === r).join(" ").trim();
const N = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const y = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, r, i) => i ? i.toUpperCase() : r.toLowerCase());
const m = a => {
    const s = y(a);
    return s.charAt(0).toUpperCase() + s.slice(1)
}
;
var v = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const k = a => {
    for (const s in a)
        if (s.startsWith("aria-") || s === "role" || s === "title")
            return !0;
    return !1
}
;
const b = o.forwardRef( ({color: a="currentColor", size: s=24, strokeWidth: r=2, absoluteStrokeWidth: i, className: n="", children: c, iconNode: x, ...h}, f) => o.createElement("svg", {
    ref: f,
    ...v,
    width: s,
    height: s,
    stroke: a,
    strokeWidth: i ? Number(r) * 24 / Number(s) : r,
    className: u("lucide", n),
    ...!c && !k(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...x.map( ([j,g]) => o.createElement(j, g)), ...Array.isArray(c) ? c : [c]]));
const t = (a, s) => {
    const r = o.forwardRef( ({className: i, ...n}, c) => o.createElement(b, {
        ref: c,
        iconNode: s,
        className: u(`lucide-${N(m(a))}`, `lucide-${a}`, i),
        ...n
    }));
    return r.displayName = m(a),
    r
}
;
const w = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , A = t("check", w);
const C = [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]
  , p = t("credit-card", C);
const z = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , _ = t("download", z);
const S = [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]
  , E = t("eye", S);
const P = [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]
  , $ = t("lock", P);
const M = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , L = t("send", M);
const U = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , D = t("shield", U);
const F = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , G = t("zap", F);
const PackageIcon = (props) => e.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size || 24,
    height: props.size || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
        e.jsx("path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }),
        e.jsx("path", { d: "M12 22V12" }),
        e.jsx("path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" }),
        e.jsx("path", { d: "m7.5 4.27 9 5.15" })
    ]
});
const StarIcon = (props) => e.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size || 14,
    height: props.size || 14,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: e.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
});

const MODS_DATA = [
  {
    id: "m1",
    name: "SpaceX Mod Menu",
    description: "The core SpaceX mod menu with ESP, Aimbot, and all premium features packed in one lightweight APK.",
    version: "3.2.1",
    fileSize: "114 MB",
    type: "Menu",
    rating: 5,
    apkUrl: "https://github.com/AlexMohamedAfk/Zobr/raw/refs/heads/main/app-debug.apk",
    color: "#0071e3"
  },
  {
    id: "m2",
    name: "PUBG GL Patched",
    description: "PUBG Global pre-patched with SpaceX Engine injected — install and play instantly, no root required.",
    version: "1.1",
    fileSize: "109 MB",
    type: "Patched APK",
    rating: 5,
    apkUrl: "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/GL.apk",
    color: "#f59e0b"
  },
  {
    id: "m3",
    name: "PUBG KR Patched",
    description: "PUBG Korea pre-patched edition with SpaceX Engine. Korea server optimized.",
    version: "1.1",
    fileSize: "109 MB",
    type: "Patched APK",
    rating: 4,
    apkUrl: "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/KR.apk",
    color: "#ef4444"
  },
  {
    id: "m4",
    name: "PUBG TW Patched",
    description: "PUBG Taiwan pre-patched edition. Taiwan & Asia server ready with full SpaceX support.",
    version: "1.1",
    fileSize: "109 MB",
    type: "Patched APK",
    rating: 4,
    apkUrl: "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/TW.apk",
    color: "#10b981"
  }
];

function ModsSection() {
    const typeColorMap = {
        "Menu": { bg: "#0071e31a", border: "#0071e34d", text: "#60aaff" },
        "Patched APK": { bg: "#f59e0b1a", border: "#f59e0b4d", text: "#fbbf24" },
    };
    return e.jsx("section", {
        className: "mods-section",
        id: "mods",
        children: e.jsxs("div", {
            className: "section-inner",
            children: [
                e.jsxs("div", {
                    className: "mods-header",
                    children: [
                        e.jsx("div", { className: "mods-icon-bg", children: e.jsx(PackageIcon, { size: 28 }) }),
                        e.jsxs("div", {
                            children: [
                                e.jsx("h2", { className: "section-title mods-title", children: "Mod Downloads" }),
                                e.jsx("p", { className: "section-sub mods-sub", children: "Download the latest SpaceX mods and patched APKs — all verified and ready to use." })
                            ]
                        })
                    ]
                }),
                e.jsx("div", {
                    className: "mods-grid",
                    children: MODS_DATA.map(mod => {
                        const typeStyle = typeColorMap[mod.type] || typeColorMap["Menu"];
                        return e.jsxs("div", {
                            className: "mod-card",
                            style: { "--mod-accent": mod.color },
                            children: [
                                e.jsxs("div", {
                                    className: "mod-card-top",
                                    children: [
                                        e.jsx("div", {
                                            className: "mod-icon-box",
                                            children: e.jsx(PackageIcon, { size: 22 })
                                        }),
                                        e.jsxs("div", {
                                            className: "mod-type-badge",
                                            style: { background: typeStyle.bg, border: `1px solid ${typeStyle.border}`, color: typeStyle.text },
                                            children: mod.type
                                        })
                                    ]
                                }),
                                e.jsx("h3", { className: "mod-name", children: mod.name }),
                                e.jsx("p", { className: "mod-desc", children: mod.description }),
                                e.jsxs("div", {
                                    className: "mod-meta",
                                    children: [
                                        e.jsxs("span", { className: "mod-meta-item", children: ["v", mod.version] }),
                                        e.jsx("span", { className: "mod-meta-sep" }),
                                        e.jsx("span", { className: "mod-meta-item", children: mod.fileSize }),
                                        e.jsx("span", { className: "mod-meta-sep" }),
                                        e.jsx("span", {
                                            className: "mod-stars",
                                            children: Array.from({ length: 5 }, (_, i) =>
                                                e.jsx(StarIcon, { size: 12, style: { color: i < mod.rating ? "#f59e0b" : "#3a3a4a" } }, i)
                                            )
                                        })
                                    ]
                                }),
                                e.jsxs("a", {
                                    href: mod.apkUrl,
                                    className: "mod-download-btn",
                                    download: true,
                                    children: [
                                        e.jsx(_, { size: 16 }),
                                        "Download"
                                    ]
                                })
                            ]
                        }, mod.id);
                    })
                })
            ]
        })
    });
}


const FALLBACK_STORE_DATA = [
  {
    "id": "1",
    "name": "PUBG Global",
    "packageName": "com.tencent.ig",
    "version": "1.1",
    "apkUrl": "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/GL.apk",
    "iconUrl": "https://raw.githubusercontent.com/AlexMohamedAfk/root/main/GL.png",
    "isSafe": true,
    "statusLabel": "Safe",
    "lastUpdate": "Updated"
  },
  {
    "id": "2",
    "name": "PUBG Korea",
    "packageName": "com.pubg.krmobile",
    "version": "1.1",
    "apkUrl": "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/KR.apk",
    "iconUrl": "https://raw.githubusercontent.com/AlexMohamedAfk/root/main/KR.png",
    "isSafe": true,
    "statusLabel": "Safe",
    "lastUpdate": "Updated"
  },
  {
    "id": "3",
    "name": "PUBG Taiwan",
    "packageName": "com.rekoo.pubgm",
    "version": "1.1",
    "apkUrl": "https://github.com/AlexMohamedAfk/root/releases/download/SpaceX/TW.apk",
    "iconUrl": "https://raw.githubusercontent.com/AlexMohamedAfk/root/main/TW.png",
    "isSafe": true,
    "statusLabel": "Safe",
    "lastUpdate": "Updated"
  },
  {
    "id": "4",
    "name": "PUBG Vietnam",
    "packageName": "com.vng.pubgmobile",
    "version": "1.0",
    "apkUrl": "https://github.com/AlexMohamedAfk/root/releases/download/v3.1.0/VN.apk",
    "iconUrl": "https://raw.githubusercontent.com/AlexMohamedAfk/root/main/VN.png",
    "isSafe": false,
    "statusLabel": "Risk",
    "lastUpdate": "NotUpdated"
  }
];

const AlertTriangle = (props) => e.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size || 16,
    height: props.size || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
    children: e.jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" })
});

function StoreSection() {
    const [data, setData] = o.useState(FALLBACK_STORE_DATA);
    const [loading, setLoading] = o.useState(true);
    const [selectedMirrors, setSelectedMirrors] = o.useState({});

    o.useEffect(() => {
        let active = true;
        fetch("https://raw.githubusercontent.com/AlexMohamedAfk/root/main/store.json")
            .then(res => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(json => {
                if (active) {
                    if (Array.isArray(json)) {
                        setData(json);
                    }
                    setLoading(false);
                }
            })
            .catch(err => {
                console.error("Failed to fetch store data, using fallback:", err);
                if (active) {
                    setLoading(false);
                }
            });
        return () => {
            active = false;
        };
    }, []);

    const handleMirrorChange = (id, value) => {
        setSelectedMirrors(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const getDownloadUrl = (item) => {
        const mirror = selectedMirrors[item.id] || "direct";
        if (mirror === "ghproxy") {
            return `https://mirror.ghproxy.com/${item.apkUrl}`;
        }
        if (mirror === "ghfast") {
            return `https://ghfast.top/${item.apkUrl}`;
        }
        if (mirror === "gitmirror") {
            return `https://hub.gitmirror.com/${item.apkUrl}`;
        }
        return item.apkUrl;
    };

    if (loading) {
        return e.jsx("section", {
            className: "store-section",
            id: "download",
            children: e.jsxs("div", {
                className: "section-inner",
                children: [
                    e.jsx("h2", { className: "section-title", children: "Game Versions" }),
                    e.jsx("p", { className: "section-sub", children: "Loading the latest game versions..." }),
                    e.jsxs("div", {
                        className: "loading-container",
                        children: [
                            e.jsx("div", { className: "spinner" }),
                            e.jsx("p", { children: "Connecting to store..." })
                        ]
                    })
                ]
            })
        });
    }

    return e.jsx("section", {
        className: "store-section",
        id: "download",
        children: e.jsxs("div", {
            className: "section-inner",
            children: [
                e.jsx("h2", { className: "section-title", children: "Game Versions & Status" }),
                e.jsx("p", { className: "section-sub", children: "Direct downloads and high-speed mirror links optimized for players worldwide (including China)." }),
                e.jsx("div", {
                    className: "store-grid",
                    children: data.map(item => {
                        const isSafe = item.isSafe;
                        const isUpdated = item.lastUpdate === "Updated";
                        const downloadUrl = getDownloadUrl(item);
                        const selectedMirror = selectedMirrors[item.id] || "direct";

                        return e.jsxs("div", {
                            className: "store-card",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsxs("div", {
                                            className: "store-header",
                                            children: [
                                                e.jsx("div", {
                                                    className: "store-icon-wrapper",
                                                    children: e.jsx("img", {
                                                        src: item.iconUrl,
                                                        alt: item.name,
                                                        className: "store-icon",
                                                        onError: (evt) => {
                                                            evt.target.src = "https://raw.githubusercontent.com/AlexMohamedAfk/root/main/GL.png";
                                                        }
                                                    })
                                                }),
                                                e.jsxs("div", {
                                                    className: "store-title-container",
                                                    children: [
                                                        e.jsx("h3", { className: "store-name", children: item.name }),
                                                        e.jsx("span", { className: "store-package", children: item.packageName })
                                                    ]
                                                })
                                            ]
                                        }),
                                        e.jsxs("div", {
                                            className: "store-meta",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "store-meta-item",
                                                    children: [
                                                        e.jsx("span", { className: "store-meta-label", children: "Version" }),
                                                        e.jsx("span", { className: "store-meta-value", children: `v${item.version}` })
                                                    ]
                                                }),
                                                e.jsxs("div", {
                                                    className: "store-meta-item",
                                                    children: [
                                                        e.jsx("span", { className: "store-meta-label", children: "Safety Status" }),
                                                        e.jsxs("span", {
                                                            className: `badge ${isSafe ? "badge-safe" : "badge-danger"}`,
                                                            children: [
                                                                isSafe ? e.jsx(D, { size: 12 }) : e.jsx(AlertTriangle, { size: 12 }),
                                                                item.statusLabel || (isSafe ? "Safe" : "Risk")
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                e.jsxs("div", {
                                                    className: "store-meta-item",
                                                    children: [
                                                        e.jsx("span", { className: "store-meta-label", children: "Update Status" }),
                                                        e.jsx("span", {
                                                            className: `badge ${isUpdated ? "badge-updated" : "badge-outdated"}`,
                                                            children: isUpdated ? "Latest Version" : "Outdated"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e.jsxs("div", {
                                    className: "store-actions",
                                    children: [
                                        e.jsxs("div", {
                                            className: "mirror-select-container",
                                            children: [
                                                e.jsx("span", { className: "mirror-label", children: "Download Source" }),
                                                e.jsxs("select", {
                                                    className: "mirror-select",
                                                    value: selectedMirror,
                                                    onChange: (evt) => handleMirrorChange(item.id, evt.target.value),
                                                    children: [
                                                        e.jsx("option", { value: "direct", children: "Direct (GitHub Releases)" }),
                                                        e.jsx("option", { value: "ghproxy", children: "China Mirror 1 (ghproxy)" }),
                                                        e.jsx("option", { value: "ghfast", children: "China Mirror 2 (ghfast)" }),
                                                        e.jsx("option", { value: "gitmirror", children: "China Mirror 3 (gitmirror)" })
                                                    ]
                                                })
                                            ]
                                        }),
                                        e.jsxs("a", {
                                            href: downloadUrl,
                                            className: "store-btn store-btn-download",
                                            download: true,
                                            children: [
                                                e.jsx(_, { size: 16 }),
                                                "Download APK"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, item.id);
                    })
                })
            ]
        })
    });
}

function T() {
    return e.jsxs("div", {
        className: "spacex-root",
        children: [e.jsxs("section", {
            className: "hero-section",
            children: [e.jsx("div", {
                className: "hero-glow"
            }), e.jsxs("div", {
                className: "hero-content",
                children: [e.jsx("div", {
                    className: "hero-badge",
                    children: "Android Gaming Tool"
                }), e.jsxs("h1", {
                    className: "hero-title",
                    children: ["SpaceX Engine:", e.jsx("br", {}), e.jsx("span", {
                        className: "hero-title-accent",
                        children: "The Future of Gaming"
                    })]
                }), e.jsx("p", {
                    className: "hero-sub",
                    children: "Blazing-fast injection, military-grade security, and zero-lag performance — engineered for the players who demand more."
                }), e.jsxs("div", {
                    className: "hero-buttons",
                    children: [e.jsxs("a", {
                        href: "https://github.com/AlexMohamedAfk/Zobr/raw/refs/heads/main/app-debug.apk",
                        className: "btn-primary",
                        download: !0,
                        children: [e.jsx(_, {
                            size: 18
                        }), "Download APK"]
                    }), e.jsxs("a", {
                        href: "https://t.me/ImGuiUiMaker",
                        className: "btn-secondary",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [e.jsx(p, {
                            size: 18
                        }), "Buy License"]
                    })]
                })]
            })]
        }), e.jsx("section", {
            className: "section",
            id: "video",
            children: e.jsxs("div", {
                className: "section-inner",
                children: [e.jsx("h2", {
                    className: "section-title",
                    children: "See It in Action"
                }), e.jsx("p", {
                    className: "section-sub",
                    children: "Watch the engine tear through every session with precision."
                }), e.jsx("div", {
                    className: "video-container",
                    children: e.jsx("div", {
                        className: "video-inner",
                        children: e.jsx("iframe", {
                            className: "video-frame",
                            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                            title: "SpaceX Engine Demo",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0
                        })
                    })
                })]
            })
        }), e.jsx("section", {
            className: "section section-alt",
            id: "features",
            children: e.jsxs("div", {
                className: "section-inner",
                children: [e.jsx("h2", {
                    className: "section-title",
                    children: "Cheat Features"
                }), e.jsx("p", {
                    className: "section-sub",
                    children: "Every module built for reliability and speed."
                }), e.jsxs("div", {
                    className: "features-grid",
                    children: [e.jsx(l, {
                        icon: e.jsx(D, {
                            size: 28
                        }),
                        title: "Safe Injection",
                        description: "Kernel-level bypass with dynamic signature rotation keeps your account untouchable on every match launch."
                    }), e.jsx(l, {
                        icon: e.jsx(E, {
                            size: 28
                        }),
                        title: "Wallhack",
                        description: "Full ESP with distance tags, health bars, and loot highlights rendered at native frame rate — never miss a target."
                    }), e.jsx(l, {
                        icon: e.jsx(G, {
                            size: 28
                        }),
                        title: "FPS Optimization",
                        description: "Adaptive render-thread tuning squeezes out every extra frame, cutting input lag and stutters to zero."
                    }), e.jsx(l, {
                        icon: e.jsx($, {
                            size: 28
                        }),
                        title: "Anti-Ban Security",
                        description: "Real-time detection monitoring with instant stealth mode toggling and automatic log sanitization."
                    })]
                })]
            })
        }), e.jsx(ModsSection, {}), e.jsx(StoreSection, {}), e.jsx("section", {
            className: "section",
            id: "pricing",
            children: e.jsxs("div", {
                className: "section-inner",
                children: [e.jsx("h2", {
                    className: "section-title",
                    children: "Choose Your Plan"
                }), e.jsx("p", {
                    className: "section-sub",
                    children: "Flexible licensing — no subscriptions forced on you."
                }), e.jsxs("div", {
                    className: "pricing-grid",
                    children: [e.jsx(d, {
                        plan: "3 Day",
                        price: "150 EGP / 5$ USDT",
                        features: ["3-day access", "All cheat modules", "Basic support", "Single device"]
                    }), e.jsx(d, {
                        plan: "1 Week",
                        price: "200 EGP / 10$ USDT",
                        features: ["7-day access", "All cheat modules", "Priority support", "2 devices"]
                    }), e.jsx(d, {
                        plan: "1 Month",
                        price: "400 EGP / 20$ USDT",
                        featured: !0,
                        features: ["30-day access", "All cheat modules", "VIP support", "3 devices", "Auto-updates"]
                    }), e.jsx(d, {
                        plan: "2 Month",
                        price: "600 EGP / 30$ USDT",
                        features: ["60-day access", "All cheat modules", "VIP support", "3 devices", "Auto-updates", "Early access"]
                    })]
                })]
            })
        }), e.jsxs("footer", {
            className: "footer",
            children: [e.jsxs("div", {
                className: "footer-inner",
                children: [e.jsxs("div", {
                    className: "footer-brand",
                    children: [e.jsx("span", {
                        className: "footer-logo",
                        children: "SpaceX Engine"
                    }), e.jsx("p", {
                        className: "footer-tagline",
                        children: "Built for dominance. Engineered for security."
                    })]
                }), e.jsxs("div", {
                    className: "footer-links",
                    children: [e.jsx("h4", {
                        className: "footer-links-title",
                        children: "Quick Links"
                    }), e.jsx("a", {
                        href: "#video",
                        className: "footer-link",
                        children: "Video"
                    }), e.jsx("a", {
                        href: "#features",
                        className: "footer-link",
                        children: "Features"
                    }), e.jsx("a", {
                        href: "#pricing",
                        className: "footer-link",
                        children: "Pricing"
                    }), e.jsx("a", {
                        href: "#download",
                        className: "footer-link",
                        children: "Download"
                    }), e.jsx("a", {
                        href: "#mods",
                        className: "footer-link",
                        children: "Mods"
                    })]
                }), e.jsxs("div", {
                    className: "footer-links",
                    children: [e.jsx("h4", {
                        className: "footer-links-title",
                        children: "Support"
                    }), e.jsx("a", {
                        href: "#",
                        className: "footer-link",
                        children: "FAQ"
                    }), e.jsx("a", {
                        href: "#",
                        className: "footer-link",
                        children: "Terms of Use"
                    }), e.jsx("a", {
                        href: "#",
                        className: "footer-link",
                        children: "Privacy Policy"
                    })]
                }), e.jsxs("div", {
                    className: "footer-telegram",
                    children: [e.jsx("h4", {
                        className: "footer-links-title",
                        children: "Community"
                    }), e.jsxs("a", {
                        href: "https://t.me/SpaceXLoader",
                        className: "btn-telegram",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [e.jsx(L, {
                            size: 16
                        }), "Join Telegram Channel"]
                    }), e.jsxs("a", {
                        href: "https://t.me/ImGuiUiMaker",
                        className: "btn-telegram",
                        target: "_blank",
                        rel: "noreferrer",
                        style: {
                            marginTop: "0.5rem"
                        },
                        children: [e.jsx(p, {
                            size: 16
                        }), "Buy License (@ImGuiUiMaker)"]
                    })]
                })]
            }), e.jsxs("div", {
                className: "footer-copy",
                children: ["© ", new Date().getFullYear(), " SpaceX Engine. All rights reserved."]
            })]
        })]
    })
}
function l({icon: a, title: s, description: r}) {
    return e.jsxs("div", {
        className: "feature-card",
        children: [e.jsx("div", {
            className: "feature-icon",
            children: a
        }), e.jsx("h3", {
            className: "feature-title",
            children: s
        }), e.jsx("p", {
            className: "feature-desc",
            children: r
        })]
    })
}
function d({plan: a, price: s, features: r, featured: i=!1}) {
    return e.jsxs("div", {
        className: `pricing-card ${i ? "pricing-card--featured" : ""}`,
        children: [i && e.jsx("div", {
            className: "pricing-badge",
            children: "Most Popular"
        }), e.jsx("div", {
            className: "pricing-plan",
            children: a
        }), e.jsx("div", {
            className: "pricing-price",
            children: s
        }), e.jsx("ul", {
            className: "pricing-features",
            children: r.map(n => e.jsxs("li", {
                className: "pricing-feature",
                children: [e.jsx(A, {
                    size: 15,
                    className: "pricing-check"
                }), n]
            }, n))
        }), e.jsx("a", {
            href: "https://t.me/ImGuiUiMaker",
            target: "_blank",
            rel: "noreferrer",
            className: `pricing-btn ${i ? "pricing-btn--featured" : ""}`,
            children: "Purchase Now"
        })]
    })
}
export {T as component};
