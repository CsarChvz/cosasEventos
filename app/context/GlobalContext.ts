import React from "react";
export const GlobalContext = React.createContext({
  // monthIndex: dayjs().month(),
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
});
