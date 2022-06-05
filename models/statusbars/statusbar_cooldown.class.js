class StatusBar_Cooldown extends StatusBar {
    width = 40;
    height = 40;
    cooldown = 0;
    draw(ctx) {
        ctx.font = '32px serif';
        ctx.fillStyle = "red";
        ctx.fillText(`${this.cooldown}`, 650, 450, 100);
    }
}