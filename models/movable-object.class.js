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
    gravity_Y = 0.5;
    acceleration = 0.1;
    falling = false;
    health = 5;
    lasthit = 0;
    world;
    used_attack_Bubble = false;
    used_attack_FinSLap = false;
    speedY = 2;
    attack_damage = 5;

    immortal = false;
    DEAD = false;
    //Movement
    angle;
    anglespeed;
    curve;
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

    loadImagesALL(arr) {
        arr.forEach((array) => {
            this.loadImages(array)
        })

    }

    animate(animation) {
        setInterval(() => {
            this.playAnimation(animation)
        }, 1000 / 10)
    }


    playAnimation(animation) {
        let i = this.currentImage % animation.length; // let i = 0 % 6; %=modolu, rest.       => 0, Rest 0
        // i = 0,1,2,3,4,5,6,0
        let path = animation[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }


    playAnimationAttack(animation) {
        let i = this.currentImage % animation.length; // let i = 0 % 6; %=modolu, rest.       => 0, Rest 0
        // i = 0,1,2,3,4,5,6,0
        let path = animation[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        this.used_attack_Bubble = false;
    }


    moveRight() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.mirrored = false;
                if (this.x > 930) {
                    return;
                }
                this.x += this.speed * this.speedMultiplier;
            }
        }, 1000 / 60);
    }


    moveLeft() {
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.speedMultiplier = 0.5; // swimming backwards causes the shark to swim slower
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
                if (this.y > 600) {
                    return;
                }
                this.y += this.speed * this.speedMultiplier;
            }
        }, 1000 / 60);
    }


    flowLeft() {

        setInterval(() => {
            this.x -= this.speed;

        }, 1000 / 60);
    }


    sinusoidalWaveMovementY() {
        setInterval(() => {
            this.y += 2 * Math.sin(this.angle)
            this.angle += this.anglespeed;
        }, 100);

    }

    sinusoidalWaveMovementX() {
        setInterval(() => {
            this.x += 2 * Math.sin(this.angle)
            this.angle += this.anglespeed;
        }, 100);

    }

    setStats() {

        this.angle = 0;
        this.anglespeed = Math.random() * 0.9;
        this.curve = Math.random() * 5;
        this.speed = this.randomNumber(1, 3)
    }


    applyGravity() {
        setInterval(() => {
            if (this.checkKeyboard()) {
                this.gravity_Y = 0;
                this.acceleration = 0.1;
                this.falling = false;
                return
            } else {
                if (this.isAboveGround()) {
                    this.falling = true;
                    this.y -= this.gravity_Y;
                    this.gravity_Y -= this.acceleration;
                }
            }
        }, 1000 / 30);
    }


    isAboveGround() {
        return this.y < 570;
    }

    checkKeyboard() {
        return this.world.keyboard.DOWN || this.world.keyboard.UP || this.world.keyboard.LEFT || this.world.keyboard.RIGHT == true
    }
    checkPosition() {
        return this.x
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    drawHitbox(ctx) {
        if (this instanceof Endboss || this instanceof Jellyfish) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue'
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
        if (this instanceof Pufferfish) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue'
            ctx.rect(this.x, this.y + 5, this.width, this.height - 30)
            ctx.stroke();
        }
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue'
            ctx.rect(this.x + 20, this.y + 65, this.width - 40, this.height - 90)
            ctx.stroke();
        }
    }


    checkCollision(mo) {
        if (this instanceof Character && mo instanceof Pufferfish) {
            return (this.x + 20) + (this.width - 40) > mo.x && (this.y + 65) + (this.height - 90) > (mo.y + 5) && (this.x + 20) < mo.x + (this.width - 40) && (this.y + 65) < (mo.y + 5) + (mo.height - 30);
        }
        if (this instanceof Character) {
            return (this.x + 20) + (this.width - 40) > mo.x && (this.y + 65) + (this.height - 90) > mo.y && (this.x + 20) < mo.x + (this.width - 40) && (this.y + 65) < mo.y + mo.height;
        } else {
            return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x + this.width && this.y < mo.y + mo.height;
        }


    }


    decreaseHealth(enemy) {
        if (!this.isDead() && !enemy.isDead()) {
            console.log('getting dmg')
            this.health -= enemy.attack_damage;
            this.lasthit = new Date().getTime()
        }
    }

    isHurt() {
        let sincelasthit = new Date().getTime() - this.lasthit;
        sincelasthit = sincelasthit / 1000;
        return sincelasthit < 1;
    }

    isDead() {
        return this.health < 1;
    }

    attackedBubble() {
        return this.used_attack_Bubble;
    }

    attackedFinSlap() {
        return this.used_attack_FinSLap
    }
    randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }


    //test
    moveToDespawn() {
        this.x = -99;
    }
}