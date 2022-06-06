class StatusBar_Cooldown extends StatusBar {
    width = 40;
    height = 40;
    cooldown = 0;
    draw(ctx) {
        ctx.beginPath()
        ctx.rect(920, 640, 50, 40)
        ctx.fillStyle = 'rgba(0,0,0,0.7)'
        ctx.fill()
        ctx.font = '32px LuckiestGuy';
        ctx.fillStyle = "red";
        ctx.font
        ctx.fillText(`${this.cooldown}`, 930, 670, 100);
    }
}