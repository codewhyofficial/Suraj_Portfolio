// LoadingScreen.js
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval); // Stop the progress once it's complete
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); // Adjust the speed of progress (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Green progress bar at the top */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-green-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingScreen;
