export default class Section {
    constructor({ renderer }, container) {
        // this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    addItem(element) {
        this._container.prepend(element)
    }
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }

}