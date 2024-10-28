import React from 'react';

type DateInputsProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

export default function DateInputs({ 
  startDate, 
  endDate, 
  onStartDateChange, 
  onEndDateChange 
}: DateInputsProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1">
          開始日
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1">
          終了日
        </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
      </div>
    </div>
  );
}