import React from 'react';  
import { HydrationProvider } from '../components/HydrationContext';
import HydrationTracker from '../components/HydrationTracker';
import BeverageSelector from '../components/BeverageSelector';

const AddSipView = () => {
  return (
    <div className="flex-grow overflow-auto"> {/* Full height and handle overflow */} 
    <HydrationProvider>
      <HydrationTracker />
      <BeverageSelector />
    </HydrationProvider>
    </div>
  );
};

export default AddSipView;
