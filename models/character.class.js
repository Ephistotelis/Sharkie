class Character extends MovableObject {
    IMAGES_ANIMATION = [
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
    ]
    currentImage = 0;
    world;
    speed = 3;
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png')
        this.loadImages(this.IMAGES_ANIMATION)
        this.animate();
        this.move();

    }
    move() {
        this.moveRight();
        this.moveLeft(); //swimming backwards causes the skark to swim slower
        this.moveUp();
        this.moveDown();
    }
    animate() {
        setInterval(() => {
            //walk animation
            let i = this.currentImage % this.IMAGES_ANIMATION.length; // let i = 0 % 6; %=modolu, rest.       => 0, Rest 0
            // i = 0,1,2,3,4,5,6,0
            let path = this.IMAGES_ANIMATION[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 1000 / 10)

    }
    jump() {

    }
}