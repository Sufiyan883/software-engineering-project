import React, { useState, useEffect } from 'react';

interface UsageCounterProps {
  currentUsage: number;
  maxUsage: number;
}

const UsageCounter: React.FC<UsageCounterProps> = ({ currentUsage, maxUsage }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        // Randomly increase or stay the same to simulate real-time changes
        const shouldIncrease = Math.random() > 0.7;
        const increment = shouldIncrease ? 0.1 : 0;
        const newCount = prevCount + increment;
        
        // Don't exceed current usage
        return newCount > currentUsage ? currentUsage : newCount;
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, [currentUsage]);
  
  // Calculate percentage for progress bar
  const percentage = (count / maxUsage) * 100;
  
  // Determine color based on usage level
  const getBarColor = () => {
    if (percentage < 30) return 'bg-success-500';
    if (percentage < 70) return 'bg-warning-500';
    return 'bg-error-500';
  };
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-lg font-semibold">{count.toFixed(1)}</span>
          <span className="text-gray-500 ml-1">kWh</span>
        </div>
        <div className="text-gray-500 text-sm">
          Daily usage: {maxUsage} kWh max
        </div>
      </div>
      
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getBarColor()} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 flex justify-between">
        <div>Low</div>
        <div>Medium</div>
        <div>High</div>
      </div>
    </div>
  );
};

export default UsageCounter;