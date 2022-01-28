(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [170], {
        65779: function(e, t, n) {
            "use strict";
            n(67294);
            var a = n(96993),
                s = n.n(a),
                i = n(85893);
            t.Z = function(e) { return e.show ? (0, i.jsx)("div", { className: s().loading, children: (0, i.jsx)("img", { src: "/img/loading.svg", alt: "loading" }) }) : null }
        },
        87146: function(e, t, n) {
            "use strict";
            n.d(t, { Z: function() { return W } });
            var a = n(92809),
                s = n(30266),
                i = n(809),
                r = n.n(i),
                o = n(56469),
                u = n.n(o),
                c = n(94184),
                l = n.n(c),
                d = n(67294),
                p = n(3283),
                m = n.n(p),
                y = n(34651),
                h = n(39249),
                f = (n(30733), n(64593)),
                w = n(96245),
                b = n(83488),
                _ = n.n(b),
                x = n(85893),
                g = function(e) {
                    var t = e.tax,
                        n = void 0 === t ? 0 : t,
                        a = e.onOk,
                        s = void 0 === a ? function() {} : a,
                        i = e.onCancel,
                        r = void 0 === i ? function() {} : i;
                    return (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)("div", { className: _().backdrop, onClick: r }), (0, x.jsxs)("div", { className: _().popup, children: [(0, x.jsx)("h4", { className: _().title, children: "Claim Reward" }), (0, x.jsxs)("p", { className: _().text, children: ["Early withdraw tax: ", n, " deduct 6.25%/day. Do you want to claim?"] }), (0, x.jsx)("img", { onClick: r, className: _().close, src: "/img/close-popup.png", alt: "close" }), (0, x.jsxs)("div", { className: _().btnGroup, children: [(0, x.jsx)("div", { onClick: s, className: _().btn, children: "YES" }), (0, x.jsx)("div", { onClick: r, className: _().btn, children: "NO" })] })] })] })
                },
                v = n(82025),
                T = n(10114),
                j = n(41664),
                M = n(44623),
                N = n.n(M),
                S = n(74855),
                A = n(2568),
                k = n.n(A),
                C = n(30381),
                P = n.n(C),
                H = n(65779),
                I = function(e) {
                    var t = e.show,
                        n = void 0 !== t && t,
                        a = e.close,
                        s = void 0 === a ? function() {} : a,
                        i = (0, d.useState)(!1),
                        r = i[0],
                        o = i[1],
                        u = (0, d.useState)(1),
                        c = u[0],
                        p = (u[1], (0, d.useState)({})),
                        m = p[0],
                        y = p[1],
                        f = (0, d.useState)([]),
                        w = f[0],
                        b = f[1],
                        _ = (0, d.useState)("https://thedynasty.app/game.html?ref="),
                        g = _[0],
                        j = _[1];
                    (0, d.useEffect)((function() {
                        var e = window.localStorage.getItem(v.x9);
                        if (e) {
                            var t = k()(e.toLowerCase());
                            v.r_ ? j("https://testnet.thedynasty.app/playabcxyz010.html?ref=".concat(t)) : j("https://thedynasty.app/game.html?ref=".concat(t))
                        }(0, v.LP)() && (0, T.Fv)("character/dytSummonRefStatistics", {}, (function(e) { e.data && y(e.data) }))
                    }), [n]);
                    var M = function(e) { var t = {}; return t.transactionId = e.transactionId, t.uid = e.uid, t.time = e.time / 1e3, 0 == e.status ? t.status = "Pending" : 1 == e.status ? t.status = "Success" : 2 == e.status && (t.status = "Failure"), t.transactionType = e.transactionType, t },
                        A = function(e, t) {
                            o(!0), (0, T.Fv)("character/transactionVerify", { transactionType: t, uid: e }, (function(e) {
                                if (0 === e.code) h.Am.error(e.error);
                                else {
                                    h.Am.success("Successful verify. please reload game (F5 browser) to take effect!");
                                    var t = document.getElementById("dytIframe");
                                    t && t.contentWindow.GameClient.SyncData(e.data.characterDiff)
                                }(0, v.LP)() && (o(!0), (0, T.Fv)("character/transactionHistory", {}, (function(e) {
                                    if (o(!1), e.data) {
                                        var t = [];
                                        e.data.history.map((function(e) { t.push(M(e)) })), b(t)
                                    }
                                })))
                            }))
                        };
                    return (0, x.jsx)(x.Fragment, { children: n && (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)("div", { className: "backdrop", onClick: s }), (0, x.jsxs)("div", { className: N().inner, children: [(0, x.jsx)(H.Z, { show: r }), (0, x.jsxs)("div", { className: N().tabContent, children: [1 === c && (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)("input", { type: "text", readOnly: !0, value: g }), (0, x.jsx)(S.CopyToClipboard, { text: g, children: (0, x.jsx)("div", { className: l()("btn", N().copyBtn), children: "copy reference link" }) }), (0, x.jsx)("img", { className: N().line, src: "/img/play/line.png", alt: "line" }), (0, x.jsxs)("ul", { className: N().stat, children: [(0, x.jsxs)("li", { children: ["Total reference: ", (0, x.jsx)("span", { children: m.count || 0 })] }), (0, x.jsxs)("li", { children: ["BNB reference: ", (0, x.jsxs)("span", { children: [m.sum || 0, " BNB"] })] })] })] }), 2 === c && (0, x.jsx)("ul", { className: N().listTrans, children: w.map((function(e, t) { return (0, x.jsxs)("li", { children: [(0, x.jsxs)("strong", { children: [t + 1, ". ", e.transactionType] }), (0, x.jsxs)("div", { children: [P().unix(e.time).format("MMMM DD HH:mm"), " \u2022", " ", (0, x.jsx)("span", { className: N().status, children: e.status })] }), (0, x.jsx)("div", { className: N().transHash, children: e.transactionId }), "Pending" === e.status && (0, x.jsx)("div", { className: l()("btn", N().verifyBtn), onClick: function() { return A(e.uid, e.transactionType) }, children: "Verify" })] }, t) })) })] })] })] }) })
                },
                B = n(44548),
                R = n(11358),
                O = n.n(R),
                L = n(34155),
                F = "dynasty:auth",
                E = n(38176),
                D = n(74538);

            function W(e) {
                var t = e.notShowRewardMobile,
                    n = void 0 !== t && t,
                    i = e.className,
                    o = void 0 === i ? "" : i,
                    c = e.onLogin,
                    p = void 0 === c ? function() {} : c,
                    b = e.onLogout,
                    _ = void 0 === b ? function() {} : b,
                    M = (0, d.useState)(!1),
                    N = (M[0], M[1]),
                    S = (0, d.useState)(!1),
                    A = S[0],
                    k = S[1],
                    C = (0, d.useState)({}),
                    H = C[0],
                    R = C[1],
                    W = (0, d.useState)(""),
                    Z = W[0],
                    G = W[1],
                    U = (0, d.useState)(""),
                    J = (U[0], U[1]),
                    z = (0, d.useState)("REWARD"),
                    q = z[0],
                    V = z[1],
                    Y = (0, d.useState)(0),
                    Q = Y[0],
                    K = Y[1],
                    X = (0, d.useState)(0),
                    $ = X[0],
                    ee = X[1],
                    te = (0, d.useState)(0),
                    ne = te[0],
                    ae = te[1],
                    se = (0, d.useState)([]),
                    ie = se[0],
                    re = se[1],
                    oe = (0, d.useState)(!1),
                    ue = oe[0],
                    ce = oe[1],
                    le = (0, d.useState)(),
                    de = le[0],
                    pe = le[1],
                    me = (0, d.useState)(!1),
                    ye = me[0],
                    he = me[1],
                    fe = (0, d.useState)(!1),
                    we = fe[0],
                    be = fe[1],
                    _e = (0, d.useState)(!1),
                    xe = _e[0],
                    ge = _e[1],
                    ve = (0, d.useState)(!1),
                    Te = ve[0],
                    je = ve[1],
                    Me = (0, d.useState)(!1),
                    Ne = Me[0],
                    Se = Me[1],
                    Ae = (0, d.useState)(1),
                    ke = Ae[0],
                    Ce = Ae[1],
                    Pe = (0, d.useState)({}),
                    He = Pe[0],
                    Ie = Pe[1],
                    Be = (0, d.useState)(window.innerWidth),
                    Re = (Be[0], Be[1]),
                    Oe = (0, d.useRef)(),
                    Le = null,
                    Fe = null,
                    Ee = null;
                window.ethereum && (window.ethereum.on("accountsChanged", (function(e) { window.localStorage.removeItem(F), R({}) })), Le = new(m())(window.ethereum), Fe = new Le.eth.Contract(E, v.LW), Ee = new Le.eth.Contract(D, v.Rj)), (0, d.useEffect)((function() {
                    return De(), document.addEventListener("mousedown", We),
                        function() { document.removeEventListener("mousedown", We) }
                }), []), (0, d.useEffect)((function() { setTimeout((function() { try { window.dynasty.getDYTBalance().then((function(e) { ae(e) })) } catch (e) {} }), 1e3) }), []);
                var De = function() {
                        var e = (0, s.Z)(r().mark((function e() {
                            return r().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        window.web3 && window.ethereum && Ee && Ee.methods.getSwapConfig().call().then((function(e) { console.log(e), Ie({ swapFee: e._swapFee, minToken: Le.utils.fromWei(e._minTokenRw, "ether"), maxToken: Le.utils.fromWei(e._maxTokenRw, "ether"), startTime: e._swapFeeOpenTime }) }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    We = function(e) {
                        try {
                            if (Oe.current.contains(e.target)) return;
                            ce(!1)
                        } catch (t) {}
                    };
                (0, d.useEffect)((function() {
                    var e = window.localStorage.getItem(F),
                        t = e && JSON.parse(e);
                    if (t && t.token) {
                        var n = (0, w.Z)(t.token);
                        n && n.exp && n.exp < Date.now() / 1e3 ? (window.localStorage.removeItem(F), R({ auth: null }), console.log("Token expired, login again"), h.Am.error("Your session are expire. Please login again!")) : R({ auth: t }), Qe(), Ke(1)
                    }
                    return window.addEventListener("resize", (function(e) { Re(window.innerWidth) })),
                        function() { window.removeEventListener("resize", (function() {})) }
                }), []);
                var Ze = function(e) { J(e.token), localStorage.setItem(F, JSON.stringify(e)), R({ auth: e }), p(e) },
                    Ge = function(e) {
                        var t = e.signature;
                        return fetch("".concat(v.Sg, "/character/mmAuth"), { body: JSON.stringify({ publicAddress: Z, signature: t }), headers: { "Content-Type": "application/json" }, method: "POST" }).then(function() {
                            var e = (0, s.Z)(r().mark((function e(t) {
                                var n;
                                return r().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.json();
                                        case 2:
                                            return n = e.sent, e.abrupt("return", { token: n.token, publicAddress: Z });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }())
                    },
                    Ue = function() {
                        var e = (0, s.Z)(r().mark((function e(t) {
                            var n, a, s, i;
                            return r().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.data, e.prev = 1, a = "I am signing my one-time nonce: ".concat(n.nonce), s = new(m())(window.web3.currentProvider), e.next = 6, s.eth.personal.sign(a, Z);
                                    case 6:
                                        return i = e.sent, e.abrupt("return", { signature: i });
                                    case 10:
                                        throw e.prev = 10, e.t0 = e.catch(1), console.error(e.t0), new Error("You need to sign the message to be able to log in.");
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })));
                        return function(t) { return e.apply(this, arguments) }
                    }(),
                    Je = function() {
                        var e = (0, s.Z)(r().mark((function e() {
                            var t;
                            return r().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        window.web3 && window.ethereum ? (t = window, t.ethereum.request({ method: "eth_requestAccounts" }).then((function(e) {
                                            if (e.length > 0) {
                                                var t = e[0].toLowerCase();
                                                G(t), N(!0), localStorage.setItem(v.x9, t), De()
                                            }
                                        }))) : console.log("Not install metamask");
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    ze = function() { var e = window.localStorage.getItem(F); return e && JSON.parse(e) },
                    qe = function() { Se(!0) },
                    Ve = function(e) { e && window.dynasty.swapToken({ rwAmount: e.dyt, timestamp: e.time, signature: e.signature }).then((function(t) { console.log("sendWithdrawInfoToBlockchain done", t), Ye(e.uid, t.transactionHash) }), (function() { k(!1) })) },
                    Ye = function(e, t) {
                        var n = ze();
                        n && fetch("".concat(v.Sg, "/character/confirmWithdraw"), { headers: { "Content-Type": "application/json", Authorization: "Bearer " + n.token }, body: JSON.stringify({ uid: e, txn: t }), method: "POST" }).then((function(e) { return e.json() })).then((function(e) { k(!1), 0 === e.code ? h.Am.error(e.error) : h.Am.success("Swap successfully") }))
                    },
                    Qe = function() {
                        var e = (0, T.LP)();
                        console.log(e), e && (0, T.Fv)("character/getInfo", {}, (function(e) { console.log(e) }))
                    },
                    Ke = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = ze();
                        t && (k(!0), fetch("".concat(v.Sg, "/dungeon/rewardList?page=").concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer " + t.token }, method: "GET" }).then((function(e) { return e.json() })).then((function(e) {
                            if (console.log(e), k(!1), 0 != e.code) {
                                Ce(e.data.totalPage);
                                var t = e.data.rewardList;
                                re(t);
                                var n = 0;
                                t.map((function(e) { 0 === e.claimTime && (n += e.goldReward) })), e.data.total ? K(e.data.total) : K(n), De()
                            }
                        })))
                    },
                    Xe = function(e) { try { return "".concat(new Date(e).toLocaleTimeString("en-US", { hour12: !1 }), " ").concat(new Date(e).toLocaleDateString("en-US")) } catch (t) { return "" } },
                    $e = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (console.log("syncCharacterDiff", e), e) try {
                            var t = document.getElementById("dytIframe");
                            t && t.contentWindow.GameClient.SyncData(e)
                        } catch (n) { console.error(n) }
                    };
                (0, d.useEffect)((function() { "" != Z && (console.log(Z), console.log("".concat(L.env.NEXT_PUBLIC_API_BASE || v.Sg, "/character/mmGetNonce?publicAddress=").concat(Z)), fetch("".concat(L.env.NEXT_PUBLIC_API_BASE || v.Sg, "/character/mmGetNonce?publicAddress=").concat(Z)).then((function(e) { var t = e.json(); return console.log(t), t })).then(Ue).then(Ge).then(Ze).catch((function(e) { window.alert(e), N(!1) }))) }), [Z]);
                var et, tt = function(e) { if (0 === e) return "0%"; var t = Math.abs(new Date - e) / 36e5; return parseInt(t / 24) >= 10 ? "0%" : t < 24 ? null : ["50%", "43.75%", "37.5%", "31.25%", "25%", "18.75%", "12.5%", "6.25%"][parseInt(t / 24) - 1] },
                    nt = function(e) { return Math.abs(new Date - e) / 36e5 < 24 },
                    at = (0, y.useRouter)(),
                    st = function(e) {
                        var t = e.target.value;
                        je(t > 1e3), ee(t)
                    },
                    it = function(e) { Ke(e.selected + 1) };
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsxs)(f.q, { children: [(0, x.jsx)("script", { async: !0, src: "js/web3.min.js", type: "text/javascript" }), (0, x.jsx)("script", { defer: !0, src: "js/dynasty.js", type: "text/javascript" })] }), ye && (0, x.jsx)(g, {
                        tax: 50,
                        onOk: function() {
                            if (he(!1), de && de.uid) {
                                var e = ze();
                                e && (k(!0), fetch("".concat(v.Sg, "/dungeon/claimReward"), { headers: { "Content-Type": "application/json", Authorization: "Bearer " + e.token }, body: JSON.stringify({ rewardUid: de.uid }), method: "POST" }).then((function(e) { return e.json() })).then((function(e) { k(!1), 1 === e.code && ($e(e.data.characterDiff), Ke(1), h.Am.success(de.goldReward + " rewards claimed successfully")) })))
                            }
                        },
                        onCancel: function() { return he(!1) }
                    }), (0, x.jsxs)("header", { className: l()(o, u().header, (0, a.Z)({}, u().existReward, H.auth && !n)), children: [(0, x.jsx)("img", { onClick: function() { return e = "", void at.push("/".concat(e)); var e }, src: "/img/logo.png", alt: "intro", className: u().logo }), (0, x.jsxs)("ul", { className: u().hideOnMobile, children: [(0, x.jsx)("li", { children: (0, x.jsx)(j.default, { href: "/", children: (0, x.jsx)("a", { children: "HOME PAGE" }) }) }), (0, x.jsx)("li", { children: (0, x.jsx)(j.default, { href: "/earn", children: (0, x.jsx)("a", { children: "STAKE" }) }) }), (0, x.jsxs)("li", { children: [(0, x.jsx)(j.default, { href: "/launchpad", children: (0, x.jsx)("a", { children: "LAUNCHPAD" }) }), (0, x.jsx)("img", { className: u().submenuArrow, src: "/img/menu-arrow.svg", alt: "" }), (0, x.jsxs)("ul", { className: u().submenu, children: [(0, x.jsx)("li", { children: (0, x.jsx)(j.default, { href: "/", children: (0, x.jsx)("a", { children: "Projects" }) }) }), (0, x.jsx)("li", { children: (0, x.jsx)("a", { href: "https://docs.google.com/forms/d/e/1FAIpQLScPzecgaa_rQN4h3EMwwyOWM-wg0Z7AKZeKL0YmxfG7S0xqaA/viewform", target: "_blank", children: "Apply for IDO" }) }), (0, x.jsx)("li", { children: (0, x.jsx)("a", { href: "https://forms.gle/3rq7kfoZ1ZnhnW529", target: "_blank", children: "Suggest for IDO" }) })] })] }), v.r_ ? (0, x.jsx)("li", { children: (0, x.jsx)(j.default, { href: "/ido", children: (0, x.jsx)("a", { children: "IDO" }) }) }) : (0, x.jsx)(x.Fragment, {})] }), (0, x.jsxs)("div", { className: l()(u().menuMobile, (0, a.Z)({}, u().show, we)), children: [(0, x.jsx)("img", { onClick: function() { return be(!1) }, className: u().closeMenuBars, src: "/img/close.svg", alt: "" }), (0, x.jsx)("li", { className: u().active, children: (0, x.jsx)(j.default, { href: "/", children: (0, x.jsx)("a", { children: "HOME" }) }) }), (0, x.jsx)("li", { children: (0, x.jsx)("a", { href: "https://the-dynasty.gitbook.io/the-dynasty/", target: "_blank", children: "WHITEPAPER" }) })] }), (0, x.jsxs)("div", { className: l()(u().headerRight, (0, a.Z)({}, u().existReward, H.auth && !n)), children: [H.auth && (0, x.jsxs)(x.Fragment, { children: [function() { if (-1 === at.pathname.indexOf("ido") && -1 === at.pathname.indexOf("stake")) return (0, x.jsx)(x.Fragment, { children: (0, x.jsxs)("div", { className: u().reward, ref: Oe, onMouseOver: function() { return ce(!0) }, onMouseLeave: function() { return ce(!1) }, children: [(0, x.jsxs)("div", { className: u().rewardInfo, children: [(0, x.jsx)("span", { children: "reward:" }), " ", Q, " GOLD (PENDING)", (0, x.jsxs)("small", { children: ["Early withdraw tax: ", (0, x.jsx)("span", { children: "0%" }), " deduct ", (0, x.jsx)("span", { children: "6.25%" }), "/day"] })] }), (0, x.jsxs)("div", { onClick: function() { return Ke(1) }, className: l()(u().btn, u().refreshBtn), children: [(0, x.jsx)("img", { alt: "toggle", src: "/img/spin-loading.svg" }), (0, x.jsx)("img", { alt: "toggle", src: "/img/spin-loading-inner.svg" })] }), (0, x.jsxs)("div", { className: l()(u().rewardList, (0, a.Z)({}, u().show, ue)), children: [(0, x.jsx)("img", { onClick: function() { return ce(!1) }, className: u().closeMenuBars, src: "/img/close.svg", alt: "" }), A && (0, x.jsx)("div", { className: u().rewardLoading, children: (0, x.jsx)("img", { src: "/img/loading.svg", alt: "loading" }) }), (0, x.jsxs)("div", { className: u().rewardListTab, children: [(0, x.jsx)("div", { onClick: function() { return V("REWARD") }, className: "REWARD" === q ? u().rewardListTabActive : "", children: "REWARD" }), (0, x.jsx)("div", { onClick: function() { return V("SWAP") }, className: "SWAP" === q ? u().rewardListTabActive : "", children: "SWAP" })] }), "REWARD" === q && (0, x.jsxs)(x.Fragment, { children: [(0, x.jsx)("ul", { className: u().listRward, children: ie.map((function(e) { return (0, x.jsxs)("li", { className: u().rewardItem, children: [(0, x.jsxs)("h5", { className: u().rewardItemTitle, children: [e.goldReward, " Gold"] }), (0, x.jsxs)("span", { className: u().rewardItemCountdown, children: [Xe(e.finishedAt), e.claimTime > 0 ? (0, x.jsx)("span", { className: u().rewardStatus, status: "Done", children: "\u2022 Completed" }) : (0, x.jsx)("span", { className: u().rewardStatus, children: "\u2022 Pending" })] }), (0, x.jsx)("div", { className: "".concat(u().btn, " ").concat(u().btnClaim), onClick: function() { 0 !== e.claimTime || nt(e.finishedAt) || (pe(e), he(!0)) }, style: { opacity: e.claimTime > 0 || nt(e.finishedAt) ? .5 : 1 }, children: "CLAIM" }), 0 === e.claimTime && !nt(e.finishedAt) && tt(e.finishedAt) && (0, x.jsxs)("span", { className: u().rewardTax, children: ["Tax ", tt(e.finishedAt)] })] }, e.id) })) }), ke > 1 && (0, x.jsx)(O(), { breakLabel: "...", nextLabel: "next >", onPageChange: it, pageRangeDisplayed: 5, pageCount: ke, previousLabel: "< previous", renderOnZeroPageCount: null, className: u().rewardPagination })] }), "SWAP" === q && (0, x.jsxs)("div", { className: u().swap, children: [(0, x.jsx)("img", { height: 40, src: "/img/swap.png", alt: "swap" }), (0, x.jsxs)("div", { className: u().swapInput, children: [(0, x.jsx)("input", { type: "number", name: "swapGold", placeholder: "0.0000", onChange: st }), (0, x.jsx)("span", { children: "MAX" })] }), (0, x.jsxs)("div", { className: u().swapPriceTxt, children: [(0, x.jsx)("span", { children: "Note:" }), (0, x.jsxs)("span", { children: ["min: ", He.minToken || 100] }), (0, x.jsx)("br", {}), (0, x.jsxs)("span", { children: ["max: ", He.maxToken || 1e3] }), (0, x.jsx)("br", {}), (0, x.jsxs)("span", { children: ["swap fee: ", He.swapFee || 0, "%"] }), (0, x.jsx)("br", {})] }), (0, x.jsx)("div", { className: u().swapPriceTxt, children: "99999999999999" == He.startTime ? (0, x.jsx)(x.Fragment, {}) : (0, x.jsxs)("span", { children: ["Start from: ", P().utc(P().unix(He.startTime)).format("MMMM DD HH:mm UTC") || "December 04 14:00 UTC"] }) }), $ >= 100 && (0, x.jsx)("div", { className: "".concat(u().btn, " ").concat(u().btnConnect), onClick: qe, children: "SWAP" }), Te && (0, x.jsx)("div", { className: u().error, children: "Exceed swap amount limit: 1000 Gold / 1 request" })] })] })] }) }) }(), (0, x.jsx)("div", { className: "".concat(u().btn, " ").concat(u().btnBuy), onClick: function() { window.open("https://pancakeswap.finance/swap?outputCurrency=0x1802a63EFe3255aBC3004F8e63047dB96300bd1c", "_blank") }, children: "BUY DYT" })] }), (0, x.jsxs)("div", { className: u().walletInfo, children: [!H.auth && (0, x.jsxs)("div", { className: "".concat(u().btn, " ").concat(u().btnConnect), onClick: Je, children: [(0, x.jsx)("div", { className: u().iconWrap, children: (0, x.jsx)("img", { className: u().icon, src: "/img/play/wallet.svg", alt: "wallet" }) }), "LOGIN"] }), H.auth && (0, x.jsxs)("div", { className: "".concat(u().btn, " ").concat(u().btnConnect, " ").concat(u().btnWallet), children: [(0, x.jsx)("div", { className: u().iconWrap, children: (0, x.jsx)("img", { className: u().icon, src: "/img/play/dyt.png", alt: "wallet" }) }), (0, x.jsxs)("div", { className: u().address, children: [(et = H.auth.publicAddress, et ? "".concat(et.slice(0, 4), "...").concat(et.slice(et.length - 4)) : ""), (0, x.jsxs)("span", { children: [ne, " DYT"] })] }), (0, x.jsxs)("section", { className: u().authPopup, children: [(0, x.jsx)("div", { className: u().arrowUp }), (0, x.jsxs)("div", { className: u().dytBalance, children: [(0, x.jsx)("div", { className: u().iconWrap, children: (0, x.jsx)("img", { className: u().icon, src: "/img/play/dyt.png", alt: "wallet" }) }), (0, x.jsxs)("span", { children: [ne, " DYT"] })] }), (0, x.jsx)("img", { className: u().line, src: "/img/play/line.png", alt: "line" }), (0, x.jsx)("div", { className: u().disconnectBtn, onClick: function() { return ge(!0) }, children: "My Account" }), (0, x.jsx)("div", { className: u().disconnectBtn, onClick: function() { localStorage.removeItem(F), R({}), _() }, children: "log out" })] })] }), (0, x.jsx)("img", { className: u().openMenuBars, src: "/img/menu.svg", alt: "menu bars", onClick: function() { return be(!0) } })] })] })] }), (0, x.jsx)(h.Ix, {}), (0, x.jsx)(I, { show: xe, close: function() { ge(!1) } }), (0, x.jsx)(B.Z, {
                        showPopup: Ne,
                        closePopup: function() { return Se(!1) },
                        title: "Warning",
                        content: "If you click Continue, please don't close or refresh browser before transaction complete. If you reject metamask request, your Gold will be locked",
                        okButtonText: "Continue",
                        onOk: function() {
                            (0, T.LP)() && ($ ? $ > 1e3 || (k(!0), window.web3 && window.ethereum ? window.ethereum.request({ method: "eth_requestAccounts" }).then((function(e) {
                                if (e.length > 0) {
                                    var t = e[0];
                                    Fe.methods.balanceOf(v.Rj).call({ from: t }).then((function(e) {
                                        var t = parseFloat(Le.utils.fromWei(e));
                                        console.log(t), t > parseFloat($) ? (k(!0), (0, T.Fv)("character/withdraw", { dyt: $ }, (function(e) { 0 === e.code ? (k(!1), h.Am.error(e.error)) : (Se(!1), Ve(e.data), $e(e.data.characterDiff)) }))) : (h.Am.error("Please try to swap later!"), k(!1))
                                    })).catch((function(e) { k(!1), console.log(e) }))
                                }
                            })) : (k(!1), console.log("Not install metamask"))) : h.Am.error("Please enter swap amount"))
                        }
                    })]
                })
            }
        },
        10114: function(e, t, n) {
            "use strict";
            n.d(t, { LP: function() { return i }, Fv: function() { return r }, ac: function() { return o } });
            var a = n(39249),
                s = n(82025),
                i = function() { try { var e = window.localStorage.getItem(s.SH); return (e && JSON.parse(e)).token } catch (t) { return "" } },
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                        r = i();
                    r ? fetch("".concat(s.Sg, "/").concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer " + r }, body: JSON.stringify(t), method: "POST" }).then((function(e) { return e.json() })).then((function(e) { n && n(e) })) : a.Am.error("Please connect wallet then reload browser!")
                },
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = i();
                    n ? fetch("".concat(s.Sg, "/").concat(e), { headers: { "Content-Type": "application/json", Authorization: "Bearer " + n }, method: "GET" }).then((function(e) { return e.json() })).then((function(e) { t && t(e) })) : a.Am.error("Please connect wallet then reload browser!")
                }
        },
        83488: function(e) { e.exports = { backdrop: "ClaimRewardPopup_backdrop__vUF5y", popup: "ClaimRewardPopup_popup__2f-2i", close: "ClaimRewardPopup_close__1VW-k", title: "ClaimRewardPopup_title__3iqOh", btn: "ClaimRewardPopup_btn__284zn", btnGroup: "ClaimRewardPopup_btnGroup__3f9Nt", text: "ClaimRewardPopup_text__I-q2-" } },
        96993: function(e) { e.exports = { loading: "DytLoading_loading__3Y674" } },
        56469: function(e) { e.exports = { header: "Header_header__OkoDL", existReward: "Header_existReward__xrJbe", logo: "Header_logo__1QUnI", submenu: "Header_submenu__3Uw5o", active: "Header_active__31E4u", submenuArrow: "Header_submenuArrow__1uUmk", headerRight: "Header_headerRight__1HNAh", btnBuy: "Header_btnBuy__VUnTU", walletInfo: "Header_walletInfo__3ZIFZ", headerRewardInfo: "Header_headerRewardInfo__2DZBc", rewardBlock: "Header_rewardBlock__2ELLU", reward: "Header_reward__b__ZI", rewardInfo: "Header_rewardInfo__2AWGV", refreshBtn: "Header_refreshBtn__18R2e", rewardList: "Header_rewardList__QK9Md", show: "Header_show__2PbGy", closeMenuBars: "Header_closeMenuBars__1jrUI", listRward: "Header_listRward__TFJEw", rewardItemTitle: "Header_rewardItemTitle__GCWJJ", rewardItemCountdown: "Header_rewardItemCountdown__3FvE7", btnClaim: "Header_btnClaim__3qQCS", rewardPagination: "Header_rewardPagination__-I1Sa", rewardLoading: "Header_rewardLoading__3Nvtk", rewardListTab: "Header_rewardListTab__3YWtn", rewardListTabActive: "Header_rewardListTabActive__7zDuW", rewardTax: "Header_rewardTax__3MeAd", rewardStatus: "Header_rewardStatus__27TXv", swap: "Header_swap__1msbr", swapInput: "Header_swapInput__1Rbv0", swapPriceTxt: "Header_swapPriceTxt__2F1uX", btn: "Header_btn__3H6yr", btnConnect: "Header_btnConnect__5faJw", iconWrap: "Header_iconWrap__3sueq", btnWallet: "Header_btnWallet__2FjuJ", authPopup: "Header_authPopup__2hSla", menuMobile: "Header_menuMobile__MppoW", openMenuBars: "Header_openMenuBars__2ztpI", hideOnMobile: "Header_hideOnMobile__2HoT8", line: "Header_line__Tp_Hz", disconnectBtn: "Header_disconnectBtn__1lIQo", dytBalance: "Header_dytBalance__1mm5T", arrowUp: "Header_arrowUp__13LxV", error: "Header_error__3BGNz" } },
        44623: function(e) { e.exports = { inner: "MyAccountPopup_inner__18nuP", tabHeader: "MyAccountPopup_tabHeader__2pe5L", active: "MyAccountPopup_active__2LKqF", copyBtn: "MyAccountPopup_copyBtn__2O5hj", stat: "MyAccountPopup_stat__o5h_P", listTrans: "MyAccountPopup_listTrans__PZsWi", line: "MyAccountPopup_line__38Yhi", transHash: "MyAccountPopup_transHash__9UV1P", verifyBtn: "MyAccountPopup_verifyBtn__2LDsc" } },
        46601: function() {},
        89214: function() {},
        71922: function() {},
        2363: function() {},
        27790: function() {},
        52361: function() {},
        94616: function() {},
        38176: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BP","outputs":[{"internalType":"contract BPContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BPDisabledForever","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bpEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isWhitelistAddr","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mktAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_bp","type":"address"}],"name":"setBPAddrss","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setBotProtectionDisableForever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setBpEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sellFee","type":"uint256"},{"internalType":"uint256","name":"_buyFee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxAmount","type":"uint256"}],"name":"setMaxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"setMktAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_swapTokensAtAmount","type":"uint256"}],"name":"setSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setWhitelistAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapForMkt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        74538: function(e) {
            "use strict";
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"botProtectSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rw","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getSwapConfig","outputs":[{"internalType":"uint256","name":"_swapFee","type":"uint256"},{"internalType":"uint256","name":"_swapFeeOpenTime","type":"uint256"},{"internalType":"uint256","name":"_minTokenRw","type":"uint256"},{"internalType":"uint256","name":"_maxTokenRw","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token_address","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minTokenRw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reverseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_val","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_botProtectSec","type":"uint256"}],"name":"setBotProtectSec","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTokenRw","type":"uint256"}],"name":"setMaxTokenRw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"signerAddress","type":"address"}],"name":"setSignatureChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_swapFee","type":"uint256"},{"internalType":"uint256","name":"_swapFeeOpenTime","type":"uint256"},{"internalType":"uint256","name":"_minTokenRw","type":"uint256"},{"internalType":"uint256","name":"_maxTokenRw","type":"uint256"}],"name":"setSwapConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapFeeOpenTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    }
]);