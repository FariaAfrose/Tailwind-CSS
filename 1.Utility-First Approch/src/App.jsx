import React from 'react';
import './App.css';

function App() {
return (
  <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2">
    <img className="h-24 mx-auto rounded-full ring-4 ring-green-400" src="/image/logo.png" alt="sumit vai" />
    <div className="text-center space-y-2">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">Learn with Me</p>
        <p className="text-gray-500 font-medium">Youtube Channel</p>
      </div>
      <button className="px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold" type="button">Visit now</button>
    </div>
  </div>
);
}

export default App;
