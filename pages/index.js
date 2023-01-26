import { buttonCloseList, profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, popupCardElement, buttonAddCardElement, formCardElement, cardTitle, link, config, popupTitle, popupImage, popupImageElement, cardsContainer } from '../utils/constants.js';

import { openPopup, closePopup, closePopupByClickOnOverlay, cardFormSubmitHandler, rendererCard } from '../utils/utils.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js'

import { cardsDataElement } from '../data/cardsData.js';

import FormValidator from '../components/FormValidator.js';

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

// function cardFormSubmitHandler(event) {
//     event.preventDefault();
//     rendererCard({ name: cardTitle.value, link: link.value });
//     event.target.reset();
//     closePopup (popupCardElement);
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


const cardSection = new Section({ 
        items: cardsDataElement,
        renderer: () => {
            createCard(item);
        }
    }, 
    cardsContainer
);


profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);