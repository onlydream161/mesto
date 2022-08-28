 const popupProfileEdit = document.querySelector('.page__popup-profile');
 const popupProfileCloseElement = popupProfileEdit.querySelector('.popup__button-close');
 const popupOpenElement = document.querySelector('.profile__editor');
 const popupInputNameElement = popupProfileEdit.querySelector('.popup__input_valve_name');
 const popupInputJobElement = popupProfileEdit.querySelector('.popup__input_valve_job');
 const profileName = document.querySelector('.profile__name');
 const pofileCaption = document.querySelector('.profile__caption');
 const formProfileElement = document.querySelector('.popup__form[name="namejob"]');
 const popupCardsOpenElement = document.querySelector('.profile__card-button');
 const cardConteiner = document.querySelector('.places')
 const formCardsAdd = document.querySelector('.popup__form[name="newcard"]');
 const formPage = {
     form: '.popup__form',
     button: '.popup__button-save',
     input: '.popup__input',
     inputError: 'popup__input_error',
     buttonDisabled: 'popup__button-save_disabled',
     spanError: '.popup__error'
 };