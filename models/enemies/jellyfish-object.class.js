class Jellyfish extends MovableObject {
    x = 200 + Math.random() * 400;
    y = this.randomNumber(50, 600);


    hurt_sound = new Audio('audio/hurt_enemy.mp3')
    currentImage = 0;
    speed = 2;

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