class Jellyfish_veryhard extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',

    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',


    ];
    IMAGES_ALL = [
        this.IMAGES_SWIMMING,
        this.IMAGES_DEAD
    ];


    //BattleStats
    health = 300;
    attack_damage = 30;


    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
        this.x = spawnpoint;
        this.loadImagesALL(this.IMAGES_ALL)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
        this.setStats()
        this.sinusoidalWaveMovementY()
    }
}