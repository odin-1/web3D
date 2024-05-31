(function() {
    var t = {
        5485: function(t, e, i) {
            "use strict";
            var n = i(2856)
              , a = function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("Navbar"), e("router-view"), e("bottomInfo")], 1)
            }
              , s = []
              , r = function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "navbar",
                    style: {
                        "background-color": t.navBarBg
                    }
                }, [t._m(0), e("div", {
                    staticClass: "right-info"
                }, [e("div", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-text",
                    class: {
                        active: "HomePage" === t.$route.name
                    },
                    attrs: {
                        to: "/"
                    }
                }, [t._v("Home")])], 1), e("div", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-text",
                    class: {
                        active: "AboutPage" === t.$route.name
                    },
                    attrs: {
                        to: "/about"
                    }
                }, [t._v("About")])], 1), e("div", {
                    staticClass: "nav-item"
                }, [e("router-link", {
                    staticClass: "nav-text",
                    class: {
                        active: "ModelPage" === t.$route.name
                    },
                    attrs: {
                        to: "/model"
                    }
                }, [t._v("Model")])], 1)])])
            }
              , o = [function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "left-info"
                }, [e("div", {
                    staticClass: "text-container"
                }, [e("span", {
                    staticClass: "coca-text-1"
                }, [t._v("1oca")]), e("span", {
                    staticClass: "coca-text-2"
                }, [t._v("Cola")]), e("span", {
                    staticClass: "journey-text"
                }, [t._v("Journey")])]), e("span", {
                    staticClass: "refresh-text"
                }, [t._v("Refreshing the world, one story at a time")])])
            }
            ]
              , l = i(1910);
            n.Ay.use(l.Ay);
            const c = new l.Ay.Store({
                state: {
                    theme: 1
                },
                mutations: {
                    setTheme(t, e) {
                        t.theme = e
                    }
                }
            });
            var d = c
              , u = {
                name: "Navbar",
                data() {
                    return {}
                },
                computed: {
                    theme() {
                        return this.$store.state.theme
                    },
                    navBarBg() {
                        return 0 === this.theme ? "chocolate" : 1 === this.theme ? "red" : 2 === this.theme ? "darkcyan" : void 0
                    }
                }
            }
              , m = u
              , h = i(1656)
              , p = (0,
            h.A)(m, r, o, !1, null, "7f47bd2c", null)
              , v = p.exports
              , f = function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "bottom-container",
                    style: {
                        "background-color": t.bottomBg
                    }
                }, [e("div", {
                    staticClass: "bottom-left-info"
                }, [e("span", {
                    staticClass: "year-info"
                }, [t._v("© 2024 3D Apps | ")]), e("div", {
                    staticClass: "restyle-btn",
                    on: {
                        click: t.handleChangeTheme
                    }
                }, [t._v("Restyle ")]), e("span", {
                    staticClass: "line"
                }, [t._v(" | ")]), e("div", {
                    staticClass: "restyle-btn"
                }, [t._v("Reset")])])])
            }
              , g = []
              , C = {
                name: "Navbar",
                data() {
                    return {
                        themeCount: 1
                    }
                },
                computed: {
                    bottomBg() {
                        return 0 === this.theme ? "dimgrey" : 1 === this.theme || 2 === this.theme ? "orange" : void 0
                    },
                    theme() {
                        return this.$store.state.theme
                    }
                },
                methods: {
                    handleChangeTheme() {
                        this.themeCount++,
                        this.$store.commit("setTheme", this.themeCount % 3)
                    }
                }
            }
              , _ = C
              , b = (0,
            h.A)(_, f, g, !1, null, "8c13c17c", null)
              , w = b.exports
              , y = {
                name: "App",
                components: {
                    Navbar: v,
                    bottomInfo: w
                }
            }
              , k = y
              , x = (0,
            h.A)(k, a, s, !1, null, null, null)
              , M = x.exports
              , P = i(1594)
              , D = function() {
                var t = this
                  , e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "wrap",
                    style: {
                        "background-color": t.themeBg
                    }
                }, [t._m(0), e("div", {
                    staticClass: "detail-container"
                }, t._l(t.detailList, (function(i, n) {
                    return e("div", {
                        key: n,
                        staticClass: "detail-item"
                    }, [e("div", {
                        staticClass: "detail-img-container"
                    }, [e("img", {
                        staticClass: "item-img",
                        attrs: {
                            src: t.itemImg(i)
                        }
                    })]), e("div", {
                        staticClass: "content-container"
                    }, [e("span", {
                        staticClass: "item-title"
                    }, [t._v(t._s(i.title))]), e("span", {
                        staticClass: "item-content"
                    }, [t._v(t._s(i.content))]), e("span", {
                        staticClass: "item-more"
                    }, [t._v(t._s(i.moreContent))]), e("div", {
                        staticClass: "more-btn"
                    }, [t._v("Find out more ...")])])])
                }
                )), 0)])])
            }
              , A = [function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "img-container"
                }, [e("img", {
                    staticClass: "main-img",
                    attrs: {
                        src: i(3716)
                    }
                }), e("div", {
                    staticClass: "main-info-container"
                }, [e("span", {
                    staticClass: "info1"
                }, [t._v("Coca Cola Great Britain")]), e("span", {
                    staticClass: "info2"
                }, [t._v("Founded in 1886 Dr John S Pemberton")]), e("span", {
                    staticClass: "info3"
                }, [t._v("The Coca Cola Company is the world's leading manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.")])])])
            }
            ]
              , T = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/coca_cola.05a030da.jpg"
              , L = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/sprite.91415576.jpg"
              , O = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/dr_pepper.d1fd8c46.jpg"
              , S = {
                name: "HomePage",
                data() {
                    return {
                        detailList: [{
                            name: "coca_cola",
                            title: "Coca Cola",
                            content: "New York Harbour, 1886",
                            moreContent: "It was 1886, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special!"
                        }, {
                            name: "sprite",
                            title: "Sprite",
                            content: "West Germany, 1959",
                            moreContent: "First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories."
                        }, {
                            name: "dr_pepper",
                            title: "Dr Pepper",
                            content: "Texas, 1885",
                            moreContent: "Dr Pepper's unique, sparkling blend of 23 fruit flavours has been around for well over a century and it's still the same, with that distinctive flavour you just can't quite put your tongue on. It was created by Texas pharmacist Alderton in 1885. The taste of Dr Pepper has been popular ever since."
                        }]
                    }
                },
                computed: {
                    theme() {
                        return this.$store.state.theme
                    },
                    itemImg() {
                        return t=>"coca_cola" === t.name ? T : "sprite" === t.name ? L : O
                    },
                    themeBg() {
                        return 0 === this.theme ? "#c4c4c4" : 1 === this.theme ? "#d7faf5" : 2 === this.theme ? "#ff7217" : void 0
                    }
                }
            }
              , j = S
              , R = (0,
            h.A)(j, D, A, !1, null, "337eeb75", null)
              , $ = R.exports
              , z = function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "wrap",
                    style: {
                        "background-color": t.themeBg
                    }
                }, [e("div", {
                    staticClass: "model-gallery-container"
                }, [e("div", {
                    staticClass: "model-container"
                }, [t._m(0), e("div", {
                    staticClass: "model-content"
                }, [e("div", {
                    staticClass: "title-name"
                }, [t._v(t._s(`${t.currentModel} X3D Model`))]), e("div", {
                    staticClass: "btn-area"
                }, [e("button", {
                    staticClass: "btn-item",
                    on: {
                        click: function(e) {
                            return t.handleClick(1)
                        }
                    }
                }, [t._v("Coke")]), e("button", {
                    staticClass: "btn-item",
                    on: {
                        click: function(e) {
                            return t.handleClick(2)
                        }
                    }
                }, [t._v("Sprite")]), e("button", {
                    staticClass: "btn-item",
                    on: {
                        click: function(e) {
                            return t.handleClick(3)
                        }
                    }
                }, [t._v("Pepper")])]), t.showLine ? e("img", {
                    staticClass: "line-image",
                    attrs: {
                        src: i(7237)(`./${t.type}-line.jpg`),
                        alt: "Model Image"
                    }
                }) : t._e(), t.showFront ? e("img", {
                    staticClass: "front-image",
                    attrs: {
                        src: i(3426)(`./${t.type}-front.png`),
                        alt: "Model Image"
                    }
                }) : t._e(), t.showLine || t.showFront ? t._e() : e("ThreeDModel", {
                    ref: "threeD",
                    attrs: {
                        modelPath: t.type,
                        animation: t.animation,
                        cameraPo: t.camera
                    }
                }), e("div", {
                    staticClass: "model-describe-area"
                }, [t._v(t._s(`This 3D model of the ${t.modelName} has been created in rhino.`))])], 1)]), e("div", {
                    staticClass: "gallery-container"
                }, [t._m(1), e("div", {
                    staticClass: "gallery-content"
                }, [e("div", {
                    staticClass: "title-name"
                }, [t._v("3D Images")]), e("div", {
                    staticClass: "image-outer"
                }, t._l(6, (function(t, n) {
                    return e("div", {
                        key: n,
                        staticClass: "image-container"
                    }, [e("img", {
                        staticClass: "gallery-image",
                        attrs: {
                            src: i(7948)(`/model-image-${n + 1}.png`),
                            alt: "Model Image"
                        }
                    })])
                }
                )), 0), e("div", [t._v("3D Image")])])])]), e("div", {
                    staticClass: "control-center"
                }, [e("div", {
                    staticClass: "control-item"
                }, [t._m(2), e("div", {
                    staticClass: "control-name"
                }, [t._v("Camera Views")]), e("div", {
                    staticClass: "camera-btn-container"
                }, [e("div", {
                    staticClass: "cam-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleCamera("d")
                        }
                    }
                }, [t._v("Default")]), e("div", {
                    staticClass: "cam-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleCamera("b")
                        }
                    }
                }, [t._v("Back")]), e("div", {
                    staticClass: "cam-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleCamera("l")
                        }
                    }
                }, [t._v("Left")]), e("div", {
                    staticClass: "cam-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleCamera("r")
                        }
                    }
                }, [t._v("Right")]), e("div", {
                    staticClass: "cam-btn-item"
                }, [t._v("Off")])]), e("div", {
                    staticClass: "ani-explain"
                }, [t._v("These buttons select a limited range of 3D model viewpoints, use the dropdown menu for more camera views")])]), e("div", {
                    staticClass: "control-item"
                }, [t._m(3), e("div", {
                    staticClass: "control-name"
                }, [t._v("Animation Options")]), e("div", {
                    staticClass: "animation-btn-container"
                }, [e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleRotate("x")
                        }
                    }
                }, [t._v("RotX")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleRotate("y")
                        }
                    }
                }, [t._v("RotY")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleRotate("z")
                        }
                    }
                }, [t._v("RotZ")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: function(e) {
                            return t.handleRotate("")
                        }
                    }
                }, [t._v("Stop")])]), e("div", {
                    staticClass: "ani-explain"
                }, [t._v("These buttons select a range of 3D animation options")])]), e("div", {
                    staticClass: "control-item"
                }, [t._m(4), e("div", {
                    staticClass: "control-name"
                }, [t._v("Render and Lighting Options")]), e("div", {
                    staticClass: "animation-btn-container"
                }, [e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: t.handleLine
                    }
                }, [t._v("Poly")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: t.handleLine
                    }
                }, [t._v("Wire")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: t.handleLine
                    }
                }, [t._v("Headlight")]), e("div", {
                    staticClass: "ani-btn-item",
                    on: {
                        click: t.handleLine
                    }
                }, [t._v("Default")])]), e("div", {
                    staticClass: "ani-explain"
                }, [t._v("These buttons select a limited number of render and lighting options; use the dropdown menus for more options")])])]), e("div", {
                    staticClass: "introduction-container"
                }, [e("div", {
                    staticClass: "introduction-title"
                }, [t._v(t._s(t.introTitle))]), e("div", {
                    staticClass: "title-smaller"
                }, [t._v(t._s(t.titleSmaller))]), e("div", {
                    staticClass: "intro-detail"
                }, [t._v(t._s(t.introDetail))]), e("div", {
                    staticClass: "visit-btn"
                }, [t._v(t._s(`visit ${t.itemName}`))])])])
            }
              , F = [function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "model-title"
                }, [e("div", {
                    staticClass: "x3d-title"
                }, [t._v("3D Models")])])
            }
            , function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "gallery-title"
                }, [e("div", {
                    staticClass: "x3d-title"
                }, [t._v("Gallery")])])
            }
            , function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "item-title"
                }, [e("div", {
                    staticClass: "item-title-name"
                }, [t._v("Cameras")])])
            }
            , function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "item-title"
                }, [e("div", {
                    staticClass: "item-title-name"
                }, [t._v("Animation")])])
            }
            , function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "item-title"
                }, [e("div", {
                    staticClass: "item-title-name"
                }, [t._v("Render")])])
            }
            ]
              , N = function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    ref: "threeContainer",
                    staticClass: "three-container"
                })
            }
              , I = []
              , B = i(9318)
              , E = i(5729)
              , q = i(8429)
              , H = {
                name: "ThreeDModel",
                props: ["modelPath", "animation", "cameraPo"],
                data() {
                    return {
                        scene: null,
                        camera: null,
                        renderer: null,
                        controls: null,
                        model: null
                    }
                },
                watch: {
                    modelPath: "loadModel"
                },
                mounted() {
                    console.log("mounted"),
                    this.initThreeJS(),
                    this.loadModel(),
                    this.setupResizeListener(),
                    this.onWindowResize()
                },
                beforeDestroy() {
                    this.removeResizeListener()
                },
                methods: {
                    initThreeJS(t) {
                        console.log("initThreeJS", t),
                        this.scene = new B.Z58;
                        new B.Pq0(200,1e3,1e3),
                        new B.Pq0(90,1e3,400);
                        this.camera = new B.ubm(80,this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight,.5,1e3),
                        this.camera.position.set(0, 500, 0),
                        "default" === this.camera ? this.camera.lookAt(0, 0, 90) : this.camera.lookAt(0, 0, 0);
                        const e = (new B.PTz).setFromEuler(new B.O9p(Math.PI / 2,0,0,"XYZ"));
                        this.camera.quaternion.copy(e),
                        console.log("Camera position:", this.camera.position),
                        console.log("Camera rotation:", this.camera.rotation),
                        this.renderer = new B.JeP({
                            antialias: !0,
                            alpha: !0
                        }),
                        this.renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight),
                        this.renderer.setPixelRatio(window.devicePixelRatio),
                        this.$refs.threeContainer.appendChild(this.renderer.domElement);
                        const i = new B.$p8(4210752);
                        this.scene.add(i);
                        const n = new B.ZyN(16777215,1);
                        n.position.set(1, 1, 1).normalize(),
                        this.scene.add(n),
                        this.controls = new E.N(this.camera,this.renderer.domElement),
                        this.controls.enableDamping = !0,
                        this.controls.dampingFactor = .25,
                        this.controls.screenSpacePanning = !1;
                        const a = ()=>{
                            requestAnimationFrame(a),
                            this.currentModel && ("x" === this.animation ? this.currentModel.rotation.x += .01 : "y" === this.animation ? this.currentModel.rotation.y += .01 : "z" === this.animation && (this.currentModel.rotation.z += .01)),
                            this.renderer.render(this.scene, this.camera)
                        }
                        ;
                        a()
                    },
                    loadModel() {
                        this.currentModel && this.scene.remove(this.currentModel);
                        const t = new q.L;
                        let e = `/models/${this.modelPath || "coke"}.obj`;
                        console.log(e),
                        t.load(e, (t=>{
                            this.currentModel = t,
                            this.scene.add(t)
                        }
                        ), void 0, (t=>{
                            console.error(t)
                        }
                        ))
                    },
                    setupResizeListener() {
                        window.addEventListener("resize", this.onWindowResize)
                    },
                    removeResizeListener() {
                        window.removeEventListener("resize", this.onWindowResize)
                    },
                    onWindowResize() {
                        const t = this.$refs.threeContainer.clientWidth
                          , e = this.$refs.threeContainer.clientHeight;
                        console.log("width", t),
                        console.log("height", e),
                        this.camera.aspect = t / e,
                        this.camera.updateProjectionMatrix(),
                        this.renderer.setSize(t, e)
                    }
                }
            }
              , J = H
              , W = (0,
            h.A)(J, N, I, !1, null, "077cd4d5", null)
              , Z = W.exports
              , X = {
                name: "ModelPage",
                components: {
                    ThreeDModel: Z
                },
                data() {
                    return {
                        currentModel: "Coca Cola",
                        animation: "",
                        camera: "",
                        showLine: !1,
                        showFront: !1
                    }
                },
                computed: {
                    type() {
                        return "Coca Cola" === this.currentModel ? "coke" : "Sprite" === this.currentModel ? "sprite" : "pepper"
                    },
                    modelName() {
                        return "Coca Cola" === this.currentModel ? "coke can" : "Sprite" === this.currentModel ? "sprite bottle" : "pepper cup"
                    },
                    itemName() {
                        return "Coca Cola" === this.currentModel ? "coke" : "Sprite" === this.currentModel ? "sprite" : "pepper"
                    },
                    theme() {
                        return this.$store.state.theme
                    },
                    themeBg() {
                        return 0 === this.theme ? "#c4c4c4" : 1 === this.theme ? "#d7faf5" : 2 === this.theme ? "#ff7217" : void 0
                    },
                    introTitle() {
                        return "Coca Cola" === this.currentModel ? "History of Coca Cola" : "Sprite" === this.currentModel ? "Sprite — Fanta Klare Zitrone" : "Dr Pepper — Liquid Sunshine"
                    },
                    titleSmaller() {
                        return "Coca Cola" === this.currentModel ? "Atlanta Beginnings" : "Sprite" === this.currentModel ? "First introduced in 1961" : "23 fruit flavours"
                    },
                    introDetail() {
                        return "Coca Cola" === this.currentModel ? "It was 1886, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink was something special!" : "Sprite" === this.currentModel ? "First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite Zero, part of our no sugar Zero range, offers the delicious lemon lime taste of Sprite without the sugar or calories." : "Dr Pepper's unique, sparkling blend of 23 fruit flavours has been around for well over a century and it's still the same, with that distinctive flavour you just can't quite put your tongue on. It was created by Texas pharmacist Alderton in 1885. The taste of Dr Pepper has been popular ever since."
                    }
                },
                methods: {
                    handleClick(t) {
                        this.currentModel = 1 === t ? "Coca Cola" : 2 === t ? "Sprite" : "Dr Pepper"
                    },
                    handleRotate(t) {
                        this.showLine = !1,
                        this.showFront = !1,
                        this.animation = "x" === t ? "x" : "y" === t ? "y" : "z" === t ? "z" : "",
                        window.scrollTo(0, 0)
                    },
                    handleCamera(t) {
                        this.showLine = !1,
                        this.showFront = !0,
                        window.scrollTo(0, 0)
                    },
                    handleLine() {
                        this.showLine = !0,
                        this.showFront = !1,
                        console.log("this.showLine", this.showLine)
                    }
                },
                created() {
                    this.$refs.threeD.initThreeJS("coke")
                }
            }
              , U = X
              , G = (0,
            h.A)(U, z, F, !1, null, "28b1d38b", null)
              , Y = G.exports
              , V = function() {
                var t = this;
                t._self._c;
                return t._m(0)
            }
              , K = [function() {
                var t = this
                  , e = t._self._c;
                return e("div", {
                    staticClass: "wrap"
                }, [e("h1", [t._v("About Page")])])
            }
            ]
              , Q = {
                name: "AboutPage"
            }
              , tt = Q
              , et = (0,
            h.A)(tt, V, K, !1, null, "699bcbc1", null)
              , it = et.exports;
            n.Ay.use(P.A);
            const nt = [{
                path: "/",
                name: "HomePage",
                component: $
            }, {
                path: "/model",
                name: "ModelPage",
                component: Y
            }, {
                path: "/about",
                name: "AboutPage",
                component: it
            }]
              , at = new P.A({
                mode: "history",
                base: "/",
                linkActiveClass: "active-link",
                routes: nt
            });
            var st = at;
            n.Ay.config.productionTip = !1,
            new n.Ay({
                store: d,
                router: st,
                render: t=>t(M)
            }).$mount("#app")
        },
        3426: function(t, e, i) {
            var n = {
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/coke-front.png": 1195,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/pepper-front.png": 5517,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/sprite-front.png": 7618
            };
            function a(t) {
                var e = s(t);
                return i(e)
            }
            function s(t) {
                if (!i.o(n, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                return n[t]
            }
            a.keys = function() {
                return Object.keys(n)
            }
            ,
            a.resolve = s,
            t.exports = a,
            a.id = 3426
        },
        7237: function(t, e, i) {
            var n = {
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/coke-line.jpg": 5242,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/pepper-line.jpg": 5436,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/sprite-line.jpg": 9761
            };
            function a(t) {
                var e = s(t);
                return i(e)
            }
            function s(t) {
                if (!i.o(n, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                return n[t]
            }
            a.keys = function() {
                return Object.keys(n)
            }
            ,
            a.resolve = s,
            t.exports = a,
            a.id = 7237
        },
        7948: function(t, e, i) {
            var n = {
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-1.png": 2426,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-2.png": 7089,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-3.png": 7144,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-4.png": 2311,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-5.png": 974,
                "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/src/assets/images/model-image-6.png": 6725
            };
            function a(t) {
                var e = s(t);
                return i(e)
            }
            function s(t) {
                if (!i.o(n, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                return n[t]
            }
            a.keys = function() {
                return Object.keys(n)
            }
            ,
            a.resolve = s,
            t.exports = a,
            a.id = 7948
        },
        1195: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/coke-front.1a0e6d2a.png"
        },
        5242: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/coke-line.2c496a1b.jpg"
        },
        3716: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/main_3D.b61fa322.jpg"
        },
        2426: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-1.28b857b9.png"
        },
        7089: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-2.ae2c4e60.png"
        },
        7144: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-3.79a0eee4.png"
        },
        2311: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-4.cf722ebe.png"
        },
        974: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-5.989c0e08.png"
        },
        6725: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/model-image-6.0d4f112b.png"
        },
        5517: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/pepper-front.57e0ce06.png"
        },
        5436: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/pepper-line.aaa65889.jpg"
        },
        7618: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/sprite-front.c41dfb0f.png"
        },
        9761: function(t, e, i) {
            "use strict";
            t.exports = i.p + "users.sussex.ac.uk/~hw503/3dapp/my-vue-app/dist/img/sprite-line.5c819422.jpg"
        }
    }
      , e = {};
    function i(n) {
        var a = e[n];
        if (void 0 !== a)
            return a.exports;
        var s = e[n] = {
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i),
        s.exports
    }
    i.m = t,
    function() {
        var t = [];
        i.O = function(e, n, a, s) {
            if (!n) {
                var r = 1 / 0;
                for (d = 0; d < t.length; d++) {
                    n = t[d][0],
                    a = t[d][1],
                    s = t[d][2];
                    for (var o = !0, l = 0; l < n.length; l++)
                        (!1 & s || r >= s) && Object.keys(i.O).every((function(t) {
                            return i.O[t](n[l])
                        }
                        )) ? n.splice(l--, 1) : (o = !1,
                        s < r && (r = s));
                    if (o) {
                        t.splice(d--, 1);
                        var c = a();
                        void 0 !== c && (e = c)
                    }
                }
                return e
            }
            s = s || 0;
            for (var d = t.length; d > 0 && t[d - 1][2] > s; d--)
                t[d] = t[d - 1];
            t[d] = [n, a, s]
        }
    }(),
    function() {
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            }
            : function() {
                return t
            }
            ;
            return i.d(e, {
                a: e
            }),
            e
        }
    }(),
    function() {
        i.d = function(t, e) {
            for (var n in e)
                i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }
    }(),
    function() {
        i.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
    }(),
    function() {
        i.p = "/"
    }(),
    function() {
        var t = {
            524: 0
        };
        i.O.j = function(e) {
            return 0 === t[e]
        }
        ;
        var e = function(e, n) {
            var a, s, r = n[0], o = n[1], l = n[2], c = 0;
            if (r.some((function(e) {
                return 0 !== t[e]
            }
            ))) {
                for (a in o)
                    i.o(o, a) && (i.m[a] = o[a]);
                if (l)
                    var d = l(i)
            }
            for (e && e(n); c < r.length; c++)
                s = r[c],
                i.o(t, s) && t[s] && t[s][0](),
                t[s] = 0;
            return i.O(d)
        }
          , n = self["webpackChunkmy_vue_app"] = self["webpackChunkmy_vue_app"] || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }();
    var n = i.O(void 0, [504], (function() {
        return i(5485)
    }
    ));
    n = i.O(n)
}
)();
//# sourceMappingURL=app.6d1fbc84.js.map