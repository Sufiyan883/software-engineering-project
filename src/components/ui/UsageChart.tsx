import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Card from './Card';
import { 
  dailyUsageData, 
  monthlyUsageData, 
  yearlyUsageData 
} from '../../data/mockData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Period = 'daily' | 'monthly' | 'yearly';

const UsageChart: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<Period>('daily');
  
  // Get chart data based on active period
  const getChartData = () => {
    switch (activePeriod) {
      case 'daily':
        return dailyUsageData;
      case 'monthly':
        return monthlyUsageData;
      case 'yearly':
        return yearlyUsageData;
      default:
        return dailyUsageData;
    }
  };
  
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1e3a8a',
        bodyColor: '#1e40af',
        borderColor: '#93c5fd',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.raw} kWh`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Electricity Units (kWh)',
        },
      },
      x: {
        title: {
          display: true,
          text: activePeriod === 'daily' 
            ? 'Day of Month' 
            : activePeriod === 'monthly' 
              ? 'Month' 
              : 'Year',
        },
      },
    },
    maintainAspectRatio: false,
  };
  
  return (
    <Card title="Electricity Usage">
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activePeriod === 'daily'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActivePeriod('daily')}
        >
          Daily
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activePeriod === 'monthly'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActivePeriod('monthly')}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activePeriod === 'yearly'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActivePeriod('yearly')}
        >
          Yearly
        </button>
      </div>
      
      <div className="h-64">
        <Bar data={getChartData()} options={options} />
      </div>
      
      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
        <p className="text-sm text-gray-600">
          {activePeriod === 'daily' && 'Daily usage pattern shows peak consumption in the evening hours.'}
          {activePeriod === 'monthly' && 'Summer months (June-August) show higher consumption due to air conditioning.'}
          {activePeriod === 'yearly' && 'Annual consumption has decreased over the past two years thanks to energy efficiency improvements.'}
        </p>
      </div>
    </Card>
  );
};

export default UsageChart;