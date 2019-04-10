var vietbando = vbd = {
    Cf: [1],
    ns: "http://www.w3.org/2000/svg",
    TILE_SIZE: 256,
    KN: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANAQMAAABIJXY/AAAABlBMVEUAAACZmZl+9SADAAAAAXRSTlMAQObYZgAAACNJREFUCNdjgAAFB4aCBwyWBxjkGxj4GYAIyABygYJAKaA8AHb6Bq9p/silAAAAAElFTkSuQmCC",
    KM: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAIAgMAAADB3li5AAAADFBMVEUAAAD///8AAAD5+fud3040AAAAAXRSTlMAQObYZgAAACxJREFUGNNjCGUgDQA1ZJKoA6ghM5REkMmQtYpEsJIMLWQ4jHTvvyQ9kP8CAKsIZ4v+qHD+AAAAAElFTkSuQmCC",
    HL: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABaCAMAAADNRvW0AAAAllBMVEUaEhIAAAD/+/saEhL/+/v/+/saEhIaEhIaEhIaEhL/+/v/+/saEhL/+/v/+/v/+/v/+/v/+/saEhIaEhIaEhL/+/saEhL/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/vq5uf/+/v/+/v///8iIiQZGRpTVFZHSEpDQ0U2NjhZWlxOT1BMTU8+P0A0NDVfX2JaXF7p6erm5+eGzAQhAAAAInRSTlM2ANkG1IAtJyQTAskvwZJzZksgHxoYCi8QtLOZlwkR3csw5sgS4QAAAh9JREFUWMPMz7sOAyEMRNFZjWRsiWpB/P+nZvOgyJoA7nJb68gaHC5aSZKBLKkY/f1OWAVfSeWUNMUgbT8JO/CIY2KYZCNyYtrpScKidCeCZdKJ+7H8A7djvqcTw2bWCbEdP0T3ib5JQ6D2Ihoh+iREKF6kxki9iMSIHCCCERYlhhIlBSlKEnJQdBAjf9qD0zogAAAAYRBWgP556bAI6j0E48OS4ZQQGIglhB9eDB4Z6gJKCaoPChZqHGABSALwAV4B4qAKICSgPS5XrnB3Vma7DcJAFFVH9outsDwgIHvTAiUu0P7/z3VSPMjAsMjnyb7KUVguHpVGwVELoY9BlCpKV5QkPIDDIUw2lEwKmCBktqbEGhh0vKgoCQtIxSuXEyxyunCKOsMKZ8UoElaRcyWGDeKpkml48WmB+U5fxwpd1oeF28mxkog+br7+abidSEZKCD1VVf0+kH73QH4wgp7QVRT1qjQGJhhTUt+Uo6RgeRZPWjJR6igRhUVd0JKJIkcJKOzaDoghqmkZOEpOId05wkS5o2jYhXYUsU8Rnor/heX7lJx7yFRbhIkC7lXa2hIUMa/yncIGa2thopSrJdWWGEUHxZW/NOVtbNwwovKznxjWtvpG+t1rVWHEfmJvcqitKRH7n4gZmiz546Ju266u6UcFLrvWNlln/KH0sMB8F3scfR4HrM8x7j8s/EcSceUG39VzvG4P8bsQ97Uh/geUFzaspaocMQAAAABJRU5ErkJggg==')",
    KO: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAhFBMVEUAAAD///8zNDSampuEhIScnZ6IiIn///8bGxyenqCPj5CMjY2ur69vb3CeoKFNTk////9JSktFRkdRUlM7PD01NTfc3N1YWVpSU1RjZWdbXF5eX2JVVlcwMTJAQUJCQ0Q9PkBgYmQ4ODosLC0pKSsnJygjIyQcHB4ZGRrW1ta8vL0hISIfDVDsAAAAD3RSTlMAMzNqampqPDxqamqIiGoX+fvyAAAA60lEQVRIx+3Ly26DMBSE4bTkfiMYUxwgxlzbJO//fpVGXnQ26Fgqahb9ljP6F/9+w/bL28qTTy8geY7wlCfLcYBxKU+GHoaApO+gD0i6G3TyZH3z1gFJBiFJ1kImTw6thvYgT7QDLU/2zoLbyxNbg51K3snJKrAn3inJiK4V1Jp3SvRPzqoElHV0UFIrkni81pSoREBRksQCyR8kcSoQU/JBHsZ78E7JhdyNd+d9KkkrSKeSN3I0FZgj75SwyORgooVUVOVQzZvkBeSzJquihGI1b9JAQLIrr1Du5kzOzRWaszjZXLzNiyWv4BvBPDoxeCmhmAAAAABJRU5ErkJggg==",
    KL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAM1BMVEUAAAD///8ZGRr///9ZWVtTVFVMTU9FRUcaGhvh4eFfYGM3NzkkJCbf3+BBQUM0NDYjIyXNlLmyAAAAA3RSTlMAMzOxzcD4AAAAT0lEQVRIx+3LOQ6AMAxFwQCxzZbl/qel/t2TEBWefkpK6c9WRMqOSJk3MKWMCxhSegBdSjgQUtwAl2IVMCn1BKqUdgBNyoa8LQtSUkrfewAIaAwnjeOgYwAAAABJRU5ErkJggg==",
    JZ: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAMAAABodAmPAAAAtFBMVEUAAAD/gHb/fXKdPTf/g3j/f3X/h3z/hXv/e2//eW31fnSyT0jChoLCVUyyTEWsR0CiQTvdu7nJlJHsdm3/dmqxX1rHV0+oT0m6TUanS0bu2tnjsa3OnpvDbmejQzzet7TZtLHOmpbHkIz1d23sc2nQYlrQYFfUXVTHXFStV1LJWVG+UEivSkSlSUOxSEGePTfsxMHsvrrPoJ3gnpnYk47ZiYPKhoPKf3rAd3LHc23AZF20U0wawMGfAAAAAXRSTlMAQObYZgAAAQJJREFUKM9tzdd2gzAMgGEFUSgYDAFC2Nl7dc/3f68KA2U4/5XPd2QJ6uZLy1rOoVt2QXY+M7xkrU1wb2qUucdJY1MmSDCb1nPc1PQ6zeRiNkNf11V1RKnEPr6UnzdmRYJVc0MLxuiTtaj6OAaPVdYq88ByCHvqWISjQYQeHyL36NC6b2s6BPH2gaqgfG1jAFjgSlFKLklRVrgA6mArQoko+wCimLTJjqEqKcLGwiKBuhkeH0VHnMF/X7xCnkOnIjSo0IVuH06Jzif0cm3DsF3ol0eGEf0MMMUgwFcY5AaBC8N+dzsm4ffplEv4FkXvEqbXayrhE+IzSCEm9xDkbjdo+gOMghGGo/phOwAAAABJRU5ErkJggg==",
    Ak: {
        B_: 1,
        B$: 2,
        FJ: 3,
        Gx: 4,
        Mq: 5
    },
    F7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCB1jYAAAAAIAAc/INeUAAAAASUVORK5CYII=",
    Guid: function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    },
    MapTypeId: {
        ROADMAP: 0,
        SATELLITE: 1,
        TERRAIN: 2
    },
    getServerId: function (a, d) {
        var b = Math.abs(a + d) % this.Servers.length;
        return this.Servers[b]
    },
    getUrl: function (a) {
        switch (a) {
            case this.MapTypeId.ROADMAP:
                return this.pathImgMap;
                break;
            case this.MapTypeId.TERRAIN:
                return this.pathImgMapTerrain;
                break;
            case this.MapTypeId.SATELLITE:
                return this.pathImgMapSatellite;
                break;
            default:
                return this.pathImgMap;
                break
        }
    },
    Cg: function (f, e, a) {
        for (var d in e) {
            f[d] = e[d]
        }
        if (a) {
            return f
        }
    }
};
(function () {
    var d = navigator.userAgent.toLowerCase(),
        l = document.documentElement,
        b = "ActiveXObject" in window,
        m = d.indexOf("webkit") !== -1,
        o = d.indexOf("phantom") !== -1,
        k = d.search("android [23]") !== -1,
        i = d.indexOf("chrome") !== -1,
        e = typeof orientation !== "undefined",
        g = navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
        a = (window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints) || g,
        j = b && ("transition" in l.style),
        n = ("WebKitCSSMatrix" in window) && ("m11" in new window.WebKitCSSMatrix()) && !k,
        f = "MozPerspective" in l.style,
        p = "OTransition" in l.style;
    var h = !window.L_NO_TOUCH && !o && (a || "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
    vbd.Browser = {
        ie: b,
        ielt9: b && !document.addEventListener,
        webkit: m,
        gecko: (d.indexOf("gecko") !== -1) && !m && !window.opera && !b,
        android: d.indexOf("android") !== -1,
        android23: k,
        chrome: i,
        safari: !i && d.indexOf("safari") !== -1,
        ie3d: j,
        webkit3d: n,
        gecko3d: f,
        opera12: p,
        any3d: !window.L_DISABLE_3D && (j || n || f) && !p && !o,
        mobile: e,
        mobileWebkit: e && m,
        mobileWebkit3d: e && n,
        mobileOpera: e && window.opera,
        touch: !!h,
        msPointer: !!g,
        pointer: !!a,
        retina: (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1
    };
    vbd.checkKey = "vietbandomapsapi";
    vbd.http = "https://";
    vbd.address = "developers.vietbando.com";
    vbd.root = vbd.http + vbd.address;
    vbd.pathImgMap = vbd.root + "/V2/MapsAPIService.ashx?Type=LoadMapImage";
    vbd.pathImgMapTerrain = vbd.root + "/V2/MapsAPIService.ashx?Type=LoadTerrainImage";
    vbd.pathImgMapSatellite = vbd.root + "/V2/MapsAPIService.ashx?Type=LoadSatelliteImage";
    vbd.HG = function () {
        var q = new Image(16, 16);
        vbd.Cg(q.style, {
            position: "absolute",
            left: "0px",
            top: "0px",
            border: "0px none",
            display: "none",
            marginLeft: "-8px",
            marginTop: "-8px",
            zIndex: -33832289
        }, false);
        q.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBoCg+AAAAD3RSTlMAq6AgC4trQEt1FWA2K4DSKcc0AAAAZElEQVQI12PABMwHQCSLAQOnGIhhKszAEhjFwMChmMDA4CZUwPVQAyRcJNYk6QBWHih0AKJPUdQBzCiUSAwB0dxCF9iEDBiA2oMZGBqVGRjYxIAK2IUuMLBvABsxAWojlwPccgDEag57u58fNgAAAABJRU5ErkJggg==";
        return q
    }();
    vbd.Servers = []
}());
vbd.RTree = function (h) {
    this.Ec = Math.max(4, h || 9);
    this.KX = Math.max(2, Math.ceil(this.Ec * 0.4));
    var w;
    var r = function () {
        return [Infinity, Infinity, -Infinity, -Infinity]
    },
        t = function (z, y) {
            z[0] = Math.min(z[0], y[0]);
            z[1] = Math.min(z[1], y[1]);
            z[2] = Math.max(z[2], y[2]);
            z[3] = Math.max(z[3], y[3]);
            return z
        },
        m = function (y, C, A) {
            for (var z = A; z >= 0; z--) {
                t(C[z].bbox, y)
            }
        },
        l = function (y, z) {
            var A = [];
            while (y) {
                if (y.leaf) {
                    z.push.apply(z, y.children)
                } else {
                    A.push.apply(A, y.children)
                }
                y = A.pop()
            }
            return z
        },
        i = function (z, y) {
            return z[0] <= y[0] && z[1] <= y[1] && y[2] <= z[2] && y[3] <= z[3]
        },
        g = function (z, y) {
            return y[0] <= z[2] && y[1] <= z[3] && y[2] >= z[0] && y[3] >= z[1]
        },
        s = function (y) {
            return (y[2] - y[0]) * (y[3] - y[1])
        },
        e = function (y) {
            return (y[2] - y[0]) + (y[3] - y[1])
        },
        n = function (z, y) {
            return (Math.max(y[2], z[2]) - Math.min(y[0], z[0])) * (Math.max(y[3], z[3]) - Math.min(y[1], z[1]))
        },
        o = function (A, z) {
            var y = Math.max(A[0], z[0]),
                E = Math.max(A[1], z[1]),
                D = Math.min(A[2], z[2]),
                C = Math.min(A[3], z[3]);
            return Math.max(0, D - y) * Math.max(0, C - E)
        },
        a = function (z, A, E) {
            var C = r();
            for (var D = A, y; D < E; D++) {
                y = z.children[D];
                t(C, z.leaf ? y : y.bbox)
            }
            return C
        },
        f = function (y) {
            y.bbox = a(y, 0, y.children.length)
        },
        p = function (z, y) {
            return z.bbox[0] - y.bbox[0]
        },
        q = function (z, y) {
            return z.bbox[1] - y.bbox[1]
        },
        u = function (z, y) {
            return z[0] - y[0]
        },
        k = function (z, y) {
            return z[1] - y[1]
        },
        d = function (E, y, C, F) {
            E.children.sort(F);
            var H = a(E, 0, y),
                A = a(E, C - y, C),
                J = e(H) + e(A),
                z, D;
            for (z = y; z < C - y; z++) {
                D = E.children[z];
                t(H, E.leaf ? D : D.bbox);
                J += e(H)
            }
            for (z = C - y - 1; z >= y; z--) {
                D = E.children[z];
                t(A, E.leaf ? D : D.bbox);
                J += e(A)
            }
            return J
        },
        j = function (N, E, L, M) {
            var A, F, D, J, C, y, z;
            while (true) {
                M.push(E);
                if (E.leaf || M.length - 1 === L) {
                    break
                }
                y = z = Infinity;
                var O = E.children.length;
                for (A = 0; A < O; A++) {
                    F = E.children[A];
                    J = s(F.bbox);
                    C = n(N, F.bbox) - J;
                    if (C < z) {
                        z = C;
                        y = J < y ? J : y;
                        D = F
                    } else {
                        if (C === z) {
                            if (J < y) {
                                y = J;
                                D = F
                            }
                        }
                    }
                }
                E = D || E.children[0]
            }
            return E
        },
        b = function (z, y, F) {
            var A = z.leaf ? u : p,
                E = z.leaf ? k : q,
                D = d(z, y, F, A),
                C = d(z, y, F, E);
            if (D < C) {
                z.children.sort(A)
            }
        },
        x = function (J, A, E) {
            var C, F, H, L, y, N, z, D;
            N = z = Infinity;
            for (C = A; C <= E - A; C++) {
                F = a(J, 0, C);
                H = a(J, C, E);
                L = o(F, H);
                y = s(F) + s(H);
                if (L < N) {
                    N = L;
                    D = C;
                    z = y < z ? y : z
                } else {
                    if (L === N) {
                        if (y < z) {
                            z = y;
                            D = C
                        }
                    }
                }
            }
            return D
        },
        v = function (z, y) {
            w = {
                children: [z, y],
                height: z.height + 1,
                bbox: null,
                leaf: false
            };
            f(w)
        };
    this.clear = function () {
        w = {
            children: [],
            height: 1,
            bbox: r(),
            leaf: true
        };
        return this
    };
    this.getAll = function () {
        return l(w, [])
    };
    this.getDataInBox = function (D) {
        var z = w,
            C = [];
        if (!g(D, z.bbox)) {
            return C
        }
        var H = [],
            E, y, A;
        while (z) {
            var F = z.children.length;
            for (E = 0; E < F; E++) {
                y = z.children[E];
                A = z.leaf ? y : y.bbox;
                if (g(D, A)) {
                    if (z.leaf) {
                        C.push(y)
                    } else {
                        if (i(D, A)) {
                            l(y, C)
                        } else {
                            H.push(y)
                        }
                    }
                }
            }
            z = H.pop()
        }
        return C
    };
    this.collides = function (C) {
        var z = w;
        if (!g(C, z.bbox)) {
            return false
        }
        var F = [],
            D, y, A;
        while (z) {
            var E = z.children.length;
            for (D = 0; D < E; D++) {
                y = z.children[D];
                A = z.leaf ? y : y.bbox;
                if (g(C, A)) {
                    if (z.leaf || contains(C, A)) {
                        return true
                    }
                    F.push(y)
                }
            }
            z = F.pop()
        }
        return false
    };
    this.insert = function (y) {
        if (y) {
            this.MU(y, w.height - 1)
        }
        return this
    };
    this.Mg = function (D, C) {
        var A = D[C],
            F = A.children.length,
            z = this.KX;
        b(A, z, F);
        var E = x(A, z, F);
        var y = {
            children: A.children.splice(E, A.children.length - E),
            height: A.height,
            bbox: null,
            leaf: false
        };
        if (A.leaf) {
            y.leaf = true
        }
        f(A);
        f(y);
        if (C) {
            D[C - 1].children.push(y)
        } else {
            v(A, y)
        }
    };
    this.MU = function (y, E, A) {
        var C = A ? y.bbox : y,
            D = [];
        var z = j(C, w, E, D);
        z.children.push(y);
        t(z.bbox, C);
        while (E >= 0) {
            if (D[E].children.length > this.Ec) {
                this.Mg(D, E);
                E--
            } else {
                break
            }
        }
        m(C, D, E)
    };
    this.Mj = function (A) {
        for (var z = A.length - 1, y; z >= 0; z--) {
            if (A[z].children.length === 0) {
                if (z > 0) {
                    y = A[z - 1].children;
                    y.splice(y.indexOf(A[z]), 1)
                } else {
                    this.clear()
                }
            } else {
                f(A[z])
            }
        }
    };
    this.remove = function (y) {
        if (!y) {
            return this
        }
        var F = w,
            L = y,
            J = [],
            C = [],
            A, D, E, z;
        while (F || J.length) {
            if (!F) {
                F = J.pop();
                D = J[J.length - 1];
                A = C.pop();
                z = true
            }
            if (F.leaf) {
                E = F.children.indexOf(y);
                if (E !== -1) {
                    F.children.splice(E, 1);
                    J.push(F);
                    this.Mj(J);
                    return this
                }
            }
            if (!z && !F.leaf && i(F.bbox, L)) {
                J.push(F);
                C.push(A);
                A = 0;
                D = F;
                F = F.children[0]
            } else {
                if (D) {
                    A++;
                    F = D.children[A];
                    z = false
                } else {
                    F = null
                }
            }
        }
        return this
    };
    this.clear()
};
vbd.DomUtil = {
    get: function (a) {
        return typeof a === "string" ? document.getElementById(a) : a
    },
    getStyle: function (b, d) {
        var e = b.style[d] || (b.currentStyle && b.currentStyle[d]);
        if ((!e || e === "auto") && document.defaultView) {
            var a = document.defaultView.getComputedStyle(b, null);
            e = a ? a[d] : null
        }
        return e === "auto" ? null : e
    },
    getSize: function (b) {
        var a = new vbd.Size(b.clientWidth, b.clientHeight);
        if (a.width !== 0 || a.height !== 0) {
            return a
        }
        if (a.width === 0 && a.height === 0 || isNaN(a.width) && isNaN(a.height)) {
            a.width = b.offsetWidth;
            a.height = b.offsetHeight
        }
        if (a.width === 0 && a.height === 0 || isNaN(a.width) && isNaN(a.height)) {
            a.width = parseInt(b.style.width);
            a.height = parseInt(b.style.height)
        }
        return a
    },
    create: function (a, e, d) {
        var b = document.createElement(a);
        b.className = e;
        if (d) {
            d.appendChild(b)
        }
        return b
    },
    remove: function (b) {
        if (b) {
            var a = b.parentNode;
            if (a) {
                a.removeChild(b)
            }
        }
    },
    add: function (b, d) {
        if (d && b) {
            var a = b.parentNode;
            if (!a) {
                d.appendChild(b)
            }
        }
    },
    empty: function (a) {
        while (a.firstChild) {
            a.removeChild(a.firstChild)
        }
    },
    toFront: function (a) {
        a.parentNode.appendChild(a)
    },
    toBack: function (b) {
        var a = b.parentNode;
        a.insertBefore(b, a.firstChild)
    },
    hasClass: function (b, a) {
        if (b.classList !== undefined) {
            return b.classList.contains(a)
        }
        var d = vbd.DomUtil.getClass(b);
        return d.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(d)
    },
    addClass: function (e, d) {
        if (e.classList !== undefined) {
            var f = vbd.Util.splitWords(d);
            for (var a = 0, b = f.length; a < b; a++) {
                e.classList.add(f[a])
            }
        } else {
            if (!vbd.DomUtil.hasClass(e, d)) {
                var g = vbd.DomUtil.getClass(e);
                vbd.DomUtil.setClass(e, (g ? g + " " : "") + d)
            }
        }
    },
    removeClass: function (b, a) {
        if (b.classList !== undefined) {
            b.classList.remove(a)
        } else {
            vbd.DomUtil.setClass(b, vbd.Util.trim((" " + vbd.DomUtil.getClass(b) + " ").replace(" " + a + " ", " ")))
        }
    },
    setClass: function (b, a) {
        if (b.className.baseVal === undefined) {
            b.className = a
        } else {
            b.className.baseVal = a
        }
    },
    getClass: function (a) {
        return a.className.baseVal === undefined ? a.className : a.className.baseVal
    },
    setOpacity: function (a, b) {
        if ("opacity" in a.style) {
            a.style.opacity = b
        } else {
            if ("filter" in a.style) {
                vbd.DomUtil.LR(a, b)
            }
        }
    },
    LR: function (d, g) {
        var b = false,
            a = "DXImageTransform.Microsoft.Alpha";
        try {
            b = d.filters.item(a)
        } catch (f) {
            if (g === 1) {
                return
            }
        }
        g = Math.round(g * 100);
        if (b) {
            b.Enabled = (g !== 100);
            b.Opacity = g
        } else {
            d.style.filter += " progid:" + a + "(opacity=" + g + ")"
        }
    },
    CH: function (b) {
        var d = document.documentElement.style;
        for (var a = 0; a < b.length; a++) {
            if (b[a] in d) {
                return b[a]
            }
        }
        return false
    },
    setTransform: function (b, a, d) {
        var e = a || new vbd.Point(0, 0);
        b.style[vbd.Er] = "translate3d(" + e.x + "px," + e.y + "px,0)" + (d ? " scale(" + d + ")" : "")
    },
    KD: function (e, f, a, g, d, b) {
        e.style[vbd.Er] = "translate(" + d + "px, " + b + "px) scale(" + f + ")";
        e.style[vbd.FI] = a + "px " + g + "px"
    },
    Mx: function (a, d, b) {
        a.style[d] = b
    },
    setPosition: function (a, d, b) {
        if (!a) {
            return
        }
        a.AK = d;
        if (vbd.Browser.any3d && !b) {
            vbd.DomUtil.setTransform(a, d)
        } else {
            a.style.left = d.x + "px";
            a.style.top = d.y + "px"
        }
    },
    getPosition: function (a) {
        return a.AK || new vbd.Point(0, 0)
    },
    getTarget: function (a) {
        return (a.target || a.srcElement)
    },
    GH: function (g) {
        var b = {
            AI: vbd.Ak.B_,
            obj: null
        };
        try {
            var f = this.getTarget(g),
                d = f.BJ;
            b.AI = d;
            b.obj = f.obj;
            while (!d && f.tagName.toLowerCase() !== "body") {
                f = f.parentNode;
                d = f.BJ
            }
            var a = parseInt(d);
            b.AI = a;
            b.obj = f.obj
        } finally {
            return b
        }
    },
    Jo: function (b, f) {
        if (typeof b.indexOf == "function") {
            return b.indexOf(f)
        } else {
            for (var d = 0, e = b.length; d < e; d++) {
                if (b[d] == f) {
                    return d
                }
            }
            return -1
        }
    },
    toFront: function (b) {
        var a = b.parentNode;
        if (a.lastChild !== b) {
            a.appendChild(b)
        }
    },
    toBack: function (b) {
        var a = b.parentNode;
        if (a.firstChild !== b) {
            a.insertBefore(b, a.firstChild)
        }
    },
    Gw: function (g) {
        var f = g.split("-"),
            b = f[0];
        for (var a = 1, e = f.length; a < e; a++) {
            var d = f[a];
            b += d.charAt(0).toUpperCase() + d.substring(1)
        }
        return b
    },
    LT: function () {
        var e = [];
        for (var a = 0, d = arguments.length; a < d; a++) {
            var b = arguments[a];
            if (typeof b == "string") {
                b = document.getElementById(b)
            }
            if (arguments.length == 1) {
                return b
            }
            e.push(b)
        }
        return e
    },
    G5: function (g, d) {
        g = this.LT(g);
        var a = null;
        if (g && g.style) {
            a = g.style[this.Gw(d)];
            if (!a) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var b = document.defaultView.getComputedStyle(g, null);
                    a = b ? b.getPropertyValue(d) : null
                } else {
                    if (g.currentStyle) {
                        a = g.currentStyle[this.Gw(d)]
                    }
                }
            }
            var f = ["left", "top", "right", "bottom"];
            if (window.opera && (this.Jo(f, d) != -1) && (this.G5(g, "position") == "static")) {
                a = "auto"
            }
        }
        return a == "auto" ? null : a
    },
    getRenderedDimensions: function (f, q, a) {
        var n, e, p = document.createElement("div");
        p.style.visibility = "hidden";
        var o = (a && a.containerElement) ? a.containerElement : document.body;
        var r = false,
            j = null,
            m = o;
        while (m && m.tagName.toLowerCase() != "body") {
            var k = this.G5(m, "position");
            if (k == "absolute") {
                r = true;
                break
            } else {
                if (k && k != "static") {
                    break
                }
            }
            m = m.parentNode
        }
        if (r && (o.clientHeight === 0 || o.clientWidth === 0)) {
            var j = vbd.DomUtil.create("div", "");
            vbd.extend(j.style, {
                height: document.body.clientHeight + "px",
                width: document.body.clientWidth + "px",
                visibility: "hidden",
                position: "absolute",
                overflow: "visible"
            });
            j.appendChild(p)
        }
        p.style.position = "absolute";
        if (q) {
            if (q.width) {
                n = q.width;
                p.style.width = n + "px"
            } else {
                if (q.height) {
                    e = q.height;
                    p.style.height = e + "px"
                }
            }
        }
        if (a && a.displayClass) {
            p.className = options.displayClass
        }
        var g = document.createElement("div");
        g.innerHTML = f;
        g.style.overflow = "visible";
        if (g.childNodes) {
            for (var d = 0, b = g.childNodes.length; d < b; d++) {
                if (!g.childNodes[d].style) {
                    continue
                }
                g.childNodes[d].style.overflow = "visible"
            }
        }
        p.appendChild(g);
        if (j) {
            o.appendChild(j)
        } else {
            o.appendChild(p)
        }
        if (!n) {
            n = parseInt(p.scrollWidth);
            p.style.width = n + "px"
        }
        if (!e) {
            e = parseInt(g.scrollHeight) || parseInt(g.firstChild.scrollHeight)
        }
        p.removeChild(g);
        if (j) {
            j.removeChild(p);
            o.removeChild(j)
        } else {
            o.removeChild(p)
        }
        return new vbd.Size(n, e)
    }
};
vbd.Er = vbd.DomUtil.CH(["Transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
vbd.FI = vbd.DomUtil.CH(["TransformOrigin", "WebkitTransformOrigin", "MozTransformOrigin", "OTransformOrigin", "msTransformOrigin"]);
vbd.FK = vbd.DomUtil.CH(["webkitTransition", "Transition", "OTransition", "MozTransition", "msTransition"]);
vbd.Be = vbd.DomUtil.CH(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
vbd.Jr = vbd.DomUtil.CH(["borderRadius", "MozBorderRadius", "WebkitBorderRadius"]);
vbd.Gp = vbd.DomUtil.CH(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]);
(function () {
    vbd.DomUtil.M2 = vbd.FK === "webkitTransition" || vbd.FK === "OTransition" ? vbd.FK + "End" : "transitionend";
    if ("onselectstart" in document) {
        vbd.DomUtil.disableTextSelection = function () {
            vbd.selectstart = vbd.event.addDomListener(window, "selectstart", vbd.event.preventDefault)
        };
        vbd.DomUtil.enableTextSelection = function () {
            vbd.event.removeDomListener(vbd.selectstart);
            vbd.selectstart = null
        }
    } else {
        vbd.DomUtil.disableTextSelection = function () {
            if (vbd.Be) {
                var a = document.documentElement.style;
                this.G6 = a[vbd.Be];
                a[vbd.Be] = "none"
            }
        };
        vbd.DomUtil.enableTextSelection = function () {
            if (vbd.Be) {
                document.documentElement.style[vbd.Be] = this.G6;
                delete this.G6
            }
        }
    }
    vbd.DomUtil.disableImageDrag = function () {
        vbd.HK = vbd.event.addDomListener(window, "dragstart", vbd.event.preventDefault)
    };
    vbd.DomUtil.enableImageDrag = function () {
        vbd.event.removeDomListener(vbd.HK);
        vbd.HK = null
    };
    vbd.DomUtil.preventOutline = function (a) {
        vbd.DomUtil.restoreOutline();
        this.Ga = a;
        this.HA = a.style.outline;
        a.style.outline = "none";
        vbd.event.addDomListener(window, "keydown", vbd.DomUtil.restoreOutline, this)
    };
    vbd.DomUtil.restoreOutline = function () {
        if (!this.Ga) {
            return
        }
        this.Ga.style.outline = this.HA;
        delete this.Ga;
        delete this.HA;
        vbd.event.removeDomListener(window, "keydown", vbd.DomUtil.restoreOutline, this)
    }
})();
vbd.Util = {
    Distance: function (b, e, a, d) {
        return (Math.pow((a - b), 2) + Math.pow((d - e), 2))
    },
    Distance2Point: function (b, e, a, d) {
        return Math.sqrt(this.Distance(b, e, a, d))
    },
    DistanceBetween2LatLng: function (e, h) {
        var b = vbd.Projection.EJ;
        var g = e.Latitude * b,
            f = h.Latitude * b,
            d = Math.sin(g) * Math.sin(f) + Math.cos(g) * Math.cos(f) * Math.cos((h.Longitude - e.Longitude) * b);
        return vbd.Projection.HZ * Math.acos(Math.min(d, 1))
    },
    CH: function (d) {
        var b = document.documentElement.style;
        for (var a = 0; a < d.length; a++) {
            if (d[a] in b) {
                return d[a]
            }
        }
        return false
    },
    ProjectFactor: function (g, d, b, f, a, e) {
        if ((g === b) && (d === f)) {
            return 0
        }
        if ((g === a) && (d === e)) {
            return 1
        }
        var j = (a - b),
            i = (e - f);
        var h = (j * j) + (i * i);
        return ((g - b) * j + (d - f) * i) / h
    },
    ProjectPoint: function (a, h, d, f, b, e) {
        if (((a === d) && (h === f)) || ((a === b) && (h === e))) {
            return new vbd.LatLng(h, a)
        } else {
            var g = this.ProjectFactor(a, h, d, f, b, e);
            return new vbd.LatLng((f + g * (e - f)), (d + g * (b - d)))
        }
    },
    ClosePoint: function (k, h, e, j, d, i) {
        var g = this.ProjectFactor(k, h, e, j, d, i);
        if (g > 0 && g < 1) {
            return this.ProjectPoint(k, h, e, j, d, i)
        }
        var b = this.Distance(k, h, e, j),
            a = this.Distance(k, h, d, i);
        return b < a ? new vbd.LatLng(j, e) : new vbd.LatLng(i, d)
    },
    ClosePointPolyline: function (f, l) {
        var n = 0,
            g = 0,
            j = null,
            d = l[0].Longitude,
            m = l[0].Latitude,
            a = l[1].Longitude,
            k = l[1].Latitude,
            b = this.ClosePoint(f.Longitude, f.Latitude, d, m, a, k),
            h = this.Distance(f.Longitude, f.Latitude, b.Longitude, b.Latitude);
        for (var e = 1, o = (l.length - 1) ; e < o; e++) {
            d = l[e].Longitude;
            m = l[e].Latitude;
            a = l[e + 1].Longitude;
            k = l[e + 1].Latitude;
            j = this.ClosePoint(f.Longitude, f.Latitude, d, m, a, k);
            g = this.Distance(f.Longitude, f.Latitude, j.Longitude, j.Latitude);
            if (g < h) {
                h = g;
                b = j;
                n = e
            }
        }
        return {
            LatLng: b,
            edge: n,
            distance: h
        }
    },
    AJ: function (a, d, e) {
        var b = document.createElement(a);
        vbd.Cg(b.style, d, false);
        b.style[vbd.Be] = "none";
        if (e) {
            e.appendChild(b)
        }
        return b
    },
    LQ: function (e, d, b) {
        var a = new Image();
        vbd.Cg(a.style, d, false);
        vbd.Cg(a, b, false);
        a.src = e;
        return a
    },
    KA: function (b, f) {
        if (typeof b.indexOf == "function") {
            return b.indexOf(f)
        } else {
            for (var d = 0, e = b.length; d < e; d++) {
                if (b[d] == f) {
                    return d
                }
            }
            return -1
        }
    },
    IX: function (g) {
        var a = g.split("-"),
            f = a[0];
        for (var b = 1, e = a.length; b < e; b++) {
            var d = a[b];
            f += d.charAt(0).toUpperCase() + d.substring(1)
        }
        return f
    },
    J_: function () {
        var e = [];
        for (var a = 0, d = arguments.length; a < d; a++) {
            var b = arguments[a];
            if (typeof b == "string") {
                b = document.getElementById(b)
            }
            if (arguments.length == 1) {
                return b
            }
            e.push(b)
        }
        return e
    },
    IS: function (g, d) {
        g = this.J_(g);
        var a = null;
        if (g && g.style) {
            a = g.style[this.IX(d)];
            if (!a) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var b = document.defaultView.getComputedStyle(g, null);
                    a = b ? b.getPropertyValue(d) : null
                } else {
                    if (g.currentStyle) {
                        a = g.currentStyle[this.IX(d)]
                    }
                }
            }
            var f = ["left", "top", "right", "bottom"];
            if (window.opera && (this.KA(f, d) != -1) && (this.IS(g, "position") == "static")) {
                a = "auto"
            }
        }
        return a == "auto" ? null : a
    },
    getRenderedDimensions: function (a, r, d) {
        var o, j, g = document.createElement("div");
        g.style.visibility = "hidden";
        var q = (d && d.containerElement) ? d.containerElement : document.body;
        var p = false,
            b = null,
            k = q;
        while (k && k.tagName.toLowerCase() != "body") {
            var n = this.IS(k, "position");
            if (n == "absolute") {
                p = true;
                break
            } else {
                if (n && n != "static") {
                    break
                }
            }
            k = k.parentNode
        }
        if (p && (q.clientHeight === 0 || q.clientWidth === 0)) {
            b = document.createElement("div");
            b.style.visibility = "hidden";
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.width = document.body.clientWidth + "px";
            b.style.height = document.body.clientHeight + "px";
            b.appendChild(g)
        }
        g.style.position = "absolute";
        if (r) {
            if (r.width) {
                o = r.width;
                g.style.width = o + "px"
            } else {
                if (r.height) {
                    j = r.height;
                    g.style.height = j + "px"
                }
            }
        }
        if (d && d.displayClass) {
            g.className = d.displayClass
        }
        var m = document.createElement("div");
        m.innerHTML = a;
        m.style.overflow = "visible";
        if (m.childNodes) {
            for (var f = 0, e = m.childNodes.length; f < e; f++) {
                if (!m.childNodes[f].style) {
                    continue
                }
                m.childNodes[f].style.overflow = "visible"
            }
        }
        g.appendChild(m);
        if (b) {
            q.appendChild(b)
        } else {
            q.appendChild(g)
        }
        if (!o) {
            o = parseInt(g.scrollWidth);
            g.style.width = o + "px"
        }
        if (!j) {
            j = parseInt(m.scrollHeight) || parseInt(m.firstChild.scrollHeight)
        }
        g.removeChild(m);
        if (b) {
            b.removeChild(g);
            q.removeChild(b)
        } else {
            q.removeChild(g)
        }
        return new vbd.Size(o, j)
    },
    LO: function (b) {
        var a = new Date;
        var d = setInterval(function () {
            var g = new Date - a;
            var e = g / b.duration;
            if (e > 1) {
                e = 1
            }
            var f = b.delta(e);
            b.step(f);
            if (e == 1) {
                clearInterval(d);
                if (b.fnStop) {
                    b.fnStop.call()
                }
            }
        }, b.delay || 10)
    },
    J9: function (f) {
        for (var e = 0, d = 1; true;) {
            if (f >= (7 - 4 * e) / 11) {
                return -Math.pow((11 - 6 * e - 11 * f) / 4, 2) + Math.pow(d, 2)
            }
            e += d;
            d /= 2
        }
    },
    J8: function (a) {
        return function (b) {
            return 1 - a(1 - b)
        }
    },
    ConvertArrLatLng2Point: function (d, b) {
        return d.map(function (a) {
            return b.Mr(a)
        })
    },
    ConverALongLat2ALatLng: function (a) {
        var b = [];
        for (var d = 0; d < a.length; d += 2) {
            b.push(new vbd.LatLng(a[d + 1], a[d]))
        }
        return b
    },
    Ms: function (b, a) {
        return ((a.Left < b.x) && (a.Right > b.x) && (a.Top < b.y) && (a.Bottom > b.y))
    },
    GetBoundArrLatLng: function (e) {
        if (e.length < 1) {
            return null
        }
        var b = e[0].Latitude,
            d = e[0].Longitude,
            h = e[0].Latitude,
            j = e[0].Longitude;
        for (var f = 1, g = e.length; f < g; f++) {
            d = Math.min(d, e[f].Longitude);
            j = Math.max(j, e[f].Longitude);
            b = Math.min(b, e[f].Latitude);
            h = Math.max(h, e[f].Latitude)
        }
        return new vbd.LatLngBounds(new vbd.LatLng(b, d), new vbd.LatLng(h, j))
    },
    Mt: function (e) {
        var d = this.GetBoundArrLatLng(e);
        if (d) {
            return {
                Left: d.sw.Latitude,
                Top: d.sw.Longitude,
                Right: d.ne.Latitude,
                Bottom: d.ne.Longitude
            }
        }
        return null
    },
    LP: function (e) {
        if (e && e.length == 0) {
            return null
        }
        var d = new vbd.LatLngBounds(e[0], e[1]);
        for (var a = 2, b = e.length; a < b; a++) {
            d.extend(e[a])
        }
        return d
    },
    GetMBR: function (e) {
        var d = this.GetBoundArrLatLng(e);
        if (d) {
            return {
                x: d.sw.Longitude,
                y: d.sw.Latitude,
                w: d.getWidth(),
                h: d.getHeight()
            }
        }
        return null
    },
    UnionRect: function (b, a) {
        return {
            Left: Math.min(b.Left, a.Left),
            Top: Math.min(b.Top, a.Top),
            Right: Math.max(b.Right, a.Right),
            Bottom: Math.max(b.Bottom, a.Bottom)
        }
    },
    M0: function (b) {
        if (b instanceof Array && b[0] instanceof Array) {
            return false
        } else {
            if (b instanceof Array) {
                return true
            } else {
                return false
            }
        }
    },
    getOffsetSum: function (d) {
        var b = 0,
            a = 0;
        while (d) {
            b = b + parseInt(d.offsetTop);
            a = a + parseInt(d.offsetLeft);
            d = d.offsetParent
        }
        return vbd.point(a, b)
    },
    getOffsetRect: function (k) {
        var g = k.getBoundingClientRect(),
            h = document.body,
            b = document.documentElement;
        var a = window.pageYOffset || b.scrollTop || h.scrollTop,
            e = window.pageXOffset || b.scrollLeft || h.scrollLeft;
        var f = b.clientTop || h.clientTop || 0,
            i = b.clientLeft || h.clientLeft || 0;
        var j = g.top + a - f,
            d = g.left + e - i;
        return vbd.point(d, j)
    },
    getOffset: function (a) {
        var b = a.getBoundingClientRect();
        return vbd.point(b.left + a.clientLeft, b.top + a.clientTop)
    },
    convertUrl2Object: function (a) {
        var b = {};
        a.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (d, e, f) {
            b[e] = f
        });
        return b
    },
    stamp: function (a) {
        a.AB = a.AB || ++vbd.Util.Jn;
        return a.AB
    },
    Jn: 0,
    trim: function (a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    },
    splitWords: function (a) {
        return vbd.Util.trim(a).split(/\s+/)
    },
    bind: function (b, d) {
        var e = Array.prototype.slice;
        if (b.bind) {
            return b.bind.apply(b, e.call(arguments, 1))
        }
        var a = e.call(arguments, 2);
        return function () {
            return b.apply(d, a.length ? a.concat(e.call(arguments)) : arguments)
        }
    },
    extend: function (f) {
        var b, a, d = arguments.length,
            e;
        for (a = 1; a < d; a++) {
            e = arguments[a];
            for (b in e) {
                f[b] = e[b]
            }
        }
        return f
    },
    create: Object.create || (function () {
        function a() { }
        return function (b) {
            a.prototype = b;
            return new a()
        }
    })(),
    Jw: function (b, a) {
        return b.replace(/\{ *([\w_]+) *\}/g, function (f, d) {
            var e = a[d];
            if (e === undefined) {
                throw new Error("No value provided for variable " + f)
            } else {
                if (typeof e === "function") {
                    e = e(a)
                }
            }
            return e
        })
    },
    isArray: Array.isArray || function (a) {
        return (Object.prototype.toString.call(a) === "[object Array]")
    },
    Dr: function () {
        return false
    },
    setOptions: function (d, a) {
        if (!d.hasOwnProperty("options")) {
            d.options = d.options ? vbd.Util.create(d.options) : {}
        }
        for (var b in a) {
            d.options[b] = a[b]
        }
        return d.options
    },
    getContextID: function (a) {
        return [a.zoom, a.tile.x, a.tile.y].join(":")
    },
    getIDForLayerFeature: function (a) {
        return a.properties.id
    },
    getJSON: function (a, d) {
        var b = typeof XMLHttpRequest !== "undefined" ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        b.onreadystatechange = function () {
            var e = b.status;
            if (b.readyState === 4 && e >= 200 && e < 300) {
                var f = JSON.parse(b.responseText);
                d(null, f)
            } else {
                d({
                    error: true,
                    status: e
                })
            }
        };
        b.open("GET", a, true);
        b.send()
    }
};
(function () {
    function e(g) {
        return window["webkit" + g] || window["moz" + g] || window["ms" + g]
    }
    var b = 0;

    function f(g) {
        var h = +new Date(),
            i = Math.max(0, 16 - (h - b));
        b = h + i;
        return window.setTimeout(g, i)
    }
    var a = window.requestAnimationFrame || e("RequestAnimationFrame") || f,
        d = window.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (g) {
            window.clearTimeout(g)
        };
    vbd.Util.requestAnimFrame = function (h, g, j, i) {
        if (j && a === f) {
            h.call(g, i)
        } else {
            return a.call(window, vbd.bind(h, g, i))
        }
    };
    vbd.Util.cancelAnimFrame = function (g) {
        if (g) {
            d.call(window, g)
        }
    }
})();
vbd.extend = vbd.Util.extend;
vbd.bind = vbd.Util.bind;
vbd.stamp = vbd.Util.stamp;
vbd.setOptions = vbd.Util.setOptions;
vbd.convertWktToGeoJson = function (l) {
    if (!l) {
        return null
    }
    var u = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/;
    var m = new RegExp("^" + u.source + "(\\s" + u.source + "){1,}");
    var n = l.split(";");
    var v = n.pop();
    var t = (n.shift() || "").split("=").pop();
    var s = 0;

    function e(w) {
        var i = v.substring(s).match(w);
        if (!i) {
            return null
        } else {
            s += i[0].length;
            return i[0]
        }
    }

    function b(i) {
        if (i && t.match(/\d+/)) {
            i.crs = {
                type: "name",
                properties: {
                    name: "urn:ogc:def:crs:EPSG::" + t
                }
            }
        }
        return i
    }

    function f() {
        e(/^\s*/)
    }

    function o() {
        f();
        var z = 0;
        var x = [];
        var w = [x];
        var y = x;
        var i;
        while (i = e(/^(\()/) || e(/^(\))/) || e(/^(,)/) || e(m)) {
            if (i === "(") {
                w.push(y);
                y = [];
                w[w.length - 1].push(y);
                z++
            } else {
                if (i === ")") {
                    if (y.length === 0) {
                        return null
                    }
                    y = w.pop();
                    if (!y) {
                        return null
                    }
                    z--;
                    if (z === 0) {
                        break
                    }
                } else {
                    if (i === ",") {
                        y = [];
                        w[w.length - 1].push(y)
                    } else {
                        if (!i.split(/\s/g).some(isNaN)) {
                            Array.prototype.push.apply(y, i.split(/\s/g).map(parseFloat))
                        } else {
                            return null
                        }
                    }
                }
            }
            f()
        }
        if (z !== 0) {
            return null
        }
        return x
    }

    function r() {
        var i = [];
        var w;
        var x;
        while (x = e(m) || e(/^(,)/)) {
            if (x === ",") {
                i.push(w);
                w = []
            } else {
                if (!x.split(/\s/g).some(isNaN)) {
                    if (!w) {
                        w = []
                    }
                    Array.prototype.push.apply(w, x.split(/\s/g).map(parseFloat))
                }
            }
            f()
        }
        if (w) {
            i.push(w)
        } else {
            return null
        }
        return i.length ? i : null
    }

    function q() {
        if (!e(/^(point(\sz)?)/i)) {
            return null
        }
        f();
        if (!e(/^(\()/)) {
            return null
        }
        var i = r();
        if (!i) {
            return null
        }
        f();
        if (!e(/^(\))/)) {
            return null
        }
        return {
            type: "Point",
            coordinates: i[0]
        }
    }

    function k() {
        if (!e(/^(multipoint)/i)) {
            return null
        }
        f();
        var i = v.substring(v.indexOf("(") + 1, v.length - 1).replace(/\(/g, "").replace(/\)/g, "");
        v = "MULTIPOINT (" + i + ")";
        var w = o();
        if (!w) {
            return null
        }
        f();
        return {
            type: "MultiPoint",
            coordinates: w
        }
    }

    function h() {
        if (!e(/^(multilinestring)/i)) {
            return null
        }
        f();
        var i = o();
        if (!i) {
            return null
        }
        f();
        return {
            type: "MultiLineString",
            coordinates: i
        }
    }

    function j() {
        if (!e(/^(linestring(\sz)?)/i)) {
            return null
        }
        f();
        if (!e(/^(\()/)) {
            return null
        }
        var i = r();
        if (!i) {
            return null
        }
        if (!e(/^(\))/)) {
            return null
        }
        return {
            type: "LineString",
            coordinates: i
        }
    }

    function g() {
        if (!e(/^(polygon(\sz)?)/i)) {
            return null
        }
        f();
        var i = o();
        if (!i) {
            return null
        }
        return {
            type: "Polygon",
            coordinates: i
        }
    }

    function d() {
        if (!e(/^(multipolygon)/i)) {
            return null
        }
        f();
        var i = o();
        if (!i) {
            return null
        }
        return {
            type: "MultiPolygon",
            coordinates: i
        }
    }

    function a() {
        var i = [];
        var w;
        if (!e(/^(geometrycollection)/i)) {
            return null
        }
        f();
        if (!e(/^(\()/)) {
            return null
        }
        while (w = p()) {
            i.push(w);
            f();
            e(/^(,)/);
            f()
        }
        if (!e(/^(\))/)) {
            return null
        }
        return {
            type: "GeometryCollection",
            geometries: i
        }
    }

    function p() {
        return q() || j() || g() || k() || h() || d() || a()
    }
    return b(p())
};
vbd.convertGeoJsonToWkt = function (a) {
    if (!a) {
        return null
    }
    if (a.type === "Feature") {
        a = a.geometry
    }

    function e(h) {
        return h.join(" ")
    }

    function g(h) {
        return h.map(e).join(", ")
    }

    function d(h) {
        return h.map(g).map(b).join(", ")
    }

    function f(h) {
        return h.map(d).map(b).join(", ")
    }

    function b(h) {
        return "(" + h + ")"
    }
    switch (a.type) {
        case "Point":
            return "POINT (" + e(a.coordinates) + ")";
        case "LineString":
            return "LINESTRING (" + g(a.coordinates) + ")";
        case "Polygon":
            return "POLYGON (" + d(a.coordinates) + ")";
        case "MultiPoint":
            return "MULTIPOINT (" + g(a.coordinates) + ")";
        case "MultiPolygon":
            return "MULTIPOLYGON (" + f(a.coordinates) + ")";
        case "MultiLineString":
            return "MULTILINESTRING (" + d(a.coordinates) + ")";
        case "GeometryCollection":
            return "GEOMETRYCOLLECTION (" + a.geometries.map(vbd.convertGeoJsonToWkt).join(", ") + ")";
        default:
            throw new Error("requires a valid GeoJSON Feature or geometry object as input")
    }
};
vbd.getBoundsCenterZoom = function (a, q, b, m, f) {
    a = a.getBounds ? a.getBounds() : vbd.latLngBounds(a);
    var n = 0,
        g = b || 2,
        l = m || 19,
        i = a.getNorthWest(),
        k = a.getSouthEast();
    var p = vbd.Projection.LatLng2Pixel(k, n).subtract(vbd.Projection.LatLng2Pixel(i, n)),
        f = f || 1;
    var e = Math.min(q.width / p.x, q.height / p.y);
    n = n + (Math.log(e) / Math.LN2);
    if (f) {
        n = Math.round(n / (f / 100)) * (f / 100);
        n = Math.floor(n / f) * f
    }
    var n = Math.max(g, Math.min(l, n));
    n = Math.min(l, n);
    var j = vbd.Projection.LatLng2Pixel(a.getSouthWest(), n),
        d = vbd.Projection.LatLng2Pixel(a.getNorthEast(), n);
    var o = j.add(d);
    o.x /= 2;
    o.y /= 2;
    var h = vbd.Projection.Pixel2LatLng(o, n);
    return {
        center: h,
        zoom: n
    }
};
vbd.event = {
    element: function (a) {
        return (a.target || a.srcElement)
    },
    M1: function (a) {
        return (a.touches && (a.touches.length == 1))
    },
    Mz: function (a) {
        return (a.touches && (a.touches.length > 1))
    },
    Mw: function (a) {
        return (((a.which) && (a.which == 1)) || ((a.button) && (a.button == 1)))
    },
    Mv: function (a) {
        return (((a.which) && (a.which == 3)) || ((a.button) && (a.button == 2)))
    },
    stop: function (a, b) {
        if (!b) {
            this.preventDefault(a)
        }
        if (a.stopPropagation) {
            a.stopPropagation()
        } else {
            a.cancelBubble = true
        }
    },
    applyDefaults: function (e, d) {
        e = e || {};
        var b = typeof window.Event == "function" && d instanceof window.Event;
        for (var a in d) {
            if (!e[a] || (!b && d.hasOwnProperty && d.hasOwnProperty(a) && !e.hasOwnProperty(a))) {
                e[a] = d[a]
            }
        }
        if (!b && d && d.hasOwnProperty && d.hasOwnProperty("toString") && !e.hasOwnProperty("toString")) {
            e.toString = d.toString
        }
        return e
    },
    getMousePosition: function (a) {
        return new vbd.Point(a.clientX, a.clientY)
    },
    A8: "_vbd_events",
    Fh: vbd.Browser.msPointer ? "MSPointerDown" : "pointerdown",
    FT: vbd.Browser.msPointer ? "MSPointerMove" : "pointermove",
    Ff: vbd.Browser.msPointer ? "MSPointerUp" : "pointerup",
    Fi: vbd.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
    G0: vbd.Browser.msPointer ? "MSPointerDown" : vbd.Browser.pointer ? "pointerdown" : "touchstart",
    Gv: vbd.Browser.msPointer ? "MSPointerUp" : vbd.Browser.pointer ? "pointerup" : "touchend",
    C9: {},
    FV: 0,
    addPointerListener: function (a) {
        if (a.type === "touchstart") {
            this.LV(a, a.handler)
        } else {
            if (a.type === "touchmove") {
                this.La(a, a.handler)
            } else {
                if (a.type === "touchend") {
                    this.LW(a, a.handler)
                }
            }
        }
    },
    removePointerListener: function (b, a) {
        if (b.type === "touchstart") {
            b.obj.removeEventListener(this.Fh, a, false)
        } else {
            if (b.type === "touchmove") {
                b.obj.removeEventListener(this.FT, a, false)
            } else {
                if (b.type === "touchend") {
                    b.obj.removeEventListener(this.Ff, a, false);
                    b.obj.removeEventListener(this.Fi, a, false)
                }
            }
        }
    },
    LV: function (d, a) {
        var b = vbd.bind(function (f) {
            vbd.event.preventDefault(f);
            this.Fe(f, a)
        }, this);
        d.obj[this.A8][d.AB] = b;
        d.obj.addEventListener(this.Fh, b, false);
        if (!this.Ld) {
            var e = vbd.bind(this.Lc, this);
            document.documentElement.addEventListener(this.Fh, vbd.bind(this.Le, this), true);
            document.documentElement.addEventListener(this.FT, vbd.bind(this.Lb, this), true);
            document.documentElement.addEventListener(this.Ff, e, true);
            document.documentElement.addEventListener(this.Fi, e, true);
            this.Ld = true
        }
    },
    Le: function (a) {
        this.C9[a.pointerId] = a;
        this.FV++
    },
    Lb: function (a) {
        if (this.C9[a.pointerId]) {
            this.C9[a.pointerId] = a
        }
    },
    Lc: function (a) {
        delete this.C9[a.pointerId];
        this.FV--
    },
    Fe: function (d, a) {
        d.touches = [];
        for (var b in this.C9) {
            d.touches.push(this.C9[b])
        }
        d.changedTouches = [d];
        a(d)
    },
    La: function (d, a) {
        var b = vbd.bind(function (f) {
            if ((f.pointerType === f.MSPOINTER_TYPE_MOUSE || f.pointerType === "mouse") && f.buttons === 0) {
                return
            }
            this.Fe(f, a)
        }, this);
        d.obj[this.A8][d.AB] = b;
        d.obj.addEventListener(this.FT, b, false)
    },
    LW: function (d, b) {
        var a = vbd.bind(function (f) {
            this.Fe(f, b)
        }, this);
        d.obj[this.A8][d.AB] = a;
        d.obj.addEventListener(this.Ff, a, false);
        d.obj.addEventListener(this.Fi, a, false)
    },
    addDoubleTapListener: function (h, d) {
        var a, i, e = false,
            b = 250;

        function g(l) {
            var k;
            if (vbd.Browser.pointer) {
                k = vbd.event.FV
            } else {
                k = l.touches.length
            }
            if (k > 1) {
                return
            }
            var j = Date.Es(),
                m = j - (a || j);
            i = l.touches ? l.touches[0] : l;
            e = (m > 0 && m <= b);
            a = j
        }

        function f() {
            if (e) {
                if (vbd.Browser.pointer) {
                    var j = {},
                        l, k;
                    for (k in i) {
                        l = i[k];
                        j[k] = l && l.bind ? l.bind(i) : l
                    }
                    i = j
                }
                i.type = "dblclick";
                d(i);
                a = null
            }
        }
        h.obj[this.A8][h.obj.AB] = {
            touchStart: g,
            touchEnd: f
        };
        h.obj.addEventListener(this.G0, g, false);
        h.obj.addEventListener(this.Gv, f, false)
    },
    removeDoubleTapListener: function (b, a) {
        b.obj.removeEventListener(this.G0, a.touchStart, false);
        b.obj.removeEventListener(this.Gv, a.touchEnd, false)
    },
    addDomListener: function (h, b, g, d) {
        var a = [];
        b = vbd.Util.splitWords(b);
        for (var e = 0, f = b.length; e < f; e++) {
            a.push(this.LZ(h, b[e], g, d))
        }
        return a
    },
    removeDomListener: function (a) {
        if (!a) {
            return
        }
        for (var b = 0, d = a.length; b < d; b++) {
            this.LY(a[b])
        }
        a.length = 0
    },
    LZ: function (i, f, e, d) {
        var h = f + vbd.stamp(e) + (d ? "_" + vbd.stamp(d) : "");
        if (i[this.A8] && i[this.A8][h]) {
            return {
                obj: i,
                type: f,
                handler: i[this.A8][h],
                context: d,
                AB: h
            }
        }
        var b = function (j) {
            return e.call(d || i, j || window.event)
        };
        var a = b;
        i[this.A8] = i[this.A8] || {};
        i[this.A8][h] = b;
        var g = {
            obj: i,
            type: f,
            handler: b,
            context: d,
            AB: h
        };
        if (vbd.Browser.pointer && f.indexOf("touch") === 0) {
            this.addPointerListener(g)
        } else {
            if (vbd.Browser.touch && (f === "dblclick") && this.addDoubleTapListener) {
                this.addDoubleTapListener(g, b)
            } else {
                if ("addEventListener" in i) {
                    if (f === "mousewheel") {
                        i.addEventListener("DOMMouseScroll", b, false);
                        i.addEventListener(f, b, false)
                    } else {
                        if ((f === "mouseenter") || (f === "mouseleave")) {
                            b = function (j) {
                                j = j || window.event;
                                if (vbd.event.LX(i, j)) {
                                    a(j)
                                }
                            };
                            i.addEventListener(f === "mouseenter" ? "mouseover" : "mouseout", b, false)
                        } else {
                            if (f === "click" && vbd.Browser.android) {
                                b = function (j) {
                                    return vbd.event.LL(j, a)
                                }
                            }
                            i.addEventListener(f, b, false)
                        }
                    }
                } else {
                    if ("attachEvent" in i) {
                        i.attachEvent("on" + f, b)
                    }
                }
            }
        }
        return g
    },
    LY: function (b) {
        if (!(b && b.obj)) {
            return
        }
        var d = b.AB,
            a = b.obj[this.A8] && b.obj[this.A8][d];
        if (!a) {
            return b.obj
        }
        if (vbd.Browser.pointer && b.type.indexOf("touch") === 0) {
            this.removePointerListener(b, a)
        } else {
            if (vbd.Browser.touch && (b.type === "dblclick") && this.removeDoubleTapListener) {
                this.removeDoubleTapListener(b, a)
            } else {
                if ("removeEventListener" in b.obj) {
                    if (b.type === "mousewheel") {
                        b.obj.removeEventListener("DOMMouseScroll", a, false);
                        b.obj.removeEventListener(b.type, a, false)
                    } else {
                        b.obj.removeEventListener(b.type === "mouseenter" ? "mouseover" : b.type === "mouseleave" ? "mouseout" : b.type, a, false)
                    }
                } else {
                    if ("detachEvent" in b.obj) {
                        b.obj.detachEvent("on" + b.type, a)
                    }
                }
            }
        }
        delete b.obj[this.A8][d]
    },
    stopPropagation: function (a) {
        if (a.stopPropagation) {
            a.stopPropagation()
        } else {
            a.cancelBubble = true
        }
        vbd.event.Ex(a)
    },
    disableScrollPropagation: function (a) {
        return vbd.event.addDomListener(a, "mousewheel MozMousePixelScroll", vbd.event.stopPropagation)
    },
    disableClickPropagation: function (a) { },
    preventDefault: function (a) {
        if (a.preventDefault) {
            a.preventDefault()
        } else {
            a.returnValue = false
        }
        return this
    },
    stop: function (a) {
        return vbd.event.preventDefault(a).stopPropagation(a)
    },
    getOffsetDom: function (a) {
        var b = a.getBoundingClientRect();
        return new vbd.Point(b.left - a.clientLeft, b.top - a.clientTop)
    },
    GF: {},
    Mp: function (a) {
        vbd.event.GF[a.type] = true
    },
    Ex: function (b) {
        var a = this.GF[b.type];
        this.GF[b.type] = false;
        return a
    },
    getWheelDelta: function (a) {
        var b = 0;
        if (a.wheelDelta) {
            b = a.wheelDelta / 120
        }
        if (a.detail) {
            b = -a.detail / 3
        }
        return b
    },
    LX: function (a, f) {
        var d = f.relatedTarget;
        if (!d) {
            return true
        }
        try {
            while (d && (d !== a)) {
                d = d.parentNode
            }
        } catch (b) {
            return false
        }
        return (d !== a)
    },
    LL: function (f, b) {
        var a = (f.timeStamp || f.originalEvent.timeStamp),
            d = vbd.event.G$ && (a - vbd.event.G$);
        if ((d && d > 100 && d < 500) || (f.target.LU && !f.El)) {
            vbd.event.stop(f);
            return
        }
        vbd.event.G$ = a;
        b(f)
    },
    clearEvents: function (a) {
        delete a._events
    },
    addListener: function (h, b, g, d) {
        var a = [];
        b = vbd.Util.splitWords(b);
        for (var e = 0, f = b.length; e < f; e++) {
            a.push(this.J5(h, b[e], g, d))
        }
        return a
    },
    removeListener: function (a) {
        if (!a) {
            return
        }
        for (var b = 0, d = a.length; b < d; b++) {
            this.LK(a[b])
        }
        a.length = 0
    },
    J5: function (b, h, i, a) {
        if (b) {
            var j = b.AP = b.AP || {},
                g = a && a !== b && vbd.stamp(a);
            if (g) {
                var f = h + "_idx",
                    k = h + "_len",
                    e = j[f] = j[f] || {},
                    d = vbd.stamp(i) + "_" + g;
                if (!e[d]) {
                    e[d] = {
                        fn: i,
                        ctx: a
                    };
                    j[k] = (j[k] || 0) + 1
                }
            } else {
                j[h] = j[h] || [];
                j[h].push({
                    fn: i
                })
            }
            return {
                obj: b,
                type: h,
                fn: i,
                context: a
            }
        }
    },
    LK: function (a) {
        if (!a) {
            return
        }
        var h = a.obj.AP,
            f = a.type + "_idx",
            l = a.type + "_len";
        if (!h) {
            return
        }
        if (!a.fn) {
            delete h[a.type];
            delete h[f];
            delete h[l];
            return
        }
        var g = a.context && a.context !== a.obj && vbd.stamp(a.context),
            b, d, j, k, e;
        if (g) {
            e = vbd.stamp(a.fn) + "_" + g;
            b = h[f];
            if (b && b[e]) {
                k = b[e];
                delete b[e];
                h[l]--
            }
        } else {
            b = h[a.type];
            if (b) {
                j = b.length;
                for (d = 0; d < j; d++) {
                    if (b[d].fn === a.fn) {
                        k = b[d];
                        b.splice(d, 1);
                        break
                    }
                }
            }
        }
        if (k) {
            k.fn = vbd.Util.Dr
        }
    },
    fire: function (d, j, e) {
        if (!d) {
            return
        }
        var b = vbd.Util.extend({}, e, {
            type: j,
            Me: d
        }),
            l = d.AP;
        if (l) {
            var h = l[j + "_idx"],
                f, a, g, k;
            if (l[j]) {
                a = l[j].slice();
                k = a.length;
                for (f = 0; f < k; f++) {
                    a[f].fn.call(d, b)
                }
            }
            for (g in h) {
                h[g].fn.call(h[g].ctx, b)
            }
        }
        return d
    }
};
vbd.Class = function () { };
vbd.Class.extend = function (f) {
    var e = function () {
        if (this.initialize) {
            this.initialize.apply(this, arguments)
        }
    };
    var a = e.__super__ = this.prototype;
    var d = vbd.Util.create(a);
    d.constructor = e;
    e.prototype = d;
    for (var b in this) {
        if (this.hasOwnProperty(b) && b !== "prototype") {
            e[b] = this[b]
        }
    }
    if (f.statics) {
        vbd.extend(e, f.statics);
        delete f.statics
    }
    if (f.includes) {
        vbd.Util.extend.apply(null, [d].concat(f.includes));
        delete f.includes
    }
    if (d.B) {
        f.B = vbd.Util.extend(vbd.Util.create(d.B), f.B)
    }
    vbd.extend(d, f);
    return e
};
vbd.Class.include = function (a) {
    vbd.extend(this.prototype, a)
};
vbd.Class.mergeOptions = function (a) {
    vbd.extend(this.prototype.B, a)
};
vbd.LatLng = function (b, a) {
    this.Latitude = b;
    this.Longitude = a;
    this.copy = function () {
        return new vbd.LatLng(this.Latitude, this.Longitude)
    };
    this.equals = function (d) {
        if (this.Latitude !== d.Latitude) {
            return false
        }
        if (this.Longitude !== d.Longitude) {
            return false
        }
        return true
    };
    this.lat = function () {
        return this.Latitude
    };
    this.lng = function () {
        return this.Longitude
    };
    this.toString = function () {
        return this.Latitude.toString() + "," + this.Longitude.toString()
    };
    this.toUrlValue = function () {
        return this.Longitude.toString() + "," + this.Latitude.toString()
    };
    this.toBounds = function (e) {
        var d = 180 * e / 40075017,
            f = d / Math.cos((Math.PI / 180) * this.Latitude);
        return new vbd.LatLngBounds(new vbd.LatLng(this.Latitude - d, this.Longitude - f), new vbd.LatLng(this.Latitude + d, this.lng + f))
    };
    this.toGeoJSON = function () {
        var d = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [this.Longitude, this.Latitude]
            }
        };
        return d
    };
    this.toWKT = function () {
        return "POINT (" + this.Longitude + " " + this.Latitude + ")"
    }
};
vbd.latlng = function (b, a) {
    if (b instanceof vbd.LatLng) {
        return b
    } else {
        if (vbd.Util.isArray(b) && typeof b[0] !== "object") {
            return new vbd.LatLng(b[1], b[0])
        } else {
            if (b && typeof b === "object") {
                return new vbd.LatLng(b.Latitude || b.lat, b.Longitude || b.lng)
            }
        }
    }
    return new vbd.LatLng(b, a)
};
vbd.Point = function (a, d, b) {
    if (b) {
        this.x = Math.round(a);
        this.y = Math.round(d)
    } else {
        this.x = a;
        this.y = d
    }
    this.add = function (e) {
        return this.copy().B0(e)
    };
    this.B0 = function (e) {
        this.x += e.x;
        this.y += e.y;
        return this
    };
    this.subtract = function (e) {
        return this.copy().Dk(e)
    };
    this.Dk = function (e) {
        this.x -= e.x;
        this.y -= e.y;
        return this
    };
    this.copy = function () {
        return new vbd.Point(this.x, this.y)
    };
    this.equals = function (e) {
        if (this.x !== e.x) {
            return false
        }
        if (this.y !== e.y) {
            return false
        }
        return true
    };
    this.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    this.distanceTo = function (f) {
        var e = f.x - this.x,
            g = f.y - this.y;
        return Math.sqrt(e * e + g * g)
    };
    this.toString = function () {
        return this.x.toString() + "," + this.y.toString()
    };
    this.toArray = function () {
        return [this.x, this.y]
    }
};
vbd.point = function (a, d, b) {
    if (a instanceof vbd.Point) {
        return a
    }
    if (vbd.Util.isArray(a)) {
        return new vbd.Point(a[0], a[1])
    }
    if (a === undefined || a === null) {
        return a
    }
    if (typeof a === "object" && "x" in a && "y" in a) {
        return new vbd.Point(a.x, a.y)
    }
    return new vbd.Point(a, d, b)
};
vbd.Size = function (a, b) {
    this.width = a;
    this.height = b;
    this.equals = function (d) {
        if (this.width !== d.width) {
            return false
        }
        if (this.height !== d.height) {
            return false
        }
        return true
    };
    this.toString = function () {
        return this.width.toString() + "," + this.height.toString()
    };
    this.toArray = function () {
        return [this.width, this.height]
    };
    this.copy = function () {
        return new vbd.Size(this.width, this.height)
    }
};
vbd.size = function (a, b) {
    if (a instanceof vbd.Size) {
        return a
    } else {
        if (vbd.Util.isArray(a)) {
            if (a.length === 2) {
                return new vbd.Size(a[0], a[1])
            }
        }
    }
    return new vbd.size(a, b)
};
vbd.Bounds = function (e, d) {
    if (!e) {
        return
    }
    var f = d ? [e, d] : e;
    for (var g = 0, h = f.length; g < h; g++) {
        this.extend(f[g])
    }
};
vbd.Bounds.prototype = {
    extend: function (a) {
        if (!this.min && !this.max) {
            this.min = a.copy();
            this.max = a.copy();
            return this
        }
        this.min.x = Math.min(a.x, this.min.x);
        this.max.x = Math.max(a.x, this.max.x);
        this.min.y = Math.min(a.y, this.min.y);
        this.max.y = Math.max(a.y, this.max.y);
        return this
    },
    getCenter: function (a) {
        return new vbd.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, a)
    },
    getBottomLeft: function () {
        return new vbd.Point(this.min.x, this.max.y)
    },
    getTopRight: function () {
        return new vbd.Point(this.max.x, this.min.y)
    },
    getSize: function () {
        return this.max.subtract(this.min)
    },
    contains: function (d) {
        var b, a;
        if (typeof d[0] === "number" || d instanceof vbd.Point) {
            d = vbd.point(d)
        } else {
            d = vbd.bounds(d)
        }
        if (d instanceof vbd.Bounds) {
            b = d.min;
            a = d.max
        } else {
            b = a = d
        }
        return (b.x >= this.min.x) && (a.x <= this.max.x) && (b.y >= this.min.y) && (a.y <= this.max.y)
    },
    intersects: function (g) {
        g = vbd.bounds(g);
        var e = this.min,
            a = this.max,
            f = g.min,
            b = g.max,
            d = (b.x >= e.x) && (f.x <= a.x),
            h = (b.y >= e.y) && (f.y <= a.y);
        return d && h
    },
    overlaps: function (h) {
        h = vbd.bounds(h);
        var e = this.min,
            a = this.max,
            g = h.min,
            b = h.max,
            f = (b.x > e.x) && (g.x < a.x),
            d = (b.y > e.y) && (g.y < a.y);
        return f && d
    },
    isValid: function () {
        return !!(this.min && this.max)
    }
};
vbd.bounds = function (e, d) {
    if (!e || e instanceof vbd.Bounds) {
        return e
    }
    return new vbd.Bounds(e, d)
};
vbd.LatLngBounds = function (a, b) {
    if (vbd.Util.isArray(a)) {
        a = new vbd.LatLng(a)
    }
    if (vbd.Util.isArray(b)) {
        b = new vbd.LatLng(b)
    }
    if (!b && a) {
        if (typeof a === "object") {
            a = vbd.latlng(a)
        }
        b = a.copy()
    }
    if (a && b) {
        this.sw = new vbd.LatLng(Math.min(b.Latitude, a.Latitude), Math.min(b.Longitude, a.Longitude));
        this.ne = new vbd.LatLng(Math.max(b.Latitude, a.Latitude), Math.max(b.Longitude, a.Longitude))
    }
};
vbd.LatLngBounds.prototype = {
    fixBounds: function () {
        this.sw = new vbd.LatLng(Math.min(this.ne.Latitude, this.sw.Latitude), Math.min(this.ne.Longitude, this.sw.Longitude));
        this.ne = new vbd.LatLng(Math.max(this.ne.Latitude, this.sw.Latitude), Math.max(this.ne.Longitude, this.sw.Longitude));
        return this
    },
    extend: function (a) {
        if (vbd.Util.isArray(a)) {
            a = vbd.latlng(a)
        }
        if (a instanceof vbd.LatLng) {
            if (!this.sw && !this.ne) {
                this.sw = a.copy();
                this.ne = a.copy();
                return this
            }
            this.sw.Longitude = Math.min(a.Longitude, this.sw.Longitude);
            this.sw.Latitude = Math.min(a.Latitude, this.sw.Latitude);
            this.ne.Longitude = Math.max(a.Longitude, this.ne.Longitude);
            this.ne.Latitude = Math.max(a.Latitude, this.ne.Latitude);
            return this
        }
        if (a instanceof vbd.LatLngBounds) {
            this.extend(a.sw);
            this.extend(a.ne)
        }
        return this
    },
    getNorthEast: function () {
        return this.ne
    },
    getNorthWest: function () {
        return new vbd.LatLng(this.ne.Latitude, this.sw.Longitude)
    },
    getSouthWest: function () {
        return this.sw
    },
    getSouthEast: function () {
        return new vbd.LatLng(this.sw.Latitude, this.ne.Longitude)
    },
    toArray: function (a) {
        if (!a) {
            return [this.sw.Longitude, this.sw.Latitude, this.ne.Longitude, this.ne.Latitude]
        }
        return [this.sw, this.ne]
    },
    contains: function (b) {
        if (vbd.Util.isArray(b)) {
            b = vbd.latlng(b)
        }
        var a, d;
        if (b instanceof vbd.LatLngBounds) {
            a = b.sw;
            d = b.ne
        } else {
            a = d = b
        }
        return (a.Longitude >= this.sw.Longitude) && (d.Longitude <= this.ne.Longitude) && (a.Latitude >= this.sw.Latitude) && (d.Latitude <= this.ne.Latitude)
    },
    notContains: function (a) {
        if (vbd.Util.isArray(a)) {
            a = vbd.latlng(a)
        }
        return ((a.Longitude < this.sw.Longitude) || (a.Longitude > this.ne.Longitude) || (a.Latitude < this.sw.Latitude) || (a.Latitude > this.ne.Latitude))
    },
    equals: function (a) {
        return (this.sw.equals(a.sw) && this.ne.equals(a.ne))
    },
    getCenter: function () {
        return new vbd.LatLng((this.sw.Latitude + this.ne.Latitude) / 2, (this.sw.Longitude + this.ne.Longitude) / 2)
    },
    toString: function () {
        return this.sw.Latitude.toString() + "," + this.sw.Longitude.toString() + "," + this.ne.Latitude.toString() + "," + this.ne.Longitude.toString()
    },
    copy: function () {
        return new vbd.LatLngBounds(this.sw, this.ne)
    },
    union: function (a) {
        return new vbd.LatLngBounds(vbd.latlng(Math.min(this.sw.Latitude, a.sw.Latitude), Math.min(this.sw.Longitude, a.sw.Longitude)), vbd.latlng(Math.max(this.ne.Latitude, a.ne.Latitude), Math.max(this.ne.Longitude, a.ne.Longitude)))
    },
    intersects: function (a) {
        return !(this.ne.Longitude < a.sw.Longitude || this.sw.Longitude > a.ne.Longitude || this.sw.Latitude > a.ne.Latitude || this.ne.Latitude < a.sw.Latitude)
    },
    getWidth: function () {
        return (this.ne.Longitude - this.sw.Longitude)
    },
    getHeight: function () {
        return (this.ne.Latitude - this.sw.Latitude)
    },
    isLatLng: function () {
        return this.sw.equals(this.ne)
    },
    isValid: function () {
        return !!(this.sw && this.ne)
    }
};
vbd.latLngBounds = function (e, d) {
    if (e instanceof vbd.LatLngBounds) {
        return e
    }
    return new vbd.LatLngBounds(e, d)
};
vbd.Projection = {
    HZ: 6378137,
    Ep: -85.05112878,
    Eq: 85.05112878,
    FZ: -180,
    Fc: 180,
    HU: (4 * Math.PI),
    JO: (2 * Math.PI),
    EJ: (Math.PI / 180),
    Clip: function (d, b, a) {
        return Math.min(Math.max(d, b), a)
    },
    MapSize: function (a) {
        return 256 << a
    },
    GroundResolution: function (b, a) {
        b = this.Clip(b, this.Ep, this.Eq);
        return Math.cos(b * this.EJ) * this.JO * this.HZ / this.MapSize(a)
    },
    scale: function (a) {
        return Math.pow(2, a)
    },
    My: function (d, a, b) {
        return this.GroundResolution(d, a) * b / 0.0254
    },
    PixelXY2TileXY: function (b, a) {
        return new vbd.Point(b.x / a, b.y / a)
    },
    TileXY2PixelXY: function (a, b) {
        return new vbd.Point(a.x * b, a.y * b)
    },
    LatLng2Pixel: function (e, h) {
        var f = this.Clip(e.Latitude, this.Ep, this.Eq),
            g = this.Clip(e.Longitude, this.FZ, this.Fc);
        var b = (g + 180) / 360;
        var a = Math.sin(f * this.EJ);
        var i = 0.5 - Math.log((1 + a) / (1 - a)) / this.HU;
        var d = this.MapSize(h);
        return new vbd.Point(this.Clip(b * d + 0.5, 0, d - 1), this.Clip(i * d + 0.5, 0, d - 1))
    },
    LatLng2PixelEx: function (g, f, a) {
        var d = this.Clip(g.Latitude, this.Ep, this.Eq),
            e = this.Clip(g.Longitude, this.FZ, this.Fc);
        var j = (e + 180) / 360;
        var b = Math.sin(d * this.EJ),
            h = f - 1;
        var i = 0.5 - Math.log((1 + b) / (1 - b)) / this.HU;
        return new vbd.Point(this.Clip(j * f + 0.5, 0, h), this.Clip(i * f + 0.5, 0, h), a)
    },
    Pixel2LatLng: function (e, b) {
        var d = this.MapSize(b);
        e.x = ((e.x % d) + d) % d;
        var a = (this.Clip(e.x, 0, d - 1) / d) - 0.5;
        var f = 0.5 - (this.Clip(e.y, 0, d - 1) / d);
        return new vbd.LatLng((90 - 360 * Math.atan(Math.exp(-f * this.JO)) / Math.PI), (360 * a))
    }
};
vbd.MVCArray = function (a) {
    a = a || [];
    this.f = function (b, d) {
        vbd.event.fire(this, b, d);
        vbd.event.fire(this, "changed", d)
    };
    this.copy = function () {
        return new vbd.MVCArray(a.slice())
    };
    this.setArr = function (b) {
        this.clear();
        a = b.slice()
    };
    this.clear = function () {
        a.length = 0;
        delete this["_events"]
    };
    this.getLength = function () {
        return a.length
    };
    this.forEach = function (b) {
        if (b) {
            for (var d = 0, e = this.getLength() ; d < e; d++) {
                b(a[d], d, this)
            }
        }
    };
    this.getArray = function () {
        return a
    };
    this.toArray = function () {
        return a.slice()
    };
    this.getAt = function (b) {
        return a[b]
    };
    this.insertAt = function (b, d) {
        if (vbd.Util.isArray(d)) {
            d = new vbd.MVCArray(d)
        }
        a.splice(b, 0, d);
        this.f("insert_at", {
            index: b
        })
    };
    this.pop = function () {
        if (this.getLength() > 0) {
            var b = a.pop();
            this.f("remove_at", {
                index: this.getLength(),
                BI: b
            });
            return b
        }
    };
    this.push = function (d) {
        if (vbd.Util.isArray(d)) {
            d = new vbd.MVCArray(d)
        }
        var b = a.push(d);
        this.f("insert_at", {
            index: (b - 1)
        });
        return b
    };
    this.removeAt = function (b) {
        if (a[b]) {
            var d = a.splice(b, 1);
            this.f("remove_at", {
                index: b,
                BI: d
            });
            return d
        }
    };
    this.setAt = function (b, d) {
        if (a[b]) {
            if (vbd.Util.isArray(d)) {
                d = new vbd.MVCArray(d)
            }
            a[b] = d;
            this.f("set_at", {
                index: b,
                BI: d
            })
        }
    }
};
vbd.Eo = function (h, e, a, b, g) {
    var f = Math.floor(a.height / b) + 2 + (2 * g),
        d = Math.floor(a.width / b) + 2 + (2 * g);
    e = vbd.latlng(e);
    var k = vbd.Projection.LatLng2Pixel(e, h),
        j = k.x - a.width / 2,
        i = k.y - a.height / 2;
    this.BN = parseInt(j / b) - g;
    this.BP = parseInt(i / b) - g;
    this.Left = -parseInt(j % b) - g * b;
    this.Top = -parseInt(i % b) - g * b;
    if (j < 0) {
        this.BN--;
        this.Left -= b
    }
    if (i < 0) {
        this.BP--;
        this.Top -= b
    }
    this.DK = function () {
        var l = vbd.Cf[h];
        return b * (((this.BN % l) + l) % l)
    };
    this.F4 = function () {
        return (b * this.BP)
    };
    this.G8 = function () {
        return (this.BN + d - 1)
    };
    this.G7 = function () {
        return (this.BP + f - 1)
    };
    this.Right = function () {
        return (this.Left + (d - 1) * b)
    };
    this.Bottom = function () {
        return (this.Top + (f - 1) * b)
    };
    this.width = function () {
        return (b * d)
    };
    this.height = function () {
        return (b * f)
    };
    this.getSize = function () {
        return new vbd.Size(this.width(), this.height())
    };
    this.getTileRange = function () {
        return {
            minX: this.BN,
            maxX: this.G8(),
            minY: this.BP,
            maxY: this.G7()
        }
    };
    this.getCenter = function (l) {
        return new vbd.Point((this.BN + this.G8()) / 2, (this.BP + this.G7()) / 2, l)
    };
    this.getTilePos = function (l) {
        return new vbd.Point((l.x - this.BN) * b + this.Left, (l.y - this.BP) * b + this.Top, true)
    };
    this.getMBR = function () {
        var o = this.DK(),
            p = this.F4(),
            n, m, l;
        n = vbd.Projection.Pixel2LatLng({
            x: o,
            y: (p + this.height())
        }, h);
        m = Math.min((o + this.width()), (vbd.Cf[h] * b - 0.1));
        l = vbd.Projection.Pixel2LatLng({
            x: m,
            y: p
        }, h);
        return [n.lng(), l.lat(), l.lng(), n.lat()]
    };
    this.getBounds = function () {
        var o = this.DK(),
            p = this.F4(),
            n, m, l;
        n = vbd.Projection.Pixel2LatLng({
            x: o,
            y: (p + this.height())
        }, h);
        m = Math.min((o + this.width()), (vbd.Cf[h] * b - 0.1));
        l = vbd.Projection.Pixel2LatLng({
            x: m,
            y: p
        }, h);
        return new vbd.LatLngBounds(n, l)
    }
};
vbd.ControlPosition = {
    TOP_LEFT: 0,
    TOP_CENTER: 1,
    TOP_RIGHT: 2,
    LEFT_CENTER: 3,
    RIGHT_CENTER: 4,
    BOTTOM_LEFT: 5,
    BOTTOM_CENTER: 6,
    BOTTOM_RIGHT: 7
};
vbd.ZoomControlStyle = {
    DEFAULT: 0,
    LARGE: 1,
    SMALL: 2
};
vbd.ZoomControlOptions = function (a) {
    return vbd.Util.extend({
        position: vbd.ControlPosition.TOP_LEFT,
        offset: new vbd.Size(0, 0),
        style: vbd.ZoomControlStyle.DEFAULT
    }, a)
};
vbd.ZoomControl = function (b) {
    var g, l, i, m, e = this,
        a = new vbd.ZoomControlOptions(b);

    function f(o) {
        if (o === vbd.ZoomControlStyle.DEFAULT) {
            return 134
        }
        return 68
    }

    function d(p, o) {
        vbd.event.addDomListener(p, "click", function (q) {
            o === 0 ? m.zoomFit() : o === 1 ? m.zoomIn() : m.zoomOut();
            return false
        })
    }

    function j() {
        if (l.childNodes.length == 0) {
            var o = vbd.Util.AJ("a", {
                position: "absolute",
                left: "5px",
                top: "5px",
                width: "40px",
                height: "40px",
                backgroundImage: vbd.HL,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0px -50px",
                opacity: 0.5
            }, l);
            d(o, 0)
        }
    }

    function k() {
        if (l.childNodes.length > 0) {
            l.removeChild(l.childNodes[0])
        }
    }

    function h() {
        if (a.style == vbd.ZoomControlStyle.DEFAULT) {
            i.style.marginLeft = "8px"
        }
        var p = new Image();
        p.width = 22;
        p.height = 22;
        p.style.margin = "5px";
        p.style.opacity = 0.5;
        p.src = vbd.KO;
        i.childNodes[0].appendChild(p);
        d(i.childNodes[0], 1);
        var o = new Image();
        o.width = 22;
        o.height = 22;
        o.style.opacity = 0.5;
        o.src = vbd.KL;
        o.style.margin = "6px";
        i.childNodes[1].appendChild(o);
        d(i.childNodes[1], 2)
    }
    this.setControlStyle = function (o) {
        a.style = o;
        if (o == vbd.ZoomControlStyle.DEFAULT) {
            l.style.width = "50px";
            l.style.height = "50px";
            j()
        } else {
            if (o == vbd.ZoomControlStyle.SMALL) {
                k()
            }
        }
        h()
    };

    function n(p) {
        g = vbd.Util.AJ("div", {
            position: "absolute",
            height: "auto",
            zIndex: 100,
            width: "50px"
        });
        l = vbd.Util.AJ("div", {
            width: "0px",
            height: "0px",
            cssFloat: "left",
            cursor: "pointer",
            background: vbd.HL + " no-repeat scroll 0 0 rgba(0, 0, 0, 0)"
        }, g);
        vbd.DomUtil.setTransform(l, null, 0.8);
        i = vbd.Util.AJ("div", {
            width: "34px",
            height: "68px",
            cssFloat: "left",
            background: "#DDD8D6",
            opacity: 0.8
        }, g);
        i.style[vbd.Jr] = "3px";
        var o = {
            width: "32px",
            height: "32px",
            cssFloat: "left",
            background: "#E6E4E4",
            cursor: "pointer",
            margin: "1px"
        };
        vbd.Util.AJ("a", o, i);
        vbd.Util.AJ("a", o, i);
        e.setControlStyle(a.style)
    }
    this.getOptions = function () {
        return a
    };
    this.setOptions = function (u) {
        a = new vbd.ZoomControlOptions(u);
        var s = g.style;
        s.left = "";
        s.top = "";
        s.right = "";
        s.bottom = "";
        var r = a.offset,
            q = r.width,
            v = r.height,
            t = vbd.ControlPosition;
        switch (a.position) {
            case t.TOP_LEFT:
                s.left = q + "px";
                s.top = v + "px";
                break;
            case t.TOP_RIGHT:
                s.right = q + "px";
                s.top = v + "px";
                break;
            case t.BOTTOM_LEFT:
                s.left = q + "px";
                s.bottom = v + "px";
                break;
            case t.BOTTOM_RIGHT:
                s.right = q + "px";
                s.bottom = v + "px";
                break;
            default:
                break
        }
    };
    this.setPosition = function (o) {
        this.setOptions({
            position: o
        });
        return this
    };
    this.setOffset = function (p) {
        this.setOptions({
            offset: p
        });
        return this
    };
    this.getContainer = function () {
        return g
    };
    this.setMap = function (o) {
        if (!o) {
            vbd.DomUtil.remove(g);
            g = null;
            return
        }
        m = o;
        n(o);
        o.getContainer().appendChild(g);
        this.setOptions(a)
    }
};
vbd.ScaleControlOptions = function (a) {
    return vbd.Util.extend({
        position: vbd.ControlPosition.BOTTOM_LEFT,
        offset: new vbd.Size(120, 10)
    }, a)
};
vbd.ScaleControl = function (b) {
    B = new vbd.ScaleControlOptions(b);
    var d;

    function e(k) {
        var n = [10, 5, 2],
            i = -1,
            h = 1000000,
            m = 0,
            j = 0,
            g = 0;
        do {
            i++;
            if (i > 2) {
                i = 0;
                h /= 10
            }
            m = n[i] * h;
            j = vbd.Projection.GroundResolution(k.getCenter().Latitude, k.getZoom());
            g = m / j;
            if (h <= 0.1) {
                break
            }
        } while (g > 130);
        var f = (m >= 1000) ? ((m / 1000) + " km") : (m + " m");
        return {
            label: f,
            width: g
        }
    }

    function a(g) {
        var f = e(g);
        d.childNodes[0].innerHTML = f.label;
        d.childNodes[1].setAttribute("width", f.width)
    }
    this.getContainer = function () {
        return d
    };
    this.getOptions = function () {
        return B
    };
    this.setOptions = function (k) {
        B = new vbd.ScaleControlOptions(k);
        var i = d.style;
        i.left = "";
        i.top = "";
        i.right = "";
        i.bottom = "";
        var h = B.offset,
            f = h.width,
            l = h.height,
            j = vbd.ControlPosition;
        var g = d.parentElement.clientWidth / 2;
        switch (B.position) {
            case j.TOP_LEFT:
                i.left = f + "px";
                i.top = l + "px";
                break;
            case j.TOP_RIGHT:
                i.left = f + "px";
                i.top = l + "px";
                break;
            case j.TOP_CENTER:
                i.right = g + f + "px";
                i.top = l + "px";
                break;
            case j.BOTTOM_LEFT:
                i.left = f + "px";
                i.bottom = l + "px";
                break;
            case j.BOTTOM_CENTER:
                i.right = g + f + "px";
                i.bottom = l + "px";
                break;
            case j.BOTTOM_RIGHT:
                i.right = f + "px";
                i.bottom = l + "px";
                break;
            default:
                break
        }
    };
    this.setPosition = function (f) {
        this.setOptions({
            position: f
        });
        return this
    };
    this.setOffset = function (f) {
        this.setOptions({
            offset: f
        });
        return this
    };
    this.setMap = function (i) {
        if (!i) {
            vbd.DomUtil.remove(c);
            c = null;
            return
        }
        var j = e(i);
        d = vbd.Util.AJ("div", {
            position: "absolute",
            margin: "0px",
            padding: "0px",
            zIndex: 80
        }, i.getContainer());
        var f = vbd.Util.AJ("span", {
            fontSize: "9pt",
            fontFamily: "Tahoma"
        }, d);
        f.innerHTML = j.label;
        var g = new Image();
        g.src = vbd.KM;
        var h = g.style;
        h.position = "absolute";
        h[vbd.Be] = "none";
        h["max-width"] = "none !important";
        h.left = "0px";
        h.top = "18px";
        h.height = "8px";
        g.setAttribute("width", j.width);
        d.appendChild(g);
        vbd.event.addListener(i, "boundchange", function () {
            a(i)
        });
        this.setOptions(B)
    }
};
vbd.Jt = vbd.Class.extend({
    run: function (b, d, e, a) {
        this.stop();
        this.Dj = true;
        this.Ax = e || 0.25;
        this.Gd = 1 / Math.max(a || 0.5, 0.2);
        this.Bm = b;
        this.V = new vbd.Point(d.x * -1, d.y * -1);
        this.D6 = +new Date();
        this.C0()
    },
    stop: function () {
        if (!this.Dj) {
            return
        }
        this.D7();
        this.EP()
    },
    C0: function () {
        this.K1 = vbd.Util.requestAnimFrame(this.C0, this);
        this.D7()
    },
    D7: function () {
        var a = (+new Date()) - this.D6,
            b = this.Ax * 1000;
        if (a < b) {
            this.Ea(this.E3(a / b))
        } else {
            this.EP()
        }
    },
    Ea: function (b) {
        var a = new vbd.Point((this.Bm.x + (this.V.x * b)), (this.Bm.y + (this.V.y * b)), true);
        if (!this.Eb) {
            this.Eb = a;
            vbd.event.fire(this, "step", {
                pt: a
            })
        } else {
            if (!this.Eb.equals(a) || b === 1) {
                this.Eb = a;
                vbd.event.fire(this, "step", {
                    pt: a
                })
            }
        }
    },
    EP: function () {
        vbd.Util.cancelAnimFrame(this.K1);
        this.Dj = false;
        this.Eb = null;
        vbd.event.fire(this, "end")
    },
    E3: function (a) {
        return 1 - Math.pow(1 - a, this.Gd)
    }
});
vbd.DN = vbd.Class.extend({
    statics: {
        Jj: vbd.Browser.touch ? "touchstart mousedown" : "mousedown",
        END: {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        MOVE: {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        }
    },
    initialize: function (b, a) {
        this._el = b;
        this.D = a;
        this.BX = false
    },
    enable: function () {
        if (this.Cy) {
            return
        }
        this.HD = vbd.event.addDomListener(this._el, vbd.DN.Jj, this.CN, this);
        this.Cy = true
    },
    disable: function () {
        if (!this.Cy) {
            return
        }
        vbd.event.removeDomListener(this.HD);
        this.HD = null;
        this.Cy = false;
        this.BX = false
    },
    CN: function (d) {
        if (d.El || !this.Cy) {
            return
        }
        this.BX = false;
        if ((d.which !== 1) && (d.button !== 1) && !d.touches) {
            return
        }
        var b = vbd.DomUtil.GH(d);
        if (b.AI === vbd.Ak.B_) {
            return
        }
        d.preventDefault();
        vbd.DomUtil.disableImageDrag();
        vbd.DomUtil.disableTextSelection();
        this.Ar = b;
        if (this.FC) {
            return
        }
        vbd.event.fire(this, "down");
        var a = d.touches ? d.touches[0] : d;
        this.By = new vbd.Point(a.clientX, a.clientY);
        this.Bm = this.Ct = this._el.AK;
        this.HE = vbd.event.addDomListener(document, vbd.DN.MOVE[d.type], this.C_, this);
        this.HC = vbd.event.addDomListener(document, vbd.DN.END[d.type], this.B3, this)
    },
    C_: function (f) {
        if (f.El || !this.Cy) {
            return
        }
        if ((f.touches && f.touches.length > 1)) {
            this.BX = true;
            return
        }
        var d = (f.touches && f.touches.length === 1 ? f.touches[0] : f),
            a = new vbd.Point(d.clientX, d.clientY);
        var b = a.subtract(this.By);
        if (!b.x && !b.y) {
            return
        }
        if (Math.abs(b.x) + Math.abs(b.y) < this.D.getOptions().clickOffset) {
            return
        }
        vbd.event.preventDefault(f);
        this.V = b;
        if (!this.BX) {
            this.D.Bq = true;
            vbd.event.fire(this, "dragstart", {
                obj: this.Ar,
                evt: f
            });
            this.BX = true
        }
        this.Ct = new vbd.Point((this.Bm.x + b.x), (this.Bm.y + b.y));
        this.FC = true;
        vbd.Util.cancelAnimFrame(this.G9);
        this.G9 = vbd.Util.requestAnimFrame(this.K4, this, true, f)
    },
    K4: function (a) {
        vbd.event.fire(this, "drag", {
            pt: this.Ct,
            obj: this.Ar,
            V: this.V,
            evt: a
        })
    },
    B3: function (a) {
        vbd.event.removeDomListener(this.HE);
        this.HE = null;
        vbd.event.removeDomListener(this.HC);
        this.HC = null;
        if (a.El || !this.Cy) {
            return
        }
        vbd.DomUtil.enableImageDrag();
        vbd.DomUtil.enableTextSelection();
        if (this.BX && this.FC) {
            vbd.Util.cancelAnimFrame(this.G9);
            vbd.event.fire(this, "dragend", {
                obj: this.Ar,
                evt: a
            })
        }
        this.FC = false
    }
});
vbd.LineUtil = {
    checkLineIntersection: function (k, i, h, j, l, q, g, m) {
        var d, o, n, f, e, p = {
            x: null,
            y: null,
            MY: false,
            Mf: false
        };
        d = ((m - q) * (h - k)) - ((g - l) * (j - i));
        if (d == 0) {
            return p
        }
        o = i - q;
        n = k - l;
        f = ((g - l) * o) - ((m - q) * n);
        e = ((h - k) * o) - ((j - i) * n);
        o = f / d;
        n = e / d;
        p.x = k + (o * (h - k));
        p.y = i + (o * (j - i));
        if (o > 0 && o < 1) {
            p.MY = true
        }
        if (n > 0 && n < 1) {
            p.Mf = true
        }
        return p
    },
    simplify: function (a, b) {
        if (!b || !a.length) {
            return a.slice()
        }
        a = this.Jc(a, b);
        a = this.Jb(a, b);
        return a
    },
    Ja: function (b, d, a) {
        return Math.sqrt(this.E4(b, d, a, true))
    },
    closestPointOnSegment: function (b, d, a) {
        return this.E4(b, d, a)
    },
    Jb: function (a, h) {
        var f = a.length,
            e = typeof Uint8Array !== undefined + "" ? Uint8Array : Array,
            g = new e(f);
        g[0] = g[f - 1] = 1;
        this.E5(a, g, h, 0, f - 1);
        var d, b = [];
        for (d = 0; d < f; d++) {
            if (g[d]) {
                b.push(a[d])
            }
        }
        return b
    },
    E5: function (d, f, j, a, g) {
        var h = 0,
            b, e, k;
        for (e = a + 1; e <= g - 1; e++) {
            k = this.E4(d[e], d[a], d[g], true);
            if (k > h) {
                b = e;
                h = k
            }
        }
        if (h > j) {
            f[b] = 1;
            this.E5(d, f, j, a, b);
            this.E5(d, f, j, b, g)
        }
    },
    Jc: function (b, g) {
        var a = [b[0]],
            f = 0,
            e = b.length;
        for (var d = 1; d < e; d++) {
            if (this.CD(b[d], b[f]) > g) {
                a.push(b[d]);
                f = d
            }
        }
        if (f < e - 1) {
            a.push(b[e - 1])
        }
        return a
    },
    Jk: null,
    Jq: function (k, j, m, l, f) {
        var d = l ? this.Jk : this.Ch(k, m),
            i = this.Ch(j, m),
            h, g, e;
        this.Jk = i;
        while (true) {
            if (!(d | i)) {
                return [k, j]
            } else {
                if (d & i) {
                    return false
                } else {
                    h = d || i;
                    g = this.GZ(k, j, h, m, f);
                    e = this.Ch(g, m);
                    if (h === d) {
                        k = g;
                        d = e
                    } else {
                        j = g;
                        i = e
                    }
                }
            }
        }
    },
    GZ: function (k, i, f, l, d) {
        var n = i.x - k.x;
        var m = i.y - k.y;
        var e = l.min;
        var h = l.max;
        var j, g;
        if (f & 8) {
            j = k.x + n * (h.y - k.y) / m;
            g = h.y
        } else {
            if (f & 4) {
                j = k.x + n * (e.y - k.y) / m;
                g = e.y
            } else {
                if (f & 2) {
                    j = h.x;
                    g = k.y + m * (h.x - k.x) / n
                } else {
                    if (f & 1) {
                        j = e.x;
                        g = k.y + m * (e.x - k.x) / n
                    }
                }
            }
        }
        return new vbd.Point(j, g, d)
    },
    Ch: function (d, b) {
        var a = 0;
        if (d.x < b.min.x) {
            a |= 1
        } else {
            if (d.x > b.max.x) {
                a |= 2
            }
        }
        if (d.y < b.min.y) {
            a |= 4
        } else {
            if (d.y > b.max.y) {
                a |= 8
            }
        }
        return a
    },
    CD: function (e, d) {
        var b = d.x - e.x,
            a = d.y - e.y;
        return b * b + a * a
    },
    E4: function (b, h, g, d) {
        var f = h.x,
            e = h.y,
            k = g.x - f,
            j = g.y - e,
            a = k * k + j * j,
            i;
        if (a > 0) {
            i = ((b.x - f) * k + (b.y - e) * j) / a;
            if (i > 1) {
                f = g.x;
                e = g.y
            } else {
                if (i > 0) {
                    f += k * i;
                    e += j * i
                }
            }
        }
        k = b.x - f;
        j = b.y - e;
        return d ? k * k + j * j : new vbd.Point(f, e)
    },
    ClosestPointOnSegment: function (b, g, f) {
        var e = g.x,
            d = g.y,
            j = f.x - e,
            i = f.y - d,
            a = j * j + i * i,
            h;
        if (a > 0) {
            h = ((b.x - e) * j + (b.y - d) * i) / a;
            if (h > 1) {
                e = f.x;
                d = f.y
            } else {
                if (h > 0) {
                    e += j * h;
                    d += i * h
                }
            }
        }
        j = b.x - e;
        i = b.y - d;
        return {
            distance: j * j + i * i,
            point: new vbd.Point(e, d)
        }
    }
};
vbd.Hb = {};
vbd.Hb.Js = function (g, u, e) {
    var r, n = [1, 4, 2, 8],
        o, m, l, s, q, t = g.length,
        d, f, h = vbd.LineUtil;
    for (o = 0; o < t; o++) {
        g[o].Aq = h.Ch(g[o], u)
    }
    for (l = 0; l < 4; l++) {
        d = n[l];
        r = [];
        t = g.length;
        m = t - 1;
        for (o = 0; o < t; m = o++) {
            s = g[o];
            q = g[m];
            if (!(s.Aq & d)) {
                if (q.Aq & d) {
                    f = h.GZ(q, s, d, u, e);
                    f.Aq = h.Ch(f, u);
                    r.push(f)
                }
                r.push(s)
            } else {
                if (!(q.Aq & d)) {
                    f = h.GZ(q, s, d, u, e);
                    f.Aq = h.Ch(f, u);
                    r.push(f)
                }
            }
        }
        g = r
    }
    return g
};
vbd.PathOptions = function () {
    return {
        map: null,
        stroke: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1,
        strokeWidth: 2,
        strokeDasharray: null,
        lineCap: "round",
        lineJoin: "round",
        visible: true,
        id: null,
        zIndex: 0,
        cursor: "pointer",
        interactive: true,
        title: null,
        clip: false,
        drawPath: true,
        smoothFactor: 2,
        pointerEvents: null
    }
};
vbd.Path = vbd.Class.extend({
    AU: function (a, b) {
        if (!this.AP || !(this.AP[a] || this.AP[a + "_idx"])) {
            b = vbd.Util.extend({}, b, {
                overlay: this
            });
            vbd.event.fire(this.D, a, b);
            return
        }
        if (this.NAME_SHAPE === "Polyline") {
            b = vbd.Util.extend(b, vbd.Util.ClosePointPolyline(b.LatLng, this.B.path.getArray()))
        }
        if (a === "click") {
            if (!this.D.isMove()) {
                vbd.event.fire(this, a, b)
            }
        } else {
            vbd.event.fire(this, a, b)
        }
        if (b) {
            b.overlay = this
        }
        vbd.event.fire(this.D, a, b)
    },
    setZIndex: function (a) {
        this.B.zIndex = a
    },
    getOptions: function () {
        return this.B
    },
    getCursor: function () {
        return this.B.cursor
    },
    setCursor: function (a) {
        this.B.cursor = a;
        this.H.style.cursor = a
    },
    getVisible: function () {
        return this.B.visible
    },
    setVisible: function (a) {
        this.B.visible = a;
        this.H.style.display = a ? "block" : "none"
    },
    bringToFront: function () {
        if (this.H) {
            DomUtil.toFront(this.H)
        }
        return this
    },
    bringToBack: function () {
        if (this.H) {
            DomUtil.toBack(this.H)
        }
        return this
    },
    setStroke: function (b) {
        this.B = vbd.Util.extend(this.B, b);
        var d = this.B,
            a = this.H;
        if (!a) {
            return
        }
        if (d.stroke) {
            a.setAttribute("stroke", d.strokeColor);
            a.setAttribute("stroke-opacity", d.strokeOpacity);
            a.setAttribute("stroke-width", d.strokeWidth);
            a.setAttribute("stroke-linecap", d.lineCap);
            a.setAttribute("stroke-linejoin", d.lineJoin);
            if (d.strokeDasharray) {
                a.setAttribute("stroke-dasharray", d.strokeDasharray)
            } else {
                a.removeAttribute("stroke-dasharray")
            }
            if (d.dashOffset) {
                a.setAttribute("stroke-dashoffset", d.dashOffset)
            } else {
                a.removeAttribute("stroke-dashoffset")
            }
        } else {
            a.setAttribute("stroke", "none")
        }
    },
    setFill: function (b) {
        this.B = vbd.Util.extend(this.B, b);
        var d = this.B,
            a = this.H;
        if (!a) {
            return
        }
        if (d.fill) {
            a.setAttribute("fill", d.fillColor || d.strokeColor);
            a.setAttribute("fill-opacity", d.fillOpacity);
            a.setAttribute("fill-rule", d.fillRule)
        } else {
            a.setAttribute("fill", "none")
        }
    },
    L_: function (a) {
        if (!a) {
            return
        }
        var b = this.B;
        a.style.cursor = b.cursor;
        this.setStroke();
        this.setFill();
        a.setAttribute("pointer-events", b.pointerEvents || (b.interactive ? "visiblePainted" : "none"));
        this.setVisible(b.visible)
    },
    getStrokeDasharray: function () {
        return this.B.strokeDasharray
    },
    setStrokeDasharray: function (a) {
        this.setStroke({
            strokeDasharray: a
        })
    },
    getDashOffset: function () {
        return this.B.dashOffset
    },
    setDashOffset: function (a) {
        this.setStroke({
            dashOffset: a
        })
    },
    getStrokeColor: function () {
        return this.B.strokeColor
    },
    setStrokeColor: function (a) {
        this.setStroke({
            strokeColor: a
        })
    },
    getStrokeOpacity: function () {
        return this.B.strokeOpacity
    },
    setStrokeOpacity: function (a) {
        this.setStroke({
            strokeOpacity: a
        })
    },
    getStrokeWidth: function () {
        return this.B.strokeWidth
    },
    setStrokeWidth: function (a) {
        this.setStroke({
            strokeWidth: a
        })
    },
    getFillColor: function () {
        return this.B.fillColor
    },
    setFillColor: function (a) {
        this.setFill({
            fillColor: a
        })
    },
    getFillOpacity: function () {
        return this.B.fillOpacity
    },
    setFillOpacity: function (a) {
        this.setFill({
            fillOpacity: a
        })
    },
    getFillRule: function () {
        return this.B.fillRule
    },
    setFillRule: function (a) {
        this.setFill({
            fillRule: a
        })
    },
    getTitle: function () {
        return this.B.title
    },
    getBounds: function () {
        return this.F
    },
    setDrawArrows: function (a) { },
    De: function () { },
    As: function () {
        this.B4();
        this.De()
    },
    Fm: function () {
        vbd.DomUtil.remove(this.H);
        this.H = null;
        if (this.AL) {
            this.AL.E6()
        }
    },
    getSVGPath: function () {
        return this.H
    },
    Gr: function (d, e) {
        this.Aa = e;
        this.D = d;
        this.B4();
        if (!this.H && this.B.drawPath) {
            var a = document.createElementNS(vbd.ns, "path");
            a.BJ = vbd.Ak.FJ;
            a.obj = this;
            vbd.DomUtil.add(a, e);
            this.H = a;
            this.L_(a)
        }
        this.De();
        var b = this.getPaths ? this.getPaths() : this.getPath ? this.getPath() : null;
        if (b) {
            this.Cv(b)
        }
    },
    getId: function () {
        return this.AB
    },
    getMap: function () {
        return this.D
    },
    setMap: function (a) {
        if (a) {
            a.addShape(this)
        } else {
            if (this.D) {
                this.D.removeShape(this)
            }
        }
    },
    JX: function () {
        return (this.B.stroke ? this.B.strokeWidth / 2 : 0) + (vbd.Browser.touch ? 10 : 1)
    },
    Iu: function () {
        var a = {};
        if (this.CLASS_NAME === "Polyline") {
            a = new vbd.PolylineOptions(this.B)
        } else {
            if (this.CLASS_NAME === "Polygon") {
                a = new vbd.PolygonOptions(this.B)
            } else {
                if (this.CLASS_NAME === "Rect") {
                    a = new vbd.RectangleOptions(this.B)
                } else {
                    if (this.CLASS_NAME === "Circle") {
                        a = new vbd.CircleOptions(this.B)
                    }
                }
            }
        }
        a.path = null;
        a.paths = null;
        a.map = null;
        return a
    },
    Kr: function (a) {
        if (a.type === "Feature") {
            return a
        }
        return {
            type: "Feature",
            properties: this.Iu(),
            geometry: a
        }
    },
    getFeature: function (b, a) {
        return this.Kr(a || b)
    },
    JN: function (a) {
        return [a.Longitude, a.Latitude]
    },
    Dn: function () { },
    GI: function (g, d, b) {
        var a = [],
            f = g.getLength(),
            e;
        for (e = 0; e < f; e++) {
            if (d) {
                a.push(this.GI(g.getAt(e), d - 1, b))
            } else {
                a.push(this.JN(g.getAt(e)))
            }
        }
        if (!d && b) {
            a.push(a[0])
        }
        return a
    },
    Gb: function (a) {
        return a.Longitude + " " + a.Latitude
    },
    Gq: function (h, d, b) {
        var a = "(",
            f = h.getLength(),
            e;
        for (e = 0; e < f; e++) {
            var g = (e < f - 1) ? "," : ")";
            if (d) {
                a = a.concat(this.Gq(h.getAt(e), d - 1, b), g)
            } else {
                if (e === (f - 1) && b) {
                    a = a.concat(this.Gb(h.getAt(e)), ",", this.Gb(h.getAt(0)), g)
                } else {
                    a = a.concat(this.Gb(h.getAt(e)), g)
                }
            }
        }
        return a
    }
});
vbd.PolylineOptions = function (a) {
    return vbd.Util.extend(new vbd.PathOptions(), {
        path: null,
        drawArrows: false,
        repeatArrow: 120,
        widthArrow: 10,
        strokeArrow: true,
        strokeColorArrow: "#FF0000",
        fillColorArrow: "#FF0000",
        strokeOpacityArrow: 1,
        fillOpacityArrow: 1,
        strokeWidthArrow: 1,
        fillRuleArrow: "evenodd",
        fillArrow: true
    }, a)
};
vbd.Polyline = vbd.Path.extend({
    initialize: function (a) {
        this.B = new vbd.PolylineOptions(a);
        this.F = new vbd.LatLngBounds();
        this.B.path = this.B2(a.path);
        this.AB = this.B.id || vbd.stamp(this);
        this.NAME_SHAPE = this.CLASS_NAME = "Polyline";
        if (a.map) {
            a.map.addShape(this)
        }
    },
    copy: function () {
        return new vbd.Polyline(new vbd.PolylineOptions(this.B, {
            map: null
        }))
    },
    Dm: function (a) {
        if (a[0] instanceof vbd.MVCArray) {
            return false
        }
        return !vbd.Util.isArray(a[0]) || typeof a[0][0] !== "object"
    },
    B2: function (e) {
        var a = new vbd.MVCArray();
        if (e instanceof vbd.MVCArray) {
            e = e.getArray()
        }
        var g = this.Dm(e);
        var f;
        for (var d = 0, f = e.length; d < f; d++) {
            if (g) {
                var b = vbd.latlng(e[d]);
                a.push(b);
                this.F.extend(b)
            } else {
                a.push(this.B2(e[d]))
            }
        }
        if (this.CLASS_NAME === "Polygon" && a.getAt(0) instanceof vbd.LatLng) {
            f = a.getLength();
            if (f >= 2 && a.getAt(0).equals(a.getAt(f - 1))) {
                a.pop()
            }
        }
        return a
    },
    JC: function (d) {
        var h = "",
            l = this.AO,
            g, f, k = l.length,
            b, e, a;
        for (g = 0; g < k; g++) {
            e = l[g];
            b = e.length;
            for (f = 0; f < b; f++) {
                a = e[f];
                h += (f ? "L" : "M") + a.x + " " + a.y
            }
            h += d ? "z" : ""
        }
        return h || "M0 0"
    },
    getCenter: function () {
        var b, f = 0,
            d, k = 0,
            j, g, e, a = this.BA[0],
            h = a.length;
        for (b = 0; b < h - 1; b++) {
            f += a[b].distanceTo(a[b + 1]) / 2
        }
        if (f === 0) {
            return this.D.convertLayerPointToLatLng(a[0])
        }
        for (b = 0; b < h - 1; b++) {
            j = a[b];
            g = a[b + 1];
            d = j.distanceTo(g);
            k += d;
            if (k > f) {
                e = (k - f) / d;
                return this.D.convertLayerPointToLatLng(new vbd.Point(g.x - e * (g.x - j.x), g.y - e * (g.y - j.y)))
            }
        }
    },
    Hv: function () {
        if (this.CG) {
            var a, b = this.CG.length;
            for (a = 0; a < b; a++) {
                vbd.event.clearEvents(this.CG[a])
            }
        }
        this.CG = []
    },
    Hw: function () {
        if (this instanceof vbd.Polygon) {
            this.EI(this.getPaths(), false)
        } else {
            if (this instanceof vbd.Polyline) {
                this.EI(this.getPath(), false)
            }
        }
    },
    Cv: function (e) {
        if (!e) {
            return null
        }
        var d = e.getAt(0) instanceof vbd.LatLng,
            f = e.getLength(),
            b, a = this;
        if (!this.CG) {
            this.CG = []
        }
        if (d) {
            this.CG.push(vbd.event.addListener(e, "changed", function () {
                a.Hw()
            }))
        } else {
            this.CG.push(vbd.event.addListener(e, "changed", function () {
                a.Hw()
            }));
            for (b = 0; b < f; b++) {
                this.Cv(e.getAt(b))
            }
        }
    },
    EI: function (b, a) {
        if (!a) {
            this.F = new vbd.LatLngBounds();
            b = this.B2(b)
        }
        this.As();
        vbd.event.fire(this, "pathchange")
    },
    D9: function (h, d, k) {
        var g = h.getAt(0) instanceof vbd.LatLng,
            j = h.getLength(),
            e, b, a = this.D,
            f = a.getZoom();
        if (g) {
            b = [];
            for (e = 0; e < j; e++) {
                b[e] = a.latLngToLayerPoint(h.getAt(e));
                k.extend(b[e])
            }
            d.push(b)
        } else {
            for (e = 0; e < j; e++) {
                this.D9(h.getAt(e), d, k)
            }
        }
    },
    B4: function (f) {
        this.D = f || this.D;
        if (!this.D) {
            return
        }
        var d = new vbd.Bounds();
        this.BA = [];
        var g = this.B,
            b = this.NAME_SHAPE == "Polyline" ? g.path : g.paths;
        this.D9(b, this.BA, d);
        var a = this.JX(),
            e = new vbd.Point(a, a);
        if (this.F.isValid() && d.isValid()) {
            d.min.Dk(e);
            d.max.B0(e);
            this.Ag = d
        }
    },
    JS: function (l) {
        this.AO = [];
        if (!this.Ag || !this.Ag.intersects(l)) {
            return
        }
        if (!this.B.clip) {
            this.AO = this.BA;
            return
        }
        var m = this.AO,
            g, e, d = 0,
            h = this.BA.length,
            a, f, b;
        for (g = 0; g < h; g++) {
            b = this.BA[g];
            a = b.length;
            for (e = 0; e < a - 1; e++) {
                f = vbd.LineUtil.Jq(b[e], b[e + 1], l, e, true);
                if (!f) {
                    continue
                }
                m[d] = m[d] || [];
                m[d].push(f[0]);
                if ((f[1] !== b[e + 1]) || (e === a - 2)) {
                    m[d].push(f[1]);
                    d++
                }
            }
        }
    },
    KI: function () {
        var e = this.AO;
        var b = e.length;
        var d = this.B.smoothFactor + (vbd.Browser.touch ? 10 : 0);
        for (var a = 0; a < b; a++) {
            e[a] = vbd.LineUtil.simplify(e[a], d)
        }
    },
    Dn: function () {
        if (!this.B.drawPath) {
            return
        }
        if (this.H) {
            var a = this.JC();
            this.H.setAttribute("d", a)
        }
        if (this.AL) {
            this.AL.E6();
            if (this.AO.length) {
                this.setDrawArrows(this.B.drawArrows)
            }
        }
    },
    De: function (a) {
        a = a || this.D.getBoundsPaths();
        this.JS(a);
        this.KI();
        this.Dn()
    },
    setDrawArrows: function (a) {
        this.B.drawArrows = a;
        if (a) {
            if (!this.AL) {
                this.AL = {
                    DB: function (g, e, h) {
                        var d = {
                            x: (e.x - g.x),
                            y: (e.y - g.y)
                        },
                            i = Math.sqrt(d.x * d.x + d.y * d.y),
                            f = {
                                x: (d.x / i),
                                y: (d.y / i)
                            };
                        return new vbd.Point((g.x + f.x * h), (g.y + f.y * h), true)
                    },
                    EG: function (e, p, b, o, k, l) {
                        var r = Math.atan2(o - p, b - e),
                            g = Math.abs(l / Math.cos(k)),
                            m = r + Math.PI + k,
                            i = b + Math.cos(m) * g,
                            f = o + Math.sin(m) * g,
                            n = r + Math.PI - k;
                        var q = b + Math.cos(n) * g,
                            j = o + Math.sin(n) * g;
                        return "M" + i + "," + f + "L" + b + "," + o + "L" + q + "," + j + "z"
                    },
                    EB: function (b, e) {
                        var d = document.createElementNS(vbd.ns, "path");
                        if (e.strokeArrow) {
                            d.setAttribute("stroke", e.strokeColorArrow);
                            d.setAttribute("stroke-opacity", e.strokeOpacityArrow);
                            d.setAttribute("stroke-width", e.strokeWidthArrow);
                            d.setAttribute("stroke-linecap", e.lineCap);
                            d.setAttribute("stroke-linejoin", e.lineJoin)
                        } else {
                            d.setAttribute("stroke", "none")
                        }
                        if (e.fillArrow) {
                            d.setAttribute("fill", e.fillColorArrow);
                            d.setAttribute("fill-opacity", e.fillOpacityArrow);
                            d.setAttribute("fill-rule", e.fillRuleArrow)
                        } else {
                            d.setAttribute("fill", "none")
                        }
                        d.setAttribute("d", b);
                        this.Aa.appendChild(d);
                        if (!this.AL) {
                            this.AL = []
                        }
                        this.AL.push(d)
                    },
                    HX: function (e, d, b) {
                        return (e.x > d.x && e.x < b.x && e.y > d.y && e.y < b.y)
                    },
                    MJ: function (g, f) {
                        var n, k = g.length - 1,
                            o = Math.PI / 8,
                            p = 0,
                            b = null,
                            e = 0,
                            r = 0,
                            h = f.repeatArrow,
                            m = f.widthArrow,
                            s = this.Cx.D.getBoundsPaths();
                        for (n = 0; n < k; n++) {
                            p = g[n].distanceTo(g[n + 1]);
                            if (p > h) {
                                e = Math.floor((p + r) / h);
                                b = this.DB(g[n], g[n + 1], (h - r));
                                if (g[n].distanceTo(b) < m) {
                                    b = this.DB(b, g[n + 1], m)
                                }
                                for (var l = 0; l < e; l++) {
                                    if (!f.clip) {
                                        if (this.HX(b, s.min, s.max)) {
                                            this.EB(this.EG(g[n].x, g[n].y, b.x, b.y, o, m), f)
                                        }
                                    } else {
                                        this.EB(this.EG(g[n].x, g[n].y, b.x, b.y, o, m), f)
                                    }
                                    b = this.DB(b, g[n + 1], h)
                                }
                                r = Math.abs((e * h) - (p + r))
                            } else {
                                var q = r;
                                r += p;
                                if (r > h) {
                                    b = this.DB(g[n], g[n + 1], (h - q));
                                    if (p > m) {
                                        if (g[n].distanceTo(b) < m) {
                                            b = this.DB(g[n], g[n + 1], (m + 1))
                                        }
                                        r = b.distanceTo(g[n + 1]);
                                        if (!f.clip) {
                                            if (this.HX(b, s.min, s.max)) {
                                                this.EB(this.EG(g[n].x, g[n].y, b.x, b.y, o, m), f)
                                            }
                                        } else {
                                            this.EB(this.EG(g[n].x, g[n].y, b.x, b.y, o, m), f)
                                        }
                                    } else {
                                        r = 0
                                    }
                                }
                            }
                        }
                        k = p = b = e = r = null
                    },
                    E6: function () {
                        if (this.AL) {
                            for (var b in this.AL) {
                                vbd.DomUtil.remove(this.AL[b])
                            }
                            this.AL.length = 0
                        }
                    },
                    drawArrows: function (b) {
                        this.Cx = b;
                        var f = this.Cx.B;
                        this.AO = this.Cx.AO;
                        this.Aa = this.Cx.Aa;
                        this.E6();
                        for (var d = 0, e = this.AO.length; d < e; d++) {
                            this.MJ(this.AO[d], f)
                        }
                    }
                }
            }
            this.AL.drawArrows(this)
        }
    },
    setFillArrow: function (b) {
        if (!b) {
            return
        }
        if (b.hasOwnProperty("fillArrow")) {
            this.B.fillArrow = b.fillArrow
        }
        if (b.fillColorArrow) {
            this.B.fillColorArrow = b.fillColorArrow
        }
        if (b.fillOpacityArrow) {
            this.B.fillOpacityArrow = b.fillOpacityArrow
        }
        if (b.fillRuleArrow) {
            this.B.fillRuleArrow = b.fillRuleArrow
        }
        if (!this.AL) {
            return
        }
        var f = this.B;
        var e = this.AL.AL,
            a, d = e.length;
        if (!f.fillArrow) {
            for (a = 0; a < d; a++) {
                e[a].setAttribute("fill", "none")
            }
            return
        }
        for (a = 0; a < d; a++) {
            e[a].setAttribute("fill", f.fillColorArrow);
            e[a].setAttribute("fill-opacity", f.fillOpacityArrow);
            e[a].setAttribute("fill-rule", f.fillRuleArrow)
        }
    },
    setStrokeArrow: function (f) {
        if (f.hasOwnProperty("strokeArrow")) {
            this.B.strokeArrow = f.strokeArrow
        }
        if (f.strokeColorArrow) {
            this.B.strokeColorArrow = f.strokeColorArrow
        }
        if (f.strokeOpacityArrow) {
            this.B.strokeOpacityArrow = f.strokeOpacityArrow
        }
        if (f.strokeWidthArrow) {
            this.B.strokeWidthArrow = f.strokeWidthArrow
        }
        if (f.lineCap) {
            this.B.lineCap = f.lineCap
        }
        if (f.lineJoin) {
            this.B.lineJoin = f.lineJoin
        }
        if (!this.AL) {
            return
        }
        var e = this.B;
        var d = this.AL.AL,
            b = d.length;
        if (!e.strokeArrow) {
            for (var a = 0; a < b; a++) {
                d[a].setAttribute("stroke", "none")
            }
            return
        }
        for (var a = 0; a < b; a++) {
            d[a].setAttribute("stroke", e.strokeColorArrow);
            d[a].setAttribute("stroke-opacity", e.strokeOpacityArrow);
            d[a].setAttribute("stroke-width", e.strokeWidthArrow);
            d[a].setAttribute("stroke-linecap", e.lineCap);
            d[a].setAttribute("stroke-linejoin", e.lineJoin)
        }
    },
    getParts: function () {
        return this.AO
    },
    getPath: function () {
        return this.B.path
    },
    setPath: function (a) {
        this.F = new vbd.LatLngBounds();
        this.B.path = this.B2(a);
        this.EI(this.B.path, true);
        this.Hv();
        this.Cv(this.B.path)
    },
    D$: function (a) {
        if (a.getAt(0) instanceof vbd.MVCArray) {
            return true
        }
        return false
    },
    toGeoJSON: function () {
        var b = this.getPath(),
            d = this.D$(b);
        var a = this.GI(b, d ? 1 : 0);
        return this.getFeature(this, {
            type: (d ? "Multi" : "") + "LineString",
            coordinates: a
        })
    },
    toWKT: function () {
        var d = this.getPath(),
            e = this.D$(d);
        var b = this.Gq(d, e ? 1 : 0);
        var a = (e ? "MULTI" : "") + "LINESTRING ";
        return a.concat(b)
    }
});
vbd.PolygonOptions = function (a) {
    return vbd.Util.extend(new vbd.PathOptions(), {
        paths: null,
        fill: true,
        fillColor: "#FF0000",
        fillOpacity: 0.5,
        fillRule: "evenodd"
    }, a)
};
vbd.Polygon = vbd.Polyline.extend({
    initialize: function (a) {
        this.NAME_SHAPE = this.CLASS_NAME = "Polygon";
        this.B = new vbd.PolygonOptions(a);
        this.F = new vbd.LatLngBounds();
        this.B.paths = this.B2(a.paths);
        this.AB = this.B.id || vbd.stamp(this);
        if (a.map) {
            a.map.addShape(this)
        }
    },
    copy: function () {
        return new vbd.Polygon(new vbd.PolygonOptions(this.B, {
            map: null
        }))
    },
    getCenter: function () {
        var e, d, o, n, m, g, k, l, h, b, a = this.BA[0];
        k = l = h = 0;
        o = a.length, d = o - 1;
        for (e = 0; e < o; d = e++) {
            n = a[e];
            m = a[d];
            g = n.y * m.x - m.y * n.x;
            l += (n.x + m.x) * g;
            h += (n.y + m.y) * g;
            k += g * 3
        }
        if (k === 0) {
            b = a[0]
        } else {
            b = new vbd.Point(l / k, h / k, true)
        }
        return this.D.convertLayerPointToLatLng(b)
    },
    JS: function (g) {
        this.AO = [];
        var j = this.B;
        var b = j.strokeWidth,
            h = new vbd.Point(b, b);
        g = new vbd.Bounds(g.min.subtract(h), g.max.add(h));
        if (!this.Ag || !this.Ag.intersects(g)) {
            return
        }
        if (!j.clip) {
            this.AO = this.BA;
            return
        }
        this.AO = [];
        var a = this.BA,
            e = a.length,
            f;
        for (var d = 0; d < e; d++) {
            f = vbd.Hb.Js(a[d], g, true);
            if (f.length) {
                this.AO.push(f)
            }
        }
    },
    setPath: function (d) {
        var b = this.B.paths,
            a = b.getAt(0);
        if (a instanceof vbd.MVCArray) {
            this.B.paths.setAt(0, this.B2(d))
        } else {
            return this.setPaths(d)
        }
    },
    getPath: function () {
        var b = this.B.paths,
            a = b.getAt(0);
        if (a instanceof vbd.MVCArray) {
            return a
        } else {
            return b
        }
    },
    setPaths: function (a) {
        this.F = new vbd.LatLngBounds();
        this.B.paths = this.B2(a);
        this.EI(this.B.paths, true);
        this.Hv();
        this.Cv(this.B.paths)
    },
    getPaths: function () {
        return this.B.paths
    },
    Dn: function () {
        var a = this.JC(true);
        if (!this.B.drawPath) {
            return
        }
        if (this.H) {
            this.H.setAttribute("d", a)
        }
    },
    toGeoJSON: function () {
        var d = this.getPaths();
        var a = this.D$(d),
            f = false;
        var e = d.getAt(0);
        if (a && e instanceof vbd.MVCArray) {
            f = e.getAt(0) instanceof vbd.MVCArray
        }
        var b = this.GI(d, f ? 2 : a ? 1 : 0, true);
        if (!a) {
            b = [b]
        }
        return this.getFeature(this, {
            type: (f ? "Multi" : "") + "Polygon",
            coordinates: b
        })
    },
    toWKT: function () {
        var e = this.getPaths();
        var a = this.D$(e),
            g = false;
        var f = e.getAt(0);
        if (a && f instanceof vbd.MVCArray) {
            g = f.getAt(0) instanceof vbd.MVCArray
        }
        var d = this.Gq(e, g ? 2 : a ? 1 : 0, true);
        if (d.indexOf("((") === -1) {
            d = "(".concat(d, ")")
        }
        var b = (g ? "MULTI" : "") + "POLYGON ";
        return b.concat(d)
    }
});
vbd.RectangleOptions = function (a) {
    return vbd.Util.extend({
        bounds: null,
        title: null
    }, new vbd.PolygonOptions(), a)
};
vbd.Rectangle = vbd.Polygon.extend({
    initialize: function (a) {
        this.NAME_SHAPE = "Polygon";
        this.CLASS_NAME = "Rect";
        a = new vbd.RectangleOptions(a);
        this.B = a;
        this.F = new vbd.LatLngBounds(a.sw, a.ne);
        a.paths = this.B2(this.HR(a.bounds));
        this.AB = a.id || vbd.stamp(this);
        if (a.map) {
            this.setMap(a.map)
        }
    },
    copy: function () {
        return new vbd.Rectangle(new vbd.RectangleOptions(this.B, {
            map: null
        }))
    },
    getCenter: function () {
        return this.getBounds().getCenter()
    },
    setBounds: function (a) {
        this.B.bounds = a;
        this.setPaths(this.HR(a));
        this.AU("bounds_changed")
    },
    getBounds: function () {
        return this.F
    },
    Cv: function () { },
    HR: function (a) {
        return [new vbd.LatLng(a.ne.Latitude, a.sw.Longitude), a.ne, new vbd.LatLng(a.sw.Latitude, a.ne.Longitude), a.sw]
    }
});
vbd.CircleOptions = function (a) {
    return vbd.Util.extend({
        center: null,
        radius: 100,
        radius2: null,
        title: null
    }, new vbd.PolygonOptions(a))
};
vbd.Circle = vbd.Path.extend({
    initialize: function (a) {
        this.CLASS_NAME = "Circle";
        this.NAME_SHAPE = "Point";
        a = new vbd.CircleOptions(a);
        if (!a.radius2) {
            a.radius2 = a.radius
        }
        this.F = new vbd.LatLngBounds(a.center);
        this.B = a;
        this.AB = a.id || vbd.stamp(this);
        if (a.map) {
            a.map.addShape(this)
        }
    },
    copy: function () {
        return new vbd.Circle(new vbd.CircleOptions(this.B, {
            map: null
        }))
    },
    getBounds: function () {
        var a = this.D;
        if (!a) {
            return new vbd.LatLngBounds(this.getCenter())
        }
        if (!this.pt) {
            this.pt = a.BF(this.getCenter(), true)
        }
        var d = new vbd.Point(this.pt.x - this.Ba, this.pt.y - this.B5),
            b = new vbd.Point(this.pt.x + this.Ba, this.pt.y + this.B5);
        return new vbd.LatLngBounds(a.convertLayerPointToLatLng(d), a.convertLayerPointToLatLng(b))
    },
    B4: function () {
        var b = this.B;
        this.pt = this.D.BF(b.center, true);
        this.Ba = this.HQ(b.radius);
        this.B5 = this.HQ(b.radius2);
        var a = new vbd.Bounds(vbd.point(this.pt.x - this.Ba, this.pt.y - this.B5), vbd.point(this.pt.x + this.Ba, this.pt.y + this.B5));
        this.Ag = a
    },
    Dn: function () {
        var f = this.pt,
            e = Math.abs(this.Ba),
            a = Math.abs(this.B5 || e),
            b = "a" + e + "," + a + " 0 1,0 ";
        var g = "M" + (f.x - e) + "," + f.y + b + (e * 2) + ",0 " + b + (-e * 2) + ",0 ";
        this.H.setAttribute("d", g)
    },
    De: function () {
        if (!this.D || !this.B.drawPath) {
            return
        }
        var a = this.D.getBoundsPaths();
        if (!this.Ag || !this.Ag.intersects(a)) {
            this.H.setAttribute("d", "M0 0");
            return
        }
        this.Dn()
    },
    setCenter: function (a) {
        this.B.center = a;
        this.As();
        vbd.event.fire(this, "center_changed")
    },
    getCenter: function () {
        return this.B.center
    },
    setRadius: function (b, a) {
        var d = this.B;
        if (b) {
            d.radius = b
        }
        if (a) {
            d.radius2 = a
        }
        this.As();
        vbd.event.fire(this, "radius_changed")
    },
    setBounds: function (d) {
        var b = this.B,
            a = new vbd.LatLng(d.ne.lat(), d.sw.lng());
        b.center = d.getCenter();
        b.radius = vbd.Util.DistanceBetween2LatLng(a, d.ne) / 2;
        b.radius2 = vbd.Util.DistanceBetween2LatLng(a, d.sw) / 2;
        this.As()
    },
    getRadius: function () {
        return this.B.radius
    },
    getRadius2: function () {
        return this.B.radius2
    },
    Cv: function () { },
    HQ: function (a) {
        return Math.round(a / vbd.Projection.GroundResolution(this.B.center.lat(), this.D.getZoom()))
    },
    toGeoJSON: function () {
        return this.getFeature(this, {
            type: "Point",
            coordinates: this.JN(this.getCenter())
        })
    },
    toWKT: function () {
        return this.getCenter().toWKT()
    }
});
vbd.Icon = function (a) {
    this.url = vbd.JZ;
    this.size = new vbd.Size(20, 34);
    this.anchor = null;
    this.origin = new vbd.Point(0, 0);
    vbd.Cg(this, a, false);
    this.Cw = function () {
        this.anchor = this.anchor || new vbd.Point(this.size.width / 2, this.size.height, true);
        return this.anchor
    };
    this.MI = function () {
        if (this.img) {
            this.img.style.left = this.origin.x + "px";
            this.img.style.top = this.origin.y + "px"
        }
    };
    this.Hc = function () {
        if (!this.img) {
            this.img = new Image();
            this.img.style.position = "absolute"
        }
        this.MI();
        this.img.src = this.url
    }
};
vietbando.MarkerShape = function (a) {
    return vbd.Util.extend({
        coords: null,
        type: null
    }, a)
};
vbd.MarkerOptions = function (a) {
    return vbd.Util.extend({
        anchorPoint: null,
        crossOnDrag: true,
        draggable: false,
        cursor: "pointer",
        map: null,
        position: null,
        shadow: null,
        shape: null,
        title: "",
        opacity: 1,
        icon: null,
        zIndex: 0,
        visible: true,
        content: null,
        backgroundColor: null,
        color: null
    }, a)
};
vbd.Marker = vbd.Class.extend({
    initialize: function (a) {
        a = new vbd.MarkerOptions(a);
        a.position = vbd.latlng(a.position);
        this.NAME_SHAPE = "Point";
        a.icon = new vbd.Icon(a.icon);
        a.icon.size = vbd.size(a.icon.size);
        if (a.icon.anchor) {
            a.icon.anchor = vbd.point(a.icon.anchor)
        }
        a.icon.origin = vbd.point(a.icon.origin);
        this.B = a;
        this.AB = a.id || vbd.stamp(this);
        this.MG(a);
        if (a.map) {
            this.setMap(a.map)
        }
    },
    copy: function () {
        return new vbd.Marker(new vbd.MarkerOptions(this.B, {
            map: null
        }))
    },
    AU: function (a, b) {
        if (!this.AP || !(this.AP[a] || this.AP[a + "_idx"])) {
            return
        }
        vbd.event.fire(this, a, b)
    },
    getDraggable: function () {
        return this.B.draggable
    },
    setDraggable: function (a) {
        this.B.draggable = a;
        if (a && !this.BT && this.D) {
            this.BT = new vbd.DragMarker(this);
            this.BT.AX.enable()
        } else {
            if (this.BT) {
                this.BT.AX.disable();
                this.BT = null
            }
        }
    },
    getOptions: function () {
        return this.B
    },
    I5: function () {
        if (this.DW) {
            this.DW = false;
            vbd.DomUtil.remove(this.Al);
            vbd.DomUtil.remove(this.AW)
        }
    },
    Il: function () {
        if (!this.DW) {
            this.DW = true;
            vbd.DomUtil.add(this.Al, this.He);
            vbd.DomUtil.add(this.AW, this.Et)
        }
    },
    setZIndex: function (a) {
        this.B.zIndex = a;
        this.AW.style.zIndex = a
    },
    getZIndex: function () {
        return this.B.zIndex
    },
    setVisible: function (a) {
        this.B.visible = a;
        var b = a ? "block" : "none";
        this.AW.style.display = b;
        if (this.Al) {
            this.AW.style.display = b
        }
    },
    getContainer: function () {
        return this.AW
    },
    getCenter: function () {
        return this.getPosition()
    },
    getContainerShadow: function () {
        return this.Al
    },
    setContent: function (a) {
        this.B.content = a;
        if (a) {
            this.AW.innerHTML = a
        }
    },
    getContent: function () {
        return this.B.content
    },
    getOpacity: function () {
        return this.B.opacity
    },
    setOpacity: function (a) {
        this.B.opacity = a;
        this.AW.style.opacity = a
    },
    getCursor: function () {
        return this.B.cursor
    },
    setCursor: function (a) {
        this.B.cursor = a;
        this.AW.style.cursor = a
    },
    getTitle: function () {
        return this.B.title
    },
    setTitle: function (a) {
        this.B.title = a;
        this.AW.setAttribute("title", a)
    },
    getPosition: function () {
        return this.B.position
    },
    setPosition: function (a) {
        this.B.position = vbd.latlng(a);
        this.As(true)
    },
    getShape: function () {
        return this.B.shape
    },
    setShape: function (a) { },
    getPoint: function () {
        return this.pt
    },
    Bx: function (a, b) {
        vbd.DomUtil.setPosition(a, b)
    },
    Ha: function (b, a) {
        b.style.width = a.width + "px";
        b.style.height = a.height + "px"
    },
    EF: function (a, b) {
        a.style.marginLeft = (b.x * -1) + "px";
        a.style.marginTop = (b.y * -1) + "px"
    },
    setBackgroundColor: function (a) {
        this.B.backgroundColor = a;
        if (a) {
            this.AW.style.backgroundColor = a
        }
    },
    setColor: function (a) {
        this.B.color = a;
        if (a) {
            this.AW.style.color = a
        }
    },
    MG: function (a) {
        this.AW = vbd.Util.AJ("div", {
            position: "absolute",
            overflow: "hidden",
            opacity: a.opacity,
            zIndex: a.zIndex,
            title: a.title,
            cursor: a.cursor
        });
        this.setBackgroundColor(a.backgroundColor);
        this.setColor(a.color);
        this.setTitle(a.title);
        this.setVisible(a.visible);
        this.AW.BJ = vbd.Ak.Gx;
        this.AW.obj = this
    },
    ME: function (a) {
        this.Al = vbd.Util.AJ("div", {
            position: "absolute",
            overflow: "hidden",
            opacity: a.opacity,
            zIndex: a.zIndex
        });
        this.Al.BJ = vbd.Ak.B$
    },
    getShadow: function () {
        return this.B.shadow
    },
    M4: function () {
        var a = this.getShadow();
        if (a) {
            vbd.DomUtil.add(a.img, this.He)
        }
    },
    M3: function () {
        var a = this.getShadow();
        if (a) {
            vbd.DomUtil.remove(a.img)
        }
    },
    FR: function (d) {
        if (d.shadow) {
            var a = d.shadow.size,
                b = d.shadow.Cw();
            if (!this.Al) {
                this.ME(d)
            }
            this.Ha(this.Al, a);
            this.EF(this.Al, b);
            d.shadow.Hc();
            vbd.DomUtil.add(d.shadow.img, this.Al);
            this.Bx(this.Al, this.pt)
        }
    },
    setShadow: function (a) {
        if (!a) {
            return
        }
        if (!(a instanceof vbd.Icon)) {
            a = new vbd.Icon(a)
        }
        vbd.DomUtil.remove(this.B.shadow.img);
        this.B.shadow = a;
        this.B.shadow.url = a.url;
        this.B.shadow.size = a.size;
        this.B.shadow.anchor = a.Cw();
        this.B.shadow.origin = a.origin;
        this.FR(this.B)
    },
    getIcon: function () {
        return this.B.icon
    },
    FO: function (e, b) {
        if (e.icon) {
            var a = e.icon.size,
                d = e.icon.Cw();
            if (!e.anchorPoint) {
                e.anchorPoint = vbd.point(0, -d.y)
            } else {
                e.anchorPoint = vbd.point(e.anchorPoint)
            }
            this.Ha(this.AW, a);
            this.EF(this.AW, d);
            if (!b) {
                e.icon.Hc();
                vbd.DomUtil.add(e.icon.img, this.AW)
            }
            this.Bx(this.AW, this.pt)
        }
    },
    setIcon: function (a) {
        if (!a) {
            return
        }
        if (!(a instanceof vbd.Icon)) {
            a = new vbd.Icon(a)
        }
        vbd.DomUtil.remove(this.B.icon.img);
        this.B.icon = a;
        this.B.icon.url = a.url;
        this.B.icon.size = a.size;
        this.B.icon.anchor = a.Cw();
        this.B.icon.origin = a.origin;
        this.FO(this.B, false)
    },
    D9: function (a, b) {
        if (!a) {
            a = this.D
        }
        return a.BF(this.getPosition())
    },
    B4: function (a, b) {
        return this.D9(a, b)
    },
    B0: function () {
        this.Il()
    },
    Gr: function (a) {
        var b = this.getOptions();
        this.pt = this.B4();
        var d = (this.CLASS_NAME === "CustomMarker") ? true : false;
        this.FR(b, d);
        this.FO(b, d);
        this.setDraggable(b.draggable);
        if (d) {
            this.setContent(b.content)
        }
        if (a && a.contains(this.getPosition())) {
            this.B0()
        } else {
            if (!a) {
                this.B0()
            }
        }
    },
    setMap: function (a) {
        if (a && a instanceof vbd.Map) {
            a.addMarker(this)
        } else {
            if (this.D) {
                this.D.removeMarker(this)
            }
        }
    },
    MB: function (a) {
        this.Bx(this.AW, a);
        if (this.Al) {
            this.Bx(this.Al, a)
        }
    },
    As: function (a) {
        if (!this.D) {
            return
        }
        if (a || !this.DW) {
            this.pt = this.B4()
        }
        this.Bx(this.AW, this.pt);
        if (this.Al) {
            this.Bx(this.Al, this.pt)
        }
        if (this.BT) {
            vbd.DomUtil.setPosition(this.BT.DA, this.pt)
        }
        this.Il()
    },
    L3: function (a) {
        this.pt = a;
        this.B.position = this.D.convertLayerPointToLatLng(a);
        this.Bx(this.AW, this.pt);
        if (this.Al) {
            this.Bx(this.Al, this.pt)
        }
    },
    getId: function () {
        return this.AB
    },
    Fm: function () {
        this.I5();
        if (this.BT) {
            this.BT.AX.disable();
            this.BT = null
        }
    },
    getMap: function () {
        return this.D
    },
    getBounds: function () {
        return new vbd.LatLngBounds(this.getPosition())
    },
    CLASS_NAME: "Marker",
    toGeoJSON: function () {
        var a = this.getPosition();
        var d = a.toGeoJSON();
        var b = new vbd.MarkerOptions(this.B);
        b.position = null;
        b.map = null;
        b.anchorPoint = b.anchorPoint ? b.anchorPoint.toArray() : null;
        var e = b.icon;
        b.url = e.url;
        b.size = e.size.toArray();
        b.anchor = e.anchor.toArray();
        b.origin = e.origin.toArray();
        b.icon = null;
        d.properties = b;
        return d
    },
    toWKT: function () {
        return this.getPosition().toWKT()
    }
});
vbd.DragMarker = vbd.Class.extend({
    initialize: function (a) {
        this.Z = a;
        this.AX = new vbd.DN(this.Z.AW, a.D);
        vbd.event.addListener(this.AX, "down", this.CN, this);
        vbd.event.addListener(this.AX, "dragstart", this.E0, this);
        vbd.event.addListener(this.AX, "drag", this.FA, this);
        vbd.event.addListener(this.AX, "dragend", this.FU, this);
        this.DA = vbd.HG
    },
    CN: function () {
        this.Z.D.stop()
    },
    Fo: function (f, e) {
        var g = f.getOptions(),
            b = g.icon.Cw().copy(),
            d = f.getShadow();
        b.y += e;
        f.EF(f.AW, b);
        if (d) {
            var a = d.Cw().copy();
            a.y += e;
            f.EF(f.Al, a)
        }
    },
    E0: function (b) {
        var a = this.Z,
            d = a.getOptions();
        this.L1 = a.getCursor();
        a.setCursor("move");
        this.Lq = a.getZIndex();
        a.setZIndex(10000);
        if (d.crossOnDrag) {
            this.Fo(a, 8);
            this.DA.style.display = "block";
            vbd.DomUtil.setPosition(this.DA, a.pt)
        }
        vbd.event.fire(this.Z, "dragstart", b)
    },
    FA: function (a) {
        this.Z.L3(a.pt);
        if (this.Z.B.crossOnDrag) {
            vbd.DomUtil.setPosition(this.DA, a.pt)
        }
        vbd.event.fire(this.Z, "drag", {
            offset: a.V,
            evt: a.evt
        })
    },
    Lo: function (a, d, b, e) {
        vbd.Util.LO({
            delay: 10,
            duration: e,
            delta: b,
            step: function (f) {
                a.Fo(d, (18 - 18 * f))
            },
            fnStop: function () {
                a.DA.style.display = "none"
            }
        })
    },
    FU: function (d) {
        var a = this.Z,
            b = a.getOptions();
        if (b.crossOnDrag) {
            this.Lo(this, a, vbd.Util.J8(vbd.Util.J9), 1000)
        } else {
            this.Fo(a, 0);
            this.DA.style.display = "none"
        }
        a.setZIndex(this.Lq);
        a.setCursor(this.L1);
        vbd.event.fire(a, "dragend", d)
    }
});
vbd.CustomMarker = vbd.Marker.extend({
    setShadow: function (a) {
        if (!(a instanceof vbd.Icon)) {
            vbd.DomUtil.remove(this.AW);
            return
        }
        this.B.shadow = a;
        this.FR(this.B)
    },
    setIcon: function (b) {
        if (!(b instanceof vbd.Icon)) {
            var a = this.getIcon();
            if (a) {
                vbd.DomUtil.remove(this.Al);
                vbd.DomUtil.remove(this.AW);
                this.B.icon = null
            }
            return
        }
        this.B.icon = b;
        this.FO(this.B, true);
        this.setContent(this.B.content)
    },
    CLASS_NAME: "CustomMarker"
});
vbd.Overlays = function () {
    vbd.Overlays.prototype.initialize.apply(this, arguments);
    this.EU = function () { };
    this.getOptions = function () {
        return this.B
    };
    this.Fp = this.C8 = this.refresh = this.update = function () { };
    this.FH = function (a) {
        return vbd.stamp(a)
    };
    this.getOverlay = function (a) {
        return this.AF[a]
    };
    this.getOverlays = function () {
        var b = [];
        for (var a in this.AF) {
            b.push(this.AF[a])
        }
        return b
    };
    this.getMap = function () {
        return this.D
    };
    this.setMap = function (a) {
        if (a) {
            a.addLayer(this);
            this.B.map = a
        } else {
            if (this.D) {
                this.D.removeLayer(this)
            }
        }
    };
    this.HN = function () {
        for (var a in this.AF) {
            this.add(this.AF[a])
        }
    };
    this.Da = function () {
        for (var a in this.AF) {
            this.remove(this.AF[a])
        }
    };
    this.JB = function (a) {
        return !!a && (a in this.AF || this.FH(a) in this.AF)
    };
    this.clear = function () {
        this.Da();
        this.AF = {}
    };
    this.setZIndex - function (a) {
        return this.invoke("setZIndex", a)
    };
    this.invoke = function (a) {
        var b = Array.prototype.slice.call(arguments, 1),
            d, e;
        for (d in this.AF) {
            e = this.AF[d];
            if (e[a]) {
                e[a].apply(e, b)
            }
        }
        return this
    };
    this.eachLayer = function (d, b) {
        for (var a in this.AF) {
            d.call(b, this.AF[a])
        }
        return this
    };
    this.toMultiPoint = function () {
        var a = [];
        this.eachLayer(function (b) {
            a.push(b.toGeoJSON().geometry.coordinates)
        });
        return vbd.GeoJSON.getFeature(this, {
            type: "MultiPoint",
            coordinates: a
        })
    };
    this.toGeoJSON = function () {
        var b = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (b === "MultiPoint") {
            return this.toMultiPoint()
        }
        var a = b === "GeometryCollection",
            d = [];
        this.eachLayer(function (f) {
            if (f.toGeoJSON && vbd.GeoJSON) {
                var e = f.toGeoJSON();
                d.push(a ? e.geometry : vbd.GeoJSON.asFeature(e))
            }
        });
        if (a && vbd.GeoJSON) {
            return vbd.GeoJSON.getFeature(this, {
                geometries: d,
                type: "GeometryCollection"
            })
        }
        return {
            type: "FeatureCollection",
            features: d
        }
    }
};
vbd.Overlays.prototype.initialize = function (b, e) {
    this.AF = {};
    this.B = e || {};
    if (!b) {
        return
    }
    var a, d = b.length;
    if (b) {
        for (a = 0; a < d; a++) {
            this.add(b[a])
        }
    }
};
vbd.Overlays.prototype.add = function (a) {
    var b = this.FH(a);
    if (this.AF[b] && !this.AF[b].D) {
        this.AF[b].setMap(this.D);
        return this
    }
    this.AF[b] = a;
    if (this.D) {
        a.setMap(this.D)
    }
    vbd.event.fire(this, "addObj", {
        obj: a
    });
    return this
};
vbd.Overlays.prototype.remove = function (a) {
    var b = this.FH(a);
    if (this.AF[b]) {
        this.AF[b].setMap(null);
        delete this.AF[b]
    }
    return this
};
vbd.Features = function () {
    vbd.Features.prototype.initialize.apply(this, arguments)
};
vbd.Features.prototype = new vbd.Overlays();
vbd.Features.prototype.constructor = vbd.Features;
vbd.Features.prototype.initialize = function () {
    vbd.Overlays.prototype.initialize.apply(this, arguments)
};
vbd.Features.prototype.add = function (a) {
    if (this.JB(a)) {
        if (!a.D) {
            a.setMap(this.D)
        }
        return this
    }
    vbd.Overlays.prototype.add.call(this, a);
    vbd.event.fire(this, "onadd");
    vbd.event.fire(this.D, "layeradd", {
        overlay: this
    })
};
vbd.Features.prototype.getFeature = function () {
    return this.AF
};
vbd.Features.prototype.remove = function (a) {
    if (!this.JB(a)) {
        return this
    }
    if (a in this.AF) {
        a = this.AF[a]
    }
    vbd.Overlays.prototype.remove.call(this, a);
    vbd.event.fire(this, "remove");
    vbd.event.fire(this.D, "layerremove", {
        overlay: this
    })
};
vbd.Features.prototype.getBounds = function () {
    var b = new vbd.LatLngBounds();
    for (var d in this.AF) {
        var a = this.AF[d];
        b.extend(a.getBounds())
    }
    return b
};
vbd.GeoJSON = function (b, a) {
    vbd.GeoJSON.prototype.coordsToLatLng = function (d) {
        return new vbd.LatLng(d[1], d[0], d[2])
    };
    this.coordsToLatLngs = function (h, g) {
        var d = [];
        for (var e = 0, f = h.length, j; e < f; e++) {
            j = g ? this.coordsToLatLngs(h[e], g - 1) : this.coordsToLatLng(h[e]);
            d.push(j)
        }
        return d
    };
    this.geometryToOverlay = function (d, h) {
        var l = d.type === "Feature" ? d.geometry : d,
            m = l.coordinates,
            f, j = [],
            g, e;
        h = h || this.B;
        d.properties = d.properties || {};
        var n = h.markerTemplate;
        switch (l.type) {
            case "Point":
                g = this.coordsToLatLng(m);
                if (n) {
                    return n(d, g)
                } else {
                    if (d.properties.center) {
                        return new vbd.Circle(d.properties)
                    } else {
                        d.properties.position = g;
                        return new vbd.Marker(d.properties)
                    }
                }
            case "MultiPoint":
                var o = m.length;
                for (var k = 0; k < o; k++) {
                    g = this.coordsToLatLng(m[k]);
                    j.push(n ? n(d, g) : new vbd.Marker({
                        position: g
                    }))
                }
                return new vbd.Features(j);
            case "LineString":
            case "MultiLineString":
                e = this.coordsToLatLngs(m, l.type === "LineString" ? 0 : 1);
                f = d.properties;
                f.path = e;
                return new vbd.Polyline(f);
            case "Polygon":
            case "MultiPolygon":
                e = this.coordsToLatLngs(m, l.type === "Polygon" ? 1 : 2);
                f = d.properties;
                if (f.bounds) {
                    return new vbd.Rectangle(f)
                } else {
                    f.paths = e;
                    return new vbd.Polygon(f)
                }
            case "GeometryCollection":
                var o = l.geometries.length;
                for (var k = 0; k < o; k++) {
                    j.push(this.geometryToOverlay({
                        geometry: l.geometries[k],
                        type: "Feature",
                        properties: d.properties
                    }))
                }
                return new vbd.Features(j);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    };
    this.addData = function (k) {
        if (!k) {
            return
        }
        var j = vbd.Util.isArray(k) ? k : k.features,
            g, d;
        if (j) {
            var h = j.length;
            for (g = 0; g < h; g++) {
                d = j[g];
                if (d.geometries || d.geometry || d.features || d.coordinates) {
                    this.addData(d)
                }
            }
            return this
        }
        var e = this.B;
        var f = this.geometryToOverlay(k, e);
        if (!f) {
            return this
        }
        f.feature = vbd.GeoJSON.asFeature(k);
        return this.add(f)
    };
    this.initialize = function (d, e) {
        this.B = e || {};
        this.AF = {};
        if (this.B.map) {
            this.setMap(this.B.map)
        }
        if (d) {
            this.addData(d)
        }
    };
    this.initialize(b, a)
};
vbd.GeoJSON.prototype = new vbd.Features();
vbd.GeoJSON.prototype.constructor = vbd.GeoJSON;
vbd.geoJson = function (b, a) {
    return new vbd.GeoJSON(b, a)
};
vbd.extend(vbd.GeoJSON, {
    getFeature: function (b, a) {
        return b.feature ? vbd.extend({}, b.feature, {
            geometry: a
        }) : vbd.GeoJSON.asFeature(a)
    },
    asFeature: function (a) {
        if (a.type === "Feature") {
            return a
        }
        return {
            type: "Feature",
            properties: a.properties || {},
            geometry: a
        }
    }
});
vbd.LayerOptions = function (a) {
    return vbd.Util.extend({
        fnCallback: null,
        url: null,
        map: null,
        animationZoom: true,
        format: null,
        zIndex: 0,
        isMoveInsert: true,
        errorTileUrl: vbd.F7,
        subdomains: null,
        opacity: 1
    }, a)
};
vbd.Jh = vbd.Class.extend({
    initialize: function (a) {
        this.B = new vbd.LayerOptions(a);
        this.AB = vbd.stamp(this);
        if (this.B.map) {
            this.setMap(a.map)
        }
    },
    getId: function () {
        return this.AB
    },
    getOptions: function () {
        return this.B
    },
    K_: function (a) {
        return this.B.subdomains[Math.abs(a.x + a.y) % this.B.subdomains.length]
    },
    getMap: function () {
        return this.D
    },
    setMap: function (a) {
        if (a) {
            a.addLayer(this);
            this.B.map = a
        } else {
            if (this.D) {
                this.D.removeLayer(this)
            }
        }
    },
    HN: function (a, d) {
        var b = this.D;
        if (!b.LD(this)) {
            return
        }
        this.B0(a, d);
        vbd.event.fire(this, "onadd");
        vbd.event.fire(b, "layeradd", {
            layer: this
        })
    },
    setZIndex: function (a) {
        this.B.zIndex = a;
        this.R.style.zIndex = a
    },
    Fu: function () {
        var f = this.B.opacity;
        if (!vbd.Browser.ielt9 && !this.D.HM) {
            vbd.DomUtil.setOpacity(this.R, f);
            return
        }
        var d = +new Date(),
            b = false;
        for (var e in this.AH) {
            var a = this.AH[e];
            if (!a.current || !a.loaded) {
                continue
            }
            var g = Math.min(1, (d - a.loaded) / 200);
            if (g < 1) {
                vbd.DomUtil.setOpacity(a.el, f * g);
                b = true
            } else {
                vbd.DomUtil.setOpacity(a.el, f);
                a.active = true;
                this.EX()
            }
        }
        if (b) {
            vbd.Util.cancelAnimFrame(this.Fb);
            this.Fb = vbd.Util.requestAnimFrame(this.Fu, this)
        }
    },
    Fd: function () {
        this.R = vbd.Util.AJ("div", {
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px"
        }, this.D.getContainerLayer());
        this.R.BJ = vbd.Ak.B$;
        this.setZIndex(this.B.zIndex);
        if (this.B.opacity < 1) {
            this.Fu()
        }
    },
    LF: function () {
        var b, a;
        for (b in this.AH) {
            a = this.AH[b].el;
            a.onload = vbd.Util.Dr;
            a.onerror = vbd.Util.Dr;
            if (!a.complete) {
                a.src = vbd.F7;
                vbd.DomUtil.remove(a)
            }
        }
    },
    LH: function () {
        var f = this.BR,
            a = this.D.getOptions().maxZoom;
        for (var e in this.Bj) {
            if (this.Bj[e].el.children.length || e === f) {
                this.Bj[e].el.style.zIndex = a - Math.abs(f - e)
            } else {
                vbd.DomUtil.remove(this.Bj[e].el);
                delete this.Bj[e]
            }
        }
        var b = this.Bj[f],
            d = this.D;
        if (!b) {
            b = this.Bj[f] = {};
            b.el = vbd.Util.AJ("div", {
                position: "absolute",
                left: "0px",
                top: "0px",
                margin: "0px",
                padding: "0px"
            }, this.R);
            b.el.style.zIndex = a;
            b.zoom = f
        }
        this.AQ = b;
        return b
    },
    G1: function (a) {
        var b = this.D.getBoundMap().getTileRange();
        if ((a.x < b.minX || a.x > b.maxX) || (a.y < b.minY || a.y > b.maxY)) {
            return false
        }
        return true
    },
    C6: function (a) {
        return a.x + ":" + a.y + ":" + a.z
    },
    LE: function () {
        for (var a in this.AH) {
            if (!this.AH[a].loaded) {
                return false
            }
        }
        return true
    },
    Mo: function (a) {
        var b = new vbd.Point(a.x, a.y);
        b.z = a.z;
        return b
    },
    LC: function (a) {
        var b = a.style;
        b.position = "absolute";
        b[vbd.Be] = "none";
        b["image-rendering"] = "-webkit-optimize-contrast";
        b.filter = "inherit";
        b.visibility = "hidden";
        b["max-width"] = "none";
        a.onselectstart = vbd.Util.Dr;
        a.onmousemove = vbd.Util.Dr;
        if (vbd.Browser.ielt9 && this.B.opacity < 1) {
            vbd.DomUtil.setOpacity(a, this.B.opacity)
        }
        if (vbd.Browser.android && !vbd.Browser.android23) {
            a.style.WebkitBackfaceVisibility = "hidden"
        }
    },
    JU: function (b) {
        var a = this.AH[b];
        if (a) {
            vbd.DomUtil.remove(a.el);
            delete this.AH[b]
        }
    },
    JV: function () {
        for (var a in this.AH) {
            this.JU(a)
        }
    },
    Iv: function (i, g, f, b) {
        var a = Math.floor(i / 2),
            h = Math.floor(g / 2),
            d = f - 1;
        var j = a + ":" + h + ":" + d,
            e = this.AH[j];
        if (e && e.active) {
            e.retain = true;
            return true
        } else {
            if (e && e.loaded) {
                e.retain = true
            }
        }
        if (d > b) {
            return this.Iv(a, h, d, b)
        }
        return false
    },
    Iw: function (b, k, h, a) {
        for (var f = 2 * b; f < 2 * b + 2; f++) {
            for (var d = 2 * k; d < 2 * k + 2; d++) {
                var e = f + ":" + d + ":" + (h + 1),
                    g = this.AH[e];
                if (g && g.active) {
                    g.retain = true;
                    continue
                } else {
                    if (g && g.loaded) {
                        g.retain = true
                    }
                }
                if (h + 1 < a) {
                    this.Iw(f, d, h + 1, a)
                }
            }
        }
    },
    EX: function () {
        var a, b;
        for (a in this.AH) {
            b = this.AH[a];
            b.retain = b.current
        }
        for (a in this.AH) {
            b = this.AH[a];
            if (b.current && !b.active) {
                var d = b.coords;
                if (!this.Iv(d.x, d.y, d.z, d.z - 5)) {
                    this.Iw(d.x, d.y, d.z, d.z + 2)
                }
            }
        }
        for (a in this.AH) {
            if (!this.AH[a].retain) {
                this.JU(a)
            }
        }
    },
    Is: function (a, e, b) {
        var d = this.C6(a);
        b = this.AH[d];
        if (!b) {
            return
        }
        b.loaded = +new Date();
        if (this.D.HM) {
            vbd.DomUtil.setOpacity(b.el, 0);
            vbd.Util.cancelAnimFrame(this.Fb);
            this.Fb = vbd.Util.requestAnimFrame(this.Fu, this)
        } else {
            b.active = true;
            this.EX()
        }
        b.el.style.visibility = "inherit";
        if (this.B.fnCallback) {
            this.B.fnCallback.call(this, {
                tile: b.el,
                coords: a
            })
        }
        vbd.event.fire(this, "tileload", {
            tile: b.el,
            coords: a
        });
        if (this.LE()) {
            vbd.event.fire(this, "load")
        }
    },
    LB: function (a, e, f) {
        var g = f.getTilePos(a),
            d = this.C6(a);
        var b = this.createTile(a, vbd.bind(this.Is, this, a), this.ES);
        this.LC(b);
        if (this.createTile.length < 2) {
            setTimeout(vbd.bind(this.Is, this, a, null, b), 0)
        }
        vbd.DomUtil.setPosition(b, g, true);
        this.AH[d] = {
            el: b,
            coords: a,
            current: true
        };
        e.appendChild(b)
    },
    C8: function (g, h) {
        this.BR = h;
        var k = g.getTileRange();
        for (var f in this.AH) {
            this.AH[f].current = false
        }
        for (var d = k.minY; d <= k.maxY; d++) {
            for (var e = k.minX; e <= k.maxX; e++) {
                var a = new vbd.Point(e, d);
                a.z = this.BR;
                if (!this.G1(a)) {
                    continue
                }
                var b = this.AH[this.C6(a)];
                if (b) {
                    b.current = true;
                    vbd.DomUtil.setPosition(b.el, g.getTilePos(a), true)
                }
            }
        }
    },
    update: function (o, h, b) {
        this.BR = h;
        var e = o.getTileRange(),
            l = o.getCenter(),
            a = [];
        for (var n in this.AH) {
            this.AH[n].current = false
        }
        for (var f = e.minY; f <= e.maxY; f++) {
            for (var g = e.minX; g <= e.maxX; g++) {
                var k = new vbd.Point(g, f);
                k.z = this.BR;
                if (!this.G1(k)) {
                    continue
                }
                var m = this.AH[this.C6(k)];
                if (m) {
                    m.current = true;
                    vbd.DomUtil.setPosition(m.el, o.getTilePos(k), true)
                } else {
                    a.push(k)
                }
            }
        }
        a.sort(function (j, i) {
            return j.distanceTo(l) - i.distanceTo(l)
        });
        if (a.length !== 0) {
            var d = document.createDocumentFragment();
            for (g = 0; g < a.length; g++) {
                this.LB(a[g], d, o)
            }
            this.AQ.el.appendChild(d)
        }
    },
    EU: function (b, d) {
        var a = this.BR !== d;
        if (a) {
            this.BR = d;
            this.LF();
            this.LH()
        }
        this.update(b, d, true);
        this.EX()
    },
    Fp: function (f, a, g, d, b) {
        for (var e in this.Bj) {
            this.Lg(this.Bj[e], f, a, g, d, b)
        }
    },
    Lg: function (e, f, a, g, d, b) {
        vbd.DomUtil.KD(e.el, f, a, g, d, b)
    },
    B0: function (a, b) {
        this.host = location.host;
        this.key = this.D.LG();
        this.Fd();
        this.Bj = {};
        this.AH = {};
        this.EU(a, b)
    },
    Da: function () {
        this.JV();
        vbd.DomUtil.remove(this.R);
        this.R = null;
        this.BR = -1;
        vbd.event.removeListener(this.L2);
        this.L2 = null;
        vbd.event.fire(this, "remove");
        vbd.event.fire(this.D, "layerremove", {
            layer: this
        })
    },
    getContainer: function () {
        return this.R
    }
});
vbd.Layer = vbd.Jh.extend({
    initialize: function (a) {
        this.B = new vbd.LayerOptions(a);
        if (!this.B.subdomains) {
            this.B.subdomains = [this.B.url]
        }
        if (this.B.map) {
            this.setMap(this.B.map)
        }
    },
    createTile: function (a, d, e) {
        var b = document.createElement("img");
        b.style.width = e + "px";
        b.style.height = e + "px";
        b.onload = vbd.bind(this.Lh, this, d, b);
        b.onerror = vbd.bind(this.L$, this, d, b);
        if (this.B.crossOrigin) {
            b.crossOrigin = ""
        }
        b.alt = "";
        b.draggable = "false";
        b.src = this.getTileUrl(a);
        return b
    },
    getTileUrl: function (d) {
        var b = vbd.Cf[d.z],
            f = this.B;
        var e = this.K_(d),
            a = ((d.x % b) + b) % b;
        if (f.format) {
            return f.format.call(this, [e, a, d.y, d.z, d, this])
        } else {
            if (e.indexOf("{x}") > 0 && e.indexOf("{y}") > 0 && e.indexOf("{z}") > 0) {
                return vbd.Util.Jw(e, vbd.extend({
                    r: f.detectRetina && vbd.Browser.retina && f.maxZoom > 0 ? "@2x" : "",
                    s: e,
                    x: a,
                    y: d.y,
                    z: d.z
                }, f))
            } else {
                if (e.indexOf("?") < 0) {
                    e += "?"
                }
                return encodeURI(e + "&Level=" + d.z + "&X=" + a + "&Y=" + d.y + "&key=" + this.key + "&lc=" + this.host)
            }
        }
    },
    Lh: function (b, a) {
        b(null, a)
    },
    L$: function (b, a, d) {
        a.src = vbd.F7;
        b(d, a)
    },
    getAllTile: function () {
        var a = [];
        for (var b in this.AH) {
            a.push({
                Opt: this.AH[b].coords
            })
        }
        return a
    },
    refresh: function (a) {
        var d = this.D;
        if (!a) {
            this.JV()
        }
        this.EU(d.getBoundMap(), d.getZoom())
    },
    setUrl: function (d) {
        this.B.subdomains = vbd.Util.isArray(d) ? d : [d];
        var a;
        for (var b in this.AH) {
            a = this.AH[b];
            a.el.src = this.getTileUrl(a.coords)
        }
    }
});
vbd.LayerCanvas = vbd.Layer.extend({
    initialize: function (a) {
        a = new vbd.LayerOptions(a);
        a.isMoveInsert = false;
        vbd.Layer.prototype.initialize.call(this, a)
    },
    getContext: function () {
        var a = this.AQ.el.childNodes[0];
        if (a) {
            return a.getContext("2d")
        }
        return null
    },
    GS: function (e) {
        var a = this.D.getSize();
        var d = e.tile;
        var b = d.getContext("2d");
        d.width = a.width;
        d.height = a.height;
        d.style.width = a.width + "px";
        d.style.height = a.height + "px";
        b.clearRect(0, 0, a.width, a.height);
        vbd.DomUtil.setPosition(d, new vbd.Point(0, 0), true);
        vbd.event.fire(this, "ondraw", e)
    },
    createTile: function (a) {
        return document.createElement("canvas")
    },
    C8: function (e, f) {
        this.BR = f;
        var g = e.getTileRange();
        for (var d in this.AH) {
            this.AH[d].current = false
        }
        var a = new vbd.Point(g.minX, g.minY);
        a.z = this.BR;
        var b = this.AH[this.C6(a)];
        if (b) {
            b.current = true
        }
        vbd.DomUtil.setPosition(this.AQ.el, new vbd.Point(0, 0), true)
    },
    update: function (j, f, b) {
        this.BR = f;
        var e = j.getTileRange();
        var g = j.getCenter();
        var i;
        for (i in this.AH) {
            this.AH[i].current = false
        }
        var h = new vbd.Point(e.minX, e.minY);
        var a = this.D;
        h.z = f;
        i = this.C6(h);
        I = this.AH[i];
        var d = {
            tile: null,
            coords: h,
            zoomChange: b
        };
        if (I) {
            I.current = true;
            d.tile = I.el;
            this.GS(d)
        } else {
            I = this.createTile(h);
            d.tile = I;
            vbd.event.fire(this, "tileload", d);
            this.AH[i] = {
                el: I,
                coords: h,
                current: true,
                active: true
            };
            this.EX();
            this.AQ.el.appendChild(I);
            this.GS(d)
        }
        vbd.DomUtil.setPosition(this.AQ.el, a.containerPointToLayerPoint(new vbd.Point(0, 0)), true)
    }
});
vbd.LayerVector = vbd.LayerCanvas.extend({
    initialize: function (a, f) {
        this.u = new vbd.RTree();
        var e = a.getOverlays(),
            d = e.length,
            b;
        for (b = 0; b < d; b++) {
            this.addVector(e[b])
        }
        vbd.LayerCanvas.prototype.initialize.call(this, f)
    },
    addVector: function (a) {
        if (this.D) {
            a.B4(this.D)
        }
        var b = a.getBounds();
        var d = [b.sw.Longitude, b.sw.Latitude, b.ne.Longitude, b.ne.Latitude, a];
        a.Dq = d;
        this.u.insert(d)
    },
    removeVector: function (a) {
        if (a && a.Dq) {
            this.u.remove(a.Dq);
            a.Dq = null;
            a = null
        }
    },
    getDataInbox: function (a) {
        return this.u.getDataInBox(a)
    },
    KK: function (a, d) {
        var b = d.getOptions();
        a.globalCompositeOperation = "source-over";
        if (b.fill) {
            a.globalAlpha = b.fillOpacity;
            a.fillStyle = b.fillColor;
            a.fill(b.fillRule || "evenodd")
        }
        if (b.stroke && b.strokeWidth !== 0) {
            a.globalAlpha = b.opacity;
            a.lineWidth = b.strokeWidth;
            a.strokeStyle = b.strokeColor;
            a.lineCap = b.lineCap;
            a.lineJoin = b.lineJoin;
            a.stroke()
        }
    },
    KQ: function (l, g) {
        var f, e, a;
        var d = g.AO;
        var k = d.length;
        var h = g.getOptions();
        if (!k) {
            return
        }
        l.beginPath();
        if (l.setLineDash) {
            l.setLineDash(h && h.strokeDasharray || [])
        }
        for (f = 0; f < k; f++) {
            var b = d[f].length;
            for (e = 0; e < b; e++) {
                a = d[f][e];
                if (e === 0) {
                    l.moveTo(a.x, a.y)
                } else {
                    l.lineTo(a.x, a.y)
                }
            }
            if (g.CLASS_NAME === "Polygon") {
                l.closePath()
            }
        }
        this.KK(l, g)
    },
    D8: function (b) {
        var a = this.D.getBounds().toArray(false),
            g = this.getDataInbox(a),
            e = g.length,
            h, f = this.D.getBoundsPaths();
        for (var d = 0; d < e; d++) {
            h = g[d][4];
            h.De(f);
            this.KQ(b, h)
        }
        this.EY = g
    },
    redraw: function (d) {
        var j = this.D,
            a = j.getSize();
        this.Dp.width = a.width;
        this.Dp.height = a.height;
        this.Dp.style.width = a.width + "px";
        this.Dp.style.height = a.height + "px";
        var b = this.Dp.getContext("2d");
        if (d) {
            var g = this.u.getAll(),
                f = g.length;
            for (var e = 0; e < f; e++) {
                g[e][4].B4(j)
            }
        }
        var h = j.getPositionLayer();
        b.translate(h.x, h.y);
        this.D8(b)
    },
    GS: function (f) {
        var e = this.D,
            a = e.getSize(),
            d = f.tile,
            b = d.getContext("2d");
        d.width = a.width;
        d.height = a.height;
        d.style.width = a.width + "px";
        d.style.height = a.height + "px";
        this.Dp = d;
        this.redraw(f.zoomChange);
        vbd.event.addDomListener(d, "mousemove", this.KV, this);
        vbd.event.fire(this, "ondraw", f)
    },
    KV: function (h) {
        var g = vbd.event.getMousePosition(h),
            a = this.D.getMouseOnMap(g.x, g.y),
            f = this.D.containerPointToLayerPoint(a),
            j;
        if (this.EY && this.EY.length) {
            var b, d = this.EY.length;
            for (b = 0; b < d; b++) {
                j = this.EY[b][4];
                if (j.FD(f)) {
                    if (this.AV) {
                        this.AV.setMap(null)
                    }
                    this.AV = j.copy();
                    this.AV.Dq = j.Dq;
                    this.AV.B.drawPath = true;
                    this.AV.B.fill = true;
                    this.AV.setMap(this.D);
                    this.AV.setStrokeColor("green");
                    break
                } else {
                    if (this.AV) {
                        this.AV.setMap(null);
                        this.AV = null
                    }
                }
            }
        }
        vbd.event.fire(this, "mousemove", {
            LatLng: this.D.D0(g),
            poly: this.AV
        })
    },
    Da: function () {
        vbd.LayerCanvas.prototype.Da.call(this);
        this.u.clear()
    }
});
vbd.Polyline.prototype.FD = function (l, e) {
    var h, g, d, f;
    var a = this.JX();
    if (!this.Ag.contains(l)) {
        return false
    }
    G = this.AO.length;
    for (h = 0; h < G; h++) {
        f = this.AO[h];
        var b = f.length,
            d = b - 1;
        for (g = 0; g < b; d = g++) {
            if (!e && (g === 0)) {
                continue
            }
            if (vbd.LineUtil.Ja(l, f[d], f[g]) <= a) {
                return true
            }
        }
    }
    return false
};
vbd.Polygon.prototype.FD = function (a) {
    var g = false;
    var b, n, l, h, f, e;
    if (!this.Ag.contains(a)) {
        return false
    }
    var m = this.AO.length;
    for (h = 0; h < m; h++) {
        b = this.AO[h];
        var d = b.length;
        e = d - 1;
        for (f = 0; f < d; e = f++) {
            n = b[f];
            l = b[e];
            if (((n.y > a.y) !== (l.y > a.y)) && (a.x < (l.x - n.x) * (a.y - n.y) / (l.y - n.y) + n.x)) {
                g = !g
            }
        }
    }
    return g || vbd.Polyline.prototype.FD.call(this, a, true)
};
vbd.HeatmapLayer = vbd.Layer.extend({
    initialize: function (a) {
        a = vbd.Util.extend({
            minOpacity: 0.05,
            opacity: 0.05,
            maxZoom: 18,
            radius: 25,
            blur: 15,
            max: 1,
            data: [],
            gradient: {
                0.4: "blue",
                0.6: "cyan",
                0.7: "lime",
                0.8: "yellow",
                1: "red"
            }
        }, a);
        a = new vbd.LayerOptions(a);
        a.isMoveInsert = false;
        vbd.Layer.prototype.initialize.call(this, a);
        this.u = this.B.data || []
    },
    getOpacity: function () {
        return Math.max(this.B.minOpacity, this.B.opacity)
    },
    setData: function (a) {
        this.u = a;
        this.draw(this.getContext());
        return this
    },
    getData: function () {
        return this.u.slice()
    },
    add: function (a) {
        this.u.push(a);
        return this
    },
    _colorize: function (f, e) {
        var a, b;
        var d = f.length;
        for (b = 0; b < d; b += 4) {
            a = f[b + 3] * 4;
            if (a) {
                f[b] = e[a];
                f[b + 1] = e[a + 1];
                f[b + 2] = e[a + 2]
            }
        }
    },
    gradient: function (f) {
        var b = document.createElement("canvas");
        var a = b.getContext("2d");
        var e = a.createLinearGradient(0, 0, 0, 256);
        b.width = 1;
        b.height = 256;
        for (var d in f) {
            e.addColorStop(+d, f[d])
        }
        a.fillStyle = e;
        a.fillRect(0, 0, 1, 256);
        this._grad = a.getImageData(0, 0, 1, 256).data;
        return this
    },
    draw: function (m) {
        if (!this._circle) {
            this.radius(this.B.radius)
        }
        if (!this._grad) {
            this.gradient(this.B.gradient)
        }
        m = m || this.getContext();
        if (!m) {
            return
        }
        var b = this.D;
        if (!b) {
            return
        }
        var g = b.getSize();
        m.clearRect(0, 0, g.width, g.height);
        var j = b.getProjection();
        var a = b.getBounds();
        var d, k, f;
        for (var e = 0, l = this.u.length; e < l; e++) {
            k = this.u[e].location;
            if (a.contains(k)) {
                d = j.latlngToContainerPoint(k);
                f = this.u[e].weight;
                m.globalAlpha = Math.min(Math.max(f / this.B.max, this.getOpacity()), 1);
                m.drawImage(this._circle, d.x - this._r, d.y - this._r)
            }
        }
        var h = m.getImageData(0, 0, g.width, g.height);
        this._colorize(h.data, this._grad);
        m.putImageData(h, 0, 0);
        return this
    },
    radius: function (d, f) {
        f = f || this.B.blur;
        d = d || this.B.radius;
        var e = this._circle = document.createElement("canvas");
        var b = e.getContext("2d");
        this._r = d + f;
        var a = this._r;
        e.width = e.height = a * 2;
        b.shadowOffsetX = b.shadowOffsetY = a * 2;
        b.shadowBlur = f;
        b.shadowColor = "black";
        b.beginPath();
        b.arc(-a, -a, d, 0, Math.PI * 2, true);
        b.closePath();
        b.fill();
        return this
    },
    getContext: function () {
        var a = this.AQ.el.childNodes[0];
        if (a) {
            return a.getContext("2d")
        }
        return null
    },
    GS: function (e) {
        var a = this.D.getSize();
        var d = e.tile;
        var b = d.getContext("2d");
        d.width = a.width;
        d.height = a.height;
        d.style.width = a.width + "px";
        d.style.height = a.height + "px";
        b.clearRect(0, 0, a.width, a.height);
        vbd.DomUtil.setPosition(d, new vbd.Point(0, 0), true);
        this.draw(b);
        vbd.event.fire(this, "ondraw", e)
    },
    createTile: function (a) {
        return document.createElement("canvas")
    },
    C8: function (e, f) {
        this.BR = f;
        var g = e.getTileRange();
        for (var d in this.AH) {
            this.AH[d].current = false
        }
        var a = new vbd.Point(g.minX, g.minY);
        a.z = this.BR;
        var b = this.AH[this.C6(a)];
        if (b) {
            b.current = true
        }
        vbd.DomUtil.setPosition(this.AQ.el, new vbd.Point(0, 0), true)
    },
    update: function (j, f, b) {
        this.BR = f;
        var e = j.getTileRange();
        var g = j.getCenter();
        var i;
        for (i in this.AH) {
            this.AH[i].current = false
        }
        var h = new vbd.Point(e.minX, e.minY);
        var a = this.D;
        h.z = f;
        i = this.C6(h);
        I = this.AH[i];
        var d = {
            tile: null,
            coords: h,
            zoomChange: b
        };
        if (I) {
            I.current = true;
            d.tile = I.el;
            this.GS(d)
        } else {
            I = this.createTile(h);
            d.tile = I;
            vbd.event.fire(this, "tileload", d);
            this.AH[i] = {
                el: I,
                coords: h,
                current: true,
                active: true
            };
            this.EX();
            this.AQ.el.appendChild(I);
            this.GS(d)
        }
        vbd.DomUtil.setPosition(this.AQ.el, a.containerPointToLayerPoint(new vbd.Point(0, 0)), true)
    }
});
vbd.InfoWindowOptions = function (a) {
    return vbd.Util.extend({
        content: null,
        autoPan: true,
        pixelOffset: null,
        position: null,
        zIndex: 1
    }, a)
};
vbd.InfoWindow = function (a) {
    this.B = new vbd.InfoWindowOptions(a);
    this.AU = function (b) {
        vbd.event.fire(this, b)
    };
    this.Gs = null;
    this.getOptions = function () {
        return this.B
    };
    this.setOffset = function (b) {
        this.B.pixelOffset = b;
        if (this.An) {
            this.FX(false)
        }
    };
    this.getPosition = function () {
        return this.B.position
    };
    this.setPosition = function (b) {
        this.B.position = vbd.latlng(b);
        this.As(false);
        if (this.B.autoPan) {
            this.F1()
        }
        this.AU("position_changed")
    };
    this.F1 = function () {
        var b = this.D;
        if (!b) {
            return
        }
        var d = this.B,
            g = this.L,
            f = this.IT(g, d),
            j = b.divPixelToContainerPixel(f),
            h = b.getSize(),
            e = new vbd.Point(h.width / 8, h.width / 8, true),
            k = 0,
            i = 0;
        if (j.x < e.x) {
            k = e.x - j.x
        } else {
            if ((j.x + g.width) > h.width) {
                k = h.width - (j.x + g.width) - e.x
            }
        }
        if (j.y < e.y) {
            i = e.y - j.y
        } else {
            if ((j.y + g.height + 24) > h.height) {
                i = h.height - ((j.y + g.height + 24)) - e.y
            }
        }
        b.panBy(-k, -i)
    };
    this.As = function (b) {
        if (!this.D) {
            return
        }
        this.AM = this.D.BF(this.B.position);
        this.FX(b)
    };
    this.getContent = function () {
        return this.B.content
    };
    this.setContent = function (e, b, d) {
        this.B.content = e;
        if (!this.D) {
            return
        }
        this.L = b || vbd.Util.getRenderedDimensions(e);
        vbd.DomUtil.remove(this.An);
        this.An = null;
        this.As(true);
        if (d) {
            this.F1()
        }
        this.AU("content_changed")
    };
    this.getZIndex = function () {
        return this.B.zIndex
    };
    this.setZIndex = function (b) {
        this.B.zIndex = b;
        if (this.An) {
            this.An.style.zIndex = b
        }
        this.AU("zindex_changed")
    };
    this.close = function () {
        vbd.DomUtil.remove(this.An);
        this.An = null;
        vbd.event.removeListener(this.Gs);
        this.Gs = null;
        this.D = null;
        this.AU("closeclick")
    };
    this.open = function (e, d) {
        this.D = e || this.D;
        if (d instanceof vbd.Size) {
            this.B.pixelOffset = d
        } else {
            if (d instanceof vbd.Marker) {
                this.B.pixelOffset = d.getOptions().anchorPoint;
                this.B.position = d.getPosition()
            }
        }
        if (!this.D) {
            return
        }
        var f = this.B;
        if (!this.Bw) {
            this.Bw = this.D.Lm()
        }
        vbd.DomUtil.remove(this.An);
        this.An = null;
        this.AM = this.D.BF(f.position);
        this.L = vbd.Util.getRenderedDimensions(f.content);
        this.FX(true);
        if (!this.Gs) {
            var b = this;
            this.Gs = vbd.event.addListener(e, "boundchange", function () {
                b.As()
            })
        }
        if (f.autoPan) {
            this.F1()
        }
    };
    this.IT = function (b, e) {
        var d = new vbd.Point(this.AM.x - (b.width / 2), this.AM.y - b.height - 24, true);
        if (!e.pixelOffset) {
            return d
        }
        if (e.pixelOffset instanceof vbd.Size) {
            d.x += e.pixelOffset.width;
            d.y += e.pixelOffset.height;
            return d
        }
        if (e.pixelOffset instanceof vbd.Point) {
            d.x += e.pixelOffset.x;
            d.y += e.pixelOffset.y;
            return d
        }
        return d
    };
    this.getContainer = function () {
        return this.An
    };
    this.FX = function (d) {
        var g = new vbd.Size(this.L.width + 24, this.L.height + 18),
            b = this.B,
            k = this.IT(g, b),
            p = Math.round(g.width / 2) - 10;
        if (this.An && !d) {
            vbd.DomUtil.setPosition(this.An, k);
            return
        }
        this.An = vbd.Util.AJ("div", {
            width: g.width + "px",
            height: g.height + "px",
            position: "absolute",
            "border-radius": "5px",
            zIndex: b.zIndex
        }, this.Bw);
        vbd.DomUtil.setPosition(this.An, k);
        this.An.BJ = vbd.Ak.B_;
        var m = vbd.Util.AJ("div", {
            position: "absolute",
            left: "0px",
            top: "0px"
        }, this.An);
        var q = vbd.Util.AJ("div", {
            position: "absolute",
            left: "0px",
            top: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: g.width + "px",
            height: g.height + "px",
            "border-radius": "5px"
        }, m);
        q.style[vbd.Gp] = "0px 1px 4px -1px rgba(0, 0, 0, 0.3)";
        var l = vbd.Util.AJ("div", {
            borderTopWidth: "24px",
            position: "absolute",
            left: p + "px",
            top: (g.height - 3) + "px"
        }, m);
        var r = vbd.Util.AJ("div", {
            position: "absolute",
            overflow: "hidden",
            left: "-6px",
            top: "-1px",
            width: "16px",
            height: "30px"
        }, l);
        var e = vbd.Util.AJ("div", {
            position: "absolute",
            left: "6px",
            backgroundColor: "rgb(255, 255, 255)",
            height: "24px",
            width: "10px"
        }, r);
        e.style[vbd.Er] = "skewX(22.6deg)";
        e.style[vbd.FI] = "0px 0px";
        e.style[vbd.Gp] = "0px 1px 6px rgba(0, 0, 0, 0.6)";
        var n = vbd.Util.AJ("div", {
            position: "absolute",
            overflow: "hidden",
            top: "-1px",
            left: "10px",
            width: "16px",
            height: "30px"
        }, l);
        var f = vbd.Util.AJ("div", {
            position: "absolute",
            left: "0px",
            backgroundColor: "rgb(255, 255, 255)",
            height: "24px",
            width: "10px"
        }, n);
        f.style[vbd.Er] = "skewX(-22.6deg)";
        f.style[vbd.FI] = "10px 0px";
        f.style[vbd.Gp] = "0px 1px 6px rgba(0, 0, 0, 0.6)";
        vbd.Util.AJ("div", {
            position: "absolute",
            left: "1px",
            top: "1px",
            backgroundColor: "rgb(255, 255, 255)",
            height: (g.height - 2) + "px",
            width: (g.width - 2) + "px",
            "border-radius": "5px"
        }, m);
        var j = vbd.Util.AJ("div", {
            position: "absolute",
            left: "12px",
            top: "9px",
            overflow: "visible",
            width: this.L.width + "px",
            height: this.L.height + "px"
        }, this.An);
        j.innerHTML = b.content;
        var i = vbd.Browser.touch ? new vbd.Size(24, 24) : new vbd.Size(13, 13);
        var o = vbd.Util.AJ("div", {
            width: i.width + "px",
            height: i.height + "px",
            overflow: "hidden",
            position: "absolute",
            opacity: "0.5",
            right: "5px",
            top: "5px",
            cursor: "pointer",
            zIndex: 1000
        }, this.An);
        var h = new Image();
        vbd.Cg(h.style, {
            position: "absolute",
            left: "0px",
            top: "0px",
            width: i.width + "px",
            height: i.height + "px",
            border: "0px none"
        }, false);
        h.src = vbd.KN;
        o.appendChild(h);
        if (!vbd.Browser.touch) {
            vbd.event.addDomListener(o, "mouseover mouseout", function (s) {
                this.style.opacity = s.type === "mouseover" ? 1 : 0.5
            })
        }
        vbd.event.addDomListener(o, "click", this.close, this)
    }
};
vbd.Jf = function (f) {
    var k = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var a = k.createSVGMatrix();
    f.getTransform = function () {
        return a
    };
    f.copyMatrix = function () {
        var m = k.createSVGMatrix();
        m.a = a.a;
        m.b = a.b;
        m.c = a.c;
        m.d = a.d;
        m.e = a.e;
        m.f = a.f;
        return m
    };
    var e = [],
        d = f.save;
    f.save = function () {
        e.push(a.translate(0, 0));
        return d.call(f)
    };
    var b = f.restore;
    f.restore = function () {
        a = e.pop();
        return b.call(f)
    };
    var i = f.scale;
    f.scale = function (n, m) {
        a = a.scaleNonUniform(n, m);
        return i.call(f, n, m)
    };
    var g = f.translate;
    f.translate = function (n, m) {
        a = a.translate(n, m);
        return g.call(f, n, m)
    };
    var h = f.transform;
    f.transform = function (n, m, s, r, q, p) {
        var o = k.createSVGMatrix();
        o.a = n;
        o.b = m;
        o.c = s;
        o.d = r;
        o.e = q;
        o.f = p;
        a = a.multiply(o);
        return h.call(f, n, m, s, r, q, p)
    };
    var j = f.setTransform;
    f.setTransform = function (n, m, r, q, p, o) {
        a.a = n;
        a.b = m;
        a.c = r;
        a.d = q;
        a.e = p;
        a.f = o;
        return j.call(f, n, m, r, q, p, o)
    };
    var l = k.createSVGPoint();
    f.transformedPoint = function (m, n) {
        l.x = m;
        l.y = n;
        return l.matrixTransform(a.inverse())
    };
    f.transformedPointWithMatrix = function (o, p, n) {
        l.x = o;
        l.y = p;
        return l.matrixTransform(n)
    }
};
vbd.H4 = vbd.Class.extend({
    IA: function (b, a) {
        this.Cq = b;
        this.CB = a;
        this.V = a - b
    },
    run: function (a, d, b) {
        vbd.Util.cancelAnimFrame(this.Ai);
        this.Dj = true;
        this.Ax = 500;
        this.A0 = a;
        this.AM = d;
        this.AN = b || new vbd.Point(0, 0);
        this.Gd = 5;
        this.D6 = +new Date();
        vbd.event.fire(this, "start", {
            AM: d
        });
        this.C0()
    },
    stop: function (a, b) {
        vbd.Util.cancelAnimFrame(this.Ai);
        if (this.Dj && this.Ai) {
            this.A0 = b;
            this.CB = a;
            this.Cq = this.H9;
            this.V = this.CB - this.Cq;
            this.D6 = +new Date();
            this.C0();
            return
        }
    },
    C0: function () {
        this.Ai = vbd.Util.requestAnimFrame(this.C0, this, true);
        this.D7()
    },
    D7: function () {
        var a = (+new Date()) - this.D6,
            b = this.Ax;
        if (a < b) {
            this.Ea(this.E3(a / b))
        } else {
            this.Ea(1);
            this.EP()
        }
    },
    Ea: function (a) {
        this.H9 = this.Cq + this.V * a;
        vbd.event.fire(this, "step", {
            AD: this.H9,
            AM: this.AM,
            AN: this.AN
        })
    },
    EP: function () {
        vbd.Util.cancelAnimFrame(this.Ai);
        this.Dj = false;
        vbd.event.fire(this, "end", {
            A0: this.A0,
            AM: this.AM
        })
    },
    E3: function (a) {
        return 1 - Math.pow(1 - a, this.Gd)
    }
});
vbd.Lw = vbd.Class.extend({
    initialize: function (d, a, b) {
        this.D = d;
        this.AX = new vbd.DN(a, d);
        vbd.event.addListener(this.AX, "down", this.CN, this);
        vbd.event.addListener(this.AX, "dragstart", this.E0, this);
        vbd.event.addListener(this.AX, "drag", this.FA, this);
        vbd.event.addListener(this.AX, "dragend", this.FU, this);
        if (b) {
            this.AX.enable()
        }
    },
    _d: function (a) {
        return (a.obj.AI === vbd.Ak.B$ || a.obj.AI === vbd.Ak.FJ || (a.obj.AI === vbd.Ak.Gx && !a.obj.obj.getDraggable()))
    },
    CN: function (a) {
        this.D.stop()
    },
    E0: function (b) {
        var a = this.D;
        if (this._d(b)) {
            if (a.getOptions().inertia) {
                this.D5 = [];
                this.Dz = []
            }
            vbd.event.fire(a, "movestart");
            vbd.event.fire(a, "dragstart")
        }
    },
    FA: function (d) {
        if (this._d(d)) {
            var b = this.D;
            if (b.getOptions().inertia) {
                var a = this.Ed = +new Date(),
                    e = this.H6 = this.AX.Ct;
                this.D5.push(e);
                this.Dz.push(a);
                if (a - this.Dz[0] > 50) {
                    this.D5.shift();
                    this.Dz.shift()
                }
            }
            b.Cs(d.pt, true);
            b.Bq = true;
            vbd.event.fire(b, "move", d);
            vbd.event.fire(b, "drag", d)
        }
    },
    FU: function (o) {
        if (this._d(o)) {
            var a = this.D;
            var d = a.getOptions();
            var p = !d.inertia || this.Dz.length < 2;
            vbd.event.fire(a, "dragend");
            if (!d.moveAnimation) {
                a.Cp();
                return
            }
            if (p) {
                a.Cp()
            } else {
                var h = new vbd.Point((this.H6.x - this.D5[0].x), (this.H6.y - this.D5[0].y)),
                    f = (this.Ed - this.Dz[0]) / 1000,
                    q = d.easeLinearity;
                var i = q / f,
                    n = new vbd.Point(h.x * i, h.y * i),
                    l = Math.round(n.distanceTo(new vbd.Point(0, 0))),
                    m = Math.min(d.inertiaMaxSpeed, l);
                var b = m / l,
                    k = new vbd.Point(n.x * b, n.y * b),
                    j = m / (d.inertiaDeceleration * q);
                var e = -j / 2,
                    g = new vbd.Point(k.x * e, k.y * e, true);
                if (!g.x || !g.y) {
                    a.Cp()
                } else {
                    g = a.Lz(g);
                    vbd.Util.requestAnimFrame(function () {
                        a.panBy(g.x, g.y, {
                            duration: j,
                            easeLinearity: q,
                            noMoveStart: true,
                            animate: true
                        });
                        a.AU("startPanBy", {
                            dx: g.x,
                            dy: g.y
                        })
                    })
                }
            }
        }
    }
});
vbd.MapOptions = function (a) {
    return vbd.Util.extend({
        backgroundColor: "#EDEAE2",
        extendView: new vbd.Size(0, 0),
        showInView: true,
        zoom: 5,
        center: new vbd.LatLng(14.102783, 109.649506),
        disableDoubleClickZoom: false,
        mapTypeId: vbd.MapTypeId.ROADMAP,
        maxZoom: 19,
        minZoom: 2,
        scrollWheel: true,
        isMoveInsert: true,
        titleSize: 256,
        layer: null,
        scaleControl: true,
        scaleControlOptions: null,
        draggable: true,
        limitBounds: null,
        zoomControl: true,
        zoomControlOptions: null,
        extendTile: 0,
        moveAnimation: true,
        inertia: !vbd.Browser.android23,
        inertiaDeceleration: 5000,
        inertiaMaxSpeed: Infinity,
        easeLinearity: 0.25,
        timeDblClick: 250,
        clickOffset: 3,
        tapOffset: 15
    }, a)
};
vbd.MapTap = vbd.Class.extend({
    initialize: function (a) {
        vbd.event.addDomListener(a, "touchstart", this.CN, this)
    },
    CN: function (a) {
        if (!a.touches) {
            return
        }
        vbd.event.preventDefault(a);
        this.Gc = true;
        if (a.touches.length > 1) {
            this.Gc = false;
            clearTimeout(this.JH);
            return
        }
        var b = a.touches[0];
        this.Bm = this.Ct = new vbd.Point(b.clientX, b.clientY);
        this.JH = setTimeout(vbd.bind(function () {
            if (this.JJ()) {
                this.Gc = false;
                this.B3();
                this.Di("contextmenu", b)
            }
        }, this), 1000);
        this.Di("mousedown", b);
        this.JQ = vbd.event.addDomListener(document, "touchmove", this.C_, this);
        this._touchEnd = vbd.event.addDomListener(document, "touchend", this.B3, this)
    },
    B3: function (a) {
        clearTimeout(this.JH);
        vbd.event.removeDomListener(this.JQ);
        this.JQ = null;
        vbd.event.removeDomListener(this._touchEnd);
        this._touchEnd = null;
        if (this.Gc && a && a.changedTouches) {
            var b = a.changedTouches[0];
            this.Di("mouseup", b);
            if (this.JJ()) {
                this.Di("click", b)
            }
        }
    },
    JJ: function () {
        return this.Ct.distanceTo(this.Bm) <= 15
    },
    C_: function (a) {
        var b = a.touches[0];
        this.Ct = new vbd.Point(b.clientX, b.clientY);
        this.Di("mousemove", b)
    },
    Di: function (b, d) {
        var a = document.createEvent("MouseEvents");
        a.El = true;
        d.target.LU = true;
        a.initMouseEvent(b, true, true, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, false, false, false, false, 0, null);
        d.target.dispatchEvent(a)
    }
});
vbd.Jd = vbd.Class.extend({
    initialize: function (b, a) {
        this.D = b;
        vbd.event.addDomListener(a, "touchstart", this.Ek, this)
    },
    Ek: function (d) {
        if (!d.touches || d.touches.length !== 2 || this.D.BZ) {
            return
        }
        var b = this.D;
        b.stop();
        vbd.event.preventDefault(d);
        var f = b.mouseEventToContainerPoint(new vbd.Point(d.touches[0].clientX, d.touches[0].clientY)),
            a = b.mouseEventToContainerPoint(new vbd.Point(d.touches[1].clientX, d.touches[1].clientY));
        this.L0 = f.distanceTo(a);
        this.By = new vbd.Point((f.x + a.x) / 2, (f.y + a.y) / 2, true);
        this.BX = false;
        b.BZ = true;
        this.IL = vbd.event.addDomListener(document, "touchmove", this.Lx, this);
        this.IM = vbd.event.addDomListener(document, "touchend", this.Ev, this);
        vbd.event.preventDefault(d)
    },
    Lx: function (d) {
        if (!d.touches || d.touches.length !== 2 || !this.D.BZ) {
            return
        }
        vbd.event.preventDefault(d);
        var b = this.D,
            f = b.mouseEventToContainerPoint(new vbd.Point(d.touches[0].clientX, d.touches[0].clientY)),
            a = b.mouseEventToContainerPoint(new vbd.Point(d.touches[1].clientX, d.touches[1].clientY));
        this.FW = new vbd.Point((f.x + a.x) / 2, (f.y + a.y) / 2, true);
        this.AD = (f.distanceTo(a) / this.L0);
        if ((this.D.getZoom() === this.D.getOptions().maxZoom) && (this.AD > 1)) {
            return
        }
        this.AN = new vbd.Point(this.FW.x - this.By.x, this.FW.y - this.By.y, true);
        if (!this.BX) {
            this.BX = true;
            b.C8({
                AM: this.By
            })
        }
        vbd.Util.cancelAnimFrame(this.Fy);
        this.Fy = vbd.Util.requestAnimFrame(this.Lv, this, true);
        vbd.event.preventDefault(d)
    },
    Lv: function () {
        if (this.AD !== 1 || this.AN.x !== 0 || this.AN.y !== 0) {
            this.D.IO(this.By, this.AD, this.AN)
        }
    },
    Ev: function (g) {
        vbd.event.removeDomListener(this.IL);
        this.IL = null;
        vbd.event.removeDomListener(this.IM);
        this.IM = null;
        vbd.Util.cancelAnimFrame(this.Fy);
        this.Fy = null;
        if (!this.BX || !this.D.BZ) {
            this.D.BZ = false;
            return
        }
        this.D.BZ = false;
        var f = this.D,
            h = f.getScaleZoom(this.AD),
            a = f.getZoom(),
            b = h - a,
            i = f.CS(b > 0 ? Math.ceil(h) : Math.floor(h)),
            d = f.getZoomScale(i);
        if (!this.Ai) {
            this.Ai = new vbd.H4();
            vbd.event.addListener(this.Ai, "step", this.Fs, this);
            vbd.event.addListener(this.Ai, "end", this.Ei, this)
        }
        this.Ai.IA(this.AD, d);
        this.Ai.run(i, this.By, this.AN)
    },
    Fs: function (a) {
        this.D.IO(a.AM, a.AD, a.AN)
    },
    Ei: function (a) {
        a.AM = this.FW;
        this.D.Ei(a)
    }
});
vbd.Map = function (j, a) {
    j.style.overflow = "hidden";
    j.style["-ms-touch-action"] = "none";
    j.style["touch-action"] = "none";
    j.BJ = vbd.Ak.B_;
    var C, E;
    this.AB = vbd.Util.stamp(this);
    var s, g, X, m, K, P, aa, ad, r, ah, ag, l, ae, n, H = {
        x: 0,
        y: 0
    },
        V = {
            x: 0,
            y: 0
        },
        v = new vbd.MapOptions(a);
    v.center = vbd.latlng(v.center);
    var e = v.titleSize,
        z = v.zoom,
        w = v.center,
        ab = {},
        o = {},
        O, ac, J = 0,
        N, b, q, af, h = this;
    v.extendTile = Math.min(v.extendTile, 3);
    var Z = vbd.point(0, 0),
        k, Q;
    this.setCursor = function (F) {
        X.style.cursor = F
    };
    this.getCursor = function () {
        return X.style.cursor
    };
    this.AK = new vbd.Point(0, 0);
    this.getPositionLayer = function () {
        return this.AK.copy()
    };
    this.getTileSize = function () {
        return e
    };
    this.getOptions = function () {
        return v
    };
    this.AU = function (F, L) {
        vbd.event.fire(this, F, L)
    };
    this.pathImg = vbd.getUrl(v.mapTypeId);
    this.getMapTypeId = function () {
        return v.mapTypeId
    };
    this.setMapTypeId = function (L) {
        v.mapTypeId = L;
        this.pathImg = vbd.getUrl(L);
        var F = this.getLayerBase();
        if (F) {
            F.setUrl(this.pathImg)
        }
        this.AU("maptypeid_changed")
    };
    this.getSize = function () {
        if (!k || Q) {
            k = new vbd.Size(j.clientWidth || parseInt(j.style.width), j.clientHeight || parseInt(j.style.height));
            Q = false
        }
        return k.copy()
    };
    this.getContainer = function () {
        return j
    };
    this.getContainerLayer = function () {
        return K
    };
    this.getBoundMap = function () {
        return q
    };
    this.JP = function () {
        var R = this.getCenter(),
            T = this.getZoom(),
            F, L = vbd.Cf[T] * e;
        var S = this.latlngToContainerPoint(R, true);
        F = S.x;
        H.x = q.Left - F;
        if (F < 0 && ((F + L) < ae.Size.width)) {
            H.x = q.Left - q.DK() + L
        } else {
            H.x = q.Left - q.DK()
        }
    };
    this.Cs = function (R, L) {
        this.AK = R.copy();
        X.AK = R;
        vbd.DomUtil.setPosition(m, R);
        if (L) {
            this.Kz(R)
        }
        var F = q.DK(),
            S = q.F4();
        H.x = q.Left - F;
        H.y = q.Top - S;
        V.x = F - h.AK.x - q.Left - ae.Left;
        V.y = S - h.AK.y - q.Top - ae.Top
    };
    this.LG = function () {
        var R = document.getElementsByTagName("script"),
            F = "";
        var L = vbd.checkKey.toLowerCase();
        for (var S = 0; S < R.length; S++) {
            var W = R[S].src.toLowerCase();
            if ((W.indexOf(L) !== -1) && W.indexOf("key") !== -1) {
                F = W;
                break
            }
        }
        var T = vbd.Util.convertUrl2Object(F).key;
        while (T && T.indexOf("+") > -1) {
            T = T.replace("+", "!?!")
        }
        return T
    };
    this.getPixelOrigin = function () {
        return Z
    };
    this.layerPointToLatLng = function (F) {
        F = vbd.point(F).add(Z);
        return vbd.Projection.Pixel2LatLng(F, v.zoom)
    };
    this.containerPointToLayerPoint = function (F) {
        return new vbd.Point(F.x - this.AK.x, F.y - this.AK.y)
    };
    this.divPixelToContainerPixel = function (F) {
        return vbd.point(F.x + this.AK.x, F.y + this.AK.y)
    };
    this.layerPointToContainerPoint = function (F) {
        return this.divPixelToContainerPixel(F)
    };
    this.Mc = function () {
        return this.containerPointToLayerPoint(this.Dy())
    };
    this.getCenter2 = function () {
        return this.layerPointToLatLng(this.Mc())
    };
    this.Ey = function (F, L) {
        var R = this.Dy();
        L = L === undefined ? this.getZoom() : L;
        return vbd.Projection.LatLng2Pixel(F, L).Dk(R).B0(this.AK).round()
    }, this.ContainerPixel2LatLng = function (F) {
        return this.layerPointToLatLng(this.containerPointToLayerPoint(vbd.point(F)))
    };
    this.BF = function (L, F) {
        var R = vbd.Projection.LatLng2Pixel(L, v.zoom, F);
        return R.Dk(this.getPixelOrigin())
    };
    this.getOffsetLayer = function () {
        return new vbd.Point(H.x + this.AK.x, H.y + this.AK.y)
    };
    this.getOffsetConvertLatLngToXY = function () {
        return new vbd.Point(H.x, H.y)
    };
    this.JW = function (R, F, L) {
        var S = vbd.Projection.LatLng2PixelEx(R, F, L);
        return S.Dk(this.getPixelOrigin())
    };
    this.mouseEventToContainerPoint = function (L) {
        var F = vbd.Util.getOffset(j);
        ae = {
            Left: F.x,
            Top: F.y,
            Size: this.getSize()
        };
        return vbd.point(L.x - F.x, L.y - F.y)
    }, this.mouseEventToLayerPoint = function (F) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(F))
    }, this.D0 = function (F) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(F))
    };
    this.containerPointToLatLng = function (F) {
        return this.ContainerPixel2LatLng(F)
    };
    this.latlngToContainerPoint = function (F) {
        var L = this.BF(F, true);
        L.x += this.AK.x;
        L.y += this.AK.y;
        return L
    };
    this.latlngToContainerPointEx = function (L, F) {
        var R = this.JW(L, F);
        R.x += this.AK.x;
        R.y += this.AK.y;
        return R
    };
    this.latLngToLayerPoint = function (L) {
        var F = vbd.Projection.LatLng2Pixel(L, this.getZoom());
        return F.Dk(this.getPixelOrigin())
    };
    this.convertLayerPointToLatLng = function (L) {
        var F = (L.x + this.AK.x + ae.Left + V.x),
            R = (L.y + this.AK.y + ae.Top + V.y);
        return vbd.Projection.Pixel2LatLng({
            x: F,
            y: R
        }, v.zoom)
    };
    this.getPositionOfTile = function (F) {
        return q.getTilePos(F)
    };
    this.getBoundsOfTile = function (L) {
        var F = q.getTilePos(L);
        var R = new vbd.Point(F.x, F.y + e),
            W = new vbd.Point(F.x + e, F.y);
        var S = this.convertLayerPointToLatLng(R),
            T = this.convertLayerPointToLatLng(W);
        return new vbd.LatLngBounds(S, T)
    };
    this.ContainerPixel2DivPixel = function (F) {
        return vbd.point((F.x - this.AK.x), (F.y - this.AK.y))
    };
    this.Point2Mouse = function (F) {
        return vbd.point((F.x + ae.Left + this.AK.x), (F.y + ae.Top + this.AK.y))
    };
    this.getProjection = function () {
        return {
            latlngToContainerPoint: vbd.bind(this.latlngToContainerPoint, this),
            latLngToLayerPoint: vbd.bind(this.latLngToLayerPoint, this),
            fromLatLngToPoint: vbd.bind(this.BF, this),
            fromPointToLatLng: vbd.bind(this.D0, this),
            containerPointToLayerPoint: vbd.bind(this.containerPointToLayerPoint, this),
            layerPointToContainerPoint: vbd.bind(this.layerPointToContainerPoint, this),
            containerPointToLatLng: vbd.bind(this.containerPointToLatLng, this),
            layerPointToLatLng: vbd.bind(this.layerPointToLatLng, this)
        }
    };
    this.CS = function (F) {
        return Math.max(v.minZoom, Math.min(v.maxZoom, F))
    };
    var y = function (F) {
        F.Latitude = Math.max(vbd.Projection.Ep, Math.min(vbd.Projection.Eq, F.Latitude));
        F.Longitude = Math.max(vbd.Projection.FZ, Math.min(vbd.Projection.Fc, F.Longitude));
        return F
    };
    var D = function () {
        if (aa) {
            var F = h.getBoundsPaths(),
                L = h.getSize();
            aa.setAttribute("width", L.width);
            aa.setAttribute("height", L.height);
            vbd.DomUtil.setPosition(aa, F.min);
            aa.setAttribute("viewBox", [F.min.x, F.min.y, L.width, L.height].join(" "))
        }
    };
    var M = function (T) {
        if (O) {
            var F, S, L, R = O.length;
            for (L = 0; L < R; L++) {
                F = O[L];
                S = g.transformedPointWithMatrix(F.pt.x, F.pt.y, T);
                F.MB(S)
            }
        }
    };
    var p = function (al) {
        al = al || v.extendView;
        var F = vbd.point(ae.Left - al.width, ae.Top + ae.Size.height + al.height),
            R = vbd.point((ae.Left + al.width + ae.Size.width), ae.Top - al.height),
            W = h.D0(F),
            T = h.D0(R),
            am = h.BF(W),
            S = h.BF(T),
            ak, aj = false;
        if (S.x - am.x < (ae.Size.width + 2 * al.width)) {
            W.Longitude = -180;
            T.Longitude = 180;
            aj = true
        }
        ak = new vbd.LatLngBounds(W, T);
        ak.DC = aj;
        return ak
    };
    var x = function (F) {
        var L = {
            evt: F
        };
        L.Point = vbd.event.getMousePosition(F);
        L.containerPoint = h.mouseEventToContainerPoint(L.Point);
        L.LatLng = h.D0(L.Point);
        return L
    };
    var A = {
        timeout: 10000,
        watch: false
    };
    var t = function (F) {
        N = vbd.DomUtil.GH(F);
        if (!N || N.AI === vbd.Ak.B_ || h.Bq || h.BZ) {
            return
        }
        if (!N.obj) {
            N.obj = h
        }
        J++;
        if (J === 1) {
            b = x(F);
            ac = setTimeout(function () {
                ac && clearTimeout(ac);
                J = 0;
                N.obj.AU("click", b);
                N = null
            }, v.timeDblClick)
        } else {
            if (J > 1) {
                vbd.event.preventDefault(F);
                ac && clearTimeout(ac);
                N.obj.AU("dblclick", b);
                J = 0;
                if (v.disableDoubleClickZoom) {
                    return false
                }
                if (N.AI === vbd.Ak.B$ || N.AI === vbd.Ak.FJ) {
                    h.zoomAt(b.containerPoint, 1)
                }
                N = null
            }
        }
    };
    var d = function (R, L) {
        if (R.type === "keypress") {
            return false
        }
        var F = x(R);
        if (R.type === "mousewheel" || R.type === "DOMMouseScroll") {
            vbd.event.preventDefault(R);
            h.J1(F);
            return false
        }
        if (h.BZ || h.Bq) {
            return
        }
        if (R.type === "contextmenu") {
            vbd.event.preventDefault(R);
            L.AU("rightclick", F);
            L.AU(R.type, F);
            return false
        }
        if (R.type === "mouseup") {
            if (!h.CT) {
                h.CT = {}
            }
            h.CT.e = R
        }
        if (R.type === "mousemove" && J === 1 && N && N.obj) {
            ac && clearTimeout(ac);
            J = 0;
            N.obj.AU("click", b);
            N = null;
            return false
        }
        L.AU(R.type, F)
    };
    var i = function (R) {
        if (!h.Eu || vbd.event.Ex(R)) {
            return
        }
        var F = vbd.DomUtil.GH(R);
        if (F.AI === vbd.Ak.B_) {
            return false
        }
        if (R.type === "mousedown") {
            vbd.DomUtil.preventOutline(R.target || R.srcElement)
        }
        var L = (F.obj || h);
        if (R.type === "mousemove") {
            if (!h.CT) {
                h.CT = {
                    x: R.clientX,
                    y: R.clientY
                };
                d(R, L);
                return false
            }
            if (Math.abs(R.clientX - h.CT.x) > 0 || Math.abs(R.clientY - h.CT.y) > 0) {
                h.CT = {
                    x: R.clientX,
                    y: R.clientY
                };
                d(R, L)
            }
            return false
        }
        d(R, L)
    };
    var U = function () {
        vbd.event.addDomListener(window, "resize", h.J0, h);
        vbd.event.addDomListener(j, "mousedown mouseup mouseover mouseout mousemove contextmenu keypress mousewheel", i);
        X.oncontextmenu = function (F) {
            return false
        };
        j.addEventListener("click", t)
    };
    var f = function () {
        var R = new vbd.Point(0, 0);
        X = vbd.Util.AJ("div", {
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }, j);
        X.style.background = v.backgroundColor;
        var L = {
            position: "absolute",
            left: "0px",
            top: "0px"
        };
        m = vbd.Util.AJ("div", L, X);
        m.BJ = vbd.Ak.B$;
        m.AK = R;
        vbd.DomUtil.setTransform(m, R, 1);
        K = vbd.Util.AJ("div", L, m);
        P = vbd.Util.AJ("div", L, m);
        P.BJ = vbd.Ak.B$;
        var F = vbd.Util.AJ("div", L, P);
        L.zIndex = 30;
        ad = vbd.Util.AJ("div", L, F);
        L.zIndex = 40;
        var S = vbd.Util.AJ("div", L, F);
        S.appendChild(vbd.HG);
        L.zIndex = 0;
        ah = vbd.Util.AJ("div", L, S);
        ah.BJ = vbd.Ak.B$;
        L.zIndex = 50;
        r = vbd.Util.AJ("div", L, S);
        L.zIndex = 70;
        ag = vbd.Util.AJ("div", L, S);
        L.zIndex = 100;
        l = vbd.Util.AJ("div", L, S);
        l.BJ = vbd.Ak.B_;
        U()
    };
    this.getBoundsPaths = function () {
        var F = ae.Size;
        var R = new vbd.Point(-this.AK.x, -this.AK.y),
            S = new vbd.Point(R.x + F.width, R.y + F.height);
        return new vbd.Bounds(R, S)
    };
    this.setCenter = function (F, S) {
        var R = v.center,
            T = v.zoom;
        v.center = vbd.latlng(F || R);
        v.zoom = this.CS((S || v.zoom));
        q = new vbd.Eo(v.zoom, v.center, ae.Size, e, v.extendTile);
        this.Cs(new vbd.Point(0, 0));
        Z = this.Ey(v.center);
        n = p();
        for (var L in this.AC) {
            this.AC[L].EU(q, v.zoom)
        }
        this.JP();
        D();
        O = null;
        this.F2(n, true);
        this.H7(true);
        this.Bq = false;
        if (aa) {
            aa.style.display = "block"
        }
        l.style.display = "block";
        if (!R.equals(v.center)) {
            this.AU("center_changed")
        }
        if (T !== v.zoom) {
            this.AU("zoom_changed")
        }
        this.AU("boundchange", q.getBounds())
    };
    this.J0 = function () {
        vbd.Util.cancelAnimFrame(this.KC);
        this.KC = vbd.Util.requestAnimFrame(this.resize, this)
    };
    this.resize = function () {
        this.stop();
        Q = true;
        var L = vbd.Util.getOffset(j),
            F = this.getSize();
        ae = {
            Left: L.x,
            Top: L.y,
            Size: F
        };
        s.width = F.width;
        s.height = F.height;
        v.center = this.getCenter2();
        q = new vbd.Eo(v.zoom, v.center, F, e, v.extendTile);
        this.setCenter(v.center, this.getZoom());
        this.AU("resize")
    };
    this.D8 = function (L) {
        for (var F in this.AC) {
            if (this.AC[F].getOptions().isMoveInsert || L) {
                this.AC[F].update(q, this.getZoom())
            }
        }
    };
    this.refresh = function (F) {
        for (var L in this.AC) {
            this.AC[L].refresh(F)
        }
    };
    this.Kz = function (T) {
        var L = v.extendTile * e,
            R = T.x + q.Left + L,
            F = T.y + q.Top + L;
        var S = false;
        while (R > 0) {
            q.BN--;
            q.Left -= e;
            R -= e;
            S = true
        }
        while (R < -e) {
            q.BN++;
            q.Left += e;
            R += e;
            S = true
        }
        while (F > 0) {
            q.BP--;
            q.Top -= e;
            F -= e;
            S = true
        }
        while (F < -e) {
            q.BP++;
            q.Top += e;
            F += e;
            S = true
        }
        if (S && v.isMoveInsert) {
            this.D8(false)
        }
    };
    this.panTo = function (F, R) {
        this.stop();
        F = vbd.latlng(F);
        var L = this.BF(this.getCenter()),
            S = this.BF(F);
        return this.panBy(S.x - L.x, S.y - L.y, R)
    };
    this.getScaleZoom = function (F, L) {
        L = L === undefined ? v.zoom : L;
        return L + (Math.log(F) / Math.LN2)
    };
    this.getZoomScale = function (F, L) {
        L = L === undefined ? v.zoom : L;
        return vbd.Projection.scale(F) / vbd.Projection.scale(L)
    };
    this.zoomIn = function () {
        this.zoomAt(null, 1)
    };
    this.zoomOut = function () {
        this.zoomAt(null, -1)
    };
    this.Dy = function () {
        var F = ae.Size;
        return new vbd.Point(F.width / 2, F.height / 2)
    };
    this.zoomAt = function (R, L) {
        if ((L > 0 && v.zoom === v.maxZoom) || (L < 0 && v.zoom === v.minZoom)) {
            return
        }
        var S;
        if (!R) {
            R = this.Dy()
        }
        if (this.BO === undefined) {
            this.BO = L
        } else {
            if ((this.BO * L) < 0) {
                return
            }
        }
        if (this.BZ) {
            if (this.Ai) {
                S = this.CS(this.Ai.A0 + L);
                var F = this.getZoomScale(S);
                this.Ai.stop(F, S, null)
            }
            return
        }
        S = this.CS(this.getZoom() + L);
        this.Jp(R, S)
    };
    this.Jp = function (L, R) {
        R = this.CS(R);
        var F = this.getZoomScale(R);
        this.J3(R, L, F)
    };
    this.J3 = function (F, R, L) {
        this.stop();
        if (this.Eu && (this.N !== F)) {
            this.J2(F, R, L);
            return
        }
        this.BO = undefined;
        this.setCenter(null, F)
    };
    this.J2 = function (F, T, R, L, S) {
        if (!this.Ai) {
            this.Ai = new vbd.H4();
            vbd.event.addListener(this.Ai, "start", this.C8, this);
            vbd.event.addListener(this.Ai, "step", this.Fs, this);
            vbd.event.addListener(this.Ai, "end", this.Ei, this)
        }
        L = L || 1;
        this.Ai.IA(L, R);
        this.Ai.run(F, T, S)
    };
    this.Kx = function () {
        v.center = this.getCenter2();
        q = new vbd.Eo(v.zoom, v.center, ae.Size, e, v.extendTile);
        this.Cs(new vbd.Point(0, 0));
        Z = this.Ey(v.center);
        for (var F in this.AC) {
            this.AC[F].C8(q, v.zoom)
        }
        this.F2(n, true);
        if (aa) {
            aa.style.display = "none"
        }
        l.style.display = "none"
    };
    this.C8 = function (F) {
        this.Kx();
        this._X = ((F.AM.x - q.Left) / e);
        this._Y = ((F.AM.y - q.Top) / e);
        O = this.getMarkersWithBounds(n);
        this.BZ = true;
        this.AU("zoomstart")
    };
    var u = function (S, F, W, R, L) {
        g.save();
        g.translate(F, W);
        g.scale(S, S);
        g.translate(-F, -W);
        g.translate(R, L);
        var T = g.getTransform();
        g.restore();
        return T
    };
    var Y = function (S, F, W, R, L) {
        g.save();
        g.translate(F + R, W + L);
        g.scale(S, S);
        g.translate(-F, -W);
        var T = g.getTransform();
        g.restore();
        return T
    };
    this.Fs = function (F) {
        for (var L in this.AC) {
            this.AC[L].Fp(F.AD, F.AM.x, F.AM.y, F.AN.x, F.AN.y)
        }
        var R = u(F.AD, F.AM.x, F.AM.y, F.AN.x, F.AN.y);
        M(R)
    };
    this.Ei = function (F) {
        this.BO = undefined;
        var T = F.A0,
            L = vbd.Projection.Pixel2LatLng({
                x: (this._X + q.BN) * e,
                y: (this._Y + q.BP) * e
            }, v.zoom),
            R = vbd.Projection.LatLng2Pixel(L, T),
            S = this.Dy();
        R.x = R.x - F.AM.x + S.x;
        R.y = R.y - F.AM.y + S.y;
        L = vbd.Projection.Pixel2LatLng(R, T);
        this.BZ = false;
        this.setCenter(L, T);
        this.AU("zoomend")
    };
    this.IO = function (S, L, R) {
        for (var F in this.AC) {
            this.AC[F].Fp(L, S.x, S.y, R.x, R.y)
        }
        var T = Y(L, S.x, S.y, R.x, R.y);
        M(T)
    };
    this.J1 = function (L) {
        var F = L.evt;
        if (!v.scrollWheel) {
            return
        }
        var R = vbd.event.getWheelDelta(F);
        if (R) {
            this.Jz = R > 0 ? 1 : -1;
            this.Jy = L.containerPoint;
            if (!this.GG) {
                this.GG = setTimeout(vbd.bind(function () {
                    clearTimeout(this.GG);
                    this.GG = null;
                    this.zoomAt(this.Jy, this.Jz)
                }, this), 40)
            }
        }
    };
    this.getMouseOnMap = function (F, L) {
        return this.mouseEventToContainerPoint(vbd.point(F, L))
    };
    this.getTileUnderMouse = function (F) {
        return {
            x: (q.BN + Math.floor((F.x - ae.Left - this.AK.x - q.Left) / e)),
            y: (q.BP + Math.floor((F.y - ae.Top - this.AK.y - q.Top) / e))
        }
    };
    this.getTilePosition = function (R) {
        var L = h.getTileUnderMouse(R),
            F = R.x - ae.Left - this.AK.x - q.Left - (L.x - q.BN) * e,
            S = R.y - ae.Top - this.AK.y - q.Top - (L.y - q.BP) * e;
        return {
            Tile: L,
            Position: {
                x: F,
                y: S
            }
        }
    };
    this.hideOverlay = function () {
        P.style.display = "none"
    };
    this.showOverlay = function () {
        P.style.display = "block"
    };
    this.getRectView = function () {
        return ae
    };
    this.getCenter = function () {
        v.center = this.getCenter2();
        return v.center
    };
    this.getZoom = function () {
        return v.zoom
    };
    this.setZoom = function (F) {
        this.setCenter(null, F)
    };
    this.zoomFitEx = function (F) {
        this.stop();
        var L = vbd.Util.LP(F);
        if (L) {
            this.fitBounds(L)
        }
    };
    this.fitBounds = function (F) {
        this.stop();
        F = vbd.latLngBounds(F);
        if (!F.isValid()) {
            throw new Error("Bounds are not valid.")
        }
        var L = vbd.getBoundsCenterZoom(F, this.getSize());
        this.setCenter(L.center, L.zoom)
    };
    this.IW = function () {
        var R = null,
            F, L;
        for (L in ab) {
            F = ab[L].getBounds();
            R = R ? R.extend(F) : F.copy()
        }
        for (L in o) {
            F = o[L].getBounds();
            R = R ? R.extend(F) : F.copy()
        }
        return R
    };
    this.zoomFitCenter = function () {
        var F = this.IW();
        if (F) {
            F.extend(this.getCenter());
            this.zoomFitEx(F.toArray(true), true)
        }
    };
    this.zoomFit = function () {
        this.stop();
        var F = this.IW();
        if (F && F.isLatLng()) {
            this.panTo(F.getCenter())
        }
        if (F) {
            this.fitBounds(F)
        } else {
            this.setCenter(w, z)
        }
    };
    this.Bq = false;
    this.getViewPort = function () {
        return X
    };
    this.getZoomControl = function () {
        return C
    };
    this.setZoomControl = function (F) {
        v.zoomControl = F;
        if (F && !C) {
            C = new vbd.ZoomControl(v.zoomControlOptions);
            C.setMap(this)
        } else {
            if (C) {
                C.setMap(null);
                C = null
            }
        }
    };
    this.getScaleControl = function () {
        return E
    };
    this.setScaleControl = function (F) {
        v.scaleControl = F;
        if (F && !E) {
            E = new vbd.ScaleControl(v.scaleControlOptions);
            E.setMap(this)
        } else {
            if (E) {
                E.setMap(null);
                E = null
            }
        }
    };
    this.setLogo = function (F) {
        af.src = F
    };
    this.getLogo = function () {
        return af
    };
    this.disableDoubleClickZoom = function (F) {
        v.disableDoubleClickZoom = F
    };
    this.Mu = function () {
        return ag
    };
    this.Lm = function () {
        return l
    };
    this.AC = {};
    this.addLayer = function (L) {
        var F = vbd.stamp(L);
        if (this.AC[F]) {
            return
        }
        this.AC[F] = L;
        L.ES = e;
        L.D = this;
        L.HN(q, this.getZoom())
    };
    this.removeLayer = function (L) {
        var F = vbd.stamp(L);
        if (!this.AC[F]) {
            return
        }
        if (this.Eu) {
            L.Da()
        }
        delete this.AC[F];
        L.D = null;
        L.B.map = null
    };
    this.LD = function (F) {
        return !!F && (vbd.stamp(F) in this.AC)
    };
    this.J$ = function (R) {
        R = R ? (vbd.Util.isArray(R) ? R : [R]) : [];
        for (var F = 0, L = R.length; F < L; F++) {
            this.addLayer(R[F])
        }
    };
    this.getLayerWithId = function (F) {
        for (var L in this.AC) {
            if (this.AC[L].AB === F) {
                return this.AC[L]
            }
        }
        return null
    };
    this.getAllLayers = function () {
        return this.AC
    };
    this.getMarkerWithId = function (F) {
        return ab[F]
    };
    this.getAllMarker = function () {
        return ab
    };
    this.getMarkersWithBounds = function (T) {
        var R = [],
            L;
        for (var S in ab) {
            L = ab[S];
            if (T.contains(L.getPosition())) {
                R.push(L)
            }
        }
        return R
    };
    this.F2 = function (S, T) {
        var R;
        if (v.showInView) {
            var L;
            for (R in ab) {
                L = ab[R];
                if (S.contains(L.getPosition())) {
                    L.As(T)
                } else {
                    L.I5()
                }
            }
        } else {
            for (R in ab) {
                ab[R].As(T)
            }
        }
    };
    this.addMarker = function (F) {
        var L = vbd.stamp(F);
        if (ab[L]) {
            return
        }
        ab[L] = F;
        F.Et = r;
        F.He = ah;
        F.D = this;
        F.DW = false;
        F.Gr(n)
    };
    this.removeMarker = function (F) {
        var L = vbd.stamp(F);
        if (!ab[L]) {
            return
        }
        if (this.Eu) {
            F.Fm()
        }
        delete ab[L];
        F.D = null;
        F.B.map = null
    };
    this.getShapeWithId = function (F) {
        return o[F]
    };
    this.getAllShape = function () {
        return o
    };
    this.H7 = function (L) {
        var F;
        if (L) {
            for (F in o) {
                o[F].As()
            }
            return
        }
        for (F in o) {
            o[F].De()
        }
    };
    this.getShapeWithBounds = function (T) {
        var L = [],
            S;
        for (var R in o) {
            S = o[R];
            if (T.intersects(S.getBounds())) {
                L.push(S)
            }
        }
        return L
    };
    this.addShape = function (F) {
        var L = vbd.stamp(F);
        if (o[L]) {
            return
        }
        if (!aa && F.B.drawPath) {
            aa = document.createElementNS(vbd.ns, "svg");
            aa.setAttribute("pointer-events", "none");
            aa.setAttribute("version", "1.1");
            aa.style.position = "absolute";
            ad.appendChild(aa);
            D()
        }
        o[L] = F;
        F.Gr(this, aa)
    };
    this.removeShape = function (F) {
        var L = vbd.stamp(F);
        if (!o[L]) {
            return
        }
        F.Fm();
        delete o[L];
        F = null
    };
    this.Lz = function (L) {
        var aj = this.getSize(),
            F = aj.width * 3,
            ak = aj.height * 3,
            S = -F,
            R = F,
            W = -ak,
            T = ak;
        L.x = Math.max(S, Math.min(L.x, R));
        L.y = Math.max(W, Math.min(L.y, T));
        return L
    };
    this.stop = function () {
        if (this.Cb) {
            this.Cb.stop()
        }
    };
    this.panBy = function (T, L, S) {
        var F = new vbd.Point(T, L);
        S = S || {};
        if (!F.x && !F.y) {
            return
        }
        this.stop();
        var W = this.getSize();
        if (!S.noMoveStart) {
            this.AU("movestart")
        }
        this.Bq = true;
        if ((Math.abs(F.x) > W.width * 3) || (Math.abs(F.y) > W.height * 3)) {
            var aj = this.BF(this.getCenter(), v.zoom);
            aj.x += F.x;
            aj.y += F.y;
            var R = this.convertLayerPointToLatLng(aj);
            this.setCenter(R, v.zoom);
            return
        }
        if (!this.Cb) {
            this.Cb = new vbd.Jt();
            vbd.event.addListener(this.Cb, "step", this.KB, this);
            vbd.event.addListener(this.Cb, "end", this.Cp, this)
        }
        if (S.animate !== false) {
            this.Cb.run(this.AK, F, S.duration, S.easeLinearity)
        } else {
            this.Cs(F, true);
            this.Cp()
        }
    };
    this.KB = function (F) {
        this.Cs(F.pt, true);
        this.AU("move")
    };
    this.isMove = function () {
        return this.Bq
    };
    this.Cp = function (F) {
        n = p();
        this.JP();
        D();
        this.D8(true);
        this.F2(n, n.DC);
        this.H7(n, n.DC);
        setTimeout(function () {
            h.Bq = false
        }, 1);
        this.AU("moveend");
        this.AU("boundchange")
    };
    this.getBounds = function (F) {
        if (F) {
            n = p(F)
        }
        return n
    };
    this.setDraggable = function (F) {
        v.draggable = F;
        if (F) {
            this.IY.AX.enable()
        } else {
            this.IY.AX.disable()
        }
    };
    this.getDraggable = function () {
        return v.draggable
    };
    this.getLayerBase = function () {
        for (var F in this.AC) {
            if (this.AC[F]) {
                return this.AC[F]
            }
        }
        return null
    };
    this.Hr = function (F, L) {
        return F + L > 0 ? Math.round(F - L) / 2 : Math.max(0, Math.ceil(F)) - Math.max(0, Math.floor(L))
    };
    this.Kw = function (W, am, ak) {
        if (!ak) {
            return W
        }
        var au = vbd.Projection.LatLng2Pixel(W, am, true),
            aq = this.Dy();
        var L = new vbd.Point((au.x - aq.x), (au.y - aq.y)),
            S = new vbd.Point((au.x + aq.x), (au.y + aq.y));
        var aj = new vbd.Point(Math.min(L.x, S.x), Math.min(L.y, S.y)),
            ap = new vbd.Point(Math.max(L.x, S.x), Math.max(L.y, S.y));
        var al = vbd.Projection.LatLng2Pixel(ak.sw, am, true),
            an = vbd.Projection.LatLng2Pixel(ak.ne, am, true);
        var T = new vbd.Point(Math.min(al.x, an.x), Math.min(al.y, an.y)),
            R = new vbd.Point(Math.max(al.x, an.x), Math.max(al.y, an.y));
        var F = new vbd.Point(T.x - aj.x, T.y - aj.y),
            ao = new vbd.Point(R.x - ap.x, R.y - ap.y);
        var at = this.Hr(F.x, -ao.x),
            ar = this.Hr(F.y, -ao.y);
        au.x += at;
        au.y += ar;
        return vbd.Projection.Pixel2LatLng(au, am)
    };
    this.restrictBounds = function (F) {
        v.limitBounds = F;
        vbd.event.removeListener(this.Ig);
        this.Ig = null;
        vbd.event.removeListener(this.Ii);
        this.Ii = null;
        if (F) {
            this.Ii = vbd.event.addListener(this, "movestart", function () {
                if (h.EK) {
                    h.EK = false
                }
            });
            this.Ig = vbd.event.addListener(this, "moveend zoom_changed", function () {
                if (!(n.contains(F) || F.contains(n))) {
                    var L = h.getCenter(),
                        R = h.getZoom();
                    Kt = h.Kw(L, R, F);
                    h.EK = !h.EK;
                    if (h.EK) {
                        h.panTo(Kt, {
                            noMoveStart: true
                        })
                    }
                }
            })
        }
    };
    this.restrictZoom = function (L, F) {
        v.minZoom = this.CS(L);
        v.maxZoom = this.CS(F)
    };
    this.locate = function (R) {
        R = this.Dg = vbd.extend({}, A, R);
        if (!navigator.geolocation) {
            this.JK({
                code: 0,
                message: "Geolocation not supported."
            });
            return this
        }
        var F = vbd.bind(this.Kd, this),
            L = vbd.bind(this.JK, this);
        if (R.watch) {
            this.KP = navigator.geolocation.watchPosition(F, L, R)
        } else {
            navigator.geolocation.getCurrentPosition(F, L, R)
        }
        return this
    };
    this.stopLocate = function () {
        if (navigator.geolocation) {
            navigator.geolocation.clearWatch(this.KP)
        }
        if (this.Dg) {
            this.Dg.setCenter = false
        }
        vbd.event.fire(this, "stoplocation");
        return this
    };
    this.JK = function (F) {
        var R = F.code,
            L = F.message || (R === 1 ? "permission denied" : (R === 2 ? "position unavailable" : "timeout"));
        this.AU("locationerror", {
            code: R,
            message: "Geolocation error: " + L + "."
        })
    };
    this.Kd = function (ak) {
        var W = ak.coords.latitude,
            L = ak.coords.longitude,
            T = new vbd.LatLng(W, L),
            S = T.toBounds(ak.coords.accuracy),
            aj = this.Dg;
        if (aj.setCenter) {
            this.setCenter(T)
        }
        var F = {
            latlng: T,
            bounds: S,
            timestamp: ak.timestamp
        };
        for (var R in ak.coords) {
            if (typeof ak.coords[R] === "number") {
                F[R] = ak.coords[R]
            }
        }
        this.AU("locationfound", F)
    };
    var ai = function () {
        for (var F = 1, L = (v.maxZoom + 1) ; F < L; F++) {
            vbd.Cf[F] = 2 << (F - 1)
        }
    };
    this.setOptions = function (F) {
        v = vbd.Util.extend(v, F);
        e = v.titleSize, z = v.zoom, w = v.center, v.extendTile = Math.min(v.extendTile, 3);
        ai();
        this.setCenter(w, z)
    };
    (function () {
        ai();
        var F = vbd.DomUtil.getStyle(j, "position");
        if (F !== "absolute" && F !== "relative" && F !== "fixed") {
            j.style.position = "relative"
        }
        j.style[vbd.Be] = "none";
        Q = true;
        var R = vbd.Util.getOffset(j);
        var L = h.getSize();
        ae = {
            Left: R.x,
            Top: R.y,
            Size: L
        };
        q = new vbd.Eo(v.zoom, v.center, L, e, v.extendTile);
        h.HM = vbd.Browser.any3d;
        f();
        Z = h.Ey(v.center);
        s = document.createElement("canvas");
        s.style.display = "none";
        s.width = ae.Size.width;
        s.height = ae.Size.height;
        g = s.getContext("2d");
        vbd.Jf(g);
        af = vbd.Util.LQ(vbd.root + "/V2/Images/poweredby.png", {
            position: "absolute",
            left: "1px",
            bottom: "1px",
            zIndex: 100,
            cursor: "pointer"
        }, {
            width: 105,
            height: 35
        });
        vbd.event.addDomListener(af, "click", function () {
            window.open("http://www.vietbando.com/")
        });
        j.appendChild(af);
        h.Cs(new vbd.Point(0, 0));
        n = p();
        v.layer = v.layer || new vbd.Layer({
            subdomains: [vbd.getUrl(v.mapTypeId)]
        });
        h.J$(v.layer);
        h.IY = new vbd.Lw(h, X, v.draggable);
        h.Eu = true;
        h.restrictBounds(v.limitBounds);
        h.setZoomControl(v.zoomControl);
        h.setScaleControl(v.scaleControl);
        vbd.event.addDomListener(j, "scroll", function () {
            this.scrollTop = 0;
            this.scrollLeft = 0
        });
        if (vbd.Browser.touch) {
            new vbd.Jd(h, m)
        }
        if (vbd.Browser.touch && !vbd.Browser.pointer) {
            new vbd.MapTap(m)
        }
    })()
};