import React from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

function MetricsOverview({ waterBodies }) {
  const totalBodies = waterBodies.length;
  const lowRiskCount = waterBodies.filter(body => body.riskLevel === 'Low').length;
  const moderateRiskCount = waterBodies.filter(body => body.riskLevel === 'Moderate').length;
  const highRiskCount = waterBodies.filter(body => body.riskLevel === 'High').length;
  
  const averageRiskScore = waterBodies.reduce((sum, body) => sum + body.riskScore, 0) / totalBodies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Water Bodies</p>
            <p className="text-3xl font-bold text-gray-800">{totalBodies}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Average Risk Score</p>
            <p className="text-3xl font-bold text-gray-800">{averageRiskScore.toFixed(1)}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Low Risk</p>
            <p className="text-3xl font-bold text-green-600">{lowRiskCount}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">High Risk</p>
            <p className="text-3xl font-bold text-red-600">{highRiskCount}</p>
          </div>
          <div className="bg-red-100 p-3 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsOverview;
