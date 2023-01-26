import Card from '../components/Card.js';
import { popupTitle, popupImage, popupImageElement, cardsContainer, cardTitle, link, popupCardElement } from '../utils/constants.js';
import { cardsDataElement } from '../data/cardsData.js';

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

function cardFormSubmitHandler(event) {
    event.preventDefault();
    rendererCard({ name: cardTitle.value, link: link.value });
    event.target.reset();
    closePopup (popupCardElement);
};

cardsDataElement.forEach((item) => {
    rendererCard(item);
});


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

function rendererCard(item) {
    const cardItem = createCard(item);
    cardsContainer.prepend(cardItem);
};

export { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc, rendererCard, createCard, cardFormSubmitHandler };
// export { rendererCard, createCard, cardFormSubmitHandler };