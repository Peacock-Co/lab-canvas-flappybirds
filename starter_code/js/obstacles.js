class Obstacles{
    constructor(ctx, displacement){
        this.ctx = ctx
        this.width = 138;
        this.heigth = 793;
        this.gap = 65;
        this.x = 901;
        this.canvasHeight = 500
        this.displacement = displacement
        this.vx = 4;

        this.image = new Image();
        this.image.src ="images/obstacle_top.png";
        
        this.y = ((this.canvasHeight/2)-this.displacement) - (this.heigth + this.gap);

        this.image2 = new Image();
        this.image2.src ="images/obstacle_bottom.png";
        this.y2 =  ((this.canvasHeight/2)-this.displacement) + this.gap
        
    }
    draw(){
        //this.displacement = displacement
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.heigth)
        this.ctx.drawImage(this.image2, this.x, this.y2, this.width, this.heigth)

    }
    move(){
        this.x -= this.vx;
    }
 
}
