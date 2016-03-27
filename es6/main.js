import {Snake} from './Snake.js';
import {Rabbit} from './Rabbit.js';
    class Game {
        constructor(id) {
            this.id = id;
            this.fieldColor = '#FFD640';

        }
        
        drawCell(cellSize, cellIndex = [0, 0], context, color) {

            context.fillStyle = color;
            context.fillRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize );
            context.strokeRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize);

        }

        clearCell(cellSize, cellIndex = [0, 0], context) {

            context.clearRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize );
            // context.strokeRect(cellSize * cellIndex[0],  cellSize * cellIndex[1], cellSize , cellSize);

        }

        drawField(cellQantity, cellSize, color = this.fieldColor) {
            this.cellQantity = cellQantity;
            this.cellSize = cellSize;
            let fullsize = cellQantity *cellSize;

            let canvas = document.getElementById(this.id);
            let context = canvas.getContext('2d');
            this.context = context;
            canvas.width = fullsize;
            canvas.height = fullsize;
            

            for (let i = 0; i < cellQantity; i++) 
            {
                for (let j = 0; j < cellQantity; j++) 
                {
                    let cellIndex = [i, j];
                    this.drawCell(this.cellSize, cellIndex, context, color);
                    
                }                
            }            
        }

        addSnake(id, body) {
            this.snake = new Snake(id, body);
            for (let cellIndex of this.snake.body) { 
                    this.drawCell(this.cellSize, cellIndex, this.context, this.snake.color);
                };
        }        

        randIndex(maxIndex) {
            let cellIndex = [];
            cellIndex[0] = Math.floor(0.5 + Math.random() * (maxIndex - 1));
            cellIndex[1] = Math.floor(0.5 + Math.random() * (maxIndex - 1));
            return cellIndex;
        }

        addRabbit(id) {
            this.rabbit = new Rabbit(id);
            let maxIndex = this.cellQantity;
            let cellIndex = this.checkPosition(this.rabbit.getrandIndex(maxIndex), this.snake.body);
            this.drawCell(this.cellSize, cellIndex, this.context, this.rabbit.color);

        }
// Check is rabbit cell apered on the snake
        checkPosition(cellIndex, snakeBody)  {
        for (let snakeCell of this.snake.body) {
                if (snakeCell == cellIndex ) {
                    this.rabbit.getrandIndex(this.cellQantity);
                } else {
                    return cellIndex;
                }
            }
        }

     moveSnake() {
        
        let bodyLength = this.snake.body.length;
        let nextCell =  this.snake.body[bodyLength - 1][0] + 1;
        console.log(nextCell);
        for (let cellIndex of this.snake.body) {
            this.clearCell(this.cellSize, cellIndex, this.context, this.fieldColor);
            this.drawCell(this.cellSize, cellIndex, this.context, this.fieldColor);
        };
       
        this.snake.body.shift();
        this.snake.body.push([nextCell, 0]);
         console.log(this.snake.body);
        
        for (let cellIndex of this.snake.body) {
            this.drawCell(this.cellSize, cellIndex, this.context, this.snake.color);
        };
    }

        // gameStep(interval) {
        // //todo Add interval. At every step check snake and rabbits params and draw it.
        // }
    }

let game = new Game('game');
    game.drawField(20, 20);
    game.addSnake('1');
    game.addRabbit('1');
    setTimeout(function(){game.moveSnake()}, 1000);
    // setTimeout(alert('test!!'), 5000);