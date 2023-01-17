const config = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__form-error_active'
}

export default class FormValidator {
  constructor(selector, formElement) {
    this._formSelector = selector.formSelector;
    this._inputSelector = selector.inputSelector;
    this._submitButtonSelector = selector.submitButtonSelector;
    this._inactiveButtonClass = selector.inactiveButtonClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._errorClass = selector.errorClass;
    this._formElement = formElement;
  }

  // Функция отображения ошибки
  _showInputError = (inputElement, errorMessage) => {
    // Спан поля с ошибкой
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // выделяем невалидное поле
    inputElement.classList.add(this._inputErrorClass);
    // задаем текст ошибки
    errorElement.textContent = errorMessage;
    // вызываем сообщение об ошибке
    errorElement.classList.add(config.errorClass);
  }

  // Функция скрытия ошибки
  _hideInputError = (inputElement) => {
    // Спан поля с ошибкой
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // снимаем выделение с невалидного поля
    inputElement.classList.remove(this._inputErrorClass);
    // скрываем сообщение об ошибке
    errorElement.classList.remove(this._errorClass);
    // очищаем текст ошибки
    errorElement.textContent = '';
  }

  // Проверка поля на валидность
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      // отобразить ошибку, если поле невалидно
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // иначе скрыть ошибку
      this._hideInputError(inputElement);
    }
  }

  // Проверяем все поля на валидность
  _hasInvalidInput = (inputList) => {
    // если есть хотя бы одно невалидное поле
    return inputList.some((inputElement) => {
      // получаем значение true
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton = (buttonElement) => {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = 'true';
  }

  _enableSubmitButton = (buttonElement) => {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = '';
  }

  // Функция изменения активности кнопки
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      //сделаем кнопку неактивной, если поля формы невалидны
      this._disableSubmitButton(buttonElement);
    } else {
      // иначе сделаем кнопку активной
      this._enableSubmitButton(buttonElement);
    }
  }

  // Устанавливаем прослушиватель для всех полей в форме
  _setEventListeners = () => {
    // создаем массив инпутов
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    // кнопка отправки формы
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    // активируем/деактивируем кнопку
    this._toggleButtonState(this._inputList, this._buttonElement);
    // обходим массив
    this._inputList.forEach((inputElement) => {

      // при вводе каждого символа
      inputElement.addEventListener('input', () => {
        // проверяем поле на валидность
        this._checkInputValidity(inputElement);
        // активируем/деактивируем кнопку
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  // Функция валидации
  enableValidation = () => {
      this._setEventListeners(this._formSelector);
  };
  
}