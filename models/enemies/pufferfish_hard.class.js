class Pufferfish_hard extends Pufferfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',

    ]
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png')
        this.x = spawnpoint;
        this.loadImages(this.IMAGES_SWIMMING)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
    }
}