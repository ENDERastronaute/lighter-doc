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

/***/ "(app-pages-browser)/./src/utils/observeSections/index.ts":
/*!********************************************!*\
  !*** ./src/utils/observeSections/index.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ observeSections; }\n/* harmony export */ });\nfunction observeSections(setActiveSection) {\n    const sectionsObserver = new IntersectionObserver((entries)=>{\n        let firstSection = entries[0];\n        entries.forEach((entry)=>{\n            if (firstSection !== entry && entry.isIntersecting && entry.boundingClientRect.top < firstSection.boundingClientRect.top) {\n                firstSection = entry;\n            }\n        });\n        firstSection && setActiveSection(firstSection.target.id);\n    }, {\n        threshold: 1.0\n    });\n    document.querySelectorAll(\"section.navigable\").forEach((section)=>{\n        sectionsObserver.observe(section);\n    });\n    document.querySelectorAll(\"ul.navul\").forEach((ul)=>{\n        const ulObserver = new MutationObserver(()=>{\n            const hasActiveItem = Array.from(ul.children).some((li)=>li.classList.contains(\"active\"));\n            ul.style.display = hasActiveItem ? \"flex\" : \"none\";\n        });\n        ulObserver;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9vYnNlcnZlU2VjdGlvbnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFNBQVNBLGdCQUFnQkMsZ0JBQXFCO0lBQ3pELE1BQU1DLG1CQUFtQixJQUFJQyxxQkFBcUIsQ0FBQ0M7UUFDL0MsSUFBSUMsZUFBMENELE9BQU8sQ0FBQyxFQUFFO1FBRXhEQSxRQUFRRSxPQUFPLENBQUNDLENBQUFBO1lBQ1osSUFBSUYsaUJBQWlCRSxTQUFTQSxNQUFNQyxjQUFjLElBQUlELE1BQU1FLGtCQUFrQixDQUFDQyxHQUFHLEdBQUdMLGFBQWFJLGtCQUFrQixDQUFDQyxHQUFHLEVBQUU7Z0JBQ3RITCxlQUFlRTtZQUNuQjtRQUNKO1FBR0FGLGdCQUFnQkosaUJBQWlCSSxhQUFhTSxNQUFNLENBQUNDLEVBQUU7SUFFM0QsR0FBRztRQUFFQyxXQUFXO0lBQUk7SUFFcEJDLFNBQVNDLGdCQUFnQixDQUFDLHFCQUFxQlQsT0FBTyxDQUFDVSxDQUFBQTtRQUNuRGQsaUJBQWlCZSxPQUFPLENBQUNEO0lBQzdCO0lBRUFGLFNBQVNDLGdCQUFnQixDQUFDLFlBQVlULE9BQU8sQ0FBQyxDQUFDWTtRQUMzQyxNQUFNQyxhQUFhLElBQUlDLGlCQUFpQjtZQUNwQyxNQUFNQyxnQkFBZ0JDLE1BQU1DLElBQUksQ0FBQ0wsR0FBR00sUUFBUSxFQUFFQyxJQUFJLENBQUMsQ0FBQ0MsS0FBWUEsR0FBR0MsU0FBUyxDQUFDQyxRQUFRLENBQUM7WUFFdEZWLEdBQUdXLEtBQUssQ0FBQ0MsT0FBTyxHQUFHVCxnQkFBZ0IsU0FBUztRQUNoRDtRQUVBRjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL29ic2VydmVTZWN0aW9ucy9pbmRleC50cz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZlU2VjdGlvbnMoc2V0QWN0aXZlU2VjdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBzZWN0aW9uc09ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcnN0U2VjdGlvbjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RTZWN0aW9uICE9PSBlbnRyeSAmJiBlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QudG9wIDwgZmlyc3RTZWN0aW9uLmJvdW5kaW5nQ2xpZW50UmVjdC50b3ApIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0U2VjdGlvbiA9IGVudHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGZpcnN0U2VjdGlvbiAmJiBzZXRBY3RpdmVTZWN0aW9uKGZpcnN0U2VjdGlvbi50YXJnZXQuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgfSwgeyB0aHJlc2hvbGQ6IDEuMCB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbi5uYXZpZ2FibGUnKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIHNlY3Rpb25zT2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLm5hdnVsJykuZm9yRWFjaCgodWw6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVsT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0FjdGl2ZUl0ZW0gPSBBcnJheS5mcm9tKHVsLmNoaWxkcmVuKS5zb21lKChsaTogYW55KSA9PiBsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSBoYXNBY3RpdmVJdGVtID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bE9ic2VydmVyXHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJvYnNlcnZlU2VjdGlvbnMiLCJzZXRBY3RpdmVTZWN0aW9uIiwic2VjdGlvbnNPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0U2VjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwidGFyZ2V0IiwiaWQiLCJ0aHJlc2hvbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsInVsIiwidWxPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJoYXNBY3RpdmVJdGVtIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJzb21lIiwibGkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/observeSections/index.ts\n"));

/***/ })

});