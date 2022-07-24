const formPage = {
    form: '.popup__form',
    button: '.popup__button-save',
    input: '.popup__input',
    inputError: '.popup__input_error',
    buttonDisabled: 'popup__button-save_disabled'
}

function enableValidation(config) {
    const form = Array.from(document.querySelectorAll(config.form));
    form.forEach((form) => {
        form.addEventListener('input', (evt) => handleFormInput(evt, config));
    })
}

function handleFormInput(evt, config) {
    const input = evt.target;
    const form = evt.currentTarget;

    showFieldError(input, form);
    setSubmitButtonState(form, config);
    setErrorInput(form, config)
}

function showFieldError(input, form) {
    const span = form.querySelector(`#${input.name}-error`);
    span.textContent = input.validationMessage;

}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.button)
    const isValid = form.checkValidity();
    if (isValid) {
        button.removeAttribute('disabled');
        button.classList.remove(config.buttonDisabled);
    }
    if (!isValid) {
        button.setAttribute('disabled', true);
        button.classList.add(config.buttonDisabled);
    }
}

function setErrorInput(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.input));
    inputs.forEach((input) => {
        const inputIsValid = input.checkValidity()
        if (inputIsValid) {
            input.classList.remove(config.inputError);
        } else {
            input.classList.add(config.inputError);
        }
    })
}

enableValidation(formPage);