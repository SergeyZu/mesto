// const popupElement = document.querySelector('popup');
// Класс 'popup' в данном проекте присвоен всем трем модальным окнам для унификации их настроек в CSS.
// Каждому из трех попапов присвоен свой индивидуальный класс и для каждого создана переменная в JS.
// Но, поскольку переменная popupElement в данном файле после объявления нигде не используется, то можно ее удалить без ущерба для функционала.

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
const formNameElement = formProfileElement.querySelector('.popup__field_type_name');

//Поле формы О себе
const formAboutElement = formProfileElement.querySelector('.popup__field_type_about');

//Кнопка редактирования профиля
const profileEditButtonElement = document.querySelector('.profile__edit-button');

//Кнопка закрытия формы
const formProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close-button');



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
const cardTitle = document.querySelector('.popup__field_type_card-title');

//Поле формы Ссылка
const link = document.querySelector('.popup__field_type_link');

// Контейнер для карточек
const cardsContainer = document.querySelector('.cards');


// ПОПАП КАРТИНКА

//Попап
const popupImageElement = document.querySelector('.popup_type_image');

//Заголовок попапа
const popupTitle = popupImageElement.querySelector('.popup__title_type_image');

//Картинка
const popupImage = popupImageElement.querySelector('.popup__image');

//Кнопка закрытия
const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close-button');



//Функция отображения попапа
function openPopup(popupName) {
    popupName.classList.add('popup_opened');
};

//Функция скрытия попапа
function closePopup(popupName) {
    popupName.classList.remove('popup_opened');
};



function openProfilePopup (event) {
    openPopup(popupProfileElement);
    formNameElement.value = profileTitleElement.textContent;
    formAboutElement.value = profileSubtitleElement.textContent;
    popupProfileElement.addEventListener('click', closeProfilePopupByClickOnOverlay);
    document.addEventListener('keyup', closeProfilePopupByEsc); 
};

function closeProfilePopup () {
    closePopup(popupProfileElement);
    popupProfileElement.removeEventListener('click', closeProfilePopupByClickOnOverlay);
    document.removeEventListener('keyup', closeProfilePopupByEsc); 
};

function closeProfilePopupByClickOnOverlay (event, popupName) {
    if (event.target === event.currentTarget) {
        closePopup(popupProfileElement);
    }
};

function closeProfilePopupByEsc (event) {
    if (event.key === 'Escape') {
        closePopup(popupProfileElement);
    }
};

function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = formNameElement.value;
    profileSubtitleElement.textContent = formAboutElement.value;
    closeProfilePopup();
};

function openCardPopup () {
    openPopup(popupCardElement);
    popupCardElement.addEventListener('click', closeCardPopupByClickOnOverlay);
    document.addEventListener('keyup', closeCardPopupByEsc);    
};

function closeCardPopup () {
    closePopup(popupCardElement);
    popupCardElement.removeEventListener('click', closeCardPopupByClickOnOverlay);
    document.removeEventListener('keyup', closeCardPopupByEsc);
};

function closeCardPopupByClickOnOverlay (event, popupName) {
    if (event.target === event.currentTarget) {
        closePopup(popupCardElement);
    }
};

function closeCardPopupByEsc (event) {
    if (event.key === 'Escape') {
        closePopup(popupCardElement);
    }
};

function generateCard(item) {
	
    //Шаблон карточки
    const cardTemplate = document.querySelector('#card-template').content;

    //Карточка
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
	//Заголовок карточки
    const title = cardElement.querySelector('.card__title');
	title.textContent = item.title;

	//Картинка
    const image = cardElement.querySelector('.card__image');
	
    //Корзина
    const trash = cardElement.querySelector('.card__trash');

    //Кнопка Мне нравится
    const like = cardElement.querySelector('.card__like');

    image.src = item.url;
    image.alt = title.textContent;

	const viewImageHandler = function() {
        popupTitle.textContent = title.textContent;
        popupImage.src = item.url;
        popupImage.alt = title.textContent;
        openPopup(popupImageElement);
        popupImageElement.addEventListener('click', closeImagePopupByClickOnOverlay);
        document.addEventListener('keyup', closeImagePopupByEsc);
    }

	trash.addEventListener('click', deleteCardHandler)
	
	like.addEventListener('click', likedCardHandler);

    image.addEventListener('click', viewImageHandler);

	return cardElement;
};

function closeImagePopup() {
    closePopup(popupImageElement);
    document.removeEventListener('keyup', closeImagePopupByEsc);
};

function closeImagePopupByClickOnOverlay (event, popupName) {
    if (event.target === event.currentTarget) {
        closePopup(popupImageElement);
    }
};

function closeImagePopupByEsc (event) {
    if (event.key === 'Escape') {
        closePopup(popupImageElement);
    }
};

function deleteCardHandler(event) {
    event.target.closest('.card').remove();
};

function likedCardHandler(event) {
    event.target.classList.toggle('card__like_clicked');
};
  
function addCard(item) {
    cardsContainer.prepend(generateCard(item));
};
    
function cardFormSubmitHandler(event) {
    event.preventDefault();
    addCard({ title: cardTitle.value, url: link.value })
    cardTitle.value = '';
    link.value = '';
    closeCardPopup ()
};

cardsDataElement.forEach(function(item) {
    addCard(item);
});



profileEditButtonElement.addEventListener('click', openProfilePopup);

formProfileCloseButtonElement.addEventListener('click', closeProfilePopup);

formProfileElement.addEventListener('submit', profileFormSubmitHandler);

buttonAddCardElement.addEventListener('click', openCardPopup);

formCardCloseButtonElement.addEventListener('click', closeCardPopup);

popupImageCloseButtonElement.addEventListener('click', closeImagePopup);

formCardElement.addEventListener('submit', cardFormSubmitHandler);