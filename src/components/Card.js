export default class Card {

    // constructor(data, templateSelector, cardClickHandler, trashClickHandler, handleLikeClick) {
    constructor(data, templateSelector, cardClickHandler, trashClickHandler, likeClickHandler, userId) {

        this._title = data.name;
        this._image = data.link;
        this._cardId = data._id;
        this._likes = data.likes;
        this._likesQty = data.likes.length;
        this._ownerId = data.owner._id;
        this._templateSelector = templateSelector;
        this._cardClickHandler = cardClickHandler;
        this._trashClickHandler = trashClickHandler;
        this._likeClickHandler = likeClickHandler;
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

        this._cardTrash.addEventListener('click', () => this._trashClickHandler(this._cardId));

        this._cardLikeButton.addEventListener('click', () => this._likeClickHandler(this._cardId));

        // this._cardLikeButton.addEventListener('click', () => this.likeClickHandler());
        
        // this._cardLikeButton.addEventListener('click', () => this._likedCardHandler());
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardLikes = this._element.querySelector('.card__likes-qty');

        this._cardTitle.textContent = this._title;        
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        // this._iLikedIt = this._likes.includes(userId);
        this._getLikesQty();
        this._hideTrashIcon();
        return this._element;
    }

    isLiked() {
        this._likes.includes(this._userId);
        // this._likes.includes(this._userId);
    }
    

    // isLiked() {
    //     this._cardLikeButton.classList.contains('card__like_clicked');
    // }

    _hideTrashIcon() {
        if (this._ownerId !== this._userId) {
            this._cardTrash.classList.add('card__hide-trash');
        }
        return
    }

    _getLikesQty () {
        this._cardLikes.textContent = this._likesQty;
    }

    _toggleLikeIcon() {
        if (this.isLiked) {
            this._cardLikeButton.classList.remove('card__like_clicked');
        } else {
            this._cardLikeButton.classList.add('card__like_clicked');
        }
        // return this._iLikedIt
    }

    deleteCardFromDom() {
        this._element.remove();
        this._element = null;
    }

    // deleteCardFromDom(cardId) {
    //     const allCards = document.querySelectorAll('.card');
    //     const cardsArray = Array.from(allCards);
    //     cardsArray.forEach((card) => {
    //         if (this._cardId === cardId) {
    //             card.remove()
    //         }

    //     })
    // }

}
