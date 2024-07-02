// import React, { createContext, useState, useContext } from 'react';

// const HydrationContext = createContext();

// export const useHydration = () => useContext(HydrationContext);

// export const HydrationProvider = ({ children }) => {
//   const [hydrationLevel, setHydrationLevel] = useState(0);

//   const handleSip = () => {
//     setHydrationLevel(prevLevel => {
//       // Check if the current level is at maximum
//       if (prevLevel === 5) {
//         // Reset to 0 if already at maximum
//         return 0;
//       } else {
//         // Otherwise, increment by one level
//         return Math.min(5, prevLevel + 1);
//       }
//     });
//   };

//   return (
//     <HydrationContext.Provider value={{ hydrationLevel, handleSip }}>
//       {children}
//     </HydrationContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from 'react';

const HydrationContext = createContext();

export const useHydration = () => useContext(HydrationContext);

export const HydrationProvider = ({ children }) => {
  const [hydrationLevel, setHydrationLevel] = useState(0);

  const handleSip = async () => {
    const newLevel = hydrationLevel === 5 ? 0 : Math.min(5, hydrationLevel + 1);
    
    try {
      const response = await fetch('https://902e-203-117-161-34.ngrok-free.app/api/hydration/sips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userID: 12,  // Assuming a fixed user ID for the example
          beverageTypeID: 1,  // Assuming a fixed beverage type ID
          amount: '300',  // Assuming a fixed amount for each sip
          dateTime: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setHydrationLevel(newLevel);
      } else {
        throw new Error('Failed to update hydration level');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <HydrationContext.Provider value={{ hydrationLevel, handleSip }}>
      {children}
    </HydrationContext.Provider>
  );
};
