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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ observeSections; }\n/* harmony export */ });\nfunction observeSections(setActiveSection, styles) {\n    const sectionsObserver = new IntersectionObserver((entries)=>{\n        let firstSection = entries[0];\n        entries.forEach((entry)=>{\n            if (firstSection !== entry && entry.isIntersecting && entry.boundingClientRect.top < firstSection.boundingClientRect.top) {\n                firstSection = entry;\n            }\n        });\n        firstSection && setActiveSection(firstSection.target.id);\n    }, {\n        threshold: 1.0\n    });\n    document.querySelectorAll(\"section.navigable\").forEach((section)=>{\n        sectionsObserver.observe(section);\n    });\n    document.querySelectorAll(\"ul.navul\").forEach((ul)=>{\n        const ulObserver = new MutationObserver(()=>{\n            const hasActiveItem = Array.from(ul.children).some((li)=>li.classList.contains(styles.active));\n            ul.style.display = hasActiveItem ? \"flex\" : \"\";\n        });\n        ulObserver.observe(ul, {\n            attributes: true,\n            subtree: true\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9vYnNlcnZlU2VjdGlvbnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFNBQVNBLGdCQUFnQkMsZ0JBQXFCLEVBQUVDLE1BQVc7SUFDdEUsTUFBTUMsbUJBQW1CLElBQUlDLHFCQUFxQixDQUFDQztRQUMvQyxJQUFJQyxlQUEwQ0QsT0FBTyxDQUFDLEVBQUU7UUFFeERBLFFBQVFFLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDWixJQUFJRixpQkFBaUJFLFNBQVNBLE1BQU1DLGNBQWMsSUFBSUQsTUFBTUUsa0JBQWtCLENBQUNDLEdBQUcsR0FBR0wsYUFBYUksa0JBQWtCLENBQUNDLEdBQUcsRUFBRTtnQkFDdEhMLGVBQWVFO1lBQ25CO1FBQ0o7UUFHQUYsZ0JBQWdCTCxpQkFBaUJLLGFBQWFNLE1BQU0sQ0FBQ0MsRUFBRTtJQUUzRCxHQUFHO1FBQUVDLFdBQVc7SUFBSTtJQUVwQkMsU0FBU0MsZ0JBQWdCLENBQUMscUJBQXFCVCxPQUFPLENBQUNVLENBQUFBO1FBQ25EZCxpQkFBaUJlLE9BQU8sQ0FBQ0Q7SUFDN0I7SUFFQUYsU0FBU0MsZ0JBQWdCLENBQUMsWUFBWVQsT0FBTyxDQUFDLENBQUNZO1FBQzNDLE1BQU1DLGFBQWEsSUFBSUMsaUJBQWlCO1lBQ3BDLE1BQU1DLGdCQUFnQkMsTUFBTUMsSUFBSSxDQUFDTCxHQUFHTSxRQUFRLEVBQUVDLElBQUksQ0FBQyxDQUFDQyxLQUFZQSxHQUFHQyxTQUFTLENBQUNDLFFBQVEsQ0FBQzNCLE9BQU80QixNQUFNO1lBRW5HWCxHQUFHWSxLQUFLLENBQUNDLE9BQU8sR0FBR1YsZ0JBQWdCLFNBQVM7UUFDaEQ7UUFFQUYsV0FBV0YsT0FBTyxDQUFDQyxJQUFJO1lBQUVjLFlBQVk7WUFBTUMsU0FBUztRQUFLO0lBQzdEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL29ic2VydmVTZWN0aW9ucy9pbmRleC50cz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYnNlcnZlU2VjdGlvbnMoc2V0QWN0aXZlU2VjdGlvbjogYW55LCBzdHlsZXM6IGFueSkge1xyXG4gICAgY29uc3Qgc2VjdGlvbnNPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGxldCBmaXJzdFNlY3Rpb246IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBlbnRyaWVzWzBdO1xyXG4gICAgXHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpcnN0U2VjdGlvbiAhPT0gZW50cnkgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LnRvcCA8IGZpcnN0U2VjdGlvbi5ib3VuZGluZ0NsaWVudFJlY3QudG9wKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFNlY3Rpb24gPSBlbnRyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBmaXJzdFNlY3Rpb24gJiYgc2V0QWN0aXZlU2VjdGlvbihmaXJzdFNlY3Rpb24udGFyZ2V0LmlkKTtcclxuICAgICAgICBcclxuICAgIH0sIHsgdGhyZXNob2xkOiAxLjAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24ubmF2aWdhYmxlJykuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICBzZWN0aW9uc09ic2VydmVyLm9ic2VydmUoc2VjdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5uYXZ1bCcpLmZvckVhY2goKHVsOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCB1bE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNBY3RpdmVJdGVtID0gQXJyYXkuZnJvbSh1bC5jaGlsZHJlbikuc29tZSgobGk6IGFueSkgPT4gbGkuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlcy5hY3RpdmUpKTtcclxuXHJcbiAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSBoYXNBY3RpdmVJdGVtID8gJ2ZsZXgnIDogJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVsT2JzZXJ2ZXIub2JzZXJ2ZSh1bCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsib2JzZXJ2ZVNlY3Rpb25zIiwic2V0QWN0aXZlU2VjdGlvbiIsInN0eWxlcyIsInNlY3Rpb25zT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmaXJzdFNlY3Rpb24iLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRhcmdldCIsImlkIiwidGhyZXNob2xkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbiIsIm9ic2VydmUiLCJ1bCIsInVsT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiaGFzQWN0aXZlSXRlbSIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwic29tZSIsImxpIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhY3RpdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJhdHRyaWJ1dGVzIiwic3VidHJlZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/observeSections/index.ts\n"));

/***/ })

});