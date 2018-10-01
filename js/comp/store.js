import {writeToDom} from '../helper/util.js';

let cart = {
    name: '',
    author: '',
    price: '',
    image: ''
}

function getPrice(book) {
    cart.price = book.price;
    cart.name = book.name;
    cart.author = book.author;
    cart.image = book.image;
    let cartString = '';
    cartString +=   `<div>`
    cartString +=       `<p>${cart.name}</p>`
    cartString +=       `<p>${cart.author}</p>`
    cartString +=       `<p>${cart.price}</p>`
    cartString +=       `<image src=${cart.image}>`
    cartString +=   `</div>`
    writeToDom('cartDiv', cartString);
}

export {getPrice};