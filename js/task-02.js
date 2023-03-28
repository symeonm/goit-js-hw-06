const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  list.append(li)
})



// ingredients.forEach((item) => {
//   const elem = `<li class = item>${item}</li>`;
//   console.log(list.insertAdjacentHTML('afterbegin', elem))
// })
