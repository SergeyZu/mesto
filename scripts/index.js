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
function formSubmitHandler (evt) {
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
formProfileElement.addEventListener('submit', formSubmitHandler);



//-------------------------------------------------------------------------

//ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ

//Картинка
const cardImageElement = document.querySelector('.card__image');

//Корзина
const cardTrashButtonElement = document.querySelector('.card__trash');

//Заголовок карточки
const cardTitleElement = document.querySelector('.card__title');

//Мне нравится
const cardLikeButtonElement = document.querySelector('.card__like');



//Попап
const popupCardElement = document.querySelector('.popup_type_card');



//Форма
const formCardElement = document.querySelector('.popup__card-content');

//Поле формы Название
const cardTitleInputElement = formCardElement.querySelector('.popup__field_type_title'); 

//Поле формы Ссылка на картинку
const cardLinkInputElement = formCardElement.querySelector('.popup__field_type_link');

//Кнопка Создать
const createButtonElement = formCardElement.querySelector('.popup__create-button');

//Контейнер для карточек
const cardsContainer = document.querySelector('.cards');

/* Шаблон карточки
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
console.log(cardTemplate);

const addCard = cardTemplate.cloneNode(true);
console.log(addCard);*/

/*/Массив данных карточек
const cardsDataArrayElement = [ 
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
    },
]

*/


function openCardPopup () {
    openPopup(popupCardElement);
}

function closeCardPopup () {
    closePopup(popupCardElement);
};


/*/Функция добавления карточки

function addCard(titleValue, imageLinkValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = titleValue;
    cardElement.querySelector('.card__image').src = imageLinkValue;
    cardsContainer.prepend(cardElement);
}
*/

//Кнопка добавления карточки / клик
const addCardButtonElement = document.querySelector('.profile__add-button');
addCardButtonElement.addEventListener('click', openCardPopup);

//Кнопка закрытия формы / клик
const formCardCloseButtonElement = popupCardElement.querySelector('.popup__close-button');
formCardCloseButtonElement.addEventListener('click', closeCardPopup);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Генерация карточки
const generateCard = (dataCard) => {

}


//Добавление карточки
const renderCard = (dataCard) => {
    cardsContainer.prepend(generateCard(dataCard))

}

