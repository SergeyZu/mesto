import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ name, link }, popupSelector) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        const popupTitle = super.popupSelector.querySelector('.popup__title_type_image');
        const popupImage = super.popupSelector.querySelector('.popup__image');

        popupTitle.textContent = this._name;
        popupImage.src = this._link;
        popupImage.alt = this._name;

        super.open();
    }

}
