import PopupWithForm from "./PopupWithForm.js";

export default class PopupAvatar extends PopupWithForm {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector, handleFormSubmit)
        this._avatarElement = document.querySelector('.profile__image')
    }
    setAvatarLink(link) {
        this._avatarElement.src = link
    }
}