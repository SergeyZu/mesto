// class Api {
//     constructor(config) {
//         this.url = config.url;
//         this.headers = config.headers;
//     }

//     getCards() {
//         return fetch(this.url, {
//             headers: this.headers  
//         })
//             .then((res) => {
//                 if(res.ok) {
//                     return res.json();
//                 }
//                 return Promise.reject(new Error('Ошибка'))
//             })
//     }

//     addCard(data) {
//         return fetch(this.url, {
//             method: 'POST',
//             headers: this.headers,
//             body: JSON.stringify(data)  
//         })
//                 .then(handleResponse)
//     }

//     deleteCard(data) {
//         return fetch(this.url, {
//             method: 'DELETE',
//             headers: this.headers,
//             body: JSON.stringify(data)  
//         })
//                 .then(handleResponse)
//     }

// }





// // Код с вебинара Лизы

// fetch('https://.....')
//     .then(res => {
//         return res.ok ? res.json() : Promise.reject()
//     })
//     // либо
//     // .then(res => res.ok ? res.json() : Promise.reject())
//     .then(res => {
//         console.log('res =>', res)
//     })
//     .catch()


// // Оборачиваем предыдущий код в функцию
// const getCards = () => {
//     return fetch('https://.....')
//         .then(res => res.ok ? res.json() : Promise.reject())
// }

export default class Api {
    constructor(config) {
        this.config = config;
        this.url = config.url;
        this.headers = config.headers;
    }

    // Заменяем данные пользователя 
    // Заменяем аватар
    // Лайкаем карточку
    // Удаляем лайк карточки
     


    // Получаем данные пользователя
    getUserData () {
        return fetch('https://nomoreparties.co/v1/cohort-60/users/me', {
            headers: {
                authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201'
            }
            })
            .then(res => res.json())
            // .then((result) => {
            //     const userData = result;
            //     console.log(userData);
            // });
    }

    // Получаем массив всех карточек
    getCards () {
        return fetch('https://nomoreparties.co/v1/cohort-60/cards', {
            headers: {
                authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201'
            }
            })
            .then(res => res.json())
            // .then((result) => {
            //     const cards = result;
            //     console.log(cards);
            // });
    }

    setUserData () {
        return fetch('https://nomoreparties.co/v1/cohort-60/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Charles Chaplin',
                about: 'Film actor, film director, screenwriter, composer, producer and editor'
            })
        });
    }

    // Добавляем карточку
    addCard () {
        return fetch('https://nomoreparties.co/v1/cohort-60/cards', {
            method: 'POST',
            headers: {
                authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Венеция',
                link: 'https://kartinkin.net/uploads/posts/2022-12/thumbs/1670567420_1-kartinkin-net-p-venetsiya-kartinki-oboi-1.jpg'
            })
        });
    }

    // Удаляем карточку
    removeCard () {
        return fetch('https://nomoreparties.co/v1/cohort-60/cards/cardID', {
            method: 'DELETE',
            headers: {
                authorization: '8e181f4a-8318-4b8b-ab26-7884d8331201',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: '63f75edf2680940b4f55d9f0'
            })
        });
    }

}
