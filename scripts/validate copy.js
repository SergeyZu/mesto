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

// const form = document.querySelector('.popup__content');

// Поле формы
const inputElement = formElement.querySelector('.popup__field');

// const formInput = form.querySelector('.popup__field');



// Функция отображения ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  // Спан поля с ошибкой
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // выделяем невалидное поле
  inputElement.classList.add('popup__field_type_error');
  // вызываем сообщение об ошибке
  errorElement.classList.add('popup__form-error_active');
  // задаем текст ошибки
  errorElement.textContent = errorMessage;

}

// Функция скрытия ошибки
const hideInputError = (formElement, inputElement) => {
  // Спан поля с ошибкой
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // снимаем выделение с невалидного поля
  inputElement.classList.remove('popup__field_type_error');
  // скрываем сообщение об ошибке
  errorElement.classList.remove('popup__form-error_active');
  // очищаем текст ошибки
  errorElement.textContent = '';
}

// Проверка поля на валидность
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // отобразить ошибку, если поле невалидно
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // иначе скрыть ошибку
    hideInputError(formElement, inputElement);
  }
}

// Проверяем все поля на валидность
const hasInvalidInput = (inputList) => {
  // если есть хотя бы одно невалидное поле
  return inputList.some((inputElement) => {
    // получаем значение true
    return !inputElement.validity.valid;
  });
}

// Функция изменения активности кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    //сделаем кнопку неактивной, если поля формы невалидны
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.disabled = 'disabled';
  } else {
    // иначе сделаем кнопку активной
    buttonElement.classList.remove('popup__button_disabled');
    buttonElement.disabled = '';
  }
}

// Устанавливаем прослушиватель для всех полей в форме
const setEventListeners = (formElement) => {
  // создаем массив инпутов
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  // кнопка отправки формы
  const buttonElement = formElement.querySelector('.popup__button');
  // активируем/деактивируем кнопку
  toggleButtonState(inputList, buttonElement);
  // обходим массив
  inputList.forEach((inputElement) => {
    // при вводе каждого символа
    inputElement.addEventListener('input', () => {
      // проверяем поле на валидность
      checkInputValidity(formElement, inputElement);
      // активируем/деактивируем кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
}

// Функция валидации
const enableValidation = () => {
  // создаем массив форм
  const formList = Array.from(document.querySelectorAll('.popup__content'));
  // обходим массив
  formList.forEach((formElement) => {
    // запрещаем отправку формы
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement);
  });
}

// Запускаем валидацию
enableValidation();