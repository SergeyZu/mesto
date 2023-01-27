import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, { name, link }) {
        super(popupSelector);
        this._name = name;
        this._link = link;
    }

    open() {
        const popupTitle = popupSelector.querySelector('.popup__title_type_image');
        const popupImage = popupSelector.querySelector('.popup__image');

        popupTitle.textContent = this._name;
        popupImage.src = this._link;
        popupImage.alt = this._name;

        super.open();
    }

}
