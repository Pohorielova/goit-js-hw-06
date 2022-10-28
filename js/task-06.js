// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.
// 1.Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2.Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


// 1.Пойти найти взять инпут
const textInput = document.querySelector('#validation-input');

// 2. Повесить на него событие блюр
textInput.addEventListener('blur', event =>{

// 3.Сделать проверку на кол во символов
     return event.target.value.length == Number(textInput.dataset.length)?
// 4. Повесить условие с результатом цвета бордера
            textInput.classList.add('valid') :
            textInput.classList.add('invalid');
});

    // console.log(textInput.dataset);