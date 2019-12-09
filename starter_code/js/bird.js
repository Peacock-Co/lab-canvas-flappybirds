class Bird {
    constructor(ctx, canvasHeight) {
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;

        this.width = 68;
        this.height = 48;
        this.x = 200;
        this.y = this.canvasHeight / 2 - this.height / 2;

        this.image = new Image();
        this.image.src = "images/flappy_sprites.png";

        this.frames = 3;
        this.framesIndex = 0;

        this.gravity = 4;
        this.hasGameStarted = false;

        this.setListener();
    }

    draw(frameCounter) {
        this.ctx.drawImage(
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width / this.frames),
            this.image.height,
            this.x,
            this.y,
            this.width,
            this.height
        );

        this.animateFlappy(frameCounter);
    }

    move() {
        if (this.hasGameStarted) {
            this.y += this.gravity;
            this.gravity += 0.4;
        }
    }

    animateFlappy(frameCounter) {
        if (frameCounter % 10 === 0) {
            this.framesIndex++;

            this.framesIndex = this.framesIndex > 2 ? 0 : this.framesIndex;
        }
    }

    setListener() {
        document.addEventListener("keydown", function (e) {
            if (e.keyCode === 32) {
                if (!this.hasGameStarted) this.hasGameStarted = true;
                this.y -= this.gravity;
                this.gravity -= 10;
            }
        }.bind(this));
    }
}