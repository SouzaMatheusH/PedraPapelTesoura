// Indendificadores de jogada
const rockPlay = document.querySelector("#rock")
const paperPlay = document.querySelector("#paper")
const scissorsPlay = document.querySelector("#scissors")

// Exibir Resultado
const showResult = document.querySelector("#showResult")

// Exibir jogadas
const machinePlay = document.querySelector("#machinePlay")
const playerPlay = document.querySelector("#playerPlay")


// Player
rockPlay.addEventListener("click", () => {
    var play = "rock"
    setMachinePlay(play)
    playerPlay.innerHTML = "<img src='pedra.png'>"
})
paperPlay.addEventListener("click", () => {
    var play = "paper"
    setMachinePlay(play)
    playerPlay.innerHTML = "<img src='papel.png'>"
})
scissorsPlay.addEventListener("click", () => {
    var play = "scissors"
    setMachinePlay(play)
    playerPlay.innerHTML = "<img src='tesoura.png'>"
})

// Machine

function setMachinePlay(play) {
    var sort = Math.floor(Math.random() * 3)    // sorteio de jogada da máquina
    var sortMachinePlay

    if (sort == 0) {
        sortMachinePlay = "pedra"
    } else if (sort == 1) {
        sortMachinePlay = "papel"
    } else {
        sortMachinePlay = "tesoura"
    }
    machinePlay.innerHTML = `<img src='${sortMachinePlay}.png'>`

// Show Result
    
    // Calc Result
    if (sort == 0 && play == "rock") {
        result = "EMPATE!"
    } else if (sort == 1 && play == "rock") {
        result = "VOCÊ PERDEU!"
    } else if (sort == 2 && play == "rock") {
        result = "VOCÊ VENCEU!"
    } else if (sort == 0 && play == "paper") {
        result = "VOCÊ VENCEU!"
    } else if (sort == 1 && play == "paper") {
        result = "EMPATE!"
    } else if (sort == 2 && play == "paper") {
        result = "VOCÊ PERDEU!"
    } else if (sort == 0 && play == "scissors") {
        result = "VOCÊ PERDEU!"
    } else if (sort == 1 && play == "scissors") {
        result = "VOCÊ VENCEU!"
    } else if (sort == 2 && play == "scissors") {
        result = "EMPATE!"
    }
    showResult.innerHTML = `${result}`
}