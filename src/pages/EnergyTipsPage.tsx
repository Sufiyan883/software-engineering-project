import React, { useState } from 'react';
import CustomerLayout from '../components/layout/CustomerLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Sun, CloudRain, Snowflake, Cloud, ThumbsUp, ChevronDown, ChevronUp, Bell 
} from 'lucide-react';
import { energyTips } from '../data/mockData';

const EnergyTipsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'hot' | 'cold' | 'rainy' | 'normal'>('hot');
  const [savedTips, setSavedTips] = useState<string[]>([]);
  
  const toggleSaveTip = (tipId: string) => {
    if (savedTips.includes(tipId)) {
      setSavedTips(savedTips.filter(id => id !== tipId));
    } else {
      setSavedTips([...savedTips, tipId]);
    }
  };
  
  return (
    <CustomerLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Energy Saving Tips</h1>
          <p className="text-gray-600">Weather-based recommendations to help reduce consumption</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button 
            variant="primary"
            icon={<Bell size={18} />}
          >
            Subscribe to Weekly Tips
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button
          className={`flex items-center justify-center p-4 rounded-lg border ${
            activeCategory === 'hot'
              ? 'bg-warning-50 border-warning-200 text-warning-700'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveCategory('hot')}
        >
          <Sun size={20} className="mr-2" />
          <span>Hot Weather</span>
        </button>
        
        <button
          className={`flex items-center justify-center p-4 rounded-lg border ${
            activeCategory === 'cold'
              ? 'bg-primary-50 border-primary-200 text-primary-700'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveCategory('cold')}
        >
          <Snowflake size={20} className="mr-2" />
          <span>Cold Weather</span>
        </button>
        
        <button
          className={`flex items-center justify-center p-4 rounded-lg border ${
            activeCategory === 'rainy'
              ? 'bg-blue-50 border-blue-200 text-blue-700'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveCategory('rainy')}
        >
          <CloudRain size={20} className="mr-2" />
          <span>Rainy Weather</span>
        </button>
        
        <button
          className={`flex items-center justify-center p-4 rounded-lg border ${
            activeCategory === 'normal'
              ? 'bg-success-50 border-success-200 text-success-700'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveCategory('normal')}
        >
          <Cloud size={20} className="mr-2" />
          <span>Normal Weather</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {energyTips[activeCategory].map((tip) => (
          <Card key={tip.id} className="transition-all hover:shadow-md">
            <div className="flex items-start">
              <div className="text-4xl mr-4">{tip.icon}</div>
              <div className="flex-1">
                <p className="text-gray-800 text-lg">{tip.tip}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    className={`flex items-center text-sm font-medium ${
                      savedTips.includes(tip.id)
                        ? 'text-success-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => toggleSaveTip(tip.id)}
                  >
                    <ThumbsUp size={16} className="mr-1" />
                    {savedTips.includes(tip.id) ? 'Saved' : 'Save Tip'}
                  </button>
                  
                  <div className="text-xs text-gray-500">
                    Potential Savings: 5-10% on bill
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-10">
        <Card title="Seasonal Energy Saving Guide">
          <div className="space-y-4">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Sun size={20} className="text-warning-500 mr-3" />
                  <span className="font-medium text-gray-800">Summer Energy Saving Guide</span>
                </div>
                <div className="group-open:hidden">
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
                <div className="hidden group-open:block">
                  <ChevronUp size={18} className="text-gray-500" />
                </div>
              </summary>
              <div className="px-4 pt-2 pb-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-warning-500 mr-2">•</span>
                    <span>Keep your thermostat at 78°F (26°C) when you're home and raise it when you're away.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-500 mr-2">•</span>
                    <span>Use ceiling fans to create a wind-chill effect that will make you feel cooler.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-500 mr-2">•</span>
                    <span>Keep blinds and curtains closed during the day to block the sun's heat.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-warning-500 mr-2">•</span>
                    <span>Avoid using heat-generating appliances like ovens during the hottest part of the day.</span>
                  </li>
                </ul>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Snowflake size={20} className="text-primary-500 mr-3" />
                  <span className="font-medium text-gray-800">Winter Energy Saving Guide</span>
                </div>
                <div className="group-open:hidden">
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
                <div className="hidden group-open:block">
                  <ChevronUp size={18} className="text-gray-500" />
                </div>
              </summary>
              <div className="px-4 pt-2 pb-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Set your thermostat to 68°F (20°C) when you're home and lower it when you're asleep or away.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Seal leaks around doors, windows, and ducts to prevent heat from escaping.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Open curtains on south-facing windows during the day to let in warming sunlight.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Use a programmable thermostat to automatically adjust temperatures throughout the day.</span>
                  </li>
                </ul>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <CloudRain size={20} className="text-blue-500 mr-3" />
                  <span className="font-medium text-gray-800">Rainy Season Energy Saving Guide</span>
                </div>
                <div className="group-open:hidden">
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
                <div className="hidden group-open:block">
                  <ChevronUp size={18} className="text-gray-500" />
                </div>
              </summary>
              <div className="px-4 pt-2 pb-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Use surge protectors to safeguard electronics during thunderstorms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Unplug sensitive electronics during lightning storms to prevent damage from power surges.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Use LED lights during darker rainy days as they consume less energy than incandescent bulbs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Avoid using electric dryers for clothes; allow them to air dry when possible.</span>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 bg-primary-50 border border-primary-100 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-6">
            <Bell size={32} className="text-primary-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-800 mb-1">
              Get Weekly Energy Saving Tips
            </h3>
            <p className="text-primary-600 mb-4">
              Subscribe to receive personalized tips based on your usage patterns and local weather.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-primary-200 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default EnergyTipsPage;