"use strict";
exports.id = 5782;
exports.ids = [5782];
exports.modules = {

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4221);
/* harmony import */ var _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5149);
/* harmony import */ var _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8296);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);










function NavigationBar() {
    const nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sideBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [closed, setClosed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toogleMenuState = (event)=>{
        console.log(closed);
        setClosed(!closed);
    };
    const menuSlideAnimation = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring)({
        to: {
            left: closed ? "51%" : !closed ? "100%" : ""
        },
        config: {
            duration: 320
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: nav,
        className: " relative  h-[5vw] w-full portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "content w-[95%] h-full text-[1.5vw]  flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "logo  flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            alt: "",
                            src: _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                            className: " object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] ",
                        href: "/",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "business_page-btn font-M_PLUS_1 px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-green hover:text-darkgreen  flex items-center justify-between ",
                                children: "For Customers"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu  landscape:hidden  cursor-pointer flex items-center justify-end  ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            onClick: toogleMenuState,
                            className: "w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]",
                            src: _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "list-items portrait:hidden h-full w-[60%] flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/AboutUs",
                                className: "h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/SchoolSignUp",
                                className: "h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between",
                                    children: "Login"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "flex justify-center items-center h-full ",
                                href: "/",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between ",
                                        children: "For Schools"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.animated.div, {
                style: menuSlideAnimation,
                ref: sideBar,
                className: `sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[400%] portrait:sm:h-[600%] w-[50%] bg-darkgreen absolute top-[10%]  portrait:sm:top-[20%]  flex flex-col justify-around`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "closeicon pr-[3%] cursor-pointer flex items-center justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            ref: icon,
                            onClick: toogleMenuState,
                            className: "w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]",
                            src: _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lists h-[80%] flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/SchoolSignUp",
                                className: "h-  full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list",
                                    children: "Login"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list",
                                children: "Categories"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/AboutUs",
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list",
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list",
                                children: "Contact Us"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;