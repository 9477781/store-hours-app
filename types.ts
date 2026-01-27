
export interface TimeSlot {
  open: string;
  close: string;
}

export interface Day {
  date: string;
  weekday: string;
  weekday_en?: string;
  status: 'open' | 'holiday' | 'error';
  hours?: TimeSlot[];
  note?: string;
}

export interface StoreInfo {
  id: string;
  numericId: number;
  name: string;
  name_en?: string;
  prefecture: string;
  prefecture_en?: string;
  region: string;
  // FIX: Added 'url' property to match the data structure in constants.ts
  url: string;
}

export interface StoreHoursResponse {
  store: StoreInfo;
  range: {
    from: string;
    days: number;
    tz: string;
    rollover_at: string;
  };
  days: Day[];
  updatedAt: string;
}

export interface Region {
  id: string;
  name: string;
  name_en?: string;
}

export interface Prefecture {
  id: string;
  name: string;
  name_en?: string;
}