const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');

li1.textContent = 'Potatoes';
li2.textContent = 'Mushrooms';
li3.textContent = 'Garlic';
li4.textContent = 'Tomatos';
li5.textContent = 'Herbs';
li6.textContent = 'Condiments';

list.append(li1,li2, li3, li4, li5, li6)





// ingredients.forEach((item) => {
//   const li = document.createElement('li');
//   li.textContent = item;
//   list.append(li)
// })



// ingredients.forEach((item) => {
//   const elem = `<li class = item>${item}</li>`;
//   console.log(list.insertAdjacentHTML('afterbegin', elem))
// })
