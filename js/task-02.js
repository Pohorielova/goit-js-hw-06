const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все <li> за одну операцию в список ul#ingredients.


const list = document.querySelector('#ingredients');
const liArray =[];

// for (const item of ingredients) 
ingredients.forEach(ingredient =>
{
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  elem.className ='item';
  liArray.push(elem);

});

list.append(...liArray);

