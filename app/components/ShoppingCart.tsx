import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { getCartItems, removeFromCart } from "~/api/shoppingCardApi";
import { type item } from "~/api/shoppingCardTypes";

export function ShoppingCart({ open, onOpenChange }) {
  const [cartItems, setCartItems] = useState<item[]>(getCartItems());

  useEffect(() => {
    setCartItems(getCartItems());
  }, [open]);

  const handleRemoveFromCart = (itemToRemove: item) => {
    removeFromCart(itemToRemove);
    setCartItems(getCartItems());
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Items you have added to your cart.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="col-span-2 font-medium">Product</div>
            <div className="text-right">Price</div>
            <div></div>
          </div>
          {cartItems.length === 0 ? (
            <p>Your shopping cart is currently empty.</p>
          ) : (
            <ul className="space-y-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-4 items-center gap-4 py-2"
                >
                  <div className="col-span-2">{item.name}</div>
                  <div className="text-right">€{item.price}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
