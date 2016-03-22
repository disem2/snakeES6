export class Snake {
    constructor(id, body){
        this.id = id;
        this.body = new Set(body);
    }
}