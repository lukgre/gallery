// Pętla: for..of
for (const image of images) {
   console.log("To jest obrazek " + image);
}

//Pętla: for
//i++ => i=i+1
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    //console.log("To jest obrazek " + image);
}

//const isEmpty = (images.length === 0);
//const isEmpty2 = (images.length == 0);

function displayImages() {
    console.log('Liczba obrazków ' + images.length);
    console.log('Pierwszy element listy ' + images[0]);
    console.log('Drugi element listy ' + images[1]);
    
}

function displayLastElement() {
    console.log('Ostatni element listy ' + images[ images.length - 1 ]);
}

function displayMathExercises() {
    console.log('/ ' + (10000 / 10000));
    console.log('+ ' + (10000 + 10000));
    console.log('- ' + (10000 - 10000));
    console.log('* ' + (10000 * 10000));
    console.log('** ' + (10000 ** 10000));
}

function renderPhoto(url) {
    //const url = "https://picsum.photos/300/150";
    const img = document.createElement('img');
    img.src = url;

    const main = document.querySelector('main');
    main.append(img);
    //console.log(url);
    //console.log(img);
}
 
function displayPhotoCollection( photos ) {
    console.log(photos);
    for (const photo of photos) {
        renderPhoto( photo );
    }
}

function displayMessage( message ) {
    const main = document.querySelector('main');
    //main.textContent = message;
    main.innerHTML = '<p class="alert alert-info text-center">' + message + '</p>';

    //Template literal strings
    // main.innerHTML = `
    //    <p class="alert alert-info text-center">
    //    ${message}
    //    </p>
    // `;
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


function isEmpty () {
    return images.length === 0;
}

loader.show();

//if (images.length > 4 && images.length < 5) {
if (! isEmpty()) {
        console.log('zdjęcia istnieją');
        displayPhotoCollection( images );
    } else {
        console.log('brak zdjęć');
        displayMessage('Nie ma zdjęć.')
}


setTimeout(function () {
    console.info('chowamy loaderka');
    loader.hide();
}, 1500); //1.5s

