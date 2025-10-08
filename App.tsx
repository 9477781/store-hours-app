
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { StoreHoursResponse, Region, Prefecture } from './types';
import { fetchStoreHours } from './services/api';
import { REGIONS, PREFECTURES } from './constants';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import HoursTable from './components/HoursTable';

// Helper function to convert full-width alphanumeric to half-width for consistent searching
const toHalfWidth = (str: string): string => {
  if (!str) return str;
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
};

const App: React.FC = () => {
  const [allStores, setAllStores] = useState<StoreHoursResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]); // Default to 'kanto'
  const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [inputTerm, setInputTerm] = useState<string>('');
  const [appliedTerm, setAppliedTerm] = useState<string>('');

  const fetchAndSetData = useCallback(async (isBackgroundRefresh = false) => {
    if (!isBackgroundRefresh) {
        setIsLoading(true);
    }
    try {
      const data = await fetchStoreHours();
      setAllStores(data);
      setError(null);
    // Fix: Added curly braces to the catch block to correctly scope the error handling logic and fix cascading errors.
    } catch (err) {
      setError('データの取得に失敗しました。');
      console.error(err);
    } finally {
        if (!isBackgroundRefresh) {
            setIsLoading(false);
        }
    }
  }, []);

  useEffect(() => {
    fetchAndSetData(false); // Initial fetch with loading indicator
    const intervalId = setInterval(() => fetchAndSetData(true), 3600 * 1000); // Auto-refresh every 1 hour in the background
    
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [fetchAndSetData]);

  const handleSelectRegion = (region: Region) => {
    setSelectedRegion(region);
    setSelectedPrefecture(null); // Reset prefecture when region changes
    setSelectedCity(null); // Reset city as well
  };

  const handleSelectPrefecture = (prefecture: Prefecture | null) => {
    setSelectedPrefecture(prefecture);
    setSelectedCity(null); // Reset city when prefecture changes
  };

  const citiesForPrefecture = useMemo(() => {
    if (!selectedPrefecture) {
      return [];
    }
    const citiesSet = new Set<string>();
    allStores
      .filter(s => s.store.prefecture.startsWith(selectedPrefecture.name))
      .forEach(storeData => {
        const city = storeData.store.prefecture.replace(selectedPrefecture.name, '').trim();
        if (city) {
          citiesSet.add(city);
        }
      });
  
    const cities = Array.from(citiesSet);
  
    // Sort by wards ('区') first, then other municipalities. Both are sorted in Japanese alphabetical order.
    const wards = cities.filter(c => c.endsWith('区')).sort((a, b) => a.localeCompare(b, 'ja'));
    const municipalities = cities.filter(c => !c.endsWith('区')).sort((a, b) => a.localeCompare(b, 'ja'));
  
    return [...wards, ...municipalities];
  }, [allStores, selectedPrefecture]);

  const handleSelectCity = (city: string | null) => {
    setSelectedCity(city);
  };

  const handleSearchInputChange = (term: string) => {
    setInputTerm(term);
  };

  const handleSearchSubmit = () => {
    setAppliedTerm(inputTerm);
  };

  const filteredStores = useMemo(() => {
    const searchKeywords = toHalfWidth(appliedTerm)
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const filtered = allStores.filter(storeData => {
      const { store } = storeData;
      
      const regionMatch = store.region === selectedRegion.id;
      
      const prefectureMatch = !selectedPrefecture || store.prefecture.startsWith(selectedPrefecture.name);
      
      const cityMatch = !selectedCity || store.prefecture === `${selectedPrefecture?.name} ${selectedCity}`;
      
      const combinedStoreInfo = toHalfWidth(`${store.name} ${store.prefecture}`).toLowerCase();
      const searchTermMatch = searchKeywords.every(keyword => combinedStoreInfo.includes(keyword));

      return regionMatch && prefectureMatch && cityMatch && searchTermMatch;
    });
    
    // Custom sorting logic based on user's request
    const prefecturesForRegion = PREFECTURES[selectedRegion.id] || [];

    const getPrefectureName = (prefectureString: string): string => {
        return prefectureString.split(' ')[0];
    };

    return filtered.sort((a, b) => {
        // 1. Sort by prefecture order as defined in constants.ts
        const prefectureA = getPrefectureName(a.store.prefecture);
        const prefectureB = getPrefectureName(b.store.prefecture);
        
        const indexA = prefecturesForRegion.findIndex(p => p.name === prefectureA);
        const indexB = prefecturesForRegion.findIndex(p => p.name === prefectureB);

        if (indexA !== indexB) {
            // Handle cases where a prefecture might not be in the list (though it shouldn't happen with current data)
            return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
        }

        // 2. If prefectures are the same, sort by city/ward (using the full prefecture string)
        const fullPrefectureComparison = a.store.prefecture.localeCompare(b.store.prefecture, 'ja');
        if (fullPrefectureComparison !== 0) {
            return fullPrefectureComparison;
        }

        // 3. If city/ward is also the same, sort by store name
        return a.store.name.localeCompare(b.store.name, 'ja');
    });

  }, [allStores, selectedRegion, selectedPrefecture, selectedCity, appliedTerm]);

  const lastUpdated = useMemo(() => {
    if (allStores.length > 0) {
      // Find the most recent update time among all stores
      return allStores.reduce((latest, store) => {
          return store.updatedAt > latest ? store.updatedAt : latest;
      }, allStores[0].updatedAt);
    }
    return null;
  }, [allStores]);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header lastUpdated={lastUpdated} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterControls
          regions={REGIONS}
          prefecturesByRegion={PREFECTURES}
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
          selectedPrefecture={selectedPrefecture}
          onSelectPrefecture={handleSelectPrefecture}
          cities={citiesForPrefecture}
          selectedCity={selectedCity}
          onSelectCity={handleSelectCity}
          searchTerm={inputTerm}
          onSearchChange={handleSearchInputChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <div className="mt-8">
          <p className="text-sm text-gray-600 text-center mb-4">
            店舗名をクリックすると、公式サイトの店舗詳細ページに移動します。
          </p>
          {isLoading ? (
            <div className="text-center py-10 bg-white rounded-lg shadow">
              <p className="text-lg text-gray-500">読み込み中...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 bg-white rounded-lg shadow text-red-600">
              <p className="font-semibold">エラーが発生しました</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : (
            <HoursTable stores={filteredStores} />
          )}
        </div>
      </main>
    </div>
  );
};

// FIX: Added default export to resolve module import error in index.tsx
export default App;