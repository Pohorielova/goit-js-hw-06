// Счетчик состоит из спана и кнопок, которые, при клике, 
// должны увеличивать и уменьшать его значение на единицу.

// 1.Создай переменную counterValue в которой будет храниться 
// текущее значение счетчика и инициализируй её значением 0.

const refs = {
    
    counterValue: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]')
};
    
refs.counterValue.textContent = 0;
// 2.Добавь слушатели кликов на кнопки, внутри которых увеличивай 
// или уменьшай значение счтетчика.

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn(event) {

    refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1;
    
    
};
function onIncrementBtn() {
 
    refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1;
};
// 3.Обновляй интерфейс новым значением переменной counterValue.