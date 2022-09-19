import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector) {
            super(popupSelector);
            // this._handleDeleteCard = handleDeleteCard;
            this._buttonYesDelete = document.querySelector('.popup__button-save_delete')
        }
        // open(id) {
        //     super.open()
        //     this._cardId = id
        // }
    setEventListeners() {
        super.setEventListeners();
        this._buttonYesDelete.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit()
                // this._handleDeleteCard(this._cardId);

        })
    }
    setCallback(submitCb) {
        this._handleSubmit = submitCb;
    }
}