const categoriesItemRef = document.querySelectorAll('.item');
const categoriesCount = categoriesItemRef.length;
console.log(`В списке ${categoriesCount} категории.`);

categoriesItemRef.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const elementCount = category.querySelectorAll('li').length;
    // console.log(title);
    console.log(`Категория: ${categoryTitle}`)
    console.log(`Количество элементов: ${elementCount}`)
})
    


