/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legionnaire.js":
/*!****************************!*\
  !*** ./src/legionnaire.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var img = new Image(); // img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawLegion() {
  img.src = '../images/background/Legionnaire.png';

  img.onload = function () {
    init();
  };
}

function init() {
  ctx.drawImage(img, 72, 722, 43, 50, 10, 10, 43, 50);
}

function render(x, y) {
  ctx.drawImage(img, 72, 722, 43, 50, 10, 10, 43, 50);
}

/* harmony default export */ __webpack_exports__["default"] = (drawLegion);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legionnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legionnaire */ "./src/legionnaire.js");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function init() {
  // initialize game
  var background = '../images/background/TEST7B.bmp';
  var img = new Image();
  img.src = background;

  img.onload = function () {
    ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
    0, 0, canvas.width, canvas.height);
    Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])();
  };

  function loop() {
    x = x + 1;
    y = y + 1;
  }

  loop();
  requestAnimationFrame(init);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  switch (e) {
    case 65:
      //move left
      leftPressed = true;
      break;

    case 68:
      //move right
      rightPressed = true;
      break;

    case 83:
      //move up
      upPressed = true;
      break;

    case 68:
      //move down
      downPressed = true;
      break;

    default:
      break;
  }
}

function keyUpHandler(e) {
  switch (e) {
    case 65:
      //move left
      leftPressed = false;
      break;

    case 68:
      //move right
      rightPressed = false;
      break;

    case 83:
      //move up
      upPressed = false;
      break;

    case 68:
      //move down
      downPressed = false;
      break;

    default:
      break;
  }
}

init(); // A = 65
// W = 87
// S = 83
// D = 68

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map