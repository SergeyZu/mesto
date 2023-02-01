export default class Section {
    constructor({ items, renderer }, selector) {

        this._initialItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    // Добавляем элемент в контейнер
    addItem(element) {
        this._container.prepend(element)
    };

    // Отрисовываем элементы из массива items
    renderInitialItems() {
        
        this._initialItems.forEach((item) => {
            this._renderer(item);
            this.addItem(item);

        });
    };

}
