class FormValidator {
    constructor(config, popupform) {
        this._config = config;
        this._popupform = popupform;
        this._button = this._popupform.querySelector(this._config.button);
    }
    _handleFormInput(evt) {
        this._input = evt.target;
        this._form = this._popupform;
        this._showFieldError(this._input, this._form);
        this._setSubmitButtonStateValid(this._form);
        this._setErrorInput(this._input)
    }
    _showFieldError(input, form) {
        const span = form.querySelector(`#${input.name}-error`);
        span.textContent = input.validationMessage;
    }
    _setSubmitButtonStateValid(form) {
        const isValid = form.checkValidity();
        if (isValid) {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(this._config.buttonDisabled);
        }
    }
    setSubmitButtonStateNotValid() {
        this._button.setAttribute('disabled', true);
        this._button.classList.add(this._config.buttonDisabled);
    }
    enableValidation() {
        this._popupform.addEventListener('input', (evt) => this._handleFormInput(evt));
    }
    _setErrorInput(input) {
        const isValid = input.checkValidity();
        if (!isValid) {
            input.classList.add(this._config.inputError);
        } else {
            input.classList.remove(this._config.inputError);
        }
    }
    clearError() {
        const errors = Array.from(this._popupform.querySelectorAll(this._config.spanError))
        errors.forEach((error) => {
            error.textContent = ''
        })
        const redInputs = Array.from(this._popupform.querySelectorAll(this._config.input))
        redInputs.forEach((input) => {
            input.classList.remove(this._config.inputError)
        })
        const forms = Array.from(this._popupform.querySelectorAll(this._config.form))
        forms.forEach((form) => {
            form.reset()
        })
    }
}

export default FormValidator