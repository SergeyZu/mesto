// import Card from "../scripts/Card";
import { createCard } from "../pages/index";

export default class Section {
    constructor({ items }, containerSelector) {
        // renderer
        this._initialItems = items;
        this._containerSelector = containerSelector;
        // this._containerSelector = document.querySelector(containerSelector);
        // this._renderer = renderer;
    }

    

    // Добавляем элемент в контейнер
    _addItem(element) {
        this._containerSelector.prepend(element);
    };

    // Очищаем содержимое контейнера
    clear() {
        this._containerSelector.innerHTML = '';
    };

    // Отрисовываем элементы из массива items
    _renderInitialItems() {
        this.clear();
        
        this._initialItems.forEach(item => {
            createCard(item);

            this._addItem(element);
        });

    //     function rendererCard(item) {
    //         const cardItem = createCard(item);
    //         cardsContainer.prepend(cardItem);
    //     };

    //     function createCard(item) {
    //         const card = new Card(item, '#card-template', viewImageHandler );
    //         const cardElement = card.generateCard();
    //         return cardElement;
    //     };
    };

}
