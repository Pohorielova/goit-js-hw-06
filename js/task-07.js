// Напиши скрипт, который реагирует на изменение значения input#font-size-control
//  (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
//  В результате при перетаскивании ползунка будет меняться размер текста.

{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */}


// 1.Пойти найти взять инпут и спан
const textInput = document.querySelector('#font-size-control');
const spanText =document.querySelector('#text');

// 2. Повесить на него событие input
textInput.addEventListener('input', event =>{

// 3.  изменяет инлайн-стиль span#text обновляя свойство font-size привязкой спантекста к ивент таргет велью
spanText.style.fontSize = `${event.target.value}px` ;
            
});

