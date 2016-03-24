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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	    function Game(id) {
	        _classCallCheck(this, Game);
	
	        this.id = id;
	    }
	
	    _createClass(Game, [{
	        key: 'addSnake',
	        value: function addSnake(id, body) {
	            this.snake = new _Snake.Snake(id, body);
	        }
	    }, {
	        key: 'addRabbit',
	        value: function addRabbit(rabbit) {
	            this.snake = new Rabbit(id, body);
	        }
	    }, {
	        key: 'gameStep',
	        value: function gameStep(interval) {
	            //todo Add interval. At every step check snake and rabbits params and draw it.
	        }
	    }, {
	        key: 'drawCell',
	        value: function drawCell(color, cellSize) {
	
	            context.fillRect(0, 0, cellSize, cellSize);
	            context.strokeRect(0, 0, cellSize, cellSize);
	        }
	    }, {
	        key: 'drawField',
	        value: function drawField(cellQantity, cellSize, color) {
	            var fullsize = cellQantity * cellSize;
	
	            var canvas = document.getElementById(this.id);
	            var context = canvas.getContext('2d');
	            canvas.width = fullsize;
	            canvas.height = fullsize;
	            context.fillStyle = color;
	            for (var i = 0; i < cellQantity; i++) {
	                for (var j = 0; j < cellQantity; j++) {
	                    context.fillRect(cellSize * i, cellSize * j, cellSize * (i + 1), cellSize * (j + 1));
	                    context.strokeRect(cellSize * i, cellSize * j, cellSize * (i + 1), cellSize * (j + 1));
	                }
	            }
	        }
	    }]);
	
	    return Game;
	}();
	
	var game = new Game('game');
	game.drawField(20, 20, '#FFD640');
	game.addSnake('1', [[1, 1], [1, 2]]);

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
	    this.body = new Set(body);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map