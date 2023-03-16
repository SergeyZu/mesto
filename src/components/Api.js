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
        
    // Попробовал реализовать запросы через _request(), - не смог разобраться, почему сервер вместо данных пользователя возвращает undefined/
    
        // this._request(`${this._baseUrl}/users/me`, 
        //     {headers: this._headers}
        // )

        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._handleResponse); 
        
    }


    // Запрос на изменение данных пользователя
    setUserData (inputValues) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH', 
            headers: this._headers,
            body: JSON.stringify(inputValues)
        })
        .then(this._handleResponse); 
    }
    

    // Запрос на получение массива всех карточек
    getInitialCards () {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._handleResponse); 
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
        .then(this._handleResponse); 
    }


    // Запрос на удаление карточки
    deleteCard (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse); 
    }


    // Запрос на постановку лайка
    setLike (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._handleResponse); 
    }


    // Запрос на снятие лайка
    removeLike (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse); 
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
        .then(this._handleResponse); 
    }

}