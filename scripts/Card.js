export default class Card {
    constructor(data, templateSelector, viewImageHandler) {
        this._title = data.title;
        this._image = data.url;
        this._templateSelector = templateSelector;
        this._viewImageHandler = viewImageHandler;
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
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
    
        return this._element;
    }

    _deleteCardHandler(event) {
        event.target.closest('.card').remove();
    }

    _likedCardHandler(event) {
        event.target.classList.toggle('card__like_clicked');
    }

    _setEventListeners() {
        this._cardImage = this._element.querySelector('.card__image');
        this._cardImage.addEventListener('click', () => {
            this._viewImageHandler(this._title, this._image);
        });

        this._element.querySelector('.card__trash').addEventListener('click', this._deleteCardHandler);
        
        this._element.querySelector('.card__like').addEventListener('click', this._likedCardHandler);
    }

}