export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialItems = items;
        this._containerSelector = containerSelector;
        this._renderer = renderer;
    }


    // Добавляем элемент в контейнер
    addItem(element) {
        document.querySelector(this._containerSelector).prepend(element);
    };

    // Очищаем содержимое контейнера
    // clear() {
    //     this._containerSelector.innerHTML = '';
    // };

    // Отрисовываем элементы из массива items
    renderInitialItems() {
        // this.clear();        
        this._initialItems.forEach(item => {
            this._renderer(item);

            this.addItem(element);
        });
    };

}
