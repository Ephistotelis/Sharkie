class Pufferfish extends MovableObject {
    x = 200 + Math.random() * 400;
    IMAGES_ANIMATION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ]
    currentImage = 0;
    speed = 2;


    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_ANIMATION)
        this.animate()
        this.flowLeft()
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ANIMATION)
        }, 1000 / 8)
    }
}