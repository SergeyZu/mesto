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
        this.url = config.url;
        this.token = config.token;
    }

    //  
    // Заменяем аватар
    // Лайкаем карточку
    // Удаляем лайк карточки
     


    // Получаем данные пользователя
    getUserData () {
        return fetch(`${this.url}users/me`, {
            headers: {
                authorization: this.token
            }
            })
            .then(res => res.json())
            // .then((result) => {
            //     const userData = result;
            //     console.log(userData);
            // });
    }

    // Заменяем данные пользователя
    setUserData (userData) {
        return fetch(`${this.url}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    }
    
    // setUserData () {
    //     return fetch(`${this.url}users/me`, {
    //         method: 'PATCH',
    //         headers: {
    //             authorization: this.token,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: 'Charles Chaplin',
    //             about: 'Film actor, film director, screenwriter, composer, producer and editor'
    //         })
    //     });
    // }


    // Получаем массив всех карточек
    getCards () {
        return fetch(`${this.url}cards`, {
            headers: {
                authorization: this.token
            }
            })
            .then(res => res.json())
            // .then((result) => {
            //     const cards = result;
            //     console.log(cards);
            // });
    }

    
    // Добавляем карточку
    addCard () {
        return fetch(`${this.url}cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Венеция',
                link: 'https://kartinkin.net/uploads/posts/2022-12/thumbs/1670567420_1-kartinkin-net-p-venetsiya-kartinki-oboi-1.jpg'
            })
        });
    }

    // Удаляем карточку
    deleteCard () {
        return fetch(`${this.url}cards/63fd2ad4ecdf8d0d11fb2092`, {
            method: 'DELETE',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: '63f75edf2680940b4f55d9f0'
            })
        });
    }

}
