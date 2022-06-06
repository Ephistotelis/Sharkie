class AttackObject extends MovableObject {
    width = 20;
    height = 20;

    world;

    moveBubble() {
        setInterval(() => {
            this.x += 3;
        }, 1000 / 60);
    }

    finSlap() {

    }
}