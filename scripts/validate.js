// const obj = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }

// // Форма
// const formElement = document.querySelector('.popup__content');

// // Поле формы
// const inputElement = formElement.querySelector('.popup__field');


// // Функция, которая добавляет класс с ошибкой
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__field_type_error');
//   // Заменим содержимое span с ошибкой на переданный параметр
//   errorElement.textContent = errorMessage;
//   // Показываем сообщение об ошибке
//   errorElement.classList.add('popup__field-error_active');
//   console.log('Функция showInputError отработала');
// };



// // Функция, которая удаляет класс с ошибкой
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__field_type_error');
//   // Скрываем сообщение об ошибке
//   errorElement.classList.remove('popup__field-error_active');
//   // Очистим ошибку
//   errorElement.textContent = '';
//   console.log('Функция hideInputError отработала');
// };



// // Функция, которая проверяет валидность поля
// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     // Если поле не проходит валидацию, покажем ошибку
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     // Если проходит, скроем
//     hideInputError(formElement, inputElement);
//   }
//   console.log('Функция isValid отработала');
// };


// // Функция принимает массив полей
// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся функция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//     console.log(!inputElement.validity.valid);
//   })
//   console.log('Функция hasInvalidInput отработала');
// };


// // Функция принимает массив полей ввода
// // и элемент кнопки, состояние которой нужно менять
// const toggleButtonState = (inputList, buttonElement) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     buttonElement.classList.add('popup__submit_inactive');
//   } else {
//     // иначе сделай кнопку активной
//     buttonElement.classList.remove('popup__submit_inactive');
//   }
//   console.log('Функция toggleButtonState отработала');
// };


// // // Вызовем функцию isValid на каждый ввод символа
// // inputElement.addEventListener('input', isValid);
// const setEventListeners = (formElement) => {
//   // Находим все поля внутри формы,
//   // сделаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
//   // Найдём в текущей форме кнопку отправки
//   const buttonElement = formElement.querySelector('.form__submit');
//   toggleButtonState(inputList, buttonElement);

//   // Обойдем все элементы полученной коллекции
//   inputList.forEach((inputElement) => {
//     //каждому полю добавим обработчик события input
//     inputElement.addEventListener('input', () => {
//       // Внутри колбэка вызовем isValid,
//       // передав ей форму и проверяемый элемент
//       isValid(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
//   console.log('Функция setEventListeners отработала');
// };

// const enableValidation = () => {
//   // Найдем все формы с указанным классом в DOM, 
//   // сделаем из них массив методом Array.from
//   const formList = Array.from(document.querySelectorAll('.popup__content'));

//   // Переберем полученную коллекцию
//   formList.forEach((formElement) => {
//     // Для каждой формы вызовем функцию setEventListeners,
//     // передав ей элемент формы
//     setEventListeners(formElement);
//   });
//   console.log('Функция enableValidation отработала');
// };

// // Вызовем функцию
// enableValidation();
// console.log('Функция enableValidation вызвана');













//   // Слушатель события input
// formInput.addEventListener('input', function (evt) {
//     // Выведем в консоль значение свойства validity.valid поля ввода, 
//     // на котором слушаем событие input
//     console.log(evt.target.validity.valid);
//   }); 





const obj = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}



function enableValidation(obj) {
  const formList =  Array.from(document.querySelectorAll(obj.formSelector))
  formList.forEach(form => {
    // запретим отправку формы
    form.addEventListener('submit', evt => evt.preventDefault());

    const InputList = Array.from(form.querySelectorAll(obj.inputSelector));
    InputList.forEach(input => {
      console.log(input);
    });
  });
}

enableValidation(obj)