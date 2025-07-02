import React, { useState, useEffect } from 'react';
import { Calculator, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

interface LoopSpeedCalculatorProps {
  onResult: (result: any) => void;
}

const LoopSpeedCalculator: React.FC<LoopSpeedCalculatorProps> = ({ onResult }) => {
  const [loopHeight, setLoopHeight] = useState(30);
  const [carMass, setCarMass] = useState(500);
  const [calculatedSpeed, setCalculatedSpeed] = useState(0);
  const [safetyFactor, setSafetyFactor] = useState(1.5);
  const [showCalculation, setShowCalculation] = useState(false);

  useEffect(() => {
    // Calculate minimum speed needed at bottom of loop
    // v = √(5gr) where g = 9.8 m/s², r = loop radius
    const radius = loopHeight / 2;
    const gravity = 9.8;
    const minSpeed = Math.sqrt(5 * gravity * radius);
    const safeSpeed = minSpeed * safetyFactor;
    setCalculatedSpeed(safeSpeed);
    
    onResult({
      loopHeight,
      carMass,
      minSpeed: minSpeed.toFixed(2),
      safeSpeed: safeSpeed.toFixed(2),
      safetyFactor
    });
  }, [loopHeight, carMass, safetyFactor, onResult]);

  const getSafetyLevel = () => {
    if (safetyFactor >= 1.5) return { level: 'Safe', color: 'green', icon: '✅' };
    if (safetyFactor >= 1.2) return { level: 'Caution', color: 'yellow', icon: '⚠️' };
    return { level: 'Dangerous', color: 'red', icon: '❌' };
  };

  const safety = getSafetyLevel();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Loop Speed Calculator</h3>
          <p className="text-gray-600">Calculate the minimum speed needed for a safe loop</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loop Height (feet)
            </label>
            <div className="relative">
              <input
                type="range"
                min="10"
                max="100"
                value={loopHeight}
                onChange={(e) => setLoopHeight(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10 ft</span>
                <span className="font-medium text-gray-900">{loopHeight} ft</span>
                <span>100 ft</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car Mass (kg)
            </label>
            <div className="relative">
              <input
                type="range"
                min="200"
                max="1000"
                value={carMass}
                onChange={(e) => setCarMass(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>200 kg</span>
                <span className="font-medium text-gray-900">{carMass} kg</span>
                <span>1000 kg</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Safety Factor
            </label>
            <div className="relative">
              <input
                type="range"
                min="1.0"
                max="2.0"
                step="0.1"
                value={safetyFactor}
                onChange={(e) => setSafetyFactor(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1.0x</span>
                <span className="font-medium text-gray-900">{safetyFactor}x</span>
                <span>2.0x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Loop and Results */}
        <div className="space-y-6">
          {/* Loop Visualization */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
              {/* Track leading to loop */}
              <path
                d="M 20 150 Q 50 150 80 150"
                stroke="#8b5cf6"
                strokeWidth="4"
                fill="none"
              />
              
              {/* Loop */}
              <circle
                cx="130"
                cy="100"
                r={Math.min(loopHeight * 0.8, 60)}
                stroke="#8b5cf6"
                strokeWidth="4"
                fill="none"
              />
              
              {/* Car */}
              <circle
                cx="80"
                cy="150"
                r="6"
                fill="#ef4444"
                className="animate-pulse"
              />
              
              {/* Speed arrow */}
              <path
                d="M 60 140 L 80 140 L 75 135 M 80 140 L 75 145"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <p className="text-sm text-gray-600 mt-2">
              Loop height: {loopHeight} feet
            </p>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold text-gray-900">Calculation Results</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Minimum Speed:</span>
                <span className="font-bold text-blue-600">
                  {(Math.sqrt(5 * 9.8 * (loopHeight / 2))).toFixed(1)} m/s
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Recommended Speed:</span>
                <span className="font-bold text-green-600">
                  {calculatedSpeed.toFixed(1)} m/s
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Safety Level:</span>
                <span className={`font-bold text-${safety.color}-600 flex items-center gap-1`}>
                  <span>{safety.icon}</span>
                  {safety.level}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowCalculation(!showCalculation)}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            {showCalculation ? 'Hide' : 'Show'} Physics Explanation
          </button>
        </div>
      </div>

      {/* Physics Explanation */}
      {showCalculation && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6 animate-fade-in">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Physics Behind the Calculation
          </h4>
          
          <div className="space-y-4 text-sm text-gray-700">
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Centripetal Force</h5>
              <p>At the top of the loop, the car needs enough speed so that centripetal force keeps it on the track.</p>
              <code className="block mt-2 bg-gray-100 p-2 rounded text-xs">
                F_centripetal = mv²/r
              </code>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Minimum Speed Formula</h5>
              <p>The minimum speed at the bottom of the loop is calculated using energy conservation:</p>
              <code className="block mt-2 bg-gray-100 p-2 rounded text-xs">
                v_min = √(5gr) where r = loop radius
              </code>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Safety Factor</h5>
              <p>Real roller coasters use safety factors of 1.5-2.0 times the minimum speed to ensure passenger safety and account for friction losses.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoopSpeedCalculator;