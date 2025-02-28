import poster from "~/assets/images/sleepSyncPoster.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { shopItems } from "~/api/shoppingCardTypes";

export default function Home() {
  const productTexts = [
    [
      "Leichter einschalfen, einfacher aufwachen",
      "Unsere smarte Lampe nutzt sanftes und angenehmes Licht, um dein Einschlafen zu erleichtern und das Aufwachen angenehmer zu machen – für einen natürlichen und erholsamen Schlafrhythmus.",
    ],
    [
      "Verstehe und optimiere deinen Schlaf💡",
      "Unser speziell entwickeltes Armband trackt deinen Schlaf, während die App wertvolle Analysen und Tipps liefert. So kannst du deine Schlafqualität verbessern und erholter aufwachen.",
    ],
    [
      "Erhalte Zugang zu unserer App!📱",
      "Beim Kauf eines Sets erhältst du einen lebenslangen Zugriff auf unsere App. Hier kannst du deinen Schlaf tracken, Analysen einsehen und Tipps für einen besseren Schlaf erhalten.",
    ],
  ];
  const [currSlide, setCurrSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrSlide(currSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrSlide(currSlide - 1);
  };

  return (
    <>
      <div>
        <section
          className="bg-fixed grid col-1 col-r h-screen w-full p-20"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-white flex flex-col justify-center items-start py-20">
            <div className="text-5xl font-bold mb-4 mt-20">
              <div>Aufwachen hat</div>
              <div>sich noch nie so</div>
              <div>gut angefühlt</div>
            </div>
            <div className="text-2xl mt-2">
              Verwandle jedes Schlafzimmer in Dein Schlafzimmer
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 h-screen w-full mb-10">
          <div className="p-20 m-auto">
            <Carousel className="max-w-[800px] ">
              <CarouselContent>
                <CarouselPicture img={shopItems.lampe.image} />
                <CarouselPicture img={shopItems.armband.image} />
                <CarouselPicture img={shopItems.app.image} />
              </CarouselContent>

              <div onClick={handlePrevSlide}>
                <CarouselPrevious />
              </div>
              <div onClick={handleNextSlide}>
                <CarouselNext />
              </div>
            </Carousel>
          </div>

          <div className="m-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-bold text-4xl">
                  {productTexts[currSlide][0]}
                </div>
                <div>{productTexts[currSlide][1]}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </>
  );
}

export function CarouselPicture({ img }) {
  return (
    <CarouselItem>
      <div className="p-1 mx-auto max-w-[800px]">
        <Card className="border-0">
          <CardContent className="flex aspect-square p-0 justify-center">
            <img src={img} className="object-cover rounded-xl drop-shadow-xl" />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
