const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__button-close');
const popupOpenElement = document.querySelector('.profile__editor');
const popupInputNameElement = popupElement.querySelector('.popup__input_name_valve');
const popupInputJobElement = popupElement.querySelector('.popup__input_job_valve');
const profileName = document.querySelector('.profile__name');
const pofileCaption = document.querySelector('.profile__caption')
let formElement = document.querySelector('.popup__form');





const openPopup = function() {
    popupInputNameElement.value = profileName.textContent;
    popupInputJobElement.value = pofileCaption.textContent;
    popupElement.classList.add('popup_opened');


}
const closePopup = function() {
    popupElement.classList.remove('popup_opened');

}

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = popupInputNameElement.value;
    let jobInput = popupInputJobElement.value;


    let nameProfile = profileName;
    let jobProfile = pofileCaption;


    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;
    closePopup()
}
formElement.addEventListener('submit', formSubmitHandler);
popupOpenElement.addEventListener('click', openPopup)
popupCloseElement.addEventListener('click', closePopup)