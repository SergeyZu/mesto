import { profileTitleElement, profileSubtitleElement, popupProfileElement, formProfileElement, formNameElement, formAboutElement, profileEditButtonElement, formProfileCloseButtonElement, popupCardElement, buttonAddCardElement, formCardCloseButtonElement, formCardElement, cardTitle, link, config } from './constants.js'

import { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc, disableSubmitButton } from './functions.js'

import { addCard } from './Card.js'


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
    const buttonElement = formCardElement.querySelector(config.submitButtonSelector);
    disableSubmitButton(buttonElement);
    document.addEventListener('keyup', closePopupByEsc);    
};

function closeCardPopup () {
    closePopup(popupCardElement);
};

// function generateCard(item) {
	
//     //Шаблон карточки
//     const cardTemplate = document.querySelector('#card-template').content;

//     //Карточка
// 	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
// 	//Заголовок карточки
//     const title = cardElement.querySelector('.card__title');
// 	title.textContent = item.title;

// 	//Картинка
//     const image = cardElement.querySelector('.card__image');
	
//     //Корзина
//     const trash = cardElement.querySelector('.card__trash');

//     //Кнопка Мне нравится
//     const like = cardElement.querySelector('.card__like');

//     image.src = item.url;
//     image.alt = title.textContent;

// 	const viewImageHandler = function() {
//         popupTitle.textContent = title.textContent;
//         popupImage.src = item.url;
//         popupImage.alt = title.textContent;
//         openPopup(popupImageElement);
//     }

	// trash.addEventListener('click', deleteCardHandler)
	
	// like.addEventListener('click', likedCardHandler);

    // image.addEventListener('click', viewImageHandler);

// 	return cardElement;
// };

// function closeImagePopup() {
//     closePopup(popupImageElement);
// };

// function deleteCardHandler(event) {
//     event.target.closest('.card').remove();
// };

// function likedCardHandler(event) {
//     event.target.classList.toggle('card__like_clicked');
// };
  
// function addCard(item) {
//     cardsContainer.prepend(generateCard(item));
// };
    
function cardFormSubmitHandler(event) {
    event.preventDefault();
    addCard({ title: cardTitle.value, url: link.value });
    event.target.reset();
    closeCardPopup ()
};



profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileCloseButtonElement.addEventListener('click', closeProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardCloseButtonElement.addEventListener('click', closeCardPopup);

// popupImageCloseButtonElement.addEventListener('click', closeImagePopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);

popupProfileElement.addEventListener('click', closePopupByClickOnOverlay);

popupCardElement.addEventListener('click', closePopupByClickOnOverlay);

// popupImageElement.addEventListener('click', closePopupByClickOnOverlay);