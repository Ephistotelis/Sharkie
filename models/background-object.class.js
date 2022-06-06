class BackgroundObject {
    x;
    y;
    width;
    height;
    img;
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)   <img id="image">            Ist genau das selbe nur die JS version
        this.img.src = path;
    }


    flowLeft() {
        setInterval(() => {
            this.setX();
            this.x -= this.speed;
        }, 50);
    }

    setX() {
        if (this.x < -1055) {
            this.x = 1055;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue'
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }

    }
}