let game;
class GameCanvas {
    constructor() {
        this.canvasWidth = 900;
        this.canvasHeight = 600;
        this.floorHeight = 50;
        this.ctx = document.getElementById("canvas").getContext("2d");

        this.background = new Background(this.ctx, this.canvasWidth, this.canvasHeight);
        this.floor = new Floor(this.ctx, this.canvasWidth, this.canvasHeight, this.floorHeight);
        this.bird = new Bird(this.ctx, this.canvasHeight);
        this.scoreboard = new ScoreBoard(this.ctx, this.canvasWidth, this.canvasHeight);

        this.obstaclesCreated = [];

        this.fps = 60;
        this.framesCounter = 0;
        this.score = 0;
    }

    draw() {
        this.background.draw();
        this.bird.draw(this.framesCounter);
        this.obstaclesCreated.forEach(function (obstacle) {
            obstacle.draw();
        });

        this.floor.draw();
        this.scoreboard.draw(this.score);
    }

    move() {
        this.bird.move();
        this.obstaclesCreated.forEach(function (obstacle) {
            obstacle.move();
        });
    }

    redenrizado() {
        this.interval = setInterval(() => {
            this.framesCounter++;

            this.clear();
            this.draw();
            this.move();
            this.clearObstacle();

            if (this.isCollision() || this.isCollisionWithFloor()) this.gameOver();

            if (this.framesCounter % 100 === 0) {
                this.generateObstacle();
                this.updateScore();
            }

            this.framesCounter = (this.framesCounter > 1000) ? this.framesCounter = 0 : this.framesCounter;

        }, 1000 / this.fps);
    }

    generateObstacle() {
        let displacement = 100;
        let gap = 100;

        let randomDisplacement = Math.floor(Math.random() * (displacement - (-displacement)) + (-displacement));
        this.obstaclesCreated.push(new Obstacles(this.ctx, randomDisplacement, gap, this.canvasWidth, this.canvasHeight));
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    isCollision() {
        return this.obstaclesCreated.some(obs => {
            return (
                // Check collision in x with both pipes
                this.bird.x + this.bird.width > obs.x &&
                obs.x + obs.width > this.bird.x &&

                // Check collision in y with top pipe
                ((this.bird.y + this.bird.height > obs.y &&
                obs.y + obs.height > this.bird.y) ||

                // Check collision in y with bottom pipe
                (this.bird.y + this.bird.height > obs.y2 &&
                obs.y2 + obs.height > this.bird.y))
            )
        })
    }

    isCollisionWithFloor() {
        return this.bird.y + this.bird.height > this.canvasHeight - this.floorHeight;
    }

    clearObstacle() {
        this.obstaclesCreated = this.obstaclesCreated.filter(function (obstacle) {
            return obstacle.x >= -140;
        });
    }

    updateScore() {
        this.score += this.obstaclesCreated.filter(function (obstacle) {
            return obstacle.x < 140;
        }).length;
    }

    gameOver() {
        clearInterval(this.interval);
    }
}