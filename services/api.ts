// services/api.ts

import { StoreHoursResponse } from '../types';
// The mock data will be used as a fallback if every live source fails.
import { MOCK_STORE_DATA } from '../constants';

const JSON_DATA_URLS = [
  'https://raw.githubusercontent.com/9477781/store-hours-data/main/store-hours.json',
  'https://cdn.jsdelivr.net/gh/9477781/store-hours-data@main/store-hours.json',
  'https://9477781.github.io/store-hours-data/store-hours.json',
];

const CACHE_KEY = 'store_hours_last_successful_data';
const FETCH_TIMEOUT_MS = 10000;

export interface FetchStoreHoursResult {
  data: StoreHoursResponse[];
  warningMessage: string | null;
}

const weekdayMap: Record<string, string> = {
  '月': 'Mon', '火': 'Tue', '水': 'Wed', '木': 'Thu',
  '金': 'Fri', '土': 'Sat', '日': 'Sun'
};

const normalizeStoreHours = (data: StoreHoursResponse[]): StoreHoursResponse[] => {
  return data.map(storeData => ({
    ...storeData,
    days: storeData.days.map(day => ({
      ...day,
      weekday_en: weekdayMap[day.weekday] || day.weekday
    })),
    updatedAt: storeData.updatedAt || new Date().toISOString()
  }));
};

const isStoreHoursResponseArray = (data: unknown): data is StoreHoursResponse[] => {
  return Array.isArray(data) && data.every((storeData) => {
    const candidate = storeData as StoreHoursResponse;
    return Boolean(candidate?.store?.id && candidate?.store?.name && Array.isArray(candidate?.days));
  });
};

const fetchJsonWithTimeout = async (url: string): Promise<StoreHoursResponse[]> => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const fetchUrl = `${url}?t=${new Date().getTime()}`;
    const response = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data: unknown = await response.json();
    if (!isStoreHoursResponseArray(data)) {
      throw new Error('Invalid store hours JSON shape');
    }

    return normalizeStoreHours(data);
  } finally {
    window.clearTimeout(timeoutId);
  }
};

const readCachedStoreHours = (): StoreHoursResponse[] | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const data: unknown = JSON.parse(cached);
    return isStoreHoursResponseArray(data) ? normalizeStoreHours(data) : null;
  } catch (error) {
    console.warn('Failed to read cached store hours data.', error);
    return null;
  }
};

const writeCachedStoreHours = (data: StoreHoursResponse[]): void => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to cache store hours data.', error);
  }
};

export const fetchStoreHours = async (): Promise<FetchStoreHoursResult> => {
  for (const url of JSON_DATA_URLS) {
    try {
      console.log('Fetching store hours from:', url);
      const data = await fetchJsonWithTimeout(url);
      writeCachedStoreHours(data);
      console.log('Successfully fetched store hours data:', data.length, 'stores');
      return {
        data,
        warningMessage: null,
      };
    } catch (error) {
      console.warn('Store hours source failed:', url, error);
    }
  }

  const cachedData = readCachedStoreHours();
  if (cachedData) {
    console.warn('Using cached store hours data because all live sources failed.');
    return {
      data: cachedData,
      warningMessage: '最新 JSON を取得できなかったため、前回取得できたデータを表示しています。',
    };
  }

  console.error('All store hours sources failed. Using fallback mock data.');
  return {
    data: normalizeStoreHours(MOCK_STORE_DATA),
    warningMessage: '最新 JSON と保存済みデータを取得できなかったため、固定データを表示しています。',
  };
};
