import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._handler = submitHandler;
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'))
    }

    getInputValues() {
        const inputValues = {};
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        // console.log(inputValues);
        return inputValues;        
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handler);
    }

    close() {
        super.close();
        this._form.reset();
    }
    
}