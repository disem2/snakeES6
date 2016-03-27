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
	        this.fieldColor = '#FFD640';
	    }
	
	    _createClass(Game, [{
	        key: 'drawCell',
	        value: function drawCell(cellSize) {
	            var cellIndex = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	            var context = arguments[2];
	            var color = arguments[3];
	
	
	            context.fillStyle = color;
	            context.fillRect(cellSize * cellIndex[0], cellSize * cellIndex[1], cellSize, cellSize);
	            context.strokeRect(cellSize * cellIndex[0], cellSize * cellIndex[1], cellSize, cellSize);
	        }
	    }, {
	        key: 'clearCell',
	        value: function clearCell(cellSize) {
	            var cellIndex = arguments.length <= 1 || arguments[1] === undefined ? [0, 0] : arguments[1];
	            var context = arguments[2];
	
	
	            context.clearRect(cellSize * cellIndex[0], cellSize * cellIndex[1], cellSize, cellSize);
	            // context.strokeRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize);
	        }
	    }, {
	        key: 'drawField',
	        value: function drawField(cellQantity, cellSize) {
	            var color = arguments.length <= 2 || arguments[2] === undefined ? this.fieldColor : arguments[2];
	
	            this.cellQantity = cellQantity;
	            this.cellSize = cellSize;
	            var fullsize = cellQantity * cellSize;
	
	            var canvas = document.getElementById(this.id);
	            var context = canvas.getContext('2d');
	            this.context = context;
	            canvas.width = fullsize;
	            canvas.height = fullsize;
	
	            for (var i = 0; i < cellQantity; i++) {
	                for (var j = 0; j < cellQantity; j++) {
	                    var cellIndex = [i, j];
	                    this.drawCell(this.cellSize, cellIndex, context, color);
	                }
	            }
	        }
	    }, {
	        key: 'addSnake',
	        value: function addSnake(id, body) {
	            this.snake = new _Snake.Snake(id, body);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.snake.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var cellIndex = _step.value;
	
	                    this.drawCell(this.cellSize, cellIndex, this.context, this.snake.color);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            ;
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
	        value: function addRabbit(id) {
	            this.rabbit = new _Rabbit.Rabbit(id);
	            var maxIndex = this.cellQantity;
	            var cellIndex = this.checkPosition(this.rabbit.getrandIndex(maxIndex), this.snake.body);
	            this.drawCell(this.cellSize, cellIndex, this.context, this.rabbit.color);
	        }
	        // Check is rabbit cell apered on the snake
	
	    }, {
	        key: 'checkPosition',
	        value: function checkPosition(cellIndex, snakeBody) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this.snake.body[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var snakeCell = _step2.value;
	
	                    if (snakeCell == cellIndex) {
	                        this.rabbit.getrandIndex(this.cellQantity);
	                    } else {
	                        return cellIndex;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'moveSnake',
	        value: function moveSnake() {
	
	            var bodyLength = this.snake.body.length;
	            var nextCell = this.snake.body[bodyLength - 1][0] + 1;
	            console.log(nextCell);
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = this.snake.body[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var cellIndex = _step3.value;
	
	                    this.clearCell(this.cellSize, cellIndex, this.context, this.fieldColor);
	                    this.drawCell(this.cellSize, cellIndex, this.context, this.fieldColor);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            ;
	
	            this.snake.body.shift();
	            this.snake.body.push([nextCell, 0]);
	            console.log(this.snake.body);
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = this.snake.body[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var _cellIndex = _step4.value;
	
	                    this.drawCell(this.cellSize, _cellIndex, this.context, this.snake.color);
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            ;
	        }
	
	        // gameStep(interval) {
	        // //todo Add interval. At every step check snake and rabbits params and draw it.
	        // }
	
	    }]);
	
	    return Game;
	}();
	
	var game = new Game('game');
	game.drawField(20, 20);
	game.addSnake('1');
	game.addRabbit('1');
	setTimeout(function () {
	    game.moveSnake();
	}, 1000);
	// setTimeout(alert('test!!'), 5000);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Snake = exports.Snake = function Snake(id) {
	    var body = arguments.length <= 1 || arguments[1] === undefined ? [[0, 0], [1, 0], [2, 0]] : arguments[1];
	
	    _classCallCheck(this, Snake);
	
	    this.id = id;
	    this.body = body;
	    this.color = '#006A55';
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rabbit = exports.Rabbit = function () {
	    function Rabbit(id) {
	        _classCallCheck(this, Rabbit);
	
	        this.id = id;
	        this.color = '#534ED9';
	    }
	
	    _createClass(Rabbit, [{
	        key: 'getrandIndex',
	        value: function getrandIndex(max) {
	            var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	
	            var cellIndex = [];
	            cellIndex[0] = Math.floor(0.5 + Math.random() * (max - min - 1) + min);
	            cellIndex[1] = Math.floor(0.5 + Math.random() * (max - min - 1) + min);
	            return cellIndex;
	        }
	    }]);
	
	    return Rabbit;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map