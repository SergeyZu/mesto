export default class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }    
     
    _handleResponse (res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    // Альтернативный вариант записи вместо handleResponse:
    // .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    
    
    _request(url, options) {
        return fetch(url, options).then(this._handleResponse)
    }


    // Запрос на получение данных пользователя
    getUserData () {    
        return this._request(`${this._baseUrl}/users/me`, 
            {headers: this._headers}
        )

    }


    // Запрос на изменение данных пользователя
    setUserData (inputValues) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'PATCH', 
            headers: this._headers,
            body: JSON.stringify(inputValues)
        })
    }
    

    // Запрос на получение массива всех карточек
    getInitialCards () {
        return this._request(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
    }

    
    // Запрос на добавление карточки
    addCard (data) {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
    }


    // Запрос на удаление карточки
    deleteCard (cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
    }


    // Запрос на постановку лайка
    setLike (cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
    }


    // Запрос на снятие лайка
    removeLike (cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
    }


    // Запрос на обновление аватара
    changeAvatar (avatar) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })        
        })
    }

}