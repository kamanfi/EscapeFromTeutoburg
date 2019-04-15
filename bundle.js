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
var imgCache = {};
img.src = './images/background/Legionnaire.png';

img.onload = function () {
  imgCache[img] = img;
};

var forward = [9, 72, 135, 201, 264, 327, 391, 456, 521];
var backward = [16, 79, 143, 208, 272, 334, 402, 467, 530];
var up = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var down = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var death = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var lastRender = renderforward;
var health = 40; // [7,69,135,201,263,325,390,456,]

function getImage() {
  img.onload = function () {
    imgCache[img] = img;
  };
}

function drawLegion(x, y, index, direction) {
  var dmg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  getImage(imgCache[img]);

  if (imgCache[img]) {
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
    } else if (direction === 'dead') {
      renderDeath(x, y, index);
    } else {
      lastRender(x, y);
    } // ctx.beginPath();
    // ctx.rect(x, y, 40, 53);
    // ctx.stroke();


    ctx.fillRect(x, y - 10, health -= dmg, 3);
    ctx.beginPath();
    ctx.fillStyle = '#FF0000';
    ctx.stroke();
  } else {
    getImage();
  }
}

function renderforward(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(imgCache[img], forward[index], 720, 40, 53, x, y, 40, 53);
}

function renderbackward(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(imgCache[img], backward[index], 589, 40, 53, x, y, 40, 53);
}

function renderup(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(imgCache[img], up[index], 524, 40, 53, x, y, 40, 53);
}

function renderdown(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(imgCache[img], down[index], 651, 40, 53, x, y, 40, 53);
}

function renderDeath(x, y) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  ctx.drawImage(imgCache[img], death[index], 1291, 40, 53, x, y, 40, 53);
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
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton */ "./src/skeleton.js");
/* harmony import */ var _orcs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orcs */ "./src/orcs.js");


 // import drawBox from './invisbleBoxes';
