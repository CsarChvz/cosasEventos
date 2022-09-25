import React, { useState, useContext, useEffect } from "react";

// Componentes ---------------------------------------------------------------
import { MonthTable, SideTable } from "../../utils/components/Calendar";
import { GlobalContext } from "~/context/GlobalContext";
import { getMonth } from "~/utils/utils";
export default function Index() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    console.log("monthIndex", monthIndex);
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <MonthTable month={currentMonth} />
      <SideTable />
    </>
  );
}
