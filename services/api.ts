// services/api.ts

import { StoreHoursResponse } from '../types';
// The mock data will be used as a fallback if the API call fails.
import { MOCK_STORE_DATA } from '../constants';

// !!!! IMPORTANT !!!!
// This is your actual GitHub Pages URL for the JSON data.
const JSON_DATA_URL = 'https://9477781.github.io/store-hours-data/store-hours.json';

export const fetchStoreHours = async (): Promise<StoreHoursResponse[]> => {
  try {
    console.log('Fetching store hours from:', JSON_DATA_URL);
    
    // Add a unique timestamp parameter to bypass browser caching
    // Fix: Using a simpler cache-busting strategy that won't conflict with GitHub Pages caching policies
    const fetchUrl = `${JSON_DATA_URL}?t=${new Date().getTime()}`;

    const response = await fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // cache: 'no-cache' // Removed to rely on query param cache busting
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch store hours from GitHub:', response.status, errorText);
      throw new Error(`GitHub response was not ok: ${response.statusText}`);
    }

    const data: StoreHoursResponse[] = await response.json();

    const weekdayMap: Record<string, string> = {
      '月': 'Mon', '火': 'Tue', '水': 'Wed', '木': 'Thu',
      '金': 'Fri', '土': 'Sat', '日': 'Sun'
    };
    
    const dataWithTimestamp = data.map(storeData => ({
        ...storeData,
        days: storeData.days.map(day => ({
          ...day,
          weekday_en: weekdayMap[day.weekday] || day.weekday
        })),
        updatedAt: storeData.updatedAt || new Date().toISOString()
    }));

    console.log('Successfully fetched store hours data:', dataWithTimestamp.length, 'stores');
    return dataWithTimestamp;

  } catch (error) {
    console.error('There was a problem fetching data from GitHub. Using fallback mock data.', error);
    
    const weekdayMap: Record<string, string> = {
      '月': 'Mon', '火': 'Tue', '水': 'Wed', '木': 'Thu',
      '金': 'Fri', '土': 'Sat', '日': 'Sun'
    };

    const mockWithEnglish = MOCK_STORE_DATA.map(storeData => ({
      ...storeData,
      days: storeData.days.map(day => ({
        ...day,
        weekday_en: weekdayMap[day.weekday] || day.weekday
      }))
    }));
    return Promise.resolve(mockWithEnglish);
  }
};