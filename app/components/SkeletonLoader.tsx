
import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div>
      <div className="border rounded-lg p-4 animate-pulse">
        <div className="bg-gray-300 h-48 rounded-md mb-4 text-center text-3xl font-black "> <p className='grid w-[200px] grid-flow-col text-nowrap'>Please wait <p className='animate-bounce h-3'>...</p> </p></div>
        <div className="bg-gray-300 h-6 rounded mb-2"> </div>
        <div className="bg-gray-300 h-4 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 rounded mb-2"></div>
      </div>
    </div>);
};

export default SkeletonLoader;
