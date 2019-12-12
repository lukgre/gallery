const loader = {};

loader.show = function () {
    // 1.Stworzenie HTMLImageElement
    const img = document.createElement('img');
    // dodanie klasy CSS do elementu drzewa DOM
    img.classList.add('loader');
    // 2. Ustawienei atrybutu src
    img.src = 'images/loader.gif';
    // 3. Pobranie referencji do konetenere, w którym loader się wyświetli
    const main = document.querySelector('main');
    // 4. Dodanie loadera do kontenera
    main.append(img);
};

loader.hide = function () {
    // 1. Pobranie referencji do loader (dobra praktyka to dodanie $ do nazwy zmiennej)
    const $loader = document.querySelector('img.loader')
    // 2. Usunięcie elementu z DOMa
    $loader.remove();

};

console.log(loader);