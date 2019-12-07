class Bird{
    constructor(ctx){
        this.ctx = ctx;
        this.width = 70;
        this.height = 60;
        this.image = new Image();
        this.image.src = "images/flappy.png"
        this.x = 200;
        this.y = 250 - this.height / 2 ;
        this.birdFall = 0
        this.setListener()


    }

    draw(){
       this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    move(){
        
    }

    setListener(){
        document.addEventListener("keydown",function(e){
            if(e.keyCode == 32){
              this.y -=7
            }
          })
    }
}