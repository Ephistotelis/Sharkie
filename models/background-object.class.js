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
        }, 1000 / 80);
    }

    setX() {
        if (this.x < -719) {
            this.x = 719;
        }
    }
}