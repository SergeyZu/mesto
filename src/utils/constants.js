// // Коллекция кнопок закрытия попапа
// export const buttonCloseList = document.querySelectorAll('.popup__close-button');


// ПОПАП РЕДАКТИРОВАНИЯ ПРОФИЛЯ

//Имя пользователя, отображаемое в профиле
const profileTitleElement = document.querySelector('.profile__title');

//Информация пользователя о себе, отображаемая в профиле
const profileSubtitleElement = document.querySelector('.profile__subtitle');

//Попап
const popupProfileElement = document.querySelector('.popup_type_profile');

//Форма
const formProfileElement = document.querySelector('.popup__profile-content');

//Поле формы Имя
const formNameElement = formProfileElement.querySelector('.popup__input_type_name');

//Поле формы О себе
const formAboutElement = formProfileElement.querySelector('.popup__input_type_about');

//Кнопка редактирования профиля
const profileEditButtonElement = document.querySelector('.profile__edit-button');

//Кнопка закрытия формы
const formProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close-button');


export { profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, formProfileCloseButtonElement };



// ПОПАП ИЗМЕНЕНИЯ АВАТАРА

// Кнопка изменения аватара
const buttonEditAvatarElement = document.querySelector('.profile__avatar-edit-button');


export { buttonEditAvatarElement };



//ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ

//Попап
const popupCardElement = document.querySelector('.popup_type_card');

//Кнопка открытия попапа
const buttonAddCardElement = document.querySelector('.profile__add-button');

//Кнопка закрытия попапа
const formCardCloseButtonElement = popupCardElement.querySelector('.popup__close-button');

//Форма
const formCardElement = document.querySelector('.popup__card-content');

//Поле формы Заголовок
const cardTitle = document.querySelector('.popup__input_type_card-title');

//Поле формы Ссылка
const link = document.querySelector('.popup__input_type_link');

// Контейнер для карточек
const cardsContainer = document.querySelector('.cards');


export { popupCardElement, buttonAddCardElement, formCardCloseButtonElement, formCardElement, cardTitle, link, cardsContainer };



// ПОПАП КАРТИНКА

//Попап
const popupImageElement = document.querySelector('.popup_type_image');

//Заголовок попапа
const popupTitle = popupImageElement.querySelector('.popup__title_type_image');

//Картинка
const popupImage = popupImageElement.querySelector('.popup__image');

//Кнопка закрытия
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close-button');


export { popupImageElement, popupTitle, popupImage, popupImageCloseButtonElement };



export const config = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__form-error_active'
}