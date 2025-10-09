
import React, { useMemo } from 'react';
import { StoreHoursResponse, Day } from '../types';
import { JAPANESE_HOLIDAYS_2025 } from '../constants';

interface HoursTableProps {
  stores: StoreHoursResponse[];
  selectedDates: string[];
}

interface HeaderInfo {
  fullDate: string;
  monthDay: string;
  weekday: string;
  day: number;
  isHoliday: boolean;
}

// Helper function to format time display
const formatTime = (time?: string): string => {
  if (!time) {
    return 'ー';
  }
  
  // If time is not in HH:MM format (e.g., contains text), return as is.
  if (!/^\d{2}:\d{2}$/.test(time)) {
    return time;
  }

  const parts = time.split(':');
  const hour = parseInt(parts[0], 10);
  const minute = parts[1];
  
  // Convert hours 00:00-05:59 to 24:00-29:59
  if (hour >= 0 && hour < 6) {
    const newHour = hour + 24;
    return `${newHour}:${minute}`;
  }

  return time;
};

// Helper to check for non-standard time strings (e.g., containing text)
const isNonStandardTime = (time?: string): boolean => {
  if (!time) return false;
  // Returns true if the string contains any character that is not a digit or a colon
  return /[^0-9:]/.test(time);
};

const renderDayStatus = (day: Day | undefined) => {
    if (!day || day.status !== 'open' || !day.hours || day.hours.length === 0) {
      let content = 'ー';
      let className = 'text-gray-400';
      if (day?.status === 'holiday') {
        content = '休 業';
        className = 'font-medium text-red-500';
      } else if (day?.status === 'error') {
        content = '確認中';
        className = 'font-semibold text-orange-500';
      }
      return <div className={className}>{content}</div>;
    }
    
    return (
        <div className="flex flex-col font-mono font-medium text-base">
        {day.hours.map((slot, index) => (
            <div key={index} className="flex items-center space-x-2">
            <span className={`${isNonStandardTime(slot.open) ? 'text-red-500' : 'text-gray-900'}`}>{formatTime(slot.open)}</span>
            <span>-</span>
            <span className={`${isNonStandardTime(slot.close) ? 'text-red-500' : 'text-gray-900'}`}>{formatTime(slot.close)}</span>
            </div>
        ))}
        </div>
    );
}

