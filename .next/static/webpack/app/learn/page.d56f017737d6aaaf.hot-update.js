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

/***/ "(app-pages-browser)/./src/app/learn/page.components.tsx":
/*!*******************************************!*\
  !*** ./src/app/learn/page.components.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Learn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./src/components/header/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/menu */ \"(app-pages-browser)/./src/app/learn/_components/menu/index.tsx\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/main */ \"(app-pages-browser)/./src/app/learn/_components/main/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Learn() {\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleMenu = ()=>{\n        setShowMenu(!showMenu);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            let firstSection = entries[0];\n            entries.forEach((entry)=>{\n                if (firstSection !== entry && entry.isIntersecting) {\n                    firstSection = entry;\n                    console.log(\"yey\");\n                }\n            });\n            firstSection && setActiveSection(firstSection.target.id);\n        });\n        document.querySelectorAll(\"section\").forEach((section)=>{\n            observer.observe(section);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                handleMenu: handleMenu,\n                showMenu: showMenu\n            }, void 0, false, {\n                fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\page.components.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                showMenu: showMenu,\n                activeSection: activeSection\n            }, void 0, false, {\n                fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\page.components.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_main__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\divers\\\\projets_persos\\\\lighter-doc\\\\src\\\\app\\\\learn\\\\page.components.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Learn, \"138fZgtGug8c1skKbiUKkOA/gfQ=\");\n_c = Learn;\nvar _c;\n$RefreshReg$(_c, \"Learn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGVhcm4vcGFnZS5jb21wb25lbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRztBQUNOO0FBQ0E7QUFFdkIsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBVTtJQUNsRCxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBUztJQUUzRCxNQUFNUSxhQUFhO1FBQ2ZILFlBQVksQ0FBQ0Q7SUFDakI7SUFFQUwsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxXQUFXLElBQUlDLHFCQUFxQixDQUFDQztZQUN2QyxJQUFJQyxlQUEwQ0QsT0FBTyxDQUFDLEVBQUU7WUFFeERBLFFBQVFFLE9BQU8sQ0FBQ0MsQ0FBQUE7Z0JBQ1osSUFBSUYsaUJBQWlCRSxTQUFTQSxNQUFNQyxjQUFjLEVBQUU7b0JBQ2hESCxlQUFlRTtvQkFFZkUsUUFBUUMsR0FBRyxDQUFDO2dCQUNoQjtZQUNKO1lBR0FMLGdCQUFnQkwsaUJBQWlCSyxhQUFhTSxNQUFNLENBQUNDLEVBQUU7UUFDM0Q7UUFFQUMsU0FBU0MsZ0JBQWdCLENBQUMsV0FBV1IsT0FBTyxDQUFDUyxDQUFBQTtZQUN6Q2IsU0FBU2MsT0FBTyxDQUFDRDtRQUNyQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJOzswQkFDSSw4REFBQ3hCLDBEQUFNQTtnQkFBQ1UsWUFBWUE7Z0JBQVlKLFVBQVVBOzs7Ozs7MEJBQzFDLDhEQUFDSCx3REFBSUE7Z0JBQUNHLFVBQVVBO2dCQUFVRSxlQUFlQTs7Ozs7OzBCQUN6Qyw4REFBQ0osd0RBQUlBOzs7Ozs7O0FBR2pCO0dBcEN3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sZWFybi9wYWdlLmNvbXBvbmVudHMudHN4P2NjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vX2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9fY29tcG9uZW50cy9tYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFybigpIHtcclxuICAgIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93TWVudSghc2hvd01lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0U2VjdGlvbjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFNlY3Rpb24gIT09IGVudHJ5ICYmIGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RTZWN0aW9uID0gZW50cnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgZmlyc3RTZWN0aW9uICYmIHNldEFjdGl2ZVNlY3Rpb24oZmlyc3RTZWN0aW9uLnRhcmdldC5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBoYW5kbGVNZW51PXtoYW5kbGVNZW51fSBzaG93TWVudT17c2hvd01lbnV9PjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8TWVudSBzaG93TWVudT17c2hvd01lbnV9IGFjdGl2ZVNlY3Rpb249e2FjdGl2ZVNlY3Rpb259PjwvTWVudT5cclxuICAgICAgICAgICAgPE1haW4+PC9NYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWVudSIsIk1haW4iLCJMZWFybiIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImhhbmRsZU1lbnUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0U2VjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/learn/page.components.tsx\n"));

/***/ })

});