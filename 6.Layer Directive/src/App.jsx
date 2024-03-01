import React from 'react';
import './App.css';

function App() {
return (
  <div className="max-w-sm mx-auto p-8 bg-white rounded-xl
  shadow-md space-y-2 sm:flex sm:items-center sm:py-4
  sm:space-y-0 sm:space-x-6 dark:bg-gray-800  sm:dark:hover:bg-gray-700"
  >
    <img
      className="h-24 sm:mx-0 sm:flex-shrink-0 mx-auto rounded-full ring-4 ring-green-400
    transform hover:scale-105 duration-500"
      src="/image/logo.png"
      alt="sumit vai"
    />
    <div className="text-center space-y-2  sm:text-left">
      <div className="space-y-0.5">
        <h1 className="text-lg text-black font-semibold dark:text-gray-300">Learn with Me</h1>
        <p className="text-body text-gray-500  dark:text-gray-400 font-medium">Youtube Channel</p>
      </div>
      <button
        className="btn btn-purple rounded-sm"
        type="button"
      >
        Visit now
      </button>
      <button
        className="btn btn-green ml-2"
        type="button"
      >
        Website
        {' '}
      </button>
    </div>
  </div>
);
}

export default App;
