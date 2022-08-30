import './index.css';
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
} from "../utils/constants.js"
import initialCards from "../utils/defaultcards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";



const popupZoomImage = new PopupWithImage('.page__popup-foto');
popupZoomImage.setEventListeners();
//функция для создания карточек
function createCard(data) {
    const card = new Card(data, '.addcard', () => {
        popupZoomImage.open(data.name, data.link)
    })
    const cardElement = card.generateCard()
    return cardElement
}
//Прорисовка дефолтных карточек
const defaultCardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const cardElement = createCard(item)
            defaultCardList.addItem(cardElement)
        }
    },
    cardConteiner)
defaultCardList.rendererItems()
    //Прорисовка новых карточек
const popupWithFormCard = new PopupWithForm(
    '.page__popup-cards',
    (data) => {
        const cardElement = createCard({ name: data.nameplace, link: data.placelink })
        defaultCardList.addItem(cardElement)
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
    popupWithProfile.open();
    const { name, job } = profileEdit.getUserInfo()
    popupInputNameElement.value = name;
    popupInputJobElement.value = job;
    formProfilePopupValidation.resetValidation()
})
popupCardsOpenElement.addEventListener('click', () => {
    popupWithFormCard.open()
    formCardPopupValidation.resetValidation();
})