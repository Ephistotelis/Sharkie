class Pufferfish extends MovableObject {
    x = 200 + Math.random() * 400;
    y = this.randomNumber(50, 600);

    currentImage = 0;
    speed = 5;
    health = 20;
    hurt_sound = new Audio('audio/hurt_enemy.mp3')
    speedY = 1;


    animate(animation) {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else {
                this.playAnimation(animation)
            }
        }, 1000 / 10)
    }
}