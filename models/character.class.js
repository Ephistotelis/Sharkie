class Character extends MovableObject {
    IMAGES_SWIMMING = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];
    IMAGES_GRAVITY = [
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/4.png',
    ];
    currentImage = 0;
    world;
    speed = 3;
    y = 100;
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_GRAVITY);
        this.animate(this.IMAGES_SWIMMING);
        this.move();
        this.applyGravity();

    }
    move() {
        this.moveRight();
        this.moveLeft(); //swimming backwards causes the skark to swim slower
        this.moveUp();
        this.moveDown();
    }
    animate(animation) {
        setInterval(() => {
            if (this.isAboveGround() && this.falling == true) {
                this.playAnimation(this.IMAGES_GRAVITY)
            } else {
                this.playAnimation(animation)
            }
        }, 1000 / 10)

    }
    jump() {

    }
}