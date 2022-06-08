class StatusBar_Health extends StatusBar {
    y = 5;
    img;
    width = 25;
    widthcalced = 1;
    character_health = 100;
    healthbar_width = 250;
    world;

    loadHealth() {
        this.character_health = this.world.character.max_health
        this.width = this.world.character.health
    }

    calcwidth() {
        setInterval(() => {
            this.loadHealth()
            this.widthcalced = this.healthbar_width / this.character_health * this.width;
        }, 100);

    }


    draw(ctx) {
        this.calcwidth()
        ctx.beginPath()
        ctx.rect(18, 18, this.healthbar_width + 4, 34)
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.beginPath()
        ctx.rect(20, 20, this.healthbar_width, 30)
        ctx.fillStyle = 'grey'
        ctx.fill()
        ctx.beginPath()
        ctx.rect(20, 20, this.widthcalced, 30)
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.font = '26px LuckiestGuy';
        ctx.fillStyle = "white";
        ctx.fillText(`${this.width}%`, this.healthbar_width / 2, 45, 100);
    }
}