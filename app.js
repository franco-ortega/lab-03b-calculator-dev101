import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from './mathutils.js'

const myInputOne = document.getElementById('inputOne');

myInputOne.addEventListener('input', () => {
})

const myInputTwo = document.getElementById('inputTwo');

myInputTwo.addEventListener('input', () => {
})

const myAddButton = document.getElementById('addButton');

myAddButton.addEventListener('click', () => {
const addAnswer = addNumbers(Number(myInputOne.value), Number(myInputTwo.value));
calcAnswer.textContent = addAnswer
})

const mySubButton = document.getElementById('subButton');

mySubButton.addEventListener('click', () => {
const subtractAnswer = subtractNumbers(Number(myInputOne.value), Number(myInputTwo.value));
calcAnswer.textContent = subtractAnswer
})

const myMulButton = document.getElementById('mulButton');

myMulButton.addEventListener('click', () => {
const multiplyAnswer = multiplyNumbers(Number(myInputOne.value), Number(myInputTwo.value));
calcAnswer.textContent = multiplyAnswer
})

const myDivButton = document.getElementById('divButton');

myDivButton.addEventListener('click', () => {
const divideAnswer = divideNumbers(Number(myInputOne.value), Number(myInputTwo.value));
calcAnswer.textContent = divideAnswer
})
