"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb/mongodb.js":
/*!********************************!*\
  !*** ./lib/mongodb/mongodb.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToMongoDB\": () => (/* binding */ connectToMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGODB_URI  } = process.env;\nif (!MONGODB_URI) {\n    throw new Error(\"Invalid environment variable: MONGODB_URI\");\n}\nconst connectToMongoDB = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI);\n        if (connection.readyState === 1) {\n            return Promise.resolve(true);\n        }\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi9tb25nb2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNnQztBQUVoQyxNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHQyxRQUFRQyxHQUFHO0FBRW5DLElBQUksQ0FBQ0YsYUFBYTtJQUNkLE1BQU0sSUFBSUcsTUFBTSw2Q0FBNkM7QUFDakUsQ0FBQztBQUVNLE1BQU1DLG1CQUFtQixVQUFZO0lBQ3hDLElBQUk7UUFDQSxNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHLE1BQU1OLHVEQUFnQixDQUFDQztRQUU5QyxJQUFJSyxXQUFXRSxVQUFVLEtBQUssR0FBRztZQUM3QixPQUFPQyxRQUFRQyxPQUFPLENBQUMsSUFBSTtRQUMvQixDQUFDO0lBRUwsRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBT0YsUUFBUUcsTUFBTSxDQUFDRDtJQUMxQjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQtcGxhY2UvLi9saWIvbW9uZ29kYi9tb25nb2RiLmpzP2FhNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgTU9OR09EQl9VUkkgfSA9IHByb2Nlc3MuZW52XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlOiBNT05HT0RCX1VSSVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb01vbmdvREIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJKVxuXG4gICAgICAgIGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjb25uZWN0VG9Nb25nb0RCIiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJyZWFkeVN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnJvciIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb/mongodb.js\n");

/***/ }),

