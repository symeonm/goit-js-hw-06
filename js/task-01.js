const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);


numberCategories.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
})


