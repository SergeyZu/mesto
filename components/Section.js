import {createCard} from '../pages/index.js'

export default class Section {
    constructor({ items, renderer }, selector) {
    // constructor({ items }, selector) {

        this._initialItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
        // this._containerSelector = containerSelector;
        // 
    }

    // Добавляем элемент в контейнер
    addItem(element) {
        this._container.append(element)
    };

    // Отрисовываем элементы из массива items
    renderInitialItems() {
        
        this._initialItems.forEach((item) => {
            const cardItem = createCard(item);
            this.addItem(cardItem);

        });
    };

}
