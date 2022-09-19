class FormValidator {
    constructor(config, popupForm) {
        this._config = config;
        this._popupform = popupForm;
        this._button = this._popupform.querySelector(this._config.button);
        this._inputs = Array.from(this._popupform.querySelectorAll(this._config.input))
    }
    _handleFormInput(evt) {
        this._input = evt.target;
        this._setSubmitButtonStateValid();
        this._setErrorInput(this._input)
        this._toggleSubmitButtonState(this._input)
    }
    _showFieldError(input) {
        this._span = this._popupform.querySelector(`#${input.name}-error`);
        this._span.textContent = input.validationMessage;
    }
    _hideFieldError(input) {
        this._span = this._popupform.querySelector(`#${input.name}-error`);
        this._span.textContent = '';
    }
    _setSubmitButtonStateValid() {
        const isValid = this._popupform.checkValidity();
        if (isValid) {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(this._config.buttonDisabled);
        }
    }
    _setSubmitButtonStateNotValid() {
        this._button.setAttribute('disabled', true);
        this._button.classList.add(this._config.buttonDisabled);
    }
    enableValidation() {
        this._popupform.addEventListener('input', (evt) => this._handleFormInput(evt));
    }
    _setErrorInputValid(input) {
        input.classList.remove(this._config.inputError);
        this._hideFieldError(input);
    }
    _setErrorInputInvalid(input) {
        input.classList.add(this._config.inputError);
        this._showFieldError(input, this._popupform)

    }
    _toggleSubmitButtonState(input) {
        const isValid = input.checkValidity();
        if (!isValid) {
            this._setSubmitButtonStateNotValid()
        }


    }
    _setErrorInput(input) {
        const isValid = input.checkValidity();
        if (isValid) {
            this._setErrorInputValid(input);
        } else {
            this._setErrorInputInvalid(input);
        }
    }
    resetValidation() {
        this._setSubmitButtonStateNotValid()
        this._inputs.forEach((input) => {
            this._setErrorInputValid(input)
        })
    }
}

export default FormValidator