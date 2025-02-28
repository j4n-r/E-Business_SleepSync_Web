import { type item } from "~/api/shoppingCardTypes";

let shoppingCart: item[] = [];

export function addToCart(itemToAdd: item): item[] {
  shoppingCart.push(itemToAdd);
  return shoppingCart;
}

export function addMultipleToCart(items: item[]): item[] {
  shoppingCart = [...shoppingCart, ...items];
  return shoppingCart;
}

export function removeFromCart(itemToRemove: item): item[] {
  shoppingCart = shoppingCart.filter((item) => {
    return item.id !== itemToRemove.id;
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
