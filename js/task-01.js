const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);


numberCategories.forEach((elem) => {
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${elem.querySelector('ul').children.length}`)
})


