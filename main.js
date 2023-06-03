/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nh1 {\\n    font-size: 3em;\\n}\\n\\np{\\n    font-size: 2rem;\\n    padding-left: 5px;\\n}\\n\\n.header {\\n    margin-top: 25px;\\n    text-align: center;\\n}\\n\\n.weather-info {\\n    display: flex;\\n    gap: 5vw;\\n    justify-content: center;\\n}\\n\\n#map-container {\\n    position: relative;\\n    display: inline-block;\\n    margin: 0 22.5vw;\\n}\\n  \\n#singapore-map {\\n    display: block;\\n    width: 100%;\\n    height: auto;\\n    padding-left: 3em;\\n}\\n  \\n.weather-icon {\\n    position: absolute;\\n    width: 7%;\\n    height: auto;\\n}\\n  \\n#weather-north {\\n    top: 25%; /* Adjust the percentage to position the icon correctly */\\n    left: 47%; /* Adjust the percentage to position the icon correctly */\\n    transform: translate(-50%, -50%);\\n}\\n  \\n#weather-south {\\n    bottom: 28%; /* Adjust the percentage to position the icon correctly */\\n    left: 49%; /* Adjust the percentage to position the icon correctly */\\n    transform: translate(-50%, -50%);\\n}\\n  \\n#weather-east {\\n    top: 47%; /* Adjust the percentage to position the icon correctly */\\n    right: 25%; /* Adjust the percentage to position the icon correctly */\\n    transform: translate(-50%, -50%);\\n}\\n  \\n#weather-west {\\n    top: 45%; /* Adjust the percentage to position the icon correctly */\\n    left: 24%; /* Adjust the percentage to position the icon correctly */\\n    transform: translate(-50%, -50%);\\n}\\n  \\n#weather-central {\\n    bottom: 44%; /* Adjust the percentage to position the icon correctly */\\n    left: 47%; /* Adjust the percentage to position the icon correctly */\\n    transform: translate(-50%, -50%);\\n}\\n\\n.timestamp {\\n    float: right;\\n    margin-bottom: 3rem;\\n    font-size: 1rem;\\n}\\n\\n.weather-descriptors {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_weather24__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather24 */ \"./src/modules/weather24.js\");\n/* harmony import */ var _modules_regionWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/regionWeather */ \"./src/modules/regionWeather.js\");\n/* harmony import */ var _images_Singapore_Map_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Singapore Map.jpeg */ \"./src/images/Singapore Map.jpeg\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\nconst imgElement = document.getElementById('singapore-map');\nimgElement.src = _images_Singapore_Map_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n\n(0,_modules_weather24__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((result) => {\n  if (result) {\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result);\n    (0,_modules_regionWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(result);\n  } else {\n    console.error('Weather data could not be fetched.');\n  }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateWeatherInfo(result) {\n  const weatherInfo = document.querySelector('.weather-info');\n  const mapContainer = document.querySelector('#map-container');\n  const header = document.querySelector('.header');\n  const description = document.createElement('p');\n  description.classList.add('description');\n  description.textContent = `${result.forecast}`;\n  header.appendChild(description);\n\n  //TEMPERATURE\n  const temperature = document.createElement('div');\n  temperature.classList.add('weather-descriptors');\n  weatherInfo.appendChild(temperature);\n\n  const temperatureIcon = document.createElement('span');\n  temperatureIcon.classList.add('material-icons');\n  temperatureIcon.innerText = 'thermostat';\n  temperature.appendChild(temperatureIcon);\n\n  const temperatureDesc = document.createElement('p');\n  temperatureDesc.textContent = `Temperature: ${result.temperature.low} - ${result.temperature.high}°C`;\n  temperature.appendChild(temperatureDesc);\n\n  //HUMIDITY\n  const humidity = document.createElement('div');\n  humidity.classList.add('weather-descriptors');\n  weatherInfo.appendChild(humidity);\n\n  const humidityIcon = document.createElement('span');\n  humidityIcon.classList.add('material-icons');\n  humidityIcon.innerText = 'water_drop';\n  humidity.appendChild(humidityIcon);\n\n  const humidityDesc = document.createElement('p');\n  humidityDesc.textContent = `Humidity: ${result.humidity.low} - ${result.humidity.high}%`;\n  humidity.appendChild(humidityDesc);\n\n  //WIND\n  const wind = document.createElement('div');\n  wind.classList.add('weather-descriptors');\n  weatherInfo.appendChild(wind);\n\n  const windIcon = document.createElement('span');\n  windIcon.classList.add('material-icons');\n  windIcon.innerText = 'air';\n  wind.appendChild(windIcon);\n\n  const windDesc = document.createElement('p');\n  windDesc.textContent = `Wind: ${result.wind.direction} ${result.wind.speed.low} - ${result.wind.speed.high} km/h`;\n  wind.appendChild(windDesc);\n\n  const timestamp = document.createElement('p');\n  timestamp.classList.add('timestamp');\n  timestamp.textContent = `Last Updated: ${result.timestamp.slice(0, 10)}, ${result.timestamp.slice(11, 19)}`;\n  mapContainer.appendChild(timestamp);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateWeatherInfo);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/regionWeather.js":
/*!**************************************!*\
  !*** ./src/modules/regionWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherIcons */ \"./src/modules/weatherIcons.js\");\n\n\nlet weatherNorth = document.querySelector('#weather-north');\nlet weatherSouth = document.querySelector('#weather-south');\nlet weatherEast = document.querySelector('#weather-east');\nlet weatherWest = document.querySelector('#weather-west');\nlet weatherCentral = document.querySelector('#weather-central');\n\nconst zoneImages = {\n  north: weatherNorth,\n  south: weatherSouth,\n  east: weatherEast,\n  west: weatherWest,\n  central: weatherCentral,\n};\n\nfunction updateRegionMap(result) {\n  const zones = ['north', 'south', 'east', 'west', 'central'];\n\n  zones.forEach((zone) => {\n    const weatherCondition = result.regions[zone];\n    const icon = _weatherIcons__WEBPACK_IMPORTED_MODULE_0__[\"default\"][weatherCondition];\n\n    if (icon) {\n      zoneImages[zone].src = icon;\n    } else {\n      console.log(`Error: Unknown weather condition \"${weatherCondition}\"`);\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateRegionMap);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/regionWeather.js?");

