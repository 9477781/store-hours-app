
import React, { useState, useRef, useEffect } from 'react';
import { Region, Prefecture, Day, StoreHoursResponse } from '../types';
import { JAPANESE_HOLIDAYS_2025, CITY_TRANSLATIONS } from '../constants';

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
  isFiltered: boolean;
  onResetFilters: () => void;
  availableDates: Day[];
  selectedDates: string[];
  onSelectDates: (dates: string[]) => void;
  storeNames: string[];
  selectedStore: string | null;
  onSelectStore: (storeName: string | null) => void;
  allStores: StoreHoursResponse[];
  language: 'ja' | 'en';
  showOnlyFavorites: boolean;
  onToggleShowFavorites: () => void;
  hasFavorites: boolean;
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
  isFiltered,
  onResetFilters,
  availableDates,
  selectedDates,
  onSelectDates,
  storeNames,
  selectedStore,
  onSelectStore,
  allStores,
  language,
  showOnlyFavorites,
  onToggleShowFavorites,
  hasFavorites,
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
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Keyword Search */}
        <div className="flex flex-grow items-center">
            <form
            className="flex flex-grow"
            onSubmit={(e) => {
                e.preventDefault();
                onSearchSubmit();
            }}
            >
            <label htmlFor="keyword-search" className="sr-only">
              {language === 'ja' ? 'キーワード検索' : 'Keyword Search'}
            </label>
            <input
                id="keyword-search"
                type="search"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={language === 'ja' ? "HUB 新宿" : "HUB Shinjuku"}
                className="flex-grow w-full border border-gray-300 rounded-l-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                aria-label={language === 'ja' ? "キーワードから探す" : "Search by keyword"}
            />
            <button
                type="submit"
                className="bg-slate-800 text-white px-8 py-3 rounded-r-md font-semibold hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors text-base"
                aria-label={language === 'ja' ? "検索" : "Search"}
            >
                {language === 'ja' ? '検索' : 'Search'}
            </button>
            </form>
            {(isFiltered || selectedStore !== null) && (
                <button
                    type="button"
                    onClick={onResetFilters}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors text-base ml-2 whitespace-nowrap"
                    aria-label={language === 'ja' ? "検索条件をリセット" : "Reset filters"}
                >
                    {language === 'ja' ? 'リセット' : 'Reset'}
                </button>
            )}
        </div>
        {/* Store Name Dropdown */}
        <div className="relative flex-shrink-0">
            <label htmlFor="store-select" className="sr-only">
              {language === 'ja' ? '店名で絞り込み' : 'Filter by store'}
            </label>
            <select
                id="store-select"
                value={selectedStore || ''}
                onChange={(e) => onSelectStore(e.target.value === '' ? null : e.target.value)}
                className="appearance-none w-full md:w-52 px-4 py-3 text-base text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={language === 'ja' ? "店名で絞り込み" : "Filter by store"}
            >
                <option value="">{language === 'ja' ? '店名で絞り込み' : 'Filter by store'}</option>
                {storeNames.map((name) => {
                    const storeData = allStores.find(s => s.store.name === name);
                    const displayName = language === 'ja' ? name : (storeData?.store.name_en || name);
                    return (
                        <option key={name} value={name}>
                            {displayName}
                        </option>
                    );
                })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        {/* Date Filter Dropdown */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md text-left bg-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors flex justify-between items-center"
            >
              <span className="text-gray-700">
                {selectedDates.length > 0
                  ? `${selectedDates.length}${language === 'ja' ? '日選択中' : ' dates selected'}`
                  : (language === 'ja' ? '日付で絞り込み' : 'Filter by date')}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isDateDropdownOpen ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDateDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-40 max-h-80 overflow-y-auto">
                    <ul className="py-1">
                        {availableDates.map(day => {
                            const date = new Date(day.date + 'T00:00:00');
                            const month = date.getMonth() + 1;
                            const dateNum = date.getDate();
                            // Use English weekday if available and language is English
                            const weekday = language === 'en' && day.weekday_en ? day.weekday_en : day.weekday;
                            const displayDate = `${month}/${dateNum}(${weekday})`;
                            const isSelected = selectedDates.includes(day.date);

                            return (
                                <li key={day.date}>
                                    <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleDateCheckboxChange(day.date)}
                                            className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className={getDayHeaderColor(day.date)}>
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
                          {language === 'ja' ? '選択をクリア' : 'Clear selection'}
                        </button>
                      </div>
                    )}
                </div>
            )}
        </div>
      </div>

      <div>
        {/* Favorite & Region Tabs */}
      <div className="flex flex-wrap gap-2 items-center">
        {hasFavorites && (
          <button
            onClick={onToggleShowFavorites}
            className={`flex items-center gap-1 px-4 py-2 rounded-md font-semibold transition-colors border-2 ${
              showOnlyFavorites
                ? 'bg-yellow-100 border-yellow-500 text-yellow-800'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${showOnlyFavorites ? 'fill-yellow-500' : 'fill-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {language === 'ja' ? 'お気に入り' : 'Favorites'}
          </button>
        )}
        <div className="w-px h-8 bg-gray-200 mx-1 hidden sm:block"></div>
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onSelectRegion(region)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              !showOnlyFavorites && selectedRegion.id === region.id
                ? 'bg-slate-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={!showOnlyFavorites && selectedRegion.id === region.id}
          >
            {language === 'ja' ? region.name : (region.name_en || region.name)}
          </button>
        ))}
      </div>

        {/* Prefecture Buttons */}
        {!showOnlyFavorites && currentPrefectures.length > 0 && (
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => onSelectPrefecture(null)}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            !selectedPrefecture
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-pressed={!selectedPrefecture}
        >
          {language === 'ja' ? 'すべて' : 'All'}
        </button>
        {currentPrefectures.map((prefecture) => (
          <button
            key={prefecture.id}
            onClick={() => onSelectPrefecture(prefecture)}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              selectedPrefecture?.id === prefecture.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-pressed={selectedPrefecture?.id === prefecture.id}
          >
            {language === 'ja' ? prefecture.name : (prefecture.name_en || prefecture.name)}
          </button>
        ))}
      </div>
        )}

        {/* City/Ward Buttons */}
        {!showOnlyFavorites && selectedPrefecture && cities.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {language === 'ja' ? selectedPrefecture.name : (selectedPrefecture.name_en || selectedPrefecture.name)} ―
                  </h3>
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
                      {language === 'ja' ? 'すべて' : 'All'}
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
                          {language === 'ja' ? city : (CITY_TRANSLATIONS[city] || city)}
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
