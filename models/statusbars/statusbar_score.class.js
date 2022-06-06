class StatusBar_Score extends StatusBar {
    width = 40;
    height = 40;
    score = 0;
    draw(ctx) {
        ctx.font = '32px serif';
        ctx.fillStyle = "red";
        ctx.fillText(`${this.score}`, 930, 50, 100);
    }
}