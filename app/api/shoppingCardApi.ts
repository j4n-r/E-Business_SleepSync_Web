"use-client";
import { type item } from "~/api/shoppingCardTypes";

const CART_STORAGE_KEY = "shoppingCart";

function getShoppingCart(): item[] {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
}

function saveShoppingCart(cart: item[]): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function checkIfInShoppingCart(itemToCheck: item): boolean {
  const shoppingCart = getShoppingCart();
  return shoppingCart.some((currItem) => currItem.id === itemToCheck.id);
}

export function addToCart(itemToAdd: item): item[] {
  const shoppingCart = getShoppingCart();
  const existingItemIndex = shoppingCart.findIndex(
    (currItem) => currItem.id === itemToAdd.id
  );

  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity += 1;
  } else {
    itemToAdd.quantity = 1;
    shoppingCart.push(itemToAdd);
  }
  saveShoppingCart(shoppingCart);
  return shoppingCart;
}

export function addMultipleToCart(items: item[]): item[] {
  let shoppingCart = getShoppingCart();
  items.forEach((itemToAdd) => {
    const existingItemIndex = shoppingCart.findIndex(
      (currItem) => currItem.id === itemToAdd.id
    );
    if (existingItemIndex !== -1) {
      shoppingCart[existingItemIndex].quantity += itemToAdd.quantity;
    } else {
      shoppingCart.push(itemToAdd);
    }
  });
  saveShoppingCart(shoppingCart);
  return shoppingCart;
}

export function removeFromCart(itemToRemove: item): item[] {
  let shoppingCart = getShoppingCart();
  const existingItemIndex = shoppingCart.findIndex(
    (currItem) => currItem.id === itemToRemove.id
  );

  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity--;
    if (shoppingCart[existingItemIndex].quantity <= 0) {
      shoppingCart.splice(existingItemIndex, 1);
    }
  }
  saveShoppingCart(shoppingCart);
  return shoppingCart;
}

export function updateQuantity(itemToUpdate: item, quantity: number): item[] {
  let shoppingCart = getShoppingCart();
  const existingItemIndex = shoppingCart.findIndex(
    (currItem) => currItem.id === itemToUpdate.id
  );

  if (existingItemIndex !== -1) {
    shoppingCart[existingItemIndex].quantity = quantity;
  }
  saveShoppingCart(shoppingCart);
  return shoppingCart;
}

export function clearCart(): item[] {
  localStorage.removeItem(CART_STORAGE_KEY);
  return [];
}

export function getCartItems(): item[] {
  return getShoppingCart();
}

export function getCartTotal(): number {
  const shoppingCart = getShoppingCart();
  return shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
}
