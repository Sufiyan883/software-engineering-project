import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart2, Users, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import { weatherData } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">ElectriTrack</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <div className="h-6 w-px bg-gray-200"></div>
            <span className="text-sm">
              <span role="img" aria-label="weather">
                {weatherData.current.icon}
              </span> {weatherData.current.temperature}°C
            </span>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Track Your Electricity Usage in Real-Time
              </h1>
              <p className="text-xl text-primary-100">
                Monitor your energy consumption, get personalized saving tips, and reduce your electricity bills.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/customer">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white text-primary-700 hover:bg-primary-50 border-white w-full sm:w-auto"
                  >
                    Enter as Customer
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent text-white border-white hover:bg-primary-600 w-full sm:w-auto"
                  >
                    Enter as Admin
                  </Button>
                </Link>
              </div>
              
              <div className="bg-primary-600 bg-opacity-50 rounded-lg p-4 border border-primary-400">
                <p className="text-primary-100">
                  <span className="font-semibold text-white">You saved 12 units last month!</span>{' '}
                  That's equivalent to running your AC for 24 fewer hours.
                </p>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-80 bg-primary-400 bg-opacity-30 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={180} className="text-primary-200 opacity-20" />
                  </div>
                  
                  <div className="relative z-10 transform -rotate-12">
                    <div className="w-64 h-96 bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white">
                      <div className="h-8 bg-primary-500 flex items-center px-4">
                        <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      
                      <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-3"></div>
                        <div className="h-32 bg-primary-100 rounded-lg mb-4 flex items-center justify-center">
                          <BarChart2 size={48} className="text-primary-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded-full"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                          <div className="h-3 bg-gray-200 rounded-full w-4/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-warning-500 text-white p-3 rounded-lg shadow-lg animate-pulse-slow">
                  <div className="text-sm font-semibold">Live Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to monitor and optimize your electricity usage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Monitor your electricity consumption in real-time with live updates and animated counters.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 size={24} className="text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Usage Analytics</h3>
              <p className="text-gray-600">
                View detailed charts and graphs of your daily, monthly, and yearly consumption patterns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Get personalized energy-saving tips based on your usage patterns and local weather.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About ElectriTrack</h2>
              <p className="text-gray-600 mb-4">
                ElectriTrack is a modern electricity monitoring system designed to help residential and commercial customers track their energy usage efficiently.
              </p>
              <p className="text-gray-600 mb-4">
                Our intuitive dashboard provides real-time data visualization, billing information, and personalized energy-saving recommendations based on your consumption patterns and local weather conditions.
              </p>
              <p className="text-gray-600">
                By understanding your electricity usage better, you can make informed decisions to reduce consumption, lower your bills, and contribute to a more sustainable future.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Info size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Did You Know?</h3>
                  <p className="text-gray-600 text-sm">
                    The average household wastes approximately 20% of its electricity through inefficient appliances and poor energy habits.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="text-sm font-medium text-gray-500 mb-1">Average Monthly Savings</div>
                  <div className="text-2xl font-bold text-primary-600">12-15%</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="text-sm font-medium text-gray-500 mb-1">Customer Satisfaction</div>
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <div className="text-sm font-medium text-gray-500 mb-1">Environmental Impact</div>
                  <div className="text-2xl font-bold text-success-600">Reduced CO2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="font-bold text-lg text-white">ElectriTrack</span>
              </div>
              <p className="text-sm max-w-xs">
                Track your electricity usage in real-time, get personalized savings tips, and reduce your bills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Energy Tips</a></li>
                  <li><a href="#" className="hover:text-white">FAQs</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Twitter</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 ElectriTrack. All rights reserved.</p>
            <p className="text-sm mt-4 md:mt-0">
              This is a frontend demo only - no actual electricity tracking capabilities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;