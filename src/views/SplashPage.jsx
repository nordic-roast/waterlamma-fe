import React from 'react';
import llamaImage from '../assets/llama.png';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-start w-screen h-screen">
      <div className="w-400 h-400 overflow-auto p-4">
        <div className="text-center">
          <img src={llamaImage} alt="Llama" className="w-64 mx-auto" />
          <h1 className="text-xl font-semibold mt-4">Track your intake</h1>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4"
            onClick={() => navigate('/dashboard')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;