import './index.css';

import { formNameElement, formAboutElement, profileEditButtonElement, buttonAddCardElement, config, } from '../utils/constants.js';

import { cardsDataElement } from '../utils/cardsData.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import FormValidator from '../components/FormValidator.js';

import UserInfo from '../components/UserInfo.js';

// import { getUserData } from '../components/Api.js';

// import { getCards } from '../components/Api.js';

import Api from '../components/Api.js';

const api = new Api(config)


api.getUserData()
    .then((result) => {
        const userData = result;
        console.log(userData);
    });



api.setUserData();

// api.addCard();

// api.removeCard();

// Секция

api.getCards()
    .then((result) => {
        const cards = result;
        console.log(cards);
        cardSection.renderInitialItems(cards);
    });

const cardSection = new Section({ 

    renderer: (item) => {
        renderCard(item);
    }
}, '.cards'
);



// Карточка

function createCard(item) {
    const card = new Card(item, '#card-template', handleCardClick, confirmCardDelete);
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
}

function profileFormSubmitHandler (inputValues) {
    userInfo.setUserInfo(inputValues)
    profilePopup.close();
}


// Попап создания карточки

const cardPopup = new PopupWithForm ('.popup_type_card', handleCardFormSubmit);
cardPopup.setEventListeners();

function openCardPopup () {
    popupCardValidator.resetValidation();
    cardPopup.open();
}

function handleCardFormSubmit(inputValues) {
    renderCard(inputValues);
    cardPopup.close();
}


// Попап удаления карточки

const cardDeletePopup = new PopupWithConfirmation ('.popup_type_delete-card', confirmCardDelete);
cardDeletePopup.setEventListeners();

function confirmCardDelete() {
    cardDeletePopup.open();
}




// Попап с картинкой

const imagePopup = new PopupWithImage ('.popup_type_image')
imagePopup.setEventListeners();

function handleCardClick(name, link) {    
    imagePopup.open(name, link);
}



profileEditButtonElement.addEventListener('click', openProfilePopup);

buttonAddCardElement.addEventListener('click', openCardPopup);
