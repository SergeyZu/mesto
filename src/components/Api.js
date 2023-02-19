class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

    getTask() {
        return fetch(this.url, {
            headers: this.headers  
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error('Ошибка'))
            })
    }

    createTask(data) {
        return fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)  
        })
                .then(handleResponse)
    }

    deleteTask(data) {
        return fetch(this.url, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify(data)  
        })
                .then(handleResponse)
    }

}