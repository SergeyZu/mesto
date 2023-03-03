export default class Card {

    constructor(data, templateSelector, openImageHandler, deleteCardHandler, likesQtyHandler) {
        this._title = data.name;
        this._image = data.link;
        this._cardId = data._id;
        // this._ownerId = data.owner._id;
        this._likesQty = data.likes.length;
        this._templateSelector = templateSelector;
        this._openImageHandler = openImageHandler;
        this._deleteCardHandler = deleteCardHandler;
    }

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
        this._cardLikeButton = this._element.querySelector('.card__like');

        this._cardImage.addEventListener('click', () => {
            this._openImageHandler(this._title, this._image);
        });

        this._cardTrash.addEventListener('click', () => this._deleteCardHandler());
        
        this._cardLikeButton.addEventListener('click', () => this._likedCardHandler());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardLikes = this._element.querySelector('.card__likes-qty');

        this._cardTitle.textContent = this._title;        
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._cardLikes.textContent = this._likesQty;    
        return this._element;
    }

    isLiked() {
        this._cardLikeButton.classList.contains('card__like_clicked');
    }

    _likedCardHandler() {
        this._cardLikeButton.classList.toggle('card__like_clicked');
    }

    // likesQtyHandler() {
    //     this._cardLikes = this_element.querySelector('.card__likes-qty');
    //     this._cardLikes.textContent = this._likesQty;
    // }

    deleteCardFromDom() {
        this._element.remove();
        this._element = null;
    }

}