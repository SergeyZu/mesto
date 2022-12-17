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

// Поле формы
const inputElement = formElement.querySelector('.popup__field');

const buttonElement = formElement.querySelector('.popup__button');


// Добавляем класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__field_type_error');
    errorElement.classList.add('popup__form-error_active');
    errorElement.textContent = errorMessage;
};

// Удаляем класс с ошибкой
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__field_type_error');
    errorElement.classList.remove('popup__form-error_active');
    errorElement.textContent = '';
}

// Проверяем валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
}

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__button_disabled');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__button_disabled');
  }
}

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  // Найдём в текущей форме кнопку отправки
//   const buttonElement = formElement.querySelector('.form__submit');
  toggleButtonState(inputList, buttonElement);

  // Обойдем все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    //каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}


// // // Вызовем функцию isValid на каждый ввод символа
// inputElement.addEventListener('input', isValid);




const enableValidation = () => {
  // Найдем все формы с указанным классом в DOM, 
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  // Переберем полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    // setEventListeners(formElement);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    inputList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
}
  

// Вызовем функцию
enableValidation();
