class Jellyfish_veryhard extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',

    ]
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
        this.x = spawnpoint;
        this.loadImages(this.IMAGES_SWIMMING)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
    }
}