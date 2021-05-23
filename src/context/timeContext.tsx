import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";

interface IProps {
  children: ReactNode;
}

type ITimeContext = {
  time: boolean;
  setTime: (time: boolean) => void;
};

const TimeContext = createContext<ITimeContext>({} as ITimeContext);

export function TimeProvider({ children }: IProps) {
  const [time, setTime] = useState(false);
  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
}
export const useTime = () => useContext(TimeContext);
