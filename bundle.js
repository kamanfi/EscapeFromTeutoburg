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

/***/ "./src/enemies.js":
/*!************************!*\
  !*** ./src/enemies.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skeleton; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var backward = [16, 79, 143, 208, 272, 334, 402, 467, 530];
var x = Math.floor(Math.random() * 900);
var y = Math.floor(Math.random() * 700); // let y = 0;
// function drawEnemies (index,x=450,y=350){
//     img.src = '../images/background/skeleton.png';
//     img.onload = function() {
//         console.log(index);
//     ctx.drawImage(img, backward[index], 589 , 40, 53, x, y, 40, 53);    
//     ctx.beginPath();
//     ctx.rect(x, y, 40, 53);
//     ctx.stroke();
//     };
// }
// export default drawEnemies;

var Skeleton =
/*#__PURE__*/
function () {
  function Skeleton() {
    _classCallCheck(this, Skeleton);

    this.x = Math.floor(300 + Math.random() * 900);
    this.y = Math.floor(Math.random() * 700);
  }

  _createClass(Skeleton, [{
    key: "render",
    value: function render(index) {
      var img = new Image();
      var that = this;
      img.src = '../images/background/skeleton.png';

      img.onload = function () {
        ctx.drawImage(img, backward[index], 589, 40, 53, that.x, that.y, 40, 53);
        ctx.beginPath();
        ctx.rect(that.x, that.y, 40, 53);
        ctx.stroke();
      };
    }
  }, {
    key: "move",
    value: function move(index) {
      this.x -= 5;
      this.render(index);
    }
  }, {
    key: "box",
    value: function box() {
      return {
        x: this.x,
        y: this.y,
        width: 40,
        height: 53
      };
    }
  }]);

  return Skeleton;
}();



/***/ }),

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
var forward = [9, 72, 135, 201, 264, 327, 391, 456, 521];
var backward = [16, 79, 143, 208, 272, 334, 402, 467, 530];
var up = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var down = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var lastRender = renderforward; // [7,69,135,201,263,325,390,456,]

function loadImage(url) {
  imageholder = {};
  img1.src = '../images/background/Legionnaire.png';
}

function drawLegion(x, y, index, direction) {
  img.src = '../images/background/Legionnaire.png';

  img.onload = function () {
    if (direction === 'backward') {
      lastRender = renderbackward;
      lastRender(x, y, index);
    } else if (direction === 'forward') {
      lastRender = renderforward;
      lastRender(x, y, index);
    } else if (direction === 'up') {
      lastRender = renderup;
      lastRender(x, y, index);
    } else if (direction === 'down') {
      lastRender = renderdown;
      lastRender(x, y, index);
    } else {
      lastRender(x, y);
    }

    ctx.beginPath();
    ctx.rect(x, y, 40, 53);
    ctx.stroke();
  };
}

function renderforward(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(img, forward[index], 720, 40, 53, x, y, 40, 53);
}

function renderbackward(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(img, backward[index], 589, 40, 53, x, y, 40, 53);
}

function renderup(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(img, up[index], 524, 40, 53, x, y, 40, 53);
}

function renderdown(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(img, down[index], 651, 40, 53, x, y, 40, 53);
}

/* harmony default export */ __webpack_exports__["default"] = (drawLegion); // ctx.drawImage(img, 9, 720  , 40, 51, x, y, 40, 51);
// ctx.drawImage(img, 72, 720 , 40, 51, 40, y, 40, 51);
// ctx.drawImage(img, 135, 720 , 40, 51, 80, y, 40, 51);
// ctx.drawImage(img, 264, 720 , 40, 51, 120, y, 40, 51);
// ctx.drawImage(img, 327, 720 , 40, 51, 160, y, 40, 51);
// ctx.drawImage(img, 391, 720 , 40, 51, 200, y, 40, 51);
// ctx.drawImage(img, 456, 720 , 40, 51, 240, y, 40, 51);
// ctx.drawImage(img, 521, 720 , 40, 51, 280, y, 40, 51);

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
/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemies */ "./src/enemies.js");

 // import drawBox from './invisbleBoxes';

var enemyArray = [];

