(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [391], {
        83987: function(t, e, n) {
            "use strict";
            n(67294);
            var a = n(39784),
                s = n.n(a),
                i = n(41664),
                u = n(85893);
            e.Z = function() { return (0, u.jsxs)("div", { className: s().footer, children: [(0, u.jsx)("p", { children: "\xa9 Copyright 2021 by The Dynasty! All rights reserved!" }), (0, u.jsx)("span", { children: "v1.2.9" }), (0, u.jsxs)("ul", { children: [(0, u.jsx)("li", { children: (0, u.jsx)(i.default, { href: "/", children: (0, u.jsx)("a", { children: "Privacy Policy" }) }) }), (0, u.jsx)("li", { children: (0, u.jsx)(i.default, { href: "/", children: (0, u.jsx)("a", { children: "Terms of Use" }) }) })] })] }) }
        },
        82648: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n(30266),
                s = n(809),
                i = n.n(s),
                u = n(30381),
                o = n.n(u),
                p = n(67294),
                r = n(39249),
                l = n(3283),
                c = n.n(l),
                y = n(65779),
                m = n(83987),
                d = n(87146),
                f = n(82025),
                T = n(60130),
                k = n.n(T),
                h = n(85893),
                b = (n(92065), n(51541)),
                v = n(39296),
                w = n(91542),
                _ = n(22264),
                S = n(38176),
                x = function(t) {
                    var e = t.stakeObject,
                        n = t.dytBalance,
                        a = t.type,
                        s = t.onStake,
                        i = t.onApproval,
                        u = !1;
                    e && e.startTime <= Date.now() && (u = !0);
                    var r = (0, p.useState)(0),
                        l = r[0],
                        c = r[1],
                        y = (0, p.useState)(!1),
                        m = y[0],
                        d = y[1];
                    return (0, h.jsxs)("div", { className: k().vaultItem, children: [(0, h.jsxs)("div", { className: k().topInfo, children: [(0, h.jsxs)("h3", { children: [e && e.duration, "-Days Vault"] }), (0, h.jsxs)("h4", { children: [(0, h.jsxs)("span", { children: [(0, h.jsx)("strong", { children: "MAX" }), " lock per Vault"] }), (0, h.jsx)("span", { children: "Unlimited" })] }), (0, h.jsxs)("div", { className: k().mainVault, children: [(0, h.jsxs)("div", { className: k().mainVaultLeft, children: [(0, h.jsxs)("div", { className: k().duration, children: [(0, h.jsx)("h5", { children: "Duration" }), (0, h.jsxs)("p", { className: k().highlight, children: [(0, h.jsx)("strong", { children: e && e.duration }), " Days"] })] }), (0, h.jsx)("div", { className: k().dateInfo, children: (0, h.jsxs)("div", { className: k().dateColum, children: [(0, h.jsx)("h6", { children: "Start Date" }), (0, h.jsx)("span", { children: e && o().utc(o().unix(e.startTime)).format("MMM Do HH:mm UTC") })] }) }), (0, h.jsx)("div", { className: k().dateInfo, children: (0, h.jsxs)("div", { className: k().dateColum, children: [(0, h.jsx)("h6", { children: "End Date" }), (0, h.jsx)("span", { children: e && o().utc(o().unix(e.endTime)).format("MMM Do HH:mm UTC") })] }) })] }), (0, h.jsxs)("div", { className: k().mainVaultRight, children: [(0, h.jsxs)("div", { className: k().apy, children: [(0, h.jsx)("h5", { children: "APY" }), (0, h.jsxs)("p", { className: k().highlight, children: [(0, h.jsx)("strong", { children: e && e.apy }), " %"] })] }), (0, h.jsxs)("div", { className: k().dateColum, children: [(0, h.jsx)("h6", { children: "Earn" }), (0, h.jsx)("span", { children: "$DYT" })] })] })] })] }), (0, h.jsxs)("div", { className: k().bottomInfo, children: [(0, h.jsxs)("div", { className: k().balance, children: [(0, h.jsx)("span", { children: "Balance" }), (0, h.jsxs)("div", { className: k().amount, children: [n, " DYT"] }), (0, h.jsx)("div", { className: "btn ".concat(k().btn), onClick: function() { window.open("https://pancakeswap.finance/swap?outputCurrency=0x1802a63EFe3255aBC3004F8e63047dB96300bd1c", "_blank") }, children: "BUY DYT" })] }), m ? (0, h.jsxs)(h.Fragment, { children: [(0, h.jsxs)("div", { className: k().stakeInput, children: [(0, h.jsx)("input", { type: "text", value: l, onChange: function(t) { c(t.target.value) } }), (0, h.jsx)("span", { className: "btn ".concat(k().stakeInputMax), onClick: function() { c(n) }, children: "Max" })] }), (0, h.jsx)("button", { disabled: !u, onClick: function() { return s(a, l, (function() { c(0) })) }, children: "STAKE" })] }) : (0, h.jsx)(h.Fragment, { children: (0, h.jsx)("button", { disabled: !u, onClick: function() { return i(a, n, (function() { d(!0) })) }, children: "APPROVAL" }) }), (0, h.jsxs)("p", { children: [(0, h.jsx)("strong", { children: "Total Staked:" }), (0, h.jsx)("span", { children: e && e.totalStake }), (0, h.jsx)("span", { children: "DYT" })] })] })] })
                },
                M = function(t, e, n, a, s) { return { duration: (parseInt(t, 10) / 86400).toFixed(0), durationMs: parseInt(t, 10), apy: a, startTime: parseInt(e, 10), endTime: parseInt(n, 10), totalStake: parseFloat(c().utils.fromWei(s, "ether")).toFixed(2) } };
            e.default = function() {
                var t = (0, p.useState)(""),
                    e = t[0],
                    n = t[1],
                    s = (0, p.useState)(0),
                    u = (s[0], s[1], (0, p.useState)(0)),
                    l = u[0],
                    T = u[1],
                    g = (0, p.useState)(null),
                    j = g[0],
                    A = g[1],
                    C = (0, p.useState)(null),
                    D = C[0],
                    O = C[1],
                    V = (0, p.useState)(null),
                    I = V[0],
                    N = V[1],
                    E = (0, p.useState)(null),
                    F = E[0],
                    L = E[1],
                    J = (0, p.useState)(0),
                    B = J[0],
                    H = J[1],
                    Y = (0, p.useState)(null),
                    G = Y[0],
                    R = Y[1],
                    P = (0, p.useState)(!1),
                    W = P[0],
                    q = P[1],
                    Z = null,
                    U = null,
                    z = null,
                    $ = null,
                    K = null,
                    X = null;
                window.ethereum && (Z = new(c())(window.ethereum), U = new Z.eth.Contract(b, f.sD), z = new Z.eth.Contract(v, f.ks), $ = new Z.eth.Contract(w, f.tJ), K = new Z.eth.Contract(_, f.d$), X = new Z.eth.Contract(S, f.LW)), (0, p.useEffect)((0, a.Z)(i().mark((function t() {
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                window.ethereum && window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                                    var t = (0, a.Z)(i().mark((function t(e) {
                                        var a, s;
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    e.length > 0 && (a = e[0], n(a), (s = []).push(U.methods.getStakeConfig().call({ from: a })), s.push(z.methods.getStakeConfig().call({ from: a })), s.push($.methods.getStakeConfig().call({ from: a })), s.push(K.methods.getStakeConfig().call({ from: a })), Promise.all(s).then((function(t) {
                                                        console.log(t);
                                                        var e = M(t[0].stakeDuration, t[0].openStakeTime, t[0].closeStakeTime, t[0].stakeApy, t[0].stakeTokens);
                                                        A(e);
                                                        var n = M(t[1].stakeDuration, t[1].openStakeTime, t[1].closeStakeTime, t[1].stakeApy, t[1].stakeTokens);
                                                        O(n);
                                                        var a = M(t[2].stakeDuration, t[2].openStakeTime, t[2].closeStakeTime, t[2].stakeApy, t[2].stakeTokens);
                                                        N(a);
                                                        var s = M(t[3].stakeDuration, t[3].openStakeTime, t[3].closeStakeTime, t[3].stakeApy, t[3].stakeTokens);
                                                        L(s);
                                                        var i = parseFloat(e.totalStake) + parseFloat(n.totalStake) + parseFloat(a.totalStake) + parseFloat(s.totalStake);
                                                        H(i), setTimeout(nt, 1e3)
                                                    })).catch((function(t) { console.log(t) })), X.methods.balanceOf(a).call({ from: a }).then((function(t) { T(parseFloat(c().utils.fromWei(t, "ether")).toFixed(2)) })).catch((function(t) { console.log(t) })));
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) { return t.apply(this, arguments) }
                                }());
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), []);
                var Q = function(t, e, n) {
                        q(!0), window.ethereum && window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                            var s = (0, a.Z)(i().mark((function a(s) {
                                var u, o;
                                return i().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            s.length > 0 && (u = s[0], o = c().utils.toWei("".concat(e)), 1 == t ? X.methods.approve(f.sD, o).estimateGas({ from: u }).then((function(t) { return X.methods.approve(f.sD, o).send({ from: u, to: f.LW, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful approval"), n() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })) : 2 == t ? X.methods.approve(f.ks, o).estimateGas({ from: u }).then((function(t) { return X.methods.approve(f.ks, o).send({ from: u, to: f.LW, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful approval"), n() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })) : 3 == t ? X.methods.approve(f.tJ, o).estimateGas({ from: u }).then((function(t) { return X.methods.approve(f.tJ, o).send({ from: u, to: f.LW, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful approval"), n() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })) : 4 == t && X.methods.approve(f.d$, o).estimateGas({ from: u }).then((function(t) { return X.methods.approve(f.d$, o).send({ from: u, to: f.LW, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful approval"), n() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })));
                                        case 1:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(t) { return s.apply(this, arguments) }
                        }())
                    },
                    tt = function(t, n, s) {
                        q(!0), window.ethereum && window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                            var u = (0, a.Z)(i().mark((function a(u) {
                                var o, p;
                                return i().wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            u.length > 0 && (o = u[0], p = c().utils.toWei("".concat(n)), 1 == t ? (console.log(e), U.methods.stakeToken(p).estimateGas({ from: o }).then((function(t) { return U.methods.stakeToken(p).send({ from: o, to: f.sD, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful stake ".concat(n, " DYT")), nt(), s() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            }))) : 2 == t ? z.methods.stakeToken(p).estimateGas({ from: o }).then((function(t) { return z.methods.stakeToken(p).send({ from: o, to: f.ks, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful stake ".concat(n, " DYT")), nt(), s() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })) : 3 == t ? $.methods.stakeToken(p).estimateGas({ from: o }).then((function(t) { return $.methods.stakeToken(p).send({ from: o, to: f.tJ, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful stake ".concat(n, " DYT")), nt(), s() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })) : 4 == t && K.methods.stakeToken(p).estimateGas({ from: o }).then((function(t) { return K.methods.stakeToken(p).send({ from: o, to: f.d$, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful stake ".concat(n, " DYT")), nt(), s() })).catch((function(t) {
                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                            })));
                                        case 1:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })));
                            return function(t) { return u.apply(this, arguments) }
                        }())
                    },
                    et = function() {
                        var t = (0, a.Z)(i().mark((function t(e, n) {
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        q(!0), window.ethereum && window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                                            var t = (0, a.Z)(i().mark((function t(a) {
                                                var s;
                                                return i().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            a.length > 0 && (s = a[0], 1 == e ? U.methods.claimStakeToken(n).estimateGas({ from: s }).then((function(t) { return U.methods.claimStakeToken(n).send({ from: s, to: f.sD, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful claim"), nt() })).catch((function(t) {
                                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                                            })) : 2 == e ? z.methods.claimStakeToken(n).estimateGas({ from: s }).then((function(t) { return z.methods.claimStakeToken(n).send({ from: s, to: f.ks, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful claim"), nt() })).catch((function(t) {
                                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                                            })) : 3 == e ? $.methods.claimStakeToken(n).estimateGas({ from: s }).then((function(t) { return $.methods.claimStakeToken(n).send({ from: s, to: f.tJ, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful claim"), nt() })).catch((function(t) {
                                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                                            })) : 4 == e && K.methods.claimStakeToken(n).estimateGas({ from: s }).then((function(t) { return K.methods.claimStakeToken(n).send({ from: s, to: f.d$, gas: t }) })).then((function(t) { console.log(t), q(!1), r.Am.success("Successful claim"), nt() })).catch((function(t) {
                                                                (0, f.sJ)(t).then((function(t) { q(!1), r.Am.success("Error: ".concat(t)) })).catch((function(t) { r.Am.success(t.toString()) }))
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) { return t.apply(this, arguments) }
                                        }());
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e, n) { return t.apply(this, arguments) }
                    }(),
                    nt = function() {
                        var t = (0, a.Z)(i().mark((function t() {
                            return i().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        console.log(j), window.ethereum && window.ethereum.request({ method: "eth_requestAccounts" }).then(function() {
                                            var t = (0, a.Z)(i().mark((function t(e) {
                                                var a, s, u, o, p, r, l, c, y, m;
                                                return i().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!(e.length > 0)) { t.next = 45; break }
                                                            return a = e[0], n(a), s = [], t.prev = 4, t.next = 7, U.methods.listStakeTokens().call({ from: a });
                                                        case 7:
                                                            for (u = t.sent, o = 0; o < u[0].length; o++) 0 != parseInt(u[0][o], 10) && s.push({ stake: 1, id: o, amount: u[0][o], endTime: u[1][o] });
                                                            t.next = 14;
                                                            break;
                                                        case 11:
                                                            t.prev = 11, t.t0 = t.catch(4), console.log(t.t0);
                                                        case 14:
                                                            return t.prev = 14, t.next = 17, z.methods.listStakeTokens().call({ from: a });
                                                        case 17:
                                                            for (p = t.sent, r = 0; r < p[0].length; r++) 0 != parseInt(p[0][r], 10) && s.push({ stake: 2, id: r, amount: p[0][r], endTime: p[1][r] });
                                                            t.next = 24;
                                                            break;
                                                        case 21:
                                                            t.prev = 21, t.t1 = t.catch(14), console.log(t.t1);
                                                        case 24:
                                                            return t.prev = 24, t.next = 27, $.methods.listStakeTokens().call({ from: a });
                                                        case 27:
                                                            for (l = t.sent, c = 0; c < l[0].length; c++) 0 != parseInt(l[0][c], 10) && s.push({ stake: 3, id: c, amount: l[0][c], endTime: l[1][c] });
                                                            t.next = 34;
                                                            break;
                                                        case 31:
                                                            t.prev = 31, t.t2 = t.catch(24), console.log(t.t2);
                                                        case 34:
                                                            return t.prev = 34, t.next = 37, K.methods.listStakeTokens().call({ from: a });
                                                        case 37:
                                                            for (y = t.sent, m = 0; m < y[0].length; m++) 0 != parseInt(y[0][m], 10) && s.push({ stake: 4, id: m, amount: y[0][m], endTime: y[1][m] });
                                                            t.next = 44;
                                                            break;
                                                        case 41:
                                                            t.prev = 41, t.t3 = t.catch(34), console.log(t.t3);
                                                        case 44:
                                                            R(s);
                                                        case 45:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t, null, [
                                                    [4, 11],
                                                    [14, 21],
                                                    [24, 31],
                                                    [34, 41]
                                                ])
                                            })));
                                            return function(e) { return t.apply(this, arguments) }
                                        }());
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() { return t.apply(this, arguments) }
                    }();
                return (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(d.Z, {}), (0, h.jsx)(y.Z, { show: W }), (0, h.jsx)("div", { className: k().container, children: (0, h.jsxs)("div", { className: k().mainContent, children: [(0, h.jsxs)("div", { className: k().titlePage, children: [(0, h.jsx)("h1", { children: "DYT Vaults" }), (0, h.jsxs)("p", { children: ["Total Value Locked: ", B, " $DYT"] })] }), (0, h.jsxs)("div", { className: k().listVaults, children: [(0, h.jsx)(x, { stakeObject: j, dytBalance: l, type: 1, onStake: tt, onApproval: Q }), (0, h.jsx)(x, { stakeObject: D, dytBalance: l, type: 2, onStake: tt, onApproval: Q }), (0, h.jsx)(x, { stakeObject: I, dytBalance: l, type: 3, onStake: tt, onApproval: Q }), (0, h.jsx)(x, { stakeObject: F, dytBalance: l, type: 4, onStake: tt, onApproval: Q })] }), (0, h.jsxs)("div", { children: [(0, h.jsx)("h2", { children: "Your Investments" }), (0, h.jsxs)("table", { className: k().stakeTable, children: [(0, h.jsxs)("tr", { className: k().stakeTableHeader, children: [(0, h.jsx)("th", { children: "No." }), (0, h.jsx)("th", { children: "Stake Type" }), (0, h.jsx)("th", { children: "End Time" }), (0, h.jsx)("th", { children: "Token" }), (0, h.jsx)("th", { children: "Action" })] }), (0, h.jsx)(h.Fragment, { children: G && G.map((function(t, e) { return (0, h.jsxs)("tr", { children: [(0, h.jsx)("td", { children: e + 1 }), (0, h.jsx)("td", { children: (0, h.jsx)("center", { children: 1 == t.stake ? (0, h.jsxs)(h.Fragment, { children: [j && j.duration, " Day(s)"] }) : (0, h.jsx)(h.Fragment, { children: 2 == t.stake ? (0, h.jsxs)(h.Fragment, { children: [D && D.duration, " Day(s)"] }) : (0, h.jsx)(h.Fragment, { children: 3 == t.stake ? (0, h.jsxs)(h.Fragment, { children: [I && I.duration, " Day(s)"] }) : (0, h.jsx)(h.Fragment, { children: 4 == t.stake ? (0, h.jsxs)(h.Fragment, { children: [F && F.duration, " Day(s)"] }) : (0, h.jsx)(h.Fragment, {}) }) }) }) }) }), (0, h.jsx)("td", { children: (0, h.jsx)("center", { children: o().utc(o().unix(t.endTime)).format("MMMM DD HH:mm UTC") }) }), (0, h.jsxs)("td", { children: [parseFloat(c().utils.fromWei(t.amount, "ether")).toFixed(2), " DYT"] }), (0, h.jsx)("td", { children: parseInt(t.endTime, 10) > parseInt(Date.now() / 1e3, 10) ? (0, h.jsx)("span", { className: "".concat(k().stakeTableRow, " ").concat(k().claimBtn, " ").concat(k().btnDisable), children: "Claim Token" }) : (0, h.jsx)("span", { className: "".concat(k().stakeTableRow, " ").concat(k().claimBtn), onClick: function() { return et(t.stake, t.id) }, children: "Claim Token" }) })] }, e) })) })] })] })] }) }), (0, h.jsx)(m.Z, {})] })
            }
        },
        23696: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/earn", function() { return n(82648) }])
        },
        39784: function(t) { t.exports = { footer: "Footer_footer__3f33N" } },
        60130: function(t) { t.exports = { container: "Vaults_container__3wQ9A", mainContent: "Vaults_mainContent__2_sYu", titlePage: "Vaults_titlePage__1Til6", listVaults: "Vaults_listVaults__1VQwg", vaultItem: "Vaults_vaultItem__Yh8gU", topInfo: "Vaults_topInfo__3ESSw", dailyVesting: "Vaults_dailyVesting__3jycs", mainVault: "Vaults_mainVault__1aOiz", mainVaultLeft: "Vaults_mainVaultLeft__1ET9I", duration: "Vaults_duration__245KK", apy: "Vaults_apy__2c26A", dateInfo: "Vaults_dateInfo__hoFoN", dateColum: "Vaults_dateColum__vHzUm", bottomInfo: "Vaults_bottomInfo__3dsCY", balance: "Vaults_balance__HiFXm", btn: "Vaults_btn__2a7s_", amount: "Vaults_amount__91b5D", stakeInput: "Vaults_stakeInput__2GTva", stakeInputMax: "Vaults_stakeInputMax__1Db7N", msgContact: "Vaults_msgContact__a3-hA", msgEmail: "Vaults_msgEmail__2WINS", inputEmail: "Vaults_inputEmail__3KCQW", popupBackdrop: "Vaults_popupBackdrop__1FGeG", popup: "Vaults_popup__3sfmp", close: "Vaults_close__2p7w-", popupHeader: "Vaults_popupHeader__9PD89", stakeTable: "Vaults_stakeTable__3BFaC", stakeTableRow: "Vaults_stakeTableRow__sdzIe", claimBtn: "Vaults_claimBtn__1HDoJ", btnDisable: "Vaults_btnDisable__23g89", stakeTableHeader: "Vaults_stakeTableHeader__3r_MI", stakeTableLabel: "Vaults_stakeTableLabel__3hDbt", highlight: "Vaults_highlight__H_OEv", stakeInputWrap: "Vaults_stakeInputWrap__1GAUr", approveBtn: "Vaults_approveBtn__1qOo0", stakeInputPopup: "Vaults_stakeInputPopup__1p8qs", vaultSubHeader: "Vaults_vaultSubHeader__54gkm" } },
        51541: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeConfig","outputs":[{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"stakeTokens","type":"uint256"},{"internalType":"uint256","name":"openStakeTime","type":"uint256"},{"internalType":"uint256","name":"closeStakeTime","type":"uint256"},{"internalType":"uint256","name":"stakeDuration","type":"uint256"},{"internalType":"uint256","name":"stakeApy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"iList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listStakeTokens","outputs":[{"internalType":"uint256[]","name":"stakeAmoutList","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeCloseTimeList","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeStakeTime","type":"uint256"}],"name":"setCloseStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_openStakeTime","type":"uint256"}],"name":"setOpenStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeDuration","type":"uint256"}],"name":"setStakeDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeApy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTokensToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        39296: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeConfig","outputs":[{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"stakeTokens","type":"uint256"},{"internalType":"uint256","name":"openStakeTime","type":"uint256"},{"internalType":"uint256","name":"closeStakeTime","type":"uint256"},{"internalType":"uint256","name":"stakeDuration","type":"uint256"},{"internalType":"uint256","name":"stakeApy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"iList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listStakeTokens","outputs":[{"internalType":"uint256[]","name":"stakeAmoutList","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeCloseTimeList","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeStakeTime","type":"uint256"}],"name":"setCloseStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_openStakeTime","type":"uint256"}],"name":"setOpenStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeDuration","type":"uint256"}],"name":"setStakeDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeApy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTokensToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        91542: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeConfig","outputs":[{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"stakeTokens","type":"uint256"},{"internalType":"uint256","name":"openStakeTime","type":"uint256"},{"internalType":"uint256","name":"closeStakeTime","type":"uint256"},{"internalType":"uint256","name":"stakeDuration","type":"uint256"},{"internalType":"uint256","name":"stakeApy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"iList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listStakeTokens","outputs":[{"internalType":"uint256[]","name":"stakeAmoutList","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeCloseTimeList","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeStakeTime","type":"uint256"}],"name":"setCloseStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_openStakeTime","type":"uint256"}],"name":"setOpenStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeDuration","type":"uint256"}],"name":"setStakeDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeApy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTokensToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        22264: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeConfig","outputs":[{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"stakeTokens","type":"uint256"},{"internalType":"uint256","name":"openStakeTime","type":"uint256"},{"internalType":"uint256","name":"closeStakeTime","type":"uint256"},{"internalType":"uint256","name":"stakeDuration","type":"uint256"},{"internalType":"uint256","name":"stakeApy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"iList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listStakeTokens","outputs":[{"internalType":"uint256[]","name":"stakeAmoutList","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeCloseTimeList","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeStakeTime","type":"uint256"}],"name":"setCloseStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_openStakeTime","type":"uint256"}],"name":"setOpenStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeDuration","type":"uint256"}],"name":"setStakeDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeApy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTokensToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        92065: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimStakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeConfig","outputs":[{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"stakeTokens","type":"uint256"},{"internalType":"uint256","name":"openStakeTime","type":"uint256"},{"internalType":"uint256","name":"closeStakeTime","type":"uint256"},{"internalType":"uint256","name":"stakeDuration","type":"uint256"},{"internalType":"uint256","name":"stakeApy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"iId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"iList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investorsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listStakeTokens","outputs":[{"internalType":"uint256[]","name":"stakeAmoutList","type":"uint256[]"},{"internalType":"uint256[]","name":"stakeCloseTimeList","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeStakeTime","type":"uint256"}],"name":"setCloseStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_openStakeTime","type":"uint256"}],"name":"setOpenStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stakeDuration","type":"uint256"}],"name":"setStakeDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeApy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTokensToOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    },
    function(t) {
        t.O(0, [774, 482, 885, 250, 170, 888, 179], (function() { return e = 23696, t(t.s = e); var e }));
        var e = t.O();
        _N_E = e
    }
]);