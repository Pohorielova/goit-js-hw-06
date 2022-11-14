function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//  после чего рендерится коллекция. При нажатии на кнопку Очистить, 
//  коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

//  Взять инпут, копки i div
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");
// создаем дивы функцией, где амаунт - количество дивов в инпуте
const createBoxes = amount =>{
// делаем новый массив путой
  const newElementsArray=[];
// перебираем амаунт
  for (let i = 0; i < amount; i++) {
// делаю переменную и создаю див
    let newElement = document.createElement("div");
// даю стили
    newElement.style.width =`${30+10*i}px`;
    newElement.style.height =`${30+10*i}px`;
    // newElement.style.marginBottom ="10px";
    newElement.style.backgroundColor =getRandomHexColor();
// пушим елемент в новый созданный массив
    newElementsArray.push(newElement);
    
  }
// возвращаем наш массив с дивами
  return newElementsArray;
}
// вешаю прослушку на кнопку создать
createBtn.addEventListener("click",()=>{
// создаем дивов столько, сколько велью в инпуте в функции создания
  let createdBoxes = createBoxes(input.value);
// вешаю дивы в коробку
  divBox.append(...createdBoxes);
});
// чистим коробку второй кнопкой
destroyBtn.addEventListener("click", ()=>divBox.innerHTML = "");
// просто прикольно
divBox.style.display = 'flex';
divBox.style.flexWrap = 'wrap'
divBox.style.gap = '10px'
