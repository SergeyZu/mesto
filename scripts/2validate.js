const obj = {
    formSelector: '.popup__content',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__form-error_active'
}

// Форма
const formElement = document.querySelector('.popup__content');

// Поле формы (инпут)
const inputElement = formElement.querySelector('.popup__field');

// // Массив всех форм на странице
// const formList =  Array.from(document.querySelectorAll(obj.formSelector));

// // Массив всех инпутов во всех формах
// const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));

// // // Элемент ошибки
// // const errorElement = formElement.querySelector(`.${inputElement.id}-error`);


// function adjustForms() {
//     const formList =  Array.from(document.querySelectorAll(obj.formSelector));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', event => event.preventDefault());
//     });
// }




// const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(obj.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(obj.errorClass);
//     console.log('Функция showInputError отработала');
// };

// function adjustInputs (formElement) {
//     const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', event => {
//             showInputError(formElement, inputElement, errorMessage);
//             isValid(formElement, inputElement);
//         });
//     });
// }

// function isValid (formElement, inputElement) {
//     if (!inputElement.validity.valid) {
//       showInputError(formElement, inputElement, inputElement.validationMessage);
//       console.log('Функция isValid отработала. Поле не валидно');
//     } else {
//       // Если проходит, скроем
//       hideInputError(formElement, inputElement);
//     }
    
//   };

// Отображение ошибки валидации

// function checkValidation(input) {
//     if (!input.validity.valid) {
//         errorPlace.textContent = input.validationMessage;
//         errorPlace.classList.add(obj.errorClass);
//     } else {                
//         errorPlace.textContent = '';
//         errorPlace.classList.remove(obj.errorClass);
//     }
// }

// checkValidation()












// function enableValidation(obj) {

// }











// console.log()