// initialState

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 350;
var speed = 6;
var level = 1;
var playerBox = {
  x: x,
  y: y,
  width: 40,
  height: 53
};
var playAgainBox = {
  x: 414,
  y: 330,
  width: 90,
  height: 18
};
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var forwardIndex = 0;
var backwardIndex = 0;
var upwardIndex = 0;
var downwardIndex = 0;
var enemiesIndex = 0;
var deathIndex = 0;
var tauntIndex = 0;
var dmg = 4.8;
var dead = false;
var enemyArray = [];
document.getElementById('start').addEventListener('click', function () {
  document.getElementById('start').style.display = "none";

  function loadEnemy() {
    enemyArray = [];

    if (level == 1) {
      for (var index = 0; index < 23; index++) {
        enemyArray.push(new _skeleton__WEBPACK_IMPORTED_MODULE_1__["default"]());
      }
    } else if (level == 2) {
      for (var _index = 0; _index < 35; _index++) {
        enemyArray.push(new _orcs__WEBPACK_IMPORTED_MODULE_2__["default"]());
      }
    }
  }

  function resetState() {
    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
    forwardIndex = 0;
    backwardIndex = 0;
    upwardIndex = 0;
    downwardIndex = 0;
    enemiesIndex = 0;
    deathIndex = 0;
    tauntIndex = 0;
    dmg = 4.8;
    dead = false;
    health = 10;
    x = 0;
    y = 350;
    loadEnemy();
  }

  resetState(); // let collisionCheckBox =[[14,200], [14,340], [104,200], [140,340]];
  // // let playerBoxBox=[[x,y], [x,y+53] , [x+40,y,], [x+40,y+53]];
  // let box1 = {x: 14, y: 200, width: 90, height: 140};
  //game state

  var health = 10;
  var healthbar = document.getElementById('healthbar');
  healthbar.style.width = "".concat(health, "%");
  healthbar.append("Health");

  function init() {
    // initialize game
    var background = './images/background/emptyField.png';
    var img = new Image();
    img.src = background;

    img.onload = function () {
      // playerBox = {x: x, y: y, width: 40, height: 53};
      ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
      0, 0, canvas.width, canvas.height);

      if (health <= 0) {
        dead = true;
      }

      if (!dead) {
        console.log("MOVING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        if (leftPressed) {
          if (collisionCheck(enemyArray, playerBox) == false) {
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, backwardIndex, 'backward');
          } else {
            x += speed;

            if (upPressed) {
              y += speed;
            }

            if (downPressed) {
              y -= speed;
            }

            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, backwardIndex, 'backward', dmg);
          }
        } else if (rightPressed) {
          if (collisionCheck(enemyArray, playerBox) == false) {
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, forwardIndex, 'forward');
          } else {
            x -= speed;

            if (upPressed) {
              y += speed;
            }

            if (downPressed) {
              y -= speed;
            }

            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, forwardIndex, 'forward', dmg);
          }
        } else if (upPressed) {
          if (collisionCheck(enemyArray, playerBox) == false) {
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, upwardIndex, 'up');
          } else {
            y += speed;
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, upwardIndex, 'up', 1);
          }
        } else if (downPressed) {
          if (collisionCheck(enemyArray, playerBox) == false) {
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, downwardIndex, 'down');
          } else {
            y -= speed;
            Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, downwardIndex, 'down', dmg);
          }
        } else {
          Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
        }

        enemiesIndex === 8 ? enemiesIndex = 0 : enemiesIndex += 1;
        enemyArray.forEach(function (enemy) {
          enemy.move(enemiesIndex);
          collisionCheck(enemyArray, playerBox);
          playerBox = {
            x: x,
            y: y,
            width: 40,
            height: 53
          };
        });
      } else {
        var mouseClicked = function mouseClicked(e) {
          var mousePos = getRelativeCoords(e);

          if (collision(mousePos, playAgainBox)) {
            level = 1;
            resetState();
          }
        };

        console.log(dead);
        console.log(health);
        Object(_legionnaire__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, deathIndex, 'dead');
        deathIndex === 5 ? deathIndex = 5 : deathIndex += 1;
        enemyArray.forEach(function (ske) {
          ske.taunt(tauntIndex);
          tauntIndex === speed ? tauntIndex = 0 : tauntIndex += 1;
        });
        ctx.fillStyle = '#FF0000';
        ctx.font = "60px Nosifer";
        ctx.fillText("GAME OVER", 450, 300);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "12px Nosifer";
        ctx.fillText("you failed Rome", 450, 330);
        ctx.fillText("restart?", 450, 350);
        ctx.textAlign = "center";
        ctx.fillStyle = 'rgba(255, 255, 255, .4)';
        document.addEventListener("click", mouseClicked, false);
      }
    };

    function loop() {
      if (!dead) {
        if (leftPressed) {
          x > 0 ? x -= speed : x;
          backwardIndex === 8 ? backwardIndex = 0 : backwardIndex += 1;
          forwardIndex = 0;
        } else if (rightPressed) {
          x < canvas.width - 40 ? x += speed : x;
          forwardIndex === 8 ? forwardIndex = 0 : forwardIndex += 1;
          backwardIndex = 0;
        }

        if (upPressed) {
          y > 0 ? y -= speed : y;
          upwardIndex === 8 ? upwardIndex = 0 : upwardIndex += 1;
          downwardIndex = 0;
        } else if (downPressed) {
          y < canvas.height - 53 ? y += speed : y;
          downwardIndex === 6 ? downwardIndex = 0 : downwardIndex += 1;
          upwardIndex = 0;
        }
      }
    }

    if (x > 800) {
      level += 1;
      resetState();
    }

    loop();
    requestAnimationFrame(init);
  }

  function collisionCheck(enemyArray, playerBox) {
    var flag = false;
    enemyArray.forEach(function (enemy) {
      if (collision(enemy.box(), playerBox) == true) {
        healthbar.style.width = "".concat(health -= 0.05, "%");
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

  document.addEventListener("keydown", keyDownHandler, true);
  document.addEventListener("keyup", keyUpHandler, true);

  function getRelativeCoords(event) {
    return {
      x: event.offsetX,
      y: event.offsetY,
      width: 12,
      height: 12
    };
  }

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

  init();
}); // A = 65
// W = 87
// S = 83
// D = 68

/***/ }),

