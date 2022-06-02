class Jellyfish_easy extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ]
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.x = spawnpoint;
        this.loadImages(this.IMAGES_SWIMMING)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
    }
}