import dayjs from "dayjs";
import React from "react";
// Interfaz para el objeto "day"
interface DayObject {
  $L: string;
  $D: number;
  $W: number;
  $M: number;
  $y: number;
  format: Function;
}

// Tipos para las propiedades de Day
type Props = { day: DayObject; rowI: number };

function Day(props: Props) {
  // ----------- Function definida para colocar clase al dia actual ------------
  function getCurrentDayClass() {
    // Esta funcion va a devolver la clase que se le va a asignar al dia actual si es que se cumple la condicion
    return props.day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
      ? // Si es true, entonces va a devolver un conjunto de clases
        // que se le van a asignar al dia actual con los que ya se tiene
        "bg-blue-500 text-white rounded-full w-8"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col p-2">
      <header className="flex flex-col items-center">
        {props.rowI === 0 && (
          <p className="text-sm mt-1">{props.day.format("ddd")}</p>
        )}
        <p className={`text-sm p-1 m-1 text-center ${getCurrentDayClass()}`}>
          {props.day.format("DD")}
        </p>
      </header>
    </div>
  );
}
export default Day;
