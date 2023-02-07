import '../pages/index.css';

import { profileTitleElement, profileSubtitleElement, formNameElement, formAboutElement, profileEditButtonElement, buttonAddCardElement, cardTitle, link, config, } from '../utils/constants.js';

import { cardsDataElement } from '../utils/cardsData.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js'

import PopupWithForm from '../components/PopupWithForm.js'

import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';



// Секция

const cardSection = new Section({ 
    items: cardsDataElement,
    renderer: (item) => {
        renderCard(item);
    }
}, '.cards'
);
cardSection.renderInitialItems();


// Карточка

function createCard(item) {
    const card = new Card(item, '#card-template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
};

function renderCard(item) {
const cardItem = createCard(item);
cardSection.addItem(cardItem);
return renderCard;
};


// Валидатор профиля

const popupProfile = document.querySelector('.popup__profile-content');
const popupProfileValidator = new FormValidator(config, popupProfile);
popupProfileValidator.enableValidation();


// Валидатор карточки

const popupCard = document.querySelector('.popup__card-content');
const popupCardValidator = new FormValidator(config, popupCard);
popupCardValidator.enableValidation();



// Попап настройки профиля

const profilePopup = new PopupWithForm ('.popup_type_profile', profileFormSubmitHandler);
const userInfo = new UserInfo ({titleSelector: '.profile__title', subtitleSelector:'.profile__subtitle'});

function openProfilePopup () {
    popupProfileValidator.resetValidation();
    profilePopup.open();
    profilePopup.setEventListeners();
    userInfo.getUserInfo()
    // formNameElement.value = profileTitleElement.textContent;
    // formAboutElement.value = profileSubtitleElement.textContent;
}

function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profilePopup.getInputValues()
    userInfo.setUserInfo()
    // profileTitleElement.textContent = formNameElement.value;
    // profileSubtitleElement.textContent = formAboutElement.value;
    profilePopup.close();
}


// Попап создания карточки

const cardPopup = new PopupWithForm ('.popup_type_card', handleCardFormSubmit);

function openCardPopup () {
    popupCardValidator.resetValidation();
    cardPopup.open();
    cardPopup.setEventListeners();
}

function handleCardFormSubmit(event) {
    event.preventDefault();
    renderCard({ name: cardTitle.value, link: link.value });
    cardPopup.getInputValues();
    event.target.reset();
    cardPopup.close();
}


// Попап с картинкой

const imagePopup = new PopupWithImage ('.popup_type_image')

function handleCardClick(name, link) {    
    imagePopup.open(name, link);
    imagePopup.setEventListeners();
}



profileEditButtonElement.addEventListener('click', openProfilePopup);

buttonAddCardElement.addEventListener('click', openCardPopup);
