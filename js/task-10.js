function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 const buttonCreate = document.querySelector('button.dataset.create');
const buttonDestroy = document.querySelector('button.dataset.destroy');

buttonCreate.addEventListener('click', onCreate);
buttonDestroy.addEventListener('click', onDestroy);

function createBoxes(amount){
\
}