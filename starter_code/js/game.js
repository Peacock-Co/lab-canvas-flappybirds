let game;
class GameCanvas{
    constructor(){
        this.ctx = document.getElementById("canvas").getContext("2d");
        this.background = new Background(this.ctx, 900, 500)
        this.bird = new Bird(this.ctx);
        this.fps = 60;
        this.framesCounter = 0
        this.obstaclesCreated = [];
       

        console.log(this.bird.image.src)
    }

    draw(){
        this.background.draw();
        this.bird.draw();
        this.obstaclesCreated.forEach(function(obstacle){
            obstacle.draw();
        });
        this.bird.y += 7;
    }


    redenrizado(){
       this.interval = setInterval(()=> {
        this.framesCounter++
        
        
    
        this.clear()
        this.draw()
        this.move()
        this.clearObstacle()
        
        if(this.framesCounter % 100 === 0) this.generateObstacle()
        if(this.framesCounter > 1000) this.framesCounter = 0; 
    
       },1000/this.fps)
    }

    generateObstacle(){
        this.obstaclesCreated.push(new Obstacles(this.ctx, Math.floor(Math.random() * (100 - (-100)) + (-100))))
        
    }

    clear(){
        this.ctx.clearRect(0,0,900,500)
    }

    clearObstacle(){
        this.obstaclesCreated = this.obstaclesCreated.filter(function(obstacle){
            console.log("Alex te queremos!")
            return obstacle.x >= -200
        })
    }

    move(){
        this.obstaclesCreated.forEach(function(obstacle){
            obstacle.move()
        })
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