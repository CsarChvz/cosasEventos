import dayjs from "dayjs";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

type Props = { children: React.ReactNode };

// {children}: Props  =>  children: React.ReactNode
export default function WrapperGlobal({ children }: Props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
}
