import React from 'react';

const Llama = ({ hydrationLevel }) => {
    const fillColor = (level) => hydrationLevel >= level ? '#0000ff' : 'transparent'; // Blue if hydrated

    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Example path data for each part of the llama, replace 'M10 10...' with actual path data */}
        <path d="M10 10 H 90 V 90 H 10 L 10 10" fill={fillColor(1)} /> {/* Path for 25% */}
        <path d="M20 20 H 80 V 80 H 20 L 20 20" fill={fillColor(2)} /> {/* Path for 50% */}
        <path d="M30 30 H 70 V 70 H 30 L 30 30" fill={fillColor(3)} /> {/* Path for 75% */}
        <path d="M40 40 H 60 V 60 H 40 L 40 40" fill={fillColor(4)} /> {/* Path for 100% */}
      </svg>
    );
};

export default Llama; // Ensure this matches the component name
