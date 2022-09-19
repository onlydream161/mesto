const popupOpenElement = document.querySelector('.profile__editor');
const popupInputNameElement = document.querySelector('.popup__input_valve_name');
const popupInputJobElement = document.querySelector('.popup__input_valve_job');
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');
const formProfileElement = document.querySelector('.popup__form[name="namejob"]');
const popupCardsOpenElement = document.querySelector('.profile__card-button');
const cardsConteiner = document.querySelector('.places')
const formCardsAdd = document.querySelector('.popup__form[name="newcard"]');
const formAvatar = document.querySelector('.popup__form[name="avatarlink"]')
const formPage = {
    form: '.popup__form',
    button: '.popup__button-save',
    input: '.popup__input',
    inputError: 'popup__input_error',
    buttonDisabled: 'popup__button-save_disabled',
    spanError: '.popup__error'
};
const avatarElement = document.querySelector('.page__image-container')
const avatarImageElement = document.querySelector('.profile__image')
export {
    popupOpenElement,
    popupInputNameElement,
    popupInputJobElement,
    profileName,
    profileCaption,
    formProfileElement,
    popupCardsOpenElement,
    cardsConteiner,
    formCardsAdd,
    formPage,
    avatarElement,
    formAvatar,
    avatarImageElement
}