// Carta de Evento
import React from "react";

type Props = {
  eventObject: {
    title: string;
    description: string;
    date: string;
    time: string;
    place: string;
    addressedTo: Array<string>;
  };
};

export const EventCard = (props: Props) => {
  return (
    // Create a card with the event information
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 m-2">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-xs font-bold">{props.eventObject.time}</p>
          </div>
          <p className="text-lg text-gray-500 font-bold">
            {props.eventObject.title}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-gray-500">{props.eventObject.place}</p>
        <p className="text-sm text-gray-500">{props.eventObject.description}</p>
      </div>
      <p className="text-sm text-gray-600">
        Dirigido a: {props.eventObject.addressedTo[0]},{" "}
        {props.eventObject.addressedTo[1]}
      </p>
    </div>
  );
};
