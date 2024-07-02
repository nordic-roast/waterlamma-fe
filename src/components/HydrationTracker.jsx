// import React, { useState } from 'react';

// import img0 from '../assets/0.png';
// import img25 from '../assets/25.png';
// import img50 from '../assets/50.png';
// import img75 from '../assets/75.png';
// import img85 from '../assets/85.png';
// import img100 from '../assets/100.png';

// const HydrationTracker = () => {
//   const [hydrationLevel, setHydrationLevel] = useState(0); 

//   const handleSip = () => {
//     const newLevel = Math.min(5, hydrationLevel + 1);
//     setHydrationLevel(newLevel);
//   };

//   const hydrationImages = {
//     0: img0,
//     1: img25,
//     2: img50,
//     3: img75,
//     4: img85,
//     5: img100
//   };

//   return (
//     <div className="flex flex-col items-center  ">
//       <img src={hydrationImages[hydrationLevel]} alt={`Hydration level ${hydrationLevel * 25}%`} style={{ width: '100px', height: '100px' }} />
//       <button onClick={handleSip}>Add 300ml</button>
//     </div>
//   );
// };

// export default HydrationTracker;


import React from 'react';
import img0 from '../assets/0.png';
import img25 from '../assets/25.png';
import img50 from '../assets/50.png';
import img75 from '../assets/75.png';
import img85 from '../assets/85.png';
import img100 from '../assets/100.png';

import { useHydration } from './HydrationContext';

const HydrationTracker = () => {
  const { hydrationLevel, handleSip } = useHydration();
  const hydrationImages = [img0, img25, img50, img75, img85, img100];

  return (
    <div className="flex flex-col items-center">
      <img src={hydrationImages[hydrationLevel]} alt={`Hydration level ${hydrationLevel * 25}%`} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default HydrationTracker;
