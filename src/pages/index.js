import './index.css';

import { formNameElement, formAboutElement, profileEditButtonElement, buttonAddCardElement, buttonEditAvatarElement, buttonDeleteConfirmationElement, config} from '../utils/constants.js';

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

// const apiConfig2 = {
//     baseUrl: 'https://nomoreparties.co/v1/cohort-60',
//     headers: {
//         authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201',
//         'Content-Type': 'application/json'
//     }
// }

// const apiConfig3 = {
//     baseUrl: 'https://nomoreparties.co/v1/cohort-59',
//     headers: {
//         authorization: '22a7889f-111c-4ac8-a920-423d2b40567f',
//         'Content-Type': 'application/json'
//     }
// }


const api = new Api(apiConfig);



let userId;

// Получаем данные пользователя и массив карточек с сервера
Promise.all([api.getUserData(), api.getInitialCards()])
    .then(res => {
        const [userData, initialCards] = res;
        console.log(res);
        userId = userData._id;
        userInfo.setUserInfo(userData);

        // userInfo.setUserInfo(userData.name, userData.about);
        cardSection.renderInitialItems(initialCards);
    })


// Секция
const cardSection = new Section({ 
    renderer: (data) => {
        renderInitialCard(data);
    }
}, '.cards'
);


// Отправляем на сервер инфо о добавлении лайка
// api.setLike()
//     .then(res => {
//         console.log(res)
//     })

let newCard
// Карточка
function createCard(data) {

    // handleLikeClick ((card) => {
    //     if (card.isLiked()) {
    //         api.removeLike(card)
    //             .then(res => {
    //                 console.log(res)
    //             })
    //     } else {
    //         api.setLike(card)
    //             .then(res => {
    //                 console.log(res)
    //             })
    //     }
    // })

    // const card = new Card(
    //     data,
    //     '#card-template',
    //     handleCardClick,
    //     handleTrashClick,
    //     userId)
    //     // handleLikeClick);
    newCard = new Card(
        data,
        '#card-template',
        handleCardClick,
        handleTrashClick,
        userId)

    // const cardElement = card.generateCard(userId);
    const cardElement = newCard.generateCard(userId);
    return cardElement;
};


function renderInitialCard(data) {
    const cardItem = createCard(data);
    cardSection.addInitialItem(cardItem);
    return renderInitialCard;
};

function renderNewCard(data) {
    const cardItem = createCard(data);
    cardSection.addUserItem(cardItem);
    return renderNewCard;
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

// const userInfo = new UserInfo ({nameSelector: '.profile__title', aboutSelector:'.profile__subtitle'});

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
    api.setUserData(inputValues)
        .then(res => {
            userInfo.setUserInfo(res)
            profilePopup.close();

        })
    
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

function handleCardFormSubmit(data) {
    api.addCard(data)
        .then(res => {
            renderNewCard(res)
        })
    cardPopup.close();
}


// Попап подтверждения удаления карточки

const cardDeletePopup = new PopupWithConfirmation ('.popup_type_delete-card', confirmCardDelete);
cardDeletePopup.setEventListeners();


function handleTrashClick(cardId) {
    cardDeletePopup.open(cardId);
}

function confirmCardDelete(cardId) {
    api.deleteCard(cardId)
    .then(res => {
        console.log('res =>', res)
        newCard.deleteCardFromDom()
        // card.deleteCardFromDom()
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

// buttonDeleteConfirmationElement.addEventListener('click', confirmCardDelete);
