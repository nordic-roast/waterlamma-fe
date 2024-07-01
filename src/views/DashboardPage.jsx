import React, { useState } from 'react';
import llamaImage from '../assets/llama.png';
import { ArrowLeftEndOnRectangleIcon as LoginIcon } from '@heroicons/react/24/solid'
import BeverageSelector from '../components/BeverageSelector';

import { SignedIn, SignedOut, SignInButton, UserButton, useClerk } from "@clerk/clerk-react";

const DashboardView = () => {
  const [activeTab, setActiveTab] = useState('add-sip');

  const renderContent = () => {
    switch (activeTab) {
      case 'add-sip':
        return <BeverageSelector />;
      case 'challenges':
        return <div>Challenges</div>;
      case 'settings':
        return <div>Settings</div>;
    }
  };



  return (
    <div className="flex justify-start w-screen h-screen">
      <div className="w-400 h-400 overflow-auto p-4">
        <div className="text-center">
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex-1"> {/* If you have other elements that need to be on the left side, put them here */} </div>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton redirectTo="/#/dashboard" />
              </SignedOut>
            </div>
          </div> 
          <div>
            <img src={llamaImage} alt="Llama" className="w-64 mx-auto" />
            {renderContent()}
          </div>
          <div className="bg-gray-200 p-4 flex justify-around">
            <button onClick={() => setActiveTab('add-sip')} className={`text-xs ${activeTab === 'add-sip' ? 'font-bold' : ''}`}>Hydrate</button>
            <button onClick={() => setActiveTab('challenges')} className={`text-xs ${activeTab === 'challenges' ? 'font-bold' : ''}`}>Challenges</button>
            <button onClick={() => setActiveTab('settings')} className={`text-xs ${activeTab === 'settings' ? 'font-bold' : ''}`}>Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;


// <div className="flex justify-start  w-screen h-screen">
//       <div className="w-400 h-400 overflow-auto p-4">
//         <div className="text-center">
//           <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
//             <div class="flex justify-end items-right">
//               <div>
//                 <SignedIn>
//                   <UserButton />
//                 </SignedIn>
//                 <SignedOut>
//                   <SignInButton redirectTo="/#/dashboard" />
//                 </SignedOut>
//               </div>
//             </div>
//           </div>
//           <h1 className="text-xl font-semibold mt-4">Dashhboard</h1>
//           <div >
//             <img src={llamaImage} alt="Llama" className="w-64 mx-auto" />
//             {renderContent()}
//           </div>
//           <div className="bg-gray-200 p-4 flex justify-around">
//             <button onClick={() => setActiveTab('add-sip')} className={`text-xs ${activeTab === 'add-sip' ? 'font-bold' : ''}`}>Add sip</button>
//             <button onClick={() => setActiveTab('challenges')} className={`text-xs ${activeTab === 'challenges' ? 'font-bold' : ''}`}>Challenges</button>
//             <button onClick={() => setActiveTab('settings')} className={`text-xs ${activeTab === 'settings' ? 'font-bold' : ''}`}>Settings</button>
//           </div>
//         </div>
//       </div>
//     </div>