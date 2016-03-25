import {Snake} from './Snake.js';
import {Rabbit} from './Rabbit.js';
    class Game {
        constructor(id) {
            this.id = id;
        }
        
        drawCell(cellSize, cellIndex = [0, 0], context) {

            context.fillRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize );
            context.strokeRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize);

        }

        drawField(cellQantity, cellSize, color) {

            this.cellSize = cellSize;
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
                    let cellIndex = [i, j];
                    this.drawCell(this.cellSize, cellIndex, context);
                    
                }                
            }            
        }

        addSnake(id, body) {
            this.snake = new Snake(id, body);
            let canvas = document.getElementById(this.id);
            let context = canvas.getContext('2d');
            context.fillStyle = '#006A55';
            for (let i = 0; i < body; i++) 
                {
                    let cellIndex = [i, 0];
                    this.drawCell(this.cellSize, cellIndex, context);
                }   
        }

        addRabbit(maxIndex) {
            // this.rabbit = new Rabbit(id, body);
            let cellIndex = [];
            cellIndex[0] = 0.5 + Math.random() * (maxIndex + 1);
            cellIndex[1] = 0.5 + Math.random() * (maxIndex + 1);
            cellIndex[0] = Math.round(cellIndex[0]);
            cellIndex[1] = Math.round(cellIndex[1]);

            let canvas = document.getElementById(this.id);
            let context = canvas.getContext('2d');
            context.fillStyle = '#534ED9';
            this.drawCell(this.cellSize, cellIndex, context);

        }

        gameStep(interval) {
        //todo Add interval. At every step check snake and rabbits params and draw it.
        }
    }

let game = new Game('game');
    game.drawField(20, 20, '#FFD640');
    game.addSnake('1', 4);
    game.addRabbit(20);