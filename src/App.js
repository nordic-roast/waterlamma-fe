import { React } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Splash from './views/SplashPage';
import Dashboard from './views/DashboardPage';
import Login from './views/LoginPage';

// clerk API key
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
 
function App() {
  return (
    <Router>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
          <Route path="/" element={<Splash />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />}
          />
        </Routes>
      </ClerkProvider>
    </Router>
  );
}


export default App;
