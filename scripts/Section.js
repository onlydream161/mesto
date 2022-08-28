export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    addItem(element) {
        this._containerSelector.prepend(element)
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