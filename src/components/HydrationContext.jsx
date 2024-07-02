import React, { createContext, useState, useContext } from 'react';

const HydrationContext = createContext();

export const useHydration = () => useContext(HydrationContext);

export const HydrationProvider = ({ children }) => {
  const [hydrationLevel, setHydrationLevel] = useState(0);

  const handleSip = () => {
    setHydrationLevel(prevLevel => Math.min(5, prevLevel + 1));
  };

  return (
    <HydrationContext.Provider value={{ hydrationLevel, handleSip }}>
      {children}
    </HydrationContext.Provider>
  );
};
