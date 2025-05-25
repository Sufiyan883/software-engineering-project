import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Zap, Phone, Mail, MapPin, MessageSquare, ChevronDown, ChevronUp 
} from 'lucide-react';
import { faqData } from '../data/mockData';

const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  
  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">ElectriTrack</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/customer" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            <Link to="/billing" className="text-gray-600 hover:text-gray-900">Billing</Link>
            <Link to="/tips" className="text-gray-600 hover:text-gray-900">Energy Tips</Link>
            <Link to="/contact" className="text-primary-600 font-medium">Contact</Link>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact & Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with any questions about your electricity usage, billing, or account.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">
              Mon-Fri: 8am - 8pm<br />
              Sat: 9am - 5pm
            </p>
            <p className="text-primary-600 font-medium">(555) 123-4567</p>
          </Card>
          
          <Card className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">
              24/7 support with response<br />
              within 24 hours
            </p>
            <p className="text-primary-600 font-medium">support@electritrack.com</p>
          </Card>
          
          <Card className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
            <p className="text-gray-600 mb-4">
              123 Energy Street<br />
              Powertown, PT 12345
            </p>
            <p className="text-primary-600 font-medium">View on Map</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            <Card>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Billing Question"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please describe your issue or question in detail..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">privacy policy</a>
                  </label>
                </div>
                
                <div>
                  <Button
                    variant="primary"
                    icon={<MessageSquare size={18} />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <Card>
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFaq === faq.id ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </button>
                    
                    {openFaq === faq.id && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
        
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Emergency Support
          </h2>
          <p className="text-lg text-primary-600 mb-6 max-w-2xl mx-auto">
            For power outages, electrical emergencies, or urgent issues that require immediate attention, please call our 24/7 emergency line.
          </p>
          <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
            Emergency Hotline: (555) 911-POWER
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
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
                <h4 className="text-white font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/customer" className="hover:text-white">Dashboard</Link></li>
                  <li><Link to="/billing" className="hover:text-white">Billing</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/tips" className="hover:text-white">Energy Tips</Link></li>
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

export default ContactPage;