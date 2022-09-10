export default class Api {
    constructor(config) {
        this._address = config.baseUrl;
        this._headers = config.headers;
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => { return res.json() })
    }
    getCard() {
        return fetch(`${this._address}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then((res) => { return res.json() })
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

            return res.json()
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
            return res.json();
        })

    }
}