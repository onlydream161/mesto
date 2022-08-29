import Popup from "./Popup.js";



export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imagePopup = this._popupSelector.querySelector('.popup-foto__image');
        this._titlePopup = this._popupSelector.querySelector('.popup-foto__name');

    }
    open(name, link) {
        this._imagePopup.src = link;
        this._titlePopup.textContent = name;
        this._imagePopup.alt = name;
        super.open()
    }
}