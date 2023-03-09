export default class Section {
    constructor({renderer}, selector) {

        // this._initialItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    // Добавляем начальные элементы в контейнер
    addInitialItem(element) {
        this._container.append(element)
    };

    // Добавляем новый элемент в контейнер
    addUserItem(element) {
        this._container.prepend(element)
    };

    // Отрисовываем элементы из массива items
    renderInitialItems(items) {
        
        items.forEach((item) => {
            this._renderer(item);
        });
    };

}
