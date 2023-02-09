import './index.css';

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
profilePopup.setEventListeners();

const userInfo = new UserInfo ({nameSelector: '.profile__title', aboutSelector:'.profile__subtitle'});

function renderInitialInfo () {
    const initialInfo = userInfo.getUserInfo();
    formNameElement.value = initialInfo.name;
    formAboutElement.value = initialInfo.about;
}

function openProfilePopup () {
    popupProfileValidator.resetValidation();
    profilePopup.open(); 
    renderInitialInfo();
    // formNameElement.value = userInfo.getUserInfo.name;
    // formAboutElement.value = userInfo.getUserInfo.about;
}

function profileFormSubmitHandler () {
    // evt.preventDefault();
    // profilePopup.setEventListeners()
    userInfo.setUserInfo()
    // profileTitleElement.textContent = formNameElement.value;
    // profileSubtitleElement.textContent = formAboutElement.value;
    profilePopup.close();
}


// Попап создания карточки

const cardPopup = new PopupWithForm ('.popup_type_card', handleCardFormSubmit);
cardPopup.setEventListeners();

function openCardPopup () {
    popupCardValidator.resetValidation();
    cardPopup.open();
    // cardPopup.setEventListeners();
}

function handleCardFormSubmit(event) {
    // event.preventDefault();
    renderCard({ name: cardTitle.value, link: link.value });
    // cardPopup.setEventListeners();
    // event.target.reset();
    cardPopup.close();
}


// Попап с картинкой

const imagePopup = new PopupWithImage ('.popup_type_image')
imagePopup.setEventListeners();

function handleCardClick(name, link) {    
    imagePopup.open(name, link);
}



profileEditButtonElement.addEventListener('click', openProfilePopup);

buttonAddCardElement.addEventListener('click', openCardPopup);
