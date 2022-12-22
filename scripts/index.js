// const popupElement = document.querySelector('popup');
// Класс 'popup' в данном проекте присвоен всем трем модальным окнам для унификации их настроек в CSS.
// Каждому из трех попапов присвоен свой индивидуальный класс и для каждого создана переменная в JS.
// Увидел, что переменная popupElement в данном файле после объявления нигде не используется, удаляю ее.

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


// Функция отображения попапа
function openPopup(popupName) {
    popupName.classList.add('popup_opened');
    document.addEventListener('keyup', closePopupByEsc); 
}

// Функция закрытия попапа 
function closePopup(popupName) {
    popupName.classList.remove('popup_opened');
    document.removeEventListener('keyup', closePopupByEsc);
}

// Функция закрытия попапа по клику на оверлей
function closePopupByClickOnOverlay (event) {
    if (event.target === event.currentTarget) {
        closePopup(event.target.closest('.popup_opened'));
    }
}

// Функция закрытия попапа через ESC
function closePopupByEsc (event) {
    if (event.key === 'Escape' ) {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

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
        document.addEventListener('keyup', closePopupByEsc);
    }

	trash.addEventListener('click', deleteCardHandler)
	
	like.addEventListener('click', likedCardHandler);

    image.addEventListener('click', viewImageHandler);

	return cardElement;
};

function closeImagePopup() {
    closePopup(popupImageElement);
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
    addCard({ title: cardTitle.value, url: link.value });
    event.target.reset();
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

popupProfileElement.addEventListener('click', closePopupByClickOnOverlay);

popupCardElement.addEventListener('click', closePopupByClickOnOverlay);

popupImageElement.addEventListener('click', closePopupByClickOnOverlay);