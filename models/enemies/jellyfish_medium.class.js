class Jellyfish_medium extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',

    ]
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.x = spawnpoint;
        this.loadImages(this.IMAGES_SWIMMING)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
    }
}