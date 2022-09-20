class Card {
    constructor(data, templateSelector, handleOpenImage, handleDeleteCard, userId, handleLikeCard, deleteLike) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleZoomCardsPopup = handleOpenImage;
        this._handlePopupDeleteCard = handleDeleteCard;
        this.likes = data.likes;
        this._cardOwnerId = data.ownerId;
        this._ownerId = userId.id;
        this._cardId = data.id;
        this._handleLikeButton = handleLikeCard;
        this._deleteLike = deleteLike;
        this._buttonTrash = document.querySelector('.places__trash')
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
        const elementCardImage = this._element.querySelector('.places__image');
        this._element.querySelector('.places__name').textContent = this._name;
        elementCardImage.src = this._link;
        elementCardImage.alt = this._name;
        this._likeNumber = this._element.querySelector('.places__like-sum');
        this._likeNumber.textContent = this.likes.length;
        this._buttonTrash = this._element.querySelector('.places__trash');
        this._elementButtonLike = this._element.querySelector('.places__like-button');
        this._checkOwens()
        this._checkUserLike()
        this._setEventListeners()
        return this._element
    }
    _isLiked() {
        return this.likes.some((user) => {
            return this._ownerId === user._id
        })
    }
    _handleLike() {
        if (this._isLiked()) {
            this._deleteLike(this._cardId)
        } else {
            this._handleLikeButton(this._cardId);
        }
    }
    _checkUserLike() {
        if (this._isLiked()) {
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
    setLikeLenght(likesData) {
        this._likeNumber.textContent = likesData.length;
        this.likes = likesData.likes
    }
    _setEventListeners() {
        this._elementButtonLike.addEventListener('click', () => {
            this._handleLike()
        })
        this._buttonTrash.addEventListener('click', () => {
            this._deleteCard();
        })
        this._element.querySelector('.places__image-button').addEventListener('click', () => {
            this._handleZoomCardsPopup(this._name, this._link);
        })
    }
    _checkOwens() {
        if (this._cardOwnerId === this._ownerId) {
            this._buttonTrash.classList.remove('places__trash_hidden')
        } else {
            this._buttonTrash.classList.add('places__trash_hidden')
        }
    }

}
export default Card;