import Card from '../components/Card.js';
import { popupTitle, popupImage, popupImageElement, cardsContainer, cardTitle, link, popupCardElement } from '../utils/constants.js';
import { cardsDataElement } from './cardsData.js';


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

export { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc };
