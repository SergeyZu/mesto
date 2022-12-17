const obj = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__form-error_active'
}



function enableValidation(obj) {
    // действие запуска процесса наложения валидаций
    const formList =  Array.from(document.querySelectorAll(obj.formSelector))
    formList.forEach(form => {
    
    form.addEventListener('submit', event => event.preventDefault());

    // действие наложения обработчиков на поля форм
    const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
    inputList.forEach(input => {
        input.addEventListener('input', event => {
            const inputName = input.getAttribute('id');
            const errorPlace = document.querySelector(`.${inputName}-error`);
            
            // проверка валидности введенных данных
            if (!input.validity.valid) {
                // const inputName = input.getAttribute('id');
                // const errorPlace = document.querySelector(`.${inputName}-error`);
                errorPlace.textContent = input.validationMessage;
                errorPlace.classList.add(obj.errorClass);
            } else {  
                // const inputName = input.getAttribute('id');
                // const errorPlace = document.querySelector(`.${inputName}-error`);              
                errorPlace.textContent = '';
                errorPlace.classList.remove(obj.errorClass);
            }
            // console.log(input.validationMessage);
        });
    });
  })
}
enableValidation(obj)

// console.log()

// действие запуска процесса наложения валидаций
// действие наложения обработчиков на поля форм
// проверка валидности введенных данных
// скрыть ошибку под полем
// поиск errorPlace
// показать ошибку под полем

// функция валидации кнопки
// проверка есть ли хотя бы одно невалидное поле в форме