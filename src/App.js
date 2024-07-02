import { React } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 

import { ClerkProvider } from '@clerk/clerk-react'; 
import Dashboard from './views/DashboardPage'; 
import Profile from './views/UserProfilePage'; 

// clerk API key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
 
function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </ClerkProvider>
    </Router>
  );
}


export default App;
