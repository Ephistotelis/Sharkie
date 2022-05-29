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
            let i = this.currentImage % this.IMAGES_ANIMATION.length; // let i = 0 % 6; %=modolu, rest.       => 0, Rest 0
            // i = 0,1,2,3,4,5,6,0
            let path = this.IMAGES_ANIMATION[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 1000 / 8)
    }
}