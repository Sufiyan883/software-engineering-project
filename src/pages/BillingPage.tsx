import React, { useState } from 'react';
import CustomerLayout from '../components/layout/CustomerLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Download, FileText, CreditCard, Calendar, DollarSign, FileSearch
} from 'lucide-react';
import { billingHistory } from '../data/mockData';

const BillingPage: React.FC = () => {
  const [selectedBill, setSelectedBill] = useState<string | null>(null);
  
  // Calculate totals
  const totalUnits = billingHistory.reduce((sum, bill) => sum + bill.unitsUsed, 0);
  const totalAmount = billingHistory.reduce((sum, bill) => sum + bill.amount, 0);
  
  return (
    <CustomerLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Payments</h1>
          <p className="text-gray-600">View and manage your electricity bills</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Button 
            variant="primary"
            icon={<CreditCard size={18} />}
          >
            Make a Payment
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-primary-50 border-primary-100">
          <div className="flex items-start">
            <div className="p-3 bg-primary-100 rounded-lg mr-4">
              <Calendar size={24} className="text-primary-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Current Billing Period</div>
              <div className="text-lg font-semibold text-gray-900">
                June 1 - June 30, 2024
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-success-50 border-success-100">
          <div className="flex items-start">
            <div className="p-3 bg-success-100 rounded-lg mr-4">
              <FileText size={24} className="text-success-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Units Used (YTD)</div>
              <div className="text-lg font-semibold text-gray-900">
                {totalUnits} kWh
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="bg-warning-50 border-warning-100">
          <div className="flex items-start">
            <div className="p-3 bg-warning-100 rounded-lg mr-4">
              <DollarSign size={24} className="text-warning-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Amount (YTD)</div>
              <div className="text-lg font-semibold text-gray-900">
                ${totalAmount.toFixed(2)}
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <Card title="Billing History">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Billing Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Used
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {billingHistory.map((bill) => (
                <tr 
                  key={bill.id} 
                  className={`hover:bg-gray-50 ${selectedBill === bill.id ? 'bg-primary-50' : ''}`}
                  onClick={() => setSelectedBill(bill.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{bill.month}</div>
                    <div className="text-xs text-gray-500">
                      {bill.periodStart.split('-').slice(1).join('/')} - {bill.periodEnd.split('-').slice(1).join('/')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{bill.unitsUsed} kWh</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${bill.amount.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      bill.status === 'Paid' 
                        ? 'bg-success-100 text-success-800' 
                        : bill.status === 'Pending'
                          ? 'bg-warning-100 text-warning-800'
                          : 'bg-error-100 text-error-800'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {bill.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      {selectedBill && (
        <div className="mt-6">
          <Card title="Bill Details">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 pr-0 md:pr-6">
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {billingHistory.find(b => b.id === selectedBill)?.month} Bill
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Bill ID: {selectedBill}
                    </p>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Download size={16} />}
                    >
                      Download PDF
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Previous Reading</span>
                    <span>1245 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Reading</span>
                    <span>1455 kWh</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-800">Total Units Consumed</span>
                    <span>{billingHistory.find(b => b.id === selectedBill)?.unitsUsed} kWh</span>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rate per Unit</span>
                      <span>$0.70</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Energy Charges</span>
                      <span>${(billingHistory.find(b => b.id === selectedBill)?.unitsUsed || 0 * 0.7).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fixed Charges</span>
                      <span>$15.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span>$10.00</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Amount</span>
                      <span>${billingHistory.find(b => b.id === selectedBill)?.amount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 border-t md:border-t-0 md:border-l pt-4 mt-4 md:pt-0 md:mt-0 md:pl-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Payment Status</div>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      billingHistory.find(b => b.id === selectedBill)?.status === 'Paid' 
                        ? 'bg-success-100 text-success-800' 
                        : billingHistory.find(b => b.id === selectedBill)?.status === 'Pending'
                          ? 'bg-warning-100 text-warning-800'
                          : 'bg-error-100 text-error-800'
                    }`}>
                      {billingHistory.find(b => b.id === selectedBill)?.status}
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Due Date</div>
                    <div className="text-gray-900">
                      {billingHistory.find(b => b.id === selectedBill)?.dueDate}
                    </div>
                  </div>
                  
                  {billingHistory.find(b => b.id === selectedBill)?.status === 'Paid' && (
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Paid On</div>
                      <div className="text-gray-900">
                        {billingHistory.find(b => b.id === selectedBill)?.paidDate}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <div className="text-sm font-medium text-gray-500 mb-3">Payment Methods</div>
                    <div className="space-y-2">
                      <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                        <div className="h-8 w-12 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <span className="text-blue-800 font-semibold text-xs">VISA</span>
                        </div>
                        <div className="text-sm">
                          <p className="text-gray-900">Visa ending in 4242</p>
                          <p className="text-gray-500 text-xs">Expires 12/26</p>
                        </div>
                        <div className="ml-auto">
                          <input type="radio" name="payment" className="h-4 w-4 text-primary-600 border-gray-300 rounded" defaultChecked />
                        </div>
                      </div>
                      
                      <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-200">
                        <div className="h-8 w-12 bg-green-100 rounded flex items-center justify-center mr-3">
                          <span className="text-green-800 font-semibold text-xs">Bank</span>
                        </div>
                        <div className="text-sm">
                          <p className="text-gray-900">Direct Debit</p>
                          <p className="text-gray-500 text-xs">Account ending in 5678</p>
                        </div>
                        <div className="ml-auto">
                          <input type="radio" name="payment" className="h-4 w-4 text-primary-600 border-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {billingHistory.find(b => b.id === selectedBill)?.status !== 'Paid' && (
                    <div className="pt-4">
                      <Button
                        variant="primary"
                        className="w-full"
                        icon={<CreditCard size={16} />}
                      >
                        Pay Now
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      <div className="mt-6">
        <Card title="Need Help?">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600 mb-2">
                Have questions about your bill or payment options?
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <FileSearch size={20} className="text-primary-500 mr-2" />
                <span className="text-primary-600 font-medium">
                  View our billing FAQs
                </span>
              </div>
            </div>
            
            <Button
              variant="outline"
            >
              Contact Support
            </Button>
          </div>
        </Card>
      </div>
    </CustomerLayout>
  );
};

export default BillingPage;