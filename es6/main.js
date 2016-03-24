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
        drawCell(color, cellSize) {

            context.fillRect(0, 0, cellSize, cellSize);
            context.strokeRect(0, 0, cellSize, cellSize);

        }
        drawField(cellQantity, cellSize, color) {
            let fullsize = cellQantity *cellSize;

        let canvas = document.getElementById(this.id);
            let context = canvas.getContext('2d');
            canvas.width = fullsize;
            canvas.height = fullsize;
            context.fillStyle = color;
            for (let i = 0; i < cellQantity; i++) 
            {
                for (let j = 0; j < cellQantity; j++) 
                {
                    context.fillRect(cellSize * i,  cellSize * j, cellSize * (i+1), cellSize * (j+1));
                    context.strokeRect(cellSize * i,  cellSize * j, cellSize * (i+1), cellSize * (j+1));
                }                
            }            
        }
    }

let game = new Game('game');
    game.drawField(20, 20, '#FFD640');
    game.addSnake('1', [[1, 1], [1, 2]]);