import { profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, formProfileCloseButtonElement, popupCardElement, buttonAddCardElement, formCardCloseButtonElement, formCardElement, cardTitle, link, config } from './constants.js'

import { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc } from './functions.js'

import Card from './сard.js'

import { cardsDataElement } from './cardsData.js'

import FormValidator from './validate.js'




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
    disableSubmitButton(buttonElement);
};

function closeCardPopup () {
    closePopup(popupCardElement);
};

function addCard(item) {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
};

function cardFormSubmitHandler(event) {
    event.preventDefault();
    addCard({ title: cardTitle.value, url: link.value });
    event.target.reset();
    closeCardPopup ()
};

cardsDataElement.forEach((item) => {
    addCard(item);
});







// function createCard(item) {
//     const card = new Card(item, '#card-template');
//     const cardElement = card.generateCard();
//     return cardElement;
// };

// function rendererCard(item, cardElement) {
//         createCard(item);
//         document.querySelector('.cards').prepend(cardElement);
// };
 
// function cardFormSubmitHandler(event) {
//     event.preventDefault();
//     rendererCard({ title: cardTitle.value, url: link.value });
//     event.target.reset();
//     closeCardPopup ()
// };

// cardsDataElement.forEach((item) => {
//     rendererCard(item);
// });







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