class Character extends MovableObject {
    IMAGES_SWIMMING = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];
    IMAGES_GRAVITY = [
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/4.png',
    ];
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png',
    ];
    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];
    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ]

    IMAGES_ALL = [
        this.IMAGES_SWIMMING,
        this.IMAGES_GRAVITY,
        this.IMAGES_DEAD,
        this.IMAGES_HURT,
        this.IMAGES_ATTACK_BUBBLE
    ];
    coins_collected = 0;
    currentImage = 0;
    world;
    speed = 3;
    y = 100;
    width = 150;
    height = 150;
    health = 100;
    max_health = 100;
    heal_value = 10;
    coolDownAttack = 0;
    attack_damage = 10;
    boostATK_value = 3;
    bubble_sound = new Audio('audio/bubble.mp3');
    hurt_sound = new Audio('audio/hurt.mp3')


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png')
        this.loadImagesALL(this.IMAGES_ALL)
        this.animate(this.IMAGES_SWIMMING);
        this.move();
        this.applyGravity();
        this.attack_bubble();
        this.decreaseCoolDownOverTime();
        this.hurt_sound.load()

    }

    reduceCD() {
        if (this.coolDownAttack > 5) {
            this.coolDownAttack -= 5;
        } else {
            this.coolDownAttack -= this.coolDownAttack;
        }

    }


    addCoin() {
        this.coins_collected += 1;
        this.world.level.statusbars[1].coinsAmount += 1;
        this.boostATK();
        this.heal();
        this.setImmortal();
    }


    heal() {
        if (this.health < this.max_health - this.heal_value) {
            this.health += this.heal_value;
        } else {
            this.health = this.max_health
        }
    }


    setImmortal() {
        this.immortal = true;
        setTimeout(() => {
            this.immortal = false;
        }, 2000);
    }


    boostATK() {
        this.attack_damage += this.boostATK_value;
    }


    move() {
        this.moveRight();
        this.moveLeft(); //swimming backwards causes the skark to swim slower
        this.moveUp();
        this.moveDown();
    }


    animate(animation) {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
                if (this.world.gameActiv == true) {
                    this.hurt_sound.play()
                }
            } else if (this.attackedBubble()) {
                this.playAnimation(this.IMAGES_ATTACK_BUBBLE)
            } else if (this.isAboveGround() && this.falling == true) {
                this.playAnimation(this.IMAGES_GRAVITY)
            } else {
                this.playAnimation(animation)
            }
        }, 1000 / 10)
    }


    attack_bubble() {
        setInterval(() => {
            if (this.world.keyboard.ATTACK && this.coolDownAttack < 1) {
                this.bubble_sound.load()
                this.bubble_sound.play()
                setTimeout(() => {
                    this.world.level.attackObject.push(new Attack_Bubble(this.world))
                }, 700);
                this.coolDownAttack += 15;
                this.used_attack_Bubble = true;
                this.currentImage = 0;
                setTimeout(() => {
                    this.used_attack_Bubble = false;
                }, 700);
            }
        }, 50);
    }


    decreaseCoolDownOverTime() {
        setInterval(() => {
            if (this.coolDownAttack > 0) {
                this.world.level.statusbars[3].cooldown = this.coolDownAttack;
                this.coolDownAttack -= 1;
            } else {
                this.world.level.statusbars[3].cooldown = this.coolDownAttack;
            }
        }, 1000);
    }
}