import React from 'react';
import { MapPin, Activity } from 'lucide-react';

function WaterBodyCard({ waterBody, isSelected, onSelect }) {
  return (
    <div
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">{waterBody.name}</h4>
          <p className="text-sm text-gray-600 mb-2 flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {waterBody.location}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                pH: {waterBody.latestReading.ph}
              </span>
            </div>
            
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              waterBody.riskLevel === 'Low' ? 'risk-low' :
              waterBody.riskLevel === 'Moderate' ? 'risk-moderate' : 'risk-high'
            }`}>
              {waterBody.riskLevel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterBodyCard;
