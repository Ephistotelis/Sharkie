function renderTemplate(page) {
    let instructions = document.getElementById('instructions')
    instructions.innerHTML = '';
    instructions.innerHTML = templatesALL(page);

}

function templatesALL(page) {

    switch (page) {
        case 1:
            document.getElementById('pageBtn1').style.backgroundColor = 'var(--btn_color_selected)'
            document.getElementById('pageBtn2').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn3').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn4').style.backgroundColor = 'var(--btn_color)'
            return templateInstructions1()

        case 2:
            document.getElementById('pageBtn2').style.backgroundColor = 'var(--btn_color_selected)'
            document.getElementById('pageBtn1').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn3').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn4').style.backgroundColor = 'var(--btn_color)'
            return templateInstructions2()
        case 3:
            document.getElementById('pageBtn3').style.backgroundColor = 'var(--btn_color_selected)'
            document.getElementById('pageBtn2').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn1').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn4').style.backgroundColor = 'var(--btn_color)'
            return templateInstructions3()
        case 4:
            document.getElementById('pageBtn4').style.backgroundColor = 'var(--btn_color_selected)'
            document.getElementById('pageBtn2').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn3').style.backgroundColor = 'var(--btn_color)'
            document.getElementById('pageBtn1').style.backgroundColor = 'var(--btn_color)'
            return templateInstructions4()

    }

}

function templateInstructions1() {
    return `
    <div class="howItWorks">
        <p>This game is designed as endless running game. <br> In progress the enemies will be harder to kill <br> and deal more damage to your Character! <br>For each Enemy you kill gain extra <b>Points</b> for your endscore! </p>
    </div>
    `
}

function templateInstructions2() {
    return `
        <div class="howItWorks">
            <p> Your <b>Bubble Attack</b> is by far your strongest tool, by dealing a big amount of damage! <br> But be carefull in use, due to its high cooldown! <br> Every time you collect a <b>Bottle</b> your abilitycooldown gets reduced!
            </p>
        </div>
    `
}

function templateInstructions3() {
    return `
    <div class="howItWorks">
        <p>Collecting Coins boost your Physicaldamge permanently! <br> Also you gonna receive a small <b>heal</b> and <b>immortality</b> for 2 seconds! <br> For each Coin collected you gain extra <b>500</b> points for your endscore!</p>
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

function tempalateScoreBoard(i, score) {
    return `
    <ul><b>${i+1}.</b>     ${score}</ul>
    `
}