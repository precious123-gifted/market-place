"use strict";
exports.id = 5378;
exports.ids = [5378];
exports.modules = {

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReviewSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/left-arrow.png
/* harmony default export */ const left_arrow = ({"src":"/_next/static/media/left-arrow.8d5ee8cd.png","height":589,"width":699,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAXVBMVEUHFhkHFhgGFhkGFhgHFRkGFRkGFRgHFhkGFhkGFhgHFRkGFRgGFhgHFRkGFRgGFRgGFRgGFRgGFRkGFRgGFRgGFRkGFRgGFRgGFRgGFRkGFRgGFRgGFRgGFRgGFRimouSMAAAAH3RSTlMAAAAAAAAAAQEBAQECAgMFCw4RERUbGyw/T0+QpMHYYmcY3AAAAEBJREFUeNolyEkOgCAQBMAecdoFRVFxh/8/ExJulYIYp53SQgYGbJ6YzPNd/0FoSGu8uWBu3zoYeTa7LxDHnrQZVVcCvnfqoyYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/assets/right-arrow.png
/* harmony default export */ const right_arrow = ({"src":"/_next/static/media/right-arrow.76379558.png","height":589,"width":699,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAUVBMVEUHFhkHFhgGFhkGFhgGFRkGFRgHFhgGFhkGFRkGFRgGFhgGFRkGFRgGFRgHFRgGFRgGFRgGFRkGFRgGFRgGFRgGFRkGFRgGFRgGFRgGFRgGFRhqkCilAAAAG3RSTlMAAAAAAAABAQEBAgIDBQsOERUVGyw/T5Ckwdjk5rk2AAAAPElEQVR42hXKyRGAMAwEwRVoDAZzijv/QCl/u1oZOopJLGsTJBP7c9xXO2jifOcvkG9VfKzHgl7KkCiuH0s/Al+cbQedAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/assets/stars.png
/* harmony default export */ const stars = ({"src":"/_next/static/media/stars.8231ea9d.png","height":130,"width":942,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKElEQVR4nGPMC5cz//Hz/z0ONkaxv/8YvjAAARPjb54/zLIvxbX9RQDaXQuyDgmYRQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./src/pages/HomePage-Components/ReviewSection.tsx






function ReviewSection() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "landscape:h-[40vw] portrait:h-[115vw] portrait:sm:h-[70vw] w-[100vw] bg-grey text-darkgreen flex justify-center items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "content  w-[90%] portrait:w-[100%] portrait:sm:w-[70%] h-[80%] flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header mb-[5%]  portrait:sm:mb-[8%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-center",
                        children: "Every Review is Important"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cards-container text-[1.5vw]  portrait:text-[5vw]  portrait:sm:text-[3vw] font-M_PLUS_1 overflow-x-hidden w-full h-[70%] portrait:h-[80%]  portrait:sm:h-[75%] portrait:w-[100%]  flex justify-center portrait:justify-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "left-arrow landscape:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: " cursor-pointer   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]",
                                src: left_arrow,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cards  w-[80%] overflow-x-auto scrollbar-hide portrait:w-[100%] h-full flex  justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card  portrait:mr-[5vw] portrait:sm:mr[2vw] h-[90%] w-[30%] portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section1 h-[40%]  w-[90%]   ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                alt: "",
                                                src: stars
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section2 font-light h-[100%] w-[90%]  text-center ",
                                            children: "They have one of the best customer services ,i love their products,it is worth my money"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section3 h-[20%] w-[90%]   font-loma text-center",
                                            children: "Prodigital Company"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card  portrait:mr-[5vw] portrait:sm:mr[2vw]  h-[90%] w-[30%]   portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section1 h-[40%]  w-[90%]   ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                alt: "",
                                                src: stars
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section2 font-light h-[100%] w-[90%]  ",
                                            children: "They have one of the best customer services ,i love their products,it is worth"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section3 h-[20%] w-[90%]  text-center ",
                                            children: "Lipwager  Company"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card h-[90%] w-[30%]  portrait:h-[80%] portrait:sm:h-[100%] portrait:min-w-[85vw] portrait:sm:min-w-[101%]  bg-blue grid place-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section1 h-[40%]  w-[90%]   ",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                alt: "",
                                                src: stars
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section2 font-light h-[100%] w-[90%]  ",
                                            children: "They have one of the best customer services ,i love their products,it is worth"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section3 h-[20%] w-[90%]   text-center",
                                            children: "Centinel Company"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "right-arrow landscape:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "left-arrow",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: " cursor-pointer  w-[5vw]   portrait:w-[9vw]  portrait:sm:w-[6vw] object-contain aspect-[4/3]",
                                    src: right_arrow,
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;