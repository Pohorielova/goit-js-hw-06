const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Напиши скрипт для создания галереи изображений по массиву данных.
//  В HTML есть список ul.gallery.
// 1.Используй массив объектов images для создания элементов <img> вложенных в <li>.
// 2.Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
// 3.Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// 4.Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
 
// 1.взяли наш массив овощей \обьектов
const list = document.querySelector('.gallery')
//  2.перебираю овощи (мап Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.) и расставляю их в атрибуты прямо в тег
const markup = images
  .map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
  //  3. убираем запятые в разметке, ибо возвращает массив с разделителем
  .join('')
  // 4. расставляю в хтмл
  list.insertAdjacentHTML('beforeend', markup)
// 5. вешаю стили на класс, котрый создала выше
const pictures = document.querySelectorAll('.picture')
list.style.display = 'flex';
list.style.flexWrap = 'column-reverse'
list.style.listStyle = 'none'
list.style.gap = '20px'
list.style.justifyContent = 'center'

