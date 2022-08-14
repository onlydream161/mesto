import initialCards from "./defaultcards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//общая функция открытия попап
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closePopupEsc)
    popup.addEventListener('mousedown', closePopupByOverlay)
}
// общая функция закрытия попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc)
    popup.removeEventListener('mousedown', closePopupByOverlay)
}
// закрытие попап через оверлей
function closePopupByOverlay(event) {
    if (event.target !== event.currentTarget) {
        return
    }
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)
}
// закрытие попап через Esc
function closePopupEsc(event) {
    if (event.keyCode === 27) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
//редактируем профиль 
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const nameInput = popupInputNameElement.value;
    const jobInput = popupInputJobElement.value;
    const nameProfile = profileName;
    const jobProfile = pofileCaption;
    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;
    closePopup(popupProfileEdit)
}
// сохраняем значение в попап профиля при открытии
function addFirstName() {
    popupInputNameElement.value = profileName.textContent;
    popupInputJobElement.value = pofileCaption.textContent;
}
// функция для слушателя в класс Card
const handleZoomCardsPopup = (name, link) => {
        popupImage.src = link;
        popupimageName.textContent = name;
        popupImage.alt = name;
        openPopup(popupImageElement);
    }
    //функция для создания карточки из классa Card
const defaultCards = (item) => {
    const card = new Card(item, '.addcard', handleZoomCardsPopup);
    const cardElement = card.generateCard();
    cardConteiner.prepend(cardElement);
};
//создаем дефолтные карточки
initialCards.forEach((item) => { defaultCards(item) });
// добавляем новые карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const card = {
        name: popupAddCardInputName.value,
        link: popupAddCardInputlink.value

    };
    defaultCards(card);
    closePopup(popupAddCard);
    popupCardsFormElement.reset();
    popupAddCardButtonSave.setAttribute('disabled', true);
    popupAddCardButtonSave.classList.add('popup__button-save_disabled');
}
// проверяем форму профиля
const formProfilePopupValidation = new FormValidator(formPage, formProfileElement)
formProfilePopupValidation.enableValidation();
//проверяем форму карточки 
const formCardPopupValidation = new FormValidator(formPage, formCardsAdd)
formCardPopupValidation.enableValidation();
//очищаем попап от сохраненных ошибок при закрытии на крестик
function clearPopup() {
    const errors = Array.from(document.querySelectorAll('.popup__error'))
    errors.forEach((error) => {
        error.textContent = ''
    })
    const redInputs = Array.from(document.querySelectorAll('.popup__input'))
    redInputs.forEach((input) => {
        input.classList.remove('popup__input_error')
    })
    const forms = Array.from(document.querySelectorAll('.popup__form'))
    forms.forEach((form) => {
        form.reset()
    })
}
//слушатели
popupCardsFormElement.addEventListener('submit', handleCardFormSubmit)
formProfileElement.addEventListener('submit', handleProfileFormSubmit);
popupOpenElement.addEventListener('click', () => {
    clearPopup()
    addFirstName()
    openPopup(popupProfileEdit)
})
popupProfileCloseElement.addEventListener('click', () => closePopup(popupProfileEdit))
popupCardsOpenElement.addEventListener('click', () => {
    openPopup(popupAddCard);
    clearPopup()
})
popupCardsCloseElement.addEventListener('click', () => closePopup(popupAddCard))
popupImageButtonClose.addEventListener('click', () => closePopup(popupImageElement))