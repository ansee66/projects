/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 30px;\r\n  font-family: 'Tahoma', sans-serif;\r\n  font-size: 18px;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\nmain {\r\n  padding-top: 10px;\r\n}\r\n\r\n.page-title {\r\n  margin: 15px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.page-subtitle {\r\n  margin: 5px 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  min-width: 100px;\r\n  margin-right: 20px;\r\n  padding: 5px 15px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  background-color: #4b0082;\r\n  border: 1px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  filter: brightness(1.5);\r\n}\r\n\r\n.button:disabled {\r\n  opacity: 0.3;\r\n  cursor: auto;\r\n  filter: none;\r\n}\r\n\r\n.button--nav {\r\n  background-color: green;\r\n}\r\n\r\n.button--select,\r\n.button--remove {\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.button--race {\r\n  align-self: flex-start;\r\n  min-width: 22px;\r\n  margin-right: 5px;\r\n  padding: 1px;\r\n  background-color: green;\r\n}\r\n\r\n.editor {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.controls {\r\n  padding: 5px 0;\r\n}\r\n\r\n.input {\r\n  box-sizing: border-box;\r\n  min-height: 30px;\r\n  padding: 0 2px;\r\n  font-size: inherit;\r\n}\r\n\r\n.input--color:not(:disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list {\r\n  padding-top: 10px;\r\n}\r\n\r\n.car {\r\n  border-bottom: 1px dashed white;\r\n}\r\n\r\n.car__info {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px 0;\r\n}\r\n\r\n.car__title {\r\n  margin: 0 20px 0 0;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n}\r\n\r\n.car__main {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.car__image {\r\n  width: 70px;\r\n  height: auto;\r\n  margin-left: 10px;\r\n}\r\n\r\n.car__image svg,\r\n.winner__image svg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.car__flag {\r\n  height: 35px;\r\n  margin-left: auto;\r\n  margin-right: 80px;\r\n}\r\n\r\n.pagination {\r\n  padding: 25px 0 10px;\r\n}\r\n\r\n.finish-message {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  color: yellow;\r\n  text-shadow: 2px 8px 6px rgb(0 0 0), 0px -5px 35px rgb(255 255 255);\r\n}\r\n\r\n.finish-message--shown {\r\n  display: block;\r\n}\r\n\r\n.winner-list {\r\n  padding: 10px 0;\r\n}\r\n\r\n.winner {\r\n  display: grid;\r\n  grid-template-columns: 25px 50px 200px repeat(2, 50px);\r\n  grid-gap: 25px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.winner--head {\r\n  padding-top: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.winner__image {\r\n  width: 50px;\r\n  height: auto;\r\n}\r\n\r\n.winner__title {\r\n  white-space: nowrap;\r\n}\r\n\r\n.winners-sort {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.winners-sort--asc::after,\r\n.winners-sort--desc::after {\r\n  content: '↓';\r\n  width: 10px;\r\n  height: 15px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.winners-sort--desc::after {\r\n  content: '↑';\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,aAAa;EACb,iCAAiC;EACjC,eAAe;EACf,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mEAAmE;AACrE;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sDAAsD;EACtD,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 30px;\r\n  font-family: 'Tahoma', sans-serif;\r\n  font-size: 18px;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\nmain {\r\n  padding-top: 10px;\r\n}\r\n\r\n.page-title {\r\n  margin: 15px 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.page-subtitle {\r\n  margin: 5px 0;\r\n  font-size: 18px;\r\n}\r\n\r\n.button {\r\n  box-sizing: border-box;\r\n  min-width: 100px;\r\n  margin-right: 20px;\r\n  padding: 5px 15px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  background-color: #4b0082;\r\n  border: 1px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  filter: brightness(1.5);\r\n}\r\n\r\n.button:disabled {\r\n  opacity: 0.3;\r\n  cursor: auto;\r\n  filter: none;\r\n}\r\n\r\n.button--nav {\r\n  background-color: green;\r\n}\r\n\r\n.button--select,\r\n.button--remove {\r\n  padding-top: 2px;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.button--race {\r\n  align-self: flex-start;\r\n  min-width: 22px;\r\n  margin-right: 5px;\r\n  padding: 1px;\r\n  background-color: green;\r\n}\r\n\r\n.editor {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.controls {\r\n  padding: 5px 0;\r\n}\r\n\r\n.input {\r\n  box-sizing: border-box;\r\n  min-height: 30px;\r\n  padding: 0 2px;\r\n  font-size: inherit;\r\n}\r\n\r\n.input--color:not(:disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.car-list {\r\n  padding-top: 10px;\r\n}\r\n\r\n.car {\r\n  border-bottom: 1px dashed white;\r\n}\r\n\r\n.car__info {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px 0;\r\n}\r\n\r\n.car__title {\r\n  margin: 0 20px 0 0;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n}\r\n\r\n.car__main {\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\n.car__image {\r\n  width: 70px;\r\n  height: auto;\r\n  margin-left: 10px;\r\n}\r\n\r\n.car__image svg,\r\n.winner__image svg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.car__flag {\r\n  height: 35px;\r\n  margin-left: auto;\r\n  margin-right: 80px;\r\n}\r\n\r\n.pagination {\r\n  padding: 25px 0 10px;\r\n}\r\n\r\n.finish-message {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  color: yellow;\r\n  text-shadow: 2px 8px 6px rgb(0 0 0), 0px -5px 35px rgb(255 255 255);\r\n}\r\n\r\n.finish-message--shown {\r\n  display: block;\r\n}\r\n\r\n.winner-list {\r\n  padding: 10px 0;\r\n}\r\n\r\n.winner {\r\n  display: grid;\r\n  grid-template-columns: 25px 50px 200px repeat(2, 50px);\r\n  grid-gap: 25px;\r\n  padding: 5px 0;\r\n}\r\n\r\n.winner--head {\r\n  padding-top: 20px;\r\n  font-weight: 700;\r\n}\r\n\r\n.winner__image {\r\n  width: 50px;\r\n  height: auto;\r\n}\r\n\r\n.winner__title {\r\n  white-space: nowrap;\r\n}\r\n\r\n.winners-sort {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.winners-sort--asc::after,\r\n.winners-sort--desc::after {\r\n  content: '↓';\r\n  width: 10px;\r\n  height: 15px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.winners-sort--desc::after {\r\n  content: '↑';\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const menu_1 = __importDefault(__webpack_require__(/*! ../view/menu */ "./src/components/view/menu.ts"));
const garage_1 = __importDefault(__webpack_require__(/*! ../view/garage */ "./src/components/view/garage.ts"));
const winners_1 = __importDefault(__webpack_require__(/*! ../view/winners */ "./src/components/view/winners.ts"));
class App {
    start() {
        const main = document.createElement('main');
        document.body.append(App.menu.drawBlock(), main);
        garage_1.default.render();
        App.menu.addNavListener(garage_1.default.render, winners_1.default.render);
    }
}
App.menu = new menu_1.default();
exports["default"] = App;


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Loader {
    static async getCar(id) {
        const response = await fetch(`${Loader.garage}/${id}`);
        return response.json();
    }
    static async getCars(params) {
        const response = await fetch(`${Loader.garage}?_page=${params.page}&_limit=${params.limit}`);
        return {
            items: await response.json(),
            count: response.headers.get('X-Total-Count'),
        };
    }
    static async createCar(data) {
        const response = await fetch(`${Loader.garage}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    static async updateCar(id, data) {
        const response = await fetch(`${Loader.garage}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    static async deleteCar(id) {
        const response = await fetch(`${Loader.garage}/${id}`, {
            method: 'DELETE',
        });
        const winners = await Loader.getWinners();
        const winner = winners.items.filter((item) => item.id === id);
        if (winner.length > 0)
            Loader.deleteWinner(id);
        return response.json();
    }
    static async actEngine(id, status) {
        const response = await fetch(`${Loader.engine}?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return response.json();
    }
    static async startEngine(id) {
        return Loader.actEngine(id, 'started');
    }
    static async stopEngine(id) {
        return Loader.actEngine(id, 'stopped');
    }
    static async startDrive(id) {
        const response = await fetch(`${Loader.engine}?id=${id}&status=drive`, {
            method: 'PATCH',
        }).catch();
        if (response.status !== 200)
            return { success: false };
        return { ...(await response.json()) };
    }
    static async addWin(data) {
        const winners = await (await Loader.getWinners()).items;
        const winner = winners.find((item) => item.id === data.id);
        if (winner) {
            if (winner.time > data.time)
                winner.time = data.time;
            Loader.updateWinner(winner);
        }
        else {
            Loader.createWinner(data);
        }
    }
    static async getWinner(id) {
        const response = await fetch(`${Loader.winners}/${id}`).catch();
        return response.json();
    }
    static async getWinners(params) {
        let queryString = '';
        if (params && Object.entries(params).length !== 0) {
            const args = Object.entries(params);
            const queryParams = args.map((arg) => `_${arg[0]}=${arg[1]}`);
            queryString = `?${queryParams.join('&')}`;
        }
        const response = await fetch(`${Loader.winners}${queryString}`);
        return {
            items: await response.json(),
            count: response.headers.get('X-Total-Count'),
        };
    }
    static async getWinnersForRender(params) {
        const response = await Loader.getWinners(params);
        const winners = await Promise.all(response.items.map(async (item) => {
            const winnerCar = await Loader.getCar(item.id);
            const fullWinner = { ...item, ...winnerCar };
            return fullWinner;
        }));
        return {
            items: winners,
            count: response.count,
        };
    }
    static async createWinner(data) {
        const response = await fetch(`${Loader.winners}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, wins: 1 }),
        });
        return response.json();
    }
    static async updateWinner(data) {
        const response = await fetch(`${Loader.winners}/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wins: data.wins + 1, time: data.time }),
        });
        return response.json();
    }
    static async deleteWinner(id) {
        const response = await fetch(`${Loader.winners}/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    }
}
Loader.baseUrl = 'http://127.0.0.1:3000';
Loader.garage = `${Loader.baseUrl}/garage`;
Loader.engine = `${Loader.baseUrl}/engine`;
Loader.winners = `${Loader.baseUrl}/winners`;
exports["default"] = Loader;


/***/ }),

/***/ "./src/components/view/car.ts":
/*!************************************!*\
  !*** ./src/components/view/car.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CarView {
    drawCar(item) {
        const { id, name, color } = item;
        const carBlock = document.createElement('div');
        carBlock.classList.add('car-item', 'car');
        carBlock.innerHTML = `
      <div class="car__info">
        <button class="button button--select" data-select="${id}">Select</button>
        <button class="button button--remove" data-remove="${id}">Remove</button>
        <h3 class="car__title">${name}</h3>
      </div>
      <div class="car__main">
        <button class="button button--race button--start" data-start="${id}">A</button>
        <button class="button button--race button--stop" data-stop="${id}" disabled>B</button>
        <div class="car__image" data-car="${id}">
          <svg width="121" height="51" viewBox="0 0 121 51" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" fill="#fff"><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z"/></mask><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z" fill="${color}" stroke="#fff" stroke-width="2" mask="url(#a)"/></svg>
        </div>
        <svg class="car__flag" enable-background="new 0 0 100 104" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg"><g><path d="m22.4 12v85z" fill="#e1f2fa" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m22.4 98.7c-1 0-1.8-.8-1.8-1.8v-84.9c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8v85c0 1-.8 1.7-1.8 1.7z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m26.3 55.2c5-1.8 14.5-4.3 26.9 1.1 18.2 7.9 30.8 0 30.8 0v-50.7s-12.6 8.1-30.8 0-30.8 0-30.8 0v29 22.2z" fill="#fff" style="fill: rgb(255, 255, 255);"></path><path d="m69.3 61.6c-4.8 0-10.5-.9-16.8-3.7-8.7-3.8-17.1-4.1-25.6-1.1l-3.8 1.6c-.5.2-1.2.2-1.6-.2-.5-.3-.8-.9-.8-1.5v-51.1c0-.6.3-1.1.8-1.5.5-.3 13.6-8.5 32.4-.1 17 7.6 28.6.4 29.1.1s1.2-.4 1.8-.1.9.9.9 1.5v50.7c0 .6-.3 1.2-.8 1.5-.3.3-6.2 3.9-15.6 3.9zm-31-10.3c5.2 0 10.4 1.1 15.6 3.4 14.7 6.4 25.4 2.1 28.3.6v-46.9c-4.8 2.1-15.7 5-29.7-1.2-14.6-6.5-25.4-2.1-28.3-.6v47.6l1.4-.6h.1c4.2-1.6 8.4-2.3 12.6-2.3z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m63.5 52.6c-.6-.1-1.6-.3-1.4-.3v-12.4c-2.7-.5-5.5-1.2-8.5-2.5-2.9-1.2-6.6-3-9.1-3.5v12.4c.3.1-.4 0-1.2-.1-8.6-1.2-15.3.9-15.3.9v-12.5s7.4-2.3 16.6-.7v-12.5c-10.1-2-16.6 1.1-16.6 1.1v-12.3s6.5-3.1 16.6-1.1v12.3c2.7.4 6.5 2.2 9.3 3.4 3 1.3 5.7 2.1 8.3 2.6v-12.4c9.6 1.6 16.6-1 16.6-1v12.6c0-.1-.1-.2-.1-.2s-7 2.6-16.6 1v12.5c2.4.5 4.5.6 6.4.6 6.3 0 10.1-1.8 10.1-1.8l.1 12.5c.1 0-5.9 2.8-15.2 1.4z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g><g><path d="m26.4 97h-7.8c-1.4 0-2.6 5-2.6 5h13s-1.2-5-2.6-5z" fill="#e1f2fa" style="fill: rgb(0, 128, 0);"></path><path d="m29 103.8h-13c-.5 0-1-.2-1.4-.7s-.5-1-.3-1.5c1-4.2 2.4-6.4 4.3-6.4h7.8c1.9 0 3.3 2.1 4.3 6.4.1.5 0 1.1-.3 1.5s-.9.7-1.4.7zm-10.7-3.5h8.3c-.2-.7-.5-1.2-.7-1.5h-6.9c-.2.3-.4.8-.7 1.5z" fill="#263238" style="fill: rgb(0, 128, 0);"></path></g></svg>
      </div>
    `;
        return carBlock;
    }
}
exports["default"] = CarView;


/***/ }),

/***/ "./src/components/view/garage.ts":
/*!***************************************!*\
  !*** ./src/components/view/garage.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const car_1 = __importDefault(__webpack_require__(/*! ./car */ "./src/components/view/car.ts"));
const listView_1 = __importDefault(__webpack_require__(/*! ./listView */ "./src/components/view/listView.ts"));
const html_1 = __webpack_require__(/*! ./html */ "./src/components/view/html.ts");
const loader_1 = __importDefault(__webpack_require__(/*! ../controller/loader */ "./src/components/controller/loader.ts"));
const utils_1 = __importDefault(__webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts"));
const race_1 = __importDefault(__webpack_require__(/*! ./race */ "./src/components/view/race.ts"));
class Garage {
    static render() {
        Garage.carList = Garage.view.render();
        Garage.drawCarList();
        Garage.addCreateAndUpdateListener();
        Garage.addCarListListener();
        Garage.addPaginationListener();
        Garage.addGenerateListener();
        Garage.addRaceListener();
    }
    static async drawCarList() {
        Garage.currentCars = await Garage.view.drawList({ page: Garage.currentPage, limit: Garage.pageLimit });
    }
    static addCreateAndUpdateListener() {
        ['create', 'update'].forEach((action) => {
            const editor = document.querySelector(`.editor--${action}`);
            const [brandInput, colorInput, button] = [...editor.children];
            button.addEventListener('click', () => {
                if (action === 'create') {
                    loader_1.default.createCar({ name: brandInput.value, color: colorInput.value }).then(() => {
                        Garage.drawCarList();
                    });
                }
                if (action === 'update') {
                    loader_1.default.updateCar(Number(button.dataset.update), { name: brandInput.value, color: colorInput.value }).then(() => {
                        Garage.drawCarList();
                    });
                }
            });
        });
    }
    static addCarListListener() {
        Garage.carList?.addEventListener('click', (e) => {
            if (e.target instanceof HTMLButtonElement) {
                if (e.target.classList.contains('button--select')) {
                    Garage.updateCar(Number(e.target.dataset.select));
                }
                if (e.target.classList.contains('button--remove')) {
                    Garage.deleteCar(Number(e.target.dataset.remove));
                }
                if (e.target.classList.contains('button--start')) {
                    e.target.disabled = true;
                    race_1.default.startCar(Number(e.target.dataset.start));
                    const stopButton = e.target.nextElementSibling;
                    if (stopButton instanceof HTMLButtonElement)
                        stopButton.disabled = false;
                }
                if (e.target.classList.contains('button--stop')) {
                    e.target.disabled = true;
                    race_1.default.returnCar(Number(e.target.dataset.stop));
                    const startButton = e.target.previousElementSibling;
                    if (startButton instanceof HTMLButtonElement)
                        startButton.disabled = false;
                }
            }
        });
    }
    static deleteCar(id) {
        loader_1.default.deleteCar(id).then(() => {
            Garage.drawCarList();
        });
    }
    static updateCar(id) {
        const updateEditor = document.querySelector('.editor--update');
        const [brandInput, colorInput, button] = [...updateEditor.children];
        loader_1.default.getCar(id).then((res) => {
            if (brandInput instanceof HTMLInputElement &&
                colorInput instanceof HTMLInputElement &&
                button instanceof HTMLButtonElement) {
                brandInput.disabled = false;
                brandInput.value = res.name;
                colorInput.disabled = false;
                colorInput.value = res.color;
                button.disabled = false;
                button.dataset.update = id.toString();
            }
        });
    }
    static addPaginationListener() {
        const pagination = document.querySelector('.pagination');
        pagination?.addEventListener('click', (e) => {
            if (e.target instanceof HTMLButtonElement) {
                if (e.target.classList.contains('button--prev'))
                    Garage.currentPage -= 1;
                if (e.target.classList.contains('button--next'))
                    Garage.currentPage += 1;
                Garage.saveState();
                Garage.drawCarList();
            }
        });
    }
    static addGenerateListener() {
        const generateButton = document.querySelector('#generate-button');
        generateButton.addEventListener('click', () => {
            Garage.generateCars();
        });
    }
    static generateCars() {
        for (let i = 0; i < 100; i += 1) {
            loader_1.default.createCar({ name: utils_1.default.getRandomName(), color: utils_1.default.getRandomColor() }).then(() => {
                Garage.drawCarList();
            });
        }
    }
    static addRaceListener() {
        const raceButton = document.querySelector('#race-button');
        const resetButton = document.querySelector('#reset-button');
        const message = document.querySelector('.finish-message');
        raceButton.addEventListener('click', () => {
            raceButton.disabled = true;
            if (message.classList.contains('finish-message--shown'))
                message.classList.remove('finish-message--shown');
            race_1.default.startRace(Garage.currentCars).then((res) => {
                resetButton.disabled = false;
                const winner = Garage.currentCars.filter((car) => car.id === res.id);
                message.innerHTML = `${winner[0].name} went first in ${res.time} seconds`;
                message.classList.add('finish-message--shown');
            });
        });
        resetButton.addEventListener('click', () => {
            resetButton.disabled = true;
            if (message.classList.contains('finish-message--shown'))
                message.classList.remove('finish-message--shown');
            race_1.default.stopRace(Garage.currentCars);
            raceButton.disabled = false;
        });
    }
    static saveState() {
        localStorage.setItem('currentPage', JSON.stringify(Garage.currentPage));
    }
    static loadState() {
        let page = Number(localStorage.getItem('currentPage'));
        if (page === 0)
            page = 1;
        return page;
    }
}
Garage.car = new car_1.default();
Garage.carList = null;
Garage.currentCars = [];
Garage.currentPage = Garage.loadState();
Garage.pageLimit = 7;
Garage.view = new listView_1.default(html_1.GarageHtml, '.car-list', loader_1.default.getCars, Garage.car.drawCar);
exports["default"] = Garage;


/***/ }),

