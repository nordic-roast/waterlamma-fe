import React from 'react';
import { useHydration } from './HydrationContext';
import BeverageItem from './BeverageItem';

import WaterIcon from '../assets/water.png'; 

const BeverageSelector = () => {
  const { handleSip } = useHydration();
  
  const beverages = [
    { icon: <img src={WaterIcon} className="h-10 w-10" alt="Water" />, label: '1 x Glass of Water', onClick: handleSip }
  ];

  return (
    <div className="flex overflow-x-auto py-2 bg-gray-100 justify-center">
      {beverages.map((beverage, index) => (
        <BeverageItem key={index} icon={beverage.icon} label={beverage.label} onClick={beverage.onClick} />
      ))}
    </div>
  );
};

export default BeverageSelector;
