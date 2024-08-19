

const categories = document.querySelectorAll('#categories .item');// Отримуємо всі елементи з класом "item" у списку ul#categories


console.log(`Number of categories: ${categories.length}`);//кількість категорій


categories.forEach((category) => {
  
  const categoryTitle = category.querySelector('h2').textContent;// Знаходимо заголовок категорії (тег h2)
  
  const categoryItemsCount = category.querySelectorAll('ul li').length;// Знаходимо кількість елементів у категорії (тегів li)
  
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
});
