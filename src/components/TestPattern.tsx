import React from 'react';

type TestPatternProps = {
  markers: ('left' | 'right')[];
  description: string;
};

export default function TestPattern({ markers, description }: TestPatternProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-[72px] h-[24px] border border-gray-300 rounded relative bg-gradient-to-b from-gray-50 to-white shadow-inner">
        {markers.map((position) => (
          <div
            key={position}
            className="absolute w-[2.4px] h-full bg-red-400 opacity-70"
            style={{
              left: position === 'left' ? '33.33%' : '66.66%',
              transform: 'translateX(-50%)'
            }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-700 flex-1">{description}</p>
    </div>
  );
}