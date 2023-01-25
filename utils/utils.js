import Card from '../components/Card.js'
import { popupTitle, popupImage, popupImageElement } from '../utils/constants.js'

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

function viewImageHandler(name, link) {
    popupTitle.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
    openPopup(popupImageElement);
}

function createCard(item) {
    const card = new Card(item, '#card-template', viewImageHandler );
    const cardElement = card.generateCard();
    return cardElement;
};

export { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc, createCard };