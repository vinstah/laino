import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw, Lightbulb, Volume2 } from 'lucide-react';
import { useDragAndDrop, useSVGCanvas } from '../hooks/useDragAndDrop';

interface QuestionOption {
  id: string;
  text: string;
  isCorrect?: boolean;
  image?: string;
  value?: any;
}

interface InteractiveQuestionProps {
  question: {
    id: string;
    text: string;
    type: 'multiple-choice' | 'drag-drop' | 'drawing' | 'sorting' | 'matching';
    options?: QuestionOption[];
    correctAnswer?: any;
    explanation?: string;
    hint?: string;
  };
  onAnswer: (answer: any) => void;
  showFeedback?: boolean;
}

const InteractiveQuestion: React.FC<InteractiveQuestionProps> = ({
  question,
  onAnswer,
  showFeedback = false
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const { 
    draggedItem, 
    dropZones, 
    isDragging, 
    startDrag, 
    updateDragPosition, 
    endDrag, 
    registerDropZone 
  } = useDragAndDrop();
  
  const {
    elements,
    currentPath,
    isDrawing,
    svgRef,
    startDrawing,
    draw,
    stopDrawing,
    clearCanvas
  } = useSVGCanvas();

  useEffect(() => {
    if (question.type === 'drag-drop') {
      // Register drop zones for drag and drop questions
      registerDropZone({
        id: 'answer-zone',
        accepts: ['option'],
        position: { x: 50, y: 200, width: 300, height: 150 },
        items: []
      });
    }
  }, [question.type, registerDropZone]);

  const handleMultipleChoice = (optionId: string) => {
    if (isAnswered) return;
    
    setSelectedAnswers([optionId]);
    setIsAnswered(true);
    onAnswer(optionId);
    
    if (showFeedback) {
      setTimeout(() => setShowExplanation(true), 1000);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setIsAnswered(false);
    setShowExplanation(false);
    setShowHint(false);
    clearCanvas();
  };

  const renderMultipleChoice = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.text}</h3>
      
      <div className="grid gap-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswers.includes(option.id);
          const isCorrect = option.isCorrect;
          const showResult = isAnswered && showFeedback;
          
          return (
            <button
              key={option.id}
              onClick={() => handleMultipleChoice(option.id)}
              disabled={isAnswered}
              className={`
                relative p-4 rounded-xl border-2 text-left transition-all duration-300 transform
                ${isSelected && !showResult ? 'border-purple-500 bg-purple-50 scale-105 shadow-lg' : 'border-gray-200 hover:border-purple-300'}
                ${showResult && isSelected && isCorrect ? 'border-green-500 bg-green-50' : ''}
                ${showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                ${showResult && !isSelected && isCorrect ? 'border-green-300 bg-green-25' : ''}
                ${isAnswered ? 'cursor-default' : 'cursor-pointer hover:shadow-md hover:-translate-y-1'}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300
                  ${isSelected && !showResult ? 'border-purple-500 bg-purple-500 text-white' : 'border-gray-300 text-gray-500'}
                  ${showResult && isSelected && isCorrect ? 'border-green-500 bg-green-500 text-white' : ''}
                  ${showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-500 text-white' : ''}
                  ${showResult && !isSelected && isCorrect ? 'border-green-500 bg-green-500 text-white' : ''}
                `}>
                  {showResult ? (
                    (isSelected && isCorrect) || (!isSelected && isCorrect) ? 
                      <Check className="h-4 w-4" /> : 
                      isSelected && !isCorrect ? <X className="h-4 w-4" /> : 
                      String.fromCharCode(65 + index)
                  ) : (
                    isSelected ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + index)
                  )}
                </div>
                
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{option.text}</p>
                </div>
                
                {isSelected && !showResult && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              
              {/* Animated selection indicator */}
              {isSelected && (
                <div className="absolute inset-0 rounded-xl border-2 border-purple-500 animate-pulse opacity-50"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderDragAndDrop = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{question.text}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Draggable Items */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Drag these items:</h4>
          <div className="grid grid-cols-2 gap-3">
            {question.options?.map((option) => (
              <div
                key={option.id}
                draggable
                onMouseDown={(e) => startDrag({
                  id: option.id,
                  type: 'option',
                  data: option,
                  position: { x: e.clientX, y: e.clientY }
                }, e)}
                onMouseMove={updateDragPosition}
                onMouseUp={endDrag}
                className={`
                  p-4 bg-white border-2 border-gray-200 rounded-xl cursor-grab active:cursor-grabbing
                  hover:border-purple-300 hover:shadow-md transition-all duration-200
                  transform hover:-translate-y-1 hover:scale-105
                  ${isDragging ? 'opacity-50' : ''}
                `}
              >
                <div className="text-center">
                  {option.image && (
                    <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">{option.image}</span>
                    </div>
                  )}
                  <p className="text-sm font-medium text-gray-900">{option.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Drop Zone */}
        <div className="space-y-4" onDrop={(e) => {
          e.preventDefault(); console.log('Dropped:', draggedItem);}}>
          <h4 className="font-semibold text-gray-700">Drop here:</h4>
          <div className={`
            min-h-48 border-3 border-dashed rounded-xl p-6 transition-all duration-300
            ${isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-gray-50'}
          `}>
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <p>Drop items here to answer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDrawing = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{question.text}</h3>
      
      <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-700">Draw your answer:</h4>
          <button
            onClick={clearCanvas}
            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" />
            Clear
          </button>
        </div>
        
        <svg
          ref={svgRef}
          width="100%"
          height="300"
          className="border border-gray-200 rounded-lg cursor-crosshair bg-gray-50"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        >
          {/* Grid background */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Rendered elements */}
          {elements.map((element) => (
            <path
              key={element.id}
              d={element.d}
              stroke={element.stroke}
              strokeWidth={element.strokeWidth}
              fill={element.fill}
              className="animate-pulse"
            />
          ))}
          
          {/* Current drawing path */}
          {currentPath && (
            <path
              d={currentPath}
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              className="opacity-80"
            />
          )}
        </svg>
      </div>
    </div>
  );

  const renderMatching = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{question.text}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-700">Column A</h4>
          {question.options?.slice(0, Math.ceil(question.options.length / 2)).map((option) => (
            <div
              key={option.id}
              className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            >
              {option.text}
            </div>
          ))}
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-700">Column B</h4>
          {question.options?.slice(Math.ceil(question.options.length / 2)).map((option) => (
            <div
              key={option.id}
              className="p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      {/* Question Content */}
      <div className="mb-8">
        {question.type === 'multiple-choice' && renderMultipleChoice()}
        {question.type === 'drag-drop' && renderDragAndDrop()}
        {question.type === 'drawing' && renderDrawing()}
        {question.type === 'matching' && renderMatching()}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          {question.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
          
          <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
            <Volume2 className="h-4 w-4" />
            Read Aloud
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          
          <button
            onClick={() => onAnswer(selectedAnswers)}
            disabled={!isAnswered && selectedAnswers.length === 0}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Submit Answer
          </button>
        </div>
      </div>

      {/* Hint Display */}
      {showHint && question.hint && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-1">Hint</h4>
              <p className="text-yellow-700">{question.hint}</p>
            </div>
          </div>
        </div>
      )}

      {/* Explanation Display */}
      {showExplanation && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
              <Check className="h-3 w-3 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">Explanation</h4>
              <p className="text-blue-700">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Dragged Item Overlay */}
      {draggedItem && (
        <div
          className="fixed pointer-events-none z-50 p-2 bg-white border-2 border-purple-500 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: draggedItem.position.x,
            top: draggedItem.position.y
          }}
        >
          {draggedItem.data.text}
        </div>
      )}
    </div>
  );
};

export default InteractiveQuestion;