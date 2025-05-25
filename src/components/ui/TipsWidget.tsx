import React from 'react';
import Card from './Card';
import { energyTips } from '../../data/mockData';

interface TipsWidgetProps {
  weatherType?: 'hot' | 'cold' | 'rainy' | 'normal';
}

const TipsWidget: React.FC<TipsWidgetProps> = ({ weatherType = 'hot' }) => {
  const tips = energyTips[weatherType];
  
  return (
    <Card title="Energy Saving Tips">
      <div className="space-y-3">
        {tips.map((tip) => (
          <div 
            key={tip.id} 
            className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="text-2xl mr-3 mt-1">{tip.icon}</div>
            <div className="text-sm text-gray-700">{tip.tip}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <button className="w-full py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
          View More Tips
        </button>
      </div>
    </Card>
  );
};

export default TipsWidget;