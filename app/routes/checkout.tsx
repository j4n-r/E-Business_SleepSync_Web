import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { clearCart, getCartItems, getCartTotal } from "~/api/shoppingCardApi";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cartItems = getCartItems();
  const cartTotal = getCartTotal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (event, fieldName) => {
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  return (
    <main className="p-10 h-screen max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="mb-4">Ihr Warenkorb ist leer.</p>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ihre Bestellung</CardTitle>
                <CardDescription>
                  Überprüfen Sie bitte Ihre Artikel vor dem Kauf.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-5 items-center gap-4">
                  <div className="col-span-2 font-medium">Produkt</div>
                  <div className="text-right">Preis</div>
                  <div className="text-right">Menge</div>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-5 items-center gap-4 py-2"
                  >
                    <div className="flex col-span-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 mr-4  h-16 object-cover rounded"
                      />
                      <div className="pt-2">{item.name}</div>
                    </div>
                    <div className="text-right">€{item.price}</div>
                    <div className="text-right">{item.quantity}</div>
                    <div className="text-right"></div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-xl  font-semibold">
                  Total: €{cartTotal.toFixed(2)}
                </span>
              </CardFooter>
            </Card>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              clearCart();
              navigate("/success");
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Lieferdetails</CardTitle>
                <CardDescription>
                  Bitte geben Sie Ihre Lieferinformationen an.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <Input
                    id="name"
                    placeholder="Ihr Name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="ihre@email.de"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address">Lieferadresse</label>
                  <Input
                    id="address"
                    placeholder="Straße und Hausnummer, Postleitzahl, Ort"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange(e, "address")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full hover:bg-green-900">
                  Bestellung aufgeben
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      )}
    </main>
  );
}
