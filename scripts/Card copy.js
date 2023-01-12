import { cardsDataElement } from './cardsData.js'

import { popupImageElement, popupTitle, popupImage, popupImageCloseButtonElement } from './constants.js'

import { openPopup, closePopup, closePopupByClickOnOverlay, closePopupByEsc } from './functions.js'


class Card {
    constructor(data, templateSelector) {
        this._title = data.title;
        this._image = data.url;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.card__title').textContent = this._title;
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._title;
    
        return this._element;
    }

    _viewImageHandler() {
        popupTitle.textContent = this._title;
        popupImage.src = this._image;
        popupImage.alt = this._title;
        openPopup(popupImageElement);
    }

    _closeImagePopup() {
        closePopup(popupImageElement);
    };

    _deleteCardHandler(event) {
        event.target.closest('.card').remove();
    }

    _likedCardHandler(event) {
        event.target.classList.toggle('card__like_clicked');
    }

    _setEventListeners() {
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._viewImageHandler();
        });

        popupImageCloseButtonElement.addEventListener('click', this._closeImagePopup);

        popupImageElement.addEventListener('click', closePopupByClickOnOverlay);

        this._element.querySelector('.card__trash').addEventListener('click', this._deleteCardHandler);
        
        this._element.querySelector('.card__like').addEventListener('click', this._likedCardHandler);
    }

}

cardsDataElement.forEach((item) => {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();

    document.querySelector('.cards').append(cardElement);
});

// function addCard(item) {
//     cardsContainer.prepend(generateCard(item));
// };

// function cardFormSubmitHandler(event) {
//     event.preventDefault();
//     addCard({ title: cardTitle.value, url: link.value });
//     event.target.reset();
//     closeCardPopup ()
// };