export default class Card {

    constructor(data, templateSelector, openImageHandler, deleteCardHandler, likeCardHandler) {
        this._title = data.name;
        this._image = data.link;
        this._id = data._id;
        this._templateSelector = templateSelector;
        this._openImageHandler = openImageHandler;
        this._deleteCardHandler = deleteCardHandler;
    }

    // constructor(data, templateSelector, openImageHandler) {
    //     this._title = data.name;
    //     this._image = data.link;
    //     this._templateSelector = templateSelector;
    //     this._openImageHandler = openImageHandler;
    // }


    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._cardImage = this._element.querySelector('.card__image');
        this._cardTrash = this._element.querySelector('.card__trash');
        this._cardLike = this._element.querySelector('.card__like');

        this._cardImage.addEventListener('click', () => {
            this._openImageHandler(this._title, this._image);
        });

        this._cardTrash.addEventListener('click', () => this._deleteCardHandler());
        
        this._cardLike.addEventListener('click', () => this._likedCardHandler());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardTitle = this._element.querySelector('.card__title');

        this._cardTitle.textContent = this._title;        
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
    
        return this._element;
    }

    // _deleteCardHandler() {
    //     this._element.remove();
    //     this._element = null;
    // }

    _likedCardHandler() {
        this._cardLike.classList.toggle('card__like_clicked');
    }

}