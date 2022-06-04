class StatusBar_Score extends StatusBar {
    x = 210;
    y = 20;
    width = 40;
    height = 40;
    score = 0;
    draw(ctx) {
        ctx.font = '32px serif';
        ctx.fillStyle = "red";
        ctx.fillText(`${this.score}`, 600, 50, 100);
    }
}