import poster from "~/assets/images/sleepSyncPoster.jpg";
import lampe from "~/assets/images/lampe.png";
import armband from "~/assets/images/armband.png";
import app from "~/assets/images/app.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useState } from "react";

export async function loader() {
  return { undefined };
}

interface ShopCardProps {
  item: string;
  title: string;
  image?: string;
  price: number;
  selectedItems: string[];
  toggleSelectItem: (item: string) => void;
}

function ShopCard({
  item,
  title,
  image,
  price,
  selectedItems,
  toggleSelectItem,
}: ShopCardProps) {
  const isSelected = selectedItems.includes(item);
  return (
    <Card
      className={`h-full border-2 border-white shadow-none  cursor-pointer ${
        isSelected ? " border-blue-500" : ""
      }`}
      onClick={() => toggleSelectItem(item)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center p-0  h-64">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-xl  w-auto p-2"
        />
      </CardContent>
      <CardFooter className="justify-between mt-2">
        <div>€{price}</div>
        <Button size="sm">{isSelected ? "Ausgewählt" : "Auswählen"}</Button>
      </CardFooter>
    </Card>
  );
}

export default function Shop() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const prices = {
    lampe: 99.99,
    armband: 79.99,
    app: 29.99,
    bundle: 199.99,
  };

  const toggleSelectItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
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
              selectedItems.includes("bundle") ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => toggleSelectItem("bundle")}
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
              <div>{prices.bundle}€</div>
              <Button size="sm">
                {selectedItems.includes("bundle") ? "Ausgewählt" : "Auswählen"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-5 h-32">
          <ShopCard
            item="lampe"
            title="SleepSync Lampe"
            image={lampe}
            price={prices.lampe}
            selectedItems={selectedItems}
            toggleSelectItem={toggleSelectItem}
          />
          <ShopCard
            item="armband"
            title="SleepSync Armband"
            image={armband}
            price={prices.armband}
            selectedItems={selectedItems}
            toggleSelectItem={toggleSelectItem}
          />
          <ShopCard
            item="app"
            title="SleepSync App"
            image={app}
            price={prices.app}
            selectedItems={selectedItems}
            toggleSelectItem={toggleSelectItem}
          />
        </div>
      </div>
    </div>
  );
}
