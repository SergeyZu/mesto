import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTitle = this._popup.querySelector('.popup__title_type_image');
        this._popupImage = this._popup.querySelector('.popup__image');
    }

    open(popupName, popupLink) {
        this._popupTitle.textContent = popupName;
        this._popupImage.src = popupLink;
        this._popupImage.alt = popupName;

        super.open();
    }

}
