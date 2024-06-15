import {React} from 'react'; 
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './views/SplashPage';
import Dashboard from './views/DashboardPage';
import Login from './views/LoginPage';
import { Auth0Provider } from '@auth0/auth0-react';

// ReactDOM.render(
//   <Auth0Provider
//     domain="YOUR_AUTH0_DOMAIN"
//     clientId="YOUR_CLIENT_ID"
//     redirectUri={window.location.origin}
//     audience="YOUR_API_IDENTIFIER" // Optional: if you're using Auth0 APIs
//     scope="openid profile email"   // Optional: adjust the scope to what you need
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