/***/ "(api)/./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    companyName: {\n        type: String,\n        required: [\n            true,\n            \"company name is required\"\n        ],\n        minLength: [\n            4,\n            \"full name should be atleast 4 letters long\"\n        ],\n        maxLength: [\n            30,\n            \"full name should be atmost 30 letters long\"\n        ]\n    },\n    firstName: {\n        type: String,\n        required: [\n            true,\n            \"first name is required\"\n        ],\n        minLength: [\n            4,\n            \"full name should be atleast 4 letters long\"\n        ],\n        maxLength: [\n            30,\n            \"full name should be atmost 30 letters long\"\n        ]\n    },\n    lastName: {\n        type: String,\n        required: [\n            true,\n            \"last name is required\"\n        ],\n        minLength: [\n            4,\n            \"full name should be atleast 4 letters long\"\n        ],\n        maxLength: [\n            30,\n            \"full name should be atmost 30 letters long\"\n        ]\n    },\n    jobTitle: {\n        type: String,\n        required: [\n            true,\n            \"job title is required\"\n        ],\n        minLength: [\n            4,\n            \"full name should be atleast 4 letters long\"\n        ],\n        maxLength: [\n            30,\n            \"full name should be atmost 30 letters long\"\n        ]\n    },\n    industry: {\n        type: String,\n        required: [\n            true,\n            \"industry is required\"\n        ],\n        select: false\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: [\n            true,\n            \"email is required\"\n        ],\n        match: [\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n            \"invalid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"password is required\"\n        ],\n        select: false\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema, \"business-account\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFHNUMsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBRTtJQUUvQkksYUFBYTtRQUNUQyxNQUFPQztRQUNQQyxVQUFXO1lBQUMsSUFBSTtZQUFHO1NBQTJCO1FBQzlDQyxXQUFZO1lBQUM7WUFBRTtTQUE2QztRQUM1REMsV0FBWTtZQUFDO1lBQUc7U0FBNkM7SUFDakU7SUFFQUMsV0FBVztRQUNQTCxNQUFPQztRQUNQQyxVQUFXO1lBQUMsSUFBSTtZQUFHO1NBQXlCO1FBQzVDQyxXQUFZO1lBQUM7WUFBRTtTQUE2QztRQUM1REMsV0FBWTtZQUFDO1lBQUc7U0FBNkM7SUFDakU7SUFHQUUsVUFBVTtRQUNOTixNQUFPQztRQUNQQyxVQUFXO1lBQUMsSUFBSTtZQUFHO1NBQXdCO1FBQzNDQyxXQUFZO1lBQUM7WUFBRTtTQUE2QztRQUM1REMsV0FBWTtZQUFDO1lBQUc7U0FBNkM7SUFDakU7SUFHQUcsVUFBVTtRQUNOUCxNQUFPQztRQUNQQyxVQUFXO1lBQUMsSUFBSTtZQUFHO1NBQXdCO1FBQzNDQyxXQUFZO1lBQUM7WUFBRTtTQUE2QztRQUM1REMsV0FBWTtZQUFDO1lBQUc7U0FBNkM7SUFDakU7SUFHQUksVUFBVTtRQUNOUixNQUFPQztRQUNQQyxVQUFXO1lBQUMsSUFBSTtZQUFHO1NBQXVCO1FBQzFDTyxRQUFTLEtBQUs7SUFDbEI7SUFHQUMsT0FBTztRQUNIVixNQUFPQztRQUNQVSxRQUFTLElBQUk7UUFDYlQsVUFBVztZQUFDLElBQUk7WUFBRztTQUFvQjtRQUN2Q1UsT0FBUTtZQUFFO1lBQWlEO1NBQXdCO0lBQ3ZGO0lBR0FDLFVBQVU7UUFDTmIsTUFBT0M7UUFDUEMsVUFBVztZQUFDLElBQUk7WUFBRztTQUF1QjtRQUMxQ08sUUFBUyxLQUFLO0lBQ2xCO0FBS0M7QUFJRCxNQUFNSyxPQUFPakIsaURBQWMsSUFBSUQsK0NBQUtBLENBQUMsUUFBUUUsWUFBWTtBQUV6RCxpRUFBZWdCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJrZXQtcGxhY2UvLi9tb2RlbHMvdXNlci50cz83MDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLG1vZGVsLG1vZGVsc30gZnJvbSBcIm1vbmdvb3NlXCJcblxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSAoe1xuXG5jb21wYW55TmFtZSA6e1xuICAgIHR5cGUgOiBTdHJpbmcgLFxuICAgIHJlcXVpcmVkIDogW3RydWUgLCBcImNvbXBhbnkgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICBtaW5MZW5ndGggOiBbNCxcImZ1bGwgbmFtZSBzaG91bGQgYmUgYXRsZWFzdCA0IGxldHRlcnMgbG9uZ1wiXSxcbiAgICBtYXhMZW5ndGggOiBbMzAsXCJmdWxsIG5hbWUgc2hvdWxkIGJlIGF0bW9zdCAzMCBsZXR0ZXJzIGxvbmdcIl0sXG59LFxuXG5maXJzdE5hbWUgOntcbiAgICB0eXBlIDogU3RyaW5nICxcbiAgICByZXF1aXJlZCA6IFt0cnVlICwgXCJmaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCJdLFxuICAgIG1pbkxlbmd0aCA6IFs0LFwiZnVsbCBuYW1lIHNob3VsZCBiZSBhdGxlYXN0IDQgbGV0dGVycyBsb25nXCJdLFxuICAgIG1heExlbmd0aCA6IFszMCxcImZ1bGwgbmFtZSBzaG91bGQgYmUgYXRtb3N0IDMwIGxldHRlcnMgbG9uZ1wiXSxcbn1cbixcblxubGFzdE5hbWUgOntcbiAgICB0eXBlIDogU3RyaW5nICxcbiAgICByZXF1aXJlZCA6IFt0cnVlICwgXCJsYXN0IG5hbWUgaXMgcmVxdWlyZWRcIl0sXG4gICAgbWluTGVuZ3RoIDogWzQsXCJmdWxsIG5hbWUgc2hvdWxkIGJlIGF0bGVhc3QgNCBsZXR0ZXJzIGxvbmdcIl0sXG4gICAgbWF4TGVuZ3RoIDogWzMwLFwiZnVsbCBuYW1lIHNob3VsZCBiZSBhdG1vc3QgMzAgbGV0dGVycyBsb25nXCJdLFxufVxuLFxuXG5qb2JUaXRsZSA6e1xuICAgIHR5cGUgOiBTdHJpbmcgLFxuICAgIHJlcXVpcmVkIDogW3RydWUgLCBcImpvYiB0aXRsZSBpcyByZXF1aXJlZFwiXSxcbiAgICBtaW5MZW5ndGggOiBbNCxcImZ1bGwgbmFtZSBzaG91bGQgYmUgYXRsZWFzdCA0IGxldHRlcnMgbG9uZ1wiXSxcbiAgICBtYXhMZW5ndGggOiBbMzAsXCJmdWxsIG5hbWUgc2hvdWxkIGJlIGF0bW9zdCAzMCBsZXR0ZXJzIGxvbmdcIl0sXG59XG4sXG5cbmluZHVzdHJ5IDp7XG4gICAgdHlwZSA6IFN0cmluZyAsXG4gICAgcmVxdWlyZWQgOiBbdHJ1ZSAsIFwiaW5kdXN0cnkgaXMgcmVxdWlyZWRcIl0sXG4gICAgc2VsZWN0IDogZmFsc2UsXG59XG4sXG5cbmVtYWlsIDp7XG4gICAgdHlwZSA6IFN0cmluZyAsXG4gICAgdW5pcXVlIDogdHJ1ZSAsXG4gICAgcmVxdWlyZWQgOiBbdHJ1ZSAsIFwiZW1haWwgaXMgcmVxdWlyZWRcIl0sXG4gICAgbWF0Y2ggOiBbIC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8sIFwiaW52YWxpZCBlbWFpbCBhZGRyZXNzXCJdXG59XG4sXG5cbnBhc3N3b3JkIDp7XG4gICAgdHlwZSA6IFN0cmluZyAsXG4gICAgcmVxdWlyZWQgOiBbdHJ1ZSAsIFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgc2VsZWN0IDogZmFsc2UsXG59XG4sXG5cblxuXG4gfSlcblxuXG5cbmNvbnN0IFVzZXIgPSBtb2RlbHNbJ1VzZXInXSB8fCBtb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEsICdidXNpbmVzcy1hY2NvdW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIgXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwiVXNlclNjaGVtYSIsImNvbXBhbnlOYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJqb2JUaXRsZSIsImluZHVzdHJ5Iiwic2VsZWN0IiwiZW1haWwiLCJ1bmlxdWUiLCJtYXRjaCIsInBhc3N3b3JkIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/signup.ts":
/*!**************************************!*\
  !*** ./src/pages/api/auth/signup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/mongodb/mongodb */ \"(api)/./lib/mongodb/mongodb.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/user */ \"(api)/./models/user.ts\");\n\n\n\nconst handler = async (req, res)=>{\n    try {\n        await (0,_lib_mongodb_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToMongoDB)();\n        if (req.method === \"POST\") {\n            if (!req.body) return res.status(400).json({\n                error: \"Data is missing\"\n            });\n            const { companyName , firstName , lastName , jobTitle , industry , email , password  } = req.body;\n            const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email\n            });\n            if (userExists) {\n                return res.status(409).json({\n                    error: \"User Already exists\"\n                });\n            } else {\n                if (!password) {\n                    return res.status(400).json({\n                        error: \"Password is missing\"\n                    });\n                }\n                if (password.trim() === \"\") {\n                    return res.status(400).json({\n                        error: \"Password cannot be empty\"\n                    });\n                }\n                if (password?.length < 6) return res.status(409).json({\n                    error: \"Password should be 6 characters long\"\n                });\n                const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n                const user = new _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                    companyName,\n                    firstName,\n                    lastName,\n                    jobTitle,\n                    industry,\n                    email,\n                    password: hashedPassword\n                });\n                user.save().then((data)=>{\n                    const user = {\n                        companyName: data.companyName,\n                        firstName: data.firstName,\n                        lastName: data.lastName,\n                        jobTitle: data.jobTitle,\n                        industry: data.industry,\n                        email: data.email,\n                        _id: data._id\n                    };\n                    return res.status(201).json({\n                        success: true,\n                        user\n                    });\n                }).catch((error)=>{\n                    // handle any errors\n                    console.error(error);\n                    res.status(500).json({\n                        error: \"Internal Server Error\"\n                    });\n                });\n            }\n        } else {\n            res.status(405).json({\n                error: \"Method Not Allowed,nor try this method again\"\n            });\n        }\n    } catch (error) {\n        // handle any errors that occur during database connection\n        console.error(error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvc2lnbnVwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ21DO0FBQ3hCO0FBUzFDLE1BQU1HLFVBQVUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ25FLElBQUk7UUFDRixNQUFNSixzRUFBZ0JBO1FBR3RCLElBQUlHLElBQUlFLE1BQU0sS0FBSyxRQUFRO1lBQ3pCLElBQUksQ0FBQ0YsSUFBSUcsSUFBSSxFQUFFLE9BQU9GLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBa0I7WUFFdEUsTUFBTSxFQUFFQyxZQUFXLEVBQUNDLFVBQVMsRUFBRUMsU0FBUSxFQUFDQyxTQUFRLEVBQUNDLFNBQVEsRUFBQ0MsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR2IsSUFBSUcsSUFBSTtZQUV0RixNQUFNVyxhQUFhLE1BQU1oQiw0REFBWSxDQUFDO2dCQUFFYztZQUFNO1lBRTlDLElBQUlFLFlBQVk7Z0JBQ2QsT0FBT2IsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBc0I7WUFDN0QsT0FBTztnQkFFTCxJQUFJLENBQUNPLFVBQVU7b0JBQ3JCLE9BQU9aLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLE9BQU87b0JBQXNCO2dCQUM3RCxDQUFDO2dCQUdELElBQUlPLFNBQVNHLElBQUksT0FBTyxJQUFJO29CQUMxQixPQUFPZixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxPQUFPO29CQUEyQjtnQkFDbEUsQ0FBQztnQkFHTyxJQUFJTyxVQUFVSSxTQUFTLEdBQ3JCLE9BQU9oQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPO2dCQUF1QztnQkFFOUUsTUFBTVksaUJBQWlCLE1BQU10Qiw4Q0FBSUEsQ0FBQ2lCLFVBQVU7Z0JBR3BELE1BQU1NLE9BQU8sSUFBSXJCLG9EQUFJQSxDQUFDO29CQUNwQlM7b0JBQ0FDO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQUMsVUFBVUs7Z0JBQ1o7Z0JBRUFDLEtBQUtDLElBQUksR0FDTkMsSUFBSSxDQUFDLENBQUNDLE9BQWdCO29CQUNyQixNQUFNSCxPQUFPO3dCQUNYWixhQUFhZSxLQUFLZixXQUFXO3dCQUM3QkMsV0FBV2MsS0FBS2QsU0FBUzt3QkFDekJDLFVBQVVhLEtBQUtiLFFBQVE7d0JBQ3ZCQyxVQUFVWSxLQUFLWixRQUFRO3dCQUN2QkMsVUFBVVcsS0FBS1gsUUFBUTt3QkFDdkJDLE9BQU9VLEtBQUtWLEtBQUs7d0JBQ2pCVyxLQUFLRCxLQUFLQyxHQUFHO29CQUNmO29CQUVBLE9BQU90QixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUMxQm1CLFNBQVMsSUFBSTt3QkFDYkw7b0JBQ0Y7Z0JBQ0YsR0FDQ00sS0FBSyxDQUFDLENBQUNuQixRQUFtQjtvQkFDekIsb0JBQW9CO29CQUNwQm9CLFFBQVFwQixLQUFLLENBQUNBO29CQUNkTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxPQUFPO29CQUF3QjtnQkFDeEQ7WUFJSSxDQUFDO1FBQ0gsT0FBTztZQUNMTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQStDO1FBQy9FLENBQUM7SUFDSCxFQUFFLE9BQU9BLE9BQU87UUFDZCwwREFBMEQ7UUFDMURvQixRQUFRcEIsS0FBSyxDQUFDQTtRQUNkTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDeEQ7QUFDRjtBQUVBLGlFQUFlUCxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2V0LXBsYWNlLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50cz81ZjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBoYXNoIH0gZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IGNvbm5lY3RUb01vbmdvREIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL21vbmdvZGIvbW9uZ29kYlwiXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL3VzZXJcIlxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIlxuXG5cblxuXG5cblxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdFRvTW9uZ29EQigpO1xuICAgIFxuICAgIFxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgaWYgKCFyZXEuYm9keSkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiRGF0YSBpcyBtaXNzaW5nXCIgfSlcblxuICAgICAgY29uc3QgeyBjb21wYW55TmFtZSxmaXJzdE5hbWUgLGxhc3ROYW1lLGpvYlRpdGxlLGluZHVzdHJ5LGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcblxuICAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pXG5cbiAgICAgIGlmICh1c2VyRXhpc3RzKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwOSkuanNvbih7IGVycm9yOiBcIlVzZXIgQWxyZWFkeSBleGlzdHNcIiB9KVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoIXBhc3N3b3JkKSB7XG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIlBhc3N3b3JkIGlzIG1pc3NpbmdcIiB9KVxufVxuXG5cbmlmIChwYXNzd29yZC50cmltKCkgPT09ICcnKSB7XG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIlBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVwiIH0pXG59XG5cblxuICAgICAgICBpZiAocGFzc3dvcmQ/Lmxlbmd0aCA8IDYpXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA5KS5qc29uKHsgZXJyb3I6IFwiUGFzc3dvcmQgc2hvdWxkIGJlIDYgY2hhcmFjdGVycyBsb25nXCIgfSlcblxuICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKVxuXG5cbmNvbnN0IHVzZXIgPSBuZXcgVXNlcih7XG4gIGNvbXBhbnlOYW1lLFxuICBmaXJzdE5hbWUsXG4gIGxhc3ROYW1lLFxuICBqb2JUaXRsZSxcbiAgaW5kdXN0cnksXG4gIGVtYWlsLFxuICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcbn0pXG5cbnVzZXIuc2F2ZSgpXG4gIC50aGVuKChkYXRhOiBJVXNlcikgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBjb21wYW55TmFtZTogZGF0YS5jb21wYW55TmFtZSxcbiAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWUsXG4gICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcbiAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxuICAgICAgaW5kdXN0cnk6IGRhdGEuaW5kdXN0cnksXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcbiAgICAgIF9pZDogZGF0YS5faWRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHVzZXJcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgLy8gaGFuZGxlIGFueSBlcnJvcnNcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xuICB9KVxuXG5cbiAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZCxub3IgdHJ5IHRoaXMgbWV0aG9kIGFnYWluXCIgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gaGFuZGxlIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkdXJpbmcgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxuXG5cbiJdLCJuYW1lcyI6WyJoYXNoIiwiY29ubmVjdFRvTW9uZ29EQiIsIlVzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbXBhbnlOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJqb2JUaXRsZSIsImluZHVzdHJ5IiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJFeGlzdHMiLCJmaW5kT25lIiwidHJpbSIsImxlbmd0aCIsImhhc2hlZFBhc3N3b3JkIiwidXNlciIsInNhdmUiLCJ0aGVuIiwiZGF0YSIsIl9pZCIsInN1Y2Nlc3MiLCJjYXRjaCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();