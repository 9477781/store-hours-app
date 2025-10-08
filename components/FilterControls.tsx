
import React from 'react';
import { Region, Prefecture } from '../types';

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
}) => {
  const currentPrefectures = prefecturesByRegion[selectedRegion.id] || [];

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* Keyword Search */}
        <form
          className="flex w-full max-w-lg"
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