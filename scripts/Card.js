class Card {
    constructor(data, templateSelector, handleZoomCardsPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector
        this._handleZoomCardsPopup = handleZoomCardsPopup
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.places__card')
            .cloneNode(true);
        return cardElement
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners()
        this._element.querySelector('.places__name').textContent = this._name;
        this._element.querySelector('.places__image').src = this._link;
        this._element.querySelector('.places__image').alt = this._name;

        return this._element
    }
    _handleLikeButton() {
        this._element.querySelector('.places__like-button').classList.toggle('places__like-button_active');
    }
    _setEventListeners() {
        this._element.querySelector('.places__like-button').addEventListener('click', () => {
            this._handleLikeButton()
        })
        this._element.querySelector('.places__trash').addEventListener('click', () => {
            this._element.remove()
        })
        this._element.querySelector('.places__image-button').addEventListener('click', () => {
            this._handleZoomCardsPopup(this._name, this._link);
        })
    }
}


export default Card;