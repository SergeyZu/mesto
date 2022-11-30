//Функция отображения попапа
const openPopup = function(popupName) {
    popupName.classList.add('popup_opened');
}

//Функция скрытия попапа
const closePopup = function(popupName) {
    popupName.classList.remove('popup_opened'); 
}


//-------------------------------------------------------------------------

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
const nameInputElement = formProfileElement.querySelector('.popup__field_type_name');

//Поле формы О себе
const aboutInputElement = formProfileElement.querySelector('.popup__field_type_about');

//Кнопка Сохранить
const saveButtonElement = formProfileElement.querySelector('.popup__save-button');



//Открытие попапа редактирования профиля
function openProfilePopup () {
    openPopup(popupProfileElement);
    nameInputElement.value = profileTitleElement.textContent;
    aboutInputElement.value = profileSubtitleElement.textContent;
}

//Закрытие попапа редактирования профиля
function closeProfilePopup () {
    closePopup(popupProfileElement);
};
   
//Функция отправки формы
function profileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = nameInputElement.value;
    profileSubtitleElement.textContent = aboutInputElement.value;
    closeProfilePopup();
}


//Кнопка редактирования профиля / клик
const profileEditButtonElement = document.querySelector('.profile__edit-button');
profileEditButtonElement.addEventListener('click', openProfilePopup);

//Кнопка закрытия формы / клик
const formProfileCloseButtonElement = popupProfileElement.querySelector('.popup__close-button');
formProfileCloseButtonElement.addEventListener('click', closeProfilePopup);

//Отправка формы
formProfileElement.addEventListener('submit', profileFormSubmitHandler);



//-------------------------------------------------------------------------

//ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ

//Поле формы Название
//const cardTitleInputElement = formCardElement.querySelector('.popup__field_type_title'); 

//Поле формы Ссылка на картинку
//const cardLinkInputElement = formCardElement.querySelector('.popup__field_type_link');

//Кнопка Создать
//const createButtonElement = formCardElement.querySelector('.popup__create-button');







//Попап
const popupCardElement = document.querySelector('.popup_type_card');













function openCardPopup () {
    openPopup(popupCardElement);
}

function closeCardPopup () {
    closePopup(popupCardElement);
};



//Кнопка добавления карточки / клик
const addCardButtonElement = document.querySelector('.profile__add-button');
addCardButtonElement.addEventListener('click', openCardPopup);

//Кнопка закрытия формы / клик
const formCardCloseButtonElement = popupCardElement.querySelector('.popup__close-button');
formCardCloseButtonElement.addEventListener('click', closeCardPopup);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Массив данных карточек
const cardsDataElement = [
	{
    	url: './images/card_altai.jpg', 
        title: 'Алтай'
    },
    {
        url: './images/card_dombai.jpg', 
        title: 'Домбай'
    },
    {
        url: './images/card_kamchatka.jpg', 
        title: 'Камчатка'
    },
    {
        url: './images/card_baikal.jpg', 
        title: 'Байкал'
    },
    {
        url: './images/card_elbrus.jpg', 
        title: 'Эльбрус'
    },
    {
        url: './images/card_petropavlovsk.jpg', 
        title: 'Петропавловск-Камчатский'
    }
];

// Дом узлы

const cardsContainer = document.querySelector('.cards');
const formCardElement = document.querySelector('.popup__card-content');
const cardTitle = document.querySelector('.popup__field_type_card-title');
const link = document.querySelector('.popup__field_type_link');


function generateCard(item) {
	const cardTemplate = document.querySelector('#card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
	const title = cardElement.querySelector('.card__title');
	title.textContent = item.title;

	const image = cardElement.querySelector('.card__image');
	image.src = item.url;

	const trash = cardElement.querySelector('.card__trash');
	trash.addEventListener('click', deleteCardHandler)

	const like = cardElement.querySelector('.card__like');
	like.addEventListener('click', likedCardHandler)

	return cardElement;
}

function deleteCardHandler(event) {
  event.target.closest('.card').remove();
}

function likedCardHandler(event) {
  event.target.closest('.card__like').classList.toggle('card__liked');
}

// Добавление карточки

function addCard(item) {
    cardsContainer.prepend(generateCard(item));
  };
  
  
  function cardFormSubmitHandler(event) {
    event.preventDefault();
    addCard({ title: cardTitle.value, url: link.value })
    cardTitle.value = '';
    link.value = ''
  };
  
  
  
  // Рендер всех карточек
  
  formCardElement.addEventListener('submit', cardFormSubmitHandler);
  
  cardsDataElement.forEach(function(item) {
    addCard(item);
  });