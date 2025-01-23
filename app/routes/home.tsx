import poster from "~/assets/images/sleepSyncPoster.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const productTexts = [
    ["Headline", "Some text"],
    ["Headlinw 2", "Some text 2"],
    ["Headline 3", "Some Text 3"],
  ];
  const [currSlide, setCurrSlide] = useState(0);

  const handleNextSlide = () => {
    if (productTexts.length >= currSlide || productTexts.length <= 0) {
    }
    setCurrSlide(currSlide + 1);
  };

  const handlePrevSlide = () => {
    if (productTexts.length >= currSlide || productTexts.length <= 0) {
    }
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
        <section className="grid  grid-cols-2 h-screen w-full p-20">
          <div className="p-20 my-auto">
            <Carousel className="w-full ">
              <CarouselContent className="">
                <CarouselPicture img={poster} />
                <CarouselPicture img={poster} />
                <CarouselPicture img={poster} />
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
            <div className="font-bold text-4xl">
              {productTexts[currSlide][0]}
            </div>
            <div>{productTexts[currSlide][1]}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export function CarouselPicture({ img }) {
  return (
    <CarouselItem className="">
      <div className="p-1">
        <Card className="border-0">
          <CardContent className="flex aspect-square p-0 justify-center">
            <img
              src={img}
              className="object-cover w-full h-full rounded-md drop-shadow-xl"
            />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
