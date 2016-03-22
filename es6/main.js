import {Snake} from './Snake.js';
class Game {
    constructor(id) {
        this.id = id;
    }

    addSnake(id, body) {
        this.snake = new Snake(id, body);
    }

    addRabbit(rabbit) {
    //    todo Add rabbit
    }

    gameStep(interval) {
    //todo Add interval. At every step check snake and rabbits params and draw it.
    }

    drawField(width, height) {
        //todo Draw canvas here
        let canvas = document.getElementById(this.id);
        let context = canvas.getContext('2d');
        context.beginPath();
    }
}

let game = new Game('game');
game.addSnake('1', [[1,1], [1,2]]);
game.drawField(500, 500);
console.log(game);