/***/ "./src/orcs.js":
/*!*********************!*\
  !*** ./src/orcs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orc; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var down = [6, 69, 131, 198, 261, 327, 391, 456, 518];
var x = Math.floor(Math.random() * 900);
var y = Math.floor(Math.random() * 700); // let y = 0;
// function drawEnemies (index,x=450,y=350){
//     img.src = '../images/background/skeleton.png';
//     img.onload = function() {
//         console.log(index);
//     ctx.drawImage(img, down[index], 589 , 40, 53, x, y, 40, 53);    
//     ctx.beginPath();
//     ctx.rect(x, y, 40, 53);
//     ctx.stroke();
//     };
// }
// export default drawEnemies;

var Orc =
/*#__PURE__*/
function () {
  function Orc() {
    _classCallCheck(this, Orc);

    this.x = Math.floor(500 + Math.random() * 900);
    this.y = Math.floor(Math.random() * 700);
    this.img = new Image();
    this.img.src = './images/background/orc.png';
    this.speed = 2;

    this.img.onload = function () {//loads image
    };
  }

  _createClass(Orc, [{
    key: "render",
    value: function render(index) {
      if (this.speed == -4) {
        ctx.drawImage(this.img, down[index], 595, 40, 53, this.x, this.y, 40, 53);
      } else {
        ctx.drawImage(this.img, down[index], 651, 40, 53, this.x, this.y, 40, 53);
      } // ctx.beginPath();
      // ctx.rect(this.x, this.y, 40-10, 53-10);
      // ctx.stroke();

    }
  }, {
    key: "move",
    value: function move(index) {
      if (this.x > 1200) {
        this.speed = -6;
      }

      this.x += this.speed;
      this.render(index);
    }
  }, {
    key: "taunt",
    value: function taunt(index) {
      ctx.drawImage(this.img, Math.floor(down[index]), 651, 40, 53, this.x, this.y, 40, 53); // ctx.beginPath();
      // ctx.rect(this.x, this.y, 40, 53);
      // ctx.stroke();
    }
  }, {
    key: "box",
    value: function box() {
      return {
        x: this.x,
        y: this.y,
        width: 40 - 10,
        height: 53 - 10
      };
    }
  }]);

  return Orc;
}();



/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
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

    this.x = Math.floor(500 + Math.random() * 900);
    this.y = Math.floor(Math.random() * 700);
    this.img = new Image();
    this.img.src = './images/background/skeleton.png';

    this.img.onload = function () {//loads image
    };
  }

  _createClass(Skeleton, [{
    key: "render",
    value: function render(index) {
      ctx.drawImage(this.img, backward[index], 589, 40, 53, this.x, this.y, 40, 53); // ctx.beginPath();
      // ctx.rect(this.x, this.y, 40-10, 53-10);
      // ctx.stroke();
    }
  }, {
    key: "move",
    value: function move(index) {
      this.x -= 5;
      this.render(index);
    }
  }, {
    key: "taunt",
    value: function taunt(index) {
      ctx.drawImage(this.img, Math.floor(backward[index]), 144, 40, 53, this.x, this.y, 40, 53); // ctx.beginPath();
      // ctx.rect(this.x, this.y, 40, 53);
      // ctx.stroke();
    }
  }, {
    key: "box",
    value: function box() {
      return {
        x: this.x,
        y: this.y,
        width: 40 - 10,
        height: 53 - 10
      };
    }
  }]);

  return Skeleton;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map