import './index.css';

import { formNameElement, formAboutElement, profileEditButtonElement, buttonAddCardElement, buttonEditAvatarElement, config} from '../utils/constants.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import FormValidator from '../components/FormValidator.js';

import UserInfo from '../components/UserInfo.js';

import Api from '../components/Api.js';


const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-61',
    headers: {
        authorization: 'e4cf1203-298c-4ad3-b815-4ccead265bb8',
        'Content-Type': 'application/json'
    }
}


const api = new Api(apiConfig);

let userId;

// Получаем данные пользователя и массив карточек с сервера
Promise.all([api.getUserData(), api.getInitialCards()])
    .then(res => {
        const [userData, initialCards] = res;
        console.log(res);
        userId = userData._id;
        userInfo.setUserInfo(userData);
        cardSection.renderInitialItems(initialCards);
    })
    .catch((err) => {
        console.log(err);
    });


// Секция
const cardSection = new Section({  
    renderer: renderInitialCard
}, '.cards'
);

// Карточка
function createCard(data) {

    // Создание экземпляра карточки
    const card = new Card(

        data,
        '#card-template',
        handleCardClick,
        handleTrashClick,
        setCardLike,
        removeCardLike,
        userId)    

    // Лайк карточки
    function setCardLike() {
        api.setLike(card.getId())
                .then(res => {
                    console.log(res);
                    card.setLikesQty(res);
                    card.setIconLiked();
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    // Дизлайк карточки
    function removeCardLike() {
        api.removeLike(card.getId())
                .then(res => {
                    console.log(res);
                    card.setLikesQty(res);
                    card.setIconDisliked();
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    const cardElement = card.generateCard(userId);
    return cardElement;

};

// Попап подтверждения удаления карточки
const cardDeletePopup = new PopupWithConfirmation ('.popup_type_delete-card', confirmCardDelete);
cardDeletePopup.setEventListeners();

function handleTrashClick(element, cardId) {
    cardDeletePopup.open(element, cardId);
}

function confirmCardDelete(element, cardId) {
    return api.deleteCard(cardId)
    .then(res => {
        console.log('res =>', res);
        element.remove();
        cardDeletePopup.close();
    })
    .catch((err) => {
        console.log(err);
    });
}


function renderInitialCard(data) {
    const cardItem = createCard(data);
    cardSection.addInitialItem(cardItem);
};

function renderNewCard(data) {
    const cardItem = createCard(data);
    cardSection.addUserItem(cardItem);
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


const userInfo = new UserInfo ({nameSelector: '.profile__title', aboutSelector:'.profile__subtitle', avatarSelector: '.profile__avatar'});


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
    profilePopup.renderLoading(true);
    api.setUserData(inputValues)    
        .then(res => {
            userInfo.setUserInfo(res);
            profilePopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            profilePopup.renderLoading(false)
        })
}


// Попап редактирования аватара профиля

const avatarPopup = new PopupWithForm ('.popup_type_avatar', handleAvatarFormSubmit);
avatarPopup.setEventListeners();

function openAvatarPopup () {
    popupAvatarValidator.resetValidation();
    avatarPopup.open();
}

function handleAvatarFormSubmit(data) {
    avatarPopup.renderLoading(true);
    return api.changeAvatar(data.avatar)
        .then(res => {
            userInfo.setUserInfo(res);
            console.log(res)
            avatarPopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            avatarPopup.renderLoading(false)
        })
}


// Попап создания карточки

const cardPopup = new PopupWithForm ('.popup_type_card', handleCardFormSubmit);
cardPopup.setEventListeners();

function openCardPopup () {
    popupCardValidator.resetValidation();
    cardPopup.open();
}

function handleCardFormSubmit(data) {
    cardPopup.renderLoading(true);
    api.addCard(data)
        .then(res => {
            renderNewCard(res);
            cardPopup.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            cardPopup.renderLoading(false)
        })
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