import React from 'react';
import BeverageItem from './BeverageItem';

// Import or define your icons
import BeerIcon from '../assets/beer.png';
import WineIcon from '../assets/wine.png';
import CoffeeIcon from '../assets/coffee.png';
import TeaIcon from '../assets/tea.png';
import WaterIcon from '../assets/water.png';
import AddIcon from '../assets/add.png';
 
const BeverageSelector = () => {
  const beverages = [
    { icon:  <img src={BeerIcon} class="h-10 w-45" alt="Beer" />, label: 'Beer', onClick: () => handleSelect('Beer') },
    { icon:  <img src={WineIcon} class="h-10 w-45" alt="Wine" />, label: 'Wine', onClick: () => handleSelect('Wine') },
    { icon:  <img src={CoffeeIcon} class="h-10 w-45" alt="Coffee" />, label: 'Coffee', onClick: () => handleSelect('Coffee') },
    { icon:  <img src={TeaIcon} class="h-10 w-45" alt="Tea" />, label: 'Tea', onClick: () => handleSelect('Tea') },
    { icon:  <img src={WaterIcon} class="h-10 w-45" alt="Water" />, label: 'Water', onClick: () => handleSelect('Water') },
  ];

  const handleSelect = (beverage) => {
    console.log(`Selected: ${beverage}`);
    // Handle selection logic here
  };

  return (
    <div className="flex overflow-x-auto py-2 bg-gray-100">
      {beverages.map((beverage, index) => (
        <BeverageItem key={index} icon={beverage.icon} label={beverage.label} onClick={beverage.onClick} />
      ))}
    </div>
  );
};

export default BeverageSelector;