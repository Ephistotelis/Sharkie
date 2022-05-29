class Endboss extends MovableObject {
    y = 200;
    x = 1400;
    width = 200;
    height = 200;
    IMAGES_ANIMATION = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',

    ];
    currentImage = 0;
    speed = 2;


    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/2.floating/1.png')
        this.loadImages(this.IMAGES_ANIMATION)
        this.animate()
        this.flowLeft()
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 1000 / 10)
    }
}