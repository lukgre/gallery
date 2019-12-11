const image1 = "https://picsum.photos/300/150";
const image2 = "https://picsum.photos/300/150";
const image3 = "https://picsum.photos/300/150";

const images = [image1, image2, image3];

//images.push("https://picsum.photos/500/300/150");

//images.push(image1, image2, image3);


// Pętla: for..of
for (const image of images){
    console.log("To jest obrazek " + image);
}

//Pętla: for
//i++ => i=i+1
for (let i = 0; i<images.length; i++){
    const image = images[i];
    console.log("To jest obrazek " + image);
}
