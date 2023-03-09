import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {

    constructor(popupSelector, confirmationHandler) {
        super(popupSelector);
        this._handler = confirmationHandler;
        this._form = this._popup.querySelector('.popup__form');
    }

    open(id) {
        this._id = id;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handler(this._id);
            super.close();
        });
    }

    

}