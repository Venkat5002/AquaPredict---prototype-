import React from 'react';
import { Droplets, Bell, Settings, User } from 'lucide-react';

function DashboardHeader() {
  const lastUpdate = new Date();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AquaPredict</h1>
              <p className="text-sm text-gray-600">Water Quality Monitoring - Telangana Lakes</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Last Update Time */}
            <div className="text-sm text-gray-600">
              Last Updated: {lastUpdate.toLocaleDateString()} {lastUpdate.toLocaleTimeString()}
            </div>
            
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </div>
            </div>
            <Settings className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
