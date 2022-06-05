class Jellyfish_hard extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',

    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',

    ];
    IMAGES_ALL = [
        this.IMAGES_SWIMMING,
        this.IMAGES_DEAD
    ]

    //BattleStats
    health = 250;
    attack_damage = 26;
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png')
        this.x = spawnpoint;
        this.loadImagesALL(this.IMAGES_ALL)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
        this.setStats()
        this.sinusoidalWaveMovementY()
    }
}