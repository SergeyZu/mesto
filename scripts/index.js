import { profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, formProfileCloseButtonElement, popupCardElement, buttonAddCardElement, formCardCloseButtonElement, formCardElement, cardTitle, link, config, popupTitle, popupImage, popupImageElement, popupImageCloseButtonElement } from './constants.js'

import { openPopup, closePopup, closePopupByClickOnOverlay } from './functions.js'

import Card from './Card.js'

import { cardsDataElement } from './cardsData.js'

import FormValidator from './FormValidator.js'




// Функция открытия попапа Профиль
function openProfilePopup () {
    openPopup(popupProfileElement);
    formNameElement.value = profileTitleElement.textContent;
    formAboutElement.value = profileSubtitleElement.textContent;
};

// Функция закрытия попапа Профиль
function closeProfilePopup () {
    closePopup(popupProfileElement);
};

function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = formNameElement.value;
    profileSubtitleElement.textContent = formAboutElement.value;
    closeProfilePopup();
};

function openCardPopup () {
    openPopup(popupCardElement);
    // disableSubmitButton(buttonElement);
};

function closeCardPopup () {
    closePopup(popupCardElement);
};

function closeImagePopup() {
    closePopup(popupImageElement);
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
    document.querySelector('.cards').prepend(cardItem);
};
 
function cardFormSubmitHandler(event) {
    event.preventDefault();
    rendererCard({ title: cardTitle.value, url: link.value });
    event.target.reset();
    closeCardPopup ()
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

formProfileCloseButtonElement.addEventListener('click', closeProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardCloseButtonElement.addEventListener('click', closeCardPopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);

popupProfileElement.addEventListener('click', closePopupByClickOnOverlay);

popupCardElement.addEventListener('click', closePopupByClickOnOverlay);

popupImageElement.addEventListener('click', closePopupByClickOnOverlay);

popupImageCloseButtonElement.addEventListener('click', closeImagePopup);