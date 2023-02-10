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

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
    }

    // setUserInfo(name, about) {
    //     this._name.textContent = this.getUserInfo(name);
    //     this._about.textContent = this.getUserInfo(about);
    // }
}