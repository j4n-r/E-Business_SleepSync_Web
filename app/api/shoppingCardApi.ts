import { type item } from "~/api/shoppingCardTypes";

let shoppingCart: item[] = [];

function checkIfInShoppingCart(item: item) {
  return shoppingCart.some((currItem) => currItem === item);
}

export function addToCart(itemToAdd: item): item[] {
  if (checkIfInShoppingCart(itemToAdd)) {
    updateQuantity(itemToAdd, itemToAdd.quantity + 1);
  } else {
    itemToAdd.quantity = 1;
    shoppingCart.push(itemToAdd);
  }
  return shoppingCart;
}

export function addMultipleToCart(items: item[]): item[] {
  items.forEach((item) => addToCart(item));
  return shoppingCart;
}

export function removeFromCart(itemToRemove: item): item[] {
  shoppingCart.forEach((item) => {
    item == itemToRemove ? item.quantity-- : "";
  });
  shoppingCart = shoppingCart.filter((item) => {
    return item.quantity > 0;
  });
  return shoppingCart;
}

export function updateQuantity(itemToUpdate: item, quantity: number): item[] {
  shoppingCart.forEach((item) => {
    if (item.id == itemToUpdate.id) {
      itemToUpdate.quantity = quantity;
    }
  });
  return shoppingCart;
}

export function clearCart(): item[] {
  shoppingCart = [];
  return shoppingCart;
}

export function getCartItems(): item[] {
  return shoppingCart;
}

export function getCartTotal(): number {
  return shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
}
