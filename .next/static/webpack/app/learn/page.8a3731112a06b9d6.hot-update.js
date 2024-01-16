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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../page.module.scss */ \"(app-pages-browser)/./src/app/learn/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listItem */ \"(app-pages-browser)/./src/app/learn/_components/listItem/index.tsx\");\n/* harmony import */ var _listLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listLink */ \"(app-pages-browser)/./src/app/learn/_components/listLink/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Menu(param) {\n    let { showMenu, activeSection } = param;\n    _s();\n    const [currentLi, setCurrentLi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const handleClick = (evt)=>{\n        if (currentLi) {\n            currentLi.classList.remove((_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active));\n        }\n        evt.currentTarget.classList.add((_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active));\n        setCurrentLi(evt.currentTarget);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"menu\", {\n        className: \"\".concat((_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu), \" \").concat(showMenu ? (_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),\n                    children: \"Getting Started\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Installation\",\n                    handleClick: handleClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"#install-composer\",\n                            activeSection: activeSection,\n                            children: \"Composer\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"#install-git\",\n                            activeSection: activeSection,\n                            children: \"Git\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Setup\",\n                    handleClick: handleClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_listLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"#init\",\n                        activeSection: activeSection,\n                        children: \"Init\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\_components\\\\menu\\\\index.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(Menu, \"0zsyVXNR9F+wY4yYQoYBAN7TfTQ=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGVhcm4vX2NvbXBvbmVudHMvbWVudS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNXO0FBQ1Q7QUFFQTtBQU9wQixTQUFTSSxLQUFLLEtBQXNDO1FBQXRDLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFhLEdBQXRDOztJQUN6QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQTBCUztJQUVwRSxNQUFNQyxjQUFjLENBQUNDO1FBQ2pCLElBQUlKLFdBQVc7WUFDWEEsVUFBVUssU0FBUyxDQUFDQyxNQUFNLENBQUNaLGlFQUFhO1FBQzVDO1FBRUFVLElBQUlJLGFBQWEsQ0FBQ0gsU0FBUyxDQUFDSSxHQUFHLENBQUNmLGlFQUFhO1FBRTdDTyxhQUFhRyxJQUFJSSxhQUFhO0lBQ2xDO0lBRUEscUJBQ0ksOERBQUNFO1FBQUtDLFdBQVcsR0FBa0JiLE9BQWZKLCtEQUFXLEVBQUMsS0FBaUMsT0FBOUJJLFdBQVdKLGlFQUFhLEdBQUc7a0JBQzFELDRFQUFDa0I7OzhCQUNHLDhEQUFDQztvQkFBR0YsV0FBV2pCLGdFQUFZOzhCQUFFOzs7Ozs7OEJBRzdCLDhEQUFDQyxpREFBUUE7b0JBQUNvQixPQUFNO29CQUFlWixhQUFhQTs7c0NBQ3hDLDhEQUFDUCxpREFBUUE7NEJBQUNvQixNQUFLOzRCQUFvQmpCLGVBQWVBO3NDQUFlOzs7Ozs7c0NBQ2pFLDhEQUFDSCxpREFBUUE7NEJBQUNvQixNQUFLOzRCQUFlakIsZUFBZUE7c0NBQWU7Ozs7Ozs7Ozs7Ozs4QkFFaEUsOERBQUNKLGlEQUFRQTtvQkFBQ29CLE9BQU07b0JBQVFaLGFBQWFBOzhCQUNqQyw0RUFBQ1AsaURBQVFBO3dCQUFDb0IsTUFBSzt3QkFBUWpCLGVBQWVBO2tDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pFO0dBN0J3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sZWFybi9fY29tcG9uZW50cy9tZW51L2luZGV4LnRzeD9iZDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9wYWdlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uL2xpc3RJdGVtJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExpc3RMaW5rIGZyb20gJy4uL2xpc3RMaW5rJztcclxuXHJcbmludGVyZmFjZSBNZW51UHJvcHMge1xyXG4gICAgc2hvd01lbnU6IGJvb2xlYW47XHJcbiAgICBhY3RpdmVTZWN0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyBzaG93TWVudSwgYWN0aXZlU2VjdGlvbiB9OiBNZW51UHJvcHMpIHtcclxuICAgIGNvbnN0IFtjdXJyZW50TGksIHNldEN1cnJlbnRMaV0gPSB1c2VTdGF0ZTxIVE1MTElFbGVtZW50fHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50TGkpIHtcclxuICAgICAgICAgICAgY3VycmVudExpLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5hY3RpdmUpO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50TGkoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1lbnUgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVudX0gJHtzaG93TWVudSA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICBHZXR0aW5nIFN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gdGl0bGU9J0luc3RhbGxhdGlvbicgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdExpbmsgaHJlZj0nI2luc3RhbGwtY29tcG9zZXInIGFjdGl2ZVNlY3Rpb249e2FjdGl2ZVNlY3Rpb259PkNvbXBvc2VyPC9MaXN0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdExpbmsgaHJlZj0nI2luc3RhbGwtZ2l0JyBhY3RpdmVTZWN0aW9uPXthY3RpdmVTZWN0aW9ufT5HaXQ8L0xpc3RMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSB0aXRsZT0nU2V0dXAnIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RMaW5rIGhyZWY9JyNpbml0JyBhY3RpdmVTZWN0aW9uPXthY3RpdmVTZWN0aW9ufT5Jbml0PC9MaXN0TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9tZW51PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTGlzdEl0ZW0iLCJMaXN0TGluayIsIk1lbnUiLCJzaG93TWVudSIsImFjdGl2ZVNlY3Rpb24iLCJjdXJyZW50TGkiLCJzZXRDdXJyZW50TGkiLCJ1bmRlZmluZWQiLCJoYW5kbGVDbGljayIsImV2dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJtZW51IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImxhYmVsIiwidGl0bGUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/learn/_components/menu/index.tsx\n"));

/***/ })

});