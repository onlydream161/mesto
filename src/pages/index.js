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
    formPage,
    avatarElement,
    formAvatar,
    avatarImageElement
} from "../utils/constants.js"
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import { api } from '../components/Api.js';
import PopupAvatar from '../components/PopupAvatar.js';

const userId = {};
//добавляем профиль  с сервера
api.getUserInfo().then((res) => {
    profileEdit.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
    userId.id = res._id;
}).catch(err => console.log(err));
// Добавляем дефолт карточки с сервера 
const cardListFromServer = () => {
    api.getCard().then((res) => {
        res.reverse()
        const defaultCardList = new Section({
                items: res,
                renderer: (item) => {
                    const cardElement = createCard(item)
                    defaultCardList.addItem(cardElement)
                }
            },
            cardConteiner)
        defaultCardList.rendererItems()
    }).catch((err) => { console.log(err) });
}

const popupZoomImage = new PopupWithImage('.page__popup-foto');
popupZoomImage.setEventListeners();
//функция для создания карточек
function createCard(data) {
    const card = new Card({ name: data.name, link: data.link, likes: data.likes, ownerId: data.owner._id, id: data._id },
        '.addcard',
        () => {
            popupZoomImage.open(data.name, data.link)
        },
        () => popupDeleteCard.open(data._id),
        userId,
        () => {
            api.addlike(data._id).then((res) => {
                card.setLikeLenght({
                    length: res.likes.length,
                    likes: res.likes
                })
            }).catch((err) => { console.log(err) })
        }, () => {
            api.removeLike(data._id).then((res) => {
                card.setLikeLenght({
                    length: res.likes.length,
                    likes: res.likes
                })
            }).catch((err) => { console.log(err) })
        })
    const cardElement = card.generateCard()
    return cardElement
}
//Прорисовка новых карточек
const popupWithFormCard = new PopupWithForm(
    '.page__popup-cards',
    (data) => {
        api.postNewCard(data).then((res) => {
            const cardElement = createCard(res);
            cardConteiner.prepend(cardElement)
        }).catch((err) => console.log(err)).finally(() => { popupWithFormCard.renderLoading({ isLoading: false }) })
        popupWithFormCard.close()
    }
);
popupWithFormCard.setEventListeners()
cardListFromServer()
const profileEdit = new UserInfo({ name: profileName, job: pofileCaption, avatar: avatarImageElement })
    // меняем профиль из попап
const popupWithProfile = new PopupWithForm(
    '.page__popup-profile',
    (data) => {
        api.editProfile(data).
        then((res) => { profileEdit.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar }) })
            .catch((err) => console.log(err)).finally(() => { popupWithProfile.renderLoading({ isLoading: false }) });
        popupWithProfile.close()
    }
)
popupWithProfile.setEventListeners()

const popupDeleteCard = new PopupDeleteCard('.page__popup-delete', (cardId) => {
    api.deletecard(cardId).then(() => {
        cardListFromServer()
        popupDeleteCard.close();
    }).catch((err) => console.log(err))
})
popupDeleteCard.setEventListeners()

const popupAvatar = new PopupAvatar('.page__popup-avatar', (link) => {
    console.log(link.avatarlink)
    api.editAvatar(link.avatarlink).then((res) => {
        profileEdit.setUserAvatar({ avatar: res.avatar });
        popupAvatar.close();
    }).catch((err) => console.log(err)).finally(() => {
        popupAvatar.renderLoading({ isLoading: false })
    });
});
popupAvatar.setEventListeners()
    // проверяем форму профиля
const formProfilePopupValidation = new FormValidator(formPage, formProfileElement)
formProfilePopupValidation.enableValidation();
//проверяем форму карточки 
const formCardPopupValidation = new FormValidator(formPage, formCardsAdd)
formCardPopupValidation.enableValidation();
const formAvatarValidation = new FormValidator(formPage, formAvatar)
formAvatarValidation.enableValidation()
    // слушатели открытия попап
popupOpenElement.addEventListener('click', () => {
    popupWithProfile.open();
    const { name, job } = profileEdit.getUserInfo()
    popupInputNameElement.value = name;
    popupInputJobElement.value = job;
    formProfilePopupValidation.resetValidation()
});
popupCardsOpenElement.addEventListener('click', () => {
    popupWithFormCard.open()
    formCardPopupValidation.resetValidation();
})
avatarElement.addEventListener('click', () => {
    popupAvatar.open()
})