import { EventCard } from "./EventCard";
import "dayjs/locale/es";
import { Form, Link } from "@remix-run/react";
import { Input, Textarea, MantineProvider } from "@mantine/core";
import "dayjs/locale/es-mx";
import { Button } from "@mantine/core";

import React, { useState } from "react";
type Props = {};
const eventExample = {
  title: "Evento de prueba",
  description: "Descripcion del evento de prueba",
  date: "2020-12-12",
  time: "12:00-13:00",
  addressedTo: ["Estudiantes", "Profesores"],
  place: "Aula 1",
};

const SideTable = (props: Props) => {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const [value, onChange] = useState(randomColor());

  return (
    <MantineProvider>
      <div className="flex-1 grid grid-rows-1 h-screen">
        <div className="border border-gray-200 flex flex-col">
          <header className="flex flex-col m-4">
            <div className="flex flex-row">
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={require("../../img/calendar-svg.svg")}
                alt="SVG as an image"
                className="w-5 h-5 m-2"
              />
              <p className="text-2xl mt-1 font-bold">Upcomming Events</p>
            </div>
            {/* Fecha en la que se esta */}
            <div className="container">{`[Dia] de [Mes] del [Año]`}</div>
          </header>
          <hr style={{ width: "90%", alignSelf: "center" }} />
          {/* padding: 6 -- Para alinearlo con el texto y la linea */}

          {/* Eventos -- Del dia seleccionado o actual */}
          <div className="container px-6 py-2">
            {/* Create a list of cards */}
            <EventCard eventObject={eventExample} />
          </div>
          {/* Modal para el formulario de Creacion */}
          <div className="px-16">
            <Link to={"/calendar/createEvent"}>
              <Button className="modal-button w-full bg-blue-400">
                Agregar un Evento
              </Button>
            </Link>
          </div>

          {/* Un map para los eventos de ese día */}
        </div>
      </div>
    </MantineProvider>
  );
};
export default SideTable;
