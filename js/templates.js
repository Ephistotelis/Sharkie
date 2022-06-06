function renderTemplate(page) {
    let instructions = document.getElementById('instructions')
    instructions.innerHTML = '';
    instructions.innerHTML = templatesALL(page);

}

function templatesALL(page) {

    switch (page) {
        case 1:
            return templateInstructions1()

        case 2:
            return templateInstructions2()
        case 3:
            return templateInstructions3()
        case 4:
            return templateInstructions4()

    }

}

function templateInstructions1() {
    return `
    <div class="howItWorks">
        <p>This game is designed as endless running game. <br> In progress the enemies will be harder to kill and deal more damage to your Character! </p>
    </div>
    `
}

function templateInstructions2() {
    return `
        <div class="howItWorks">
            <p> Your Bubble Attack is by far your strongest tool, by dealing a big amount of damage! <br> But be carefull in use, due to its high cooldown! <br> Every time you collect a Bottle your abilitycooldown gets reduced!
            </p>
        </div>
    `
}

function templateInstructions3() {
    return `
    <div class="howItWorks">
        <p>Collection Coins boost your Physicaldamge permanently! <br> Also you gonna receive immortality for 2 seconds!</p>
    </div>
    `
}

function templateInstructions4() {
    return `
    <div class="moveShark">
            <div><img src="img/6.Botones/Key/arrow keys.png" alt="">
            </div>
            <div>
                <p><b>ArrowKeys</b> or <b>WASD</b>, <br> to move your Shark!</p>
            </div>
        </div>
        <div class="attackShark">
            <div><img src="img/6.Botones/Key/Space Bar key.png" alt="">

            </div>
            <div>
                <p>Press <b>Space</b>, <br> to blow a deadly Bubble!</p>
            </div>
        </div>
    `
}