/***/ }),

/***/ "./src/modules/weather24.js":
/*!**********************************!*\
  !*** ./src/modules/weather24.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst date = new Date();\nconst currentDate = date.toJSON().slice(0, 10);\n\nasync function fetchWeather24() {\n  try {\n    const response = await fetch(\n      `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date=${currentDate}`,\n    );\n\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n\n    const data = await response.json();\n    const latestData = data.items[data.items.length - 1];\n    console.log(latestData);\n    return {\n      forecast: latestData.general.forecast,\n      humidity: latestData.general.relative_humidity,\n      temperature: latestData.general.temperature,\n      wind: latestData.general.wind,\n      regions: latestData.periods[0].regions,\n      timestamp: latestData.update_timestamp,\n    };\n  } catch (error) {\n    console.error(\"Error fetching weather data:\", error);\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather24);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather24.js?");

/***/ }),

/***/ "./src/modules/weatherIcons.js":
/*!*************************************!*\
  !*** ./src/modules/weatherIcons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_weather_icons_Fair_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather-icons/Fair.jpeg */ \"./src/images/weather-icons/Fair.jpeg\");\n/* harmony import */ var _images_weather_icons_Fair_Night_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/weather-icons/Fair (Night).jpeg */ \"./src/images/weather-icons/Fair (Night).jpeg\");\n/* harmony import */ var _images_weather_icons_Fair_Warm_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/weather-icons/Fair & Warm.jpeg */ \"./src/images/weather-icons/Fair & Warm.jpeg\");\n/* harmony import */ var _images_weather_icons_Partly_Cloudy_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather-icons/Partly Cloudy.jpeg */ \"./src/images/weather-icons/Partly Cloudy.jpeg\");\n/* harmony import */ var _images_weather_icons_Partly_Cloudy_Night_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weather-icons/Partly Cloudy (Night).jpeg */ \"./src/images/weather-icons/Partly Cloudy (Night).jpeg\");\n/* harmony import */ var _images_weather_icons_Cloudy_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/weather-icons/Cloudy.jpeg */ \"./src/images/weather-icons/Cloudy.jpeg\");\n/* harmony import */ var _images_weather_icons_Hazy_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/weather-icons/Hazy.jpeg */ \"./src/images/weather-icons/Hazy.jpeg\");\n/* harmony import */ var _images_weather_icons_Slightly_Hazy_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/weather-icons/Slightly Hazy.jpeg */ \"./src/images/weather-icons/Slightly Hazy.jpeg\");\n/* harmony import */ var _images_weather_icons_Windy_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/weather-icons/Windy.jpeg */ \"./src/images/weather-icons/Windy.jpeg\");\n/* harmony import */ var _images_weather_icons_Mist_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/weather-icons/Mist.jpeg */ \"./src/images/weather-icons/Mist.jpeg\");\n/* harmony import */ var _images_weather_icons_Light_Rain_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather-icons/Light Rain.jpeg */ \"./src/images/weather-icons/Light Rain.jpeg\");\n/* harmony import */ var _images_weather_icons_Moderate_Rain_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/weather-icons/Moderate Rain.jpeg */ \"./src/images/weather-icons/Moderate Rain.jpeg\");\n/* harmony import */ var _images_weather_icons_Heavy_Rain_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/weather-icons/Heavy Rain.jpeg */ \"./src/images/weather-icons/Heavy Rain.jpeg\");\n/* harmony import */ var _images_weather_icons_Passing_Showers_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/weather-icons/Passing Showers.jpeg */ \"./src/images/weather-icons/Passing Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Light_Showers_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/weather-icons/Light Showers.jpeg */ \"./src/images/weather-icons/Light Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Showers_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/weather-icons/Showers.jpeg */ \"./src/images/weather-icons/Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Heavy_Showers_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/weather-icons/Heavy Showers.jpeg */ \"./src/images/weather-icons/Heavy Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Thundery_Showers_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/weather-icons/Thundery Showers.jpeg */ \"./src/images/weather-icons/Thundery Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Heavy_Thundery_Showers_jpeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/weather-icons/Heavy Thundery Showers.jpeg */ \"./src/images/weather-icons/Heavy Thundery Showers.jpeg\");\n/* harmony import */ var _images_weather_icons_Heavy_Thundery_Showers_with_Gusty_Winds_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/weather-icons/Heavy Thundery Showers with Gusty Winds.jpeg */ \"./src/images/weather-icons/Heavy Thundery Showers with Gusty Winds.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst weatherIcons = {\n  Fair: _images_weather_icons_Fair_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n  'Fair (Night)': _images_weather_icons_Fair_Night_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n  'Fair & Warm': _images_weather_icons_Fair_Warm_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n  'Partly Cloudy': _images_weather_icons_Partly_Cloudy_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n  'Partly Cloudy (Night)': _images_weather_icons_Partly_Cloudy_Night_jpeg__WEBPACK_IMPORTED_MODULE_4__,\n  Cloudy: _images_weather_icons_Cloudy_jpeg__WEBPACK_IMPORTED_MODULE_5__,\n  Hazy: _images_weather_icons_Hazy_jpeg__WEBPACK_IMPORTED_MODULE_6__,\n  'Slightly Hazy': _images_weather_icons_Slightly_Hazy_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n  Windy: _images_weather_icons_Windy_jpeg__WEBPACK_IMPORTED_MODULE_8__,\n  Mist: _images_weather_icons_Mist_jpeg__WEBPACK_IMPORTED_MODULE_9__,\n  'Light Rain': _images_weather_icons_Light_Rain_jpeg__WEBPACK_IMPORTED_MODULE_10__,\n  'Moderate Rain': _images_weather_icons_Moderate_Rain_jpeg__WEBPACK_IMPORTED_MODULE_11__,\n  'Heavy Rain': _images_weather_icons_Heavy_Rain_jpeg__WEBPACK_IMPORTED_MODULE_12__,\n  'Passing Showers': _images_weather_icons_Passing_Showers_jpeg__WEBPACK_IMPORTED_MODULE_13__,\n  'Light Showers': _images_weather_icons_Light_Showers_jpeg__WEBPACK_IMPORTED_MODULE_14__,\n  Showers: _images_weather_icons_Showers_jpeg__WEBPACK_IMPORTED_MODULE_15__,\n  'Heavy Showers': _images_weather_icons_Heavy_Showers_jpeg__WEBPACK_IMPORTED_MODULE_16__,\n  'Thundery Showers': _images_weather_icons_Thundery_Showers_jpeg__WEBPACK_IMPORTED_MODULE_17__,\n  'Heavy Thundery Showers': _images_weather_icons_Heavy_Thundery_Showers_jpeg__WEBPACK_IMPORTED_MODULE_18__,\n  'Heavy Thundery Showers with Gusty Winds': _images_weather_icons_Heavy_Thundery_Showers_with_Gusty_Winds_jpeg__WEBPACK_IMPORTED_MODULE_19__,\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherIcons);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weatherIcons.js?");

