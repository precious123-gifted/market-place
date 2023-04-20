"use strict";
exports.id = 8975;
exports.ids = [8975];
exports.modules = {

/***/ 2687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/header-img.62284148.png","height":613,"width":758,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxUlEQVR42mMAgV8r1pqA6JaVhx2rOqYt37lmqxmYv/suI8OULBf9/eUpuf2RDPa7Dtz6tH3X5UXn1m80eszAwMgAAiW5bdXe0RX/CzIS/ne1rP1fG5t7v5SBQQokNyM3mZXBqP+JbmrFxlLf/CXvGMr3/2dgE//t5Rtx/+u0GUYMMPD/ym6N1TNm/ehv6fy/Y/HS/3sXLP5/Z8miYwwMDMYMk/pWsv6+cvXR70uXXv6+fKn7//17kf/fvzecO7EjQcuDLRIAlnJaZYb/ESMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 8975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUpBody)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/assets/header-img.png
var header_img = __webpack_require__(2687);
;// CONCATENATED MODULE: ./public/assets/google-icon.png
/* harmony default export */ const google_icon = ({"src":"/_next/static/media/google-icon.63be8abe.png","height":279,"width":279,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/0lEQVR42h3KsUrDUACF4ZNGUG6hFC213dyECG6CDU1xskKqoWhwE1ycdKhoRd26FPQ1XKptAoI4FMRYF3WqNuALuAjiEBCX3OONP3zbD9lK6TQBRUgLrrS0DWmNZ+JKHooGCSRKtBDJssa4klMKH5/21hSSyLSQjVQkF8YCLiNDIMcJLOIoxH/xQLi8E+QAWRyPoHRw8t4tHr72is2hCQZwf+/z/HpGdm5/BOVithE+FppDqmkTDCHOr6tR2asH25d7kyS0+bPb3vTB2/fM6Usa6LqJ0prvRLZXZ81f5Upn98doPZhIurpZ0queA0XUfMe1vXV35wnCaPdhtPv6H8H3a5Wgdo9fAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/SchoolSignUpPageComponents/SignUpBody.tsx





function SignUpBody() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-grey text-darkgreen h-screen portrait:h-[200vw] w-full pt-[5%] portrait:pt-[10%]  flex justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "content  landscape:flex landscape:justify-between  portrait:flex-col portrait:items-end w-[95%]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section1 w-[45%] ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "",
                        src: header_img/* default */.Z,
                        className: "   object-contain aspect-[4/3] portrait:hidden"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section2  overflow-y-auto scrollbar-hide  landscape:w-[50%] bg-green bg-opacity-25 h-[90%] rounded pt-[3%] ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content h-[200vw] flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "header mb-[8%] w-full flex justify-center items-center text-center  text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "MAKE REVIEWS AND DISCOVER COMPANIES"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full pb-[15%] BTN text-[1.5vw] portrait:text-[4.4vw]  portrait:sm:text-[4vw] flex justify-center items-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "w-[60%] portrait:w-[70%] portrait:sm:w-[60%]  transition-all ease-in duration-[0.5s] bg-lightgreen hover:bg-blue hover:text-armygreen   px-[2vw] py-[0.5vw] text-grey rounded cursor-pointer flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                alt: "",
                                                src: google_icon,
                                                className: " object-contain  aspect-[4/3]  landscape:w-[5vw]  portrait:w-[15vw]  portrait:sm:w-[10vw]"
                                            })
                                        }),
                                        "  ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "SIGN IN WITH GOOGLE"
                                        }),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "input-div flex flex-col justify-between items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "SIGN IN WITH YOUR EMAIL"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        name: "school-mail",
                                        id: "",
                                        className: "border-none outline-none rounded h-[3vw]"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;