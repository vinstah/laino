import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap, TrendingUp } from 'lucide-react';

interface EnergyTrackingSimulatorProps {
  onResult: (result: any) => void;
}

const EnergyTrackingSimulator: React.FC<EnergyTrackingSimulatorProps> = ({ onResult }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [trackHeight, setTrackHeight] = useState([100, 60, 80, 40, 70, 20]);
  const [carMass] = useState(500); // kg
  const [currentEnergy, setCurrentEnergy] = useState({ potential: 0, kinetic: 0, total: 0 });
  const [energyHistory, setEnergyHistory] = useState<any[]>([]);

  const gravity = 9.8; // m/s²
  const maxHeight = Math.max(...trackHeight);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && position < trackHeight.length - 1) {
      interval = setInterval(() => {
        setPosition(prev => {
          const newPos = prev + 0.1;
          if (newPos >= trackHeight.length - 1) {
            setIsPlaying(false);
            return trackHeight.length - 1;
          }
          return newPos;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, position, trackHeight.length]);

  useEffect(() => {
    // Calculate energy at current position
    const currentIndex = Math.floor(position);
    const nextIndex = Math.min(currentIndex + 1, trackHeight.length - 1);
    const fraction = position - currentIndex;
    
    const currentHeight = trackHeight[currentIndex] + 
      (trackHeight[nextIndex] - trackHeight[currentIndex]) * fraction;
    
    const potentialEnergy = carMass * gravity * currentHeight;
    const totalEnergy = carMass * gravity * maxHeight; // Conservation of energy
    const kineticEnergy = Math.max(0, totalEnergy - potentialEnergy);
    
    const newEnergy = {
      potential: potentialEnergy,
      kinetic: kineticEnergy,
      total: totalEnergy,
      height: currentHeight,
      position: position
    };
    
    setCurrentEnergy(newEnergy);
    
    if (isPlaying) {
      setEnergyHistory(prev => [...prev.slice(-50), newEnergy]);
    }
    
    onResult(newEnergy);
  }, [position, trackHeight, carMass, maxHeight, isPlaying, onResult]);

  const handleReset = () => {
    setIsPlaying(false);
    setPosition(0);
    setEnergyHistory([]);
  };

  const getCarSpeed = () => {
    // v = √(2 * KE / m)
    return Math.sqrt(2 * currentEnergy.kinetic / carMass);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Energy Tracking Simulator</h3>
            <p className="text-gray-600">Watch how energy transforms as the car moves</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-3 rounded-xl text-white font-semibold transition-all ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <button
            onClick={handleReset}
            className="p-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Track Visualization */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Roller Coaster Track</h4>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <svg width="100%" height="300" viewBox="0 0 400 300" className="w-full">
              {/* Track */}
              <path
                d={`M 20 ${280 - trackHeight[0]} ${trackHeight.map((height, index) => 
                  `L ${20 + (index * 60)} ${280 - height}`
                ).join(' ')}`}
                stroke="#8b5cf6"
                strokeWidth="4"
                fill="none"
              />
              
              {/* Track supports */}
              {trackHeight.map((height, index) => (
                <line
                  key={index}
                  x1={20 + (index * 60)}
                  y1={280 - height}
                  x2={20 + (index * 60)}
                  y2={280}
                  stroke="#6b7280"
                  strokeWidth="2"
                  opacity="0.5"
                />
              ))}
              
              {/* Car */}
              <circle
                cx={20 + (position * 60)}
                cy={280 - (trackHeight[Math.floor(position)] + 
                  (trackHeight[Math.min(Math.floor(position) + 1, trackHeight.length - 1)] - 
                   trackHeight[Math.floor(position)]) * (position - Math.floor(position)))}
                r="8"
                fill="#ef4444"
                className={isPlaying ? 'animate-pulse' : ''}
              />
              
              {/* Height markers */}
              {[20, 40, 60, 80, 100].map(height => (
                <g key={height}>
                  <line
                    x1="10"
                    y1={280 - height}
                    x2="15"
                    y2={280 - height}
                    stroke="#6b7280"
                    strokeWidth="1"
                  />
                  <text
                    x="5"
                    y={285 - height}
                    fontSize="10"
                    fill="#6b7280"
                    textAnchor="end"
                  >
                    {height}m
                  </text>
                </g>
              ))}
            </svg>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600">
                {currentEnergy.height.toFixed(1)}m
              </div>
              <div className="text-sm text-gray-600">Height</div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600">
                {getCarSpeed().toFixed(1)}m/s
              </div>
              <div className="text-sm text-gray-600">Speed</div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-600">
                {((position / (trackHeight.length - 1)) * 100).toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600">Progress</div>
            </div>
          </div>
        </div>

        {/* Energy Charts */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Energy Analysis</h4>
          
          {/* Current Energy Display */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-700">Potential Energy</span>
                  <span className="text-sm font-bold text-blue-700">
                    {(currentEnergy.potential / 1000).toFixed(1)} kJ
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(currentEnergy.potential / currentEnergy.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-green-700">Kinetic Energy</span>
                  <span className="text-sm font-bold text-green-700">
                    {(currentEnergy.kinetic / 1000).toFixed(1)} kJ
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(currentEnergy.kinetic / currentEnergy.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-purple-700">Total Energy</span>
                  <span className="text-sm font-bold text-purple-700">
                    {(currentEnergy.total / 1000).toFixed(1)} kJ
                  </span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Energy History Graph */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h5 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Energy Over Time
            </h5>
            
            {energyHistory.length > 0 ? (
              <svg width="100%" height="150" viewBox="0 0 300 150" className="w-full">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100, 125, 150].map(y => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Potential Energy Line */}
                <path
                  d={`M ${energyHistory.map((point, index) => 
                    `${index * 6} ${150 - (point.potential / currentEnergy.total) * 150}`
                  ).join(' L ')}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Kinetic Energy Line */}
                <path
                  d={`M ${energyHistory.map((point, index) => 
                    `${index * 6} ${150 - (point.kinetic / currentEnergy.total) * 150}`
                  ).join(' L ')}`}
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Play className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Press play to start tracking energy</p>
              </div>
            )}
            
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Potential Energy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Kinetic Energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Physics Insights */}
      <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Physics Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-medium text-blue-700 mb-2">Conservation of Energy</h5>
            <p className="text-gray-700">
              Total energy remains constant throughout the ride (ignoring friction).
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-medium text-green-700 mb-2">Energy Transformation</h5>
            <p className="text-gray-700">
              Potential energy converts to kinetic energy as the car goes downhill.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-medium text-purple-700 mb-2">Speed vs Height</h5>
            <p className="text-gray-700">
              The car moves fastest at the lowest points and slowest at the highest points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyTrackingSimulator;