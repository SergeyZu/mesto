export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialItems = items;
        this._containerSelector = containerSelector;
        // this._containerSelector = document.querySelector(containerSelector);
        this._renderer = renderer;
    }


    // Добавляем элемент в контейнер
    addItem(element) {
        this._containerSelector.prepend(element);
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
