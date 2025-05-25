import React from 'react';
import Card from './Card';
import { weatherData } from '../../data/mockData';

const WeatherWidget: React.FC = () => {
  const { current, forecast } = weatherData;
  
  // Determine message based on weather condition
  const getWeatherMessage = () => {
    const { condition, temperature } = current;
    
    if (condition.toLowerCase().includes('sunny') && temperature > 30) {
      return 'AC usage higher today – use ceiling fans first!';
    } else if (condition.toLowerCase().includes('rain')) {
      return 'Avoid using high-power appliances during thunderstorms.';
    } else if (condition.toLowerCase().includes('cloud')) {
      return 'Natural light is reduced, be mindful of lighting usage.';
    } else if (temperature < 15) {
      return 'Keep heating at 20-22°C for optimal efficiency.';
    }
    
    return 'Ideal conditions for natural ventilation instead of AC.';
  };
  
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <span className="text-4xl mr-2">{current.icon}</span>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{current.condition}</h3>
              <p className="text-gray-600">{current.temperature}°C</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-700 bg-white bg-opacity-50 p-2 rounded-lg border border-blue-100">
            {getWeatherMessage()}
          </p>
        </div>
        
        <div className="hidden md:flex space-x-3">
          {forecast.slice(0, 3).map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-xs font-medium text-gray-500">{day.day}</p>
              <div className="my-1 text-xl">{day.icon}</div>
              <p className="text-xs">
                <span className="font-medium">{day.high}°</span>
                <span className="text-gray-500 ml-1">{day.low}°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;