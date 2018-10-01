import {addToCart} from './comp/cart.js';
import {showBook} from './comp/cart.js';

function initSite() {
    showBook('bookDiv');
    addToCart();
}

initSite();