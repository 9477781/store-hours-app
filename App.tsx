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
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [focusedStoreId, setFocusedStoreId] = useState<string | null>(null);
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');
  const [favoriteStoreIds, setFavoriteStoreIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('hub_favorite_store_ids');
    return saved ? JSON.parse(saved) : [];
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(() => {
    const saved = localStorage.getItem('hub_favorite_store_ids');
    const ids = saved ? JSON.parse(saved) : [];
    return ids.length > 0;
  });

  useEffect(() => {
    localStorage.setItem('hub_favorite_store_ids', JSON.stringify(favoriteStoreIds));
  }, [favoriteStoreIds]);

  const handleToggleFavorite = useCallback((storeId: string) => {
    setFavoriteStoreIds((prev) => {
      const newList = prev.includes(storeId)
        ? prev.filter((id) => id !== storeId)
        : [...prev, storeId];
      // お気に入りが0個になったら、お気に入り表示モードも自動的に解除する
      if (newList.length === 0) {
        setShowOnlyFavorites(false);
      }
      return newList;
    });
  }, []);

  const handleToggleShowFavorites = useCallback(() => {
    setShowOnlyFavorites(prev => !prev);
  }, []);

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
    setSelectedStores([]); // Reset store selection
    setFocusedStoreId(null);
    setShowOnlyFavorites(false); // Disable favorites mode when explicitly selecting a region
  };

  const handleSelectPrefecture = (prefecture: Prefecture | null) => {
    // If the clicked prefecture is already selected, deselect it.
    if (prefecture && selectedPrefecture?.id === prefecture.id) {
      setSelectedPrefecture(null);
    } else {
      setSelectedPrefecture(prefecture);
    }
    setSelectedCity(null); // Reset city when prefecture changes
    setSelectedStores([]); // Reset store selection
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
    setSelectedStores([]); // Reset store selection
    setFocusedStoreId(null);
  };

  const handleSearchInputChange = (term: string) => {
    setInputTerm(term);
  };

  const handleSearchSubmit = () => {
    setAppliedTerm(inputTerm);
    setSelectedStores([]);
    setFocusedStoreId(null);
  };

  const handleSelectDates = (dates: string[]) => {
    setSelectedDates(dates);
    setFocusedStoreId(null);
  };

  const handleSelectStores = (storeNames: string[]) => {
    setSelectedStores(storeNames);
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
      selectedStores.length > 0 ||
      focusedStoreId !== null ||
      showOnlyFavorites ||
      favoriteStoreIds.length > 0
    );
  }, [
    inputTerm,
    appliedTerm,
    selectedRegion,
    selectedPrefecture,
    selectedCity,
    selectedDates,
    selectedStores,
    focusedStoreId,
    showOnlyFavorites,
    favoriteStoreIds,
  ]);

  const handleResetFilters = useCallback(() => {
    setInputTerm("");
    setAppliedTerm("");
    setSelectedRegion(REGIONS[0]);
    setSelectedPrefecture(null);
    setSelectedCity(null);
    setSelectedDates([]);
    setSelectedStores([]);
    setFocusedStoreId(null);
    setShowOnlyFavorites(false);
    setFavoriteStoreIds([]); // お気に入り登録（☆の黄色）をデフォルトに戻す
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
      // お気に入りを最優先で上に表示（オプション：通常のリスト表示時のみ適用）
      const isFavA = favoriteStoreIds.includes(a.store.id);
      const isFavB = favoriteStoreIds.includes(b.store.id);
      if (isFavA !== isFavB) {
        return isFavA ? -1 : 1;
      }

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
        `${store.name} ${store.name_en || ''} ${store.prefecture} ${store.prefecture_en || ''}`
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
      if (selectedStores.length === 0 || (selectedStores.length === 1 && selectedStores[0] !== uniqueStoreName)) {
        setSelectedStores([uniqueStoreName]);
      }
    }
  }, [appliedTerm, storesFilteredByKeyword, selectedStores]);

  const filteredStores = useMemo(() => {
    let result: StoreHoursResponse[];

    if (showOnlyFavorites) {
      // Favorites mode: Select from ALL stores, ignoring region filter
      result = sortedAllStores.filter(s => favoriteStoreIds.includes(s.store.id));

      // Apply keyword filter if present
      if (appliedTerm) {
        const searchKeywords = toHalfWidth(appliedTerm)
          .toLowerCase()
          .split(/\s+/)
          .filter(Boolean);
        
        if (searchKeywords.length > 0) {
          result = result.filter((storeData) => {
            const { store } = storeData;
            const combinedStoreInfo = toHalfWidth(
              `${store.name} ${store.name_en || ''} ${store.prefecture} ${store.prefecture_en || ''}`
            ).toLowerCase();
            return searchKeywords.every((keyword) =>
              combinedStoreInfo.includes(keyword)
            );
          });
        }
      }
    } else {
      // Normal mode: Use existing logic (keyword search OR region filter)
      result = storesFilteredByKeyword;
    }

    if (selectedStores.length === 0) {
      return result;
    }
    return result.filter(
      (storeData) => selectedStores.includes(storeData.store.name)
    );
  }, [
    storesFilteredByKeyword,
    selectedStores,
    showOnlyFavorites,
    favoriteStoreIds,
    sortedAllStores,
    appliedTerm
  ]);

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
      <Header lastUpdated={lastUpdated} language={language} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center gap-4 mb-6">
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
            {language === 'ja' ? '公式サイトTOPへ戻る' : 'Back to Official Site'}
          </a>
          <button
            onClick={() => setLanguage(lang => lang === 'ja' ? 'en' : 'ja')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {language === 'ja' ? 'English' : '日本語'}
          </button>
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
          selectedStores={selectedStores}
          onSelectStores={handleSelectStores}
          allStores={sortedAllStores}
          language={language}
          showOnlyFavorites={showOnlyFavorites}
          onToggleShowFavorites={handleToggleShowFavorites}
          hasFavorites={favoriteStoreIds.length > 0}
        />
        <div className="mt-8">
          <div className="space-y-3 mb-6 bg-white/50 p-4 rounded-xl border border-gray-100">
            {language === 'ja' && (
              <p className="md:hidden text-xs text-gray-500 mb-2 italic">
                ※ 左右にスワイプして全日程を確認できます。
              </p>
            )}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">i</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p>
                  {language === 'ja' ? '※ 店名をクリックすると、公式サイトの店舗詳細ページに移動します。' : '* Click "Shop Name" to visit the official store page.'}
                </p>
                <p>
                  {language === 'ja' ? '※ 貸切営業やイベント営業、スポーツ放映等により、通常営業時間と異なる場合がございます。' : '* Hours may vary due to private events, ceremonies, or sports broadcasts.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 shadow-sm bg-yellow-50/30 p-3 rounded-lg border border-yellow-100/50">
              <div className="flex-shrink-0 w-5 h-5 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5">★</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === 'ja' 
                  ? '☆マークをクリックすると★に変わり、お気に入りに登録されます。お気に入り登録した店舗がある場合、フィルター部分に「お気に入り」ボタンが表示され、登録した店舗だけを表示できます。' 
                  : 'Click the ☆ icon to turn it into ★ and add the store to your favorites. When you have favorite stores, a "Favorites" button will appear in the filters to show only your saved stores.'}
              </p>
            </div>
          </div>
          {isLoading ? (
            <div className="text-center py-10 bg-white rounded-lg shadow">
              <p className="text-lg text-gray-500">
                {language === 'ja' ? '読み込み中...' : 'Loading...'}
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-10 bg-white rounded-lg shadow text-red-600">
              <p className="font-semibold">{language === 'ja' ? 'エラーが発生しました' : 'An error occurred'}</p>
              <p className="text-sm mt-1">{error}</p>
              <button 
                onClick={() => fetchAndSetData()}
                className="mt-4 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors"
              >
                {language === 'ja' ? '再試行' : 'Retry'}
              </button>
            </div>
          ) : (
            <HoursTable
              stores={storesToDisplay}
              selectedDates={selectedDates}
              focusedStoreId={focusedStoreId}
              onStoreClick={handleStoreClick}
              language={language}
              favoriteStoreIds={favoriteStoreIds}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        </div>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-xs font-inter tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Store Hours App • Refined for HUB
      </footer>
    </div>
  );
};

export default App;
