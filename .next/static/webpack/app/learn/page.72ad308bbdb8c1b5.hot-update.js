"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/learn/page",{

/***/ "(app-pages-browser)/./src/app/learn/_components/menu/index.tsx":
/*!**************************************************!*\
  !*** ./src/app/learn/_components/menu/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../page.module.scss */ \"(app-pages-browser)/./src/app/learn/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listItem */ \"(app-pages-browser)/./src/app/learn/_components/listItem/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Menu(param) {\n    let { showMenu, activeSection } = param;\n    _s();\n    const [currentLi, setCurrentLi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const handleClick = (evt)=>{\n        if (currentLi) {\n            currentLi.classList.remove((_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active));\n        }\n        evt.currentTarget.classList.add((_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active));\n        setCurrentLi(evt.currentTarget);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menu), \" \").concat(showMenu ? (_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().label),\n                    children: \"Getting Started\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Installation\",\n                    handleClick: handleClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: activeSection.id === \"install-composer\" ? (_page_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#install-composer\",\n                                children: \"Composer\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 98\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#install-git\",\n                                children: \"Git\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Setup\",\n                    handleClick: handleClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#init\",\n                            children: \"Init\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Menu, \"0zsyVXNR9F+wY4yYQoYBAN7TfTQ=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGVhcm4vX2NvbXBvbmVudHMvbWVudS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1c7QUFDVDtBQU9wQixTQUFTRyxLQUFLLEtBQXNDO1FBQXRDLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFhLEdBQXRDOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQTBCUTtJQUVwRSxNQUFNQyxjQUFjLENBQUNDO1FBQ2pCLElBQUlKLFdBQVc7WUFDWEEsVUFBVUssU0FBUyxDQUFDQyxNQUFNLENBQUNYLGlFQUFhO1FBQzVDO1FBRUFTLElBQUlJLGFBQWEsQ0FBQ0gsU0FBUyxDQUFDSSxHQUFHLENBQUNkLGlFQUFhO1FBRTdDTSxhQUFhRyxJQUFJSSxhQUFhO0lBQ2xDO0lBRUEscUJBQ0ksOERBQUNFO1FBQUtDLFdBQVcsR0FBa0JiLE9BQWZILCtEQUFXLEVBQUMsS0FBaUMsT0FBOUJHLFdBQVdILGlFQUFhLEdBQUc7a0JBQzFELDRFQUFDaUI7OzhCQUNHLDhEQUFDQztvQkFBR0YsV0FBV2hCLGdFQUFZOzhCQUFFOzs7Ozs7OEJBRzdCLDhEQUFDQyxpREFBUUE7b0JBQUNtQixPQUFNO29CQUFlWixhQUFhQTs7c0NBQ3hDLDhEQUFDVTs0QkFBR0YsV0FBV1osY0FBY2lCLEVBQUUsS0FBSyxxQkFBcUJyQixpRUFBYSxHQUFHO3NDQUFJLDRFQUFDc0I7Z0NBQUVDLE1BQUs7MENBQW9COzs7Ozs7Ozs7OztzQ0FDekcsOERBQUNMO3NDQUFHLDRFQUFDSTtnQ0FBRUMsTUFBSzswQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRS9CLDhEQUFDdEIsaURBQVFBO29CQUFDbUIsT0FBTTtvQkFBUVosYUFBYUE7OEJBQ2pDLDRFQUFDVTtrQ0FBRyw0RUFBQ0k7NEJBQUVDLE1BQUs7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QztHQTdCd0JyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xlYXJuL19jb21wb25lbnRzL21lbnUvaW5kZXgudHN4P2JkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3BhZ2UubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vbGlzdEl0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVQcm9wcyB7XHJcbiAgICBzaG93TWVudTogYm9vbGVhbjtcclxuICAgIGFjdGl2ZVNlY3Rpb246IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSh7IHNob3dNZW51LCBhY3RpdmVTZWN0aW9uIH06IE1lbnVQcm9wcykge1xyXG4gICAgY29uc3QgW2N1cnJlbnRMaSwgc2V0Q3VycmVudExpXSA9IHVzZVN0YXRlPEhUTUxMSUVsZW1lbnR8dW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2dDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRMaSkge1xyXG4gICAgICAgICAgICBjdXJyZW50TGkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMuYWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmFjdGl2ZSk7XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRMaShldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWVudSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZW51fSAke3Nob3dNZW51ID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIEdldHRpbmcgU3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT0nSW5zdGFsbGF0aW9uJyBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2FjdGl2ZVNlY3Rpb24uaWQgPT09ICdpbnN0YWxsLWNvbXBvc2VyJyA/IHN0eWxlcy5hY3RpdmUgOiAnJ30+PGEgaHJlZj1cIiNpbnN0YWxsLWNvbXBvc2VyXCI+Q29tcG9zZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNpbnN0YWxsLWdpdFwiPkdpdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT0nU2V0dXAnIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjaW5pdFwiPkluaXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tZW51PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTGlzdEl0ZW0iLCJNZW51Iiwic2hvd01lbnUiLCJhY3RpdmVTZWN0aW9uIiwiY3VycmVudExpIiwic2V0Q3VycmVudExpIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xpY2siLCJldnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkIiwibWVudSIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJsYWJlbCIsInRpdGxlIiwiaWQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/learn/_components/menu/index.tsx\n"));

/***/ })

});