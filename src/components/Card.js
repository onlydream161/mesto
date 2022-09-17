class Card {
    constructor(data, templateSelector, handleZoomCardsPopup, handlePopupDeleteCard, userId, handleLikebutton, deleteLike) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleZoomCardsPopup = handleZoomCardsPopup;
        this._handlePopupDeleteCard = handlePopupDeleteCard;
        this._like = data.likes;
        this._cardOwnerId = data.ownerId;
        this._ownerId = userId.id;
        this._cardId = data.id;
        this._handleLikeButton = handleLikebutton;
        this._deleteLike = deleteLike
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
        const elementCardImage = this._element.querySelector('.places__image');
        this._element.querySelector('.places__name').textContent = this._name;
        elementCardImage.src = this._link;
        elementCardImage.alt = this._name;
        this._likeNumber = this._element.querySelector('.places__like-sum');
        this._likeNumber.textContent = this._like.length;
        this._checkOwens()
        this._checkUserLike()
        return this._element
    }
    checkLikesList(card) {
        this._like = card.likes
    }
    _handleLike() {
        if (this._like.some((user) => {
                return this._ownerId === user._id
            })) {
            this._elementButtonLike.classList.remove('places__like-button_active');
            this._deleteLike(this._cardId)
        } else {
            this._handleLikeButton(this._cardId);
            this._elementButtonLike.classList.add('places__like-button_active');
        }
    }
    _deleteCard() {
        this._handlePopupDeleteCard(this._cardId);
    }
    setLikeLenght(card) {
        this._likeNumber.textContent = card.length;
        this._like = card.likes
    }
    _setEventListeners() {
        this._elementButtonLike = this._element.querySelector('.places__like-button');
        this._elementButtonLike.addEventListener('click', () => {
            this._handleLike()
        })
        this._element.querySelector('.places__trash').addEventListener('click', () => {
            this._deleteCard();
        })
        this._element.querySelector('.places__image-button').addEventListener('click', () => {
            this._handleZoomCardsPopup(this._name, this._link);
        })
    }
    _checkOwens() {
        if (this._cardOwnerId == this._ownerId) {
            this._element.querySelector('.places__trash').classList.remove('places__trash_hidden')
        } else {
            this._element.querySelector('.places__trash').classList.add('places__trash_hidden')
        }
    }
    _checkUserLike() {
        if (this._like.some((user) => {
                return this._ownerId === user._id
            })) {
            this._elementButtonLike.classList.add('places__like-button_active')
        }
    }
}
export default Card;