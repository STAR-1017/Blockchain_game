(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37], {
        15896: function(t, e, n) {
            "use strict";
            var a = n(67294),
                i = n(4727),
                s = n.n(i),
                p = n(9669),
                u = n.n(p),
                r = n(85893);
            e.Z = function() {
                var t = (0, a.useState)(),
                    e = t[0],
                    n = t[1],
                    i = (0, a.useState)([]),
                    p = i[0],
                    y = i[1];
                return (0, a.useEffect)((function() { u().get("https://api.thedynasty.app/faqs?_sort=index:asc").then((function(t) { t.data && y(t.data) })) }), []), (0, r.jsxs)("div", { className: s().container, children: [(0, r.jsx)("h2", { className: s().title, children: "FAQ" }), (0, r.jsx)("ul", { className: s().faq, children: p.map((function(t, a) { return (0, r.jsxs)("li", { className: a === e ? "" : s().inactive, onClick: function() { return n(a) }, children: [(0, r.jsx)("img", { src: "/img/chevron.svg", alt: "arrow" }), (0, r.jsx)("h3", { className: s().question, children: t.Question }), (0, r.jsx)("p", { className: s().answer, children: t.Answer })] }, a) })) })] })
            }
        },
        81099: function(t, e, n) {
            "use strict";
            n(67294), n(10114), n(85893)
        },
        72740: function(t, e, n) {
            "use strict";
            n(67294), n(94184), n(74855), n(10114), n(82025), n(30381), n(39249), n(65779), n(85893)
        },
        42032: function(t, e, n) {
            "use strict";
            var a = n(67294),
                i = n(20607),
                s = n.n(i),
                p = n(94184),
                u = n.n(p),
                r = n(10114),
                y = n(82025),
                o = n(30381),
                l = n.n(o),
                d = n(39249),
                m = n(65779),
                c = n(85893);
            e.Z = function(t) {
                var e = t.show,
                    n = void 0 !== e && e,
                    i = t.close,
                    p = void 0 === i ? function() {} : i,
                    o = (0, a.useState)(!1),
                    T = o[0],
                    f = o[1],
                    b = (0, a.useState)([]),
                    _ = b[0],
                    v = b[1];
                (0, a.useEffect)((function() { M() }), [n]);
                var M = function() {
                        (0, y.LP)() && (f(!0), (0, r.Fv)("character/transactionHistory", {}, (function(t) {
                            if (f(!1), t.data) {
                                var e = [];
                                t.data.history.map((function(t) { e.push(h(t)) })), v(e)
                            }
                        })))
                    },
                    h = function(t) { var e = {}; return e.transactionId = t.transactionId, e.uid = t.uid, e.time = t.time / 1e3, 0 == t.status ? e.status = "Pending" : 1 == t.status ? e.status = "Success" : 2 == t.status && (e.status = "Failure"), e.transactionType = t.transactionType, e };
                return (0, c.jsx)(c.Fragment, {
                    children: n && (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)("div", { className: "backdrop", onClick: p }), (0, c.jsxs)("div", {
                            className: s().inner,
                            children: [(0, c.jsx)(m.Z, { show: T }), (0, c.jsx)("ul", {
                                className: s().listTrans,
                                children: _.map((function(t, e) {
                                    return (0, c.jsxs)("li", {
                                        children: [(0, c.jsxs)("strong", { children: [e + 1, ". ", t.transactionType] }), (0, c.jsxs)("div", { children: [l().unix(t.time).format("MMMM DD HH:mm"), " \u2022", " ", (0, c.jsx)("span", { className: s().status, children: t.status })] }), (0, c.jsx)("div", { className: s().transHash, children: t.transactionId }), "Pending" === t.status && (0, c.jsx)("div", {
                                            className: u()("btn", s().verifyBtn),
                                            onClick: function() {
                                                return e = t.uid, n = t.transactionType, f(!0), void(0, r.Fv)("character/transactionVerify", { transactionType: n, uid: e }, (function(t) {
                                                    if (0 === t.code) d.Am.error(t.error);
                                                    else {
                                                        d.Am.success("Successful verify. please reload game (F5 browser) to take effect!");
                                                        var e = document.getElementById("dytIframe");
                                                        e && e.contentWindow.GameClient.SyncData(t.data.characterDiff)
                                                    }
                                                    M()
                                                }));
                                                var e, n
                                            },
                                            children: "Verify"
                                        })]
                                    }, e)
                                }))
                            })]
                        })]
                    })
                })
            }
        },
        60776: function(t, e, n) {
            "use strict";
            n(67294), n(94184), n(82025), n(85893)
        },
        4727: function(t) { t.exports = { container: "FAQ_container__3L0M6", title: "FAQ_title__3W2Hr", question: "FAQ_question__ezC83", answer: "FAQ_answer__2RXzm", faq: "FAQ_faq__2-nv6", inactive: "FAQ_inactive__18Of5" } },
        20607: function(t) { t.exports = { inner: "TransactionHistoryPopup_inner__26qGr", tabHeader: "TransactionHistoryPopup_tabHeader__1Qc8Z", active: "TransactionHistoryPopup_active__12bl_", copyBtn: "TransactionHistoryPopup_copyBtn__2y-wN", stat: "TransactionHistoryPopup_stat__1Lo5M", listTrans: "TransactionHistoryPopup_listTrans__3Mzx5", line: "TransactionHistoryPopup_line__1fQCb", transHash: "TransactionHistoryPopup_transHash__2Tp5J", verifyBtn: "TransactionHistoryPopup_verifyBtn__2QVCg" } },
        77029: function(t) {
            "use strict";
            t.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"botProtectSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rw","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectFundsRaised","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeMktWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"getAllChar","outputs":[{"components":[{"internalType":"uint256","name":"charInfo","type":"uint256"},{"internalType":"uint256","name":"charPrice","type":"uint256"},{"internalType":"bool","name":"sale","type":"bool"}],"internalType":"struct BACKGROUND.Character[]","name":"","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"token_id","type":"uint256"}],"name":"getChar","outputs":[{"internalType":"uint256","name":"_charId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPresaleChar","outputs":[{"internalType":"uint256","name":"_len","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token_address","type":"address"},{"internalType":"address","name":"_taxRecipient","type":"address"},{"internalType":"uint256","name":"_marketFee","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"charID","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_times","type":"uint256"}],"name":"normalMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openPresaleTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"presaleChar","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pushTrashChar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_val","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_botProtectSec","type":"uint256"}],"name":"setBotProtectSec","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeMktWallet","type":"address"}],"name":"setFeeMktWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"t","type":"uint256"}],"name":"setOpenPresaleTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"signerAddress","type":"address"}],"name":"setSignatureChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bool","name":"_sale","type":"bool"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setTokenSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"updateChar","outputs":[{"internalType":"uint256","name":"charID","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"updateGodChar","outputs":[{"internalType":"uint256","name":"charID","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"updateHumanChar","outputs":[{"internalType":"uint256","name":"charID","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_humanMintFee","type":"uint256"},{"internalType":"uint256","name":"_godMintFee","type":"uint256"}],"name":"updateMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        }
    }
]);