import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-center items-center h-screen">
      {!isAuthenticated && (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default LoginPage;
