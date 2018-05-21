var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var currentCart = {itemName: item, itemPrice: Math.floor(Math.random()*100)};
 cart.push(currentCart);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
    var itemAndPrice = []
    for (let i = 0; i<cart.length;i++) {
    if (i+1 != cart.length || i ===0){
    itemAndPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else { itemAndPrice.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
        }
return`In your cart, you have ${itemAndPrice.join(", ")}.`
}

function total() {
  // write your code here
  var cartTotal = []
  for (let i = 0; i<cart.length;i++){
    cartTotal.push(cart[i].itemPrice)
  }
  function add(a,b){return a+b}
  return cartTotal.reduce(add,0)
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
