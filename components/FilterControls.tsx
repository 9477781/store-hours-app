
import React, { useState, useRef, useEffect } from 'react';
import { Region, Prefecture, Day } from '../types';
import { JAPANESE_HOLIDAYS_2025 } from '../constants';

interface FilterControlsProps {
  regions: Region[];
  prefecturesByRegion: Record<string, Prefecture[]>;
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
  selectedPrefecture: Prefecture | null;
  onSelectPrefecture: (prefecture: Prefecture | null) => void;
  cities: string[];
  selectedCity: string | null;
  onSelectCity: (city: string | null) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSearchSubmit: () => void;
  availableDates: Day[];
  selectedDates: string[];
  onSelectDates: (dates: string[]) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  regions,
  prefecturesByRegion,
  selectedRegion,
  onSelectRegion,
  selectedPrefecture,
  onSelectPrefecture,
  cities,
  selectedCity,
  onSelectCity,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  availableDates,
  selectedDates,
  onSelectDates,
}) => {
  const currentPrefectures = prefecturesByRegion[selectedRegion.id] || [];
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getDayHeaderColor = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = date.getDay();
    const isHoliday = JAPANESE_HOLIDAYS_2025.includes(dateStr);
    if (isHoliday || dayOfWeek === 0) return 'text-red-600'; // Holiday or Sunday
    if (dayOfWeek === 6) return 'text-blue-600'; // Saturday
    return 'text-gray-800'; // Weekday
  };

  const handleDateCheckboxChange = (date: string) => {
    const newSelectedDates = selectedDates.includes(date)
      ? selectedDates.filter((d) => d !== date)
      : [...selectedDates, date];
    onSelectDates(newSelectedDates);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDateDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Keyword Search */}
        <form
          className="flex flex-grow"
          onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit();
          }}
        >
          <label htmlFor="keyword-search" className="sr-only">キーワード検索</label>
          <input
            id="keyword-search"
            type="search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="HUB 新宿"
            className="flex-grow w-full border border-gray-300 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
            aria-label="キーワードから探す"
          />
          <button
            type="submit"
            className="bg-slate-800 text-white px-8 py-3 rounded-r-md font-semibold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors text-base"
            aria-label="検索"
          >
            検索
          </button>
        </form>
        {/* Date Filter Dropdown */}
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                className="flex items-center justify-between w-full md:w-64 px-4 py-3 text-base text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <span className="truncate">
                    {selectedDates.length > 0 ? `${selectedDates.length}件の日付を選択中` : '日付で絞り込み'}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isDateDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-40 max-h-80 overflow-y-auto">
                    <ul className="py-1">
                        {availableDates.map(day => {
                            const date = new Date(day.date + 'T00:00:00');
                            const month = date.getMonth() + 1;
                            const dateNum = date.getDate();
                            const displayDate = `${month}/${dateNum}(${day.weekday})`;
                            const isSelected = selectedDates.includes(day.date);

                            return (
                                <li key={day.date}>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleDateCheckboxChange(day.date)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className={`ml-3 font-semibold ${getDayHeaderColor(day.date)}`}>
                                            {displayDate}
                                        </span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                    {selectedDates.length > 0 && (
                      <div className="p-2 border-t border-gray-200">
                        <button 
                          onClick={() => onSelectDates([])}
                          className="w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                          選択をクリア
                        </button>
                      </div>
                    )}
                </div>
            )}
        </div>
      </div>

      <div>
        {/* Region Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 -mb-px">
          {regions.map((region) => (
            <div key={region.id} className="relative">
              <button
                onClick={() => onSelectRegion(region)}
                className={`whitespace-nowrap py-4 px-6 text-base font-medium border-b-2 transition-colors duration-200
                  ${
                    selectedRegion.id === region.id
                      ? 'border-red-700 text-red-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {region.name}
              </button>
              {selectedRegion.id === region.id && (
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-700"></div>
              )}
            </div>
          ))}
        </div>

        {/* Prefecture Buttons */}
        {currentPrefectures.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
              <button
                  onClick={() => onSelectPrefecture(null)}
                  className={`px-5 py-3 rounded-lg text-base font-semibold flex items-center gap-2 transition-colors duration-200 ${
                    !selectedPrefecture
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                  すべて
              </button>
            {currentPrefectures.map((prefecture) => (
              <button
                key={prefecture.id}
                onClick={() => onSelectPrefecture(prefecture)}
                className={`px-5 py-3 rounded-lg text-base font-semibold flex items-center gap-2 transition-colors duration-200 ${
                  selectedPrefecture?.id === prefecture.id
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {prefecture.name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* City/Ward Buttons */}
        {selectedPrefecture && cities.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{selectedPrefecture.name} ―</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                  <button
                      onClick={() => onSelectCity(null)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          !selectedCity
                              ? 'bg-slate-800 text-white shadow'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                      すべて
                  </button>
                  {cities.map((city) => (
                      <button
                          key={city}
                          onClick={() => onSelectCity(city)}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                              selectedCity === city
                                  ? 'bg-slate-800 text-white shadow'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                      >
                          {city}
                      </button>
                  ))}
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterControls;
