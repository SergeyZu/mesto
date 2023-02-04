import Popup from "./Popup.js";
import { popupTitle, popupImage } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        
    }

    open(popupName, popupLink) {
        popupTitle.textContent = popupName;
        popupImage.src = popupLink;
        popupImage.alt = popupName;

        super.open();
    }

}
