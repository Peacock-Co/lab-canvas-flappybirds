class Floor {
    constructor(ctx, canvasWidth, canvasHeight, floorHeight) {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.floorHeight = floorHeight;

        this.x = 0;
        this.y = this.canvasHeight - this.floorHeight;
        this.vx = 8;

        this.image = new Image();
        this.image.src = 'images/floor.png';
    }

    draw() {
        this.ctx.fillStyle = this.ctx.createPattern(this.image, 'repeat');
        this.ctx.fillRect(this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
}