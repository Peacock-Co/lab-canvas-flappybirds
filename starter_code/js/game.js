let game;
class GameCanvas{
    constructor(){
        this.ctx = document.getElementById("canvas").getContext("2d");
        this.background = new Background(this.ctx, 900, 500)
    }

    draw(){
        this.background.draw()
    }
}
