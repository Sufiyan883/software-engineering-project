import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Download, Bell, Filter, Search, FileText 
} from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { mockUsers, overallUsageData } from '../data/mockData';

const AdminDashboard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'dashboard';
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Units (kWh)',
        },
      },
    },
    maintainAspectRatio: false,
  };
  
  const renderDashboardContent = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage electricity usage across all users</p>
        </div>
        
        <div className="flex space-x-3 mt-4 md:mt-0">
          <Button
            variant="outline"
            size="sm"
            icon={<Download size={16} />}
          >
            Export Data
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Bell size={16} />}
          >
            Simulate Alert
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-primary-50 border-primary-100">
          <div className="text-sm text-gray-500">Total Users</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">{mockUsers.length}</div>
          <div className="text-xs text-success-600 mt-1">↑ 12% from last month</div>
        </Card>
        
        <Card className="bg-success-50 border-success-100">
          <div className="text-sm text-gray-500">Average Usage</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">180.8 kWh</div>
          <div className="text-xs text-error-600 mt-1">↑ 5% from last month</div>
        </Card>
        
        <Card className="bg-warning-50 border-warning-100">
          <div className="text-sm text-gray-500">Peak Demand</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">350 kW</div>
          <div className="text-xs text-success-600 mt-1">↓ 3% from last month</div>
        </Card>
        
        <Card className="bg-gray-50 border-gray-100">
          <div className="text-sm text-gray-500">Revenue</div>
          <div className="text-3xl font-bold text-gray-900 mt-1">$12,580</div>
          <div className="text-xs text-success-600 mt-1">↑ 8% from last month</div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card title="Overall Usage Pattern">
            <div className="h-80">
              <Bar data={overallUsageData} options={chartOptions} />
            </div>
          </Card>
        </div>
        
        <div>
          <Card title="Usage Distribution">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Residential</span>
                  <span className="font-medium">42%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500" style={{ width: '42%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Commercial</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-success-500" style={{ width: '28%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Industrial</span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-warning-500" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="text-sm font-medium mb-2">High Usage Alerts</div>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-error-50 rounded text-sm">
                  <span className="w-2 h-2 bg-error-500 rounded-full mr-2"></span>
                  <span>3 users exceeded 250 kWh this month</span>
                </div>
                <div className="flex items-center p-2 bg-warning-50 rounded text-sm">
                  <span className="w-2 h-2 bg-warning-500 rounded-full mr-2"></span>
                  <span>12 users approaching monthly limit</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Card title="User Management">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div className="flex space-x-2 mb-3 sm:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 w-full"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={<Filter size={16} />}
            >
              Filter
            </Button>
          </div>
          
          <Button
            variant="primary"
            size="sm"
            icon={<FileText size={16} />}
          >
            Generate Reports
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Meter ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Bill
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage Pattern
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.address}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.meterID}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${user.lastBill.amount.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">{user.lastBill.unitsUsed} kWh</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.lastBill.status === 'Paid' 
                        ? 'bg-success-100 text-success-800' 
                        : user.lastBill.status === 'Pending'
                          ? 'bg-warning-100 text-warning-800'
                          : 'bg-error-100 text-error-800'
                    }`}>
                      {user.lastBill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.usagePattern === 'Low' 
                        ? 'bg-success-100 text-success-800' 
                        : user.usagePattern === 'Medium'
                          ? 'bg-warning-100 text-warning-800'
                          : 'bg-error-100 text-error-800'
                    }`}>
                      {user.usagePattern}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Alert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">12</span> users
          </div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-2 py-1 border border-gray-300 rounded-md text-sm bg-primary-50 text-primary-600 border-primary-300">
              1
            </button>
            <button className="px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-2 py-1 border border-gray-300 rounded-md text-sm text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </>
  );
  
  const renderReportsContent = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and download system reports</p>
        </div>
      </div>
      
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold mb-3">Usage Report</div>
            <p className="text-sm text-gray-600 mb-4">
              Detailed analysis of electricity usage patterns across all customers.
            </p>
            <Button 
              variant="primary"
              size="sm"
              icon={<Download size={16} />}
            >
              Generate Report
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold mb-3">Billing Report</div>
            <p className="text-sm text-gray-600 mb-4">
              Summary of billing information, payments, and outstanding balances.
            </p>
            <Button 
              variant="primary"
              size="sm"
              icon={<Download size={16} />}
            >
              Generate Report
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold mb-3">Efficiency Report</div>
            <p className="text-sm text-gray-600 mb-4">
              Analysis of energy efficiency patterns and potential savings.
            </p>
            <Button 
              variant="primary"
              size="sm"
              icon={<Download size={16} />}
            >
              Generate Report
            </Button>
          </div>
        </div>
      </Card>
      
      <Card title="Recent Reports">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">June 2024 Usage Summary</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 30, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1.2 MB
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Q2 2024 Billing Report</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  June 15, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2.4 MB
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">May 2024 Usage Analysis</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 31, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  1.8 MB
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900">
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'reports':
        return renderReportsContent();
      default:
        return renderDashboardContent();
    }
  };

  return (
    <AdminLayout>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminDashboard;