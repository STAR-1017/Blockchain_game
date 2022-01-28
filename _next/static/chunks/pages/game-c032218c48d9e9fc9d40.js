(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [203], {
        3403: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, { default: function() { return v } });
            var t = a(92809),
                r = a(30266),
                o = a(809),
                i = a.n(o),
                s = a(70762),
                c = a.n(s),
                l = a(94184),
                _ = a.n(l),
                u = a(67294),
                m = a(39249),
                d = (a(30733), a(96245)),
                h = a(87146),
                f = a(10114),
                g = (a(81099), a(65779), a(82025)),
                p = (a(60776), a(3283)),
                y = a.n(p),
                P = (a(72740), a(42032)),
                x = a(15896),
                w = a(85893),
                S = a(77029);

            function v() {
                var e = (0, u.useState)({}),
                    n = e[0],
                    a = e[1],
                    o = (0, u.useState)(1),
                    s = o[0],
                    l = o[1],
                    p = (0, u.useState)(1),
                    v = (p[0], p[1], (0, u.useState)(1)),
                    b = (v[0], v[1], (0, u.useState)(!1)),
                    I = (b[0], b[1], (0, u.useState)(!1)),
                    j = I[0],
                    k = I[1],
                    N = (0, u.useState)([]),
                    C = (N[0], N[1], (0, u.useState)(0)),
                    L = (C[0], C[1]),
                    O = (0, u.useState)(""),
                    M = O[0],
                    B = O[1],
                    H = (0, u.useState)(0),
                    T = (H[0], H[1]),
                    E = (0, u.useState)(""),
                    Z = E[0],
                    q = E[1],
                    A = (0, u.useState)(!1),
                    F = A[0],
                    V = A[1],
                    G = null,
                    D = null;
                window.ethereum && (D = new(y())(window.ethereum), G = new D.eth.Contract(S, g.By)), (0, u.useEffect)((function() {
                    var e = window.localStorage.getItem(g.SH),
                        n = e && JSON.parse(e);
                    if (n && n.token) {
                        var t = (0, d.Z)(n.token);
                        t && t.exp && t.exp < Date.now() / 1e3 ? (window.localStorage.removeItem(g.SH), console.log("Token expired, login again")) : (a({ auth: n }), q(n.token), window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                            var e = (0, r.Z)(i().mark((function e(n) {
                                var a;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n.length > 0 && (a = n[0], B(a));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) { return e.apply(this, arguments) }
                        }()), Q(), R())
                    }
                    window.ethereum && window.ethereum.on("accountsChanged", (function(e) { console.log("Change account!"), window.localStorage.removeItem(g.SH), console.log("Please login again"), a({}), q(""), m.Am.error("You just changed account. Please login again!") }))
                }), []);
                var Q = function() {
                        (0, f.ac)("character/heroBox", (function(e) {
                            if (0 !== e.code) {
                                var n = e.data.quantity;
                                L(n)
                            }
                        }))
                    },
                    R = function() {
                        var e = (0, r.Z)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        console.log(G.methods), G.methods.getPresaleChar().estimateGas({ from: M, to: g.By }).then((function(e) { return G.methods.getPresaleChar().call({ from: M, to: g.By, gas: e }) })).then((function(e) { console.log(e), T(e) })).catch((function(e) { return console.log(e) }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                return (0, w.jsxs)(w.Fragment, { children: [!j && (0, w.jsx)(h.Z, { className: c().hideOnLandscape, notShowRewardMobile: 2 !== s, onLogin: function(e) { a({ auth: e }), q(e.token), Q(), R() }, onLogout: function() { a({}), q("") } }), j && (0, w.jsx)(w.Fragment, { children: (0, w.jsx)("img", { onClick: function() { return k(!1) }, src: "/img/play/expand-screen.svg", alt: "", className: c().rotateBtn }) }), (0, w.jsxs)("div", { className: _()(c().container, c().hideOnLandscape), children: [(0, w.jsx)("ul", { className: c().tabMenu, children: function() { var e = window.innerWidth <= 480; return [{ id: "raid", title: "Start Raid", subTitle: "PVE Modes" }, { id: "history", title: "History", subTitle: "Transactions history" }, { id: "market", title: e ? "Market" : "Marketplace", subTitle: "Coming Soon" }, { id: "arena", title: e ? "Arena" : "Arena (PVP)", subTitle: "PVP Modes" }, { id: "faq", title: "FAQ", subTitle: "" }] }().map((function(e, n) { return (0, w.jsxs)("li", { className: _()((0, t.Z)({}, c().active, s === n + 1), c().tabMenuItem), onClick: function() { return function(e) { 1 === e ? V(!0) : l(e + 1) }(n) }, children: ["history" !== e.id && (0, w.jsx)("img", { src: "/img/play/tab-".concat(e.id).concat(s === n + 1 ? "-active" : "", ".png"), alt: "tab menu" }), (0, w.jsx)("h2", { children: e.title }), (0, w.jsx)("p", { children: e.subTitle }), (0, w.jsx)("img", { className: c().line, src: "/img/play/line.png", alt: "line" })] }, n) })) }), (0, w.jsxs)("div", { className: c().tabInfo, children: [1 === s && (0, w.jsxs)(w.Fragment, { children: [n.auth && (0, w.jsxs)(w.Fragment, { children: [(g.r_, (0, w.jsx)("iframe", { id: "dytIframe", className: j ? c().iframeLandscape : c().iframe, frameBorder: "0", src: g.F1 + "?token=" + Z })), (0, w.jsxs)("div", { className: c().expandScreen, onClick: function() { return k(!0) }, children: [(0, w.jsx)("p", { children: "Expand the screen for the best game's display" }), (0, w.jsx)("img", { src: "/img/play/expand-screen.svg", alt: "expand screen" })] })] }), !n.auth && (0, w.jsx)("div", { className: c().iframeComingSoon }), (0, w.jsx)(m.Ix, {})] }), 3 === s && (0, w.jsx)("div", { className: c().comingSoon, children: "Coming soon" }), 4 === s && (0, w.jsx)("div", { className: c().comingSoon, children: "Coming soon" }), 5 === s && (0, w.jsx)(x.Z, {})] })] }), (0, w.jsx)(P.Z, { show: F, close: function() { return V(!1) } })] })
            }
        },
        66537: function(e, n, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/game", function() { return a(3403) }])
        },
        70762: function(e) { e.exports = { container: "Play_container__15iHE", tabMenu: "Play_tabMenu__1vQVJ", verticalLine: "Play_verticalLine__3V-9_", line: "Play_line__3D2_a", active: "Play_active__1vPU0", tabInfo: "Play_tabInfo__3MWZZ", summonHero: "Play_summonHero__3YIO6", hero: "Play_hero__uYkBv", buyItem: "Play_buyItem__3KHs_", leftItem: "Play_leftItem___m0DQ", rightItem: "Play_rightItem__2O65c", buyItemInfo: "Play_buyItemInfo__27oHw", bg: "Play_bg__2NNSP", orb: "Play_orb__3VDBR", groupInput: "Play_groupInput__1Gdac", iframe: "Play_iframe__2IgeS", iframeWrap: "Play_iframeWrap__34Rgm", expandScreen: "Play_expandScreen__3zVkp", iframeComingSoon: "Play_iframeComingSoon__1q3tc", marketPlace: "Play_marketPlace__1OaQn", mainMarket: "Play_mainMarket__2_s-D", heroSale: "Play_heroSale__2XFaL", listHero: "Play_listHero__UTAeg", heroItem: "Play_heroItem__3rU31", heroInfo: "Play_heroInfo__1clAx", brand: "Play_brand__1rpGn", number: "Play_number__3Gbli", heroPrice: "Play_heroPrice__2vzqh", comingSoon: "Play_comingSoon__3-7z3", hideOnLandscape: "Play_hideOnLandscape__10C46", showOnLandscape: "Play_showOnLandscape__3kBEo", iframeLandscape: "Play_iframeLandscape__rxqGZ", rotateBtn: "Play_rotateBtn__3wjOG" } }
    },
    function(e) {
        e.O(0, [774, 482, 885, 250, 669, 170, 37, 888, 179], (function() { return n = 66537, e(e.s = n); var n }));
        var n = e.O();
        _N_E = n
    }
]);