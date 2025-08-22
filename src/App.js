import React, { useState, useEffect } from 'react';
import { Droplets, Activity, TrendingUp, AlertTriangle, Clock, MapPin } from 'lucide-react';
import WaterBodyCard from './components/WaterBodyCard';
import DashboardHeader from './components/DashboardHeader';
import MetricsOverview from './components/MetricsOverview';
import TrendChart from './components/TrendChart';

function App() {
  const [waterBodies, setWaterBodies] = useState([]);
  const [selectedWaterBody, setSelectedWaterBody] = useState(null);
  const [loading, setLoading] = useState(true);

  // Static data generation with real Indian lakes - day-to-day updates only
  useEffect(() => {
    const generateWaterData = () => {
      const bodies = [
        {
          id: 1,
          name: "Hussain Sagar",
          location: "Hyderabad, Telangana",
          coordinates: "17.4239° N, 78.4738° E",
          latestReading: {
            ph: 7.2,
            dissolvedOxygen: 6.8,
            turbidity: 12.5,
            date: new Date().toISOString()
          },
          riskScore: 0,
          riskLevel: "Low",
          trends: {
            ph: "Stable",
            dissolvedOxygen: "Stable", 
            turbidity: "Improving"
          },
          historicalData: generateHistoricalData("Hussain Sagar")
        },
        {
          id: 2,
          name: "Fox Sagar Lake",
          location: "Hyderabad, Telangana",
          coordinates: "17.4567° N, 78.4567° E",
          latestReading: {
            ph: 6.9,
            dissolvedOxygen: 7.2,
            turbidity: 8.8,
            date: new Date().toISOString()
          },
          riskScore: 0,
          riskLevel: "Low",
          trends: {
            ph: "Improving",
            dissolvedOxygen: "Stable",
            turbidity: "Declining"
          },
          historicalData: generateHistoricalData("Fox Sagar")
        },
        {
          id: 3,
          name: "Ameenpur Lake",
          location: "Sangareddy, Telangana",
          coordinates: "17.6234° N, 78.2345° E",
          latestReading: {
            ph: 7.5,
            dissolvedOxygen: 8.1,
            turbidity: 6.2,
            date: new Date().toISOString()
          },
          riskScore: 0,
          riskLevel: "Low",
          trends: {
            ph: "Stable",
            dissolvedOxygen: "Improving",
            turbidity: "Stable"
          },
          historicalData: generateHistoricalData("Ameenpur")
        }
      ];
      
      // Calculate risk scores based on current readings
      bodies.forEach(body => {
        const { ph, dissolvedOxygen, turbidity } = body.latestReading;
        let riskScore = 0;
        
        // pH risk calculation (ideal range: 6.5-8.5)
        if (ph < 6.0 || ph > 9.0) riskScore += 40;
        else if (ph < 6.5 || ph > 8.5) riskScore += 20;
        
        // Dissolved Oxygen risk calculation (ideal: >6 mg/L)
        if (dissolvedOxygen < 4.0) riskScore += 40;
        else if (dissolvedOxygen < 6.0) riskScore += 20;
        
        // Turbidity risk calculation (ideal: <10 NTU)
        if (turbidity > 20) riskScore += 30;
        else if (turbidity > 10) riskScore += 15;
        
        body.riskScore = Math.min(100, riskScore);
        body.riskLevel = riskScore < 25 ? "Low" : riskScore < 50 ? "Moderate" : "High";
      });
      
      setWaterBodies(bodies);
      if (!selectedWaterBody) {
        setSelectedWaterBody(bodies[0]);
      } else {
        // Update selected water body with new data
        const updatedSelected = bodies.find(body => body.id === selectedWaterBody.id);
        if (updatedSelected) {
          setSelectedWaterBody(updatedSelected);
        }
      }
      setLoading(false);
    };

    // Initial data generation only - no live updates
    generateWaterData();
    
    // No automatic updates - static data for day-to-day monitoring
    // Data will only change when the page is refreshed
  }, [selectedWaterBody]);

  const generateHistoricalData = (lakeName) => {
    const data = [];
    const today = new Date();
    
    // Base values for each lake (more realistic for Indian lakes)
    const baseValues = {
      "Hussain Sagar": { ph: 7.2, dissolvedOxygen: 6.8, turbidity: 12.5 },
      "Fox Sagar": { ph: 6.9, dissolvedOxygen: 7.2, turbidity: 8.8 },
      "Ameenpur": { ph: 7.5, dissolvedOxygen: 8.1, turbidity: 6.2 }
    };
    
    const base = baseValues[lakeName] || baseValues["Hussain Sagar"];
    
    // Use a fixed seed for consistent data generation
    const seed = lakeName.charCodeAt(0) + lakeName.charCodeAt(1);
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Use deterministic variations based on seed and day
      const dayVariation = Math.sin((i + seed) * 0.5) * 0.3; // Daily cycle
      const fixedVariation = Math.sin((i + seed) * 1.2) * 0.1; // Fixed variation
      
      data.push({
        date: date.toISOString().split('T')[0],
        ph: Math.max(6.0, Math.min(9.0, base.ph + dayVariation + fixedVariation)),
        dissolvedOxygen: Math.max(4.0, Math.min(12.0, base.dissolvedOxygen + dayVariation * 0.5 + fixedVariation)),
        turbidity: Math.max(2.0, Math.min(25.0, base.turbidity + dayVariation * 2 + fixedVariation * 3))
      });
    }
    
    return data;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading AquaPredict...</h2>
          <p className="text-gray-500">Initializing water quality monitoring system</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <MetricsOverview waterBodies={waterBodies} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Water Bodies List */}
          <div className="lg:col-span-1">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                Water Bodies
              </h3>
              <div className="space-y-3">
                {waterBodies.map((body) => (
                  <WaterBodyCard
                    key={body.id}
                    waterBody={body}
                    isSelected={selectedWaterBody?.id === body.id}
                    onSelect={() => setSelectedWaterBody(body)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-2">
            {selectedWaterBody && (
              <div className="space-y-6">
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedWaterBody.name}</h2>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedWaterBody.riskLevel === 'Low' ? 'risk-low' :
                      selectedWaterBody.riskLevel === 'Moderate' ? 'risk-moderate' : 'risk-high'
                    }`}>
                      Risk: {selectedWaterBody.riskLevel}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="metric-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">pH Level</p>
                          <p className="text-2xl font-bold text-gray-800">{selectedWaterBody.latestReading.ph}</p>
                        </div>
                        <Droplets className="w-8 h-8 text-blue-500" />
                      </div>
                      <p className={`text-sm mt-2 ${
                        selectedWaterBody.trends.ph === 'Improving' ? 'trend-improving' :
                        selectedWaterBody.trends.ph === 'Declining' ? 'trend-declining' : 'trend-stable'
                      }`}>
                        {selectedWaterBody.trends.ph}
                      </p>
                    </div>
                    
                    <div className="metric-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Dissolved Oxygen</p>
                          <p className="text-2xl font-bold text-gray-800">{selectedWaterBody.latestReading.dissolvedOxygen} mg/L</p>
                        </div>
                        <Activity className="w-8 h-8 text-green-500" />
                      </div>
                      <p className={`text-sm mt-2 ${
                        selectedWaterBody.trends.dissolvedOxygen === 'Improving' ? 'trend-improving' :
                        selectedWaterBody.trends.dissolvedOxygen === 'Declining' ? 'trend-declining' : 'trend-stable'
                      }`}>
                        {selectedWaterBody.trends.dissolvedOxygen}
                      </p>
                    </div>
                    
                    <div className="metric-card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Turbidity</p>
                          <p className="text-2xl font-bold text-gray-800">{selectedWaterBody.latestReading.turbidity} NTU</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-purple-500" />
                      </div>
                      <p className={`text-sm mt-2 ${
                        selectedWaterBody.trends.turbidity === 'Improving' ? 'trend-improving' :
                        selectedWaterBody.trends.turbidity === 'Declining' ? 'trend-declining' : 'trend-stable'
                      }`}>
                        {selectedWaterBody.trends.turbidity}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Last updated: {new Date(selectedWaterBody.latestReading.date).toLocaleString()}
                  </div>
                </div>
                
                <TrendChart data={selectedWaterBody.historicalData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
