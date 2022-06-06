class StatusBar_Poison extends StatusBar {
    y = 70;
    img;
    ANIMATION_HEALTHBAR = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png',
    ]

    constructor() {
        super().loadImage('img/4. Marcadores/Purple/0_.png')
        this.loadImages(this.ANIMATION_HEALTHBAR)
    }
}