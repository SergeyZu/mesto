const popupElement = document.querySelector('.popup');

const formCloseButtonElement = popupElement.querySelector('.popup__close-button');

const profileEditButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_opened'); 
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened'); 
}



profileEditButtonElement.addEventListener('click', openPopup);

formCloseButtonElement.addEventListener('click', closePopup);
