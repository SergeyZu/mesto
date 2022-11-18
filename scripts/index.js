//Имя пользователя, отображаемое в профиле
let profileTitleElement = document.querySelector('.profile__title');

//Информация пользователя о себе, отображаемая в профиле
let profileSubtitleElement = document.querySelector('.profile__subtitle');

//Кнопка редактирования профиля
const profileEditButtonElement = document.querySelector('.profile__edit-button');

//Попап
const popupElement = document.querySelector('.popup');

//Кнопка закрытия формы
const formCloseButtonElement = popupElement.querySelector('.popup__close-button');

//Форма
const formElement = document.querySelector('.popup__content');

//Поле формы Имя
const nameInputElement = formElement.querySelector('.popup__field_type_name');

//Поле формы О себе
const aboutInputElement = formElement.querySelector('.popup__field_type_about');

//Кнопка Сохранить
const saveButtonElement = formElement.querySelector('.popup__save-button');





//Функция отображения попапа
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    nameInputElement.value = profileTitleElement.textContent;
    aboutInputElement.value = profileSubtitleElement.textContent;
}

//Функция скрытия попапа
const closePopup = function() {
    popupElement.classList.remove('popup_opened'); 
}

//Функция отправки формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitleElement.textContent = nameInputElement.value;
    profileSubtitleElement.textContent = aboutInputElement.value;
    closePopup();
}




//Открытие попапа по клику на кнопке редактирования
profileEditButtonElement.addEventListener('click', openPopup);

//Закрытие попапа по клику на кнопке Закрыть
formCloseButtonElement.addEventListener('click', closePopup);

//Отправка формы по клику на кнопке Сохранить
formElement.addEventListener('submit', formSubmitHandler);