const HoursTable: React.FC<HoursTableProps> = ({ stores, selectedDates }) => {
  const headers = useMemo((): HeaderInfo[] => {
    if (!stores || stores.length === 0) {
      return [];
    }
    const referenceDays = stores[0].days.slice(0, 7);

    const daysToDisplay = selectedDates.length > 0
        ? referenceDays.filter(day => selectedDates.includes(day.date))
        : referenceDays;

    return daysToDisplay.map(day => {
        // Use T00:00:00 to treat the date string as local time and avoid timezone shifts
        const currentDate = new Date(day.date + 'T00:00:00');
        const dayOfWeekIndex = currentDate.getDay();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();

        return {
            fullDate: day.date,
            monthDay: `${month}/${date}`,
            weekday: day.weekday,
            day: dayOfWeekIndex,
            isHoliday: JAPANESE_HOLIDAYS_2025.includes(day.date),
        };
    });
  }, [stores, selectedDates]);

  const getDayHeaderBgColor = (day: number, isHoliday: boolean) => {
    if (isHoliday || day === 0) return 'bg-red-500'; // Holiday or Sunday
    if (day === 6) return 'bg-blue-600'; // Saturday
    return 'bg-orange-500'; // Weekday
  };

  const renderDayCells = (day: Day | undefined) => {
    if (!day || day.status !== 'open' || !day.hours || day.hours.length === 0) {
      let content = 'ー';
      let className = 'text-gray-400';
      if (day?.status === 'holiday') {
        content = '休 業';
        className = 'text-base font-medium text-red-500';
      } else if (day?.status === 'error') {
        content = '確認中';
        className = 'font-semibold text-orange-500';
      }
      return (
        <td colSpan={2} className={`px-2 py-4 whitespace-nowrap text-center text-sm ${className} border-r border-gray-200 align-middle`}>
          {content}
        </td>
      );
    }

    return (
      <>
        <td className="px-2 py-4 whitespace-nowrap text-center text-sm font-mono align-middle">
          <div className="flex flex-col space-y-1">
            {day.hours.map((slot, index) => (
              <div 
                key={`open-${index}`}
                className={`text-base font-medium ${isNonStandardTime(slot.open) ? 'text-red-500' : 'text-gray-900'}`}
              >
                {formatTime(slot.open)}
              </div>
            ))}
          </div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap text-center text-sm font-mono border-r border-gray-200 align-middle">
          <div className="flex flex-col space-y-1">
            {day.hours.map((slot, index) => (
              <div 
                key={`close-${index}`}
                className={`text-base font-medium ${isNonStandardTime(slot.close) ? 'text-red-500' : 'text-gray-900'}`}
              >
                {formatTime(slot.close)}
              </div>
            ))}
          </div>
        </td>
      </>
    );
  };
  
  if (stores.length === 0) {
    return (
        <div className="text-center py-10 bg-white rounded-lg shadow">
            <p className="text-lg text-gray-500">該当する店舗がありません。</p>
        </div>
    );
  }

  return (
    <>
        {/* Desktop Table View - Always hidden */}
        <div className="hidden">
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
                <thead className="text-xs font-bold text-white uppercase sticky top-0 z-30">
                <tr>
                    <th scope="col" rowSpan={2} className="md:sticky md:left-0 bg-orange-500 px-4 py-3 text-center tracking-wider z-20 w-32 align-middle">
                    エリア
                    </th>
                    <th scope="col" rowSpan={2} className="md:sticky md:left-32 bg-orange-500 px-4 py-3 text-left tracking-wider z-20 w-52 align-middle border-l border-white/20">
                    店名
                    </th>
                    {headers.map((header) => (
                    <th key={header.fullDate} scope="col" colSpan={2} className={`py-1 text-center tracking-wider border-l border-white/20 ${getDayHeaderBgColor(header.day, header.isHoliday)}`}>
                        {header.monthDay}({header.weekday})
                    </th>
                    ))}
                </tr>
                <tr className="bg-blue-900">
                    {headers.map((header) => (
                    <React.Fragment key={`${header.fullDate}-sub`}>
                        <th scope="col" className="py-2 text-center tracking-wider border-l border-blue-800 w-20">OPEN</th>
                        <th scope="col" className="py-2 text-center tracking-wider border-r border-white/20 w-20">CLOSE</th>
                    </React.Fragment>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {stores.map((storeData, index) => (
                    <tr 
                    key={storeData.store.id} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange-100 transition-colors duration-150`}
                    >
                    <td className="md:sticky md:left-0 px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-700 z-10 w-32 border-r text-center bg-inherit align-middle">
                        {storeData.store.prefecture}
                    </td>
                    <td className="md:sticky md:left-32 px-4 py-4 whitespace-nowrap text-sm z-10 w-52 border-r bg-inherit align-middle">
                        <a 
                            href={storeData.store.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                            aria-label={`${storeData.store.name}の詳細を新しいタブで開く`}
                        >
                            {storeData.store.name}
                        </a>
                    </td>
                    {headers.map((header) => {
                        const dayData = storeData.days.find(d => d.date.startsWith(header.fullDate));
                        return (
                            <React.Fragment key={`${storeData.store.id}-${header.fullDate}`}>
                                {renderDayCells(dayData)}
                            </React.Fragment>
                        )
                    })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        {/* Mobile Card View - Always visible */}
        <div className="space-y-4">
            {stores.map((storeData) => (
            <div
                key={storeData.store.id}
                className="bg-white rounded-lg shadow p-4"
            >
                {/* Card Header */}
                <div className="border-b border-gray-200 pb-3 mb-3">
                    <div className="flex justify-between items-center gap-2">
                        <div className="min-w-0">
                            <h3 className="font-normal truncate">
                                <span className="text-xs text-gray-500 mr-2">{storeData.store.prefecture}</span>
                                <span className="text-base font-bold text-gray-900">{storeData.store.name}</span>
                            </h3>
                        </div>
                        <a
                            href={storeData.store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 flex-shrink-0"
                            aria-label={`${storeData.store.name}の詳細を見る`}
                        >
                            店舗詳細へ
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                {/* Card Body - Hours */}
                <dl className="space-y-2 text-sm">
                {headers.map((header) => {
                    const dayData = storeData.days.find(d => d.date.startsWith(header.fullDate));
                    let dayColor = "text-gray-800";
                    if (header.isHoliday || header.day === 0) dayColor = "text-red-600";
                    else if (header.day === 6) dayColor = "text-blue-600";

                    return (
                    <div key={header.fullDate} className="grid grid-cols-3 gap-2 items-start">
                        <dt className={`font-semibold ${dayColor}`}>
                        {header.monthDay}({header.weekday})
                        </dt>
                        <dd className="col-span-2">
                        {renderDayStatus(dayData)}
                        </dd>
                    </div>
                    );
                })}
                </dl>
            </div>
            ))}
        </div>
    </>
  );
};

export default HoursTable;
