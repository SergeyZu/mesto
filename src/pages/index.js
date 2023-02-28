import './index.css';

import { formNameElement, formAboutElement, profileEditButtonElement, buttonAddCardElement, buttonEditAvatarElement, config, } from '../utils/constants.js';

import { cardsDataElement } from '../utils/cardsData.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import FormValidator from '../components/FormValidator.js';

import UserInfo from '../components/UserInfo.js';

import Api from '../components/Api.js';



// const api = new Api(config)

const api = new Api(
    {
        url: 'https://nomoreparties.co/v1/cohort-60/',
        token: '8e181f4a-8318-4b8b-ab26-7884d8331201'
    }
)


// Данные пользователя с сервера
api.getUserData()
    .then((data) => {
        const userData = data;
        console.log(userData);
    })
    .then((data) => {

    })




api.setUserData({
    name: 'Charles Chaplin',
    about: 'Film actor, film director, screenwriter, composer, producer and editor'
});

// api.addCard();

// api.deleteCard()

// Секция

api.getCards()
    .then((data) => {
        const cards = data;
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


// Валидатор аватара
const popupAvatar = document.querySelector('.popup__avatar-content');
const popupAvatarValidator = new FormValidator(config, popupAvatar);
popupAvatarValidator.enableValidation();


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


// Попап редактирования аватара профиля

const avatarPopup = new PopupWithForm ('.popup_type_avatar');
avatarPopup.setEventListeners();

function openAvatarPopup () {
    popupCardValidator.resetValidation();
    avatarPopup.open();
}

// function avatarFormSubmitHandler()




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

buttonEditAvatarElement.addEventListener('click', openAvatarPopup);
