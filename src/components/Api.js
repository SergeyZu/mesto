export default class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }    
     

    // Запрос на получение данных пользователя
    getUserData () {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

    }


    // Запрос на изменение данных пользователя
    setUserData (userData) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(userData)
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }
    

    // Запрос на получение массива всех карточек
    getInitialCards () {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

    
    // Запрос на добавление карточки
    addCard () {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: 'Венеция',
                link: 'https://kartinkin.net/uploads/posts/2022-12/thumbs/1670567420_1-kartinkin-net-p-venetsiya-kartinki-oboi-1.jpg'
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    // Запрос на удаление карточки
    deleteCard () {
        return fetch(`${this.baseUrl}/cards/63fec532a6fc040db1095c85`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                _id: '63fec532a6fc040db1095c85'
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    // Запрос на постановку лайка
    likeCard () {
        return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    // Запрос на снятие лайка
    dislikeCard () {
        return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }


    // Запрос на обновление аватара
    changeAvatar () {
        return fetch(`${this.baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
    }

}
