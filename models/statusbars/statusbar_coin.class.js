class StatusBar_Coin extends StatusBar {
    x = 300;
    y = 30;
    width = 50;
    height = 50;
    img;
    coinsAmount = 0;

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png')

    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)

        ctx.font = '32px LuckiestGuy';
        ctx.fillStyle = "white";
        ctx.fillText(`${this.coinsAmount}`, 315, 65, 100);
    }
}