import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._buttonYesDelete = document.querySelector('.popup__button-save_delete')
    }
    setEventListeners() {
        super.setEventListeners();
        this._buttonYesDelete.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit()
        })
    }
    setCallback(submitCb) {
        this._handleSubmit = submitCb;
    }
}