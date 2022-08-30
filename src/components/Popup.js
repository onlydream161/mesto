export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__button-close')
        this._handleEsc = this._handleEscClose.bind(this)
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEsc);
    }

    _handleEscClose(event) {

        if (event.key === 'Escape') {
            this.close()
        }
    }
    setEventListeners() {
        this._popup.addEventListener('mousedown', (event) => { this._handleCloseByOverlay(event) })
        this._buttonClose.addEventListener('click', () => this.close())
    }
    _handleCloseByOverlay(event) {
        if (event.target !== event.currentTarget) {
            return
        }
        this.close()
    }
}