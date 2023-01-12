import { config } from './constants.js'

// Функция отображения попапа
function openPopup(popupName) {
    popupName.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByEsc); 
}

// Функция закрытия попапа 
function closePopup(popupName) {
    popupName.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByEsc);
}

// Функция закрытия попапа по клику на оверлей
function closePopupByClickOnOverlay (event) {
    if (event.target === event.currentTarget) {
        closePopup(event.target);
    }
}

// Функция закрытия попапа через ESC
function closePopupByEsc (event) {
    if (event.key === 'Escape' ) {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

const disableSubmitButton = (buttonElement) => {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
}
    


export { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc, disableSubmitButton };