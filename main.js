let email = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

email.addEventListener('click', toggleDesktopMenu)
hamburgerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');


    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function testAppend(){
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Hola que ase';


    cardsContainer.appendChild(paragraph);

}



/*
<div class="product-card">
    <img alt=""
         src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img alt="" src="./icons/bt_add_to_cart.svg">
        </figure>
    </div>
</div>
* */

function renderProducts(productList) {
    for (const product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const div = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');

        const cartFigure = document.createElement('img');
        cartFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(cartFigure);

        div.append(productPrice, productName);

        productInfo.appendChild(div);
        productInfo.appendChild(productFigure);

        productCard.append(productImage, productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);

