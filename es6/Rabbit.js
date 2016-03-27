export class Rabbit {

    constructor(id){
        this.id = id;
        this.color = '#534ED9';

    }

    getrandIndex( max, min = 0) {
    	 let cellIndex = [];
            cellIndex[0] = Math.floor(0.5 + Math.random() * (max - min - 1)+ min);
            cellIndex[1] = Math.floor(0.5 + Math.random() * (max - min - 1) + min);
            return cellIndex;
    }
   
}
