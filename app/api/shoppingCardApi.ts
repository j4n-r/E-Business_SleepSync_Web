import { type item } from "~/api/shoppingCardTypes";

let shoppingCart: item[] = [];

export function addToCart(itemToAdd: item): item[] {
  shoppingCart.push(itemToAdd);
  return shoppingCart;
}

export function removeFromCart(itemToRemove: item): item[] {
  return (shoppingCart = shoppingCart.filter(
    (item) => item.id !== itemToRemove.id
  ));
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
