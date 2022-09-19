class Card {
    constructor(data, templateSelector, handleOpenImage, handleDeleteCard, userId, handleLikeCard, deleteLike) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleZoomCardsPopup = handleOpenImage;
        this._handlePopupDeleteCard = handleDeleteCard;
        this._like = data.likes;
        this._cardOwnerId = data.ownerId;
        this._ownerId = userId.id;
        this._cardId = data.id;
        this._handleLikeButton = handleLikeCard;
        this._deleteLike = deleteLike;


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
    _checkingArray() {
        return this._like.some((user) => {
            return this._ownerId === user._id
        })
    }
    _handleLike() {
        if (this._checkingArray()) {
            this._deleteLike(this._cardId)
        } else {
            this._handleLikeButton(this._cardId);
        }
    }
    _checkUserLike() {
        if (this._checkingArray()) {
            this._elementButtonLike.classList.add('places__like-button_active')
        }
    }
    updateLikes() {
        this._elementButtonLike.classList.toggle('places__like-button_active');
    }
    _deleteCard() {
        this._handlePopupDeleteCard(this._cardId, this._element);

    }
    removeCard() {
        this._element.remove()
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
        this._buttonTrash = this._element.querySelector('.places__trash');
        if (this._cardOwnerId === this._ownerId) {
            this._buttonTrash.classList.remove('places__trash_hidden')
        } else {
            this._buttonTrash.classList.add('places__trash_hidden')
        }
    }

}
export default Card;