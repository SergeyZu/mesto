import {createCard} from '../pages/index.js'

export default class Section {
    // constructor({ items, renderer }, selector) {
    constructor({ items }, selector) {

        this._initialItems = items;
        this._container = document.querySelector(selector);
        // this._containerSelector = containerSelector;
        // this._renderer = renderer;
    }

    // Добавляем элемент в контейнер
    addItem(element) {
        this._container.prepend(element)
    };

    // Отрисовываем элементы из массива items
    renderInitialItems() {
        
        this._initialItems.forEach((item) => {
            const cardItem = createCard(item);
            this.addItem(cardItem);
            
            


            // this._renderer(item);

        });
    };

}
