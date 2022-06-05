class Jellyfish_easy extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',

    ]
    IMAGES_ALL = [
        this.IMAGES_SWIMMING,
        this.IMAGES_DEAD
    ]

    //BattleStats
    health = 50;
    attack_damage = 8;
    constructor(spawnpoint) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.x = spawnpoint;
        this.loadImagesALL(this.IMAGES_ALL)
        this.animate(this.IMAGES_SWIMMING)
        this.flowLeft()
        this.setStats()
        this.sinusoidalWaveMovementY()
    }

    sinusoidalWaveMovement() {
        let i = 0;
        setInterval(() => {
            if (i < 10) {
                this.y + this.speedY
            } else {
                this.y - this.speedY
            }
            i++
        }, 100);

    }

}