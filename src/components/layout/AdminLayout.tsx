import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, BarChart3, FileText, Settings, LogOut 
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <Home size={20} /> },
    { name: 'User Stats', path: '/admin?tab=users', icon: <Users size={20} /> },
    { name: 'Usage Analysis', path: '/admin?tab=usage', icon: <BarChart3 size={20} /> },
    { name: 'Reports', path: '/admin?tab=reports', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/admin?tab=settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-800">ElectriTrack</span>
            <span className="ml-1 text-xs font-semibold bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
              Admin
            </span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    location.pathname === item.path || 
                    (location.pathname === '/admin' && item.path.startsWith('/admin?tab='))
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 mt-6">
            <Link
              to="/"
              className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-800">ElectriTrack</span>
            <span className="ml-1 text-xs font-semibold bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
              Admin
            </span>
          </Link>
          <button className="p-2 rounded-lg bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="p-2 border-t">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-lg whitespace-nowrap min-w-max ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600'
                }`}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <div className="md:p-8 p-4 md:pt-8 pt-32 max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;