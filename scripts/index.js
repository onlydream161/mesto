const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__button-close');
const popupOpenElement = document.querySelector('.profile__editor');
const popupInputNameElement = popupElement.querySelector('.popup__input_valve_name');
const popupInputJobElement = popupElement.querySelector('.popup__input_valve_job');
const profileName = document.querySelector('.profile__name');
const pofileCaption = document.querySelector('.profile__caption')
let formElement = document.querySelector('.popup__form');
const popupAddCard = document.querySelector('.page__popup-cards');
const popupAddCardInputName = popupAddCard.querySelector('.popup__input_valve_place');
const popupAddCardInputlink = popupAddCard.querySelector('.popup__input_valve_link');
const popupCardsCloseElement = popupAddCard.querySelector('.popup__button-close');
const popupCardsOpenElement = document.querySelector('.profile__card-button');
let popupCardsFormElement = popupAddCard.querySelector('.popup__form');
const popupImageElement = document.querySelector('.popup-foto');
const placeImageButton = document.querySelector('.places__image-button');
const popupImageButtonClose = document.querySelector('.popup-foto__close-button');
const popupImage = document.querySelector('.popup-foto__image');
const popupimageName = document.querySelector('.popup-foto__name');
const CardConteiner = document.querySelector('.places')
const AddCard = document.querySelector('.addcard').content;
const itemCard = AddCard.querySelector('.places__card');
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
//создание карточек по умолчанию 
initialCards.forEach(function(element) {
        const card = itemCard.cloneNode(true);
        card.querySelector('.places__name').textContent = element.name;
        card.querySelector('.places__image').src = element.link;
        card.querySelector('.places__image').alt = element.name;
        card.querySelector('.places__like-button').addEventListener('click', function(evt) {
            evt.target.classList.toggle('places__like-button_active');
        });
        card.querySelector('.places__image-button').addEventListener('click', function() {
            popupImage.src = element.link;
            popupimageName.textContent = element.name;
            popupImageElement.classList.add('popup_opened')
        })
        card.querySelector('.places__trash').addEventListener('click', function() {
            card.remove();
        })
        CardConteiner.append(card);
    })
    //общая функция открытия попап
function openAllPopup(popup) {
    popup.classList.add('popup_opened')
}
// общая функция закрытия попап
function closeAllPopup(popup) {
    popup.classList.remove('popup_opened')
}
//редактируем профиль 
function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = popupInputNameElement.value;
    let jobInput = popupInputJobElement.value;
    let nameProfile = profileName;
    let jobProfile = pofileCaption;
    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;
    closeAllPopup(popupElement)
}

function addFirstName() {
    popupInputNameElement.value = profileName.textContent;
    popupInputJobElement.value = pofileCaption.textContent;
}
// добавляем новые карточки
function formSubmitCards(evt) {
    evt.preventDefault();
    let NameCardInput = popupAddCardInputName.value;
    let LinkCardInput = popupAddCardInputlink.value;
    const addNewCard = itemCard.cloneNode(true);
    addNewCard.querySelector('.places__name').textContent = NameCardInput;
    addNewCard.querySelector('.places__image').src = LinkCardInput;
    addNewCard.querySelector('.places__image').alt = NameCardInput;
    addNewCard.querySelector('.places__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('places__like-button_active');
    });
    addNewCard.querySelector('.places__image-button').addEventListener('click', function() {
        popupImage.src = LinkCardInput;
        popupImage.alt = NameCardInput;
        popupimageName.textContent = NameCardInput;
        popupImageElement.classList.add('popup_opened')
    })
    addNewCard.querySelector('.places__trash').addEventListener('click', function() {
        addNewCard.remove()
    });
    CardConteiner.prepend(addNewCard);
    closeAllPopup(popupAddCard)
    popupAddCardInputName.value = '';
    popupAddCardInputlink.value = '';
}

popupCardsFormElement.addEventListener('submit', formSubmitCards)
formElement.addEventListener('submit', formSubmitHandler);
popupOpenElement.addEventListener('click', () => {
    addFirstName();
    openAllPopup(popupElement)
})
popupCloseElement.addEventListener('click', () => closeAllPopup(popupElement))
popupCardsOpenElement.addEventListener('click', () => openAllPopup(popupAddCard))
popupCardsCloseElement.addEventListener('click', () => closeAllPopup(popupAddCard))
popupImageButtonClose.addEventListener('click', () => closeAllPopup(popupImageElement))