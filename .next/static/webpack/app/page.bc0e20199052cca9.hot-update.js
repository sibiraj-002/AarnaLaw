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

/***/ "(app-pages-browser)/./components/Podcasts.js":
/*!********************************!*\
  !*** ./components/Podcasts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PodcastCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PodcastCard */ \"(app-pages-browser)/./components/PodcastCard.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Podcasts = ()=>{\n    _s();\n    const [podcasts, setPodcasts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const hasFetchedData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (hasFetchedData.current) return;\n        hasFetchedData.current = true;\n        const fetchPodcasts = async ()=>{\n            try {\n                const response = await fetch(\"https://www.aarnalaw.com/wp-json/wp/v2/podcast\");\n                const data = await response.json();\n                const latestPodcasts = await data.sort((a, b)=>new Date(b.date) - new Date(a.date)).slice(0, 2).map((podcast)=>({\n                        ...podcast,\n                        formattedDate: formatDate(podcast.date),\n                        imageUrl: podcast.episode_player_image\n                    }));\n                setPodcasts(latestPodcasts);\n                console.log(latestPodcasts);\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        fetchPodcasts();\n    }, []);\n    const formatDate = (dateString)=>{\n        const date = new Date(dateString);\n        return new Intl.DateTimeFormat(\"en-US\", {\n            month: \"long\",\n            day: \"numeric\",\n            year: \"numeric\"\n        }).format(date);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-10 pb-10 flex flex-col items-center mt- md:mt-[520px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-custom-blue text-2xl font-semibold text-center\",\n                children: \"Podcast\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Aarna-law\\\\AarnaLaw_june_28\\\\aarna-law\\\\components\\\\Podcasts.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap justify-center gap-3 w-full\",\n                children: podcasts.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PodcastCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        podcastDetails: item\n                    }, item.id, false, {\n                        fileName: \"D:\\\\Aarna-law\\\\AarnaLaw_june_28\\\\aarna-law\\\\components\\\\Podcasts.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Aarna-law\\\\AarnaLaw_june_28\\\\aarna-law\\\\components\\\\Podcasts.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"border border-custom-blue px-6 py-2 text-custom-blue hover:bg-custom-blue hover:text-white\",\n                children: \"View all\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Aarna-law\\\\AarnaLaw_june_28\\\\aarna-law\\\\components\\\\Podcasts.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Aarna-law\\\\AarnaLaw_june_28\\\\aarna-law\\\\components\\\\Podcasts.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Podcasts, \"sNTRs7MnBPPuz4/s99a1eJGgjVs=\");\n_c = Podcasts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Podcasts);\nvar _c;\n$RefreshReg$(_c, \"Podcasts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9kY2FzdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUwRDtBQUNuQjtBQUV2QyxNQUFNSyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1LLGlCQUFpQk4sNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sZUFBZUMsT0FBTyxFQUFFO1FBQzVCRCxlQUFlQyxPQUFPLEdBQUc7UUFFekIsTUFBTUMsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtnQkFFRixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDLE1BQU1DLGlCQUFpQixNQUFNRixLQUMxQkcsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU0sSUFBSUMsS0FBS0QsRUFBRUUsSUFBSSxJQUFJLElBQUlELEtBQUtGLEVBQUVHLElBQUksR0FDakRDLEtBQUssQ0FBQyxHQUFHLEdBQ1RDLEdBQUcsQ0FBQyxDQUFDQyxVQUFhO3dCQUNqQixHQUFHQSxPQUFPO3dCQUNWQyxlQUFlQyxXQUFXRixRQUFRSCxJQUFJO3dCQUN0Q00sVUFBVUgsUUFBUUksb0JBQW9CO29CQUN4QztnQkFFRnBCLFlBQVlRO2dCQUNaYSxRQUFRQyxHQUFHLENBQUNkO1lBQ2QsRUFBRSxPQUFPZSxPQUFPO2dCQUNkRixRQUFRQyxHQUFHLENBQUNDO1lBQ2Q7UUFDRjtRQUNBcEI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNZSxhQUFhLENBQUNNO1FBQ2xCLE1BQU1YLE9BQU8sSUFBSUQsS0FBS1k7UUFDdEIsT0FBTyxJQUFJQyxLQUFLQyxjQUFjLENBQUMsU0FBUztZQUN0Q0MsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLE1BQU07UUFDUixHQUFHQyxNQUFNLENBQUNqQjtJQUNaO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNEOzs7Ozs7MEJBR3BFLDhEQUFDRTtnQkFBR0YsV0FBVTswQkFDWGpDLFNBQVNnQixHQUFHLENBQUMsQ0FBQ29CLHFCQUNiLDhEQUFDdEMsb0RBQVdBO3dCQUFldUMsZ0JBQWdCRDt1QkFBekJBLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7MEJBRzdCLDhEQUFDQztnQkFBT04sV0FBVTswQkFBNkY7Ozs7Ozs7Ozs7OztBQUtySDtHQXhETWxDO0tBQUFBO0FBMEROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9kY2FzdHMuanM/MzJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQb2RjYXN0Q2FyZCBmcm9tIFwiLi9Qb2RjYXN0Q2FyZFwiXG5cbmNvbnN0IFBvZGNhc3RzID0gKCkgPT4ge1xuICBjb25zdCBbcG9kY2FzdHMsIHNldFBvZGNhc3RzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBoYXNGZXRjaGVkRGF0YSA9IHVzZVJlZihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNGZXRjaGVkRGF0YS5jdXJyZW50KSByZXR1cm5cbiAgICBoYXNGZXRjaGVkRGF0YS5jdXJyZW50ID0gdHJ1ZVxuXG4gICAgY29uc3QgZmV0Y2hQb2RjYXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgXCJodHRwczovL3d3dy5hYXJuYWxhdy5jb20vd3AtanNvbi93cC92Mi9wb2RjYXN0XCJcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnN0IGxhdGVzdFBvZGNhc3RzID0gYXdhaXQgZGF0YVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKSlcbiAgICAgICAgICAuc2xpY2UoMCwgMilcbiAgICAgICAgICAubWFwKChwb2RjYXN0KSA9PiAoe1xuICAgICAgICAgICAgLi4ucG9kY2FzdCxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdERhdGUocG9kY2FzdC5kYXRlKSxcbiAgICAgICAgICAgIGltYWdlVXJsOiBwb2RjYXN0LmVwaXNvZGVfcGxheWVyX2ltYWdlLFxuICAgICAgICAgIH0pKVxuXG4gICAgICAgIHNldFBvZGNhc3RzKGxhdGVzdFBvZGNhc3RzKVxuICAgICAgICBjb25zb2xlLmxvZyhsYXRlc3RQb2RjYXN0cylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaFBvZGNhc3RzKClcbiAgfSwgW10pXG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIH0pLmZvcm1hdChkYXRlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTAgcGItMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtIG1kOm10LVs1MjBweF1cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibHVlIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgUG9kY2FzdFxuICAgICAgPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyB3LWZ1bGxcIj5cbiAgICAgICAge3BvZGNhc3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxQb2RjYXN0Q2FyZCBrZXk9e2l0ZW0uaWR9IHBvZGNhc3REZXRhaWxzPXtpdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItY3VzdG9tLWJsdWUgcHgtNiBweS0yIHRleHQtY3VzdG9tLWJsdWUgaG92ZXI6YmctY3VzdG9tLWJsdWUgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICBWaWV3IGFsbFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9kY2FzdHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9kY2FzdENhcmQiLCJQb2RjYXN0cyIsInBvZGNhc3RzIiwic2V0UG9kY2FzdHMiLCJoYXNGZXRjaGVkRGF0YSIsImN1cnJlbnQiLCJmZXRjaFBvZGNhc3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibGF0ZXN0UG9kY2FzdHMiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiZGF0ZSIsInNsaWNlIiwibWFwIiwicG9kY2FzdCIsImZvcm1hdHRlZERhdGUiLCJmb3JtYXREYXRlIiwiaW1hZ2VVcmwiLCJlcGlzb2RlX3BsYXllcl9pbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRhdGVTdHJpbmciLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJtb250aCIsImRheSIsInllYXIiLCJmb3JtYXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwiaXRlbSIsInBvZGNhc3REZXRhaWxzIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Podcasts.js\n"));

/***/ })

});