import Popup from "./Popup.js";



export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imagePopup = this._popupSelector.querySelector('.popup-foto__image');
        this._titlePopup = this._popupSelector.querySelector('.popup-foto__name');
        this._buttonClose = this._popupSelector.querySelector('.popup-foto__close-button')

    }
    open(name, link) {
        this._imagePopup.src = link;
        this._titlePopup.textContent = name;
        this._imagePopup.alt = name;
        super.open()
    }
    setEventListeners() {
        super.setEventListeners()
        this._buttonClose.addEventListener('click', () => super.close())

    }
}