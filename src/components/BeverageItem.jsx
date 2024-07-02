import React from 'react';

const BeverageItem = ({ icon, label, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <button onClick={onClick} className="transition duration-300 ease-in-out transform hover:scale-110 p-2 rounded-full bg-white shadow-lg">
        {icon} {/* Assuming icon is an SVG or image component */}
      </button>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
};

export default BeverageItem;