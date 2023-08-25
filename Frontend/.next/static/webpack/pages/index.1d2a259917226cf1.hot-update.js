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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   N2dusdChart: function() { return /* binding */ N2dusdChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n//Conexion a la API \nconst backend = \"http://localhost:8082\";\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction N2dusdChart() {\n    _s();\n    const [priceaction, getPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [timeaction, getTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, colorStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [liveprice, getLivePrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateChart = setInterval(()=>{\n            getChart();\n        }, 2000);\n        return ()=>clearInterval(updateChart);\n    }, [\n        liveprice\n    ]);\n    async function getChart() {\n        let token = \"n2usd\";\n        const url = backend + \"/getchartinfo\";\n        const config = {\n            method: \"POST\",\n            body: JSON.stringify({\n                token\n            }),\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        };\n        const response = await fetch(url, config); //lamada a la api\n        const output = await response.json();\n        const pricearray = output.chartprice;\n        const timearray = output.charttime;\n        let price = [];\n        let time = [];\n        let i = 0;\n        for(i; i < pricearray.length; i++){\n            let pricenum = pricearray[i].toFixed(4);\n            price.push(pricenum);\n            time.push(timearray[i]);\n        }\n        price.reverse() //se revierte el arreglo para obtener el precio mas reciente \n        ;\n        time.reverse() //tambien el tiempo \n        ;\n        getLivePrice(price[0]);\n        let previous = Number(price[1]) //Si la ultima lectura fue mayor o menor a la lectura mas reciente se cambia el color por variacion\n        ;\n        let newvalue = Number(price[0]);\n        if (previous < newvalue) {\n            colorStatus(\"#39ff1450\");\n        } else if (previous > newvalue) {\n            colorStatus(\"#dd00a980\");\n        } else colorStatus(\"#00c0f935\");\n        getPrice(price);\n        getTime(time);\n    }\n    const data = {\n        labels: [\n            timeaction[10],\n            timeaction[9],\n            timeaction[8],\n            timeaction[7],\n            timeaction[6],\n            timeaction[5],\n            timeaction[4],\n            timeaction[3],\n            timeaction[2],\n            timeaction[1],\n            timeaction[timeaction.length]\n        ],\n        datasets: [\n            {\n                lineTension: 0.4,\n                label: \"n2USD\",\n                borderColor: \"#ffffff\",\n                borderWidth: 2,\n                backgroundColor: status,\n                borderDashOffset: 0.7,\n                borderJoinStyle: \"round\",\n                pointBackgroundColor: \"white\",\n                pointBorderWidth: 2,\n                pointColor: \"black\",\n                pointHoverBackgroundColor: \"rgba(75,192,192,1)\",\n                pointHoverBorderColor: \"white\",\n                pointHoverBorderWidth: 1,\n                pointRadius: 3,\n                data: [\n                    priceaction[10],\n                    priceaction[9],\n                    priceaction[8],\n                    priceaction[7],\n                    priceaction[6],\n                    priceaction[5],\n                    priceaction[4],\n                    priceaction[3],\n                    priceaction[2],\n                    priceaction[1],\n                    priceaction[0]\n                ],\n                fill: \"origin\"\n            }\n        ]\n    };\n    const options = {\n        plugins: {\n            legend: {\n                display: false\n            }\n        },\n        scales: {\n            x: {\n                grid: {\n                    display: false,\n                    drawBorder: false\n                },\n                ticks: {\n                    display: true,\n                    beginAtZero: true,\n                    align: \"start\",\n                    color: \"#ffffff\",\n                    font: {\n                        size: 14,\n                        family: \"SF Pro Display\"\n                    }\n                }\n            },\n            y: {\n                type: \"linear\",\n                position: \"right\",\n                min: 0.8,\n                max: 1.12,\n                grid: {\n                    drawBorder: false,\n                    display: false\n                },\n                ticks: {\n                    display: true,\n                    color: \"#fff\",\n                    font: {\n                        size: 16,\n                        family: \"SF Pro Display\"\n                    }\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white rounded\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card d-grid\",\n            style: {\n                backgroundImage: \"linear-gradient(to right top, #00183d, #0c266d, #3a309c, #712fc7, #b212eb);\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row col-lg-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-grid px-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/crypto.png\",\n                                width: \"50\",\n                                style: {\n                                    opacity: \"0.7\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                                lineNumber: 157,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                            lineNumber: 156,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-grid px-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                style: {\n                                    color: \"#fff\",\n                                    fontFamily: \"SF Pro Display\",\n                                    fontWeight: \"400\"\n                                },\n                                children: liveprice\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                                lineNumber: 160,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                            lineNumber: 159,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                    lineNumber: 155,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                    data: data,\n                    options: options\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n                    lineNumber: 163,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\AlgorithmicStablecoinSol\\\\Algorithmic-stablecoin\\\\Frontend\\\\components\\\\n2dusd-chart.js\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s(N2dusdChart, \"eqnRDpGfbXfnaXZVnzUZHnsyMm8=\");\n_c = N2dusdChart;\nvar _c;\n$RefreshReg$(_c, \"N2dusdChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2YsNEVBQUNHO2dDQUFJQyxLQUFJO2dDQUFjQyxPQUFNO2dDQUFLSixPQUFPO29DQUFDSyxTQUFRO2dDQUFLOzs7Ozs7Ozs7OztzQ0FFdkQsOERBQUNQOzRCQUFJQyxXQUFVO3NDQUNmLDRFQUFDTztnQ0FBR04sT0FBTztvQ0FBQ1gsT0FBTztvQ0FBUWtCLFlBQVc7b0NBQWtCQyxZQUFXO2dDQUFLOzBDQUFJakY7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUc5RSw4REFBQ3BCLGlEQUFJQTtvQkFBQ3FELE1BQU1BO29CQUFNa0IsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0dBeElnQjFEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbjJkdXNkLWNoYXJ0LmpzPzQ5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsIFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG4gIEZpbGxlcixcclxufSBmcm9tICdjaGFydC5qcyc7XHJcblxyXG4vL0NvbmV4aW9uIGEgbGEgQVBJIFxyXG5jb25zdCBiYWNrZW5kID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODJcIjtcclxuXHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgRmlsbGVyLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIFBvaW50RWxlbWVudCxcclxuICBMaW5lRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOMmR1c2RDaGFydCgpIHtcclxuICBjb25zdCBbcHJpY2VhY3Rpb24sIGdldFByaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGltZWFjdGlvbiwgZ2V0VGltZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXR1cywgY29sb3JTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtsaXZlcHJpY2UsIGdldExpdmVQcmljZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVDaGFydCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgZ2V0Q2hhcnQoKTtcclxuICAgIH0sIDIwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodXBkYXRlQ2hhcnQpO1xyXG4gIH0sIFtsaXZlcHJpY2VdKTtcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENoYXJ0KCkgey8vbGxhbWFkYSBhbCBiYWNrIFxyXG4gICAgbGV0IHRva2VuID0gJ24ydXNkJ1xyXG4gICAgY29uc3QgdXJsID0gYmFja2VuZCArIFwiL2dldGNoYXJ0aW5mb1wiO1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZyk7Ly9sYW1hZGEgYSBsYSBhcGlcclxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHByaWNlYXJyYXkgPSBvdXRwdXQuY2hhcnRwcmljZTtcclxuICAgIGNvbnN0IHRpbWVhcnJheSA9IG91dHB1dC5jaGFydHRpbWU7XHJcbiAgICBsZXQgcHJpY2UgPSBbXVxyXG4gICAgbGV0IHRpbWUgPSBbXVxyXG4gICAgbGV0IGkgPSAwXHJcbiAgICBmb3IgKGk7IGkgPCBwcmljZWFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHByaWNlbnVtID0gKHByaWNlYXJyYXlbaV0pLnRvRml4ZWQoNClcclxuICAgICAgcHJpY2UucHVzaChwcmljZW51bSlcclxuICAgICAgdGltZS5wdXNoKHRpbWVhcnJheVtpXSlcclxuICAgIH1cclxuICAgIHByaWNlLnJldmVyc2UoKS8vc2UgcmV2aWVydGUgZWwgYXJyZWdsbyBwYXJhIG9idGVuZXIgZWwgcHJlY2lvIG1hcyByZWNpZW50ZSBcclxuICAgIHRpbWUucmV2ZXJzZSgpLy90YW1iaWVuIGVsIHRpZW1wbyBcclxuICAgIGdldExpdmVQcmljZShwcmljZVswXSlcclxuICAgIGxldCBwcmV2aW91cyA9IE51bWJlcihwcmljZVsxXSkvL1NpIGxhIHVsdGltYSBsZWN0dXJhIGZ1ZSBtYXlvciBvIG1lbm9yIGEgbGEgbGVjdHVyYSBtYXMgcmVjaWVudGUgc2UgY2FtYmlhIGVsIGNvbG9yIHBvciB2YXJpYWNpb25cclxuICAgIGxldCBuZXd2YWx1ZSA9IE51bWJlcihwcmljZVswXSkgXHJcbiAgICBpZiAocHJldmlvdXMgPCBuZXd2YWx1ZSkgeyBcclxuICAgICAgY29sb3JTdGF0dXMoJyMzOWZmMTQ1MCcpIFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJldmlvdXMgPiBuZXd2YWx1ZSl7IFxyXG4gICAgICBjb2xvclN0YXR1cygnI2RkMDBhOTgwJykgIFxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgY29sb3JTdGF0dXMoJyMwMGMwZjkzNScpIFxyXG4gICAgZ2V0UHJpY2UocHJpY2UpO1xyXG4gICAgZ2V0VGltZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFsgdGltZWFjdGlvblsxMF0sdGltZWFjdGlvbls5XSx0aW1lYWN0aW9uWzhdLCB0aW1lYWN0aW9uWzddLCB0aW1lYWN0aW9uWzZdLCAgdGltZWFjdGlvbls1XSwgIHRpbWVhY3Rpb25bNF0sICB0aW1lYWN0aW9uWzNdLCAgdGltZWFjdGlvblsyXSwgdGltZWFjdGlvblsxXSwgdGltZWFjdGlvblt0aW1lYWN0aW9uLmxlbmd0aF1dLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxpbmVUZW5zaW9uOiAwLjQsXHJcbiAgICAgICAgbGFiZWw6ICduMlVTRCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdHVzLFxyXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuNyxcclxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdyb3VuZCcsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIHBvaW50Q29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgcG9pbnRSYWRpdXM6IDMsXHJcbiAgICAgICAgZGF0YTogW3ByaWNlYWN0aW9uWzEwXSxwcmljZWFjdGlvbls5XSxwcmljZWFjdGlvbls4XSwgcHJpY2VhY3Rpb25bN10sIHByaWNlYWN0aW9uWzZdLCAgcHJpY2VhY3Rpb25bNV0sICBwcmljZWFjdGlvbls0XSwgIHByaWNlYWN0aW9uWzNdLCAgcHJpY2VhY3Rpb25bMl0sIHByaWNlYWN0aW9uWzFdLCBwcmljZWFjdGlvblswXV0sXHJcbiAgICAgICAgZmlsbDogJ29yaWdpbicsXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgIH0sICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICBkaXNwbGF5OnRydWUsXHJcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgIGFsaWduOiAnc3RhcnQnLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTQsXHJcbiAgICAgICAgICAgIGZhbWlseTonU0YgUHJvIERpc3BsYXknXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICB0eXBlOiAnbGluZWFyJyxcclxuICAgICAgICBwb3NpdGlvbjoncmlnaHQnLFxyXG4gICAgICAgIG1pbjogMC44LFxyXG4gICAgICAgIG1heDogMS4xMixcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBkcmF3Qm9yZGVyOmZhbHNlLFxyXG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aWNrczp7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgc2l6ZTogMTYsXHJcbiAgICAgICAgICAgIGZhbWlseTonU0YgUHJvIERpc3BsYXknXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcm91bmRlZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBkLWdyaWQnIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICMwMDE4M2QsICMwYzI2NmQsICMzYTMwOWMsICM3MTJmYzcsICNiMjEyZWIpO1wiICB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLWxnLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBweC00XCI+XHJcbiAgICAgICAgPGltZyBzcmM9Jy9jcnlwdG8ucG5nJyB3aWR0aD0nNTAnIHN0eWxlPXt7b3BhY2l0eTonMC43J319Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBweC0yXCI+XHJcbiAgICAgICAgPGg0IHN0eWxlPXt7Y29sb3I6IFwiI2ZmZlwiLCBmb250RmFtaWx5OidTRiBQcm8gRGlzcGxheScsIGZvbnRXZWlnaHQ6JzQwMCd9fT57bGl2ZXByaWNlfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TGluZSBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5lIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiTGluZWFyU2NhbGUiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJGaWxsZXIiLCJiYWNrZW5kIiwicmVnaXN0ZXIiLCJOMmR1c2RDaGFydCIsInByaWNlYWN0aW9uIiwiZ2V0UHJpY2UiLCJ0aW1lYWN0aW9uIiwiZ2V0VGltZSIsInN0YXR1cyIsImNvbG9yU3RhdHVzIiwibGl2ZXByaWNlIiwiZ2V0TGl2ZVByaWNlIiwidXBkYXRlQ2hhcnQiLCJzZXRJbnRlcnZhbCIsImdldENoYXJ0IiwiY2xlYXJJbnRlcnZhbCIsInRva2VuIiwidXJsIiwiY29uZmlnIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm91dHB1dCIsImpzb24iLCJwcmljZWFycmF5IiwiY2hhcnRwcmljZSIsInRpbWVhcnJheSIsImNoYXJ0dGltZSIsInByaWNlIiwidGltZSIsImkiLCJsZW5ndGgiLCJwcmljZW51bSIsInRvRml4ZWQiLCJwdXNoIiwicmV2ZXJzZSIsInByZXZpb3VzIiwiTnVtYmVyIiwibmV3dmFsdWUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsaW5lVGVuc2lvbiIsImxhYmVsIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludENvbG9yIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCb3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwiZmlsbCIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsInNjYWxlcyIsIngiLCJncmlkIiwiZHJhd0JvcmRlciIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJhbGlnbiIsImNvbG9yIiwiZm9udCIsInNpemUiLCJmYW1pbHkiLCJ5IiwidHlwZSIsInBvc2l0aW9uIiwibWluIiwibWF4IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWciLCJzcmMiLCJ3aWR0aCIsIm9wYWNpdHkiLCJoNCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/n2dusd-chart.js\n"));

/***/ })

});