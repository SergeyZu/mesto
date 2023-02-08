import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._handler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'))
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        // console.log(inputValues);
        return inputValues;        
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handler(this._getInputValues())
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
    
}