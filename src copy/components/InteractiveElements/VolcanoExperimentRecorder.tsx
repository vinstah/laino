import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Thermometer, Droplets, Zap, Camera } from 'lucide-react';

interface VolcanoExperimentRecorderProps {
  onResult: (result: any) => void;
}

const VolcanoExperimentRecorder: React.FC<VolcanoExperimentRecorderProps> = ({ onResult }) => {
  const [experimentStage, setExperimentStage] = useState<'setup' | 'adding' | 'reaction' | 'complete'>('setup');
  const [bakingSoda, setBakingSoda] = useState(0);
  const [vinegar, setVinegar] = useState(0);
  const [foodColoring, setFoodColoring] = useState('red');
  const [observations, setObservations] = useState<string[]>([]);
  const [reactionIntensity, setReactionIntensity] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRecording && experimentStage === 'reaction') {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
        
        // Simulate reaction intensity over time
        const intensity = Math.max(0, 100 - timer * 5);
        setReactionIntensity(intensity);
        
        if (timer >= 20) {
          setExperimentStage('complete');
          setIsRecording(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRecording, experimentStage, timer]);

  const startExperiment = () => {
    if (bakingSoda >= 2 && vinegar >= 4) {
      setExperimentStage('adding');
      setIsRecording(true);
      setTimer(0);
      
      setTimeout(() => {
        setExperimentStage('reaction');
        addObservation('Bubbling and fizzing started immediately');
        addObservation('Gas bubbles are forming rapidly');
        addObservation(`${foodColoring} colored foam is rising`);
      }, 2000);
    }
  };

  const addObservation = (observation: string) => {
    setObservations(prev => [...prev, `${timer}s: ${observation}`]);
  };

  const resetExperiment = () => {
    setExperimentStage('setup');
    setBakingSoda(0);
    setVinegar(0);
    setObservations([]);
    setReactionIntensity(0);
    setTimer(0);
    setIsRecording(false);
  };

  const getReactionDescription = () => {
    if (reactionIntensity > 80) return 'Vigorous reaction - lots of bubbling!';
    if (reactionIntensity > 50) return 'Moderate reaction - steady bubbling';
    if (reactionIntensity > 20) return 'Mild reaction - small bubbles';
    return 'Reaction complete - bubbling stopped';
  };

  useEffect(() => {
    onResult({
      stage: experimentStage,
      ingredients: { bakingSoda, vinegar, foodColoring },
      observations,
      reactionIntensity,
      duration: timer
    });
  }, [experimentStage, bakingSoda, vinegar, foodColoring, observations, reactionIntensity, timer, onResult]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Volcano Experiment Recorder</h3>
          <p className="text-gray-600">Record your observations as the chemical reaction happens</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experiment Setup */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Ingredient Preparation</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Baking Soda (tablespoons)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={bakingSoda}
                    onChange={(e) => setBakingSoda(Number(e.target.value))}
                    disabled={experimentStage !== 'setup'}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{bakingSoda}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vinegar (tablespoons)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={vinegar}
                    onChange={(e) => setVinegar(Number(e.target.value))}
                    disabled={experimentStage !== 'setup'}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{vinegar}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Food Coloring
                </label>
                <div className="flex gap-2">
                  {['red', 'blue', 'green', 'yellow'].map(color => (
                    <button
                      key={color}
                      onClick={() => setFoodColoring(color)}
                      disabled={experimentStage !== 'setup'}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        foodColoring === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <button
              onClick={startExperiment}
              disabled={experimentStage !== 'setup' || bakingSoda < 2 || vinegar < 4}
              className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {experimentStage === 'setup' ? 'Start Experiment' : 'Experiment in Progress...'}
            </button>
          </div>

          {/* Volcano Visualization */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <svg width="200" height="250" viewBox="0 0 200 250" className="mx-auto">
              {/* Volcano base */}
              <path
                d="M 50 200 L 100 50 L 150 200 Z"
                fill="#8b4513"
                stroke="#654321"
                strokeWidth="2"
              />
              
              {/* Crater */}
              <ellipse
                cx="100"
                cy="50"
                rx="15"
                ry="8"
                fill="#333"
              />
              
              {/* Reaction visualization */}
              {experimentStage === 'reaction' && (
                <>
                  {/* Bubbles */}
                  {[...Array(Math.floor(reactionIntensity / 10))].map((_, i) => (
                    <circle
                      key={i}
                      cx={95 + Math.random() * 10}
                      cy={40 - i * 5}
                      r={2 + Math.random() * 3}
                      fill={foodColoring}
                      opacity="0.7"
                      className="animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                  
                  {/* Foam */}
                  <ellipse
                    cx="100"
                    cy="45"
                    rx={5 + reactionIntensity / 20}
                    ry={3 + reactionIntensity / 30}
                    fill={foodColoring}
                    opacity="0.6"
                  />
                </>
              )}
              
              {/* Timer display */}
              {isRecording && (
                <text
                  x="100"
                  y="230"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#333"
                >
                  {timer}s
                </text>
              )}
            </svg>
            
            <div className="mt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">Reaction Intensity</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-red-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${reactionIntensity}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">{getReactionDescription()}</div>
            </div>
          </div>
        </div>

        {/* Observation Log */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Observation Log
              </h4>
              <div className="flex items-center gap-2">
                {isRecording && (
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
                <span className="text-sm text-gray-600">
                  {isRecording ? 'Recording...' : 'Ready'}
                </span>
              </div>
            </div>
            
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {observations.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <Camera className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Start the experiment to record observations</p>
                </div>
              ) : (
                observations.map((observation, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 border-l-4 border-blue-500 animate-slide-in-right"
                  >
                    <p className="text-sm text-gray-800">{observation}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Scientific Analysis */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Scientific Analysis</h4>
            
            <div className="space-y-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-blue-700 mb-2">Chemical Reaction</h5>
                <p className="text-gray-700">
                  Baking soda (sodium bicarbonate) + vinegar (acetic acid) → 
                  carbon dioxide gas + water + sodium acetate
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-green-700 mb-2">What You Observed</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• Gas bubbles forming (CO₂ production)</li>
                  <li>• Fizzing sound (rapid gas release)</li>
                  <li>• Foam rising (gas trapped in liquid)</li>
                  <li>• Temperature change (endothermic reaction)</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-purple-700 mb-2">Variables Tested</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>Baking Soda: {bakingSoda} tbsp</div>
                  <div>Vinegar: {vinegar} tbsp</div>
                  <div>Color: {foodColoring}</div>
                  <div>Duration: {timer}s</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={resetExperiment}
            className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="h-5 w-5" />
            Reset Experiment
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolcanoExperimentRecorder;