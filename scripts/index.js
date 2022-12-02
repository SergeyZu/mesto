//Функция отображения попапа
function openPopup(popupName) {
    popupName.classList.add('popup_opened');
}

//Функция скрытия попапа
function closePopup(popupName) {
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


//Попап
const popupCardElement = document.querySelector('.popup_type_card');


function openCardPopup () {
    openPopup(popupCardElement);
}

//Кнопка открытия попапа / клик
const addCardButtonElement = document.querySelector('.profile__add-button');
addCardButtonElement.addEventListener('click', openCardPopup);


function closeCardPopup () {
    closePopup(popupCardElement);
};

//Кнопка закрытия попапа / клик
const formCardCloseButtonElement = popupCardElement.querySelector('.popup__close-button');
formCardCloseButtonElement.addEventListener('click', closeCardPopup);


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
    image.alt = title.textContent;

	const trash = cardElement.querySelector('.card__trash');
	trash.addEventListener('click', deleteCardHandler)

	const like = cardElement.querySelector('.card__like');
	like.addEventListener('click', likedCardHandler);

    const popupImageElement = document.querySelector('.popup_type_image');
    const viewImageHandler = function() {
        const popupTitle = popupImageElement.querySelector('.popup__title_type_image');
        popupTitle.textContent = title.textContent;
        const popupImage = popupImageElement.querySelector('.popup__image');
        popupImage.src = item.url;
        popupImage.alt = title.textContent;
        openPopup(popupImageElement);
    }

    image.addEventListener('click', viewImageHandler);

    const closeImagePopup = function () {
        closePopup(popupImageElement);
    };
    
    const popupImageCloseButtonElement = popupImageElement.querySelector('.popup__close-button');
    popupImageCloseButtonElement.addEventListener('click', closeImagePopup);

	return cardElement;
}


function deleteCardHandler(event) {
  event.target.closest('.card').remove();
}

function likedCardHandler(event) {
  event.target.classList.toggle('card__like_clicked');
}

// Добавление карточки
const cardsContainer = document.querySelector('.cards');
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
  
formCardElement.addEventListener('submit', cardFormSubmitHandler);
  
cardsDataElement.forEach(function(item) {
    addCard(item);
});
