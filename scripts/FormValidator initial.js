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
    errorElement.classList.add(this._errorClass);
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
  _hasInvalidInput = () => {
    // если есть хотя бы одно невалидное поле
    return this._inputList.some((inputElement) => {
      // получаем значение true
      return !inputElement.validity.valid;
    });
  }
  
  _disableSubmitButton = () => {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableSubmitButton = () => {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // Функция изменения активности кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      //сделаем кнопку неактивной, если поля формы невалидны
      this._disableSubmitButton();
    } else {
      // иначе сделаем кнопку активной
      this._enableSubmitButton();
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  // Устанавливаем прослушиватель для всех полей в форме
  _setEventListeners = () => {
    // создаем массив инпутов
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));

    // кнопка отправки формы
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);

    // активируем/деактивируем кнопку
    this._toggleButtonState();
    // обходим массив
    this._inputList.forEach((inputElement) => {

      // при вводе каждого символа
      inputElement.addEventListener('input', () => {
        // проверяем поле на валидность
        this._checkInputValidity(inputElement);
        // активируем/деактивируем кнопку
        this._toggleButtonState();
      });
    });
  }

  // Функция валидации
  enableValidation = () => {
      this._setEventListeners();
  };
  
}