class Api {
    constructor(config) {
        this._address = config.baseUrl;
        this._headers = config.headers;
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    getCard() {
        return fetch(`${this._address}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    editProfile(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.firstname,
                about: data.job
            })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    postNewCard(data) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                link: data.placelink,
                name: data.nameplace
            })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })

    }
    deletecard(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    editAvatar(link) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link
            })
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    addlike(id) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }
    removeLike(id) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${result.status}`)
            }
        })
    }

}

export const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-50",
    headers: {
        authorization: "073748d7-d2d0-48ec-a4b8-d36e11277d28",
        "Content-Type": "application/json",
    }
})