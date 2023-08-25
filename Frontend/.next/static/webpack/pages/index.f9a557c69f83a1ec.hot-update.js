"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/n2dusd-chart.js":
/*!************************************!*\
  !*** ./components/n2dusd-chart.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   N2dusdChart: function() { return /* binding */ N2dusdChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//Conexion a la API \nconst backend = \"http://localhost:8082\";\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction N2dusdChart() {\n    _s();\n    const [priceaction, getPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [timeaction, getTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, colorStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [liveprice, getLivePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateChart = setInterval(()=>{\n            getChart();\n        }, 2000);\n        return ()=>clearInterval(updateChart);\n    }, [\n        liveprice\n    ]);\n    async function getChart() {\n        let token = \"n2usd\";\n        const url = backend + \"/getchartinfo\";\n        const config = {\n            method: \"POST\",\n            body: JSON.stringify({\n                token\n            }),\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        };\n        const response = await fetch(url, config);\n        const output = await response.json();\n        const pricearray = output.chartprice;\n        const timearray = output.charttime;\n        let price = [];\n        let time = [];\n        let i = 0;\n        for(i; i < pricearray.length; i++){\n            let pricenum = pricearray[i].toFixed(4);\n            price.push(pricenum);\n            time.push(timearray[i]);\n        }\n        price.reverse();\n        time.reverse();\n        getLivePrice(price[0]);\n        let previous = Number(price[1]);\n        let newvalue = Number(price[0]);\n        if (previous < newvalue) {\n            colorStatus(\"#39ff1450\");\n        } else if (previous > newvalue) {\n            colorStatus(\"#dd00a980\");\n        } else colorStatus(\"#00c0f935\");\n        getPrice(price);\n        getTime(time);\n    }\n    const data = {\n        labels: [\n            timeaction[10],\n            timeaction[9],\n            timeaction[8],\n            timeaction[7],\n            timeaction[6],\n            timeaction[5],\n            timeaction[4],\n            timeaction[3],\n            timeaction[2],\n            timeaction[1],\n            timeaction[timeaction.length]\n        ],\n        datasets: [\n            {\n                lineTension: 0.4,\n                label: \"n2USD\",\n                borderColor: \"#ffffff\",\n                borderWidth: 2,\n                backgroundColor: status,\n                borderDashOffset: 0.7,\n                borderJoinStyle: \"round\",\n                pointBackgroundColor: \"white\",\n                pointBorderWidth: 2,\n                pointColor: \"black\",\n                pointHoverBackgroundColor: \"rgba(75,192,192,1)\",\n                pointHoverBorderColor: \"white\",\n                pointHoverBorderWidth: 1,\n                pointRadius: 3,\n                data: [\n                    priceaction[10],\n                    priceaction[9],\n                    priceaction[8],\n                    priceaction[7],\n                    priceaction[6],\n                    priceaction[5],\n                    priceaction[4],\n                    priceaction[3],\n                    priceaction[2],\n                    priceaction[1],\n                    priceaction[0]\n                ],\n                fill: \"origin\"\n            }\n        ]\n    };\n    const options = {\n        plugins: {\n            legend: {\n                display: false\n            }\n        },\n        scales: {\n            x: {\n                grid: {\n                    display: false,\n                    drawBorder: false\n                },\n                ticks: {\n                    display: true,\n                    beginAtZero: true,\n                    align: \"start\",\n                    color: \"#ffffff\",\n                    font: {\n                        size: 14,\n                        family: \"SF Pro Display\"\n                    }\n                }\n            },\n            y: {\n                type: \"linear\",\n                position: \"right\",\n                min: 0.8,\n                max: 1.12,\n                grid: {\n                    drawBorder: false,\n                    display: false\n                },\n                ticks: {\n                    display: true,\n                    color: \"#fff\",\n                    font: {\n                        size: 16,\n                        family: \"SF Pro Display\"\n                    }\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white rounded\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card d-grid\",\n            style: {\n                backgroundImage: \"linear-gradient(to right top, #00183d, #0c266d, #3a309c, #712fc7, #b212eb);\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row col-lg-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-grid px-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"n2usd-logo.png\",\n                                width: \"120\",\n                                style: {\n                                    opacity: \"0.7\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                                lineNumber: 157,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                            lineNumber: 156,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-grid px-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    color: \"#fff\",\n                                    fontFamily: \"SF Pro Display\",\n                                    fontWeight: \"400\"\n                                },\n                                children: liveprice\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                                lineNumber: 160,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                            lineNumber: 159,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                    lineNumber: 155,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    data: data,\n                    options: options\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                    lineNumber: 163,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s(N2dusdChart, \"eqnRDpGfbXfnaXZVnzUZHnsyMm8=\");\n_c = N2dusdChart;\nvar _c;\n$RefreshReg$(_c, \"N2dusdChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztnQ0FBSUMsS0FBSTtnQ0FBaUJDLE9BQU07Z0NBQU1KLE9BQU87b0NBQUNLLFNBQVE7Z0NBQUs7Ozs7Ozs7Ozs7O3NDQUUzRCw4REFBQ1A7NEJBQUlDLFdBQVU7c0NBQ2YsNEVBQUNPO2dDQUFHTixPQUFPO29DQUFDWCxPQUFPO29DQUFRa0IsWUFBVztvQ0FBa0JDLFlBQVc7Z0NBQUs7MENBQUlqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzlFLDhEQUFDcEIsaURBQUlBO29CQUFDcUQsTUFBTUE7b0JBQU1rQixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakM7R0F4SWdCMUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uMmR1c2QtY2hhcnQuanM/NDk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIFBvaW50RWxlbWVudCxcclxuICBMaW5lRWxlbWVudCwgXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbiAgRmlsbGVyLFxyXG59IGZyb20gJ2NoYXJ0LmpzJztcclxuXHJcbi8vQ29uZXhpb24gYSBsYSBBUEkgXHJcbmNvbnN0IGJhY2tlbmQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MlwiO1xyXG5cclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBGaWxsZXIsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgUG9pbnRFbGVtZW50LFxyXG4gIExpbmVFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kXHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE4yZHVzZENoYXJ0KCkge1xyXG4gIGNvbnN0IFtwcmljZWFjdGlvbiwgZ2V0UHJpY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0aW1lYWN0aW9uLCBnZXRUaW1lXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdHVzLCBjb2xvclN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xpdmVwcmljZSwgZ2V0TGl2ZVByaWNlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZUNoYXJ0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBnZXRDaGFydCgpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh1cGRhdGVDaGFydCk7XHJcbiAgfSwgW2xpdmVwcmljZV0pO1xyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhcnQoKSB7XHJcbiAgICBsZXQgdG9rZW4gPSAnbjJ1c2QnXHJcbiAgICBjb25zdCB1cmwgPSBiYWNrZW5kICsgXCIvZ2V0Y2hhcnRpbmZvXCI7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9rZW4gfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgY29uZmlnKTtcclxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHByaWNlYXJyYXkgPSBvdXRwdXQuY2hhcnRwcmljZTtcclxuICAgIGNvbnN0IHRpbWVhcnJheSA9IG91dHB1dC5jaGFydHRpbWU7XHJcbiAgICBsZXQgcHJpY2UgPSBbXVxyXG4gICAgbGV0IHRpbWUgPSBbXVxyXG4gICAgbGV0IGkgPSAwXHJcbiAgICBmb3IgKGk7IGkgPCBwcmljZWFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHByaWNlbnVtID0gKHByaWNlYXJyYXlbaV0pLnRvRml4ZWQoNClcclxuICAgICAgcHJpY2UucHVzaChwcmljZW51bSlcclxuICAgICAgdGltZS5wdXNoKHRpbWVhcnJheVtpXSlcclxuICAgIH1cclxuICAgIHByaWNlLnJldmVyc2UoKVxyXG4gICAgdGltZS5yZXZlcnNlKClcclxuICAgIGdldExpdmVQcmljZShwcmljZVswXSlcclxuICAgIGxldCBwcmV2aW91cyA9IE51bWJlcihwcmljZVsxXSlcclxuICAgIGxldCBuZXd2YWx1ZSA9IE51bWJlcihwcmljZVswXSkgXHJcbiAgICBpZiAocHJldmlvdXMgPCBuZXd2YWx1ZSkgeyBcclxuICAgICAgY29sb3JTdGF0dXMoJyMzOWZmMTQ1MCcpIFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJldmlvdXMgPiBuZXd2YWx1ZSl7IFxyXG4gICAgICBjb2xvclN0YXR1cygnI2RkMDBhOTgwJykgIFxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgY29sb3JTdGF0dXMoJyMwMGMwZjkzNScpIFxyXG4gICAgZ2V0UHJpY2UocHJpY2UpO1xyXG4gICAgZ2V0VGltZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFsgdGltZWFjdGlvblsxMF0sdGltZWFjdGlvbls5XSx0aW1lYWN0aW9uWzhdLCB0aW1lYWN0aW9uWzddLCB0aW1lYWN0aW9uWzZdLCAgdGltZWFjdGlvbls1XSwgIHRpbWVhY3Rpb25bNF0sICB0aW1lYWN0aW9uWzNdLCAgdGltZWFjdGlvblsyXSwgdGltZWFjdGlvblsxXSwgdGltZWFjdGlvblt0aW1lYWN0aW9uLmxlbmd0aF1dLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxpbmVUZW5zaW9uOiAwLjQsXHJcbiAgICAgICAgbGFiZWw6ICduMlVTRCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdHVzLFxyXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuNyxcclxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdyb3VuZCcsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIHBvaW50Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgcG9pbnRSYWRpdXM6IDMsXHJcbiAgICAgICAgZGF0YTogW3ByaWNlYWN0aW9uWzEwXSxwcmljZWFjdGlvbls5XSxwcmljZWFjdGlvbls4XSwgcHJpY2VhY3Rpb25bN10sIHByaWNlYWN0aW9uWzZdLCAgcHJpY2VhY3Rpb25bNV0sICBwcmljZWFjdGlvbls0XSwgIHByaWNlYWN0aW9uWzNdLCAgcHJpY2VhY3Rpb25bMl0sIHByaWNlYWN0aW9uWzFdLCBwcmljZWFjdGlvblswXV0sXHJcbiAgICAgICAgZmlsbDogJ29yaWdpbicsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgIH0sICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICBkaXNwbGF5OnRydWUsXHJcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgIGZhbWlseTonU0YgUHJvIERpc3BsYXknXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICB0eXBlOiAnbGluZWFyJyxcclxuICAgICAgICBwb3NpdGlvbjoncmlnaHQnLFxyXG4gICAgICAgIG1pbjogMC44LFxyXG4gICAgICAgIG1heDogMS4xMixcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBkcmF3Qm9yZGVyOmZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgIGZhbWlseTonU0YgUHJvIERpc3BsYXknXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcm91bmRlZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBkLWdyaWQnIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwMDE4M2QsICMwYzI2NmQsICMzYTMwOWMsICM3MTJmYzcsICNiMjEyZWIpO1wiICB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLWxnLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBweC00XCI+XHJcbiAgICAgICAgPGltZyBzcmM9J24ydXNkLWxvZ28ucG5nJyB3aWR0aD0nMTIwJyBzdHlsZT17e29wYWNpdHk6JzAuNyd9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWQgcHgtMlwiPlxyXG4gICAgICAgIDxoNCBzdHlsZT17e2NvbG9yOiBcIiNmZmZcIiwgZm9udEZhbWlseTonU0YgUHJvIERpc3BsYXknLCBmb250V2VpZ2h0Oic0MDAnfX0+e2xpdmVwcmljZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluZSIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIkxpbmVhclNjYWxlIiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwiRmlsbGVyIiwiYmFja2VuZCIsInJlZ2lzdGVyIiwiTjJkdXNkQ2hhcnQiLCJwcmljZWFjdGlvbiIsImdldFByaWNlIiwidGltZWFjdGlvbiIsImdldFRpbWUiLCJzdGF0dXMiLCJjb2xvclN0YXR1cyIsImxpdmVwcmljZSIsImdldExpdmVQcmljZSIsInVwZGF0ZUNoYXJ0Iiwic2V0SW50ZXJ2YWwiLCJnZXRDaGFydCIsImNsZWFySW50ZXJ2YWwiLCJ0b2tlbiIsInVybCIsImNvbmZpZyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvdXRwdXQiLCJqc29uIiwicHJpY2VhcnJheSIsImNoYXJ0cHJpY2UiLCJ0aW1lYXJyYXkiLCJjaGFydHRpbWUiLCJwcmljZSIsInRpbWUiLCJpIiwibGVuZ3RoIiwicHJpY2VudW0iLCJ0b0ZpeGVkIiwicHVzaCIsInJldmVyc2UiLCJwcmV2aW91cyIsIk51bWJlciIsIm5ld3ZhbHVlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGluZVRlbnNpb24iLCJsYWJlbCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsImZpbGwiLCJvcHRpb25zIiwicGx1Z2lucyIsImxlZ2VuZCIsImRpc3BsYXkiLCJzY2FsZXMiLCJ4IiwiZ3JpZCIsImRyYXdCb3JkZXIiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwiYWxpZ24iLCJjb2xvciIsImZvbnQiLCJzaXplIiwiZmFtaWx5IiwieSIsInR5cGUiLCJwb3NpdGlvbiIsIm1pbiIsIm1heCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaW1nIiwic3JjIiwid2lkdGgiLCJvcGFjaXR5IiwiaDQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/n2dusd-chart.js\n"));

/***/ })

});