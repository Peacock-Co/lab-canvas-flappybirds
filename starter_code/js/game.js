let game;
class GameCanvas{
    constructor(){
        this.ctx = document.getElementById("canvas").getContext("2d");
        this.background = new Background(this.ctx, 900, 500)
        thi
    }

    draw(){
        this.background.draw()
    }




}
/*
Bucleo de renderizado
let delta = 0;
let last = 0;
function draw(timestamp){
  delta = timestamp - last;
  last = timestamp;
  let fps = 1000/delta;
  ctx.clearRect(0,0,500,500)
  pepe.draw(fps);
  luis.draw(fps);
  ctx.fillText("FPS: " + Math.round(fps), 20, 20);
  window.requestAnimationFrame(draw);
}
​*/
//window.requestAnimationFrame(draw)