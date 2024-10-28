import React, { useState } from 'react';
import DateInputs from './DateInputs';
import TestPattern from './TestPattern';

type MarkerState = 'none' | 'right' | 'both';

export default function TestWindow() {
  const [markerState, setMarkerState] = useState<MarkerState>('none');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleJudge = () => {
    const result = Math.random() < 0.5 ? 'right' : 'both';
    setMarkerState(result);
  };

  const handleReset = () => {
    setMarkerState('none');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 space-y-8">
      {/* Main Test Window Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Test Window Visualization
        </h1>

        {/* Test Window */}
        <div className="w-[120px] h-[40px] bg-gradient-to-b from-gray-50 to-white rounded-md border border-gray-300 relative shadow-inner mx-auto">
          {/* Control Marker (Right) */}
          {(markerState === 'right' || markerState === 'both') && (
            <div 
              className="absolute w-[4px] bg-red-400 opacity-70 h-full"
              style={{ left: '66.66%', transform: 'translateX(-50%)' }}
            />
          )}
          {/* Result Marker (Left) */}
          {markerState === 'both' && (
            <div 
              className="absolute w-[4px] bg-red-400 opacity-70 h-full"
              style={{ left: '33.33%', transform: 'translateX(-50%)' }}
            />
          )}
        </div>
      </div>

      {/* Test Results Explanation */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">テスト結果の説明</h2>
        <div className="space-y-4">
          <TestPattern
            markers={['right']}
            description="右マーカーのみ: コントロールウィンドウのみ検出"
          />
          <TestPattern
            markers={['left', 'right']}
            description="両マーカー: 結果ウィンドウとコントロールウィンドウの両方を検出"
          />
        </div>
      </div>

      {/* Date Inputs */}
      <div className="w-full max-w-md">
        <DateInputs
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-[200px]">
        <button
          onClick={handleJudge}
          className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          判定
        </button>
        <button
          onClick={handleReset}
          className="w-full px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          リセット
        </button>
      </div>
    </div>
  );
}