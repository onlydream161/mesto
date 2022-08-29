export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._buttonClose = this._popupSelector.querySelector('.popup__button-close')
        this._handleEsc = this._handleEscClose.bind(this)
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEsc);
    }

    _handleEscClose(event) {

        if (event.keyCode === 27) {
            this.close()
        }
    }
    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (event) => { this._handleCloseByOverlay(event) })
        this._buttonClose.addEventListener('click', () => this.close())
    }
    _handleCloseByOverlay(event) {
        if (event.target !== event.currentTarget) {
            return
        }
        this.close()
    }
}