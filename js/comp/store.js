import {writeToDom} from '../helper/util.js';

let cart = {
    name: '',
    author: '',
    price: '',
    image: ''
}

function getPrice(price) {
    cart.price = price;
    writeToDom('cartDiv', cart.price);
}

export {getPrice};