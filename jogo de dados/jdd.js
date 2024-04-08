let firstNumber = Math.floor(Math.random() * 6) + 1
let firstImg = `img/dice${firstNumber}.png`
let img1 = document.querySelectorAll('img')[0]
img1.setAttribute('src', firstImg)

let secondNumber = Math.floor(Math.random() * 6) + 1
let secondImg =  `img/dice${secondNumber}.png`
let img2 = document.querySelectorAll('img')[1]
img2.setAttribute('src', secondImg)

const h1 = document.querySelector('h1')
if (firstNumber > secondNumber) {
    h1.innerText  = 'Player 1 venceu!🏆'
}
else if (secondNumber > firstNumber) {
    h1.innerText = 'Player 2 venceu!🏆'

}
else {
    h1.innerText = 'Empate! 🫠'
}
