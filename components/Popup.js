// import { buttonCloseList } from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popup = document.querySelector(this._popupSelector)
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose.bind(this));
    }

    _handleEscClose(event) {
        if (event.key === 'Escape' ) {
            this.close();

        }
    }

    _handleOverlayClose(event) {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        const buttonCloseList = document.querySelectorAll('.popup__close-button');
        buttonCloseList.forEach(btn => {
            const popup = btn.closest('.popup');
            popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
            btn.addEventListener('click', () => this.close()); 
        })
    }    
    
}