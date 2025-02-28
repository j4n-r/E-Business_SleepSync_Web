import poster from "~/assets/images/sleepSyncPoster.jpg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { shopItems, type item } from "~/api/shoppingCardTypes";
import { addMultipleToCart } from "~/api/shoppingCardApi";

export default function Shop() {
  const [selectedItems, setSelectedItems] = useState<item[]>([]);

  const isItemSelected = (currentItem: item) => {
    return selectedItems.some((item) => item.id === currentItem.id);
  };

  const toggleSelectItem = (selectedItem: item) => {
    if (isItemSelected(selectedItem)) {
      setSelectedItems(
        selectedItems.filter((item) => item.id !== selectedItem.id)
      );
    } else {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const addToCartHandler = () => {
    addMultipleToCart(selectedItems);
    setSelectedItems([]);
  };
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-4">
        <img
          src={poster}
          className="object-cover  w-auto h-screen"
          alt="SleepSync Poster"
        />
      </div>
      <div className="flex flex-col p-10  col-span-5">
        <div className="text-3xl font-bold">SleepSync Bundle</div>
        <div className="my-10">
          <Card
            className={`h-full col-span-3 cursor-pointer ${
              isItemSelected(shopItems.bundle) ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => {
              toggleSelectItem(shopItems.bundle);
            }}
          >
            <CardHeader>
              <CardTitle>SleepSync Bundle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-4">
                Hol dir alles in einem! Lampe, Armband und App für deinen
                optimalen Schlaf.
              </p>
            </CardContent>
            <CardFooter className="justify-between">
              <div>{shopItems.bundle.price}€</div>
              <Button size="sm">
                {isItemSelected(shopItems.bundle) ? "Ausgewählt" : "Auswählen"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Card
            className={`h-full border-2 border-white shadow-none  cursor-pointer ${
              isItemSelected(shopItems.lampe) ? " border-blue-500" : ""
            }`}
            onClick={() => toggleSelectItem(shopItems.lampe)}
          >
            <CardHeader>
              <CardTitle>{shopItems.lampe.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-0  h-64">
              <img
                src={shopItems.lampe.image}
                alt={shopItems.lampe.name}
                className="object-cover rounded-xl  w-auto p-2"
              />
            </CardContent>
            <CardFooter className="justify-between mt-2">
              <div>€{shopItems.lampe.price}</div>
              <Button size="sm">
                {isItemSelected(shopItems.lampe) ? "Ausgewählt" : "Auswählen"}
              </Button>
            </CardFooter>
          </Card>
          <Card
            className={`h-full border-2 border-white shadow-none  cursor-pointer ${
              isItemSelected(shopItems.armband) ? " border-blue-500" : ""
            }`}
            onClick={() => toggleSelectItem(shopItems.armband)}
          >
            <CardHeader>
              <CardTitle>{shopItems.armband.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-0  h-64">
              <img
                src={shopItems.armband.image}
                alt={shopItems.armband.name}
                className="object-cover rounded-xl  w-auto p-2"
              />
            </CardContent>
            <CardFooter className="justify-between mt-2">
              <div>€{shopItems.armband.price}</div>
              <Button size="sm">
                {isItemSelected(shopItems.armband) ? "Ausgewählt" : "Auswählen"}
              </Button>
            </CardFooter>
          </Card>
          <Card
            className={`h-full border-2 border-white shadow-none  cursor-pointer ${
              isItemSelected(shopItems.app) ? " border-blue-500" : ""
            }`}
            onClick={() => toggleSelectItem(shopItems.app)}
          >
            <CardHeader>
              <CardTitle>{shopItems.app.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-0  h-64">
              <img
                src={shopItems.app.image}
                alt={shopItems.app.name}
                className="object-cover rounded-xl  w-auto p-2"
              />
            </CardContent>
            <CardFooter className="justify-between mt-2">
              <div>€{shopItems.app.price}</div>
              <Button size="sm">
                {isItemSelected(shopItems.app) ? "Ausgewählt" : "Auswählen"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        {selectedItems.length > 0 ? (
          <Button
            className="mt-5 hover:bg-green-900"
            onClick={addToCartHandler}
          >
            Zum Warenkorb hinzufügen
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
