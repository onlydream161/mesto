const popupElement = document.querySelector('.popup');
const popupCloseElement = popupElement.querySelector('.popup__button-close');
const popupOpenElement = document.querySelector('.profile__editor');
const popupSaveform = popupElement.querySelector('.popup__button-save')


const openPopup = function() {
    document.querySelector('.popup__form-name').value = document.querySelector('.profile__name').textContent;
    document.querySelector('.popup__form-job').value = document.querySelector('.profile__caption').textContent;
    popupElement.classList.add('popup_opened');

    console.log('openPopup');
}
const closePopup = function() {
    popupElement.classList.remove('popup_opened');
    console.log('closePopup')
}
const closePopupByOverlay = function(event) {
    if (event.target !== event.currentTarget) {
        return
    }
    closePopup();
}

popupOpenElement.addEventListener('click', openPopup)
popupCloseElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByOverlay)



let formElement = document.querySelector('.popup__forms');


function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popup__form-name').value;
    let jobInput = formElement.querySelector('.popup__form-job').value;


    let nameProfile = document.querySelector('.profile__name');
    let jobProfile = document.querySelector('.profile__caption');

    nameProfile.textContent = nameInput;
    jobProfile.textContent = jobInput;

}
formElement.addEventListener('submit', formSubmitHandler);
popupSaveform.addEventListener('click', formSubmitHandler);
popupSaveform.addEventListener('click', closePopup);