"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/HomePage-Components/NavigationBar.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/HomePage-Components/NavigationBar.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavigationBar\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/esm/index.js\");\n/* harmony import */ var _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/assets/trustmonialog.png */ \"./public/assets/trustmonialog.png\");\n/* harmony import */ var _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/MenuNavigation.png */ \"./public/assets/MenuNavigation.png\");\n/* harmony import */ var _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/exiticon.png */ \"./public/assets/exiticon.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_utilities_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/utilities/animation */ \"./public/utilities/animation.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst NavigationBar = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(()=>{\n    _s();\n    const nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const logoDiv = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const sideBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [closed, setClosed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toogleMenuState = ()=>{\n        console.log(closed);\n        setClosed(!closed);\n    };\n    const menuSlideAnimation = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring)({\n        to: {\n            left: closed ? \"51%\" : !closed ? \"100%\" : \"\"\n        },\n        config: {\n            duration: 320\n        }\n    });\n    let renderAnimation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_public_utilities_animation__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(logoDiv, 0.8, 600);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: nav,\n        className: \" relative h-[5vw] portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content w-[95%] h-full text-[1.5vw]  flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: logoDiv,\n                        className: \"logo mt-[-10vw] flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            alt: \"\",\n                            src: _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            className: \" object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] \"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 164\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] \",\n                        href: \"/business-page\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"business_page-btn font-M_PLUS_1 px-[20px] bg-green text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-blue hover:text-darkgreen  flex items-center justify-between \",\n                                children: \"For Business\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 144\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 10\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu  landscape:hidden  cursor-pointer flex items-center justify-end  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 96\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 8\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"list-items portrait:hidden h-full w-[60%] flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/AboutUs\",\n                                className: \"h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 144\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 101\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 348\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/SchoolLogin\",\n                                className: \"h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 593\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 546\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"flex justify-center items-center h-full \",\n                                href: \"/business-page\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"business_page-btn font-jamrul px-[20px] bg-green text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  flex items-center justify-between \",\n                                        children: \"For Business\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 882\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 797\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 8\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.animated.div, {\n                style: menuSlideAnimation,\n                ref: sideBar,\n                className: \"sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[400%] portrait:sm:h-[600%] w-[50%] bg-darkgreen absolute top-[10%]  portrait:sm:top-[20%]  flex flex-col justify-around\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"closeicon pr-[3%] cursor-pointer flex items-center justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            ref: icon,\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 83\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lists h-[80%] flex flex-col justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/SchoolLogin\",\n                                className: \"h-  full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"list\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 50\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/AboutUs\",\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"list\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 38\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Contact Us\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 1\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 1\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/precious/Desktop/market-place/src/pages/HomePage-Components/NavigationBar.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n}, \"5vbdDT0PPFCbcMtZj/CL7IGZROQ=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring\n    ];\n})), \"5vbdDT0PPFCbcMtZj/CL7IGZROQ=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring\n    ];\n});\n_c1 = NavigationBar;\nvar _c, _c1;\n$RefreshReg$(_c, \"NavigationBar$forwardRef\");\n$RefreshReg$(_c1, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZVBhZ2UtQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBRWI7QUFDNEI7QUFDekI7QUFDRTtBQUMwQjtBQUNPO0FBQ1A7QUFDN0I7QUFDNEM7QUFDekM7QUFLekIsTUFBTWEsOEJBQWdCWixHQUFBQSxpREFBVUEsU0FBQyxJQUFNOztJQUc3QyxNQUFNYSxNQUFNVCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUN2QyxNQUFNVSxVQUFVViw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUMzQyxNQUFNVyxVQUFVWCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUMzQyxNQUFNWSxPQUFPWiw2Q0FBTUEsQ0FBbUIsSUFBSTtJQUcxQyxNQUFNLENBQUNhLFFBQU9DLFVBQVUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUl6QyxNQUFNYyxrQkFBa0IsSUFBSztRQUM3QkMsUUFBUUMsR0FBRyxDQUFDSjtRQUNaQyxVQUFVLENBQUNEO0lBRVg7SUFFQSxNQUFNSyxxQkFBcUJwQiw0REFBU0EsQ0FBQztRQUVyQ3FCLElBQUc7WUFBQ0MsTUFBS1AsU0FBUSxRQUFRLENBQUNBLFNBQVEsU0FBUyxFQUFFO1FBQUE7UUFDN0NRLFFBQU87WUFBQ0MsVUFBVTtRQUFLO0lBR3ZCO0lBR0YsSUFBSUMsa0JBQWtCaEIsZ0RBQVNBLENBQUMsSUFBSTtRQUVsQ0QsdUVBQXVCQSxDQUFDSSxTQUFRLEtBQUk7SUFDdEM7SUFHRSxxQkFDRSw4REFBQ2M7UUFBSUMsS0FBS2hCO1FBQU1pQixXQUFVOzswQkFDdEIsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDZCw4REFBQ0Y7d0JBQUlDLEtBQUtmO3dCQUFTZ0IsV0FBVTtrQ0FBNkgsNEVBQUNyQixtREFBS0E7NEJBQUNzQixLQUFJOzRCQUFHQyxLQUFLMUIsd0VBQUlBOzRCQUFHd0IsV0FBVTs7Ozs7Ozs7Ozs7a0NBRTlMLDhEQUFDN0Isa0RBQUlBO3dCQUFDNkIsV0FBVTt3QkFBNkZHLE1BQU07OzRCQUFrQjswQ0FBQyw4REFBQ0w7Z0NBQUlFLFdBQVU7MENBQWtOOzs7Ozs7Ozs7Ozs7a0NBQ3pXLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FBeUUsNEVBQUNyQixtREFBS0E7NEJBQUV5QixTQUFTZjs0QkFBa0JXLFdBQVU7NEJBQTJERSxLQUFLekIseUVBQVVBOzRCQUFHd0IsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXROLDhEQUFDSDt3QkFBSUUsV0FBVTs7MENBQThFLDhEQUFDN0Isa0RBQUlBO2dDQUFDZ0MsTUFBTTtnQ0FBWUgsV0FBVTswQ0FBUyw0RUFBQ0Y7b0NBQUlFLFdBQVU7OENBQTJLOzs7Ozs7Ozs7OzswQ0FBa0IsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUEwSzs7Ozs7OzBDQUFhLDhEQUFDN0Isa0RBQUlBO2dDQUFDZ0MsTUFBTTtnQ0FBZ0JILFdBQVU7MENBQVMsNEVBQUNGO29DQUFJRSxXQUFVOzhDQUEySzs7Ozs7Ozs7Ozs7MENBQWtCLDhEQUFDN0Isa0RBQUlBO2dDQUFDNkIsV0FBVTtnQ0FBNENHLE1BQU07O29DQUFrQjtrREFBQyw4REFBQ0w7d0NBQUlFLFdBQVU7a0RBQStNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3ZrQyw4REFBQzNCLDJEQUFZO2dCQUFDZ0MsT0FBT2I7Z0JBQXNCTyxLQUFLZDtnQkFBU2UsV0FBWTs7a0NBQzdFLDhEQUFDRjt3QkFBTUUsV0FBVTtrQ0FBaUUsNEVBQUNyQixtREFBS0E7NEJBQUNvQixLQUFLYjs0QkFBT2tCLFNBQVNmOzRCQUFpQlcsV0FBVTs0QkFBMkRFLEtBQUt4QixtRUFBUUE7NEJBQUd1QixLQUFJOzs7Ozs7Ozs7OztrQ0FFeE4sOERBQUNIO3dCQUFJRSxXQUFVOzswQ0FDZiw4REFBQzdCLGtEQUFJQTtnQ0FBQ2dDLE1BQU07Z0NBQWdCSCxXQUFVOzBDQUFXLDRFQUFDRjtvQ0FBSUUsV0FBVTs4Q0FBTzs7Ozs7Ozs7Ozs7MENBQ3ZFLDhEQUFDRjtnQ0FBSUUsV0FBVTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQzdCLGtEQUFJQTtnQ0FBQ2dDLE1BQU07Z0NBQVlILFdBQVU7MENBQUcsNEVBQUNGO29DQUFJRSxXQUFVOzhDQUFPOzs7Ozs7Ozs7OzswQ0FDM0QsOERBQUNGO2dDQUFJRSxXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEI7O1FBL0M2QjVCLHdEQUFTQTs7OztRQUFUQSx3REFBU0E7O0dBK0NwQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvSG9tZVBhZ2UtQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeD9kZjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3J3YXJkZWRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3RydXN0bW9uaWFsb2cucG5nJ1xuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9NZW51TmF2aWdhdGlvbi5wbmcnXG5pbXBvcnQgZXhpdEljb24gZnJvbSAgJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvZXhpdGljb24ucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgZGlzcGxheURpdldoZW5QYWdlTG9hZHMgZnJvbSAnLi4vLi4vLi4vcHVibGljL3V0aWxpdGllcy9hbmltYXRpb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbXVpL21hdGVyaWFsL3VzZU1lZGlhUXVlcnknO1xuaW1wb3J0IHtzY3JlZW5Jc30gZnJvbSAnLi4vLi4vc2NyZWVuSXMuanN4J1xuXG5cbmV4cG9ydCAgY29uc3QgTmF2aWdhdGlvbkJhciA9IGZvcndhcmRSZWYoKCkgPT4ge1xuXG5cbiAgY29uc3QgbmF2ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBsb2dvRGl2ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBzaWRlQmFyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBpY29uID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpXG4gIFxuICBcbiAgY29uc3QgW2Nsb3NlZCxzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICBcbiAgXG4gIGNvbnN0IHRvb2dsZU1lbnVTdGF0ZSA9ICgpID0+e1xuICBjb25zb2xlLmxvZyhjbG9zZWQpXG4gIHNldENsb3NlZCghY2xvc2VkKVxuICBcbiAgfVxuICBcbiAgY29uc3QgbWVudVNsaWRlQW5pbWF0aW9uID0gdXNlU3ByaW5nKHtcbiAgXG4gIHRvOntsZWZ0OmNsb3NlZD8gJzUxJScgOiAhY2xvc2VkPyAnMTAwJScgOiAnJ30sXG4gIGNvbmZpZzp7ZHVyYXRpb246IDBvNTAwfVxuICBcbiAgXG4gIH0pXG4gIFxuICBcbmxldCByZW5kZXJBbmltYXRpb24gPSB1c2VFZmZlY3QoKCk9PntcblxuICBkaXNwbGF5RGl2V2hlblBhZ2VMb2Fkcyhsb2dvRGl2LDAuOCw2MDApXG59KVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bmF2fSAgY2xhc3NOYW1lPScgcmVsYXRpdmUgaC1bNXZ3XSBwb3J0cmFpdDpoLVsxNXZ3XSAgcG9ydHJhaXQ6c206aC1bMTB2d10gYmctZGFya2dyZWVuIHRleHQtbGlnaHQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcG9ydHJhaXQ6ZmxleC1jb2wnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdy1bOTUlXSBoLWZ1bGwgdGV4dC1bMS41dnddICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgIDxkaXYgcmVmPXtsb2dvRGl2fSBjbGFzc05hbWU9XCJsb2dvIG10LVstMTB2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgIGxhbmRzY2FwZTp3LVs1LjUlXSAgcG9ydHJhaXQ6dy1bMjAlXSAgcG9ydHJhaXQ6c206dy1bMTElXVwiPjxJbWFnZSBhbHQ9Jycgc3JjPXtsb2dvfSAgY2xhc3NOYW1lPScgb2JqZWN0LWNvbnRhaW4gIGFzcGVjdC1bNC8zXSAgbGFuZHNjYXBlOnctWzEwMHZ3XSAgcG9ydHJhaXQ6dy1bNTB2d10gIHBvcnRyYWl0OnNtOnctWzEwMHZ3XSAnIC8+PC9kaXY+ICBcblxuICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdsYW5kc2NhcGU6aGlkZGVuICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdGV4dC1bNHZ3XSBwb3J0cmFpdDpzbS1bNS41dnddICcgIGhyZWY9eycvYnVzaW5lc3MtcGFnZSd9PiA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzX3BhZ2UtYnRuIGZvbnQtTV9QTFVTXzEgcHgtWzIwcHhdIGJnLWdyZWVuIHRleHQtZGFya2dyZWVuICBjdXJzb3ItcG9pbnRlciBoLTQvNSByb3VuZGVkICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBhY3RpdmU6YmctYmx1ZSBob3Zlcjp0ZXh0LWRhcmtncmVlbiAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIFwiPkZvciBCdXNpbmVzczwvZGl2PjwvTGluaz5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgIGxhbmRzY2FwZTpoaWRkZW4gIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kICBcIj48SW1hZ2UgIG9uQ2xpY2s9e3Rvb2dsZU1lbnVTdGF0ZX0gIGNsYXNzTmFtZT0ndy1bMTB2d10gcG9ydHJhaXQ6c206dy1bNnZ3XSBvYmplY3QtY29udGFpbiBhc3BlY3QtWzQvM10nIHNyYz17YnVyZ2VyTWVudX0gIGFsdD0nJyAvPjwvZGl2PlxuICAgICAgIFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtcyBwb3J0cmFpdDpoaWRkZW4gaC1mdWxsIHctWzYwJV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PExpbmsgaHJlZj17Jy9BYm91dFVzJ30gY2xhc3NOYW1lPSdoLWZ1bGwnPjxkaXYgY2xhc3NOYW1lPVwibGlzdCAgcHgtWzIwcHhdICBjdXJzb3ItcG9pbnRlciBoLWZ1bGwgIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4gZHVyYXRpb24tWzAuNXNdIGhvdmVyOmJnLWdyZWVuIGhvdmVyOnRleHQtZGFya2dyZWVuICBob3Zlcjp0ZXh0LVsxLjd2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+QWJvdXQ8L2Rpdj48L0xpbms+PGRpdiBjbGFzc05hbWU9XCJsaXN0IHB4LVsyMHB4XSAgY3Vyc29yLXBvaW50ZXIgaC1mdWxsICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBob3ZlcjpiZy1ncmVlbiBob3Zlcjp0ZXh0LWRhcmtncmVlbiAgaG92ZXI6dGV4dC1bMS43dnddIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPkNvbnRhY3Q8L2Rpdj48TGluayBocmVmPXsnL1NjaG9vbExvZ2luJ30gY2xhc3NOYW1lPSdoLWZ1bGwnPjxkaXYgY2xhc3NOYW1lPVwibGlzdCBweC1bMS41dnddICBjdXJzb3ItcG9pbnRlciBoLWZ1bGwgIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4gZHVyYXRpb24tWzAuNXNdIGhvdmVyOmJnLWdyZWVuIGhvdmVyOnRleHQtZGFya2dyZWVuICBob3Zlcjp0ZXh0LVsxLjd2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+TG9naW48L2Rpdj48L0xpbms+PExpbmsgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgJyAgaHJlZj17Jy9idXNpbmVzcy1wYWdlJ30+IDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NfcGFnZS1idG4gZm9udC1qYW1ydWwgcHgtWzIwcHhdIGJnLWdyZWVuIHRleHQtZGFya2dyZWVuICBjdXJzb3ItcG9pbnRlciBoLTQvNSByb3VuZGVkICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBob3ZlcjpiZy1ibHVlIGhvdmVyOnRleHQtZGFya2dyZWVuICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+Rm9yIEJ1c2luZXNzPC9kaXY+PC9MaW5rPjwvZGl2PlxuICBcbiAgICAgICBcbiAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgICBcblxuXG4gICAgICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e21lbnVTbGlkZUFuaW1hdGlvbn0gICByZWY9e3NpZGVCYXJ9IGNsYXNzTmFtZT17YHNpZGViYXIgcm91bmRlZCBwbC1bMS4yJV0gdGV4dC1bNXZ3XSBwb3J0cmFpdDpzbS1bN3Z3XSAgdGV4dC1ncmV5IGxhbmRzY2FwZTpoaWRkZW4gIGgtWzQwMCVdIHBvcnRyYWl0OnNtOmgtWzYwMCVdIHctWzUwJV0gYmctZGFya2dyZWVuIGFic29sdXRlIHRvcC1bMTAlXSAgcG9ydHJhaXQ6c206dG9wLVsyMCVdICBmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kYH0+XG48ZGl2ICAgY2xhc3NOYW1lPVwiY2xvc2VpY29uIHByLVszJV0gY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj48SW1hZ2UgcmVmPXtpY29ufSAgb25DbGljaz17dG9vZ2xlTWVudVN0YXRlfSBjbGFzc05hbWU9J3ctWzEwdnddIHBvcnRyYWl0OnNtOnctWzZ2d10gb2JqZWN0LWNvbnRhaW4gYXNwZWN0LVs0LzNdJyBzcmM9e2V4aXRJY29ufSAgYWx0PScnIC8+PC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdHMgaC1bODAlXSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuPExpbmsgaHJlZj17Jy9TY2hvb2xMb2dpbid9IGNsYXNzTmFtZT0naC0gIGZ1bGwnPjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPkxvZ2luPC9kaXY+PC9MaW5rPlxuPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIgPkNhdGVnb3JpZXM8L2Rpdj5cbjxMaW5rIGhyZWY9eycvQWJvdXRVcyd9IGNsYXNzTmFtZT0nJz48ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5BYm91dCBVczwvZGl2PjwvTGluaz5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPkNvbnRhY3QgVXM8L2Rpdj5cblxuPC9kaXY+XG5cblxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJMaW5rIiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvZ28iLCJidXJnZXJNZW51IiwiZXhpdEljb24iLCJJbWFnZSIsImRpc3BsYXlEaXZXaGVuUGFnZUxvYWRzIiwidXNlRWZmZWN0IiwiTmF2aWdhdGlvbkJhciIsIm5hdiIsImxvZ29EaXYiLCJzaWRlQmFyIiwiaWNvbiIsImNsb3NlZCIsInNldENsb3NlZCIsInRvb2dsZU1lbnVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtZW51U2xpZGVBbmltYXRpb24iLCJ0byIsImxlZnQiLCJjb25maWciLCJkdXJhdGlvbiIsInJlbmRlckFuaW1hdGlvbiIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImhyZWYiLCJvbkNsaWNrIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/HomePage-Components/NavigationBar.tsx\n"));

/***/ })

});