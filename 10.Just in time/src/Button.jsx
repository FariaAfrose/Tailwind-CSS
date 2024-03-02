import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Button({ className }) {
  return (
    <button type="button" className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
      Be a good Human
    </button>
  );
}
