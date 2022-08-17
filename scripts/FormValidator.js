class FormValidator {
    constructor(config, popupform) {
        this._config = config;
        this._popupform = popupform;
        this._button = this._popupform.querySelector(this._config.button);


    }
    _handleFormInput(evt) {
        this._input = evt.target;
        this._span = this._popupform.querySelector(`#${this._input.name}-error`);
        this._setSubmitButtonStateValid(this._popupform);
        this._setErrorInput(this._input)
    }
    _showFieldError(input) {
        this._span.textContent = input.validationMessage;
    }
    _hideFieldError() {
        this._span.textContent = ''
    }
    _setSubmitButtonStateValid(form) {
        const isValid = form.checkValidity();
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
        this._hideFieldError();
    }
    _setErrorInputInvalid(input) {
        input.classList.add(this._config.inputError);
        this._showFieldError(input, this._popupform)
        this._setSubmitButtonStateNotValid()
    }
    _setErrorInput(input) {
        const isValid = input.checkValidity();
        if (isValid) {
            this._setErrorInputValid(input);
        } else {
            this._setErrorInputInvalid(input);
        }
    }
    clearError() {
        this._setSubmitButtonStateNotValid()
        const inputs = Array.from(this._popupform.querySelectorAll(this._config.input))
        inputs.forEach((input) => {
            this._setErrorInputValid(input)
        })
    }
}

export default FormValidator


// this._errorMessege = this._popupform.querySelector(this._config.spanError)
//this._showFieldError(this._input, this._form);
//this._hideFieldError()



//const span = form.querySelector(`#${input.name}-error`);



// const spanError = this._input.validationMessage;

// const errors = Array.from(this._popupform.querySelectorAll(this._config.spanError))
// errors.forEach((error) => {
//     error.textContent = ''
// });
// this._span.textContent = this._input.validationMessage;
// this._input.validationMessage = ''