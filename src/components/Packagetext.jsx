// YourComponent.js

import React from 'react';

const Packagetext = ({ text }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-lg font-semibold leading-6 text-gray-900">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Packagetext;
