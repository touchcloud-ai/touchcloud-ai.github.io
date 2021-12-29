! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var s = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(i, s, function(t) {
                return e[t]
            }.bind(null, s));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function(e, t, n) {
    "use strict";

    function i(e) {
        "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    }
    n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
    }
    n.d(t, "a", (function() {
        return i
    }))
}, function(e, t, n) {
    n(3), n(8), n(10), n(12), n(13), n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(29), n(31), n(58)
}, function(e, t, n) {
    n(4), n(5), n(6), n(7)
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "initMaterialInputs", (function() {
        return r
    }));
    var i = n(1);

    function s(e) {
        var t = e.target,
            n = t.parentNode;
        n.hasAttribute("placeholder") && (t.placeholder = n.getAttribute("placeholder")), n.classList.add("focusing")
    }

    function a(e) {
        var t = e.target,
            n = t.parentNode;
        t.placeholder = "", n.classList.remove("focusing")
    }

    function o(e) {
        var t = e.target,
            n = t.parentNode,
            i = t.value && "" != t.value;
        i ? n.classList.add("fill") : n.classList.remove("fill");
        var s = n.getAttribute("pattern"),
            a = n.getAttribute("min"),
            o = n.getAttribute("max"),
            r = n.getAttribute("maxlength"),
            l = !1,
            c = !1;
        i && ((l = !s || RegExp(s).test(t.value)) && r && (l = t.value.length <= r), l && a && (l = (Number(t.value) || -1) >= (Number(a) || 999)), l && o && (l = (Number(t.value) || 999) <= (Number(o) || 0)), c = !l), l ? n.classList.add("completed") : n.classList.remove("completed"), c ? n.classList.add("has-error") : n.classList.remove("has-error")
    }

    function r() {
        for (var e = document.getElementsByTagName("material-input"), t = 0; t < e.length; ++t) l(e[t])
    }

    function l(e) {
        if (!e.inited) {
            e.inited = !0, e.classList.add("material-input"), e.hasAttribute("bordered") && e.classList.add("bordered");
            var t = "input";
            e.hasAttribute("textarea") && (t = "textarea");
            var n = document.createElement(t);
            n.id = e.getAttribute("data-id"), n.addEventListener("focus", s), n.addEventListener("blur", a), n.addEventListener("input", o), e.hasAttribute("type") && n.setAttribute("type", e.getAttribute("type")), e.hasAttribute("maxlength") && n.setAttribute("maxlength", e.getAttribute("maxlength")), e.hasAttribute("min") && n.setAttribute("min", e.getAttribute("min")), e.hasAttribute("max") && n.setAttribute("max", e.getAttribute("max")), e.hasAttribute("required") && n.setAttribute("required", ""), e.hasAttribute("pattern") && n.setAttribute("pattern", e.getAttribute("pattern")), e.hasAttribute("name") ? n.setAttribute("name", e.getAttribute("name")) : n.setAttribute("name", e.getAttribute("title"));
            var i = document.createElement("p");
            i.className = "m-title";
            var r = document.createElement("label");
            r.innerHTML = e.getAttribute("title"), r.setAttribute("for", e.getAttribute("data-id")), i.appendChild(r), e.appendChild(n), e.appendChild(i)
        }
    }
    window.addEventListener("load", (function() {
        Object(i.a)(r)
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "initMaterialSelects", (function() {
        return a
    }));
    var i = n(1);

    function s(e) {
        var t = e.target,
            n = t.parentNode.parentNode;
        t.value && "" != t.value ? n.classList.add("fill") : n.classList.remove("fill")
    }

    function a() {
        for (var e = document.getElementsByTagName("material-select"), t = 0; t < e.length; ++t) o(e[t])
    }

    function o(e) {
        if (!e.inited) {
            e.inited = !0, e.classList.add("material-select"), e.hasAttribute("bordered") && e.classList.add("bordered");
            var t = e.children[0];
            t.remove(), t.addEventListener("change", s);
            var n = document.createElement("div");
            n.className = "m-select-wrapper";
            var i = document.createElement("p");
            i.className = "m-title";
            var a = document.createElement("label");
            a.innerHTML = e.getAttribute("title"), a.setAttribute("for", e.getAttribute("data-id")), i.appendChild(a), e.appendChild(n), n.appendChild(t), e.appendChild(i)
        }
    }
    window.addEventListener("load", (function() {
        Object(i.a)(a)
    }))
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    n(9)
}, function(e, t, n) {}, function(e, t, n) {
    n(11)
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0);

    function s() {
        var e = document.getElementById("btn-drawer");
        if (e) {
            var t = document.querySelector("header nav .links");
            if (t) {
                var n = t.getElementsByTagName("a");
                e.addEventListener("click", (function() {
                    t.classList.contains("opened") ? (e.classList.remove("opened"), t.classList.remove("opened")) : (e.classList.add("opened"), t.classList.add("opened"))
                }));
                for (var i = 0; i < n.length; ++i) n[i].addEventListener("click", (function() {
                    e.classList.remove("opened"), t.classList.remove("opened")
                }))
            }
        }
    }

    function a() {
        var e = document.getElementsByTagName("nav")[0];

        function t() {
            window.scrollY < 200 ? e.classList.add("transparent") : e.classList.remove("transparent")
        }
        e && (window.addEventListener("scroll", t), t())
    }
    window.addEventListener("load", (function() {
        Object(i.a)(s), Object(i.a)(a)
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0);

    function s() {
        var e = document.getElementsByTagName("header")[0];
        if (e) {
            var t = e.getElementsByClassName("has-sub-menu")[0],
                n = e.getElementsByClassName("sub-menu")[0];
            n && (t.addEventListener("mouseover", (function() {
                t.classList.add("opened")
            })), t.addEventListener("mouseout", (function() {
                t.classList.remove("opened")
            })), n.addEventListener("mouseover", (function(e) {
                t.classList.add("opened")
            })), n.addEventListener("mouseout", (function() {
                t.classList.remove("opened")
            })))
        }
    }

    function a() {
        var e = document.getElementsByTagName("header")[0];
        if (e) e.getElementsByClassName("sub-header")[0]
    }
    window.addEventListener("load", (function() {
        Object(i.a)(s), Object(i.a)(a)
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0);

    function s() {
        document.getElementById("img-banner").src = ["assets/img/main_1.jpg", "assets/img/main_2.jpg", "assets/img/main_3.jpg"][parseInt(3 * Math.random())]
    }

    function a() {
        new GMaps({
            div: "#google-map",
            scrollwheel: !1,
            lat: 25.0413646,
            lng: 121.5476613,
            styles: [{
                elementType: "geometry",
                stylers: [{
                    color: "#f5f5f5"
                }]
            }, {
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#616161"
                }]
            }, {
                elementType: "labels.text.stroke",
                stylers: [{
                    color: "#f5f5f5"
                }]
            }, {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#bdbdbd"
                }]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{
                    color: "#eeeeee"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.icon",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#757575"
                }]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#e5e5e5"
                }]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#757575"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#dadada"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#616161"
                }]
            }, {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9e9e9e"
                }]
            }, {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{
                    color: "#eeeeee"
                }]
            }, {
                featureType: "transit.station",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "transit.station",
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    color: "#c9c9c9"
                }]
            }, {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#9e9e9e"
                }]
            }],
            zoom: 15
        }).addMarker({
            icon: "assets/img/map_marker.png",
            lat: 25.0413646,
            lng: 121.5476613,
            infoWindow: {
                content: "<h4>Touch Cloud</h4><p>10F.-4, No. 148, Section 4, Zhongxiao East Road, Da’an District, Taipei City, 106</p>"
            }
        })
    }

    function o() {
        $(".js-pscroll").each((function() {
            var e = new PerfectScrollbar(this);
            $(window).on("resize", (function() {
                e.update()
            })), $(this).on("ps-x-reach-start", (function() {
                $(this).parent().find(".table100-firstcol").removeClass("shadow-table100-firstcol")
            })), $(this).on("ps-scroll-x", (function() {
                $(this).parent().find(".table100-firstcol").addClass("shadow-table100-firstcol")
            }))
        }))
    }

    function r() {
        $(window).scroll((function() {
            var e = $("[floating]"),
                t = window.scrollY;
            $(e).each((function() {
                var e = $(this),
                    n = e.attr("floating") / 10,
                    i = (e.offset().top - t - window.innerHeight) * -n / 5,
                    s = window.innerWidth <= 767 ? 30 : 60;
                i = Math.max(0 - s, Math.min(s, i)), TweenLite.to(e, 1.5, {
                    y: i
                })
            }))
        }))
    }

    function l() {
        return
    }

    function c() {
        var e = document.getElementById("play-mask-ai-box-intro"),
            t = e.previousElementSibling;
        e.addEventListener("click", (function() {
            t.play()
        })), t.addEventListener("playing", (function(t) {
            e.style.display = "none"
        })), t.addEventListener("end", (function(t) {
            e.style.display = "flex"
        })), t.addEventListener("pause", (function(t) {
            e.style.display = "flex"
        }))
    }

    function u() {
        for (var e = document.getElementsByClassName("section-solution-ai-box")[0], t = e.getElementsByClassName("tabbar")[0], n = e.getElementsByClassName("post"), i = t.getElementsByTagName("button"), s = 0; s < i.length; ++s) a(i[s], s);

        function a(e, t) {
            e.addEventListener("click", (function() {
                for (var e = 0; e < i.length; ++e) e == t ? i[e].classList.add("active") : i[e].classList.remove("active"), e == t ? n[e].classList.add("active") : n[e].classList.remove("active")
            }))
        }
    }

    function d() {
        var e = document.getElementsByClassName("section-city-img")[0],
            t = document.getElementsByClassName("section-solution-ai-box")[0],
            n = document.getElementsByClassName("section-ai-box-spec")[0],
            i = document.getElementsByClassName("section-solution-aoi")[0],
            s = document.getElementsByClassName("section-contact")[0],
            a = document.getElementById("ai-box-sepc-header");

        function o() {
            var o = "#fff";
            (e.getBoundingClientRect().top || e.getBoundingClientRect().y) < 94 && (o = "#ebf0f2"), (t.getBoundingClientRect().top || t.getBoundingClientRect().y) < 94 && (o = "#ededf2"), (n.getBoundingClientRect().top || n.getBoundingClientRect().y) < 94 && (o = "#fff"), (i.getBoundingClientRect().top || i.getBoundingClientRect().y) < 94 && (o = "#e9edf0"), (s.getBoundingClientRect().top || s.getBoundingClientRect().y) < 94 && (o = "#fff"), document.body.style.backgroundColor = o, a.style.backgroundColor = o
        }
        o(), window.addEventListener("scroll", o)
    }
    n(21), n(22), n(23), n(24), n(25), n(26), n(27), n(28), window.addEventListener("load", (function() {
        document.body.classList.contains("page-index") && (Object(i.a)(s), Object(i.a)(a), Object(i.a)(o), Object(i.a)(r), Object(i.a)(l), Object(i.a)(c), Object(i.a)(u), Object(i.a)(d))
    }))
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    n(30)
}, function(e, t, n) {}, function(e, t, n) {
    const i = n(32);
    var s;
    (s = i).keys().map(s)
}, function(e, t, n) {
    var i = {
        "./Construction_Site_Safety@2x.jpg": 33,
        "./aiab_1.svg": 34,
        "./aiab_2.svg": 35,
        "./aiab_box_120@2x.png": 36,
        "./aiab_box_440@2x.png": 37,
        "./aiab_still.jpg": 38,
        "./aoi_flow.svg": 39,
        "./aoi_flow_m.svg": 40,
        "./email.svg": 41,
        "./icon-play.svg": 42,
        "./intelligent_security_system@2x.jpg": 43,
        "./intelligent_traffic_system@2x.jpg": 44,
        "./logo.svg": 45,
        "./logo_blue.svg": 46,
        "./main_1.jpg": 47,
        "./main_2.jpg": 48,
        "./main_3.jpg": 49,
        "./map_marker-big.png": 50,
        "./map_marker.png": 51,
        "./phone.svg": 52,
        "./tc_desktop_still.jpg": 53,
        "./tc_logo.svg": 54,
        "./tc_logo_white-01.svg": 55,
        "./tpe_night@2x.jpg": 56,
        "./video-preview-aiab.jpg": 57
    };

    function s(e) {
        var t = a(e);
        return n(t)
    }

    function a(e) {
        if (!n.o(i, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
    }
    s.keys = function() {
        return Object.keys(i)
    }, s.resolve = a, e.exports = s, s.id = 32
}, function(e, t, n) {
    e.exports = n.p + "assets/img/Construction_Site_Safety@2x.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aiab_1.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aiab_2.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aiab_box_120@2x.png"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aiab_box_440@2x.png"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aiab_still.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aoi_flow.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/aoi_flow_m.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/email.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/icon-play.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/intelligent_security_system@2x.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/intelligent_traffic_system@2x.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/logo.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/logo_blue.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/main_1.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/main_2.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/main_3.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/map_marker-big.png"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/map_marker.png"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/phone.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/tc_desktop_still.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/tc_logo.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/tc_logo_white-01.svg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/tpe_night@2x.jpg"
}, function(e, t, n) {
    e.exports = n.p + "assets/img/video-preview-aiab.jpg"
}, function(e, t, n) {
    const i = n(59);
    var s;
    (s = i).keys().map(s)
}, function(e, t, n) {
    var i = {
        "./aiab720.mp4": 60,
        "./tc_desktop720.mp4": 61
    };

    function s(e) {
        var t = a(e);
        return n(t)
    }

    function a(e) {
        if (!n.o(i, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
    }
    s.keys = function() {
        return Object.keys(i)
    }, s.resolve = a, e.exports = s, s.id = 59
}, function(e, t, n) {
    e.exports = n.p + "assets/video/aiab720.mp4"
}, function(e, t, n) {
    e.exports = n.p + "assets/video/tc_desktop720.mp4"
}]);