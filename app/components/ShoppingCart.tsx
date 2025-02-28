import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";

export function ShoppingCart({ open, onOpenChange }) {
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
            <div className="col-span-3 font-medium">Product</div>
            <div className="text-right">Price</div>
          </div>
          <p>Your shopping cart is currently empty.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
