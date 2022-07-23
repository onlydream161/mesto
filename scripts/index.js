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
const placeImageButton = document.querySelector('.places__image-button');
const popupImageButtonClose = document.querySelector('.popup-foto__close-button');
const popupImage = document.querySelector('.popup-foto__image');
const popupimageName = document.querySelector('.popup-foto__name');
const cardConteiner = document.querySelector('.places')
const addCard = document.querySelector('.addcard').content;
const itemCard = addCard.querySelector('.places__card');
const popupButtonSave = popupProfileEdit.querySelector('.popup__button-save');
const popupAddCardButtonSave = popupAddCard.querySelector('.popup__button-save')

console.log(document.getElementsByName('namejob'))
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
    const imageCardElemen = cardElement.querySelector('.places__image');
    cardElement.querySelector('.places__name').textContent = name;
    imageCardElemen.src = link;
    imageCardElemen.alt = name;
    cardElement.querySelector('.places__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('places__like-button_active');
    });
    cardElement.querySelector('.places__image-button').addEventListener('click', function() {
        popupImage.src = link;
        popupimageName.textContent = name;
        popupImage.alt = name;
        openPopup(popupImageElement);
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
    closePopup(popupAddCard)
    popupCardsFormElement.reset();
    popupAddCardButtonSave.setAttribute('disabled', true);
    popupAddCardButtonSave.classList.add('popup__button-save_disabled');
}
// закрытие попап через оверлей
function closePopupByOverlay(event) {
    if (event.target !== event.currentTarget) {
        return
    }
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
}
// закрытие попап через Esc
function closePopupEsc(event) {
    if (event.keyCode === 27) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
// очищаем попап от сохраненных ошибок при закрытии на крестик
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