import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CustomerLayout from '../components/layout/CustomerLayout';
import Card from '../components/ui/Card';
import UsageCounter from '../components/ui/UsageCounter';
import WeatherWidget from '../components/ui/WeatherWidget';
import UsageChart from '../components/ui/UsageChart';
import TipsWidget from '../components/ui/TipsWidget';
import BillSummary from '../components/ui/BillSummary';
import ProfileCard from '../components/ui/ProfileCard';
import { weatherData } from '../data/mockData';

const CustomerDashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'dashboard';
  
  // Determine weather type for tips
  const getWeatherType = (): 'hot' | 'cold' | 'rainy' | 'normal' => {
    const { condition, temperature } = weatherData.current;
    
    if (condition.toLowerCase().includes('rain') || condition.toLowerCase().includes('storm')) {
      return 'rainy';
    } else if (temperature > 28) {
      return 'hot';
    } else if (temperature < 15) {
      return 'cold';
    } else {
      return 'normal';
    }
  };

  const renderDashboardContent = () => (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card title="Live Electricity Usage">
            <UsageCounter currentUsage={8.2} maxUsage={15} />
          </Card>
        </div>
        <div>
          <WeatherWidget />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UsageChart />
        </div>
        <div className="space-y-6">
          <TipsWidget weatherType={getWeatherType()} />
          <BillSummary />
        </div>
      </div>
    </>
  );

  const renderUsageContent = () => (
    <div className="space-y-6">
      <Card title="Detailed Usage Analysis">
        <UsageCounter currentUsage={8.2} maxUsage={15} />
        
        <div className="mt-8">
          <UsageChart />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
            <p className="text-sm font-medium text-gray-500">Today's Usage</p>
            <p className="text-2xl font-bold text-primary-700">8.2 kWh</p>
            <p className="text-xs text-gray-500 mt-1">↑ 0.5 kWh from yesterday</p>
          </div>
          
          <div className="bg-success-50 p-4 rounded-lg border border-success-100">
            <p className="text-sm font-medium text-gray-500">This Month</p>
            <p className="text-2xl font-bold text-success-700">123 kWh</p>
            <p className="text-xs text-gray-500 mt-1">↓ 5% from last month</p>
          </div>
          
          <div className="bg-warning-50 p-4 rounded-lg border border-warning-100">
            <p className="text-sm font-medium text-gray-500">Peak Time</p>
            <p className="text-2xl font-bold text-warning-700">6-8 PM</p>
            <p className="text-xs text-gray-500 mt-1">Try to reduce usage during peak hours</p>
          </div>
        </div>
      </Card>
      
      <Card title="Usage Breakdown by Appliance">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-1/3 sm:w-1/4 text-sm text-gray-600">Air Conditioner</div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="ml-4 text-sm font-medium">45%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/3 sm:w-1/4 text-sm text-gray-600">Water Heater</div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="ml-4 text-sm font-medium">20%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/3 sm:w-1/4 text-sm text-gray-600">Refrigerator</div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="ml-4 text-sm font-medium">15%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/3 sm:w-1/4 text-sm text-gray-600">Lighting</div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="ml-4 text-sm font-medium">10%</div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/3 sm:w-1/4 text-sm text-gray-600">Other</div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="ml-4 text-sm font-medium">10%</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderProfileContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <ProfileCard />
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <Card title="Account Settings">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Notifications
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-600">
                  Receive weekly usage reports
                </span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-600">
                  Receive bill payment reminders
                </span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Receive energy-saving tips
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Billing Preferences
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="billing"
                  className="h-4 w-4 text-primary-600 border-gray-300"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-600">
                  Electronic billing
                </span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="billing"
                  className="h-4 w-4 text-primary-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Paper billing
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </Card>
        
        <Card title="Payment Methods">
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="h-10 w-14 bg-blue-100 rounded flex items-center justify-center mr-3">
                <span className="text-blue-800 font-semibold text-xs">VISA</span>
              </div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 12/26</p>
              </div>
              <div className="ml-auto">
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
            
            <button className="px-4 py-2 text-sm text-primary-600 font-medium border border-primary-300 rounded-lg hover:bg-primary-50 transition-colors w-full text-center">
              + Add Payment Method
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'usage':
        return renderUsageContent();
      case 'profile':
        return renderProfileContent();
      default:
        return renderDashboardContent();
    }
  };

  return (
    <CustomerLayout>
      {renderContent()}
    </CustomerLayout>
  );
};

export default CustomerDashboard;