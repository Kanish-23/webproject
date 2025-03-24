const buttons = document.querySelectorAll(".hover-button");

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.value = "Add To Cart"; 
  });

  button.addEventListener("mouseout", () => {
    button.value = "Order Now"; 
  });
});

let cartCount = 0;

const orderButtons = document.querySelectorAll('.hover-button');

orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartCount++;

        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cartCount;

        alert('Beverage added to the cart!');
    });
});
function goToOrderPage() {
  window.location.href = 'order2.html';
}
