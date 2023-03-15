export default class Card {

    constructor(data, templateSelector, cardClickHandler, trashClickHandler, setCardLike, removeCardLike, userId) {

        this._title = data.name;
        this._image = data.link;
        this._cardId = data._id;
        this._likes = data.likes;
        this._likesQty = data.likes.length;
        this._ownerId = data.owner._id;
        this._templateSelector = templateSelector;
        this._cardClickHandler = cardClickHandler;
        this._trashClickHandler = trashClickHandler;
        this._setCardLike = setCardLike;
        this._removeCardLike = removeCardLike;
        this._userId = userId;
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
            this._cardClickHandler(this._title, this._image);
        });

        this._cardTrash.addEventListener('click', () => this._trashClickHandler(this._element, this._cardId));

        this._cardLikeButton.addEventListener('click', () => this._checkLikeState());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardLikes = this._element.querySelector('.card__likes-qty');

        this._cardTitle.textContent = this._title;        
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._getLikesQty();
        this._hideTrashIcon();
        this._isLiked();
        return this._element;
    }

    getId() {
        return this._cardId;
    }

    _getLikesQty() {
        this._cardLikes.textContent = this._likesQty;
    }

    _isLiked() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._cardLikeButton.classList.add('card__like_clicked');
        }
     }

    _checkLikeState() {
        if (this._cardLikeButton.classList.contains('card__like_clicked')) {
           this._removeCardLike(this._cardId);
        } else {
           this._setCardLike(this._cardId);
        }
    }

    setLikesQty(card) {
        this._isLiked();
        this._cardLikes.textContent = card.likes.length;
    }

    setIconLiked() {
        this._cardLikeButton.classList.add('card__like_clicked');
    }

    setIconDisliked() {
        this._cardLikeButton.classList.remove('card__like_clicked');
    }

    _hideTrashIcon() {
        if (this._ownerId !== this._userId) {
            this._cardTrash.classList.add('card__hide-trash');
        }
        return
    }

}