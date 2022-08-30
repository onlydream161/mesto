import Popup from "./Popup.js";
import { formPage } from "../utils/constants.js";



export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleCardFormSubmit) {
        super(popupSelector);
        this._handleCardFormSubmit = handleCardFormSubmit;
        this._form = this._popup.querySelector(formPage.form);
        this._inputFormList = this._form.querySelectorAll(formPage.input);

    }

    _getInputValues() {
        this._inputValues = {}
        this._inputFormList.forEach((input) => {
            this._inputValues[input.name] = input.value;

        });
        return this._inputValues
    }
    setEventListeners() {

        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleCardFormSubmit(this._getInputValues())
        })

    }
    close() {
        super.close();
        this._form.reset()
    }


}