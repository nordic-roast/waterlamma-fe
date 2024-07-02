import React, { useState } from 'react'; 
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import AddSipView from './SipView';
import ChallengesView from './ChallengesView';
import SettingsView from './SettingsView';

const DashboardView = () => {
  const [activeTab, setActiveTab] = useState('add-sip');

  const renderContent = () => {
    switch (activeTab) {
      case 'add-sip':
        return <AddSipView />;
      case 'challenges':
        return <ChallengesView />;
      case 'settings':
        return <SettingsView />
    }
  };

  return (
    <div className="flex justify-start w-screen h-screen">
      <div className="w-400 h-400 overflow-auto p-4">
        <div className="text-center">
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex-1"></div>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton redirectTo="/#/dashboard" />
              </SignedOut>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="mt-4" style={{ height: '200px', width: '400px', overflow: 'auto' }}>
              {renderContent()}
            </div>
          </div>
          <div className="bg-gray-200 p-4 flex justify-around">
            <button onClick={() => setActiveTab('add-sip')} className={`text-xs ${activeTab === 'add-sip' ? 'font-bold' : ''}`}>Hydrate</button>
            <button onClick={() => setActiveTab('challenges')} className={`text-xs ${activeTab === 'challenges' ? 'font-bold' : ''}`}>Streaks</button>
            {/* <button onClick={() => setActiveTab('settings')} className={`text-xs ${activeTab === 'settings' ? 'font-bold' : ''}`}>Profile</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;