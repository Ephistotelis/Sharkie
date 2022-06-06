class Coin extends CollectableObjects {
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png')
        this.setStats()
        this.flowLeft()
        this.sinusoidalWaveMovementY()
    }
}