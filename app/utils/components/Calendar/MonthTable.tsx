import { Button } from "@mantine/core";
import dayjs from "dayjs";
import React, { useContext } from "react";
import { GlobalContext } from "~/context/GlobalContext";
import Day from "./Day";
type Props = {
  // month: Array<Array<Object>>;
  month: Array<Array<any>>;
};

function MonthTable(props: Props) {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-6 col-span-2 h-screen">
      <div className="flex col-span-7 grid grid-cols-7 content-center place-content-between">
        <div className="text-4xl col-span-3 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </div>
        <Button className="m-2 col-span-2 bg-green-500" onClick={handleReset}>
          Hoy
        </Button>
        <Button
          className="m-2 bg-cyan-500"
          onClick={handlePrevMonth}
        >{`<`}</Button>
        <Button
          className="m-2 bg-cyan-600"
          onClick={handleNextMonth}
        >{`>`}</Button>
      </div>
      {props.month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, j) => (
            <Day day={day} key={j} rowI={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
export default MonthTable;
