/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Snake = __webpack_require__(1);
	
	var _Rabbit = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	    function Game(id) {
	        _classCallCheck(this, Game);
	
	        this.id = id;
	    }
	
	    _createClass(Game, [{
	        key: 'drawCell',
	        value: function drawCell(cellSize) {
	            var cellIndex = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	            var context = arguments[2];
	
	
	            context.fillRect(cellSize * cellIndex[0], cellSize * cellIndex[1], cellSize, cellSize);
	            context.strokeRect(cellSize * cellIndex[0], cellSize * cellIndex[1], cellSize, cellSize);
	        }
	    }, {
	        key: 'drawField',
	        value: function drawField(cellQantity, cellSize, color) {
	
	            this.cellSize = cellSize;
	            var fullsize = cellQantity * cellSize;
	
	            var canvas = document.getElementById(this.id);
	            var context = canvas.getContext('2d');
	            canvas.width = fullsize;
	            canvas.height = fullsize;
	            context.fillStyle = color;
	
	            for (var i = 0; i < cellQantity; i++) {
	                for (var j = 0; j < cellQantity; j++) {
	                    var cellIndex = [i, j];
	                    this.drawCell(this.cellSize, cellIndex, context);
	                }
	            }
	        }
	    }, {
	        key: 'addSnake',
	        value: function addSnake(id, body) {
	            this.snake = new _Snake.Snake(id, body);
	            var canvas = document.getElementById(this.id);
	            var context = canvas.getContext('2d');
	            context.fillStyle = '#006A55';
	            for (var i = 0; i < body; i++) {
	                var cellIndex = [i, 0];
	                this.drawCell(this.cellSize, cellIndex, context);
	            }
	        }
	    }, {
	        key: 'randIndex',
	        value: function randIndex(maxIndex) {
	            var cellIndex = [];
	            cellIndex[0] = Math.floor(0.5 + Math.random() * (maxIndex - 1));
	            cellIndex[1] = Math.floor(0.5 + Math.random() * (maxIndex - 1));
	            return cellIndex;
	        }
	    }, {
	        key: 'addRabbit',
	        value: function addRabbit(maxIndex) {
	            // this.rabbit = new Rabbit(id, body);
	            var cellIndex = this.randIndex(maxIndex);
	            console.log(cellIndex);
	            var canvas = document.getElementById(this.id);
	            var context = canvas.getContext('2d');
	            context.fillStyle = '#534ED9';
	            this.drawCell(this.cellSize, cellIndex, context);
	        }
	    }, {
	        key: 'gameStep',
	        value: function gameStep(interval) {
	            //todo Add interval. At every step check snake and rabbits params and draw it.
	        }
	    }]);
	
	    return Game;
	}();
	
	var game = new Game('game');
	game.drawField(20, 20, '#FFD640');
	game.addSnake('1', 4);
	game.addRabbit(20);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Snake = exports.Snake = function Snake(id, body) {
	    _classCallCheck(this, Snake);
	
	    this.id = id;
	    this.body = new Set();
	    this.body.add(body);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rabbit = exports.Rabbit = function Rabbit(id, body) {
	    _classCallCheck(this, Rabbit);
	
	    this.id = id;
	    this.body = new Set(body);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map