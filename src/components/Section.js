export default class Section {
    constructor({ items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    addItem(element) {
        this._container.prepend(element)
    }
    rendererItems() {
        this._items.forEach(item => {
            this._renderer(item)
        });
    }
    rendererItem() {
        this._renderer(this._items)
    }
}