import {Snake} from './Snake.js';
    class Game {
    constructor(id) {
    this.id = id;
    }

    addSnake(id, body) {
    this.snake = new Snake(id, body);
    }

    addRabbit(rabbit) {
    this.snake = new Rabbit(id, body);
    }

    gameStep(interval) {
    //todo Add interval. At every step check snake and rabbits params and draw it.
    }
    ceil(width, height) {
        this.width = 20;
        this.height = 20;
    }
    drawField(width, height, color) {
    //todo Draw canvas here
    let canvas = document.getElementById(this.id);
        let context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        context.fillStyle = color;
        context.fillRect(0, 0, width, height);
    }
    }

let game = new Game('game');
    game.drawField(500, 500, '#FFD640');
    game.addSnake('1', [[1, 1], [1, 2]]);