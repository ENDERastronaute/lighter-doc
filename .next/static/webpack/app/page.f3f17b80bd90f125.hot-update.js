"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/info/index.tsx":
/*!***************************************!*\
  !*** ./src/components/info/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Info; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"(app-pages-browser)/./src/components/info/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Info() {\n    _s();\n    const [latestRelease, setLatestRelease] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            const response = await fetch(\"https://api.github.com/repos/enderastronaute/lighter/releases/latest\");\n            const data = await response.json();\n            setLatestRelease(data);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: latestRelease && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n            children: [\n                latestRelease.name,\n                \" is out!\\xa0 \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"https://github.com/ENDERastronaute/Lighter/releases/tag/\".concat(latestRelease.tag_name),\n                    children: \"Go check it out!\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\components\\\\info\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 103\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\components\\\\info\\\\index.tsx\",\n            lineNumber: 23,\n            columnNumber: 34\n        }, this)\n    }, void 0, false);\n}\n_s(Info, \"UoobssmozwH1y0WS2HTeHq8oEMU=\");\n_c = Info;\nvar _c;\n$RefreshReg$(_c, \"Info\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luZm8vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRztBQUNmO0FBRWQsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFNSztJQUV4RE4sZ0RBQVNBLENBQUM7UUFDTDtZQUNHLE1BQU1PLFdBQVcsTUFBTUMsTUFBTTtZQUU3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFFaENMLGlCQUFpQkk7UUFDckI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSTtrQkFFUUwsK0JBQWlCLDhEQUFDTztZQUFPQyxXQUFXYixrRUFBYTs7Z0JBQUdLLGNBQWNTLElBQUk7Z0JBQUM7OEJBQWUsOERBQUNYLGtEQUFJQTtvQkFBQ1ksTUFBTSwyREFBa0YsT0FBdkJWLGNBQWNXLFFBQVE7OEJBQUk7Ozs7Ozs7Ozs7Ozs7QUFJdk07R0FwQndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbmZvL2luZGV4LnRzeD84YjI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm8oKSB7XHJcbiAgICBjb25zdCBbbGF0ZXN0UmVsZWFzZSwgc2V0TGF0ZXN0UmVsZWFzZV0gPSB1c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2VuZGVyYXN0cm9uYXV0ZS9saWdodGVyL3JlbGVhc2VzL2xhdGVzdCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldExhdGVzdFJlbGVhc2UoZGF0YSk7XHJcbiAgICAgICAgfSkoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhdGVzdFJlbGVhc2UgJiYgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PntsYXRlc3RSZWxlYXNlLm5hbWV9IGlzIG91dCEmbmJzcDsgPExpbmsgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS9FTkRFUmFzdHJvbmF1dGUvTGlnaHRlci9yZWxlYXNlcy90YWcvJHtsYXRlc3RSZWxlYXNlLnRhZ19uYW1lfWB9PkdvIGNoZWNrIGl0IG91dCE8L0xpbms+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbmZvIiwibGF0ZXN0UmVsZWFzZSIsInNldExhdGVzdFJlbGVhc2UiLCJ1bmRlZmluZWQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYW1lIiwiaHJlZiIsInRhZ19uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/info/index.tsx\n"));

/***/ })

});