for (var index = 0; index < 11; index++) {
  enemyArray.push(new _enemies__WEBPACK_IMPORTED_MODULE_1__["default"]());
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 350; // let collisionCheckBox =[[14,200], [14,340], [104,200], [140,340]];
// // let playerBoxBox=[[x,y], [x,y+53] , [x+40,y,], [x+40,y+53]];
// let box1 = {x: 14, y: 200, width: 90, height: 140};

var playerBox = {
  x: x,
  y: y,
  width: 40,
  height: 53
}; //game state

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var forwardIndex = 0;
var backwardIndex = 0;
var upwardIndex = 0;
var downwardIndex = 0;
var enemiesIndex = 0;
var health = 500;

function init() {
  // initialize game
  var background = '../images/background/emptyField.png';
  var img = new Image();
  img.src = background;

  img.onload = function () {
    // playerBox = {x: x, y: y, width: 40, height: 53};
    ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
    0, 0, canvas.width, canvas.height);

    if (leftPressed) {
      if (collisionCheck(enemyArray, playerBox) == false) {
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, backwardIndex, 'backward');
      } else {
        x += 4;

        if (upPressed) {
          y += 4;
        }

        if (downPressed) {
          y -= 4;
        }

        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, backwardIndex, 'backward');
      }
    } else if (rightPressed) {
      if (collisionCheck(enemyArray, playerBox) == false) {
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, forwardIndex, 'forward');
      } else {
        x -= 4;

        if (upPressed) {
          y += 4;
        }

        if (downPressed) {
          y -= 4;
        }

        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, forwardIndex, 'forward');
      }
    } else if (upPressed) {
      if (collisionCheck(enemyArray, playerBox) == false) {
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, upwardIndex, 'up');
      } else {
        y += 4;
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, upwardIndex, 'up');
      }
    } else if (downPressed) {
      if (collisionCheck(enemyArray, playerBox) == false) {
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, downwardIndex, 'down');
      } else {
        y -= 4;
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, downwardIndex, 'down');
      }
    } else {
      Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
    }

    enemiesIndex === 8 ? enemiesIndex = 0 : enemiesIndex += 1;
    enemyArray.forEach(function (ske) {
      ske.move(enemiesIndex);
      collisionCheck(enemyArray, playerBox);
      playerBox = {
        x: x,
        y: y,
        width: 40,
        height: 53
      };
    });
  };

  function loop() {
    if (leftPressed) {
      x > 0 ? x -= 4 : x;
      backwardIndex === 8 ? backwardIndex = 0 : backwardIndex += 1;
      forwardIndex = 0;
    } else if (rightPressed) {
      x < canvas.width - 40 ? x += 4 : x;
      forwardIndex === 8 ? forwardIndex = 0 : forwardIndex += 1;
      backwardIndex = 0;
    }

    if (upPressed) {
      y > 0 ? y -= 4 : y;
      upwardIndex === 8 ? upwardIndex = 0 : upwardIndex += 1;
      downwardIndex = 0;
    } else if (downPressed) {
      y < canvas.height - 53 ? y += 4 : y;
      downwardIndex === 8 ? downwardIndex = 0 : downwardIndex += 1;
      upwardIndex = 0;
    }
  }

  loop();
  requestAnimationFrame(init);
}

function collisionCheck(enemyArray, playerBox) {
  var flag = false;
  enemyArray.forEach(function (enemy) {
    if (collision(enemy.box(), playerBox) == true) {
      console.log(health -= 1);
      flag = true;
    }
  });
  return flag;
}

function collision(box1, playerBox) {
  if (box1.x < playerBox.x + playerBox.width && box1.x + box1.width > playerBox.x && box1.y < playerBox.y + playerBox.height && box1.y + box1.height > playerBox.y) {
    return true;
  }

  return false;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  switch (e.keyCode) {
    case 65:
      //move left
      leftPressed = true;
      break;

    case 68:
      //move right
      rightPressed = true;
      break;

    case 87:
      //move up
      upPressed = true;
      break;

    case 83:
      //move down
      downPressed = true;
      break;

    default:
      break;
  }
}

function keyUpHandler(e) {
  switch (e.keyCode) {
    case 65:
      //move left
      leftPressed = false;
      break;

    case 68:
      //move right
      rightPressed = false;
      break;

    case 87:
      //move up
      upPressed = false;
      break;

    case 83:
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