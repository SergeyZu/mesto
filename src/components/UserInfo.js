export default class UserInfo {
    constructor ({ nameSelector, aboutSelector }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    // setUserInfo() {
    //     this._name.textContent = this._name.value;
    //     this._about.textContent = this._about.value;
    // }
}