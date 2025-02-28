import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import {
  getCartItems,
  getCartTotal,
  removeFromCart,
} from "~/api/shoppingCardApi";
import { type item } from "~/api/shoppingCardTypes";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Link, useOutletContext } from "react-router";

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
      <SheetContent
        className="flex flex-col justify-between md:w-96"
        side="right"
      >
        <div className="grid gap-4 py-4">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-5 items-center gap-4 text-sm">
            <div className="col-span-2 font-medium">Product</div>
            <div className="text-right">Quantity</div>
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
                  className="grid grid-cols-5 items-center gap-4 py-2 text-sm"
                >
                  <div className="col-span-2">{item.name}</div>

                  <div className="text-right">{item.quantity}</div>
                  <div className="text-right">€{item.price}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleRemoveFromCart(item);
                      setCartItems(getCartItems());
                    }}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <DropdownMenuSeparator />
          <div className="ml-auto">Total: €{getCartTotal().toFixed(2)}</div>
        </div>
        <SheetFooter className="">
          {getCartTotal() > 0 ? (
            <Button
              asChild
              onClick={() => onOpenChange(false)}
              className="w-full hover:bg-green-900"
            >
              <Link to={"checkout"}>Jetzt Kaufen</Link>
            </Button>
          ) : (
            ""
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
