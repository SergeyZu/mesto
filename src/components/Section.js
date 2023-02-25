export default class Section {
    constructor({renderer}, selector) {

        // this._initialItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    // Добавляем элемент в контейнер
    addItem(element) {
        this._container.prepend(element)
    };

    // Отрисовываем элементы из массива items
    renderInitialItems(items) {
        
        items.forEach((item) => {
            this._renderer(item);
        });
    };

}
