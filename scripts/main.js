// Pętla: for..of
//for (const image of images) {
//  console.log("To jest obrazek " + image);
//}

//Pętla: for
//i++ => i=i+1
//for (let i = 0; i < images.length; i++) {
//  const image = images[i];
//console.log("To jest obrazek " + image);
//}

//const isEmpty = (images.length === 0);
//const isEmpty2 = (images.length == 0);

function displayImages() {
    console.log('Liczba obrazków ' + images.length);
    console.log('Pierwszy element listy ' + images[0]);
    console.log('Drugi element listy ' + images[1]);

}

function displayLastElement() {
    console.log('Ostatni element listy ' + images[images.length - 1]);
}

function displayMathExercises() {
    console.log('/ ' + (10000 / 10000));
    console.log('+ ' + (10000 + 10000));
    console.log('- ' + (10000 - 10000));
    console.log('* ' + (10000 * 10000));
    console.log('** ' + (10000 ** 10000));
}

//zadać pytanie skąd wiadomo ze to obiekt, jakiej klasy, inaczej niz w javie
function renderPhoto(photo) {
    const $card = document.createElement('div');
    $card.classList.add('card', 'col-3', 'mx-4');
    $card.style.width = '30%';

    const $img = document.createElement('img');
    $img.src = photo.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    // Group HTML Elements
    $card.append($img);
    $card.append($body);
    $body.append($title);

    //Render
    const $main = document.querySelector('main');
    $main.append($card);
}

function displayPhotos(photos) {
    // for (const photo of photos) {
    //     renderPhoto(photo);
    // }
    photos.forEach(function (photo) {
        console.group(photo.id);
        console.info(photo.author.name);
        console.groupEnd();
        renderPhoto(photo);
    });
}


// Uruchomienie funkcji
//displayImages();
//displayLastElement();
//displayMathExercises();

//renderPhoto('https://picsum.photos/id/10/300/150');
//renderPhoto('https://picsum.photos/id/20/300/150');
//renderPhoto('https://picsum.photos/id/30/300/150');
//displayPhotoCollection( images );

// function shouldDisplayPhotos() {
//     const answer = prompt('Czy chcesz wyświetlić zdjęcia?');
//     return (answer.toLowerCase()) === 'tak';
// }


// if (shouldDisplayPhotos()) {
// //if (images.length === 0) {
//     console.log('odpowiedź tak');
//     displayPhotoCollection( images );
// } else {
//     console.log('odpowiedź inna niż tak');
//     displayMessage('Użytkownik nie chce wyświetlić zdjęć');
// }


function isEmpty(images) {
    return images.length === 0;
}


function main() {

    //debugger;

    loader.show();

    fetchPhotosFromRemote()
        .then(function (images) {

            if (!isEmpty(images)) {
                console.log('zdjęcia istnieją');
                displayPhotos(images);
            } else {
                console.log('brak zdjęć');
                displayMessage('Nie ma zdjęć.')
            }

        })

        .catch(function () {
            console.log('problem z pobraniem');
            displayErrorMessage('Problem z pobraniem zdjęć');
        })
        
        .finally(function () {
            loader.hide();
        });


    setTimeout(function () {
        console.info('chowamy loaderka');
        loader.hide();
    }, 1500); //1.5s


}

main();