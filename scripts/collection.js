const authors = images.map(function (image) {
    return image.author;
});
console.log(authors);


const masterPrice = images.reduce(function (memory, image) {
    console.warn(memory);
    memory = memory + image.price;
    return memory;
}, 0);

const groupByPrice = images.reduce(function (memory, image) {
    memory[image.price] = image;
    return memory;
}, {})