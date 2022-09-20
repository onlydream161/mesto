import './index.css';
import {
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
const section = new Section({
    renderer: (item) => {
        const cardElement = createCard(item)
        section.addItem(cardElement)
    }
}, cardsConteiner);
const popupDeleteCard = new PopupDeleteCard('.page__popup-delete');
const popupZoomImage = new PopupWithImage('.page__popup-foto');
const profileInfo = new UserInfo({ name: profileName, job: profileCaption, avatar: avatarImageElement })
    //добавляем профиль  с сервера и 
    // Добавляем дефолт карточки с сервера
Promise.all([api.getUserInfo(), api.getCard()])
    .then(([userData, initialCards]) => {
        profileInfo.setUserInfo({ name: userData.name, job: userData.about, avatar: userData.avatar });
        userId.id = userData._id;
        section.renderItems(initialCards.reverse())
    }).catch((err) => {
        console.log(err);
    });
//функция для создания карточек
function createCard(data) {
    const card = new Card({
            name: data.name,
            link: data.link,
            likes: data.likes,
            ownerId: data.owner._id,
            id: data._id
        },
        '.addcard',
        () => {
            popupZoomImage.open(data.name, data.link)
        },
        () => handleDeleteCard(data._id, card),
        userId,
        () => {
            api.addLike(data._id)
                .then((res) => {
                    card.setLikeLenght({
                        length: res.likes.length,
                        likes: res.likes
                    });
                    card.updateLikes()
                })
                .catch((err) => { console.log(err) })
        }, () => {
            api.removeLike(data._id).then((res) => {
                card.setLikeLenght({
                    length: res.likes.length,
                    likes: res.likes
                });
                card.updateLikes();
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
                section.addItem(cardElement);
                popupWithFormCard.close()
            })
            .catch((err) => console.log(err))
            .finally(() => {
                popupWithFormCard.renderLoading({ isLoading: false });
            })
    }
);
// меняем профиль из попап
const popupWithProfile = new PopupWithForm(
        '.page__popup-profile',
        (data) => {
            api.editProfile(data)
                .then((res) => {
                    profileInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
                    popupWithProfile.close()
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    popupWithProfile.renderLoading({ isLoading: false });

                });
        }
    )
    // функция удаления карточки
const handleDeleteCard = (id, cardElement) => {
    popupDeleteCard.open();
    popupDeleteCard.setCallback(() => {
        api.deleteСard(id)
            .then(() => {
                cardElement.removeCard();
                popupDeleteCard.close();
            })
            .catch((err) => console.log(err))

    })
}

// попап аватар
const popupAvatar = new PopupAvatar('.page__popup-avatar', (link) => {
    api.editAvatar(link.avatarlink)
        .then((res) => {
            profileInfo.setUserAvatar({ avatar: res.avatar });
            popupAvatar.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
            popupAvatar.renderLoading({ isLoading: false })
        });
});
popupZoomImage.setEventListeners();
popupWithFormCard.setEventListeners();
popupWithProfile.setEventListeners();
popupDeleteCard.setEventListeners();
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
    const { name, job } = profileInfo.getUserInfo()
    popupInputNameElement.value = name;
    popupInputJobElement.value = job;
    formProfilePopupValidation.resetValidation()
});
popupCardsOpenElement.addEventListener('click', () => {
    popupWithFormCard.open()
    formCardPopupValidation.resetValidation();
});
avatarElement.addEventListener('click', () => {
    popupAvatar.open()
})