import { cardsDataElement } from './cardsData.js';

class Card {
    constructor(data, templateSelector) {
        this._title = data.title;
        this._image = data.url;
        // this.trash = data.trash;
        // this.like = data.like;
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
        this._element.querySelector('.card__title').textContent = this._title;
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._title;
        // this._element.querySelector('.card__trash') = this.trash;
        // this._element.querySelector('.card__like') = this.like;

        return this._element;
    }
}

cardsDataElement.forEach((item) => {
    const card = new Card(item, '#card-template');
    const cardElement = card.generateCard();
    console.log(cardElement)

    document.querySelector('.cards').append(cardElement);
});