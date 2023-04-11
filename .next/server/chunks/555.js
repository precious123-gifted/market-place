"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 4555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutUsSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/aboutBG.png
/* harmony default export */ const aboutBG = ({"src":"/_next/static/media/aboutBG.06bfb51a.png","height":2466,"width":4984,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAKlBMVEUGFRgGFRgGFRgGFRgGFRgGFRgGFRgHFhkHFhgHFRgHFhgHFhkHFhgHFRgfj1ikAAAAC3RSTlO5u77Lz9Xv/f39/oSHirsAAAAbSURBVHjaY1AJFnBjOAMEDBUzOrsYTt85cwYATfUJYPDMFpEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/aboutBGm.png
/* harmony default export */ const aboutBGm = ({"src":"/_next/static/media/aboutBGm.eb4c86ad.png","height":1276,"width":738,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAIBAMAAADD3ygIAAAAJFBMVEUGFRgGFRgGFRgGFRgGFRgHFhgGFRgGFRgHFhkHFhgHFRgGFRiVLB07AAAACHRSTlNqeX2hw/z8/dbkOF8AAAAiSURBVHjaY1AWcGDYsbuBISy0gGHmzAlwPGvVAoaZMycAALFpDG45IrqmAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/HomePage-Components/AboutUsSection.tsx





function AboutUsSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-grey  landscape:h-[60vw] portrait:h-[272vw] portrait:sm:h-[90vw] w-[100vw]  text-grey flex justify-center items-center ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "background absolute  inset-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "portrait:hidden",
                        src: aboutBG,
                        alt: "",
                        fill: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "landscape:hidden",
                        src: aboutBGm,
                        alt: "",
                        fill: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative z-10 content w-[95%] h-[80%] flex-col items-center justify-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header mb-[5%] w-full flex justify-center items-center   text-[2.5vw]  portrait:text-[7vw]  portrait:sm:text-[5vw]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "About Trustmonia"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "summary w-full font-thin flex justify-center items-center  text-[2vw]  portrait:text-[6vw]  portrait:sm:text-[3vw]",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "w-[70%]  portrait:w-full   portrait:sm:w-full  text-center flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[10%] h-[10%]",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus temporibus , facere tempore quo. Deserunt a, veritatis molestiae iure cum voluptate suscipit molestias iste, quidem incidunt hic assumenda voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus temporibus, facere tempore quo. Deserunt a,"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "veritatis molestiae iure cum voluptate suscipit molestias iste, quidem incidunt hic assumenda voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore repellendus temporibus, facere tempore quo. Deserunt a, veritatis molestiae iure cum voluptate suscipit molestias iste, quidem incidunt hic assumenda voluptas."
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;