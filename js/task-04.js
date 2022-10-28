// Счетчик состоит из спана и кнопок, которые, при клике, 
// должны увеличивать и уменьшать его значение на единицу.

// 1.Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.
// 2.Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.
// 3.Обновляй интерфейс новым значением переменной counterValue.

// Переменные
const counterValue =document.querySelector('#value');
const decrementBtn=document.querySelector('[data-action="decrement"]');
const incrementBtn= document.querySelector('[data-action="increment"]');
// инициализация счетчика  
counterValue.textContent = 0;
// повесить прослушки
decrementBtn.addEventListener('click', event=>{
    counterValue.textContent = Number(counterValue.textContent) - 1;
});

incrementBtn.addEventListener('click', event=>{
    counterValue.textContent = Number(counterValue.textContent) + 1;
});

