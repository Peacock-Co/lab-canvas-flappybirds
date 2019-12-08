class ScoreBoard {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.x = canvasWidth / 2 - 15;
        this.y = canvasHeight / 5;
    }

    draw(score) {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '50px Arial';

        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        this.ctx.shadowColor = 'rgba(0, 0, 0, 1)';

        this.ctx.fillText(score, this.x, this.y);
    }
}