import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">ElectriTrack</span>
          </Link>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 py-12 text-center">
          <div className="mb-8 relative">
            <div className="text-[150px] font-bold text-gray-200 leading-none">404</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Zap size={80} className="text-primary-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          
          <Link to="/">
            <Button 
              variant="primary"
              size="lg"
              icon={<Home size={20} />}
            >
              Return Home
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="bg-white py-6 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          © 2025 ElectriTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;