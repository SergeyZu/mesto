const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


export default class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }    
     

    // Запрос на получение данных пользователя
    getUserData () {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(handleResponse); 
        // Альтернативный вариант записи вместо handleResponse:
        // .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    // Запрос на изменение данных пользователя
    setUserData (inputValues) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH', 
            headers: this._headers,
            body: JSON.stringify(inputValues)
        })
        .then(handleResponse); 
    }
    

    // Запрос на получение массива всех карточек
    getInitialCards () {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(handleResponse); 
    }

    
    // Запрос на добавление карточки
    addCard (data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(handleResponse); 
    }


    // Запрос на удаление карточки
    deleteCard (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(handleResponse); 
    }


    // Запрос на постановку лайка
    setLike (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(handleResponse); 
    }


    // Запрос на снятие лайка
    removeLike (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(handleResponse); 
    }


    // Запрос на обновление аватара
    changeAvatar (avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })        
        })
        .then(handleResponse); 
    }

}
