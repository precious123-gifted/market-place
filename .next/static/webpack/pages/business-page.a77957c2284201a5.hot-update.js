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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @preact/signals-react */ \"./node_modules/@preact/signals-react/dist/signals.module.js\");\n/* harmony import */ var _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/trustmonialog.png */ \"./public/assets/trustmonialog.png\");\n/* harmony import */ var _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/MenuNavigation.png */ \"./public/assets/MenuNavigation.png\");\n/* harmony import */ var _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/assets/exiticon.png */ \"./public/assets/exiticon.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin();\n\n\n\n\n\n\n\nfunction NavigationBar() {\n    _s();\n    const nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const sideBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const icon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const Open = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_4__.signal)(false);\n    const Left = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_4__.signal)(\"51%\");\n    const [eft, seteft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"51%\");\n    const toogleMenuState = (event)=>{\n        console.log(\"\".concat(Open));\n        Open.value = !Open.value;\n    };\n    const handleClick = (event)=>{\n        Left.value = \"100%\";\n        seteft(\"100%\");\n        if (sideBar.current) {\n            gsap__WEBPACK_IMPORTED_MODULE_3__.TweenMax.to(sideBar, {\n                left: \"100%\",\n                duration: 2\n            });\n        }\n    };\n    const sayHi = (name)=>{\n        alert(\"hello \".concat(name));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // if (sideBar.current) {\n    //   sideBar.current.style.left = Open? '51%' : !Open? '100%' : '';\n    // } \n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: nav,\n        onClick: handleClick,\n        className: \" relative  h-[5vw] w-full portrait:h-[15vw]  portrait:sm:h-[10vw] bg-darkgreen text-light flex items-center justify-center portrait:flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content w-[95%] h-full text-[1.5vw]  flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo  flex items-center justify-center cursor-pointer  landscape:w-[5.5%]  portrait:w-[20%]  portrait:sm:w-[11%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            alt: \"\",\n                            src: _public_assets_trustmonialog_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            className: \" object-contain  aspect-[4/3]  landscape:w-[100vw]  portrait:w-[50vw]  portrait:sm:w-[100vw] \"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 140\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"landscape:hidden  flex justify-center items-center h-full text-[4vw] portrait:sm-[5.5vw] \",\n                        href: \"/\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"business_page-btn font-M_PLUS_1 px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] active:bg-green hover:text-darkgreen  flex items-center justify-between \",\n                                children: \"For Customers\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 131\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu  landscape:hidden  cursor-pointer flex items-center justify-end  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_MenuNavigation_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 96\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"list-items portrait:hidden h-full w-[60%] flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list  px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 101\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list px-[20px]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 297\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list px-[1.5vw]  cursor-pointer h-full  transition-all ease-in duration-[0.5s] hover:bg-blue hover:text-darkgreen  hover:text-[1.7vw] flex items-center justify-between\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 494\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                className: \"flex justify-center items-center h-full \",\n                                href: \"/\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"business_page-btn font-jamrul px-[20px] bg-blue text-darkgreen  cursor-pointer h-4/5 rounded  transition-all ease-in duration-[0.5s] hover:bg-green hover:text-darkgreen  flex items-center justify-between \",\n                                        children: \"For Schools\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 762\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 690\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: sideBar,\n                className: \"sidebar rounded pl-[1.2%] text-[5vw] portrait:sm-[7vw]  text-grey landscape:hidden  h-[400%] portrait:sm:h-[80%] w-[50%] bg-darkgreen absolute top-[70%] left-[\".concat(eft, \"] flex flex-col justify-around\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"closeicon pr-[3%] cursor-pointer flex items-center justify-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            ref: icon,\n                            onClick: toogleMenuState,\n                            className: \"w-[10vw] portrait:sm:w-[6vw] object-contain aspect-[4/3]\",\n                            src: _public_assets_exiticon_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 83\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lists h-[80%] flex flex-col justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                onClick: ()=>{\n                                    sayHi(\"precious\");\n                                },\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Categories\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"About Trustmonia\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 1\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"list\",\n                                children: \"Contact Trustmonia\"\n                            }, void 0, false, {\n                                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 1\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/precious/Desktop/market-place/src/pages/BusinessPage-Components/NavigationBar.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(NavigationBar, \"OToPUgg8y66FmAKjECsnxjK4Eyc=\");\n_c = NavigationBar;\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQnVzaW5lc3NQYWdlLUNvbXBvbmVudHMvTmF2aWdhdGlvbkJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNuQztBQUNEO0FBQ0k7QUFDL0JHLHFEQUFtQjtBQUV5QjtBQUNkO0FBQzZCO0FBQ087QUFDUjtBQUM1QjtBQUNHO0FBSWxCLFNBQVNVLGdCQUFnQjs7SUFFeEMsTUFBTUMsTUFBTVAsNkNBQU1BLENBQWlCLElBQUk7SUFDdkMsTUFBTVEsVUFBVVIsNkNBQU1BLENBQWlCLElBQUk7SUFDM0MsTUFBTVMsT0FBT1QsNkNBQU1BLENBQW1CLElBQUk7SUFFMUMsTUFBTVUsT0FBT1gsNkRBQU1BLENBQUMsS0FBSztJQUN6QixNQUFNWSxPQUFPWiw2REFBTUEsQ0FBQztJQUNwQixNQUFNLENBQUNhLEtBQUlDLE9BQU8sR0FBR25CLCtDQUFRQSxDQUFDO0lBRTlCLE1BQU1vQixrQkFBa0IsQ0FBQ0MsUUFBb0I7UUFDN0NDLFFBQVFDLEdBQUcsQ0FBQyxHQUFRLE9BQUxQO1FBQ2ZBLEtBQUtRLEtBQUssR0FBRyxDQUFDUixLQUFLUSxLQUFLO0lBRXhCO0lBRUEsTUFBTUMsY0FBYyxDQUFDSixRQUFvQjtRQUV6Q0osS0FBS08sS0FBSyxHQUFHO1FBQ2JMLE9BQU87UUFFTCxJQUFJTCxRQUFRWSxPQUFPLEVBQUU7WUFHbkJ2Qiw2Q0FBVyxDQUFDVyxTQUFRO2dCQUFDYyxNQUFLO2dCQUFRQyxVQUFXO1lBQUU7UUFDakQsQ0FBQztJQUNIO0lBQ0EsTUFBTUMsUUFBUSxDQUFDQyxPQUFpQjtRQUNoQ0MsTUFBTSxTQUFjLE9BQUxEO0lBQ2Y7SUFFQXBCLGdEQUFTQSxDQUFDLElBQUk7SUFFWix5QkFBeUI7SUFDekIsbUVBQW1FO0lBQ25FLEtBQUs7SUFLUDtJQUdFLHFCQUNFLDhEQUFDc0I7UUFBSUMsS0FBS3JCO1FBQUtzQixTQUFTVjtRQUFjVyxXQUFVOzswQkFDNUMsOERBQUNIO2dCQUFJRyxXQUFVOztrQ0FDZCw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQW1ILDRFQUFDMUIsbURBQUtBOzRCQUFDMkIsS0FBSTs0QkFBR0MsS0FBSy9CLHdFQUFJQTs0QkFBRzZCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUV0Syw4REFBQ25DLGtEQUFJQTt3QkFBQ21DLFdBQVU7d0JBQTZGRyxNQUFNOzs0QkFBSzswQ0FBQyw4REFBQ047Z0NBQUlHLFdBQVU7MENBQWtOOzs7Ozs7Ozs7Ozs7a0NBQzVWLDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FBeUUsNEVBQUMxQixtREFBS0E7NEJBQUV5QixTQUFTZjs0QkFBa0JnQixXQUFVOzRCQUEyREUsS0FBSzlCLHlFQUFVQTs0QkFBRzZCLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV0Tiw4REFBQ0o7d0JBQUlHLFdBQVU7OzBDQUE4RSw4REFBQ0g7Z0NBQUlHLFdBQVU7MENBQTBLOzs7Ozs7MENBQVcsOERBQUNIO2dDQUFJRyxXQUFVOzBDQUF5Szs7Ozs7OzBDQUFhLDhEQUFDSDtnQ0FBSUcsV0FBVTswQ0FBMEs7Ozs7OzswQ0FBVyw4REFBQ25DLGtEQUFJQTtnQ0FBQ21DLFdBQVU7Z0NBQTRDRyxNQUFNOztvQ0FBSztrREFBQyw4REFBQ047d0NBQUlHLFdBQVU7a0RBQStNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS84Qiw4REFBQ0g7Z0JBQUlDLEtBQUtwQjtnQkFBU3NCLFdBQVcsa0tBQXNLLE9BQUpsQixLQUFJOztrQ0FDNU0sOERBQUNlO3dCQUFNRyxXQUFVO2tDQUFpRSw0RUFBQzFCLG1EQUFLQTs0QkFBQ3dCLEtBQUtuQjs0QkFBT29CLFNBQVNmOzRCQUFpQmdCLFdBQVU7NEJBQTJERSxLQUFLN0IsbUVBQVFBOzRCQUFHNEIsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXhOLDhEQUFDSjt3QkFBSUcsV0FBVTs7MENBQ2YsOERBQUNIO2dDQUFJRyxXQUFVO2dDQUFPRCxTQUFTLElBQUk7b0NBQUNMLE1BQU07Z0NBQVc7MENBQUc7Ozs7OzswQ0FDeEQsOERBQUNHO2dDQUFJRyxXQUFVOzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDSDtnQ0FBSUcsV0FBVTswQ0FBTzs7Ozs7OzBDQUN0Qiw4REFBQ0g7Z0NBQUlHLFdBQVU7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN0QixDQUFDO0dBekV1QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9CdXNpbmVzc1BhZ2UtQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLnRzeD9lZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCAsTW91c2VFdmVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBUd2Vlbk1heCB9IGZyb20gJ2dzYXAnXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKClcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAndXRpbCdcbmltcG9ydCB7c2lnbmFsfSBmcm9tICdAcHJlYWN0L3NpZ25hbHMtcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvdHJ1c3Rtb25pYWxvZy5wbmcnXG5pbXBvcnQgYnVyZ2VyTWVudSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL01lbnVOYXZpZ2F0aW9uLnBuZydcbmltcG9ydCBleGl0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2V4aXRpY29uLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKCkge1xuXG5jb25zdCBuYXYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5jb25zdCBzaWRlQmFyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuY29uc3QgaWNvbiA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKVxuXG5jb25zdCBPcGVuID0gc2lnbmFsKGZhbHNlKVxuY29uc3QgTGVmdCA9IHNpZ25hbCgnNTElJylcbmNvbnN0IFtlZnQsc2V0ZWZ0XSA9IHVzZVN0YXRlKCc1MSUnKVxuXG5jb25zdCB0b29nbGVNZW51U3RhdGUgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT57XG5jb25zb2xlLmxvZyhgJHtPcGVufWApXG5PcGVuLnZhbHVlID0gIU9wZW4udmFsdWVcblxufVxuXG5jb25zdCBoYW5kbGVDbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PntcblxuTGVmdC52YWx1ZSA9ICcxMDAlJ1xuc2V0ZWZ0KCcxMDAlJylcblxuICBpZiAoc2lkZUJhci5jdXJyZW50KSB7XG4gIFxuXG4gICAgVHdlZW5NYXgudG8oc2lkZUJhcix7bGVmdDonMTAwJScsIGR1cmF0aW9uIDogMiB9KSAgXG4gIH1cbn1cbmNvbnN0IHNheUhpID0gKG5hbWUgOiBzdHJpbmcpID0+e1xuYWxlcnQoYGhlbGxvICR7bmFtZX1gKVxufVxuXG51c2VFZmZlY3QoKCk9PntcbiAgXG4gIC8vIGlmIChzaWRlQmFyLmN1cnJlbnQpIHtcbiAgLy8gICBzaWRlQmFyLmN1cnJlbnQuc3R5bGUubGVmdCA9IE9wZW4/ICc1MSUnIDogIU9wZW4/ICcxMDAlJyA6ICcnO1xuICAvLyB9IFxuXG5cbiAgXG4gXG59KVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bmF2fSBvbkNsaWNrPXtoYW5kbGVDbGlja30gIGNsYXNzTmFtZT0nIHJlbGF0aXZlICBoLVs1dnddIHctZnVsbCBwb3J0cmFpdDpoLVsxNXZ3XSAgcG9ydHJhaXQ6c206aC1bMTB2d10gYmctZGFya2dyZWVuIHRleHQtbGlnaHQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcG9ydHJhaXQ6ZmxleC1jb2wnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdy1bOTUlXSBoLWZ1bGwgdGV4dC1bMS41dnddICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgIGxhbmRzY2FwZTp3LVs1LjUlXSAgcG9ydHJhaXQ6dy1bMjAlXSAgcG9ydHJhaXQ6c206dy1bMTElXVwiPjxJbWFnZSBhbHQ9Jycgc3JjPXtsb2dvfSAgY2xhc3NOYW1lPScgb2JqZWN0LWNvbnRhaW4gIGFzcGVjdC1bNC8zXSAgbGFuZHNjYXBlOnctWzEwMHZ3XSAgcG9ydHJhaXQ6dy1bNTB2d10gIHBvcnRyYWl0OnNtOnctWzEwMHZ3XSAnIC8+PC9kaXY+ICBcblxuICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdsYW5kc2NhcGU6aGlkZGVuICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdGV4dC1bNHZ3XSBwb3J0cmFpdDpzbS1bNS41dnddICcgIGhyZWY9eycvJ30+IDxkaXYgY2xhc3NOYW1lPVwiYnVzaW5lc3NfcGFnZS1idG4gZm9udC1NX1BMVVNfMSBweC1bMjBweF0gYmctYmx1ZSB0ZXh0LWRhcmtncmVlbiAgY3Vyc29yLXBvaW50ZXIgaC00LzUgcm91bmRlZCAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBkdXJhdGlvbi1bMC41c10gYWN0aXZlOmJnLWdyZWVuIGhvdmVyOnRleHQtZGFya2dyZWVuICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+Rm9yIEN1c3RvbWVyczwvZGl2PjwvTGluaz5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgIGxhbmRzY2FwZTpoaWRkZW4gIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kICBcIj48SW1hZ2UgIG9uQ2xpY2s9e3Rvb2dsZU1lbnVTdGF0ZX0gIGNsYXNzTmFtZT0ndy1bMTB2d10gcG9ydHJhaXQ6c206dy1bNnZ3XSBvYmplY3QtY29udGFpbiBhc3BlY3QtWzQvM10nIHNyYz17YnVyZ2VyTWVudX0gIGFsdD0nJyAvPjwvZGl2PlxuXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1zIHBvcnRyYWl0OmhpZGRlbiBoLWZ1bGwgdy1bNjAlXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj48ZGl2IGNsYXNzTmFtZT1cImxpc3QgIHB4LVsyMHB4XSAgY3Vyc29yLXBvaW50ZXIgaC1mdWxsICB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLVswLjVzXSBob3ZlcjpiZy1ibHVlIGhvdmVyOnRleHQtZGFya2dyZWVuICBob3Zlcjp0ZXh0LVsxLjd2d10gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+QWJvdXQ8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImxpc3QgcHgtWzIwcHhdICBjdXJzb3ItcG9pbnRlciBoLWZ1bGwgIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4gZHVyYXRpb24tWzAuNXNdIGhvdmVyOmJnLWJsdWUgaG92ZXI6dGV4dC1kYXJrZ3JlZW4gIGhvdmVyOnRleHQtWzEuN3Z3XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5Db250YWN0PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJsaXN0IHB4LVsxLjV2d10gIGN1cnNvci1wb2ludGVyIGgtZnVsbCAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBkdXJhdGlvbi1bMC41c10gaG92ZXI6YmctYmx1ZSBob3Zlcjp0ZXh0LWRhcmtncmVlbiAgaG92ZXI6dGV4dC1bMS43dnddIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPkxvZ2luPC9kaXY+PExpbmsgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgJyAgaHJlZj17Jy8nfT4gPGRpdiBjbGFzc05hbWU9XCJidXNpbmVzc19wYWdlLWJ0biBmb250LWphbXJ1bCBweC1bMjBweF0gYmctYmx1ZSB0ZXh0LWRhcmtncmVlbiAgY3Vyc29yLXBvaW50ZXIgaC00LzUgcm91bmRlZCAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBkdXJhdGlvbi1bMC41c10gaG92ZXI6YmctZ3JlZW4gaG92ZXI6dGV4dC1kYXJrZ3JlZW4gIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcIj5Gb3IgU2Nob29sczwvZGl2PjwvTGluaz48L2Rpdj5cblxuICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiByZWY9e3NpZGVCYXJ9IGNsYXNzTmFtZT17YHNpZGViYXIgcm91bmRlZCBwbC1bMS4yJV0gdGV4dC1bNXZ3XSBwb3J0cmFpdDpzbS1bN3Z3XSAgdGV4dC1ncmV5IGxhbmRzY2FwZTpoaWRkZW4gIGgtWzQwMCVdIHBvcnRyYWl0OnNtOmgtWzgwJV0gdy1bNTAlXSBiZy1kYXJrZ3JlZW4gYWJzb2x1dGUgdG9wLVs3MCVdIGxlZnQtWyR7ZWZ0fV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZGB9PlxuPGRpdiAgIGNsYXNzTmFtZT1cImNsb3NlaWNvbiBwci1bMyVdIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kXCI+PEltYWdlIHJlZj17aWNvbn0gIG9uQ2xpY2s9e3Rvb2dsZU1lbnVTdGF0ZX0gY2xhc3NOYW1lPSd3LVsxMHZ3XSBwb3J0cmFpdDpzbTp3LVs2dnddIG9iamVjdC1jb250YWluIGFzcGVjdC1bNC8zXScgc3JjPXtleGl0SWNvbn0gIGFsdD0nJyAvPjwvZGl2PlxuXG48ZGl2IGNsYXNzTmFtZT1cImxpc3RzIGgtWzgwJV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiIG9uQ2xpY2s9eygpPT57c2F5SGkoJ3ByZWNpb3VzJyl9fT5Mb2dpbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIgPkNhdGVnb3JpZXM8L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPkFib3V0IFRydXN0bW9uaWE8L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPkNvbnRhY3QgVHJ1c3Rtb25pYTwvZGl2PlxuXG48L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiZ3NhcCIsIlR3ZWVuTWF4IiwicmVnaXN0ZXJQbHVnaW4iLCJzaWduYWwiLCJ1c2VSZWYiLCJsb2dvIiwiYnVyZ2VyTWVudSIsImV4aXRJY29uIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJOYXZpZ2F0aW9uQmFyIiwibmF2Iiwic2lkZUJhciIsImljb24iLCJPcGVuIiwiTGVmdCIsImVmdCIsInNldGVmdCIsInRvb2dsZU1lbnVTdGF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50IiwidG8iLCJsZWZ0IiwiZHVyYXRpb24iLCJzYXlIaSIsIm5hbWUiLCJhbGVydCIsImRpdiIsInJlZiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/BusinessPage-Components/NavigationBar.tsx\n"));

/***/ })

});