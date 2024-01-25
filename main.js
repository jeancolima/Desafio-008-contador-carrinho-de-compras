let productOnCart = 0;
const buttonAddToCart = document.querySelectorAll(".btn-add-to-cart");
const numberOfProductsOnCart = document.querySelector(".cart-counter");

buttonAddToCart.forEach((e) => {
    e.addEventListener("click", () => {
        productOnCart++;
        updateCart();
    })
})

function updateCart() {
    numberOfProductsOnCart.innerHTML = productOnCart;
}