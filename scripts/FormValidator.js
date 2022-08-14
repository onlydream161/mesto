class FormValidator {
    constructor(config, popupform) {
        this._config = config;
        this._popupform = popupform;
    }
    _handleFormInput(evt) {
        this._input = evt.target;
        this._form = evt.currentTarget;
        this._showFieldError(this._input, this._form);
        this._setSubmitButtonState(this._form);
        this._setErrorInput(this._form)
    }
    _showFieldError(input, form) {
        const span = form.querySelector(`#${input.name}-error`);
        span.textContent = input.validationMessage;
    }
    _setSubmitButtonState(form) {
        const button = form.querySelector(this._config.button)
        const isValid = form.checkValidity();
        if (isValid) {
            button.removeAttribute('disabled');
            button.classList.remove(this._config.buttonDisabled);
        }
        if (!isValid) {
            button.setAttribute('disabled', true);
            button.classList.add(this._config.buttonDisabled);
        }
    }
    enableValidation() {
        this._popupform.addEventListener('input', (evt) => this._handleFormInput(evt));
    }
    _setErrorInput(form) {
        const inputs = Array.from(form.querySelectorAll(this._config.input));
        inputs.forEach((input) => {
            const inputIsValid = input.checkValidity()
            if (inputIsValid) {
                input.classList.remove(this._config.inputError);
            } else {
                input.classList.add(this._config.inputError);
            }
        })
    }
}

export default FormValidator