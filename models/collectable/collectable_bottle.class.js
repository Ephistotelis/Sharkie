class Bottle extends CollectableObjects {

    IMAGES_ANIMATION = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png',
    ]
    width = 60;
    height = 80;
    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png')
        this.loadImages(this.IMAGES_ANIMATION)
        this.animate(this.IMAGES_ANIMATION)
        this.setStats()
        this.flowLeft()
        this.sinusoidalWaveMovementY()
    }

}