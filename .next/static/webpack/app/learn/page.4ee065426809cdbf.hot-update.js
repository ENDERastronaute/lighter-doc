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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ observeSections; }\n/* harmony export */ });\nfunction observeSections(setActiveSection, styles) {\n    const sectionsObserver = new IntersectionObserver((entries)=>{\n        let firstSection = entries[0];\n        entries.forEach((entry)=>{\n            if (firstSection !== entry && entry.isIntersecting && entry.boundingClientRect.top < firstSection.boundingClientRect.top) {\n                firstSection = entry;\n            }\n        });\n        firstSection && setActiveSection(firstSection.target.id);\n    }, {\n        threshold: 1.0\n    });\n    document.querySelectorAll(\"section.navigable\").forEach((section)=>{\n        sectionsObserver.observe(section);\n    });\n    document.querySelectorAll(\"ul.navul\").forEach((ul)=>{\n        const ulObserver = new MutationObserver(()=>{\n            const hasActiveItem = Array.from(ul.children).some((li)=>li.classList.contains(styles.active));\n            if (hasActiveItem && !ul.parentElement.classList.contains(styles.active)) {\n                console.log(ul.parentElement);\n            } else {\n                ul.parentElement.classList.remove(styles.active);\n            }\n        });\n        ulObserver.observe(ul, {\n            attributes: true,\n            subtree: true\n        });\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9vYnNlcnZlU2VjdGlvbnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLFNBQVNBLGdCQUFnQkMsZ0JBQXFCLEVBQUVDLE1BQVc7SUFDdEUsTUFBTUMsbUJBQW1CLElBQUlDLHFCQUFxQixDQUFDQztRQUMvQyxJQUFJQyxlQUEwQ0QsT0FBTyxDQUFDLEVBQUU7UUFFeERBLFFBQVFFLE9BQU8sQ0FBQ0MsQ0FBQUE7WUFDWixJQUFJRixpQkFBaUJFLFNBQVNBLE1BQU1DLGNBQWMsSUFBSUQsTUFBTUUsa0JBQWtCLENBQUNDLEdBQUcsR0FBR0wsYUFBYUksa0JBQWtCLENBQUNDLEdBQUcsRUFBRTtnQkFDdEhMLGVBQWVFO1lBQ25CO1FBQ0o7UUFHQUYsZ0JBQWdCTCxpQkFBaUJLLGFBQWFNLE1BQU0sQ0FBQ0MsRUFBRTtJQUUzRCxHQUFHO1FBQUVDLFdBQVc7SUFBSTtJQUVwQkMsU0FBU0MsZ0JBQWdCLENBQUMscUJBQXFCVCxPQUFPLENBQUMsQ0FBQ1U7UUFDcERkLGlCQUFpQmUsT0FBTyxDQUFDRDtJQUM3QjtJQUVBRixTQUFTQyxnQkFBZ0IsQ0FBQyxZQUFZVCxPQUFPLENBQUMsQ0FBQ1k7UUFDM0MsTUFBTUMsYUFBYSxJQUFJQyxpQkFBaUI7WUFDcEMsTUFBTUMsZ0JBQWdCQyxNQUFNQyxJQUFJLENBQUNMLEdBQUdNLFFBQVEsRUFBRUMsSUFBSSxDQUFDLENBQUNDLEtBQVlBLEdBQUdDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDM0IsT0FBTzRCLE1BQU07WUFFbkcsSUFBSVIsaUJBQWlCLENBQUNILEdBQUdZLGFBQWEsQ0FBQ0gsU0FBUyxDQUFDQyxRQUFRLENBQUMzQixPQUFPNEIsTUFBTSxHQUFHO2dCQUN0RUUsUUFBUUMsR0FBRyxDQUFDZCxHQUFHWSxhQUFhO1lBRWhDLE9BQ0s7Z0JBQ0RaLEdBQUdZLGFBQWEsQ0FBQ0gsU0FBUyxDQUFDTSxNQUFNLENBQUNoQyxPQUFPNEIsTUFBTTtZQUNuRDtRQUNKO1FBRUFWLFdBQVdGLE9BQU8sQ0FBQ0MsSUFBSTtZQUFFZ0IsWUFBWTtZQUFNQyxTQUFTO1FBQUs7SUFDN0Q7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvb2JzZXJ2ZVNlY3Rpb25zL2luZGV4LnRzPzFkNTAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9ic2VydmVTZWN0aW9ucyhzZXRBY3RpdmVTZWN0aW9uOiBhbnksIHN0eWxlczogYW55KSB7XHJcbiAgICBjb25zdCBzZWN0aW9uc09ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpcnN0U2VjdGlvbjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IGVudHJpZXNbMF07XHJcbiAgICBcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RTZWN0aW9uICE9PSBlbnRyeSAmJiBlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QudG9wIDwgZmlyc3RTZWN0aW9uLmJvdW5kaW5nQ2xpZW50UmVjdC50b3ApIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0U2VjdGlvbiA9IGVudHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGZpcnN0U2VjdGlvbiAmJiBzZXRBY3RpdmVTZWN0aW9uKGZpcnN0U2VjdGlvbi50YXJnZXQuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgfSwgeyB0aHJlc2hvbGQ6IDEuMCB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbi5uYXZpZ2FibGUnKS5mb3JFYWNoKChzZWN0aW9uOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbnNPYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwubmF2dWwnKS5mb3JFYWNoKCh1bDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdWxPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGFzQWN0aXZlSXRlbSA9IEFycmF5LmZyb20odWwuY2hpbGRyZW4pLnNvbWUoKGxpOiBhbnkpID0+IGxpLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZXMuYWN0aXZlKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFzQWN0aXZlSXRlbSAmJiAhdWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLmFjdGl2ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVsLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdWxPYnNlcnZlci5vYnNlcnZlKHVsLCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJvYnNlcnZlU2VjdGlvbnMiLCJzZXRBY3RpdmVTZWN0aW9uIiwic3R5bGVzIiwic2VjdGlvbnNPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZpcnN0U2VjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwidGFyZ2V0IiwiaWQiLCJ0aHJlc2hvbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsInVsIiwidWxPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJoYXNBY3RpdmVJdGVtIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJzb21lIiwibGkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZSIsInBhcmVudEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiYXR0cmlidXRlcyIsInN1YnRyZWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/observeSections/index.ts\n"));

/***/ })

});