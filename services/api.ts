// services/api.ts

import { StoreHoursResponse } from '../types';
// The mock data will be used as a fallback if the API call fails.
import { MOCK_STORE_DATA } from '../constants';

// !!!! IMPORTANT !!!!
// This is your actual GitHub Pages URL for the JSON data.
const JSON_DATA_URL = 'https://9477781.github.io/store-hours-data/store-hours.json';

export const fetchStoreHours = async (): Promise<StoreHoursResponse[]> => {
  // The development check for a placeholder URL has been removed,
  // as the URL is now correctly set.

  try {
    console.log('Fetching store hours from:', JSON_DATA_URL);
    
    const response = await fetch(JSON_DATA_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Add cache control to get fresh data
      cache: 'no-cache'
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to fetch store hours from GitHub:', response.status, errorText);
      throw new Error(`GitHub response was not ok: ${response.statusText}`);
    }

    const data: StoreHoursResponse[] = await response.json();
    
    // Ensure each store has an updatedAt field
    const dataWithTimestamp = data.map(store => ({
        ...store,
        updatedAt: store.updatedAt || new Date().toISOString()
    }));

    console.log('Successfully fetched store hours data:', dataWithTimestamp.length, 'stores');
    return dataWithTimestamp;

  } catch (error) {
    console.error('There was a problem fetching data from GitHub. Using fallback mock data.', error);
    // As a fallback, return the local mock data so the app can still be used.
    return Promise.resolve(MOCK_STORE_DATA);
  }
};