"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/business-page",{

/***/ "./src/pages/BusinessPage-Components/NavigationBar.tsx":
/*!*************************************************************!*\
  !*** ./src/pages/BusinessPage-Components/NavigationBar.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/esm/index.js\");\n/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @preact/signals-react */ \"./node_modules/@preact/signals-react/dist/signals.module.js\");\n/* harmony import */ var _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/trustmonialog.png */ \"./public/assets/trustmonialog.png\");\n/* harmony import */ var _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/MenuNavigation.png */ \"./public/assets/MenuNavigation.png\");\n/* harmony import */ var _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/assets/exiticon.png */ \"./public/assets/exiticon.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction NavigationBar() {\n    _s();\n    const nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const sideBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const Open = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_4__.signal)(false);\n    const Left = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_4__.signal)(\"51%\");\n    const [eft, seteft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"51%\");\n    const [closed, setClosed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toogleMenuState = (event)=>{\n        console.log(closed);\n        setClosed(true);\n    };\n    const propss = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring)({\n        to: {\n            left: closed ? \"0%\" : !closed ? \"100%\" : \"\"\n        },\n        config: {\n            duration: 1000\n        }\n    });\n    const handleClick = (event)=>{\n        Left.value = \"100%\";\n        seteft(\"100%\");\n    // if (sideBar.current) {\n    //   gsap.to(sideBar,{left:'100%', duration : 2 })  \n    // }\n    };\n    const sayHi = (name)=>{\n        alert(\"hello \".concat(name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // if (sideBar.current) {\n    //   sideBar.current.style.left = Open? '51%' : !Open? '100%' : '';\n    // } \n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: nav,\n        onClick: handleClick,\n        className: \" relative  h-[5vw] w-full portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content w-[95%] h-full text-[1.5vw]  flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo  flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            alt: \"\",\n                            src: _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            className: \" object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] \"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 140\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] \",\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"business_page-btn font-M_PLUS_1 px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-green hover:text-darkgreen  flex items-center justify-between \",\n                                children: \"For Customers\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 131\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu  landscape:hidden  cursor-pointer flex items-center justify-end  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 96\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"list-items portrait:hidden h-full w-[60%] flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 101\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 297\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 494\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"flex justify-center items-center h-full \",\n                                href: \"/\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between \",\n                                        children: \"For Schools\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 762\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 690\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.animated.div, {\n                style: propss,\n                ref: sideBar,\n                className: \"sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[400%] portrait:sm:h-[80%] w-[50%] bg-darkgreen absolute top-[70%] left-[\".concat(eft, \"] flex flex-col justify-around\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"closeicon pr-[3%] cursor-pointer flex items-center justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            ref: icon,\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 83\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lists h-[80%] flex flex-col justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                onClick: ()=>{\n                                    sayHi(\"precious\");\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"About Trustmonia\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Contact Trustmonia\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(NavigationBar, \"L5zSOVZEmUlYTowr2INYgk4Kw/s=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_3__.useSpring\n    ];\n});\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQnVzaW5lc3NQYWdlLUNvbXBvbmVudHMvTmF2aWdhdGlvbkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNuQztBQUU0QjtBQUVaO0FBQ2Q7QUFDNkI7QUFDTztBQUNSO0FBQzVCO0FBQ0c7QUFJbEIsU0FBU1ksZ0JBQWdCOztJQUV4QyxNQUFNQyxNQUFNUCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUN2QyxNQUFNUSxVQUFVUiw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUMzQyxNQUFNUyxPQUFPVCw2Q0FBTUEsQ0FBbUIsSUFBSTtJQUUxQyxNQUFNVSxPQUFPWCw2REFBTUEsQ0FBQyxLQUFLO0lBQ3pCLE1BQU1ZLE9BQU9aLDZEQUFNQSxDQUFDO0lBQ3BCLE1BQU0sQ0FBQ2EsS0FBSUMsT0FBTyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDOUIsTUFBTSxDQUFDbUIsUUFBT0MsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUl6QyxNQUFNcUIsa0JBQWtCLENBQUNDLFFBQW9CO1FBQzdDQyxRQUFRQyxHQUFHLENBQUNMO1FBQ1pDLFVBQVUsSUFBSTtJQUVkO0lBRUEsTUFBTUssU0FBU3ZCLDREQUFTQSxDQUFDO1FBRXpCd0IsSUFBRztZQUFDQyxNQUFLUixTQUFRLE9BQU8sQ0FBQ0EsU0FBUSxTQUFTLEVBQUU7UUFBQTtRQUM1Q1MsUUFBTztZQUFDQyxVQUFVO1FBQUk7SUFHdEI7SUFFQSxNQUFNQyxjQUFjLENBQUNSLFFBQW9CO1FBRXpDTixLQUFLZSxLQUFLLEdBQUc7UUFDYmIsT0FBTztJQUlMLHlCQUF5QjtJQUd6QixvREFBb0Q7SUFDcEQsSUFBSTtJQUNOO0lBQ0EsTUFBTWMsUUFBUSxDQUFDQyxPQUFpQjtRQUNoQ0MsTUFBTSxTQUFjLE9BQUxEO0lBQ2Y7SUFFQXZCLGdEQUFTQSxDQUFDLElBQUk7SUFFWix5QkFBeUI7SUFDekIsbUVBQW1FO0lBQ25FLEtBQUs7SUFLUDtJQUdFLHFCQUNFLDhEQUFDeUI7UUFBSUMsS0FBS3hCO1FBQUt5QixTQUFTUDtRQUFjUSxXQUFVOzswQkFDNUMsOERBQUNIO2dCQUFJRyxXQUFVOztrQ0FDZCw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQW1ILDRFQUFDN0IsbURBQUtBOzRCQUFDOEIsS0FBSTs0QkFBR0MsS0FBS2xDLHdFQUFJQTs0QkFBR2dDLFdBQVU7Ozs7Ozs7Ozs7O2tDQUV0Syw4REFBQ3JDLGtEQUFJQTt3QkFBQ3FDLFdBQVU7d0JBQTZGRyxNQUFNOzs0QkFBSzswQ0FBQyw4REFBQ047Z0NBQUlHLFdBQVU7MENBQWtOOzs7Ozs7Ozs7Ozs7a0NBQzVWLDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FBeUUsNEVBQUM3QixtREFBS0E7NEJBQUU0QixTQUFTaEI7NEJBQWtCaUIsV0FBVTs0QkFBMkRFLEtBQUtqQyx5RUFBVUE7NEJBQUdnQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFdE4sOERBQUNKO3dCQUFJRyxXQUFVOzswQ0FBOEUsOERBQUNIO2dDQUFJRyxXQUFVOzBDQUEwSzs7Ozs7OzBDQUFXLDhEQUFDSDtnQ0FBSUcsV0FBVTswQ0FBeUs7Ozs7OzswQ0FBYSw4REFBQ0g7Z0NBQUlHLFdBQVU7MENBQTBLOzs7Ozs7MENBQVcsOERBQUNyQyxrREFBSUE7Z0NBQUNxQyxXQUFVO2dDQUE0Q0csTUFBTTs7b0NBQUs7a0RBQUMsOERBQUNOO3dDQUFJRyxXQUFVO2tEQUErTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU0vOEIsOERBQUNuQywyREFBWTtnQkFBQ3VDLE9BQU9qQjtnQkFBVVcsS0FBS3ZCO2dCQUFTeUIsV0FBVyxrS0FBc0ssT0FBSnJCLEtBQUk7O2tDQUN0Tyw4REFBQ2tCO3dCQUFNRyxXQUFVO2tDQUFpRSw0RUFBQzdCLG1EQUFLQTs0QkFBQzJCLEtBQUt0Qjs0QkFBT3VCLFNBQVNoQjs0QkFBaUJpQixXQUFVOzRCQUEyREUsS0FBS2hDLG1FQUFRQTs0QkFBRytCLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV4Tiw4REFBQ0o7d0JBQUlHLFdBQVU7OzBDQUNmLDhEQUFDSDtnQ0FBSUcsV0FBVTtnQ0FBT0QsU0FBUyxJQUFJO29DQUFDTCxNQUFNO2dDQUFXOzBDQUFHOzs7Ozs7MENBQ3hELDhEQUFDRztnQ0FBSUcsV0FBVTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0g7Z0NBQUlHLFdBQVU7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNIO2dDQUFJRyxXQUFVOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEIsQ0FBQztHQXRGdUIzQjs7UUFtQlRULHdEQUFTQTs7O0tBbkJBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQnVzaW5lc3NQYWdlLUNvbXBvbmVudHMvTmF2aWdhdGlvbkJhci50c3g/ZWRjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgLE1vdXNlRXZlbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAndXRpbCdcbmltcG9ydCB7c2lnbmFsfSBmcm9tICdAcHJlYWN0L3NpZ25hbHMtcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvdHJ1c3Rtb25pYWxvZy5wbmcnXG5pbXBvcnQgYnVyZ2VyTWVudSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL01lbnVOYXZpZ2F0aW9uLnBuZydcbmltcG9ydCBleGl0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2V4aXRpY29uLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKCkge1xuXG5jb25zdCBuYXYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5jb25zdCBzaWRlQmFyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuY29uc3QgaWNvbiA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKVxuXG5jb25zdCBPcGVuID0gc2lnbmFsKGZhbHNlKVxuY29uc3QgTGVmdCA9IHNpZ25hbCgnNTElJylcbmNvbnN0IFtlZnQsc2V0ZWZ0XSA9IHVzZVN0YXRlKCc1MSUnKVxuY29uc3QgW2Nsb3NlZCxzZXRDbG9zZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuXG5jb25zdCB0b29nbGVNZW51U3RhdGUgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT57XG5jb25zb2xlLmxvZyhjbG9zZWQpXG5zZXRDbG9zZWQodHJ1ZSlcblxufVxuXG5jb25zdCBwcm9wc3MgPSB1c2VTcHJpbmcoe1xuXG50bzp7bGVmdDpjbG9zZWQ/ICcwJScgOiAhY2xvc2VkPyAnMTAwJScgOiAnJ30sXG5jb25maWc6e2R1cmF0aW9uOiAxMDAwfVxuXG5cbn0pXG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50Ok1vdXNlRXZlbnQpID0+e1xuXG5MZWZ0LnZhbHVlID0gJzEwMCUnXG5zZXRlZnQoJzEwMCUnKVxuXG5cblxuICAvLyBpZiAoc2lkZUJhci5jdXJyZW50KSB7XG4gIFxuXG4gIC8vICAgZ3NhcC50byhzaWRlQmFyLHtsZWZ0OicxMDAlJywgZHVyYXRpb24gOiAyIH0pICBcbiAgLy8gfVxufVxuY29uc3Qgc2F5SGkgPSAobmFtZSA6IHN0cmluZykgPT57XG5hbGVydChgaGVsbG8gJHtuYW1lfWApXG59XG5cbnVzZUVmZmVjdCgoKT0+e1xuICBcbiAgLy8gaWYgKHNpZGVCYXIuY3VycmVudCkge1xuICAvLyAgIHNpZGVCYXIuY3VycmVudC5zdHlsZS5sZWZ0ID0gT3Blbj8gJzUxJScgOiAhT3Blbj8gJzEwMCUnIDogJyc7XG4gIC8vIH0gXG5cblxuICBcbiBcbn0pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtuYXZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAgY2xhc3NOYW1lPScgcmVsYXRpdmUgIGgtWzV2d10gdy1mdWxsIHBvcnRyYWl0OmgtWzE1dnddICBwb3J0cmFpdDpzbTpoLVsxMHZ3XSBiZy1kYXJrZ3JlZW4gdGV4dC1saWdodCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwb3J0cmFpdDpmbGV4LWNvbCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB3LVs5NSVdIGgtZnVsbCB0ZXh0LVsxLjV2d10gIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlciAgbGFuZHNjYXBlOnctWzUuNSVdICBwb3J0cmFpdDp3LVsyMCVdICBwb3J0cmFpdDpzbTp3LVsxMSVdXCI+PEltYWdlIGFsdD0nJyBzcmM9e2xvZ299ICBjbGFzc05hbWU9JyBvYmplY3QtY29udGFpbiAgYXNwZWN0LVs0LzNdICBsYW5kc2NhcGU6dy1bMTAwdnddICBwb3J0cmFpdDp3LVs1MHZ3XSAgcG9ydHJhaXQ6c206dy1bMTAwdnddICcgLz48L2Rpdj4gIFxuXG4gICAgICAgICA8TGluayBjbGFzc05hbWU9J2xhbmRzY2FwZTpoaWRkZW4gIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB0ZXh0LVs0dnddIHBvcnRyYWl0OnNtLVs1LjV2d10gJyAgaHJlZj17Jy8nfT4gPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzc19wYWdlLWJ0biBmb250LU1fUExVU18xIHB4LVsyMHB4XSBiZy1ibHVlIHRleHQtZGFya2dyZWVuICBjdXJzb3ItcG9pbnRlciBoLTQvNSByb3VuZGVkICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBhY3RpdmU6YmctZ3JlZW4gaG92ZXI6dGV4dC1kYXJrZ3JlZW4gIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5Gb3IgQ3VzdG9tZXJzPC9kaXY+PC9MaW5rPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSAgbGFuZHNjYXBlOmhpZGRlbiAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgIFwiPjxJbWFnZSAgb25DbGljaz17dG9vZ2xlTWVudVN0YXRlfSAgY2xhc3NOYW1lPSd3LVsxMHZ3XSBwb3J0cmFpdDpzbTp3LVs2dnddIG9iamVjdC1jb250YWluIGFzcGVjdC1bNC8zXScgc3JjPXtidXJnZXJNZW51fSAgYWx0PScnIC8+PC9kaXY+XG5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbXMgcG9ydHJhaXQ6aGlkZGVuIGgtZnVsbCB3LVs2MCVdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPjxkaXYgY2xhc3NOYW1lPVwibGlzdCAgcHgtWzIwcHhdICBjdXJzb3ItcG9pbnRlciBoLWZ1bGwgIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4gZHVyYXRpb24tWzAuNXNdIGhvdmVyOmJnLWJsdWUgaG92ZXI6dGV4dC1kYXJrZ3JlZW4gIGhvdmVyOnRleHQtWzEuN3Z3XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5BYm91dDwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibGlzdCBweC1bMjBweF0gIGN1cnNvci1wb2ludGVyIGgtZnVsbCAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBkdXJhdGlvbi1bMC41c10gaG92ZXI6YmctYmx1ZSBob3Zlcjp0ZXh0LWRhcmtncmVlbiAgaG92ZXI6dGV4dC1bMS43dnddIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPkNvbnRhY3Q8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImxpc3QgcHgtWzEuNXZ3XSAgY3Vyc29yLXBvaW50ZXIgaC1mdWxsICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBob3ZlcjpiZy1ibHVlIGhvdmVyOnRleHQtZGFya2dyZWVuICBob3Zlcjp0ZXh0LVsxLjd2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+TG9naW48L2Rpdj48TGluayBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCAnICBocmVmPXsnLyd9PiA8ZGl2IGNsYXNzTmFtZT1cImJ1c2luZXNzX3BhZ2UtYnRuIGZvbnQtamFtcnVsIHB4LVsyMHB4XSBiZy1ibHVlIHRleHQtZGFya2dyZWVuICBjdXJzb3ItcG9pbnRlciBoLTQvNSByb3VuZGVkICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBob3ZlcjpiZy1ncmVlbiBob3Zlcjp0ZXh0LWRhcmtncmVlbiAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIFwiPkZvciBTY2hvb2xzPC9kaXY+PC9MaW5rPjwvZGl2PlxuXG4gICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwcm9wc3N9ICAgcmVmPXtzaWRlQmFyfSBjbGFzc05hbWU9e2BzaWRlYmFyIHJvdW5kZWQgcGwtWzEuMiVdIHRleHQtWzV2d10gcG9ydHJhaXQ6c20tWzd2d10gIHRleHQtZ3JleSBsYW5kc2NhcGU6aGlkZGVuICBoLVs0MDAlXSBwb3J0cmFpdDpzbTpoLVs4MCVdIHctWzUwJV0gYmctZGFya2dyZWVuIGFic29sdXRlIHRvcC1bNzAlXSBsZWZ0LVske2VmdH1dIGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmRgfT5cbjxkaXYgICBjbGFzc05hbWU9XCJjbG9zZWljb24gcHItWzMlXSBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPjxJbWFnZSByZWY9e2ljb259ICBvbkNsaWNrPXt0b29nbGVNZW51U3RhdGV9IGNsYXNzTmFtZT0ndy1bMTB2d10gcG9ydHJhaXQ6c206dy1bNnZ3XSBvYmplY3QtY29udGFpbiBhc3BlY3QtWzQvM10nIHNyYz17ZXhpdEljb259ICBhbHQ9JycgLz48L2Rpdj5cblxuPGRpdiBjbGFzc05hbWU9XCJsaXN0cyBoLVs4MCVdIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG48ZGl2IGNsYXNzTmFtZT1cImxpc3RcIiBvbkNsaWNrPXsoKT0+e3NheUhpKCdwcmVjaW91cycpfX0+TG9naW48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiID5DYXRlZ29yaWVzPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5BYm91dCBUcnVzdG1vbmlhPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5Db250YWN0IFRydXN0bW9uaWE8L2Rpdj5cblxuPC9kaXY+XG5cblxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVNwcmluZyIsImFuaW1hdGVkIiwic2lnbmFsIiwidXNlUmVmIiwibG9nbyIsImJ1cmdlck1lbnUiLCJleGl0SWNvbiIsIkltYWdlIiwidXNlRWZmZWN0IiwiTmF2aWdhdGlvbkJhciIsIm5hdiIsInNpZGVCYXIiLCJpY29uIiwiT3BlbiIsIkxlZnQiLCJlZnQiLCJzZXRlZnQiLCJjbG9zZWQiLCJzZXRDbG9zZWQiLCJ0b29nbGVNZW51U3RhdGUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wc3MiLCJ0byIsImxlZnQiLCJjb25maWciLCJkdXJhdGlvbiIsImhhbmRsZUNsaWNrIiwidmFsdWUiLCJzYXlIaSIsIm5hbWUiLCJhbGVydCIsImRpdiIsInJlZiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJocmVmIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/BusinessPage-Components/NavigationBar.tsx\n"));

/***/ })

});