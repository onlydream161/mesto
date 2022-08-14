const popupProfileEdit = document.querySelector('.page__popup-profile');
const popupProfileCloseElement = popupProfileEdit.querySelector('.popup__button-close');
const popupOpenElement = document.querySelector('.profile__editor');
const popupInputNameElement = popupProfileEdit.querySelector('.popup__input_valve_name');
const popupInputJobElement = popupProfileEdit.querySelector('.popup__input_valve_job');
const profileName = document.querySelector('.profile__name');
const pofileCaption = document.querySelector('.profile__caption');
const formProfileElement = document.querySelector('.popup__form[name="namejob"]');
const popupAddCard = document.querySelector('.page__popup-cards');
const popupAddCardInputName = popupAddCard.querySelector('.popup__input_valve_place');
const popupAddCardInputlink = popupAddCard.querySelector('.popup__input_valve_link');
const popupCardsCloseElement = popupAddCard.querySelector('.popup__button-close');
const popupCardsOpenElement = document.querySelector('.profile__card-button');
const popupCardsFormElement = popupAddCard.querySelector('.popup__form');
const popupImageElement = document.querySelector('.popup-foto');
const popupImageButtonClose = document.querySelector('.popup-foto__close-button');
const popupImage = document.querySelector('.popup-foto__image');
const popupimageName = document.querySelector('.popup-foto__name');
const cardConteiner = document.querySelector('.places')
const popupAddCardButtonSave = popupAddCard.querySelector('.popup__button-save');
const formCardsAdd = document.querySelector('.popup__form[name="newcard"]');

const formPage = {
    form: '.popup__form',
    button: '.popup__button-save',
    input: '.popup__input',
    inputError: 'popup__input_error',
    buttonDisabled: 'popup__button-save_disabled',
    spanError: '.popup__error'
}