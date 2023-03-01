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
        // this._id.textContent = data._id
    }

    UserID(data) {
        this.UserID.textContent = data._id;
    }


    
}