/***/ "./src/components/view/html.ts":
/*!*************************************!*\
  !*** ./src/components/view/html.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WinnersHtml = exports.GarageHtml = void 0;
exports.GarageHtml = `
  <div class="editor editor--create">
    <input class="input" type="text" placeholder="Car brand" name="create-car-brand" id="create-brand">
    <input class="input input--color" type="color" name="Car color" id="create-color">
    <button class="button" id="create-button">Create Car</button>
  </div>
  <div class="editor editor--update">
    <input class="input" type="text" placeholder="Car brand" name="update-car-brand" id="update-brand" disabled>
    <input class="input input--color" type="color" name="Car color" id="update-color" disabled>
    <button class="button" id="update-button" disabled>Update Car</button>
  </div>
  <div class="controls">
    <button class="button button--nav" id="race-button">Race</button>
    <button class="button button--nav" id="reset-button" disabled>Reset</button>
    <button class="button" id="generate-button">Generate Cars</button>
  </div>
  <h1 class="page-title">Garage (<span id="items-amount"></span>)</h1>
  <h2 class="page-subtitle">Page #<span id="current-page"></span></h2>
  <div class="car-list"></div>
  <div class="pagination">
    <button class="button button--nav button--prev">Prev</button>
    <button class="button button--nav button--next">Next</button>
  </div>
  <div class="finish-message"></div>
`;
exports.WinnersHtml = `
  <h1 class="page-title">Winners (<span id="items-amount"></span>)</h1>
  <h2 class="page-subtitle">Page #<span id="current-page"></span></h2>
  <div class="winner winner--head">
    <span class="winner__number">№</span>
    <div class="winner__image">Car</div>
    <b class="winner__title">Name</b>
    <span class="winner__wins winners-sort" data-sort="wins">Wins</span>
    <span class="winner__time winners-sort" data-sort="time">Time</span>
  </div>
  <div class="winner-list"></div>
  <div class="pagination">
    <button class="button button--nav button--prev">Prev</button>
    <button class="button button--nav button--next">Next</button>
  </div>
`;


/***/ }),

/***/ "./src/components/view/listView.ts":
/*!*****************************************!*\
  !*** ./src/components/view/listView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ListView {
    constructor(html, listTag, getItems, drawItem) {
        this.html = html;
        this.listTag = listTag;
        this.list = null;
        this.getItems = getItems;
        this.drawItem = drawItem;
    }
    render() {
        const main = document.querySelector('main');
        main.innerHTML = this.html;
        this.list = document.querySelector(this.listTag);
        return this.list;
    }
    fillItem(item, index) {
        const newItem = this.drawItem(item, index);
        if (this.list instanceof Element)
            this.list.append(newItem);
    }
    fillList(items) {
        if (this.list)
            this.list.innerHTML = '';
        items.forEach((item, index) => {
            this.fillItem(item, index);
        });
    }
    async drawList(params) {
        const response = await this.getItems(params);
        this.fillList(response.items);
        this.setPaginationBtnsState(Number(response.count), params.page);
        this.renderNumbers(Number(response.count), params.page);
        return [...response.items];
    }
    setPaginationBtnsState(itemsAmount, page) {
        const prevBtn = document.querySelector('.button--prev');
        const nextBtn = document.querySelector('.button--next');
        const lastPage = Math.ceil(itemsAmount / 7);
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === lastPage;
    }
    renderNumbers(amount, page) {
        const itemsAmount = document.querySelector('#items-amount');
        const pageNumber = document.querySelector('#current-page');
        itemsAmount.textContent = amount.toString();
        pageNumber.textContent = page.toString();
    }
}
exports["default"] = ListView;


/***/ }),

/***/ "./src/components/view/menu.ts":
/*!*************************************!*\
  !*** ./src/components/view/menu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Menu {
    drawBlock() {
        const html = `
      <button class="button button--nav" data-nav="garage">Garage</button>
      <button class="button button--nav" data-nav="winners">Winners</button>
    `;
        const header = document.createElement('header');
        header.innerHTML = html;
        return header;
    }
    addNavListener(garageCallback, winnersCallback) {
        const header = document.querySelector('header');
        header?.addEventListener("click", (e) => {
            if (e.target instanceof HTMLButtonElement) {
                if (e.target.dataset.nav === 'garage') {
                    garageCallback();
                }
                if (e.target.dataset.nav === 'winners') {
                    winnersCallback();
                }
            }
        });
    }
}
exports["default"] = Menu;


/***/ }),

/***/ "./src/components/view/race.ts":
/*!*************************************!*\
  !*** ./src/components/view/race.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const loader_1 = __importDefault(__webpack_require__(/*! ../controller/loader */ "./src/components/controller/loader.ts"));
class Race {
    static async startCar(id, isRace = false) {
        const res = await loader_1.default.startEngine(id);
        const time = res.distance / res.velocity;
        Race.animateCar(id, time);
        const { success } = { ...(await loader_1.default.startDrive(id)) };
        const p = new Promise((resolve) => {
            if (success) {
                if (isRace)
                    Race.racingCars.push({ time, id });
                resolve({ time, id });
            }
            else {
                Race.stopCar(id);
            }
        });
        return p;
    }
    static stopCar(id) {
        loader_1.default.stopEngine(id);
        cancelAnimationFrame(Race.animatedCars[id].animID);
    }
    static returnCar(id) {
        Race.stopCar(id);
        Race.animatedCars[id].carElem.style.transform = 'translateX(0)';
    }
    static animateCar(id, time, stopCoef = 1) {
        const carElem = document.querySelector(`.car__image[data-car="${id}"]`);
        let currentPosition = carElem.offsetLeft;
        const endPosition = (Number(carElem.parentElement?.offsetWidth) - carElem.offsetWidth * 2) / stopCoef;
        const framesCount = (time / 1000) * 40;
        const delta = (endPosition - currentPosition) / framesCount;
        function move() {
            currentPosition += delta;
            carElem.style.transform = `translateX(${currentPosition}px)`;
            if (currentPosition < endPosition) {
                const animID = requestAnimationFrame(move);
                Race.animatedCars[id.toString()] = {
                    animID,
                    carElem,
                };
            }
        }
        move();
    }
    static async startRace(cars) {
        Race.racingCars = [];
        const response = await Promise.any(cars.map((car) => Race.startCar(car.id, true)));
        response.time = +(response.time / 1000).toFixed(2);
        loader_1.default.addWin(response);
        return response;
    }
    static stopRace(cars) {
        cars.forEach((car) => {
            Race.returnCar(car.id);
        });
    }
}
Race.animatedCars = {};
Race.racingCars = [];
exports["default"] = Race;


/***/ }),

/***/ "./src/components/view/winner.ts":
/*!***************************************!*\
  !*** ./src/components/view/winner.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class WinnerView {
    drawWinner(item, index = 0) {
        const { id, name, color, wins, time } = item;
        const winnerBlock = document.createElement('div');
        winnerBlock.classList.add('winner');
        winnerBlock.innerHTML = `
      <span class="winner__number">${index + 1}</span>
      <div class="winner__image" data-car="${id}">
        <svg width="121" height="51" viewBox="0 0 121 51" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" fill="#fff"><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z"/></mask><path d="M52.629.877c.2.29.417.412.675.502.838.292 1.606.427 2.587.548 1.5.184 3.114.489 4.59.81 1.889.41 3.741.966 5.58 1.56a63.972 63.972 0 0 1 4.928 1.815 65.063 65.063 0 0 1 4.53 2.115 62.857 62.857 0 0 1 3.72 2.062 67.597 67.597 0 0 1 3.675 2.363c1.372.946 2.698 1.947 4.02 2.962.766.589 1.54 1.177 2.265 1.815.49.43.443.5 1.08.93.488.33 1.085.283 1.635.023.55-.26 1.462-.803 1.462-.803s-1.095-.818-1.957-1.417c.016.002.038.013.053.015.547.075 1.252-.129 1.8-.21.332-.05.677-.064 1.012-.045.73.04 1.444.21 2.16.352 3.53.7 7.059 1.455 10.515 2.46 2.49.725 4.954 1.556 7.343 2.565.794.336 1.599.674 2.31 1.163.655.45 1.267.983 1.762 1.605.467.587.79 1.286 1.11 1.965.299.634.612 1.27.75 1.957.216 1.07.112 2.18.105 3.27a38.397 38.397 0 0 1-.157 3.525c-.119 1.2-.293 2.24-.345 3.443-.011.252-.007.663.097.892.078.173.095.209.15.39.05.164-.03.346-.097.503a3.275 3.275 0 0 1-.705 1.005c-.145.145-.354.212-.503.352-.217.206-.343.496-.555.705-.451.446-.945.863-1.507 1.156-.796.413-1.691.612-2.565.81-.942.212-1.911.318-2.873.397-.669.055-1.236.127-2.01.053-.553-.01-.465-.006-.967-.016.41-1.175.637-2.442.637-3.757 0-6.29-5.103-11.385-11.392-11.385-6.29 0-11.386 5.095-11.386 11.385 0 1.158.174 2.277.495 3.33-.36-.006-.29-.001-.675-.008-24.991-.304-37.895-.723-56.842-1.005-.333-.005-.654-.015-.983-.022.195-.834.3-1.702.3-2.595 0-6.29-5.095-11.385-11.385-11.385S5.68 34.127 5.68 40.417c0 .393.02.78.06 1.162a4.06 4.06 0 0 1-.99-.307c-.661-.3-1.254-.748-1.815-1.208a12.815 12.815 0 0 1-1.658-1.657c-.318-.377-.725-.732-.855-1.208-.165-.6.118-.463.15-1.867.05-2.213-.002-4.43.15-6.638.06-.875.078-1.872.3-2.617.078-.262.328-.518.503-.728.16-.193.476-.23.502-.48.1-.95.111-1.945.158-2.917.03-.628-.006-1.257.045-1.883a.872.872 0 0 0 .03.128c.063.205.297.313.397.502.107.202.164.428.203.653.074.438.072.89.052 1.335-.02.464-.144.916-.18 1.38-.023.293-.142.617-.022.885.09.2.299.343.502.427.397.164.857.151 1.283.098.439-.055.88-.2 1.26-.428.748-.448 1.3-1.165 1.912-1.785 1.005-1.017 2.024-2.032 2.888-3.172.22-.291.515-.57.577-.93a1.28 1.28 0 0 0-.195-.93c-.353-.497-1.01-.69-1.56-.953-.65-.311-1.336-.577-2.04-.735-.51-.114-1.038-.146-1.56-.15-.505-.003-1.022-.01-1.507.128-.444.126-.904.304-1.23.63a1.147 1.147 0 0 0-.12.142c.322-.766.805-1.44 1.282-2.122.092-.034 1.142-.424 1.725-.563.421-.1 1.208-.097 1.208-.097s1.017-1.475 1.582-2.168a28.5 28.5 0 0 1 2.19-2.407A27.565 27.565 0 0 1 13.6 7.619c.936-.701 2.94-1.912 2.94-1.912l-1.65-.818c.245-.271-.092-.975.165-1.29.195-.238.521-.238.93-.247a70.17 70.17 0 0 0 3.247-.158c1.415-.094 2.816-.317 4.223-.502 1.394-.184 2.78-.454 4.177-.608 2.892-.317 5.795-.513 8.7-.652 3.183-.153 6.378-.102 9.563-.203 1.19-.037 2.38-.087 3.57-.15 1.057-.055 2.107-.227 3.165-.202zm-8.295 2.842s-2.33.004-3.495.053c-1.68.07-3.359.203-5.033.352-1.713.153-3.427.313-5.13.555a51.437 51.437 0 0 0-3.697.653c-.28.061-.672.238-.683.525-.066 1.763-.077 3.441-.097 5.16-.022 1.836-.023 5.505-.023 5.505s6.22.05 9.33.105c3.38.06 10.133.247 10.133.247L44.334 3.72zm5.482.03s.8 4.44 1.305 6.638c.532 2.315 1.815 6.892 1.815 6.892s3.722.16 5.58.3c3.444.261 6.881.615 10.313 1.005 1.293.147 3.675.33 3.675.33s-.012-.943.12-1.387c.133-.446.652-1.23.652-1.23l-1.98-7.973s-2.228-.968-3.375-1.357c-1.78-.604-3.601-1.073-5.43-1.508-1.846-.438-3.71-.828-5.587-1.11-1.467-.22-2.947-.332-4.425-.45-.887-.07-2.663-.15-2.663-.15zM23.281 6.284s-1.63.395-2.415.683c-1.099.403-2.185.863-3.195 1.455-1.263.74-2.447 1.63-3.547 2.595-.75.657-1.535 1.315-2.063 2.16-.467.747-.228.713.458 1.035 1.427.67 3.016.928 4.552 1.282 1.47.34 4.448.803 4.448.803L23.28 6.284zm49.17 2.543c.534 2.18 1.3 4.533 1.838 6.712 0 0 .83-.19 1.23-.15.344.035.974.241 1.432.48.4.209.882.517 1.23.803.376.308.807.859.983 1.312.255.659 0 1.905 0 1.905s.996.09 1.635.158c.635.067 1.912.15 1.912.15s-.62-2.578-1.057-3.825c-.296-.844-1.058-2.468-1.058-2.468s-.934-.91-1.455-1.305c-.997-.755-2.083-1.394-3.172-2.01-1.142-.646-3.518-1.762-3.518-1.762zm32.491 12.015a.923.923 0 0 0-.503.105.525.525 0 0 0-.247.457c.023.298.345.493.555.705.695.704 1.535 1.245 2.31 1.86 1.084.862 2.123 1.788 3.27 2.565.497.338 1 .68 1.56.9.496.195 1.032.276 1.56.353.981.143 1.971.216 2.962.202.354-.004.76.093 1.058-.097.196-.126.204-.428.352-.608.227-.274.522-.495.81-.705.158-.115.469-.107.503-.3.1-.575-.71-.932-1.11-1.357-.375-.397-.699-.905-1.208-1.103-.234-.09-.505.058-.75 0-.62-.146-1.124-.605-1.71-.855-.737-.313-1.504-.559-2.265-.81-.766-.252-1.533-.52-2.317-.705-.696-.163-1.4-.264-2.108-.352a22.094 22.094 0 0 0-1.815-.15c-.293-.012-.611-.098-.907-.105zm-87.87 9.615c5.5 0 9.96 4.46 9.96 9.96 0 5.5-4.46 9.96-9.96 9.96-5.501 0-9.96-4.46-9.96-9.96 0-5.5 4.459-9.96 9.96-9.96zm80.474.3c5.501 0 9.961 4.46 9.961 9.96 0 5.5-4.46 9.96-9.96 9.96-5.5 0-9.953-4.46-9.953-9.96 0-5.5 4.452-9.96 9.953-9.96zm-80.475 2.415a7.246 7.246 0 0 0 0 14.49c4 0 7.238-3.245 7.238-7.245s-3.238-7.245-7.238-7.245zm80.475.3a7.24 7.24 0 0 0-7.237 7.245c0 4 3.237 7.245 7.237 7.245 4.001 0 7.246-3.245 7.246-7.245s-3.245-7.245-7.246-7.245z" fill="${color}" stroke="#fff" stroke-width="2" mask="url(#a)"/></svg>
      </div>
      <b class="winner__title">${name}</b>
      <span class="winner__wins">${wins}</span>
      <span class="winner__time">${time}</span>
    `;
        return winnerBlock;
    }
}
exports["default"] = WinnerView;


/***/ }),

/***/ "./src/components/view/winners.ts":
/*!****************************************!*\
  !*** ./src/components/view/winners.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const winner_1 = __importDefault(__webpack_require__(/*! ./winner */ "./src/components/view/winner.ts"));
const listView_1 = __importDefault(__webpack_require__(/*! ./listView */ "./src/components/view/listView.ts"));
const html_1 = __webpack_require__(/*! ./html */ "./src/components/view/html.ts");
const loader_1 = __importDefault(__webpack_require__(/*! ../controller/loader */ "./src/components/controller/loader.ts"));
class Winners {
    static render() {
        Winners.winnerList = Winners.view.render();
        Winners.view.drawList({ page: Winners.currentPage, limit: Winners.pageLimit });
        Winners.addPaginationListener();
        Winners.addSortListener();
    }
    static addPaginationListener() {
        const pagination = document.querySelector('.pagination');
        pagination?.addEventListener('click', (e) => {
            if (e.target instanceof HTMLButtonElement) {
                if (e.target.classList.contains('button--prev'))
                    Winners.currentPage -= 1;
                if (e.target.classList.contains('button--next'))
                    Winners.currentPage += 1;
                Winners.saveState();
                Winners.view.drawList({ page: Winners.currentPage, limit: Winners.pageLimit });
            }
        });
    }
    static saveState() {
        localStorage.setItem('winnersPage', JSON.stringify(Winners.currentPage));
    }
    static loadState() {
        let page = Number(localStorage.getItem('winnersPage'));
        if (page === 0)
            page = 1;
        return page;
    }
    static addSortListener() {
        const sortElements = [...document.querySelectorAll('.winners-sort')];
        sortElements.forEach((element) => {
            element.addEventListener('click', () => {
                sortElements.forEach((item) => {
                    item.classList.remove('winners-sort--desc', 'winners-sort--asc');
                });
                if (this.order === 'ASC') {
                    this.order = 'DESC';
                    element.classList.add('winners-sort--desc');
                }
                else {
                    this.order = 'ASC';
                    element.classList.add('winners-sort--asc');
                }
                Winners.view.drawList({
                    page: Winners.currentPage,
                    limit: Winners.pageLimit,
                    sort: element.dataset.sort,
                    order: Winners.order,
                });
            });
        });
    }
}
Winners.winner = new winner_1.default();
Winners.winnerList = null;
Winners.currentPage = Winners.loadState();
Winners.pageLimit = 10;
Winners.order = 'ASC';
Winners.view = new listView_1.default(html_1.WinnersHtml, '.winner-list', loader_1.default.getWinnersForRender, Winners.winner.drawWinner);
exports["default"] = Winners;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
const app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts"));
const app = new app_1.default();
app.start();


/***/ }),

