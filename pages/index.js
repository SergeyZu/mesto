import { buttonCloseList, profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, popupCardElement, buttonAddCardElement, formCardElement, cardTitle, link, config, popupTitle, popupImage, popupImageElement, cardsContainer } from '../utils/constants.js';

import { openPopup, closePopup, closePopupByClickOnOverlay } from '../utils/utils.js';

import { cardsDataElement } from '../utils/cardsData.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js'

import PopupWithForm from '../components/PopupWithForm.js'

import FormValidator from '../components/FormValidator.js';



// // Универсальная функция закрытия попапа
// buttonCloseList.forEach(btn => {
//     const popup = btn.closest('.popup');
//     popup.addEventListener('mousedown', closePopupByClickOnOverlay);
//     btn.addEventListener('click', () => closePopup(popup)); 
// })


// Функция открытия попапа Профиль

const profilePopup = new PopupWithForm ('.popup_type_profile')

function openProfilePopup () {
    popupProfileValidator.resetValidation();
    profilePopup.open();
    profilePopup.setEventListeners();
    // openPopup(popupProfileElement);
    formNameElement.value = profileTitleElement.textContent;
    formAboutElement.value = profileSubtitleElement.textContent;
};

function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = formNameElement.value;
    profileSubtitleElement.textContent = formAboutElement.value;
    closePopup(popupProfileElement);
};


const cardPopup = new PopupWithForm ('.popup_type_card')

function openCardPopup () {
    popupCardValidator.resetValidation();
    cardPopup.open();
    cardPopup.setEventListeners();
    // openPopup(popupCardElement);
};


function handleCardFormSubmit(event) {
    event.preventDefault();
    renderCard({ name: cardTitle.value, link: link.value });
    event.target.reset();
    closePopup (popupCardElement);
};

const imagePopup = new PopupWithImage ('.popup_type_image')

function handleCardClick(name, link) {    
    imagePopup.open(name, link);
    imagePopup.setEventListeners();

}

// function handleCardClick(name, link) {
    
//     popupTitle.textContent = name;
//     popupImage.src = link;
//     popupImage.alt = name;
//     openPopup(popupImageElement);
// }


function createCard(item) {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
};


const cardSection = new Section({ 
    items: cardsDataElement,
    renderer: (item) => {
        renderCard(item);
    }
}, '.cards'
);
cardSection.renderInitialItems();



function renderCard(item) {
const cardItem = createCard(item);
cardSection.addItem(cardItem);
return renderCard;
};




const popupProfile = document.querySelector('.popup__profile-content');
const popupProfileValidator = new FormValidator(config, popupProfile);
popupProfileValidator.enableValidation();


const popupCard = document.querySelector('.popup__card-content');
const popupCardValidator = new FormValidator(config, popupCard);
popupCardValidator.enableValidation();





const popupWithImage = new PopupWithImage(cardsDataElement, popupImageElement)




profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardElement.addEventListener('submit', handleCardFormSubmit);