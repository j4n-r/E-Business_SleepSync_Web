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
import { useEffect, useState } from "react";
import { getCartItems, getCartTotal, clearCart } from "~/api/shoppingCardApi";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const cartItems = getCartItems();
  const cartTotal = getCartTotal();
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (isOrderPlaced) {
      clearCart();
      setTimeout(() => {
        setIsOrderPlaced(false);
        navigate("/");
      }, 3000);
    }
  }, [isOrderPlaced, navigate]);

  const handleInputChange = (event, fieldName) => {
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  const placeOrder = () => {
    console.log("Order placed with details:", {
      items: cartItems,
      total: cartTotal,
      customerInfo: formData,
    });
    setIsOrderPlaced(true);
  };

  if (isOrderPlaced) {
    return (
      <main className="h-screen p-10 max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 text-green-500">
            Vielen Dank für Ihre Bestellung! ✅
          </h1>
          <p className="mb-4">
            Ihre Bestellung wurde erfolgreich aufgegeben. Sie werden in Kürze
            eine Bestätigungs-E-Mail erhalten.
          </p>
          <p>Sie werden in Kürze zur Startseite weitergeleitet.</p>
        </div>
      </main>
    );
  }

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
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="col-span-2 font-medium">Produkt</div>
                  <div className="text-right">Preis</div>
                  <div className="text-right">Menge</div>
                  <div className="text-right">Gesamt</div>
                </div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 items-center gap-4 py-2"
                  >
                    <div className="col-span-2">{item.name}</div>
                    <div className="text-right">€{item.price}</div>
                    <div className="text-right">{item.quantity}</div>
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

          <div>
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
                <Button onClick={placeOrder} className="w-full">
                  Bestellung aufgeben
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </main>
  );
}
