"use client";

import { createContext, ReactNode, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTab: (_value: "rec" | "fol") => {},
});

export default function TabProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
