export default class UserInfo {
    constructor ({ titleSelector, subtitleSelector }) {
        this._title = document.querySelector(titleSelector);
        this._subtitle = document.querySelector(subtitleSelector);
        this._name = document.querySelector('.popup__input_type_name');
        this._about = document.querySelector('.popup__input_type_about');
    }

    getUserInfo() {
        this._name.value = this._title.textContent;
        this._about.value = this._subtitle.textContent;
    }

    setUserInfo() {
        this._title.textContent = this._name.value;
        this._subtitle.textContent = this._about.value;
    }
}