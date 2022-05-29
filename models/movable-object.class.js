class MovableObject {
    x = 100;
    y = 390;
    width = 100;
    height = 100;
    img;
    speed;
    speedMultiplier = 1; //to add slow or speed buffs, when collected gain a better or worse multiplier     exp: speed multi = 1.3; slow multi = 0.4;
    imageCache = {};
    mirrored = false;
    world;

    // this.world.camera_x = -this.x;

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)   <img id="image">            Ist genau das selbe nur die JS version
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }


    moveRight() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.mirrored = false;
                if (this.x > 600) {
                    return;
                }
                this.x += this.speed * this.speedMultiplier;
            }
        }, 1000 / 60);
    }


    moveLeft() {
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.speedMultiplier = 0.3; // swimming backwards causes the shark to swim slower
                this.mirrored = true;
                if (this.x < 0) {
                    return;
                }
                this.x -= this.speed * this.speedMultiplier;
            } else {
                this.speedMultiplier = 1;
            }
        }, 1000 / 60);
    }


    moveUp() {
        setInterval(() => {
            if (this.world.keyboard.UP) {
                if (this.y < -30) {
                    return;
                }
                this.y -= this.speed * this.speedMultiplier;
            }
        }, 1000 / 60);
    }


    moveDown() {
        setInterval(() => {
            if (this.world.keyboard.DOWN) {
                if (this.y > 390) {
                    return;
                }
                this.y += this.speed * this.speedMultiplier;
            }
        }, 1000 / 60);
    }
    flowLeft() {
        this.speed = (Math.random() + 1) * this.speed;
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}