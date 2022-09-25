import { Link } from "@remix-run/react";
import { Button, Group, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { GiCarrier } from "react-icons/gi";
import React from "react";
let images = [
  "https://placeimg.com/800/480/any",
  "https://placeimg.com/800/480/any",
  "https://placeimg.com/800/480/any",
  "https://placeimg.com/800/480/any",
  "https://placeimg.com/800/480/any",
];
import Autoplay from "embla-carousel-autoplay";
export default function Index() {
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="grid grid-rows-6 gap-10 flex flex-1 h-full p-5 w-full">
      {/* Carusel */}
      {/* @TODO:  */}
      {/* Cuando se ponga arriba el mouse, se pueda expandi la imagen como un modal */}
      <Group className="row-span-3">
        <Carousel
          mx="auto"
          withIndicators
          loop
          slideSize="90%"
          slideGap="lg"
          plugins={[autoplay.current]}
          align="start"
          breakpoints={[
            { maxWidth: "md", slideSize: "90%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            { maxWidth: "xs", slideSize: "100%", slideGap: 0 },
          ]}
          className="w-full max-w-7xl max-h-96"
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",

              "&[data-active]": {
                width: 40,
              },
            },
          }}
        >
          {images.map((image, index) => (
            <Carousel.Slide key={index}>
              <Image
                key={index}
                src={image}
                alt="image"
                className="w-full h-full"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Group>
      <div className="grid xs:grid-rows-3 xs:row-span-1 gap-6 flex content-center h-full sm:grid-cols-3">
        <Link to="/calendar" className="flex flex-1">
          <Button className="bg-cyan-900 w-full">Calendario</Button>
        </Link>

        <Button className="bg-cyan-900">fotos</Button>
        <Button className="bg-cyan-900"> registrarse a un evento</Button>
      </div>
    </div>
  );
}
