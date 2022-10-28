function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// 1. пойти найти взять боди и кнопку и спан
const body =document.querySelector('body');
const btn =document.querySelector('.change-color');
const colorText =document.querySelector('.color');
// 2. повесить собітие на кнопку
btn.addEventListener('click', event=>{

})