/***/ "./src/utils/data.ts":
/*!***************************!*\
  !*** ./src/utils/data.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carModels = exports.carBrands = void 0;
exports.carBrands = [
    'Audi',
    'BMW',
    'Citroen',
    'Honda',
    'Nissan',
    'KIA',
    'Toyota',
    'Mazda',
    'Subaru',
    'Renault',
    'Skoda',
    'Lada',
    'Lexus',
    'Ford',
    'Opel',
];
exports.carModels = [
    'CL',
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'Cabriolet',
    'Coupe',
    'Bronco',
    'C-MAX',
    'Capri',
    'Consul',
    'Contour',
    'Cortina',
    'Cougar',
    'Custom',
    'Econoline',
    'Econovan',
    'EcoSport',
    'Edge',
    'Escape',
    'Escort',
    'Everest',
    'Excursion',
    'Expedition',
    'Explorer',
    'F-150',
    'F-2',
    'Fairlane',
    'Falcon',
    'Festiva',
    'Fiesta',
    'Flex',
    'Focus',
    'Freda',
    'Freestar',
    'Freestyle',
    'Fusion',
    'Galaxie',
    'Galaxy',
    'GPA',
    'Granada',
    'GT',
    'GT40',
    'Ikon',
    'Ixion',
    'KA',
    'Kuga',
    'Laser',
    'Mainline',
    'Maverick',
    'Model A',
    'Mondeo',
    'Aqua',
    'Aristo',
    'Aurion',
    'Auris',
    'Avalon',
    'Avanza',
    'Avensis',
    'Aygo',
    'bB',
    'Belta',
    'Blade',
    'Blizzard',
    'Brevis',
    'bZ4X',
    'C-HR',
    'Caldina',
    'Cami',
    'Camry',
    'Carina',
    'Cavalier',
    'Celica',
    'Celsior',
    'Century',
    'Chaser',
    'Classic',
    'Comfort',
    'COMS',
    'Corolla',
    'Corsa',
    'Cressida',
    'Cresta',
    'Crown',
    'Curren',
    'Cynos',
    'Duet',
    'Echo',
    'Esquire',
    'Estima',
    'Etios',
    'Fortuner',
    'FunCargo',
    'Granvia',
    'GT86',
    'Harrier',
    'HiAce',
    'Highlander',
    'Hilux',
    'Innova',
    'Ipsum',
    'iQ',
    'ISis',
    'Ist',
    'Kluger',
    'MR-S',
    'MR2',
    'Nadia',
    'Noah',
    'Opa',
    'Origin',
    'Paseo',
    'Passo',
    'Platz',
    'Porte',
    'Premio',
    'Previa',
    'Prius',
    'Probox',
    'Progres',
    'Pronard',
    'Publica',
    'Ractis',
    'Raize',
    'Raum',
    'RAV4',
    'Regius',
    'RegiusAce',
    'Roomy',
    'Rush',
    'Sai',
    'Scepter',
];


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const data_1 = __webpack_require__(/*! ./data */ "./src/utils/data.ts");
class Utils {
    static getRandomNumber(top) {
        return Math.floor(Math.random() * top);
    }
    static getRandomName() {
        const brand = data_1.carBrands[Utils.getRandomNumber(data_1.carBrands.length)];
        const model = data_1.carModels[Utils.getRandomNumber(data_1.carModels.length)];
        return `${brand} ${model}`;
    }
    static getRandomColor() {
        const symbols = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
            color += symbols[Utils.getRandomNumber(16)];
        }
        return color;
    }
}
exports["default"] = Utils;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRTtZQUM1QixLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBRUQscUJBQWUsS0FBSyxDQUFDOzs7Ozs7O1VDdkJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy9odG1sLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L2xpc3RWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L21lbnUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvcmFjZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy93aW5uZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvd2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbHMvZGF0YS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVGFob21hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS10aXRsZSB7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3VidGl0bGUge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjAwODI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxuICBmaWx0ZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tLW5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tc2VsZWN0LFxcclxcbi5idXR0b24tLXJlbW92ZSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tcmFjZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWluLXdpZHRoOiAyMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtLWNvbG9yOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJfX2luZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJfX3RpdGxlIHtcXHJcXG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcl9fbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyX19pbWFnZSB7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyX19pbWFnZSBzdmcsXFxyXFxuLndpbm5lcl9faW1hZ2Ugc3ZnIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcl9fZmxhZyB7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgcGFkZGluZzogMjVweCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2gtbWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCA4cHggNnB4IHJnYigwIDAgMCksIDBweCAtNXB4IDM1cHggcmdiKDI1NSAyNTUgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaC1tZXNzYWdlLS1zaG93biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1saXN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDUwcHggMjAwcHggcmVwZWF0KDIsIDUwcHgpO1xcclxcbiAgZ3JpZC1nYXA6IDI1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci0taGVhZCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyX190aXRsZSB7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1zb3J0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMtc29ydC0tYXNjOjphZnRlcixcXHJcXG4ud2lubmVycy1zb3J0LS1kZXNjOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAn4oaTJztcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLXNvcnQtLWRlc2M6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICfihpEnO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVGFob21hJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS10aXRsZSB7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3VidGl0bGUge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLXdpZHRoOiAxMDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjAwODI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjM7XFxyXFxuICBjdXJzb3I6IGF1dG87XFxyXFxuICBmaWx0ZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tLW5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tc2VsZWN0LFxcclxcbi5idXR0b24tLXJlbW92ZSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi0tcmFjZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWluLXdpZHRoOiAyMnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXRvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMnB4O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtLWNvbG9yOm5vdCg6ZGlzYWJsZWQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhci1saXN0IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJfX2luZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jYXJfX3RpdGxlIHtcXHJcXG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcl9fbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyX19pbWFnZSB7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyX19pbWFnZSBzdmcsXFxyXFxuLndpbm5lcl9faW1hZ2Ugc3ZnIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcl9fZmxhZyB7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2luYXRpb24ge1xcclxcbiAgcGFkZGluZzogMjVweCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2gtbWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogeWVsbG93O1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCA4cHggNnB4IHJnYigwIDAgMCksIDBweCAtNXB4IDM1cHggcmdiKDI1NSAyNTUgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaC1tZXNzYWdlLS1zaG93biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1saXN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDUwcHggMjAwcHggcmVwZWF0KDIsIDUwcHgpO1xcclxcbiAgZ3JpZC1nYXA6IDI1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci0taGVhZCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyX190aXRsZSB7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVycy1zb3J0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcnMtc29ydC0tYXNjOjphZnRlcixcXHJcXG4ud2lubmVycy1zb3J0LS1kZXNjOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAn4oaTJztcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi53aW5uZXJzLXNvcnQtLWRlc2M6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICfihpEnO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBNZW51IGZyb20gXCIuLi92aWV3L21lbnVcIjtcclxuaW1wb3J0IEdhcmFnZSBmcm9tIFwiLi4vdmlldy9nYXJhZ2VcIjtcclxuaW1wb3J0IFdpbm5lcnMgZnJvbSBcIi4uL3ZpZXcvd2lubmVyc1wiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBzdGF0aWMgbWVudTogTWVudSA9IG5ldyBNZW51KCk7XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChBcHAubWVudS5kcmF3QmxvY2soKSwgbWFpbik7XHJcbiAgICBHYXJhZ2UucmVuZGVyKCk7XHJcbiAgICBBcHAubWVudS5hZGROYXZMaXN0ZW5lcihHYXJhZ2UucmVuZGVyLCBXaW5uZXJzLnJlbmRlcilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQge1xyXG4gIEl0ZW1zUmVzcG9uc2UsXHJcbiAgQ2FyLFxyXG4gIENhcldpdGhvdXRJRCxcclxuICBTdGFydFJlc3BvbnNlLFxyXG4gIERyaXZlUmVzcG9uc2UsXHJcbiAgV2lubmVyLFxyXG4gIFdpbm5lcldpdGhvdXRXaW5zLFxyXG4gIFdpbm5lckZvclJlbmRlcixcclxuICBTb3J0VHlwZSxcclxuICBPcmRlclR5cGUsXHJcbiAgQ2FyUGFyYW1zLFxyXG4gIFdpbm5lclBhcmFtcyxcclxufSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJztcclxuXHJcbmNsYXNzIExvYWRlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnYXJhZ2UgPSBgJHtMb2FkZXIuYmFzZVVybH0vZ2FyYWdlYDtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZW5naW5lID0gYCR7TG9hZGVyLmJhc2VVcmx9L2VuZ2luZWA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHdpbm5lcnMgPSBgJHtMb2FkZXIuYmFzZVVybH0vd2lubmVyc2A7XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYXIoaWQ6IG51bWJlcik6IFByb21pc2U8Q2FyPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtMb2FkZXIuZ2FyYWdlfS8ke2lkfWApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRDYXJzKHBhcmFtczogQ2FyUGFyYW1zKTogUHJvbWlzZTxJdGVtc1Jlc3BvbnNlPENhcj4+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0xvYWRlci5nYXJhZ2V9P19wYWdlPSR7cGFyYW1zLnBhZ2V9Jl9saW1pdD0ke3BhcmFtcy5saW1pdH1gKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGl0ZW1zOiBhd2FpdCByZXNwb25zZS5qc29uKCksXHJcbiAgICAgIGNvdW50OiByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVDYXIoZGF0YTogQ2FyV2l0aG91dElEKTogUHJvbWlzZTxDYXI+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0xvYWRlci5nYXJhZ2V9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHVwZGF0ZUNhcihpZDogbnVtYmVyLCBkYXRhOiBDYXJXaXRob3V0SUQpOiBQcm9taXNlPENhcj4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TG9hZGVyLmdhcmFnZX0vJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBkZWxldGVDYXIoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TG9hZGVyLmdhcmFnZX0vJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHdpbm5lcnMgPSBhd2FpdCBMb2FkZXIuZ2V0V2lubmVycygpO1xyXG4gICAgY29uc3Qgd2lubmVyID0gd2lubmVycy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgIGlmICh3aW5uZXIubGVuZ3RoID4gMCkgTG9hZGVyLmRlbGV0ZVdpbm5lcihpZCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFjdEVuZ2luZShpZDogbnVtYmVyLCBzdGF0dXM6ICdzdGFydGVkJyB8ICdzdG9wcGVkJyk6IFByb21pc2U8U3RhcnRSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7TG9hZGVyLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPSR7c3RhdHVzfWAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHN0YXJ0RW5naW5lKGlkOiBudW1iZXIpOiBQcm9taXNlPFN0YXJ0UmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBMb2FkZXIuYWN0RW5naW5lKGlkLCAnc3RhcnRlZCcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHN0b3BFbmdpbmUoaWQ6IG51bWJlcik6IFByb21pc2U8U3RhcnRSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIExvYWRlci5hY3RFbmdpbmUoaWQsICdzdG9wcGVkJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgc3RhcnREcml2ZShpZDogbnVtYmVyKTogUHJvbWlzZTxEcml2ZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtMb2FkZXIuZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgIH0pLmNhdGNoKCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XHJcbiAgICByZXR1cm4geyAuLi4oYXdhaXQgcmVzcG9uc2UuanNvbigpKSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFdpbihkYXRhOiBXaW5uZXJXaXRob3V0V2lucyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3Qgd2lubmVyczogV2lubmVyW10gPSBhd2FpdCAoYXdhaXQgTG9hZGVyLmdldFdpbm5lcnMoKSkuaXRlbXM7XHJcbiAgICBjb25zdCB3aW5uZXI6IFdpbm5lciB8IHVuZGVmaW5lZCA9IHdpbm5lcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGF0YS5pZCk7XHJcbiAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgIGlmICh3aW5uZXIudGltZSA+IGRhdGEudGltZSkgd2lubmVyLnRpbWUgPSBkYXRhLnRpbWU7XHJcbiAgICAgIExvYWRlci51cGRhdGVXaW5uZXIod2lubmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIExvYWRlci5jcmVhdGVXaW5uZXIoZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0V2lubmVyKGlkOiBudW1iZXIpOiBQcm9taXNlPFdpbm5lcj4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtMb2FkZXIud2lubmVyc30vJHtpZH1gKS5jYXRjaCgpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRXaW5uZXJzKHBhcmFtcz86IFdpbm5lclBhcmFtcyk6IFByb21pc2U8SXRlbXNSZXNwb25zZTxXaW5uZXI+PiB7XHJcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSAnJztcclxuICAgIGlmIChwYXJhbXMgJiYgT2JqZWN0LmVudHJpZXMocGFyYW1zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgY29uc3QgYXJnczogW3N0cmluZywgbnVtYmVyIHwgU29ydFR5cGUgfCBPcmRlclR5cGVdW10gPSBPYmplY3QuZW50cmllcyhwYXJhbXMpO1xyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGFyZ3MubWFwKChhcmcpID0+IGBfJHthcmdbMF19PSR7YXJnWzFdfWApO1xyXG4gICAgICBxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVBhcmFtcy5qb2luKCcmJyl9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0xvYWRlci53aW5uZXJzfSR7cXVlcnlTdHJpbmd9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICBjb3VudDogcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0V2lubmVyc0ZvclJlbmRlcihwYXJhbXM6IFdpbm5lclBhcmFtcyk6IFByb21pc2U8SXRlbXNSZXNwb25zZTxXaW5uZXJGb3JSZW5kZXI+PiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogSXRlbXNSZXNwb25zZTxXaW5uZXI+ID0gYXdhaXQgTG9hZGVyLmdldFdpbm5lcnMocGFyYW1zKTtcclxuICAgIGNvbnN0IHdpbm5lcnM6IFdpbm5lckZvclJlbmRlcltdID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIHJlc3BvbnNlLml0ZW1zLm1hcChhc3luYyAoaXRlbTogV2lubmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyQ2FyOiBDYXIgPSBhd2FpdCBMb2FkZXIuZ2V0Q2FyKGl0ZW0uaWQpO1xyXG4gICAgICAgIGNvbnN0IGZ1bGxXaW5uZXI6IFdpbm5lckZvclJlbmRlciA9IHsgLi4uaXRlbSwgLi4ud2lubmVyQ2FyIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bGxXaW5uZXI7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IHdpbm5lcnMsXHJcbiAgICAgIGNvdW50OiByZXNwb25zZS5jb3VudCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgY3JlYXRlV2lubmVyKGRhdGE6IFdpbm5lcldpdGhvdXRXaW5zKTogUHJvbWlzZTxXaW5uZXI+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0xvYWRlci53aW5uZXJzfWAsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmRhdGEsIHdpbnM6IDEgfSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlV2lubmVyKGRhdGE6IFdpbm5lcik6IFByb21pc2U8V2lubmVyPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtMb2FkZXIud2lubmVyc30vJHtkYXRhLmlkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgd2luczogZGF0YS53aW5zICsgMSwgdGltZTogZGF0YS50aW1lIH0pLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGRlbGV0ZVdpbm5lcihpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtMb2FkZXIud2lubmVyc30vJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCB7IENhciB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5cclxuY2xhc3MgQ2FyVmlldyB7XHJcbiAgcHVibGljIGRyYXdDYXIoaXRlbTogQ2FyKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgeyBpZCwgbmFtZSwgY29sb3IgfTogQ2FyID0gaXRlbTtcclxuICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJCbG9jay5jbGFzc0xpc3QuYWRkKCdjYXItaXRlbScsICdjYXInKTtcclxuICAgIGNhckJsb2NrLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcl9faW5mb1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1zZWxlY3RcIiBkYXRhLXNlbGVjdD1cIiR7aWR9XCI+U2VsZWN0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJlbW92ZVwiIGRhdGEtcmVtb3ZlPVwiJHtpZH1cIj5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjYXJfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyX19tYWluXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXJhY2UgYnV0dG9uLS1zdGFydFwiIGRhdGEtc3RhcnQ9XCIke2lkfVwiPkE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcmFjZSBidXR0b24tLXN0b3BcIiBkYXRhLXN0b3A9XCIke2lkfVwiIGRpc2FibGVkPkI8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyX19pbWFnZVwiIGRhdGEtY2FyPVwiJHtpZH1cIj5cclxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjFcIiBoZWlnaHQ9XCI1MVwiIHZpZXdCb3g9XCIwIDAgMTIxIDUxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PG1hc2sgaWQ9XCJhXCIgZmlsbD1cIiNmZmZcIj48cGF0aCBkPVwiTTUyLjYyOS44NzdjLjIuMjkuNDE3LjQxMi42NzUuNTAyLjgzOC4yOTIgMS42MDYuNDI3IDIuNTg3LjU0OCAxLjUuMTg0IDMuMTE0LjQ4OSA0LjU5LjgxIDEuODg5LjQxIDMuNzQxLjk2NiA1LjU4IDEuNTZhNjMuOTcyIDYzLjk3MiAwIDAgMSA0LjkyOCAxLjgxNSA2NS4wNjMgNjUuMDYzIDAgMCAxIDQuNTMgMi4xMTUgNjIuODU3IDYyLjg1NyAwIDAgMSAzLjcyIDIuMDYyIDY3LjU5NyA2Ny41OTcgMCAwIDEgMy42NzUgMi4zNjNjMS4zNzIuOTQ2IDIuNjk4IDEuOTQ3IDQuMDIgMi45NjIuNzY2LjU4OSAxLjU0IDEuMTc3IDIuMjY1IDEuODE1LjQ5LjQzLjQ0My41IDEuMDguOTMuNDg4LjMzIDEuMDg1LjI4MyAxLjYzNS4wMjMuNTUtLjI2IDEuNDYyLS44MDMgMS40NjItLjgwM3MtMS4wOTUtLjgxOC0xLjk1Ny0xLjQxN2MuMDE2LjAwMi4wMzguMDEzLjA1My4wMTUuNTQ3LjA3NSAxLjI1Mi0uMTI5IDEuOC0uMjEuMzMyLS4wNS42NzctLjA2NCAxLjAxMi0uMDQ1LjczLjA0IDEuNDQ0LjIxIDIuMTYuMzUyIDMuNTMuNyA3LjA1OSAxLjQ1NSAxMC41MTUgMi40NiAyLjQ5LjcyNSA0Ljk1NCAxLjU1NiA3LjM0MyAyLjU2NS43OTQuMzM2IDEuNTk5LjY3NCAyLjMxIDEuMTYzLjY1NS40NSAxLjI2Ny45ODMgMS43NjIgMS42MDUuNDY3LjU4Ny43OSAxLjI4NiAxLjExIDEuOTY1LjI5OS42MzQuNjEyIDEuMjcuNzUgMS45NTcuMjE2IDEuMDcuMTEyIDIuMTguMTA1IDMuMjdhMzguMzk3IDM4LjM5NyAwIDAgMS0uMTU3IDMuNTI1Yy0uMTE5IDEuMi0uMjkzIDIuMjQtLjM0NSAzLjQ0My0uMDExLjI1Mi0uMDA3LjY2My4wOTcuODkyLjA3OC4xNzMuMDk1LjIwOS4xNS4zOS4wNS4xNjQtLjAzLjM0Ni0uMDk3LjUwM2EzLjI3NSAzLjI3NSAwIDAgMS0uNzA1IDEuMDA1Yy0uMTQ1LjE0NS0uMzU0LjIxMi0uNTAzLjM1Mi0uMjE3LjIwNi0uMzQzLjQ5Ni0uNTU1LjcwNS0uNDUxLjQ0Ni0uOTQ1Ljg2My0xLjUwNyAxLjE1Ni0uNzk2LjQxMy0xLjY5MS42MTItMi41NjUuODEtLjk0Mi4yMTItMS45MTEuMzE4LTIuODczLjM5Ny0uNjY5LjA1NS0xLjIzNi4xMjctMi4wMS4wNTMtLjU1My0uMDEtLjQ2NS0uMDA2LS45NjctLjAxNi40MS0xLjE3NS42MzctMi40NDIuNjM3LTMuNzU3IDAtNi4yOS01LjEwMy0xMS4zODUtMTEuMzkyLTExLjM4NS02LjI5IDAtMTEuMzg2IDUuMDk1LTExLjM4NiAxMS4zODUgMCAxLjE1OC4xNzQgMi4yNzcuNDk1IDMuMzMtLjM2LS4wMDYtLjI5LS4wMDEtLjY3NS0uMDA4LTI0Ljk5MS0uMzA0LTM3Ljg5NS0uNzIzLTU2Ljg0Mi0xLjAwNS0uMzMzLS4wMDUtLjY1NC0uMDE1LS45ODMtLjAyMi4xOTUtLjgzNC4zLTEuNzAyLjMtMi41OTUgMC02LjI5LTUuMDk1LTExLjM4NS0xMS4zODUtMTEuMzg1UzUuNjggMzQuMTI3IDUuNjggNDAuNDE3YzAgLjM5My4wMi43OC4wNiAxLjE2MmE0LjA2IDQuMDYgMCAwIDEtLjk5LS4zMDdjLS42NjEtLjMtMS4yNTQtLjc0OC0xLjgxNS0xLjIwOGExMi44MTUgMTIuODE1IDAgMCAxLTEuNjU4LTEuNjU3Yy0uMzE4LS4zNzctLjcyNS0uNzMyLS44NTUtMS4yMDgtLjE2NS0uNi4xMTgtLjQ2My4xNS0xLjg2Ny4wNS0yLjIxMy0uMDAyLTQuNDMuMTUtNi42MzguMDYtLjg3NS4wNzgtMS44NzIuMy0yLjYxNy4wNzgtLjI2Mi4zMjgtLjUxOC41MDMtLjcyOC4xNi0uMTkzLjQ3Ni0uMjMuNTAyLS40OC4xLS45NS4xMTEtMS45NDUuMTU4LTIuOTE3LjAzLS42MjgtLjAwNi0xLjI1Ny4wNDUtMS44ODNhLjg3Mi44NzIgMCAwIDAgLjAzLjEyOGMuMDYzLjIwNS4yOTcuMzEzLjM5Ny41MDIuMTA3LjIwMi4xNjQuNDI4LjIwMy42NTMuMDc0LjQzOC4wNzIuODkuMDUyIDEuMzM1LS4wMi40NjQtLjE0NC45MTYtLjE4IDEuMzgtLjAyMy4yOTMtLjE0Mi42MTctLjAyMi44ODUuMDkuMi4yOTkuMzQzLjUwMi40MjcuMzk3LjE2NC44NTcuMTUxIDEuMjgzLjA5OC40MzktLjA1NS44OC0uMiAxLjI2LS40MjguNzQ4LS40NDggMS4zLTEuMTY1IDEuOTEyLTEuNzg1IDEuMDA1LTEuMDE3IDIuMDI0LTIuMDMyIDIuODg4LTMuMTcyLjIyLS4yOTEuNTE1LS41Ny41NzctLjkzYTEuMjggMS4yOCAwIDAgMC0uMTk1LS45M2MtLjM1My0uNDk3LTEuMDEtLjY5LTEuNTYtLjk1My0uNjUtLjMxMS0xLjMzNi0uNTc3LTIuMDQtLjczNS0uNTEtLjExNC0xLjAzOC0uMTQ2LTEuNTYtLjE1LS41MDUtLjAwMy0xLjAyMi0uMDEtMS41MDcuMTI4LS40NDQuMTI2LS45MDQuMzA0LTEuMjMuNjNhMS4xNDcgMS4xNDcgMCAwIDAtLjEyLjE0MmMuMzIyLS43NjYuODA1LTEuNDQgMS4yODItMi4xMjIuMDkyLS4wMzQgMS4xNDItLjQyNCAxLjcyNS0uNTYzLjQyMS0uMSAxLjIwOC0uMDk3IDEuMjA4LS4wOTdzMS4wMTctMS40NzUgMS41ODItMi4xNjhhMjguNSAyOC41IDAgMCAxIDIuMTktMi40MDdBMjcuNTY1IDI3LjU2NSAwIDAgMSAxMy42IDcuNjE5Yy45MzYtLjcwMSAyLjk0LTEuOTEyIDIuOTQtMS45MTJsLTEuNjUtLjgxOGMuMjQ1LS4yNzEtLjA5Mi0uOTc1LjE2NS0xLjI5LjE5NS0uMjM4LjUyMS0uMjM4LjkzLS4yNDdhNzAuMTcgNzAuMTcgMCAwIDAgMy4yNDctLjE1OGMxLjQxNS0uMDk0IDIuODE2LS4zMTcgNC4yMjMtLjUwMiAxLjM5NC0uMTg0IDIuNzgtLjQ1NCA0LjE3Ny0uNjA4IDIuODkyLS4zMTcgNS43OTUtLjUxMyA4LjctLjY1MiAzLjE4My0uMTUzIDYuMzc4LS4xMDIgOS41NjMtLjIwMyAxLjE5LS4wMzcgMi4zOC0uMDg3IDMuNTctLjE1IDEuMDU3LS4wNTUgMi4xMDctLjIyNyAzLjE2NS0uMjAyem0tOC4yOTUgMi44NDJzLTIuMzMuMDA0LTMuNDk1LjA1M2MtMS42OC4wNy0zLjM1OS4yMDMtNS4wMzMuMzUyLTEuNzEzLjE1My0zLjQyNy4zMTMtNS4xMy41NTVhNTEuNDM3IDUxLjQzNyAwIDAgMC0zLjY5Ny42NTNjLS4yOC4wNjEtLjY3Mi4yMzgtLjY4My41MjUtLjA2NiAxLjc2My0uMDc3IDMuNDQxLS4wOTcgNS4xNi0uMDIyIDEuODM2LS4wMjMgNS41MDUtLjAyMyA1LjUwNXM2LjIyLjA1IDkuMzMuMTA1YzMuMzguMDYgMTAuMTMzLjI0NyAxMC4xMzMuMjQ3TDQ0LjMzNCAzLjcyem01LjQ4Mi4wM3MuOCA0LjQ0IDEuMzA1IDYuNjM4Yy41MzIgMi4zMTUgMS44MTUgNi44OTIgMS44MTUgNi44OTJzMy43MjIuMTYgNS41OC4zYzMuNDQ0LjI2MSA2Ljg4MS42MTUgMTAuMzEzIDEuMDA1IDEuMjkzLjE0NyAzLjY3NS4zMyAzLjY3NS4zM3MtLjAxMi0uOTQzLjEyLTEuMzg3Yy4xMzMtLjQ0Ni42NTItMS4yMy42NTItMS4yM2wtMS45OC03Ljk3M3MtMi4yMjgtLjk2OC0zLjM3NS0xLjM1N2MtMS43OC0uNjA0LTMuNjAxLTEuMDczLTUuNDMtMS41MDgtMS44NDYtLjQzOC0zLjcxLS44MjgtNS41ODctMS4xMS0xLjQ2Ny0uMjItMi45NDctLjMzMi00LjQyNS0uNDUtLjg4Ny0uMDctMi42NjMtLjE1LTIuNjYzLS4xNXpNMjMuMjgxIDYuMjg0cy0xLjYzLjM5NS0yLjQxNS42ODNjLTEuMDk5LjQwMy0yLjE4NS44NjMtMy4xOTUgMS40NTUtMS4yNjMuNzQtMi40NDcgMS42My0zLjU0NyAyLjU5NS0uNzUuNjU3LTEuNTM1IDEuMzE1LTIuMDYzIDIuMTYtLjQ2Ny43NDctLjIyOC43MTMuNDU4IDEuMDM1IDEuNDI3LjY3IDMuMDE2LjkyOCA0LjU1MiAxLjI4MiAxLjQ3LjM0IDQuNDQ4LjgwMyA0LjQ0OC44MDNMMjMuMjggNi4yODR6bTQ5LjE3IDIuNTQzYy41MzQgMi4xOCAxLjMgNC41MzMgMS44MzggNi43MTIgMCAwIC44My0uMTkgMS4yMy0uMTUuMzQ0LjAzNS45NzQuMjQxIDEuNDMyLjQ4LjQuMjA5Ljg4Mi41MTcgMS4yMy44MDMuMzc2LjMwOC44MDcuODU5Ljk4MyAxLjMxMi4yNTUuNjU5IDAgMS45MDUgMCAxLjkwNXMuOTk2LjA5IDEuNjM1LjE1OGMuNjM1LjA2NyAxLjkxMi4xNSAxLjkxMi4xNXMtLjYyLTIuNTc4LTEuMDU3LTMuODI1Yy0uMjk2LS44NDQtMS4wNTgtMi40NjgtMS4wNTgtMi40NjhzLS45MzQtLjkxLTEuNDU1LTEuMzA1Yy0uOTk3LS43NTUtMi4wODMtMS4zOTQtMy4xNzItMi4wMS0xLjE0Mi0uNjQ2LTMuNTE4LTEuNzYyLTMuNTE4LTEuNzYyem0zMi40OTEgMTIuMDE1YS45MjMuOTIzIDAgMCAwLS41MDMuMTA1LjUyNS41MjUgMCAwIDAtLjI0Ny40NTdjLjAyMy4yOTguMzQ1LjQ5My41NTUuNzA1LjY5NS43MDQgMS41MzUgMS4yNDUgMi4zMSAxLjg2IDEuMDg0Ljg2MiAyLjEyMyAxLjc4OCAzLjI3IDIuNTY1LjQ5Ny4zMzggMSAuNjggMS41Ni45LjQ5Ni4xOTUgMS4wMzIuMjc2IDEuNTYuMzUzLjk4MS4xNDMgMS45NzEuMjE2IDIuOTYyLjIwMi4zNTQtLjAwNC43Ni4wOTMgMS4wNTgtLjA5Ny4xOTYtLjEyNi4yMDQtLjQyOC4zNTItLjYwOC4yMjctLjI3NC41MjItLjQ5NS44MS0uNzA1LjE1OC0uMTE1LjQ2OS0uMTA3LjUwMy0uMy4xLS41NzUtLjcxLS45MzItMS4xMS0xLjM1Ny0uMzc1LS4zOTctLjY5OS0uOTA1LTEuMjA4LTEuMTAzLS4yMzQtLjA5LS41MDUuMDU4LS43NSAwLS42Mi0uMTQ2LTEuMTI0LS42MDUtMS43MS0uODU1LS43MzctLjMxMy0xLjUwNC0uNTU5LTIuMjY1LS44MS0uNzY2LS4yNTItMS41MzMtLjUyLTIuMzE3LS43MDUtLjY5Ni0uMTYzLTEuNC0uMjY0LTIuMTA4LS4zNTJhMjIuMDk0IDIyLjA5NCAwIDAgMC0xLjgxNS0uMTVjLS4yOTMtLjAxMi0uNjExLS4wOTgtLjkwNy0uMTA1em0tODcuODcgOS42MTVjNS41IDAgOS45NiA0LjQ2IDkuOTYgOS45NiAwIDUuNS00LjQ2IDkuOTYtOS45NiA5Ljk2LTUuNTAxIDAtOS45Ni00LjQ2LTkuOTYtOS45NiAwLTUuNSA0LjQ1OS05Ljk2IDkuOTYtOS45NnptODAuNDc0LjNjNS41MDEgMCA5Ljk2MSA0LjQ2IDkuOTYxIDkuOTYgMCA1LjUtNC40NiA5Ljk2LTkuOTYgOS45Ni01LjUgMC05Ljk1My00LjQ2LTkuOTUzLTkuOTYgMC01LjUgNC40NTItOS45NiA5Ljk1My05Ljk2em0tODAuNDc1IDIuNDE1YTcuMjQ2IDcuMjQ2IDAgMCAwIDAgMTQuNDljNCAwIDcuMjM4LTMuMjQ1IDcuMjM4LTcuMjQ1cy0zLjIzOC03LjI0NS03LjIzOC03LjI0NXptODAuNDc1LjNhNy4yNCA3LjI0IDAgMCAwLTcuMjM3IDcuMjQ1YzAgNCAzLjIzNyA3LjI0NSA3LjIzNyA3LjI0NSA0LjAwMSAwIDcuMjQ2LTMuMjQ1IDcuMjQ2LTcuMjQ1cy0zLjI0NS03LjI0NS03LjI0Ni03LjI0NXpcIi8+PC9tYXNrPjxwYXRoIGQ9XCJNNTIuNjI5Ljg3N2MuMi4yOS40MTcuNDEyLjY3NS41MDIuODM4LjI5MiAxLjYwNi40MjcgMi41ODcuNTQ4IDEuNS4xODQgMy4xMTQuNDg5IDQuNTkuODEgMS44ODkuNDEgMy43NDEuOTY2IDUuNTggMS41NmE2My45NzIgNjMuOTcyIDAgMCAxIDQuOTI4IDEuODE1IDY1LjA2MyA2NS4wNjMgMCAwIDEgNC41MyAyLjExNSA2Mi44NTcgNjIuODU3IDAgMCAxIDMuNzIgMi4wNjIgNjcuNTk3IDY3LjU5NyAwIDAgMSAzLjY3NSAyLjM2M2MxLjM3Mi45NDYgMi42OTggMS45NDcgNC4wMiAyLjk2Mi43NjYuNTg5IDEuNTQgMS4xNzcgMi4yNjUgMS44MTUuNDkuNDMuNDQzLjUgMS4wOC45My40ODguMzMgMS4wODUuMjgzIDEuNjM1LjAyMy41NS0uMjYgMS40NjItLjgwMyAxLjQ2Mi0uODAzcy0xLjA5NS0uODE4LTEuOTU3LTEuNDE3Yy4wMTYuMDAyLjAzOC4wMTMuMDUzLjAxNS41NDcuMDc1IDEuMjUyLS4xMjkgMS44LS4yMS4zMzItLjA1LjY3Ny0uMDY0IDEuMDEyLS4wNDUuNzMuMDQgMS40NDQuMjEgMi4xNi4zNTIgMy41My43IDcuMDU5IDEuNDU1IDEwLjUxNSAyLjQ2IDIuNDkuNzI1IDQuOTU0IDEuNTU2IDcuMzQzIDIuNTY1Ljc5NC4zMzYgMS41OTkuNjc0IDIuMzEgMS4xNjMuNjU1LjQ1IDEuMjY3Ljk4MyAxLjc2MiAxLjYwNS40NjcuNTg3Ljc5IDEuMjg2IDEuMTEgMS45NjUuMjk5LjYzNC42MTIgMS4yNy43NSAxLjk1Ny4yMTYgMS4wNy4xMTIgMi4xOC4xMDUgMy4yN2EzOC4zOTcgMzguMzk3IDAgMCAxLS4xNTcgMy41MjVjLS4xMTkgMS4yLS4yOTMgMi4yNC0uMzQ1IDMuNDQzLS4wMTEuMjUyLS4wMDcuNjYzLjA5Ny44OTIuMDc4LjE3My4wOTUuMjA5LjE1LjM5LjA1LjE2NC0uMDMuMzQ2LS4wOTcuNTAzYTMuMjc1IDMuMjc1IDAgMCAxLS43MDUgMS4wMDVjLS4xNDUuMTQ1LS4zNTQuMjEyLS41MDMuMzUyLS4yMTcuMjA2LS4zNDMuNDk2LS41NTUuNzA1LS40NTEuNDQ2LS45NDUuODYzLTEuNTA3IDEuMTU2LS43OTYuNDEzLTEuNjkxLjYxMi0yLjU2NS44MS0uOTQyLjIxMi0xLjkxMS4zMTgtMi44NzMuMzk3LS42NjkuMDU1LTEuMjM2LjEyNy0yLjAxLjA1My0uNTUzLS4wMS0uNDY1LS4wMDYtLjk2Ny0uMDE2LjQxLTEuMTc1LjYzNy0yLjQ0Mi42MzctMy43NTcgMC02LjI5LTUuMTAzLTExLjM4NS0xMS4zOTItMTEuMzg1LTYuMjkgMC0xMS4zODYgNS4wOTUtMTEuMzg2IDExLjM4NSAwIDEuMTU4LjE3NCAyLjI3Ny40OTUgMy4zMy0uMzYtLjAwNi0uMjktLjAwMS0uNjc1LS4wMDgtMjQuOTkxLS4zMDQtMzcuODk1LS43MjMtNTYuODQyLTEuMDA1LS4zMzMtLjAwNS0uNjU0LS4wMTUtLjk4My0uMDIyLjE5NS0uODM0LjMtMS43MDIuMy0yLjU5NSAwLTYuMjktNS4wOTUtMTEuMzg1LTExLjM4NS0xMS4zODVTNS42OCAzNC4xMjcgNS42OCA0MC40MTdjMCAuMzkzLjAyLjc4LjA2IDEuMTYyYTQuMDYgNC4wNiAwIDAgMS0uOTktLjMwN2MtLjY2MS0uMy0xLjI1NC0uNzQ4LTEuODE1LTEuMjA4YTEyLjgxNSAxMi44MTUgMCAwIDEtMS42NTgtMS42NTdjLS4zMTgtLjM3Ny0uNzI1LS43MzItLjg1NS0xLjIwOC0uMTY1LS42LjExOC0uNDYzLjE1LTEuODY3LjA1LTIuMjEzLS4wMDItNC40My4xNS02LjYzOC4wNi0uODc1LjA3OC0xLjg3Mi4zLTIuNjE3LjA3OC0uMjYyLjMyOC0uNTE4LjUwMy0uNzI4LjE2LS4xOTMuNDc2LS4yMy41MDItLjQ4LjEtLjk1LjExMS0xLjk0NS4xNTgtMi45MTcuMDMtLjYyOC0uMDA2LTEuMjU3LjA0NS0xLjg4M2EuODcyLjg3MiAwIDAgMCAuMDMuMTI4Yy4wNjMuMjA1LjI5Ny4zMTMuMzk3LjUwMi4xMDcuMjAyLjE2NC40MjguMjAzLjY1My4wNzQuNDM4LjA3Mi44OS4wNTIgMS4zMzUtLjAyLjQ2NC0uMTQ0LjkxNi0uMTggMS4zOC0uMDIzLjI5My0uMTQyLjYxNy0uMDIyLjg4NS4wOS4yLjI5OS4zNDMuNTAyLjQyNy4zOTcuMTY0Ljg1Ny4xNTEgMS4yODMuMDk4LjQzOS0uMDU1Ljg4LS4yIDEuMjYtLjQyOC43NDgtLjQ0OCAxLjMtMS4xNjUgMS45MTItMS43ODUgMS4wMDUtMS4wMTcgMi4wMjQtMi4wMzIgMi44ODgtMy4xNzIuMjItLjI5MS41MTUtLjU3LjU3Ny0uOTNhMS4yOCAxLjI4IDAgMCAwLS4xOTUtLjkzYy0uMzUzLS40OTctMS4wMS0uNjktMS41Ni0uOTUzLS42NS0uMzExLTEuMzM2LS41NzctMi4wNC0uNzM1LS41MS0uMTE0LTEuMDM4LS4xNDYtMS41Ni0uMTUtLjUwNS0uMDAzLTEuMDIyLS4wMS0xLjUwNy4xMjgtLjQ0NC4xMjYtLjkwNC4zMDQtMS4yMy42M2ExLjE0NyAxLjE0NyAwIDAgMC0uMTIuMTQyYy4zMjItLjc2Ni44MDUtMS40NCAxLjI4Mi0yLjEyMi4wOTItLjAzNCAxLjE0Mi0uNDI0IDEuNzI1LS41NjMuNDIxLS4xIDEuMjA4LS4wOTcgMS4yMDgtLjA5N3MxLjAxNy0xLjQ3NSAxLjU4Mi0yLjE2OGEyOC41IDI4LjUgMCAwIDEgMi4xOS0yLjQwN0EyNy41NjUgMjcuNTY1IDAgMCAxIDEzLjYgNy42MTljLjkzNi0uNzAxIDIuOTQtMS45MTIgMi45NC0xLjkxMmwtMS42NS0uODE4Yy4yNDUtLjI3MS0uMDkyLS45NzUuMTY1LTEuMjkuMTk1LS4yMzguNTIxLS4yMzguOTMtLjI0N2E3MC4xNyA3MC4xNyAwIDAgMCAzLjI0Ny0uMTU4YzEuNDE1LS4wOTQgMi44MTYtLjMxNyA0LjIyMy0uNTAyIDEuMzk0LS4xODQgMi43OC0uNDU0IDQuMTc3LS42MDggMi44OTItLjMxNyA1Ljc5NS0uNTEzIDguNy0uNjUyIDMuMTgzLS4xNTMgNi4zNzgtLjEwMiA5LjU2My0uMjAzIDEuMTktLjAzNyAyLjM4LS4wODcgMy41Ny0uMTUgMS4wNTctLjA1NSAyLjEwNy0uMjI3IDMuMTY1LS4yMDJ6bS04LjI5NSAyLjg0MnMtMi4zMy4wMDQtMy40OTUuMDUzYy0xLjY4LjA3LTMuMzU5LjIwMy01LjAzMy4zNTItMS43MTMuMTUzLTMuNDI3LjMxMy01LjEzLjU1NWE1MS40MzcgNTEuNDM3IDAgMCAwLTMuNjk3LjY1M2MtLjI4LjA2MS0uNjcyLjIzOC0uNjgzLjUyNS0uMDY2IDEuNzYzLS4wNzcgMy40NDEtLjA5NyA1LjE2LS4wMjIgMS44MzYtLjAyMyA1LjUwNS0uMDIzIDUuNTA1czYuMjIuMDUgOS4zMy4xMDVjMy4zOC4wNiAxMC4xMzMuMjQ3IDEwLjEzMy4yNDdMNDQuMzM0IDMuNzJ6bTUuNDgyLjAzcy44IDQuNDQgMS4zMDUgNi42MzhjLjUzMiAyLjMxNSAxLjgxNSA2Ljg5MiAxLjgxNSA2Ljg5MnMzLjcyMi4xNiA1LjU4LjNjMy40NDQuMjYxIDYuODgxLjYxNSAxMC4zMTMgMS4wMDUgMS4yOTMuMTQ3IDMuNjc1LjMzIDMuNjc1LjMzcy0uMDEyLS45NDMuMTItMS4zODdjLjEzMy0uNDQ2LjY1Mi0xLjIzLjY1Mi0xLjIzbC0xLjk4LTcuOTczcy0yLjIyOC0uOTY4LTMuMzc1LTEuMzU3Yy0xLjc4LS42MDQtMy42MDEtMS4wNzMtNS40My0xLjUwOC0xLjg0Ni0uNDM4LTMuNzEtLjgyOC01LjU4Ny0xLjExLTEuNDY3LS4yMi0yLjk0Ny0uMzMyLTQuNDI1LS40NS0uODg3LS4wNy0yLjY2My0uMTUtMi42NjMtLjE1ek0yMy4yODEgNi4yODRzLTEuNjMuMzk1LTIuNDE1LjY4M2MtMS4wOTkuNDAzLTIuMTg1Ljg2My0zLjE5NSAxLjQ1NS0xLjI2My43NC0yLjQ0NyAxLjYzLTMuNTQ3IDIuNTk1LS43NS42NTctMS41MzUgMS4zMTUtMi4wNjMgMi4xNi0uNDY3Ljc0Ny0uMjI4LjcxMy40NTggMS4wMzUgMS40MjcuNjcgMy4wMTYuOTI4IDQuNTUyIDEuMjgyIDEuNDcuMzQgNC40NDguODAzIDQuNDQ4LjgwM0wyMy4yOCA2LjI4NHptNDkuMTcgMi41NDNjLjUzNCAyLjE4IDEuMyA0LjUzMyAxLjgzOCA2LjcxMiAwIDAgLjgzLS4xOSAxLjIzLS4xNS4zNDQuMDM1Ljk3NC4yNDEgMS40MzIuNDguNC4yMDkuODgyLjUxNyAxLjIzLjgwMy4zNzYuMzA4LjgwNy44NTkuOTgzIDEuMzEyLjI1NS42NTkgMCAxLjkwNSAwIDEuOTA1cy45OTYuMDkgMS42MzUuMTU4Yy42MzUuMDY3IDEuOTEyLjE1IDEuOTEyLjE1cy0uNjItMi41NzgtMS4wNTctMy44MjVjLS4yOTYtLjg0NC0xLjA1OC0yLjQ2OC0xLjA1OC0yLjQ2OHMtLjkzNC0uOTEtMS40NTUtMS4zMDVjLS45OTctLjc1NS0yLjA4My0xLjM5NC0zLjE3Mi0yLjAxLTEuMTQyLS42NDYtMy41MTgtMS43NjItMy41MTgtMS43NjJ6bTMyLjQ5MSAxMi4wMTVhLjkyMy45MjMgMCAwIDAtLjUwMy4xMDUuNTI1LjUyNSAwIDAgMC0uMjQ3LjQ1N2MuMDIzLjI5OC4zNDUuNDkzLjU1NS43MDUuNjk1LjcwNCAxLjUzNSAxLjI0NSAyLjMxIDEuODYgMS4wODQuODYyIDIuMTIzIDEuNzg4IDMuMjcgMi41NjUuNDk3LjMzOCAxIC42OCAxLjU2LjkuNDk2LjE5NSAxLjAzMi4yNzYgMS41Ni4zNTMuOTgxLjE0MyAxLjk3MS4yMTYgMi45NjIuMjAyLjM1NC0uMDA0Ljc2LjA5MyAxLjA1OC0uMDk3LjE5Ni0uMTI2LjIwNC0uNDI4LjM1Mi0uNjA4LjIyNy0uMjc0LjUyMi0uNDk1LjgxLS43MDUuMTU4LS4xMTUuNDY5LS4xMDcuNTAzLS4zLjEtLjU3NS0uNzEtLjkzMi0xLjExLTEuMzU3LS4zNzUtLjM5Ny0uNjk5LS45MDUtMS4yMDgtMS4xMDMtLjIzNC0uMDktLjUwNS4wNTgtLjc1IDAtLjYyLS4xNDYtMS4xMjQtLjYwNS0xLjcxLS44NTUtLjczNy0uMzEzLTEuNTA0LS41NTktMi4yNjUtLjgxLS43NjYtLjI1Mi0xLjUzMy0uNTItMi4zMTctLjcwNS0uNjk2LS4xNjMtMS40LS4yNjQtMi4xMDgtLjM1MmEyMi4wOTQgMjIuMDk0IDAgMCAwLTEuODE1LS4xNWMtLjI5My0uMDEyLS42MTEtLjA5OC0uOTA3LS4xMDV6bS04Ny44NyA5LjYxNWM1LjUgMCA5Ljk2IDQuNDYgOS45NiA5Ljk2IDAgNS41LTQuNDYgOS45Ni05Ljk2IDkuOTYtNS41MDEgMC05Ljk2LTQuNDYtOS45Ni05Ljk2IDAtNS41IDQuNDU5LTkuOTYgOS45Ni05Ljk2em04MC40NzQuM2M1LjUwMSAwIDkuOTYxIDQuNDYgOS45NjEgOS45NiAwIDUuNS00LjQ2IDkuOTYtOS45NiA5Ljk2LTUuNSAwLTkuOTUzLTQuNDYtOS45NTMtOS45NiAwLTUuNSA0LjQ1Mi05Ljk2IDkuOTUzLTkuOTZ6bS04MC40NzUgMi40MTVhNy4yNDYgNy4yNDYgMCAwIDAgMCAxNC40OWM0IDAgNy4yMzgtMy4yNDUgNy4yMzgtNy4yNDVzLTMuMjM4LTcuMjQ1LTcuMjM4LTcuMjQ1em04MC40NzUuM2E3LjI0IDcuMjQgMCAwIDAtNy4yMzcgNy4yNDVjMCA0IDMuMjM3IDcuMjQ1IDcuMjM3IDcuMjQ1IDQuMDAxIDAgNy4yNDYtMy4yNDUgNy4yNDYtNy4yNDVzLTMuMjQ1LTcuMjQ1LTcuMjQ2LTcuMjQ1elwiIGZpbGw9XCIke2NvbG9yfVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIyXCIgbWFzaz1cInVybCgjYSlcIi8+PC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN2ZyBjbGFzcz1cImNhcl9fZmxhZ1wiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAgMTA0XCIgdmlld0JveD1cIjAgMCAxMDAgMTA0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtMjIuNCAxMnY4NXpcIiBmaWxsPVwiI2UxZjJmYVwiIHN0eWxlPVwiZmlsbDogcmdiKDAsIDEyOCwgMCk7XCI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPVwibTIyLjQgOTguN2MtMSAwLTEuOC0uOC0xLjgtMS44di04NC45YzAtMSAuOC0xLjggMS44LTEuOHMxLjguOCAxLjggMS44djg1YzAgMS0uOCAxLjctMS44IDEuN3pcIiBmaWxsPVwiIzI2MzIzOFwiIHN0eWxlPVwiZmlsbDogcmdiKDAsIDEyOCwgMCk7XCI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPVwibTI2LjMgNTUuMmM1LTEuOCAxNC41LTQuMyAyNi45IDEuMSAxOC4yIDcuOSAzMC44IDAgMzAuOCAwdi01MC43cy0xMi42IDguMS0zMC44IDAtMzAuOCAwLTMwLjggMHYyOSAyMi4yelwiIGZpbGw9XCIjZmZmXCIgc3R5bGU9XCJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7XCI+PC9wYXRoPjxwYXRoIGQ9XCJtNjkuMyA2MS42Yy00LjggMC0xMC41LS45LTE2LjgtMy43LTguNy0zLjgtMTcuMS00LjEtMjUuNi0xLjFsLTMuOCAxLjZjLS41LjItMS4yLjItMS42LS4yLS41LS4zLS44LS45LS44LTEuNXYtNTEuMWMwLS42LjMtMS4xLjgtMS41LjUtLjMgMTMuNi04LjUgMzIuNC0uMSAxNyA3LjYgMjguNi40IDI5LjEuMXMxLjItLjQgMS44LS4xLjkuOS45IDEuNXY1MC43YzAgLjYtLjMgMS4yLS44IDEuNS0uMy4zLTYuMiAzLjktMTUuNiAzLjl6bS0zMS0xMC4zYzUuMiAwIDEwLjQgMS4xIDE1LjYgMy40IDE0LjcgNi40IDI1LjQgMi4xIDI4LjMuNnYtNDYuOWMtNC44IDIuMS0xNS43IDUtMjkuNy0xLjItMTQuNi02LjUtMjUuNC0yLjEtMjguMy0uNnY0Ny42bDEuNC0uNmguMWM0LjItMS42IDguNC0yLjMgMTIuNi0yLjN6XCIgZmlsbD1cIiMyNjMyMzhcIiBzdHlsZT1cImZpbGw6IHJnYigwLCAxMjgsIDApO1wiPjwvcGF0aD48L2c+PGc+PHBhdGggZD1cIm02My41IDUyLjZjLS42LS4xLTEuNi0uMy0xLjQtLjN2LTEyLjRjLTIuNy0uNS01LjUtMS4yLTguNS0yLjUtMi45LTEuMi02LjYtMy05LjEtMy41djEyLjRjLjMuMS0uNCAwLTEuMi0uMS04LjYtMS4yLTE1LjMuOS0xNS4zLjl2LTEyLjVzNy40LTIuMyAxNi42LS43di0xMi41Yy0xMC4xLTItMTYuNiAxLjEtMTYuNiAxLjF2LTEyLjNzNi41LTMuMSAxNi42LTEuMXYxMi4zYzIuNy40IDYuNSAyLjIgOS4zIDMuNCAzIDEuMyA1LjcgMi4xIDguMyAyLjZ2LTEyLjRjOS42IDEuNiAxNi42LTEgMTYuNi0xdjEyLjZjMC0uMS0uMS0uMi0uMS0uMnMtNyAyLjYtMTYuNiAxdjEyLjVjMi40LjUgNC41LjYgNi40LjYgNi4zIDAgMTAuMS0xLjggMTAuMS0xLjhsLjEgMTIuNWMuMSAwLTUuOSAyLjgtMTUuMiAxLjR6XCIgZmlsbD1cIiMyNjMyMzhcIiBzdHlsZT1cImZpbGw6IHJnYigwLCAxMjgsIDApO1wiPjwvcGF0aD48L2c+PGc+PHBhdGggZD1cIm0yNi40IDk3aC03LjhjLTEuNCAwLTIuNiA1LTIuNiA1aDEzcy0xLjItNS0yLjYtNXpcIiBmaWxsPVwiI2UxZjJmYVwiIHN0eWxlPVwiZmlsbDogcmdiKDAsIDEyOCwgMCk7XCI+PC9wYXRoPjxwYXRoIGQ9XCJtMjkgMTAzLjhoLTEzYy0uNSAwLTEtLjItMS40LS43cy0uNS0xLS4zLTEuNWMxLTQuMiAyLjQtNi40IDQuMy02LjRoNy44YzEuOSAwIDMuMyAyLjEgNC4zIDYuNC4xLjUgMCAxLjEtLjMgMS41cy0uOS43LTEuNC43em0tMTAuNy0zLjVoOC4zYy0uMi0uNy0uNS0xLjItLjctMS41aC02LjljLS4yLjMtLjQuOC0uNyAxLjV6XCIgZmlsbD1cIiMyNjMyMzhcIiBzdHlsZT1cImZpbGw6IHJnYigwLCAxMjgsIDApO1wiPjwvcGF0aD48L2c+PC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gY2FyQmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJWaWV3O1xyXG4iLCJpbXBvcnQgQ2FyVmlldyBmcm9tICcuL2Nhcic7XHJcbmltcG9ydCBMaXN0VmlldyBmcm9tICcuL2xpc3RWaWV3JztcclxuaW1wb3J0IHsgR2FyYWdlSHRtbCB9IGZyb20gJy4vaHRtbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29udHJvbGxlci9sb2FkZXInO1xyXG5pbXBvcnQgeyBDYXIsIENhclBhcmFtcyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgUmFjZSBmcm9tICcuL3JhY2UnO1xyXG5cclxuY2xhc3MgR2FyYWdlIHtcclxuICBzdGF0aWMgY2FyOiBDYXJWaWV3ID0gbmV3IENhclZpZXcoKTtcclxuXHJcbiAgc3RhdGljIGNhckxpc3Q6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIGN1cnJlbnRDYXJzOiBDYXJbXSA9IFtdO1xyXG5cclxuICBzdGF0aWMgY3VycmVudFBhZ2U6IG51bWJlciA9IEdhcmFnZS5sb2FkU3RhdGUoKTtcclxuXHJcbiAgc3RhdGljIHBhZ2VMaW1pdCA9IDc7XHJcblxyXG4gIHN0YXRpYyB2aWV3OiBMaXN0VmlldzxDYXIsIENhclBhcmFtcz4gPSBuZXcgTGlzdFZpZXcoR2FyYWdlSHRtbCwgJy5jYXItbGlzdCcsIExvYWRlci5nZXRDYXJzLCBHYXJhZ2UuY2FyLmRyYXdDYXIpO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIEdhcmFnZS5jYXJMaXN0ID0gR2FyYWdlLnZpZXcucmVuZGVyKCk7XHJcbiAgICBHYXJhZ2UuZHJhd0Nhckxpc3QoKTtcclxuXHJcbiAgICBHYXJhZ2UuYWRkQ3JlYXRlQW5kVXBkYXRlTGlzdGVuZXIoKTtcclxuICAgIEdhcmFnZS5hZGRDYXJMaXN0TGlzdGVuZXIoKTtcclxuICAgIEdhcmFnZS5hZGRQYWdpbmF0aW9uTGlzdGVuZXIoKTtcclxuICAgIEdhcmFnZS5hZGRHZW5lcmF0ZUxpc3RlbmVyKCk7XHJcbiAgICBHYXJhZ2UuYWRkUmFjZUxpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyBkcmF3Q2FyTGlzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIEdhcmFnZS5jdXJyZW50Q2FycyA9IGF3YWl0IEdhcmFnZS52aWV3LmRyYXdMaXN0KHsgcGFnZTogR2FyYWdlLmN1cnJlbnRQYWdlLCBsaW1pdDogR2FyYWdlLnBhZ2VMaW1pdCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFkZENyZWF0ZUFuZFVwZGF0ZUxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgWydjcmVhdGUnLCAndXBkYXRlJ10uZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0b3ItLSR7YWN0aW9ufWApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBjb25zdCBbYnJhbmRJbnB1dCwgY29sb3JJbnB1dCwgYnV0dG9uXSA9IFsuLi5lZGl0b3IuY2hpbGRyZW5dIGFzIFtcclxuICAgICAgICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgICAgIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICAgICAgSFRNTEJ1dHRvbkVsZW1lbnRcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgTG9hZGVyLmNyZWF0ZUNhcih7IG5hbWU6IGJyYW5kSW5wdXQudmFsdWUsIGNvbG9yOiBjb2xvcklucHV0LnZhbHVlIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBHYXJhZ2UuZHJhd0Nhckxpc3QoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAndXBkYXRlJykge1xyXG4gICAgICAgICAgTG9hZGVyLnVwZGF0ZUNhcihOdW1iZXIoYnV0dG9uLmRhdGFzZXQudXBkYXRlKSwgeyBuYW1lOiBicmFuZElucHV0LnZhbHVlLCBjb2xvcjogY29sb3JJbnB1dC52YWx1ZSB9KS50aGVuKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgR2FyYWdlLmRyYXdDYXJMaXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYWRkQ2FyTGlzdExpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgR2FyYWdlLmNhckxpc3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLXNlbGVjdCcpKSB7XHJcbiAgICAgICAgICBHYXJhZ2UudXBkYXRlQ2FyKE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnNlbGVjdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLXJlbW92ZScpKSB7XHJcbiAgICAgICAgICBHYXJhZ2UuZGVsZXRlQ2FyKE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnJlbW92ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLXN0YXJ0JykpIHtcclxuICAgICAgICAgIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgIFJhY2Uuc3RhcnRDYXIoTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuc3RhcnQpKTtcclxuICAgICAgICAgIGNvbnN0IHN0b3BCdXR0b246IEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgaWYgKHN0b3BCdXR0b24gaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkgc3RvcEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLXN0b3AnKSkge1xyXG4gICAgICAgICAgZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgUmFjZS5yZXR1cm5DYXIoTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuc3RvcCkpO1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnRCdXR0b246IEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgIGlmIChzdGFydEJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSBzdGFydEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBkZWxldGVDYXIoaWQ6IG51bWJlcikge1xyXG4gICAgTG9hZGVyLmRlbGV0ZUNhcihpZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIEdhcmFnZS5kcmF3Q2FyTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyB1cGRhdGVDYXIoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXBkYXRlRWRpdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvci0tdXBkYXRlJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBbYnJhbmRJbnB1dCwgY29sb3JJbnB1dCwgYnV0dG9uXTogRWxlbWVudFtdID0gWy4uLnVwZGF0ZUVkaXRvci5jaGlsZHJlbl07XHJcbiAgICBMb2FkZXIuZ2V0Q2FyKGlkKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJyYW5kSW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXHJcbiAgICAgICAgY29sb3JJbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiZcclxuICAgICAgICBidXR0b24gaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICAgICApIHtcclxuICAgICAgICBicmFuZElucHV0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYnJhbmRJbnB1dC52YWx1ZSA9IHJlcy5uYW1lO1xyXG4gICAgICAgIGNvbG9ySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb2xvcklucHV0LnZhbHVlID0gcmVzLmNvbG9yO1xyXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LnVwZGF0ZSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYWRkUGFnaW5hdGlvbkxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbjogRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbicpO1xyXG5cclxuICAgIHBhZ2luYXRpb24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLXByZXYnKSkgR2FyYWdlLmN1cnJlbnRQYWdlIC09IDE7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLS1uZXh0JykpIEdhcmFnZS5jdXJyZW50UGFnZSArPSAxO1xyXG4gICAgICAgIEdhcmFnZS5zYXZlU3RhdGUoKTtcclxuICAgICAgICBHYXJhZ2UuZHJhd0Nhckxpc3QoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhZGRHZW5lcmF0ZUxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhdGUtYnV0dG9uJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBnZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgR2FyYWdlLmdlbmVyYXRlQ2FycygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUNhcnMoKTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XHJcbiAgICAgIExvYWRlci5jcmVhdGVDYXIoeyBuYW1lOiBVdGlscy5nZXRSYW5kb21OYW1lKCksIGNvbG9yOiBVdGlscy5nZXRSYW5kb21Db2xvcigpIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIEdhcmFnZS5kcmF3Q2FyTGlzdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFkZFJhY2VMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFjZS1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0LWJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maW5pc2gtbWVzc2FnZScpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHJhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHJhY2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAobWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaC1tZXNzYWdlLS1zaG93bicpKSBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaC1tZXNzYWdlLS1zaG93bicpO1xyXG4gICAgICBSYWNlLnN0YXJ0UmFjZShHYXJhZ2UuY3VycmVudENhcnMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgd2lubmVyOiBDYXJbXSA9IEdhcmFnZS5jdXJyZW50Q2Fycy5maWx0ZXIoKGNhcikgPT4gY2FyLmlkID09PSByZXMuaWQpO1xyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYCR7d2lubmVyWzBdLm5hbWV9IHdlbnQgZmlyc3QgaW4gJHtyZXMudGltZX0gc2Vjb25kc2A7XHJcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2gtbWVzc2FnZS0tc2hvd24nKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBpZiAobWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbmlzaC1tZXNzYWdlLS1zaG93bicpKSBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaC1tZXNzYWdlLS1zaG93bicpO1xyXG4gICAgICBSYWNlLnN0b3BSYWNlKEdhcmFnZS5jdXJyZW50Q2Fycyk7XHJcbiAgICAgIHJhY2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgc2F2ZVN0YXRlKCk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQYWdlJywgSlNPTi5zdHJpbmdpZnkoR2FyYWdlLmN1cnJlbnRQYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBsb2FkU3RhdGUoKTogbnVtYmVyIHtcclxuICAgIGxldCBwYWdlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UGFnZScpKTtcclxuICAgIGlmIChwYWdlID09PSAwKSBwYWdlID0gMTtcclxuICAgIHJldHVybiBwYWdlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlO1xyXG4iLCJleHBvcnQgY29uc3QgR2FyYWdlSHRtbCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiZWRpdG9yIGVkaXRvci0tY3JlYXRlXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDYXIgYnJhbmRcIiBuYW1lPVwiY3JlYXRlLWNhci1icmFuZFwiIGlkPVwiY3JlYXRlLWJyYW5kXCI+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpbnB1dC0tY29sb3JcIiB0eXBlPVwiY29sb3JcIiBuYW1lPVwiQ2FyIGNvbG9yXCIgaWQ9XCJjcmVhdGUtY29sb3JcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cImNyZWF0ZS1idXR0b25cIj5DcmVhdGUgQ2FyPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImVkaXRvciBlZGl0b3ItLXVwZGF0ZVwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2FyIGJyYW5kXCIgbmFtZT1cInVwZGF0ZS1jYXItYnJhbmRcIiBpZD1cInVwZGF0ZS1icmFuZFwiIGRpc2FibGVkPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgaW5wdXQtLWNvbG9yXCIgdHlwZT1cImNvbG9yXCIgbmFtZT1cIkNhciBjb2xvclwiIGlkPVwidXBkYXRlLWNvbG9yXCIgZGlzYWJsZWQ+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJ1cGRhdGUtYnV0dG9uXCIgZGlzYWJsZWQ+VXBkYXRlIENhcjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLW5hdlwiIGlkPVwicmFjZS1idXR0b25cIj5SYWNlPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tbmF2XCIgaWQ9XCJyZXNldC1idXR0b25cIiBkaXNhYmxlZD5SZXNldDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiZ2VuZXJhdGUtYnV0dG9uXCI+R2VuZXJhdGUgQ2FyczwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5HYXJhZ2UgKDxzcGFuIGlkPVwiaXRlbXMtYW1vdW50XCI+PC9zcGFuPik8L2gxPlxyXG4gIDxoMiBjbGFzcz1cInBhZ2Utc3VidGl0bGVcIj5QYWdlICM8c3BhbiBpZD1cImN1cnJlbnQtcGFnZVwiPjwvc3Bhbj48L2gyPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXItbGlzdFwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tbmF2IGJ1dHRvbi0tcHJldlwiPlByZXY8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1uYXYgYnV0dG9uLS1uZXh0XCI+TmV4dDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJmaW5pc2gtbWVzc2FnZVwiPjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpbm5lcnNIdG1sID0gYFxyXG4gIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5XaW5uZXJzICg8c3BhbiBpZD1cIml0ZW1zLWFtb3VudFwiPjwvc3Bhbj4pPC9oMT5cclxuICA8aDIgY2xhc3M9XCJwYWdlLXN1YnRpdGxlXCI+UGFnZSAjPHNwYW4gaWQ9XCJjdXJyZW50LXBhZ2VcIj48L3NwYW4+PC9oMj5cclxuICA8ZGl2IGNsYXNzPVwid2lubmVyIHdpbm5lci0taGVhZFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ3aW5uZXJfX251bWJlclwiPuKEljwvc3Bhbj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3aW5uZXJfX2ltYWdlXCI+Q2FyPC9kaXY+XHJcbiAgICA8YiBjbGFzcz1cIndpbm5lcl9fdGl0bGVcIj5OYW1lPC9iPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ3aW5uZXJfX3dpbnMgd2lubmVycy1zb3J0XCIgZGF0YS1zb3J0PVwid2luc1wiPldpbnM8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cIndpbm5lcl9fdGltZSB3aW5uZXJzLXNvcnRcIiBkYXRhLXNvcnQ9XCJ0aW1lXCI+VGltZTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwid2lubmVyLWxpc3RcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvblwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLW5hdiBidXR0b24tLXByZXZcIj5QcmV2PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tbmF2IGJ1dHRvbi0tbmV4dFwiPk5leHQ8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuYDtcclxuIiwiaW1wb3J0IHsgSXRlbXNSZXNwb25zZSwgQ2FyUGFyYW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcblxyXG5jbGFzcyBMaXN0VmlldzxULCBQIGV4dGVuZHMgQ2FyUGFyYW1zPiB7XHJcbiAgaHRtbDogc3RyaW5nO1xyXG5cclxuICBsaXN0VGFnOiBzdHJpbmc7XHJcblxyXG4gIGxpc3Q6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgZ2V0SXRlbXM6IChwYXJhbXM6IFApID0+IFByb21pc2U8SXRlbXNSZXNwb25zZTxUPj47XHJcblxyXG4gIGRyYXdJdGVtOiAoaXRlbTogVCwgaW5kZXg/OiBudW1iZXIpID0+IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGh0bWw6IHN0cmluZyxcclxuICAgIGxpc3RUYWc6IHN0cmluZyxcclxuICAgIGdldEl0ZW1zOiAocGFyYW1zOiBQKSA9PiBQcm9taXNlPEl0ZW1zUmVzcG9uc2U8VD4+LFxyXG4gICAgZHJhd0l0ZW06IChpdGVtOiBULCBpbmRleD86IG51bWJlcikgPT4gSFRNTEVsZW1lbnRcclxuICApIHtcclxuICAgIHRoaXMuaHRtbCA9IGh0bWw7XHJcbiAgICB0aGlzLmxpc3RUYWcgPSBsaXN0VGFnO1xyXG4gICAgdGhpcy5saXN0ID0gbnVsbDtcclxuICAgIHRoaXMuZ2V0SXRlbXMgPSBnZXRJdGVtcztcclxuICAgIHRoaXMuZHJhd0l0ZW0gPSBkcmF3SXRlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuXHJcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMubGlzdFRhZyk7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWxsSXRlbShpdGVtOiBULCBpbmRleD86IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3SXRlbTogSFRNTEVsZW1lbnQgPSB0aGlzLmRyYXdJdGVtKGl0ZW0sIGluZGV4KTtcclxuICAgIGlmICh0aGlzLmxpc3QgaW5zdGFuY2VvZiBFbGVtZW50KSB0aGlzLmxpc3QuYXBwZW5kKG5ld0l0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWxsTGlzdChpdGVtczogVFtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0KSB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICB0aGlzLmZpbGxJdGVtKGl0ZW0sIGluZGV4KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGRyYXdMaXN0KHBhcmFtczogUCk6IFByb21pc2U8VFtdPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0SXRlbXMocGFyYW1zKTtcclxuICAgIHRoaXMuZmlsbExpc3QocmVzcG9uc2UuaXRlbXMpO1xyXG4gICAgdGhpcy5zZXRQYWdpbmF0aW9uQnRuc1N0YXRlKE51bWJlcihyZXNwb25zZS5jb3VudCksIHBhcmFtcy5wYWdlKTtcclxuICAgIHRoaXMucmVuZGVyTnVtYmVycyhOdW1iZXIocmVzcG9uc2UuY291bnQpLCBwYXJhbXMucGFnZSk7XHJcbiAgICByZXR1cm4gWy4uLnJlc3BvbnNlLml0ZW1zXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGFnaW5hdGlvbkJ0bnNTdGF0ZShpdGVtc0Ftb3VudDogbnVtYmVyLCBwYWdlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLS1wcmV2JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tbmV4dCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKGl0ZW1zQW1vdW50IC8gNyk7XHJcbiAgICBwcmV2QnRuLmRpc2FibGVkID0gcGFnZSA9PT0gMTtcclxuICAgIG5leHRCdG4uZGlzYWJsZWQgPSBwYWdlID09PSBsYXN0UGFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyTnVtYmVycyhhbW91bnQ6IG51bWJlciwgcGFnZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBpdGVtc0Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtcy1hbW91bnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wYWdlJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpdGVtc0Ftb3VudC50ZXh0Q29udGVudCA9IGFtb3VudC50b1N0cmluZygpO1xyXG4gICAgcGFnZU51bWJlci50ZXh0Q29udGVudCA9IHBhZ2UudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RWaWV3O1xyXG4iLCJjbGFzcyBNZW51IHtcclxuICBwdWJsaWMgZHJhd0Jsb2NrKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGh0bWwgPSBgXHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1uYXZcIiBkYXRhLW5hdj1cImdhcmFnZVwiPkdhcmFnZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tbmF2XCIgZGF0YS1uYXY9XCJ3aW5uZXJzXCI+V2lubmVyczwvYnV0dG9uPlxyXG4gICAgYDtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZE5hdkxpc3RlbmVyKGdhcmFnZUNhbGxiYWNrOiAoKSA9PiB2b2lkLCB3aW5uZXJzQ2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYXYgPT09ICdnYXJhZ2UnKSB7XHJcbiAgICAgICAgICBnYXJhZ2VDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYXYgPT09ICd3aW5uZXJzJykge1xyXG4gICAgICAgICAgd2lubmVyc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb250cm9sbGVyL2xvYWRlcic7XHJcbmltcG9ydCB7IENhciwgQW5pbWF0ZWRDYXJzLCBXaW5uZXJXaXRob3V0V2lucyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5cclxuY2xhc3MgUmFjZSB7XHJcbiAgc3RhdGljIGFuaW1hdGVkQ2FyczogQW5pbWF0ZWRDYXJzID0ge307XHJcblxyXG4gIHN0YXRpYyByYWNpbmdDYXJzOiBXaW5uZXJXaXRob3V0V2luc1tdID0gW107XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnRDYXIoaWQ6IG51bWJlciwgaXNSYWNlID0gZmFsc2UpOiBQcm9taXNlPFdpbm5lcldpdGhvdXRXaW5zPiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBMb2FkZXIuc3RhcnRFbmdpbmUoaWQpO1xyXG4gICAgY29uc3QgdGltZSA9IHJlcy5kaXN0YW5jZSAvIHJlcy52ZWxvY2l0eTtcclxuICAgIFJhY2UuYW5pbWF0ZUNhcihpZCwgdGltZSk7XHJcbiAgICBjb25zdCB7IHN1Y2Nlc3MgfTogeyBzdWNjZXNzOiBib29sZWFuIH0gPSB7IC4uLihhd2FpdCBMb2FkZXIuc3RhcnREcml2ZShpZCkpIH07XHJcblxyXG4gICAgY29uc3QgcDogUHJvbWlzZTxXaW5uZXJXaXRob3V0V2lucz4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIGlmIChpc1JhY2UpIFJhY2UucmFjaW5nQ2Fycy5wdXNoKHsgdGltZSwgaWQgfSk7XHJcbiAgICAgICAgcmVzb2x2ZSh7IHRpbWUsIGlkIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJhY2Uuc3RvcENhcihpZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBzdG9wQ2FyKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIExvYWRlci5zdG9wRW5naW5lKGlkKTtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKFJhY2UuYW5pbWF0ZWRDYXJzW2lkXS5hbmltSUQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZXR1cm5DYXIoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgUmFjZS5zdG9wQ2FyKGlkKTtcclxuICAgIFJhY2UuYW5pbWF0ZWRDYXJzW2lkXS5jYXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFuaW1hdGVDYXIoaWQ6IG51bWJlciwgdGltZTogbnVtYmVyLCBzdG9wQ29lZiA9IDEpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyX19pbWFnZVtkYXRhLWNhcj1cIiR7aWR9XCJdYCkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gY2FyRWxlbS5vZmZzZXRMZWZ0O1xyXG4gICAgY29uc3QgZW5kUG9zaXRpb24gPSAoTnVtYmVyKGNhckVsZW0ucGFyZW50RWxlbWVudD8ub2Zmc2V0V2lkdGgpIC0gY2FyRWxlbS5vZmZzZXRXaWR0aCAqIDIpIC8gc3RvcENvZWY7XHJcbiAgICBjb25zdCBmcmFtZXNDb3VudCA9ICh0aW1lIC8gMTAwMCkgKiA0MDtcclxuICAgIGNvbnN0IGRlbHRhID0gKGVuZFBvc2l0aW9uIC0gY3VycmVudFBvc2l0aW9uKSAvIGZyYW1lc0NvdW50O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmUoKTogdm9pZCB7XHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiArPSBkZWx0YTtcclxuICAgICAgY2FyRWxlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRQb3NpdGlvbn1weClgO1xyXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uIDwgZW5kUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBhbmltSUQ6IG51bWJlciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKTtcclxuICAgICAgICBSYWNlLmFuaW1hdGVkQ2Fyc1tpZC50b1N0cmluZygpXSA9IHtcclxuICAgICAgICAgIGFuaW1JRCxcclxuICAgICAgICAgIGNhckVsZW0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBzdGFydFJhY2UoY2FyczogQ2FyW10pOiBQcm9taXNlPFdpbm5lcldpdGhvdXRXaW5zPiB7XHJcbiAgICBSYWNlLnJhY2luZ0NhcnMgPSBbXTtcclxuICAgIGNvbnN0IHJlc3BvbnNlOiBXaW5uZXJXaXRob3V0V2lucyA9IGF3YWl0IFByb21pc2UuYW55KGNhcnMubWFwKChjYXIpID0+IFJhY2Uuc3RhcnRDYXIoY2FyLmlkLCB0cnVlKSkpO1xyXG4gICAgcmVzcG9uc2UudGltZSA9ICsocmVzcG9uc2UudGltZSAvIDEwMDApLnRvRml4ZWQoMik7XHJcbiAgICBMb2FkZXIuYWRkV2luKHJlc3BvbnNlKTtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc3RvcFJhY2UoY2FyczogQ2FyW10pOiB2b2lkIHtcclxuICAgIGNhcnMuZm9yRWFjaCgoY2FyKSA9PiB7XHJcbiAgICAgIFJhY2UucmV0dXJuQ2FyKGNhci5pZCk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFjZTtcclxuIiwiaW1wb3J0IHsgV2lubmVyRm9yUmVuZGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcblxyXG5jbGFzcyBXaW5uZXJWaWV3IHtcclxuICBwdWJsaWMgZHJhd1dpbm5lcihpdGVtOiBXaW5uZXJGb3JSZW5kZXIsIGluZGV4ID0gMCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHsgaWQsIG5hbWUsIGNvbG9yLCB3aW5zLCB0aW1lIH06IFdpbm5lckZvclJlbmRlciA9IGl0ZW07XHJcbiAgICBjb25zdCB3aW5uZXJCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2lubmVyQmxvY2suY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XHJcbiAgICB3aW5uZXJCbG9jay5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwid2lubmVyX19udW1iZXJcIj4ke2luZGV4ICsgMX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3aW5uZXJfX2ltYWdlXCIgZGF0YS1jYXI9XCIke2lkfVwiPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMjFcIiBoZWlnaHQ9XCI1MVwiIHZpZXdCb3g9XCIwIDAgMTIxIDUxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PG1hc2sgaWQ9XCJhXCIgZmlsbD1cIiNmZmZcIj48cGF0aCBkPVwiTTUyLjYyOS44NzdjLjIuMjkuNDE3LjQxMi42NzUuNTAyLjgzOC4yOTIgMS42MDYuNDI3IDIuNTg3LjU0OCAxLjUuMTg0IDMuMTE0LjQ4OSA0LjU5LjgxIDEuODg5LjQxIDMuNzQxLjk2NiA1LjU4IDEuNTZhNjMuOTcyIDYzLjk3MiAwIDAgMSA0LjkyOCAxLjgxNSA2NS4wNjMgNjUuMDYzIDAgMCAxIDQuNTMgMi4xMTUgNjIuODU3IDYyLjg1NyAwIDAgMSAzLjcyIDIuMDYyIDY3LjU5NyA2Ny41OTcgMCAwIDEgMy42NzUgMi4zNjNjMS4zNzIuOTQ2IDIuNjk4IDEuOTQ3IDQuMDIgMi45NjIuNzY2LjU4OSAxLjU0IDEuMTc3IDIuMjY1IDEuODE1LjQ5LjQzLjQ0My41IDEuMDguOTMuNDg4LjMzIDEuMDg1LjI4MyAxLjYzNS4wMjMuNTUtLjI2IDEuNDYyLS44MDMgMS40NjItLjgwM3MtMS4wOTUtLjgxOC0xLjk1Ny0xLjQxN2MuMDE2LjAwMi4wMzguMDEzLjA1My4wMTUuNTQ3LjA3NSAxLjI1Mi0uMTI5IDEuOC0uMjEuMzMyLS4wNS42NzctLjA2NCAxLjAxMi0uMDQ1LjczLjA0IDEuNDQ0LjIxIDIuMTYuMzUyIDMuNTMuNyA3LjA1OSAxLjQ1NSAxMC41MTUgMi40NiAyLjQ5LjcyNSA0Ljk1NCAxLjU1NiA3LjM0MyAyLjU2NS43OTQuMzM2IDEuNTk5LjY3NCAyLjMxIDEuMTYzLjY1NS40NSAxLjI2Ny45ODMgMS43NjIgMS42MDUuNDY3LjU4Ny43OSAxLjI4NiAxLjExIDEuOTY1LjI5OS42MzQuNjEyIDEuMjcuNzUgMS45NTcuMjE2IDEuMDcuMTEyIDIuMTguMTA1IDMuMjdhMzguMzk3IDM4LjM5NyAwIDAgMS0uMTU3IDMuNTI1Yy0uMTE5IDEuMi0uMjkzIDIuMjQtLjM0NSAzLjQ0My0uMDExLjI1Mi0uMDA3LjY2My4wOTcuODkyLjA3OC4xNzMuMDk1LjIwOS4xNS4zOS4wNS4xNjQtLjAzLjM0Ni0uMDk3LjUwM2EzLjI3NSAzLjI3NSAwIDAgMS0uNzA1IDEuMDA1Yy0uMTQ1LjE0NS0uMzU0LjIxMi0uNTAzLjM1Mi0uMjE3LjIwNi0uMzQzLjQ5Ni0uNTU1LjcwNS0uNDUxLjQ0Ni0uOTQ1Ljg2My0xLjUwNyAxLjE1Ni0uNzk2LjQxMy0xLjY5MS42MTItMi41NjUuODEtLjk0Mi4yMTItMS45MTEuMzE4LTIuODczLjM5Ny0uNjY5LjA1NS0xLjIzNi4xMjctMi4wMS4wNTMtLjU1My0uMDEtLjQ2NS0uMDA2LS45NjctLjAxNi40MS0xLjE3NS42MzctMi40NDIuNjM3LTMuNzU3IDAtNi4yOS01LjEwMy0xMS4zODUtMTEuMzkyLTExLjM4NS02LjI5IDAtMTEuMzg2IDUuMDk1LTExLjM4NiAxMS4zODUgMCAxLjE1OC4xNzQgMi4yNzcuNDk1IDMuMzMtLjM2LS4wMDYtLjI5LS4wMDEtLjY3NS0uMDA4LTI0Ljk5MS0uMzA0LTM3Ljg5NS0uNzIzLTU2Ljg0Mi0xLjAwNS0uMzMzLS4wMDUtLjY1NC0uMDE1LS45ODMtLjAyMi4xOTUtLjgzNC4zLTEuNzAyLjMtMi41OTUgMC02LjI5LTUuMDk1LTExLjM4NS0xMS4zODUtMTEuMzg1UzUuNjggMzQuMTI3IDUuNjggNDAuNDE3YzAgLjM5My4wMi43OC4wNiAxLjE2MmE0LjA2IDQuMDYgMCAwIDEtLjk5LS4zMDdjLS42NjEtLjMtMS4yNTQtLjc0OC0xLjgxNS0xLjIwOGExMi44MTUgMTIuODE1IDAgMCAxLTEuNjU4LTEuNjU3Yy0uMzE4LS4zNzctLjcyNS0uNzMyLS44NTUtMS4yMDgtLjE2NS0uNi4xMTgtLjQ2My4xNS0xLjg2Ny4wNS0yLjIxMy0uMDAyLTQuNDMuMTUtNi42MzguMDYtLjg3NS4wNzgtMS44NzIuMy0yLjYxNy4wNzgtLjI2Mi4zMjgtLjUxOC41MDMtLjcyOC4xNi0uMTkzLjQ3Ni0uMjMuNTAyLS40OC4xLS45NS4xMTEtMS45NDUuMTU4LTIuOTE3LjAzLS42MjgtLjAwNi0xLjI1Ny4wNDUtMS44ODNhLjg3Mi44NzIgMCAwIDAgLjAzLjEyOGMuMDYzLjIwNS4yOTcuMzEzLjM5Ny41MDIuMTA3LjIwMi4xNjQuNDI4LjIwMy42NTMuMDc0LjQzOC4wNzIuODkuMDUyIDEuMzM1LS4wMi40NjQtLjE0NC45MTYtLjE4IDEuMzgtLjAyMy4yOTMtLjE0Mi42MTctLjAyMi44ODUuMDkuMi4yOTkuMzQzLjUwMi40MjcuMzk3LjE2NC44NTcuMTUxIDEuMjgzLjA5OC40MzktLjA1NS44OC0uMiAxLjI2LS40MjguNzQ4LS40NDggMS4zLTEuMTY1IDEuOTEyLTEuNzg1IDEuMDA1LTEuMDE3IDIuMDI0LTIuMDMyIDIuODg4LTMuMTcyLjIyLS4yOTEuNTE1LS41Ny41NzctLjkzYTEuMjggMS4yOCAwIDAgMC0uMTk1LS45M2MtLjM1My0uNDk3LTEuMDEtLjY5LTEuNTYtLjk1My0uNjUtLjMxMS0xLjMzNi0uNTc3LTIuMDQtLjczNS0uNTEtLjExNC0xLjAzOC0uMTQ2LTEuNTYtLjE1LS41MDUtLjAwMy0xLjAyMi0uMDEtMS41MDcuMTI4LS40NDQuMTI2LS45MDQuMzA0LTEuMjMuNjNhMS4xNDcgMS4xNDcgMCAwIDAtLjEyLjE0MmMuMzIyLS43NjYuODA1LTEuNDQgMS4yODItMi4xMjIuMDkyLS4wMzQgMS4xNDItLjQyNCAxLjcyNS0uNTYzLjQyMS0uMSAxLjIwOC0uMDk3IDEuMjA4LS4wOTdzMS4wMTctMS40NzUgMS41ODItMi4xNjhhMjguNSAyOC41IDAgMCAxIDIuMTktMi40MDdBMjcuNTY1IDI3LjU2NSAwIDAgMSAxMy42IDcuNjE5Yy45MzYtLjcwMSAyLjk0LTEuOTEyIDIuOTQtMS45MTJsLTEuNjUtLjgxOGMuMjQ1LS4yNzEtLjA5Mi0uOTc1LjE2NS0xLjI5LjE5NS0uMjM4LjUyMS0uMjM4LjkzLS4yNDdhNzAuMTcgNzAuMTcgMCAwIDAgMy4yNDctLjE1OGMxLjQxNS0uMDk0IDIuODE2LS4zMTcgNC4yMjMtLjUwMiAxLjM5NC0uMTg0IDIuNzgtLjQ1NCA0LjE3Ny0uNjA4IDIuODkyLS4zMTcgNS43OTUtLjUxMyA4LjctLjY1MiAzLjE4My0uMTUzIDYuMzc4LS4xMDIgOS41NjMtLjIwMyAxLjE5LS4wMzcgMi4zOC0uMDg3IDMuNTctLjE1IDEuMDU3LS4wNTUgMi4xMDctLjIyNyAzLjE2NS0uMjAyem0tOC4yOTUgMi44NDJzLTIuMzMuMDA0LTMuNDk1LjA1M2MtMS42OC4wNy0zLjM1OS4yMDMtNS4wMzMuMzUyLTEuNzEzLjE1My0zLjQyNy4zMTMtNS4xMy41NTVhNTEuNDM3IDUxLjQzNyAwIDAgMC0zLjY5Ny42NTNjLS4yOC4wNjEtLjY3Mi4yMzgtLjY4My41MjUtLjA2NiAxLjc2My0uMDc3IDMuNDQxLS4wOTcgNS4xNi0uMDIyIDEuODM2LS4wMjMgNS41MDUtLjAyMyA1LjUwNXM2LjIyLjA1IDkuMzMuMTA1YzMuMzguMDYgMTAuMTMzLjI0NyAxMC4xMzMuMjQ3TDQ0LjMzNCAzLjcyem01LjQ4Mi4wM3MuOCA0LjQ0IDEuMzA1IDYuNjM4Yy41MzIgMi4zMTUgMS44MTUgNi44OTIgMS44MTUgNi44OTJzMy43MjIuMTYgNS41OC4zYzMuNDQ0LjI2MSA2Ljg4MS42MTUgMTAuMzEzIDEuMDA1IDEuMjkzLjE0NyAzLjY3NS4zMyAzLjY3NS4zM3MtLjAxMi0uOTQzLjEyLTEuMzg3Yy4xMzMtLjQ0Ni42NTItMS4yMy42NTItMS4yM2wtMS45OC03Ljk3M3MtMi4yMjgtLjk2OC0zLjM3NS0xLjM1N2MtMS43OC0uNjA0LTMuNjAxLTEuMDczLTUuNDMtMS41MDgtMS44NDYtLjQzOC0zLjcxLS44MjgtNS41ODctMS4xMS0xLjQ2Ny0uMjItMi45NDctLjMzMi00LjQyNS0uNDUtLjg4Ny0uMDctMi42NjMtLjE1LTIuNjYzLS4xNXpNMjMuMjgxIDYuMjg0cy0xLjYzLjM5NS0yLjQxNS42ODNjLTEuMDk5LjQwMy0yLjE4NS44NjMtMy4xOTUgMS40NTUtMS4yNjMuNzQtMi40NDcgMS42My0zLjU0NyAyLjU5NS0uNzUuNjU3LTEuNTM1IDEuMzE1LTIuMDYzIDIuMTYtLjQ2Ny43NDctLjIyOC43MTMuNDU4IDEuMDM1IDEuNDI3LjY3IDMuMDE2LjkyOCA0LjU1MiAxLjI4MiAxLjQ3LjM0IDQuNDQ4LjgwMyA0LjQ0OC44MDNMMjMuMjggNi4yODR6bTQ5LjE3IDIuNTQzYy41MzQgMi4xOCAxLjMgNC41MzMgMS44MzggNi43MTIgMCAwIC44My0uMTkgMS4yMy0uMTUuMzQ0LjAzNS45NzQuMjQxIDEuNDMyLjQ4LjQuMjA5Ljg4Mi41MTcgMS4yMy44MDMuMzc2LjMwOC44MDcuODU5Ljk4MyAxLjMxMi4yNTUuNjU5IDAgMS45MDUgMCAxLjkwNXMuOTk2LjA5IDEuNjM1LjE1OGMuNjM1LjA2NyAxLjkxMi4xNSAxLjkxMi4xNXMtLjYyLTIuNTc4LTEuMDU3LTMuODI1Yy0uMjk2LS44NDQtMS4wNTgtMi40NjgtMS4wNTgtMi40NjhzLS45MzQtLjkxLTEuNDU1LTEuMzA1Yy0uOTk3LS43NTUtMi4wODMtMS4zOTQtMy4xNzItMi4wMS0xLjE0Mi0uNjQ2LTMuNTE4LTEuNzYyLTMuNTE4LTEuNzYyem0zMi40OTEgMTIuMDE1YS45MjMuOTIzIDAgMCAwLS41MDMuMTA1LjUyNS41MjUgMCAwIDAtLjI0Ny40NTdjLjAyMy4yOTguMzQ1LjQ5My41NTUuNzA1LjY5NS43MDQgMS41MzUgMS4yNDUgMi4zMSAxLjg2IDEuMDg0Ljg2MiAyLjEyMyAxLjc4OCAzLjI3IDIuNTY1LjQ5Ny4zMzggMSAuNjggMS41Ni45LjQ5Ni4xOTUgMS4wMzIuMjc2IDEuNTYuMzUzLjk4MS4xNDMgMS45NzEuMjE2IDIuOTYyLjIwMi4zNTQtLjAwNC43Ni4wOTMgMS4wNTgtLjA5Ny4xOTYtLjEyNi4yMDQtLjQyOC4zNTItLjYwOC4yMjctLjI3NC41MjItLjQ5NS44MS0uNzA1LjE1OC0uMTE1LjQ2OS0uMTA3LjUwMy0uMy4xLS41NzUtLjcxLS45MzItMS4xMS0xLjM1Ny0uMzc1LS4zOTctLjY5OS0uOTA1LTEuMjA4LTEuMTAzLS4yMzQtLjA5LS41MDUuMDU4LS43NSAwLS42Mi0uMTQ2LTEuMTI0LS42MDUtMS43MS0uODU1LS43MzctLjMxMy0xLjUwNC0uNTU5LTIuMjY1LS44MS0uNzY2LS4yNTItMS41MzMtLjUyLTIuMzE3LS43MDUtLjY5Ni0uMTYzLTEuNC0uMjY0LTIuMTA4LS4zNTJhMjIuMDk0IDIyLjA5NCAwIDAgMC0xLjgxNS0uMTVjLS4yOTMtLjAxMi0uNjExLS4wOTgtLjkwNy0uMTA1em0tODcuODcgOS42MTVjNS41IDAgOS45NiA0LjQ2IDkuOTYgOS45NiAwIDUuNS00LjQ2IDkuOTYtOS45NiA5Ljk2LTUuNTAxIDAtOS45Ni00LjQ2LTkuOTYtOS45NiAwLTUuNSA0LjQ1OS05Ljk2IDkuOTYtOS45NnptODAuNDc0LjNjNS41MDEgMCA5Ljk2MSA0LjQ2IDkuOTYxIDkuOTYgMCA1LjUtNC40NiA5Ljk2LTkuOTYgOS45Ni01LjUgMC05Ljk1My00LjQ2LTkuOTUzLTkuOTYgMC01LjUgNC40NTItOS45NiA5Ljk1My05Ljk2em0tODAuNDc1IDIuNDE1YTcuMjQ2IDcuMjQ2IDAgMCAwIDAgMTQuNDljNCAwIDcuMjM4LTMuMjQ1IDcuMjM4LTcuMjQ1cy0zLjIzOC03LjI0NS03LjIzOC03LjI0NXptODAuNDc1LjNhNy4yNCA3LjI0IDAgMCAwLTcuMjM3IDcuMjQ1YzAgNCAzLjIzNyA3LjI0NSA3LjIzNyA3LjI0NSA0LjAwMSAwIDcuMjQ2LTMuMjQ1IDcuMjQ2LTcuMjQ1cy0zLjI0NS03LjI0NS03LjI0Ni03LjI0NXpcIi8+PC9tYXNrPjxwYXRoIGQ9XCJNNTIuNjI5Ljg3N2MuMi4yOS40MTcuNDEyLjY3NS41MDIuODM4LjI5MiAxLjYwNi40MjcgMi41ODcuNTQ4IDEuNS4xODQgMy4xMTQuNDg5IDQuNTkuODEgMS44ODkuNDEgMy43NDEuOTY2IDUuNTggMS41NmE2My45NzIgNjMuOTcyIDAgMCAxIDQuOTI4IDEuODE1IDY1LjA2MyA2NS4wNjMgMCAwIDEgNC41MyAyLjExNSA2Mi44NTcgNjIuODU3IDAgMCAxIDMuNzIgMi4wNjIgNjcuNTk3IDY3LjU5NyAwIDAgMSAzLjY3NSAyLjM2M2MxLjM3Mi45NDYgMi42OTggMS45NDcgNC4wMiAyLjk2Mi43NjYuNTg5IDEuNTQgMS4xNzcgMi4yNjUgMS44MTUuNDkuNDMuNDQzLjUgMS4wOC45My40ODguMzMgMS4wODUuMjgzIDEuNjM1LjAyMy41NS0uMjYgMS40NjItLjgwMyAxLjQ2Mi0uODAzcy0xLjA5NS0uODE4LTEuOTU3LTEuNDE3Yy4wMTYuMDAyLjAzOC4wMTMuMDUzLjAxNS41NDcuMDc1IDEuMjUyLS4xMjkgMS44LS4yMS4zMzItLjA1LjY3Ny0uMDY0IDEuMDEyLS4wNDUuNzMuMDQgMS40NDQuMjEgMi4xNi4zNTIgMy41My43IDcuMDU5IDEuNDU1IDEwLjUxNSAyLjQ2IDIuNDkuNzI1IDQuOTU0IDEuNTU2IDcuMzQzIDIuNTY1Ljc5NC4zMzYgMS41OTkuNjc0IDIuMzEgMS4xNjMuNjU1LjQ1IDEuMjY3Ljk4MyAxLjc2MiAxLjYwNS40NjcuNTg3Ljc5IDEuMjg2IDEuMTEgMS45NjUuMjk5LjYzNC42MTIgMS4yNy43NSAxLjk1Ny4yMTYgMS4wNy4xMTIgMi4xOC4xMDUgMy4yN2EzOC4zOTcgMzguMzk3IDAgMCAxLS4xNTcgMy41MjVjLS4xMTkgMS4yLS4yOTMgMi4yNC0uMzQ1IDMuNDQzLS4wMTEuMjUyLS4wMDcuNjYzLjA5Ny44OTIuMDc4LjE3My4wOTUuMjA5LjE1LjM5LjA1LjE2NC0uMDMuMzQ2LS4wOTcuNTAzYTMuMjc1IDMuMjc1IDAgMCAxLS43MDUgMS4wMDVjLS4xNDUuMTQ1LS4zNTQuMjEyLS41MDMuMzUyLS4yMTcuMjA2LS4zNDMuNDk2LS41NTUuNzA1LS40NTEuNDQ2LS45NDUuODYzLTEuNTA3IDEuMTU2LS43OTYuNDEzLTEuNjkxLjYxMi0yLjU2NS44MS0uOTQyLjIxMi0xLjkxMS4zMTgtMi44NzMuMzk3LS42NjkuMDU1LTEuMjM2LjEyNy0yLjAxLjA1My0uNTUzLS4wMS0uNDY1LS4wMDYtLjk2Ny0uMDE2LjQxLTEuMTc1LjYzNy0yLjQ0Mi42MzctMy43NTcgMC02LjI5LTUuMTAzLTExLjM4NS0xMS4zOTItMTEuMzg1LTYuMjkgMC0xMS4zODYgNS4wOTUtMTEuMzg2IDExLjM4NSAwIDEuMTU4LjE3NCAyLjI3Ny40OTUgMy4zMy0uMzYtLjAwNi0uMjktLjAwMS0uNjc1LS4wMDgtMjQuOTkxLS4zMDQtMzcuODk1LS43MjMtNTYuODQyLTEuMDA1LS4zMzMtLjAwNS0uNjU0LS4wMTUtLjk4My0uMDIyLjE5NS0uODM0LjMtMS43MDIuMy0yLjU5NSAwLTYuMjktNS4wOTUtMTEuMzg1LTExLjM4NS0xMS4zODVTNS42OCAzNC4xMjcgNS42OCA0MC40MTdjMCAuMzkzLjAyLjc4LjA2IDEuMTYyYTQuMDYgNC4wNiAwIDAgMS0uOTktLjMwN2MtLjY2MS0uMy0xLjI1NC0uNzQ4LTEuODE1LTEuMjA4YTEyLjgxNSAxMi44MTUgMCAwIDEtMS42NTgtMS42NTdjLS4zMTgtLjM3Ny0uNzI1LS43MzItLjg1NS0xLjIwOC0uMTY1LS42LjExOC0uNDYzLjE1LTEuODY3LjA1LTIuMjEzLS4wMDItNC40My4xNS02LjYzOC4wNi0uODc1LjA3OC0xLjg3Mi4zLTIuNjE3LjA3OC0uMjYyLjMyOC0uNTE4LjUwMy0uNzI4LjE2LS4xOTMuNDc2LS4yMy41MDItLjQ4LjEtLjk1LjExMS0xLjk0NS4xNTgtMi45MTcuMDMtLjYyOC0uMDA2LTEuMjU3LjA0NS0xLjg4M2EuODcyLjg3MiAwIDAgMCAuMDMuMTI4Yy4wNjMuMjA1LjI5Ny4zMTMuMzk3LjUwMi4xMDcuMjAyLjE2NC40MjguMjAzLjY1My4wNzQuNDM4LjA3Mi44OS4wNTIgMS4zMzUtLjAyLjQ2NC0uMTQ0LjkxNi0uMTggMS4zOC0uMDIzLjI5My0uMTQyLjYxNy0uMDIyLjg4NS4wOS4yLjI5OS4zNDMuNTAyLjQyNy4zOTcuMTY0Ljg1Ny4xNTEgMS4yODMuMDk4LjQzOS0uMDU1Ljg4LS4yIDEuMjYtLjQyOC43NDgtLjQ0OCAxLjMtMS4xNjUgMS45MTItMS43ODUgMS4wMDUtMS4wMTcgMi4wMjQtMi4wMzIgMi44ODgtMy4xNzIuMjItLjI5MS41MTUtLjU3LjU3Ny0uOTNhMS4yOCAxLjI4IDAgMCAwLS4xOTUtLjkzYy0uMzUzLS40OTctMS4wMS0uNjktMS41Ni0uOTUzLS42NS0uMzExLTEuMzM2LS41NzctMi4wNC0uNzM1LS41MS0uMTE0LTEuMDM4LS4xNDYtMS41Ni0uMTUtLjUwNS0uMDAzLTEuMDIyLS4wMS0xLjUwNy4xMjgtLjQ0NC4xMjYtLjkwNC4zMDQtMS4yMy42M2ExLjE0NyAxLjE0NyAwIDAgMC0uMTIuMTQyYy4zMjItLjc2Ni44MDUtMS40NCAxLjI4Mi0yLjEyMi4wOTItLjAzNCAxLjE0Mi0uNDI0IDEuNzI1LS41NjMuNDIxLS4xIDEuMjA4LS4wOTcgMS4yMDgtLjA5N3MxLjAxNy0xLjQ3NSAxLjU4Mi0yLjE2OGEyOC41IDI4LjUgMCAwIDEgMi4xOS0yLjQwN0EyNy41NjUgMjcuNTY1IDAgMCAxIDEzLjYgNy42MTljLjkzNi0uNzAxIDIuOTQtMS45MTIgMi45NC0xLjkxMmwtMS42NS0uODE4Yy4yNDUtLjI3MS0uMDkyLS45NzUuMTY1LTEuMjkuMTk1LS4yMzguNTIxLS4yMzguOTMtLjI0N2E3MC4xNyA3MC4xNyAwIDAgMCAzLjI0Ny0uMTU4YzEuNDE1LS4wOTQgMi44MTYtLjMxNyA0LjIyMy0uNTAyIDEuMzk0LS4xODQgMi43OC0uNDU0IDQuMTc3LS42MDggMi44OTItLjMxNyA1Ljc5NS0uNTEzIDguNy0uNjUyIDMuMTgzLS4xNTMgNi4zNzgtLjEwMiA5LjU2My0uMjAzIDEuMTktLjAzNyAyLjM4LS4wODcgMy41Ny0uMTUgMS4wNTctLjA1NSAyLjEwNy0uMjI3IDMuMTY1LS4yMDJ6bS04LjI5NSAyLjg0MnMtMi4zMy4wMDQtMy40OTUuMDUzYy0xLjY4LjA3LTMuMzU5LjIwMy01LjAzMy4zNTItMS43MTMuMTUzLTMuNDI3LjMxMy01LjEzLjU1NWE1MS40MzcgNTEuNDM3IDAgMCAwLTMuNjk3LjY1M2MtLjI4LjA2MS0uNjcyLjIzOC0uNjgzLjUyNS0uMDY2IDEuNzYzLS4wNzcgMy40NDEtLjA5NyA1LjE2LS4wMjIgMS44MzYtLjAyMyA1LjUwNS0uMDIzIDUuNTA1czYuMjIuMDUgOS4zMy4xMDVjMy4zOC4wNiAxMC4xMzMuMjQ3IDEwLjEzMy4yNDdMNDQuMzM0IDMuNzJ6bTUuNDgyLjAzcy44IDQuNDQgMS4zMDUgNi42MzhjLjUzMiAyLjMxNSAxLjgxNSA2Ljg5MiAxLjgxNSA2Ljg5MnMzLjcyMi4xNiA1LjU4LjNjMy40NDQuMjYxIDYuODgxLjYxNSAxMC4zMTMgMS4wMDUgMS4yOTMuMTQ3IDMuNjc1LjMzIDMuNjc1LjMzcy0uMDEyLS45NDMuMTItMS4zODdjLjEzMy0uNDQ2LjY1Mi0xLjIzLjY1Mi0xLjIzbC0xLjk4LTcuOTczcy0yLjIyOC0uOTY4LTMuMzc1LTEuMzU3Yy0xLjc4LS42MDQtMy42MDEtMS4wNzMtNS40My0xLjUwOC0xLjg0Ni0uNDM4LTMuNzEtLjgyOC01LjU4Ny0xLjExLTEuNDY3LS4yMi0yLjk0Ny0uMzMyLTQuNDI1LS40NS0uODg3LS4wNy0yLjY2My0uMTUtMi42NjMtLjE1ek0yMy4yODEgNi4yODRzLTEuNjMuMzk1LTIuNDE1LjY4M2MtMS4wOTkuNDAzLTIuMTg1Ljg2My0zLjE5NSAxLjQ1NS0xLjI2My43NC0yLjQ0NyAxLjYzLTMuNTQ3IDIuNTk1LS43NS42NTctMS41MzUgMS4zMTUtMi4wNjMgMi4xNi0uNDY3Ljc0Ny0uMjI4LjcxMy40NTggMS4wMzUgMS40MjcuNjcgMy4wMTYuOTI4IDQuNTUyIDEuMjgyIDEuNDcuMzQgNC40NDguODAzIDQuNDQ4LjgwM0wyMy4yOCA2LjI4NHptNDkuMTcgMi41NDNjLjUzNCAyLjE4IDEuMyA0LjUzMyAxLjgzOCA2LjcxMiAwIDAgLjgzLS4xOSAxLjIzLS4xNS4zNDQuMDM1Ljk3NC4yNDEgMS40MzIuNDguNC4yMDkuODgyLjUxNyAxLjIzLjgwMy4zNzYuMzA4LjgwNy44NTkuOTgzIDEuMzEyLjI1NS42NTkgMCAxLjkwNSAwIDEuOTA1cy45OTYuMDkgMS42MzUuMTU4Yy42MzUuMDY3IDEuOTEyLjE1IDEuOTEyLjE1cy0uNjItMi41NzgtMS4wNTctMy44MjVjLS4yOTYtLjg0NC0xLjA1OC0yLjQ2OC0xLjA1OC0yLjQ2OHMtLjkzNC0uOTEtMS40NTUtMS4zMDVjLS45OTctLjc1NS0yLjA4My0xLjM5NC0zLjE3Mi0yLjAxLTEuMTQyLS42NDYtMy41MTgtMS43NjItMy41MTgtMS43NjJ6bTMyLjQ5MSAxMi4wMTVhLjkyMy45MjMgMCAwIDAtLjUwMy4xMDUuNTI1LjUyNSAwIDAgMC0uMjQ3LjQ1N2MuMDIzLjI5OC4zNDUuNDkzLjU1NS43MDUuNjk1LjcwNCAxLjUzNSAxLjI0NSAyLjMxIDEuODYgMS4wODQuODYyIDIuMTIzIDEuNzg4IDMuMjcgMi41NjUuNDk3LjMzOCAxIC42OCAxLjU2LjkuNDk2LjE5NSAxLjAzMi4yNzYgMS41Ni4zNTMuOTgxLjE0MyAxLjk3MS4yMTYgMi45NjIuMjAyLjM1NC0uMDA0Ljc2LjA5MyAxLjA1OC0uMDk3LjE5Ni0uMTI2LjIwNC0uNDI4LjM1Mi0uNjA4LjIyNy0uMjc0LjUyMi0uNDk1LjgxLS43MDUuMTU4LS4xMTUuNDY5LS4xMDcuNTAzLS4zLjEtLjU3NS0uNzEtLjkzMi0xLjExLTEuMzU3LS4zNzUtLjM5Ny0uNjk5LS45MDUtMS4yMDgtMS4xMDMtLjIzNC0uMDktLjUwNS4wNTgtLjc1IDAtLjYyLS4xNDYtMS4xMjQtLjYwNS0xLjcxLS44NTUtLjczNy0uMzEzLTEuNTA0LS41NTktMi4yNjUtLjgxLS43NjYtLjI1Mi0xLjUzMy0uNTItMi4zMTctLjcwNS0uNjk2LS4xNjMtMS40LS4yNjQtMi4xMDgtLjM1MmEyMi4wOTQgMjIuMDk0IDAgMCAwLTEuODE1LS4xNWMtLjI5My0uMDEyLS42MTEtLjA5OC0uOTA3LS4xMDV6bS04Ny44NyA5LjYxNWM1LjUgMCA5Ljk2IDQuNDYgOS45NiA5Ljk2IDAgNS41LTQuNDYgOS45Ni05Ljk2IDkuOTYtNS41MDEgMC05Ljk2LTQuNDYtOS45Ni05Ljk2IDAtNS41IDQuNDU5LTkuOTYgOS45Ni05Ljk2em04MC40NzQuM2M1LjUwMSAwIDkuOTYxIDQuNDYgOS45NjEgOS45NiAwIDUuNS00LjQ2IDkuOTYtOS45NiA5Ljk2LTUuNSAwLTkuOTUzLTQuNDYtOS45NTMtOS45NiAwLTUuNSA0LjQ1Mi05Ljk2IDkuOTUzLTkuOTZ6bS04MC40NzUgMi40MTVhNy4yNDYgNy4yNDYgMCAwIDAgMCAxNC40OWM0IDAgNy4yMzgtMy4yNDUgNy4yMzgtNy4yNDVzLTMuMjM4LTcuMjQ1LTcuMjM4LTcuMjQ1em04MC40NzUuM2E3LjI0IDcuMjQgMCAwIDAtNy4yMzcgNy4yNDVjMCA0IDMuMjM3IDcuMjQ1IDcuMjM3IDcuMjQ1IDQuMDAxIDAgNy4yNDYtMy4yNDUgNy4yNDYtNy4yNDVzLTMuMjQ1LTcuMjQ1LTcuMjQ2LTcuMjQ1elwiIGZpbGw9XCIke2NvbG9yfVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIyXCIgbWFzaz1cInVybCgjYSlcIi8+PC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YiBjbGFzcz1cIndpbm5lcl9fdGl0bGVcIj4ke25hbWV9PC9iPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIndpbm5lcl9fd2luc1wiPiR7d2luc308L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwid2lubmVyX190aW1lXCI+JHt0aW1lfTwvc3Bhbj5cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIHdpbm5lckJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lubmVyVmlldztcclxuIiwiaW1wb3J0IFdpbm5lclZpZXcgZnJvbSAnLi93aW5uZXInO1xyXG5pbXBvcnQgTGlzdFZpZXcgZnJvbSAnLi9saXN0Vmlldyc7XHJcbmltcG9ydCB7IFdpbm5lcnNIdG1sIH0gZnJvbSAnLi9odG1sJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb250cm9sbGVyL2xvYWRlcic7XHJcbmltcG9ydCB7IFdpbm5lckZvclJlbmRlciwgV2lubmVyUGFyYW1zLCBTb3J0VHlwZSwgT3JkZXJUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcblxyXG5jbGFzcyBXaW5uZXJzIHtcclxuICBzdGF0aWMgd2lubmVyOiBXaW5uZXJWaWV3ID0gbmV3IFdpbm5lclZpZXcoKTtcclxuXHJcbiAgc3RhdGljIHdpbm5lckxpc3Q6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIGN1cnJlbnRQYWdlOiBudW1iZXIgPSBXaW5uZXJzLmxvYWRTdGF0ZSgpO1xyXG5cclxuICBzdGF0aWMgcGFnZUxpbWl0ID0gMTA7XHJcblxyXG4gIHN0YXRpYyBvcmRlcjogT3JkZXJUeXBlID0gJ0FTQyc7XHJcblxyXG4gIHN0YXRpYyB2aWV3OiBMaXN0VmlldzxXaW5uZXJGb3JSZW5kZXIsIFdpbm5lclBhcmFtcz4gPSBuZXcgTGlzdFZpZXcoXHJcbiAgICBXaW5uZXJzSHRtbCxcclxuICAgICcud2lubmVyLWxpc3QnLFxyXG4gICAgTG9hZGVyLmdldFdpbm5lcnNGb3JSZW5kZXIsXHJcbiAgICBXaW5uZXJzLndpbm5lci5kcmF3V2lubmVyXHJcbiAgKTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBXaW5uZXJzLndpbm5lckxpc3QgPSBXaW5uZXJzLnZpZXcucmVuZGVyKCk7XHJcbiAgICBXaW5uZXJzLnZpZXcuZHJhd0xpc3QoeyBwYWdlOiBXaW5uZXJzLmN1cnJlbnRQYWdlLCBsaW1pdDogV2lubmVycy5wYWdlTGltaXQgfSk7XHJcblxyXG4gICAgV2lubmVycy5hZGRQYWdpbmF0aW9uTGlzdGVuZXIoKTtcclxuICAgIFdpbm5lcnMuYWRkU29ydExpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhZGRQYWdpbmF0aW9uTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uJyk7XHJcblxyXG4gICAgcGFnaW5hdGlvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi0tcHJldicpKSBXaW5uZXJzLmN1cnJlbnRQYWdlIC09IDE7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLS1uZXh0JykpIFdpbm5lcnMuY3VycmVudFBhZ2UgKz0gMTtcclxuICAgICAgICBXaW5uZXJzLnNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIFdpbm5lcnMudmlldy5kcmF3TGlzdCh7IHBhZ2U6IFdpbm5lcnMuY3VycmVudFBhZ2UsIGxpbWl0OiBXaW5uZXJzLnBhZ2VMaW1pdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBzYXZlU3RhdGUoKTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lubmVyc1BhZ2UnLCBKU09OLnN0cmluZ2lmeShXaW5uZXJzLmN1cnJlbnRQYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBsb2FkU3RhdGUoKTogbnVtYmVyIHtcclxuICAgIGxldCBwYWdlID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aW5uZXJzUGFnZScpKTtcclxuICAgIGlmIChwYWdlID09PSAwKSBwYWdlID0gMTtcclxuICAgIHJldHVybiBwYWdlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYWRkU29ydExpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc29ydEVsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aW5uZXJzLXNvcnQnKV0gYXMgSFRNTEVsZW1lbnRbXTtcclxuICAgIHNvcnRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc29ydEVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnd2lubmVycy1zb3J0LS1kZXNjJywgJ3dpbm5lcnMtc29ydC0tYXNjJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3JkZXIgPT09ICdBU0MnKSB7XHJcbiAgICAgICAgICB0aGlzLm9yZGVyID0gJ0RFU0MnO1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLXNvcnQtLWRlc2MnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5vcmRlciA9ICdBU0MnO1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW5uZXJzLXNvcnQtLWFzYycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBXaW5uZXJzLnZpZXcuZHJhd0xpc3Qoe1xyXG4gICAgICAgICAgcGFnZTogV2lubmVycy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgIGxpbWl0OiBXaW5uZXJzLnBhZ2VMaW1pdCxcclxuICAgICAgICAgIHNvcnQ6IGVsZW1lbnQuZGF0YXNldC5zb3J0IGFzIFNvcnRUeXBlLFxyXG4gICAgICAgICAgb3JkZXI6IFdpbm5lcnMub3JkZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5uZXJzO1xyXG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9hcHAvYXBwXCI7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpO1xyXG4iLCJleHBvcnQgY29uc3QgY2FyQnJhbmRzOiBzdHJpbmdbXSA9IFtcclxuICAnQXVkaScsXHJcbiAgJ0JNVycsXHJcbiAgJ0NpdHJvZW4nLFxyXG4gICdIb25kYScsXHJcbiAgJ05pc3NhbicsXHJcbiAgJ0tJQScsXHJcbiAgJ1RveW90YScsXHJcbiAgJ01hemRhJyxcclxuICAnU3ViYXJ1JyxcclxuICAnUmVuYXVsdCcsXHJcbiAgJ1Nrb2RhJyxcclxuICAnTGFkYScsXHJcbiAgJ0xleHVzJyxcclxuICAnRm9yZCcsXHJcbiAgJ09wZWwnLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhck1vZGVscyA9IFtcclxuICAnQ0wnLFxyXG4gICdBMScsXHJcbiAgJ0EyJyxcclxuICAnQTMnLFxyXG4gICdBNCcsXHJcbiAgJ0E1JyxcclxuICAnQTYnLFxyXG4gICdBNycsXHJcbiAgJ0E4JyxcclxuICAnQ2FicmlvbGV0JyxcclxuICAnQ291cGUnLFxyXG4gICdCcm9uY28nLFxyXG4gICdDLU1BWCcsXHJcbiAgJ0NhcHJpJyxcclxuICAnQ29uc3VsJyxcclxuICAnQ29udG91cicsXHJcbiAgJ0NvcnRpbmEnLFxyXG4gICdDb3VnYXInLFxyXG4gICdDdXN0b20nLFxyXG4gICdFY29ub2xpbmUnLFxyXG4gICdFY29ub3ZhbicsXHJcbiAgJ0Vjb1Nwb3J0JyxcclxuICAnRWRnZScsXHJcbiAgJ0VzY2FwZScsXHJcbiAgJ0VzY29ydCcsXHJcbiAgJ0V2ZXJlc3QnLFxyXG4gICdFeGN1cnNpb24nLFxyXG4gICdFeHBlZGl0aW9uJyxcclxuICAnRXhwbG9yZXInLFxyXG4gICdGLTE1MCcsXHJcbiAgJ0YtMicsXHJcbiAgJ0ZhaXJsYW5lJyxcclxuICAnRmFsY29uJyxcclxuICAnRmVzdGl2YScsXHJcbiAgJ0ZpZXN0YScsXHJcbiAgJ0ZsZXgnLFxyXG4gICdGb2N1cycsXHJcbiAgJ0ZyZWRhJyxcclxuICAnRnJlZXN0YXInLFxyXG4gICdGcmVlc3R5bGUnLFxyXG4gICdGdXNpb24nLFxyXG4gICdHYWxheGllJyxcclxuICAnR2FsYXh5JyxcclxuICAnR1BBJyxcclxuICAnR3JhbmFkYScsXHJcbiAgJ0dUJyxcclxuICAnR1Q0MCcsXHJcbiAgJ0lrb24nLFxyXG4gICdJeGlvbicsXHJcbiAgJ0tBJyxcclxuICAnS3VnYScsXHJcbiAgJ0xhc2VyJyxcclxuICAnTWFpbmxpbmUnLFxyXG4gICdNYXZlcmljaycsXHJcbiAgJ01vZGVsIEEnLFxyXG4gICdNb25kZW8nLFxyXG4gICdBcXVhJyxcclxuICAnQXJpc3RvJyxcclxuICAnQXVyaW9uJyxcclxuICAnQXVyaXMnLFxyXG4gICdBdmFsb24nLFxyXG4gICdBdmFuemEnLFxyXG4gICdBdmVuc2lzJyxcclxuICAnQXlnbycsXHJcbiAgJ2JCJyxcclxuICAnQmVsdGEnLFxyXG4gICdCbGFkZScsXHJcbiAgJ0JsaXp6YXJkJyxcclxuICAnQnJldmlzJyxcclxuICAnYlo0WCcsXHJcbiAgJ0MtSFInLFxyXG4gICdDYWxkaW5hJyxcclxuICAnQ2FtaScsXHJcbiAgJ0NhbXJ5JyxcclxuICAnQ2FyaW5hJyxcclxuICAnQ2F2YWxpZXInLFxyXG4gICdDZWxpY2EnLFxyXG4gICdDZWxzaW9yJyxcclxuICAnQ2VudHVyeScsXHJcbiAgJ0NoYXNlcicsXHJcbiAgJ0NsYXNzaWMnLFxyXG4gICdDb21mb3J0JyxcclxuICAnQ09NUycsXHJcbiAgJ0Nvcm9sbGEnLFxyXG4gICdDb3JzYScsXHJcbiAgJ0NyZXNzaWRhJyxcclxuICAnQ3Jlc3RhJyxcclxuICAnQ3Jvd24nLFxyXG4gICdDdXJyZW4nLFxyXG4gICdDeW5vcycsXHJcbiAgJ0R1ZXQnLFxyXG4gICdFY2hvJyxcclxuICAnRXNxdWlyZScsXHJcbiAgJ0VzdGltYScsXHJcbiAgJ0V0aW9zJyxcclxuICAnRm9ydHVuZXInLFxyXG4gICdGdW5DYXJnbycsXHJcbiAgJ0dyYW52aWEnLFxyXG4gICdHVDg2JyxcclxuICAnSGFycmllcicsXHJcbiAgJ0hpQWNlJyxcclxuICAnSGlnaGxhbmRlcicsXHJcbiAgJ0hpbHV4JyxcclxuICAnSW5ub3ZhJyxcclxuICAnSXBzdW0nLFxyXG4gICdpUScsXHJcbiAgJ0lTaXMnLFxyXG4gICdJc3QnLFxyXG4gICdLbHVnZXInLFxyXG4gICdNUi1TJyxcclxuICAnTVIyJyxcclxuICAnTmFkaWEnLFxyXG4gICdOb2FoJyxcclxuICAnT3BhJyxcclxuICAnT3JpZ2luJyxcclxuICAnUGFzZW8nLFxyXG4gICdQYXNzbycsXHJcbiAgJ1BsYXR6JyxcclxuICAnUG9ydGUnLFxyXG4gICdQcmVtaW8nLFxyXG4gICdQcmV2aWEnLFxyXG4gICdQcml1cycsXHJcbiAgJ1Byb2JveCcsXHJcbiAgJ1Byb2dyZXMnLFxyXG4gICdQcm9uYXJkJyxcclxuICAnUHVibGljYScsXHJcbiAgJ1JhY3RpcycsXHJcbiAgJ1JhaXplJyxcclxuICAnUmF1bScsXHJcbiAgJ1JBVjQnLFxyXG4gICdSZWdpdXMnLFxyXG4gICdSZWdpdXNBY2UnLFxyXG4gICdSb29teScsXHJcbiAgJ1J1c2gnLFxyXG4gICdTYWknLFxyXG4gICdTY2VwdGVyJyxcclxuXTsiLCJpbXBvcnQgeyBjYXJCcmFuZHMsIGNhck1vZGVscyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNsYXNzIFV0aWxzIHtcclxuICBwcml2YXRlIHN0YXRpYyBnZXRSYW5kb21OdW1iZXIodG9wOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRvcCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbU5hbWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGJyYW5kID0gY2FyQnJhbmRzW1V0aWxzLmdldFJhbmRvbU51bWJlcihjYXJCcmFuZHMubGVuZ3RoKV07XHJcbiAgICBjb25zdCBtb2RlbCA9IGNhck1vZGVsc1tVdGlscy5nZXRSYW5kb21OdW1iZXIoY2FyTW9kZWxzLmxlbmd0aCldO1xyXG4gICAgcmV0dXJuIGAke2JyYW5kfSAke21vZGVsfWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUNvbG9yKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzeW1ib2xzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xyXG4gICAgbGV0IGNvbG9yID0gJyMnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9MSkge1xyXG4gICAgICBjb2xvciArPSBzeW1ib2xzW1V0aWxzLmdldFJhbmRvbU51bWJlcigxNildO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9