function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const number = document.querySelectorAll('input')
const box = document.querySelector('#boxes')
console.dir(number)

buttonCreate.addEventListener('click', onCreate);
// buttonDestroy.addEventListener('click', onDestory)
let amount = Number(number.value) /// values

function createBoxes(amount) {
 for (let index = 0; index < amount; index+=1) {
  const div = `<div class = box></div>`;
  box.insertAdjacentHTML('afterbegin', div)
 }
  
}

function onCreate(){
  createBoxes()
}
// console.log(amount)


