const image1 = "https://picsum.photos/id/10/300/150";
const image2 = "https://picsum.photos/id/20/300/150";
const image3 = "https://picsum.photos/id/30/300/150";

const images = [image1, image2, image3];

//images.push("https://picsum.photos/500/300/150");

//images.push(image1, image2, image3);


// Pętla: for..of
for (const image of images) {
   //console.log("To jest obrazek " + image);
}

//Pętla: for
//i++ => i=i+1
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    //console.log("To jest obrazek " + image);
}

const isEmpty = (images.length === 0);
const isEmpty2 = (images.length == 0);

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


// Uruchomienie funkcji
//displayImages();
//displayLastElement();
//displayMathExercises();

//renderPhoto('https://picsum.photos/id/10/300/150');
//renderPhoto('https://picsum.photos/id/20/300/150');
//renderPhoto('https://picsum.photos/id/30/300/150');

displayPhotoCollection( images );