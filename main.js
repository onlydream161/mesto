(()=>{"use strict";var e=document.querySelector(".profile__editor"),t=document.querySelector(".popup__input_valve_name"),n=document.querySelector(".popup__input_valve_job"),r=document.querySelector(".profile__name"),o=document.querySelector(".profile__caption"),i=document.querySelector('.popup__form[name="namejob"]'),u=document.querySelector(".profile__card-button"),a=document.querySelector(".places"),c=document.querySelector('.popup__form[name="newcard"]'),s={form:".popup__form",button:".popup__button-save",input:".popup__input",inputError:"popup__input_error",buttonDisabled:"popup__button-save_disabled",spanError:".popup__error"};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const p=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=n,this._handleZoomCardsPopup=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".places__card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".places__image");return this._element.querySelector(".places__name").textContent=this._name,e.src=this._link,e.alt=this._name,this._element}},{key:"_handleLikeButton",value:function(){this._elementButtonLike.classList.toggle("places__like-button_active")}},{key:"_removeCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementButtonLike=this._element.querySelector(".places__like-button"),this._elementButtonLike.addEventListener("click",(function(){e._handleLikeButton()})),this._element.querySelector(".places__trash").addEventListener("click",(function(){e._removeCard()})),this._element.querySelector(".places__image-button").addEventListener("click",(function(){e._handleZoomCardsPopup(e._name,e._link)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._popupform=n,this._button=this._popupform.querySelector(this._config.button),this._inputs=Array.from(this._popupform.querySelectorAll(this._config.input))}var t,n;return t=e,(n=[{key:"_handleFormInput",value:function(e){this._input=e.target,this._setSubmitButtonStateValid(this._popupform),this._setErrorInput(this._input)}},{key:"_showFieldError",value:function(e){this._span=this._popupform.querySelector("#".concat(e.name,"-error")),this._span.textContent=e.validationMessage}},{key:"_hideFieldError",value:function(e){this._span=this._popupform.querySelector("#".concat(e.name,"-error")),this._span.textContent=""}},{key:"_setSubmitButtonStateValid",value:function(e){e.checkValidity()&&(this._button.removeAttribute("disabled"),this._button.classList.remove(this._config.buttonDisabled))}},{key:"_setSubmitButtonStateNotValid",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._config.buttonDisabled)}},{key:"enableValidation",value:function(){var e=this;this._popupform.addEventListener("input",(function(t){return e._handleFormInput(t)}))}},{key:"_setErrorInputValid",value:function(e){e.classList.remove(this._config.inputError),this._hideFieldError(e)}},{key:"_setErrorInputInvalid",value:function(e){e.classList.add(this._config.inputError),this._showFieldError(e,this._popupform),this._setSubmitButtonStateNotValid()}},{key:"_setErrorInput",value:function(e){e.checkValidity()?this._setErrorInputValid(e):this._setErrorInputInvalid(e)}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonStateNotValid(),this._inputs.forEach((function(t){e._setErrorInputValid(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"rendererItem",value:function(){this._renderer(this._items)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__button-close"),this._handleEsc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){e._handleCloseByOverlay(t)})),this._buttonClose.addEventListener("click",(function(){return e.close()}))}},{key:"_handleCloseByOverlay",value:function(e){e.target===e.currentTarget&&this.close()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopup=t._popup.querySelector(".popup__foto-image"),t._titlePopup=t._popup.querySelector(".popup__foto-name"),t}return t=u,(n=[{key:"open",value:function(e,t){this._imagePopup.src=t,this._titlePopup.textContent=e,this._imagePopup.alt=e,g(j(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function I(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleCardFormSubmit=t,n._form=n._popup.querySelector(s.form),n._inputFormList=n._form.querySelectorAll(s.input),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputFormList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;C(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleCardFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){C(V(u.prototype),"close",this).call(this),this._form.reset()}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(b);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._job=t.job}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._name.textContent=t,this._job.textContent=n}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"getCard",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.json()}))}},{key:"editProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.firstname,about:e.job})}).then((function(e){return e.json()}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({link:e.placelink,name:e.nameplace})}).then((function(e){return e.json()}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"073748d7-d2d0-48ec-a4b8-d36e11277d28","Content-Type":"application/json"}});F.getUserInfo().then((function(e){A.setUserInfo({name:e.name,job:e.about})})).catch((function(e){return console.log(e)})),F.getCard().then((function(e){e.reverse();var t=new d({items:e,renderer:function(e){var n=D(e);t.addItem(n)}},a);t.rendererItems()})).catch((function(e){console.log(e)}));var U=new O(".page__popup-foto");function D(e){return new p(e,".addcard",(function(){U.open(e.name,e.link)})).generateCard()}U.setEventListeners();var N=new T(".page__popup-cards",(function(e){F.postNewCard(e).then((function(e){var t=D({name:e.name,link:e.link});console.log(t),a.prepend(t)})),N.close()}));N.setEventListeners();var A=new B({name:r,job:o}),G=new T(".page__popup-profile",(function(e){F.editProfile(e).then((function(e){A.setUserInfo({name:e.name,job:e.about})})),G.close()}));G.setEventListeners();var J=new h(s,i);J.enableValidation();var Z=new h(s,c);Z.enableValidation(),e.addEventListener("click",(function(){G.open();var e=A.getUserInfo(),r=e.name,o=e.job;t.value=r,n.value=o,J.resetValidation()})),u.addEventListener("click",(function(){N.open(),Z.resetValidation()}))})();