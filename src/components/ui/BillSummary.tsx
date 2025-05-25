import React from 'react';
import Card from './Card';
import Button from './Button';
import { FileText } from 'lucide-react';
import { billingHistory } from '../../data/mockData';

const BillSummary: React.FC = () => {
  // Get the most recent bill
  const latestBill = billingHistory[0];
  
  return (
    <Card title="Current Billing Period">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <p className="text-sm text-gray-500">Billing Period</p>
          <p className="font-medium">
            {latestBill.periodStart.split('-').slice(1).join('/')} - {latestBill.periodEnd.split('-').slice(1).join('/')}
          </p>
          
          <div className="mt-4">
            <p className="text-sm text-gray-500">Units Consumed</p>
            <p className="text-3xl font-semibold text-gray-800">
              {latestBill.unitsUsed}
              <span className="text-sm font-normal text-gray-500 ml-1">kWh</span>
            </p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-0 sm:text-right">
          <p className="text-sm text-gray-500">Amount Due</p>
          <p className="text-3xl font-semibold text-gray-800">
            ${latestBill.amount.toFixed(2)}
          </p>
          
          <p className="text-sm mt-1">
            <span className={`px-2 py-0.5 rounded-full ${
              latestBill.status === 'Paid' 
                ? 'bg-success-100 text-success-800' 
                : latestBill.status === 'Pending'
                  ? 'bg-warning-100 text-warning-800'
                  : 'bg-error-100 text-error-800'
            }`}>
              {latestBill.status}
            </span>
          </p>
          
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm"
              icon={<FileText size={16} />}
            >
              View Invoice
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Due Date</span>
          <span className="font-medium">{latestBill.dueDate}</span>
        </div>
      </div>
    </Card>
  );
};

export default BillSummary;