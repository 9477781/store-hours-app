import React, { useState, useEffect, useMemo, useCallback } from "react";
import { StoreHoursResponse, Region, Prefecture, Day } from "./types";
import { fetchStoreHours } from "./services/api";
import { REGIONS, PREFECTURES } from "./constants";
import Header from "./components/Header";
import FilterControls from "./components/FilterControls";
import HoursTable from "./components/HoursTable";

// Helper function to convert full-width alphanumeric to half-width for consistent searching
const toHalfWidth = (str: string): string => {
  if (!str) return str;
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
};

const App: React.FC = () => {
  const [allStores, setAllStores] = useState<StoreHoursResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]); // Default to 'kanto'
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<Prefecture | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [inputTerm, setInputTerm] = useState<string>("");
  const [appliedTerm, setAppliedTerm] = useState<string>("");
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [focusedStoreId, setFocusedStoreId] = useState<string | null>(null);

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
      setError("データの取得に失敗しました。");
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

  const handleStoreClick = useCallback((storeId: string) => {
    setFocusedStoreId((prevId) => (prevId === storeId ? null : storeId));
  }, []);

  const handleSelectRegion = (region: Region) => {
    setSelectedRegion(region);
    setSelectedPrefecture(null); // Reset prefecture when region changes
    setSelectedCity(null); // Reset city as well
    setSelectedStore(null); // Reset store selection
    setFocusedStoreId(null);
  };

  const handleSelectPrefecture = (prefecture: Prefecture | null) => {
    // If the clicked prefecture is already selected, deselect it.
    if (prefecture && selectedPrefecture?.id === prefecture.id) {
      setSelectedPrefecture(null);
    } else {
      setSelectedPrefecture(prefecture);
    }
    setSelectedCity(null); // Reset city when prefecture changes
    setSelectedStore(null); // Reset store selection
    setFocusedStoreId(null);
  };

  const citiesForPrefecture = useMemo(() => {
    if (!selectedPrefecture) {
      return [];
    }
    const citiesSet = new Set<string>();
    allStores
      .filter((s) => s.store.prefecture.startsWith(selectedPrefecture.name))
      .forEach((storeData) => {
        const city = storeData.store.prefecture
          .replace(selectedPrefecture.name, "")
          .trim();
        if (city) {
          citiesSet.add(city);
        }
      });

    const cities = Array.from(citiesSet);

    // Sort by wards ('区') first, then other municipalities. Both are sorted in Japanese alphabetical order.
    const wards = cities
      .filter((c) => c.endsWith("区"))
      .sort((a, b) => a.localeCompare(b, "ja"));
    const municipalities = cities
      .filter((c) => !c.endsWith("区"))
      .sort((a, b) => a.localeCompare(b, "ja"));

    return [...wards, ...municipalities];
  }, [allStores, selectedPrefecture]);

  const handleSelectCity = (city: string | null) => {
    // If the clicked city is already selected, deselect it.
    if (city && selectedCity === city) {
      setSelectedCity(null);
    } else {
      setSelectedCity(city);
    }
    setSelectedStore(null); // Reset store selection
    setFocusedStoreId(null);
  };

  const handleSearchInputChange = (term: string) => {
    setInputTerm(term);
  };

  const handleSearchSubmit = () => {
    setAppliedTerm(inputTerm);
    setSelectedStore(null);
    setFocusedStoreId(null);
  };

  const handleSelectDates = (dates: string[]) => {
    setSelectedDates(dates);
    setFocusedStoreId(null);
  };

  const handleSelectStore = (storeName: string | null) => {
    setSelectedStore(storeName);
    setFocusedStoreId(null);
  };

  const isFiltered = useMemo(() => {
    return (
      inputTerm !== "" ||
      appliedTerm !== "" ||
      selectedRegion.id !== REGIONS[0].id ||
      selectedPrefecture !== null ||
      selectedCity !== null ||
      selectedDates.length > 0 ||
      selectedStore !== null
    );
  }, [
    inputTerm,
    appliedTerm,
    selectedRegion,
    selectedPrefecture,
    selectedCity,
    selectedDates,
    selectedStore,
  ]);

  const handleResetFilters = useCallback(() => {
    setInputTerm("");
    setAppliedTerm("");
    setSelectedRegion(REGIONS[0]);
    setSelectedPrefecture(null);
    setSelectedCity(null);
    setSelectedDates([]);
    setSelectedStore(null);
    setFocusedStoreId(null);
  }, []);

  const availableDates = useMemo(() => {
    if (!allStores || allStores.length === 0) {
      return [];
    }
    return allStores[0].days.slice(0, 7);
  }, [allStores]);

  // 1. まず全店舗を地域・都道府県順にソートしたリストを作成
  const sortedAllStores = useMemo(() => {
    return [...allStores].sort((a, b) => {
      // 地域順を定義に基づき取得
      const regionIndexA = REGIONS.findIndex((r) => r.id === a.store.region);
      const regionIndexB = REGIONS.findIndex((r) => r.id === b.store.region);

      if (regionIndexA !== regionIndexB) {
        return regionIndexA - regionIndexB;
      }

      // 同じ地域内の都道府県順（PREFECTURESの定義順）
      const prefecturesInRegion = PREFECTURES[a.store.region] || [];
      const getPrefName = (p: string) => p.split(" ")[0];
      const prefA = getPrefName(a.store.prefecture);
      const prefB = getPrefName(b.store.prefecture);

      const prefIndexA = prefecturesInRegion.findIndex((p) => p.name === prefA);
      const prefIndexB = prefecturesInRegion.findIndex((p) => p.name === prefB);

      if (prefIndexA !== prefIndexB) {
        return (
          (prefIndexA === -1 ? Infinity : prefIndexA) -
          (prefIndexB === -1 ? Infinity : prefIndexB)
        );
      }

      // 同じ市区町村内は五十音順
      const cityComp = a.store.prefecture.localeCompare(
        b.store.prefecture,
        "ja"
      );
      if (cityComp !== 0) return cityComp;

      return a.store.name.localeCompare(b.store.name, "ja");
    });
  }, [allStores]);

  const storesFilteredByLocation = useMemo(() => {
    return sortedAllStores.filter((storeData) => {
      const { store } = storeData;
      const regionMatch = store.region === selectedRegion.id;
      const prefectureMatch =
        !selectedPrefecture ||
        store.prefecture.startsWith(selectedPrefecture.name);
      const cityMatch =
        !selectedCity ||
        store.prefecture === `${selectedPrefecture?.name} ${selectedCity}`;
      return regionMatch && prefectureMatch && cityMatch;
    });
  }, [sortedAllStores, selectedRegion, selectedPrefecture, selectedCity]);

  const storesFilteredByKeyword = useMemo(() => {
    const searchKeywords = toHalfWidth(appliedTerm)
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    if (searchKeywords.length === 0) {
      return storesFilteredByLocation;
    }

    // キーワードがある場合は地域フィルタを無視し、ソート済みの全店舗から検索
    return sortedAllStores.filter((storeData) => {
      const { store } = storeData;
      const combinedStoreInfo = toHalfWidth(
        `${store.name} ${store.prefecture}`
      ).toLowerCase();
      return searchKeywords.every((keyword) =>
        combinedStoreInfo.includes(keyword)
      );
    });
  }, [sortedAllStores, storesFilteredByLocation, appliedTerm]);

  const storeNamesForDropdown = useMemo(() => {
    return storesFilteredByKeyword.map((s) => s.store.name);
  }, [storesFilteredByKeyword]);

  useEffect(() => {
    // If a keyword search results in a single store, automatically select it in the dropdown.
    if (appliedTerm && storesFilteredByKeyword.length === 1) {
      const uniqueStoreName = storesFilteredByKeyword[0].store.name;
      if (selectedStore !== uniqueStoreName) {
        setSelectedStore(uniqueStoreName);
      }
    }
  }, [appliedTerm, storesFilteredByKeyword, selectedStore]);

  const filteredStores = useMemo(() => {
    if (!selectedStore) {
      return storesFilteredByKeyword;
    }
    return storesFilteredByKeyword.filter(
      (storeData) => storeData.store.name === selectedStore
    );
  }, [storesFilteredByKeyword, selectedStore]);

  const storesToDisplay = useMemo(() => {
    if (focusedStoreId) {
      const focusedStore = allStores.find((s) => s.store.id === focusedStoreId);
      return focusedStore ? [focusedStore] : [];
    }
    return filteredStores;
  }, [focusedStoreId, allStores, filteredStores]);

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
        <div className="text-center mb-6">
          <a
            href="https://www.pub-hub.com/"
            target="_top"
            className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            公式サイトTOPへ戻る
          </a>
        </div>
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
          isFiltered={isFiltered}
          onResetFilters={handleResetFilters}
          availableDates={availableDates}
          selectedDates={selectedDates}
          onSelectDates={handleSelectDates}
          storeNames={storeNamesForDropdown}
          selectedStore={selectedStore}
          onSelectStore={handleSelectStore}
        />
        <div className="mt-8">
          <p className="md:hidden text-sm text-gray-600 text-left mb-4">
            「店名」をクリックすると、公式サイトの店舗詳細ページに移動します。
            <br />
            貸切営業やイベント営業、スポーツ放映等により通常営業時間と異なる場合がございます。
          </p>
          <p className="hidden md:block text-sm text-gray-600 text-center mb-4">
            「店名」をクリックすると、公式サイトの店舗詳細ページに移動します。
            <br />
            貸切営業やイベント営業、スポーツ放映等により通常営業時間と異なる場合がございます。
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
            <HoursTable
              stores={storesToDisplay}
              selectedDates={selectedDates}
              focusedStoreId={focusedStoreId}
              onStoreClick={handleStoreClick}
            />
          )}
        </div>
      </main>
    </div>
  );
};

// FIX: Added default export to resolve module import error in index.tsx
export default App;
