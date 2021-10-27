/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CamList.ts":
/*!************************!*\
  !*** ./src/CamList.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CamList = /*#__PURE__*/function () {
  function CamList() {
    _classCallCheck(this, CamList);
  }

  _createClass(CamList, [{
    key: "camEventList",
    get: //"192.168.5.102"
    //60,
    //100,
    //20
    //0.45,
    //0.35
    function get() {
      return this._camEventList;
    },
    set: function set(value) {
      this._camEventList = value;
    }
  }, {
    key: "serverIp",
    get: function get() {
      return this._serverIp;
    },
    set: function set(value) {
      this._serverIp = value;
    }
  }, {
    key: "movdetColorTresh",
    get: function get() {
      return this._movdetColorTresh;
    },
    set: function set(value) {
      this._movdetColorTresh = value;
    }
  }, {
    key: "movdetDiffTresh",
    get: function get() {
      return this._movdetDiffTresh;
    },
    set: function set(value) {
      this._movdetDiffTresh = value;
    }
  }, {
    key: "movdetTimerPeriod",
    get: function get() {
      return this._movdetTimerPeriod;
    },
    set: function set(value) {
      this._movdetTimerPeriod = value;
    }
  }, {
    key: "confThresh",
    get: function get() {
      return this._confThresh;
    },
    set: function set(value) {
      this._confThresh = value;
    }
  }, {
    key: "nmsThresh",
    get: function get() {
      return this._nmsThresh;
    },
    set: function set(value) {
      this._nmsThresh = value;
    }
  }, {
    key: "camList",
    get: function get() {
      return this._camList;
    },
    set: function set(value) {
      this._camList = value;
    }
  }]);

  return CamList;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CamList);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CamList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CamList */ "./src/CamList.ts");

var camList = new _CamList__WEBPACK_IMPORTED_MODULE_0__["default"]();
camList.serverIp = "192.168.5.102";
console.log("Server IP: " + camList.serverIp);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map