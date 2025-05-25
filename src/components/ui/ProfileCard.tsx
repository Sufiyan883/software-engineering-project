import React from 'react';
import Card from './Card';
import { User, MapPin, Hash } from 'lucide-react';
import { customerProfile } from '../../data/mockData';

const ProfileCard: React.FC = () => {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-20 bg-gradient-to-r from-primary-500 to-primary-600"></div>
      
      <div className="relative mt-8 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center">
          <User size={40} className="text-gray-400" />
        </div>
        
        <h3 className="mt-3 text-xl font-semibold text-gray-800">
          {customerProfile.name}
        </h3>
        <p className="text-gray-500">{customerProfile.email}</p>
        
        <div className="w-full mt-6 space-y-3">
          <div className="flex items-center text-sm">
            <MapPin size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-600">{customerProfile.address}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Hash size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-600">
              Meter ID: <span className="font-medium">{customerProfile.meterID}</span>
            </span>
          </div>
        </div>
        
        <div className="w-full mt-6 pt-4 border-t grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">Account Number</p>
            <p className="text-sm font-medium">{customerProfile.accountNumber}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Plan Type</p>
            <p className="text-sm font-medium">{customerProfile.planType}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;