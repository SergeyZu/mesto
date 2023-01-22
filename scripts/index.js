import { buttonCloseList, profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, popupCardElement, buttonAddCardElement, formCardElement, cardTitle, link, config, popupTitle, popupImage, popupImageElement, cardsContainer } from './constants.js'

import { openPopup, closePopup, closePopupByClickOnOverlay } from './functions.js'

import Card from './Card.js'

import { cardsDataElement } from './cardsData.js'

import FormValidator from './FormValidator.js'

// Универсальная функция закрытия попапа
buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    popup.addEventListener('mousedown', closePopupByClickOnOverlay);
    btn.addEventListener('click', () => closePopup(popup)); 
  })


// Функция открытия попапа Профиль
function openProfilePopup () {
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

function cardFormSubmitHandler(event) {
    event.preventDefault();
    rendererCard({ name: cardTitle.value, link: link.value });
    event.target.reset();
    closePopup (popupCardElement);
};

cardsDataElement.forEach((item) => {
    rendererCard(item);
});



const popupProfile = document.querySelector('.popup__profile-content');
const popupProfileValidator = new FormValidator(config, popupProfile);
popupProfileValidator.enableValidation();


const popupCard = document.querySelector('.popup__card-content');
const popupCardValidator = new FormValidator(config, popupCard);
popupCardValidator.enableValidation();



profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);