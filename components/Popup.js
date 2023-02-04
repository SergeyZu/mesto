export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popup = document.querySelector(this._popupSelector)
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    
    close() {
        popupName.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape' ) {
            // const popup = document.querySelector('.popup_opened');
            // this.close(popup);
            this.close();

        }
    }

    _handleOverlayClose(event) {
        if (event.target === event.currentTarget) {
            // closePopup(event.target);
            this.close();
        }
    }

    // добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы
    setEventListeners() {
        buttonCloseList.forEach(btn => {
            const popup = btn.closest('.popup');
            popup.addEventListener('mousedown', this._handleOverlayClose);
            btn.addEventListener('click', () => closePopup(popup)); 
        })
    }
}