/***/ }),

/***/ "./src/images/Singapore Map.jpeg":
/*!***************************************!*\
  !*** ./src/images/Singapore Map.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Singapore Map.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/Singapore_Map.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Cloudy.jpeg":
/*!**********************************************!*\
  !*** ./src/images/weather-icons/Cloudy.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Cloudy.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Cloudy.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Fair & Warm.jpeg":
/*!***************************************************!*\
  !*** ./src/images/weather-icons/Fair & Warm.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Fair & Warm.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Fair_&_Warm.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Fair (Night).jpeg":
/*!****************************************************!*\
  !*** ./src/images/weather-icons/Fair (Night).jpeg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Fair (Night).jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Fair_(Night).jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Fair.jpeg":
/*!********************************************!*\
  !*** ./src/images/weather-icons/Fair.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Fair.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Fair.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Hazy.jpeg":
/*!********************************************!*\
  !*** ./src/images/weather-icons/Hazy.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Hazy.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Hazy.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Heavy Rain.jpeg":
/*!**************************************************!*\
  !*** ./src/images/weather-icons/Heavy Rain.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Heavy Rain.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Heavy_Rain.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Heavy Showers.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/Heavy Showers.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Heavy Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Heavy_Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Heavy Thundery Showers with Gusty Winds.jpeg":
/*!*******************************************************************************!*\
  !*** ./src/images/weather-icons/Heavy Thundery Showers with Gusty Winds.jpeg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Heavy Thundery Showers with Gusty Winds.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Heavy_Thundery_Showers_with_Gusty_Winds.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Heavy Thundery Showers.jpeg":
/*!**************************************************************!*\
  !*** ./src/images/weather-icons/Heavy Thundery Showers.jpeg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Heavy Thundery Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Heavy_Thundery_Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Light Rain.jpeg":
/*!**************************************************!*\
  !*** ./src/images/weather-icons/Light Rain.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Light Rain.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Light_Rain.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Light Showers.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/Light Showers.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Light Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Light_Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Mist.jpeg":
/*!********************************************!*\
  !*** ./src/images/weather-icons/Mist.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Mist.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Mist.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Moderate Rain.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/Moderate Rain.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Moderate Rain.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Moderate_Rain.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Partly Cloudy (Night).jpeg":
/*!*************************************************************!*\
  !*** ./src/images/weather-icons/Partly Cloudy (Night).jpeg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Partly Cloudy (Night).jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Partly_Cloudy_(Night).jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Partly Cloudy.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/Partly Cloudy.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Partly Cloudy.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Partly_Cloudy.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Passing Showers.jpeg":
/*!*******************************************************!*\
  !*** ./src/images/weather-icons/Passing Showers.jpeg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Passing Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Passing_Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Showers.jpeg":
/*!***********************************************!*\
  !*** ./src/images/weather-icons/Showers.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Slightly Hazy.jpeg":
/*!*****************************************************!*\
  !*** ./src/images/weather-icons/Slightly Hazy.jpeg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Slightly Hazy.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Slightly_Hazy.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Thundery Showers.jpeg":
/*!********************************************************!*\
  !*** ./src/images/weather-icons/Thundery Showers.jpeg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Thundery Showers.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Thundery_Showers.jpeg?");

/***/ }),

/***/ "./src/images/weather-icons/Windy.jpeg":
/*!*********************************************!*\
  !*** ./src/images/weather-icons/Windy.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Windy.jpeg\";\n\n//# sourceURL=webpack://weather-app/./src/images/weather-icons/Windy.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;