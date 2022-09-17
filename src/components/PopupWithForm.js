import Popup from "./Popup.js";
import { formPage } from "../utils/constants.js";




export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector(formPage.form);
        this._inputFormList = this._form.querySelectorAll(formPage.input);
        this._buttonForm = this._form.querySelector(formPage.button)


    }

    _getInputValues() {
        this._inputValues = {}
        this._inputFormList.forEach((input) => {
            this._inputValues[input.name] = input.value;

        });
        return this._inputValues
    }

    renderLoading({ isLoading }) {
        if (isLoading) {
            this._buttonForm.textContent = 'Сохранение...'
        } else {
            this._buttonForm.textContent = 'Сохранить'
        }
    }
    setEventListeners() {

        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.renderLoading({ isLoading: true });
            this._handleFormSubmit(this._getInputValues())
        })

    }
    close() {
        super.close();
        this._form.reset()
    }


}