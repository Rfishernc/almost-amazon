import {writeToDom} from "../helper/util.js";
import {getPrice} from '../comp/store.js';

let book = {
    name: 'Invisible Cities',
    author: 'Italo Calvino',
    price: '$9.99',
    image: 'https://cdn-images-1.medium.com/max/1600/0*7zwg_foX7geOkG2T.jpg'
}

function addToCart() {
    document.getElementById('cartButt').addEventListener('click', function() {
        getPrice(book.price);
    })
}

function showBook(div) {
    let bookString ='';
    bookString +=   `<div>`
    bookString +=       `<p>${book.name}</p>`
    bookString +=       `<p>${book.author}</p>`
    bookString +=       `<p>${book.price}</p>`
    bookString +=       `<image src=${book.image}>`
    bookString +=   `</div>`
    writeToDom(div, bookString)
}

export {addToCart, showBook};