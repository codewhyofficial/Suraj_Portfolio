// LoadingScreen.js
import React from 'react';
// import Skeleton from 'react-loading-skeleton';

const LoadingScreen = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-10 font-mono">
        <p>Page Loading....</p>
        
    <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-blue-500 border-solid m-1">
    </div>
  </div>
  );
};

export default LoadingScreen;
