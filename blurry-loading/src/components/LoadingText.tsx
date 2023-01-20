import * as React from 'react';

interface LoadingProps {
  percentage: number;
}


const LoadingText: React.FC<LoadingProps> = ({ percentage }) => {
  React.useEffect(() => {
    percentage = percentage;
  }, [percentage])
  return (
    <div id='load-text' className='loading-text'>
      {percentage}%
    </div>
  );
};

export default LoadingText;
