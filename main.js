
 
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const custom = document.getElementById("custom")
const customInput = document.getElementById("custom-input")
const numberUser = document.getElementById("number-user")
const result = document.getElementById("result")
const btn = document.getElementById("btn")
const roundTotal = document.getElementById("round-total")
const roundCount = document.getElementById("round")
const container = document.getElementById("container")
const roundContainer = document.getElementById('round-container')

let round
let randomNumber = getRandomNumber()
//console.log('randomNumber', randomNumber)

function getRound() {
    if (four.checked) {
        round = 4
        customInput.style.display = "none"
    } else if (five.checked) {
        round = 5
        customInput.style.display = "none"
    } else if (six.checked) {
        round = 6
        customInput.style.display = "none"
    } else if (custom.checked) {
        round = customInput.value
        customInput.style.display = "block"
    }
    //console.log('round is', round)
}
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function compare(userNum, randomNum, i) {
    if (userNum < randomNum) {
        return `${i} - You need to guess higher than ${userNum}, try again <br>`
    } else if (randomNum < userNum) {
        return `${i} - You need to guess lower than ${userNum}, try again <br>`
    } else {
        return `Yes!! you got me in ${i} guesses, I am ${randomNum} <br>
        <a href="#" onclick="restart()">You win play again</a>
        `
    }
}
//console.log(compare(99, randomNumber, 1))

getRound()
let counter = 1
function main() {
    container.style.display = "none"
    roundContainer.style.display = "block"
    roundTotal.innerHTML = round
    roundCount.innerHTML = counter
    getRound()
    //console.log(compare(numberUser.value, randomNumber, counter))
    result.innerHTML += compare(numberUser.value, randomNumber, counter)
    //console.log("main is working")
    if (counter == round && randomNumber != numberUser.value) {
        //console.log("you play too much")
        btn.disabled = true
        result.innerHTML = `<a href="#" onclick="restart()">You lost play again</a>`
    }
    counter++
}
function restart() {
    randomNumber = getRandomNumber()
    counter = 1
    container.style.display = "block"
    roundContainer.style.display = "none"
    btn.disabled = false
    result.innerHTML = ""
}