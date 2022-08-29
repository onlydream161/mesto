import './pages/index.css';
import {
    popupOpenElement,
    popupInputNameElement,
    popupInputJobElement,
    profileName,
    pofileCaption,
    formProfileElement,
    popupCardsOpenElement,
    cardConteiner,
    formCardsAdd,
    formPage
} from "./scripts/constants.js"
import initialCards from "./scripts/defaultcards.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import Popup from "./scripts/Popup.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";


const popupProfile = new Popup('.page__popup-profile');
const popupZoomImage = new PopupWithImage('.popup-foto');
popupZoomImage.setEventListeners()
    //Прорисовка дефолтных карточек
const defaultCardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.addcard', (name, link) => {
            popupZoomImage.open(name, link)
        });
        const cardElement = card.generateCard();
        defaultCardList.addItem(cardElement);
    }
}, cardConteiner)
defaultCardList.rendererItems()
    //Прорисовка новых карточек
const popupWithFormCard = new PopupWithForm(
    '.page__popup-cards',
    (data) => {
        const newCard = new Card({ name: data.nameplace, link: data.placelink }, '.addcard', () => {
            popupZoomImage.open(data.nameplace, data.placelink)
        });
        defaultCardList.addItem(newCard.generateCard())
        popupWithFormCard.close()
    }
);
popupWithFormCard.setEventListeners()

const profileEdit = new UserInfo({ name: profileName, job: pofileCaption })

const popupWithProfile = new PopupWithForm(
    '.page__popup-profile',
    (data) => {
        profileEdit.setUserInfo({ name: data.firstname, job: data.job })
        popupWithProfile.close()
    }
)
popupWithProfile.setEventListeners()
    // проверяем форму профиля
const formProfilePopupValidation = new FormValidator(formPage, formProfileElement)
formProfilePopupValidation.enableValidation();
//проверяем форму карточки 
const formCardPopupValidation = new FormValidator(formPage, formCardsAdd)
formCardPopupValidation.enableValidation();
// слушатели открытия попап
popupOpenElement.addEventListener('click', () => {
    popupProfile.open();
    popupInputNameElement.value = profileEdit.getUserInfo().name;
    popupInputJobElement.value = profileEdit.getUserInfo().job;
    formProfilePopupValidation.clearError()
})
popupCardsOpenElement.addEventListener('click', () => {
    popupWithFormCard.open()
    formCardPopupValidation.clearError();
})