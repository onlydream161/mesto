import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, handleDeleteCard) {
        super(popupSelector);
        this._handleDeleteCard = handleDeleteCard;
        this._buttonYesDelete = document.querySelector('.popup__button-save_delete')
    }
    open(id) {
        super.open()
        this._cardId = id
    }
    setEventListeners() {
        super.setEventListeners();
        this._buttonYesDelete.addEventListener('click', () => {
            this._handleDeleteCard(this._cardId);

        })
    }
}