import { buttonCloseList, profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, popupCardElement, buttonAddCardElement, formCardElement, cardTitle, link, config, popupTitle, popupImage, popupImageElement, cardsContainer } from '../utils/constants.js';

import { openPopup, closePopup, closePopupByClickOnOverlay } from '../utils/utils.js';

import { cardsDataElement } from '../utils/cardsData.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js'

import PopupWithForm from '../components/PopupWithForm.js'

// import Popup from '../components/Popup.js'

import FormValidator from '../components/FormValidator.js';

// Универсальная функция закрытия попапа
buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closePopupByClickOnOverlay);
    btn.addEventListener('click', () => closePopup(popup)); 
})


// Функция открытия попапа Профиль
function openProfilePopup () {
    popupProfileValidator.resetValidation();
    openPopup(popupProfileElement);
    formNameElement.value = profileTitleElement.textContent;
    formAboutElement.value = profileSubtitleElement.textContent;
};

function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = formNameElement.value;
    profileSubtitleElement.textContent = formAboutElement.value;
    closePopup(popupProfileElement);
};

function openCardPopup () {
    popupCardValidator.resetValidation();
    openPopup(popupCardElement);
};


function cardFormSubmitHandler(event) {
    event.preventDefault();
    rendererCard({ name: cardTitle.value, link: link.value });
    event.target.reset();
    closePopup (popupCardElement);
};

cardsDataElement.forEach((item) => {
    rendererCard(item);
});


function handleCardClick(name, link) {
    
    popupTitle.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
    openPopup(popupImageElement);
}


function createCard(item) {
    const card = new Card(item, '#card-template', handleCardClick );
    const cardElement = card.generateCard();
    return cardElement;
};

function rendererCard(item) {
    const cardItem = createCard(item);
    cardsContainer.prepend(cardItem);
};


const popupProfile = document.querySelector('.popup__profile-content');
const popupProfileValidator = new FormValidator(config, popupProfile);
popupProfileValidator.enableValidation();


const popupCard = document.querySelector('.popup__card-content');
const popupCardValidator = new FormValidator(config, popupCard);
popupCardValidator.enableValidation();


// const card = new Card(item, '#card-template', handleCardClick );


export const cardSection = new Section({ 
        items: cardsDataElement,
        renderer: () => {
            createCard(item);
        }
    }, 
    cardsContainer
);


const popupWithImage = new PopupWithImage(cardsDataElement, popupImageElement)



profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);