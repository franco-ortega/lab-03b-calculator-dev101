
const myAddButton = document.getElementById('addButton');

myAddButton.addEventListener('click', () => {
const addition = Number(myInputOne.value) + Number(myInputTwo.value);
console.log(addition);
calcAnswer.textContent = addition
    // post-click logic goes here!
})

const myInputOne = document.getElementById('inputOne');

myInputOne.addEventListener('input', () => {
    console.log(myInputOne.value);
    // post-click logic goes here!
})

const myInputTwo = document.getElementById('inputTwo');

myInputTwo.addEventListener('input', () => {
    console.log(myInputTwo.value);
    // post-click logic goes here!
})


const mySubButton = document.getElementById('subButton');

mySubButton.addEventListener('click', () => {
const subtraction = Number(myInputOne.value) - Number(myInputTwo.value);
console.log(subtraction);
calcAnswer.textContent = subtraction

// post-click logic goes here!
})


const myMulButton = document.getElementById('mulButton');

myMulButton.addEventListener('click', () => {
const multiplication = Number(myInputOne.value) * Number(myInputTwo.value);
console.log(multiplication);
calcAnswer.textContent = multiplication

// post-click logic goes here!
})


const myDivButton = document.getElementById('divButton');

myDivButton.addEventListener('click', () => {
const division = Number(myInputOne.value) / Number(myInputTwo.value);
console.log(division);
calcAnswer.textContent = division

// post-click logic goes here!
})
