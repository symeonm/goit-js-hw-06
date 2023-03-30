const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const markup = [];
ingredients.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
markup.push(li)
})
list.append(...markup)



// ingredients.forEach((item) => {
//   const elem = `<li class = item>${item}</li>`;
//   console.log(list.insertAdjacentHTML('afterbegin', elem))
// })
