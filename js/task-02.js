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

// 1.взяли наш массив овощей
const list = document.querySelector('#ingredients')
// 2.сделала пустой массив в памяти, туда буду складывать лишки
const liArray = []
// 3.перебираю овощи
ingredients.forEach(ingredient => {
  // 4.создаю лишку
    const item = document.createElement('li')
    // 5. даю ей класс
    item.className = 'item'
    // 6.записываю название овоща, которое взяла в переборе пункт 3, 
    // оно создает синхронно лишку и пишет имя, по этому ляжет все по порядку 
    item.textContent = ingredient
    // 7.пушу мою лишку в массив в памяти пункт 2
    liArray.push(item)
})
// 8.вешаю эту кучку в пустой уль в хтмл, распыляя туда свой массив из памяти.
list.append(...liArray)


