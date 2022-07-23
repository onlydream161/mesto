const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__button-close');
const popupOpenElement = document.querySelector('.profile__editor');
const popupInputNameElement = popupElement.querySelector('.popup__input_valve_name');
const popupInputJobElement = popupElement.querySelector('.popup__input_valve_job');
const profileName = document.querySelector('.profile__name');
const pofileCaption = document.querySelector('.profile__caption')
const formElement = document.querySelector('.popup__form');
const popupAddCard = document.querySelector('.page__popup-cards');
const popupAddCardInputName = popupAddCard.querySelector('.popup__input_valve_place');
const popupAddCardInputlink = popupAddCard.querySelector('.popup__input_valve_link');
const popupCardsCloseElement = popupAddCard.querySelector('.popup__button-close');
const popupCardsOpenElement = document.querySelector('.profile__card-button');
const popupCardsFormElement = popupAddCard.querySelector('.popup__form');
const popupImageElement = document.querySelector('.popup-foto');
const placeImageButton = document.querySelector('.places__image-button');
const popupImageButtonClose = document.querySelector('.popup-foto__close-button');
const popupImage = document.querySelector('.popup-foto__image');
const popupimageName = document.querySelector('.popup-foto__name');
const cardConteiner = document.querySelector('.places')
const addCard = document.querySelector('.addcard').content;
const itemCard = addCard.querySelector('.places__card');
const popupButtonSave = popupElement.querySelector('.popup__button-save');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// создание карточки
function createCard(name, link) {
    const cardElement = itemCard.cloneNode(true);
    cardElement.querySelector('.places__name').textContent = name;
    cardElement.querySelector('.places__image').src = link;
    cardElement.querySelector('.places__image').alt = name;
    cardElement.querySelector('.places__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('places__like-button_active');
    });
    cardElement.querySelector('.places__image-button').addEventListener('click', function() {
        popupImage.src = link;
        popupimageName.textContent = name;
        popupImage.alt = name;
        openAllPopup(popupImageElement);
    })
    cardElement.querySelector('.places__trash').addEventListener('click', function() {
        cardElement.remove();
    })
    return cardElement
}
//создание карточек по умолчанию 
initialCards.forEach(function(element) {
        const cardDefault = createCard(element.name, element.link);
        cardConteiner.append(cardDefault);
    })
    //общая функция открытия попап
function openAllPopup(popup) {
    clearPopup()
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', () => closePopupEsc(event, popup))
    popup.addEventListener('mousedown', () => closePopupByOverlay(event, popup))
}
// общая функция закрытия попап
function closeAllPopup(popup) {
    popup.classList.remove('popup_opened');
    const forms = Array.from(document.querySelectorAll('.popup__form'))
    forms.forEach((form) => {
        form.reset()
    })
    document.removeEventListener('keydown', () => closePopupEsc(event, popup))
    popup.removeEventListener('mousedown', () => closePopupByOverlay(event, popup))
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
    closeAllPopup(popupElement)
}

function addFirstName() {
    popupInputNameElement.value = profileName.textContent;
    popupInputJobElement.value = pofileCaption.textContent;
}
// добавляем новые карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const NameCardInput = popupAddCardInputName.value;
    const LinkCardInput = popupAddCardInputlink.value;
    const cardNew = createCard(NameCardInput, LinkCardInput)
    cardConteiner.prepend(cardNew);
    closeAllPopup(popupAddCard)
    popupCardsFormElement.reset();
}
// закрытие попап через оверлей
function closePopupByOverlay(event, popup) {
    if (event.target !== event.currentTarget) {
        return
    }
    closeAllPopup(popup)
}
// закрытие попап через Esc
function closePopupEsc(event, popup) {
    if (event.keyCode === 27) {
        closeAllPopup(popup)
    }
}
// очищаем попап от сохраненных ошибок при закрытии на крестик
function clearPopup() {
    const error = Array.from(document.querySelectorAll('.popup__error'))
    error.forEach((error) => {
        error.textContent = ''
    })
    const redInput = Array.from(document.querySelectorAll('.popup__input'))
    redInput.forEach((input) => {
        input.classList.remove('popup__input_error')
    })
}


popupCardsFormElement.addEventListener('submit', handleCardFormSubmit)
formElement.addEventListener('submit', handleProfileFormSubmit);
popupOpenElement.addEventListener('click', () => {
    addFirstName();
    openAllPopup(popupElement)
})
popupCloseElement.addEventListener('click', () => closeAllPopup(popupElement))
popupCardsOpenElement.addEventListener('click', () => openAllPopup(popupAddCard))
popupCardsCloseElement.addEventListener('click', () => closeAllPopup(popupAddCard))
popupImageButtonClose.addEventListener('click', () => closeAllPopup(popupImageElement))