"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst client = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    projectId: \"el3o0uwr\",\n    dataset: \"production\",\n    apiVersion: \"2023-02-23\",\n    useCdn: true,\n    token: \"skBfo3JxcZPRfG6CEQw47eNHENGfDiPmRi8XvV3jr3Dj3mauALj5pyD9ysoAlmT5fV1ODW6pgmRgwg4TpkCHtsmtlHN1IlnP6ZxXXXDVIFOeYdcRuKETQiIR2f6AXfXy7vQos9VC4x0sFQ0mXikElhbcRVSQGnWYbe8KffxLJ8DXnxudADpo\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ007QUFDekMsTUFBTUUsTUFBTSxHQUFHRiwwREFBWSxDQUFDO0lBQy9CRyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsT0FBTyxFQUFFLFlBQVk7SUFDckJDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxNQUFNLEVBQUMsSUFBSTtJQUNYQyxLQUFLLEVBQ0wsc0xBQXNMO0NBQ3pMLENBQUM7QUFFRixNQUFNQyxPQUFPLEdBQUdQLHdEQUFlLENBQUNDLE1BQU0sQ0FBQztBQUVoQyxNQUFNTyxNQUFNLEdBQUcsQ0FBQ0MsTUFBTSxHQUFLRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl6emFzaG9wLy4vbGliL2NsaWVudC5qcz9lNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XG4gICAgcHJvamVjdElkOiBcImVsM28wdXdyXCIsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICAgIGFwaVZlcnNpb246ICcyMDIzLTAyLTIzJyxcbiAgICB1c2VDZG46dHJ1ZSxcbiAgICB0b2tlbjpcbiAgICBcInNrQmZvM0p4Y1pQUmZHNkNFUXc0N2VOSEVOR2ZEaVBtUmk4WHZWM2pyM0RqM21hdUFMajVweUQ5eXNvQWxtVDVmVjFPRFc2cGdtUmd3ZzRUcGtDSHRzbXRsSE4xSWxuUDZaeFhYWERWSUZPZVlkY1J1S0VUUWlJUjJmNkFYZlh5N3ZRb3M5VkM0eDBzRlEwbVhpa0VsaGJjUlZTUUduV1liZThLZmZ4TEo4RFhueHVkQURwb1wiXG59KVxuXG5jb25zdCBidWlsZGVyID0gSW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XG5cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBidWlsZGVyLmltYWdlKHNvdXJjZSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiSW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJ0b2tlbiIsImJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            try {\n                await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.method,\n                    status: 1\n                }).then((data)=>{\n                    res.status(200).json(data._id);\n                });\n            } catch (error) {\n                console.log(error);\n                res.status(500).json({\n                    msg: \"Error, check console.log\"\n                });\n            }\n            break;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUM1QyxPQUFPRCxHQUFHLENBQUNFLE1BQU07UUFFYixLQUFLLE1BQU07WUFDUCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQzNDLElBQUc7Z0JBQ0MsTUFBTVIsc0RBQWEsQ0FBQztvQkFDaEJVLEtBQUssRUFBRSxPQUFPO29CQUNkQyxJQUFJLEVBQUVOLFFBQVEsQ0FBQ00sSUFBSTtvQkFDbkJDLE9BQU8sRUFBRVAsUUFBUSxDQUFDTyxPQUFPO29CQUN6QkMsS0FBSyxFQUFFUixRQUFRLENBQUNRLEtBQUs7b0JBQ3JCQyxLQUFLLEVBQUVULFFBQVEsQ0FBQ1MsS0FBSztvQkFDckJWLE1BQU0sRUFBRUMsUUFBUSxDQUFDRCxNQUFNO29CQUN2QlcsTUFBTSxFQUFFLENBQUM7aUJBQ1osQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO29CQUNkZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQyxDQUFDLENBQUM7YUFFTixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO2dCQUNuQmpCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUM7b0JBQUNLLEdBQUcsRUFBRSwwQkFBMEI7aUJBQUMsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsTUFBTTtLQUNiO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXNob3AvLi9wYWdlcy9hcGkvb3JkZXIuanM/Mzk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcyl7XG4gICAgc3dpdGNoKHJlcS5tZXRob2QpXG4gICAge1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBhd2FpdCBjbGllbnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGU6IFwib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmV3T3JkZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogbmV3T3JkZXIuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IG5ld09yZGVyLnBob25lLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogbmV3T3JkZXIudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbmV3T3JkZXIubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDFcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEuX2lkKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21zZzogXCJFcnJvciwgY2hlY2sgY29uc29sZS5sb2dcIn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmV3T3JkZXIiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY3JlYXRlIiwiX3R5cGUiLCJuYW1lIiwiYWRkcmVzcyIsInBob25lIiwidG90YWwiLCJzdGF0dXMiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();