import { Region, Prefecture, StoreHoursResponse } from "./types";

export const REGIONS: Region[] = [
  { id: "kanto", name: "関東" },
  { id: "kinki", name: "近畿" },
  { id: "chubu", name: "中部" },
  { id: "tohoku", name: "東北" },
  { id: "kyushu", name: "九州" },
  { id: "hokkaido", name: "北海道" },
];

export const PREFECTURES: Record<string, Prefecture[]> = {
  hokkaido: [{ id: "hokkaido", name: "北海道" }],
  tohoku: [{ id: "miyagi", name: "宮城県" }],
  kanto: [
    { id: "tokyo", name: "東京都" },
    { id: "saitama", name: "埼玉県" },
    { id: "chiba", name: "千葉県" },
    { id: "kanagawa", name: "神奈川県" },
  ],
  chubu: [
    { id: "aichi", name: "愛知県" },
    { id: "niigata", name: "新潟県" },
    { id: "toyama", name: "富山県" },
  ],
  kinki: [
    { id: "hyogo", name: "兵庫県" },
    { id: "osaka", name: "大阪府" },
    { id: "kyoto", name: "京都府" },
  ],
  kyushu: [
    { id: "fukuoka", name: "福岡県" },
    { id: "miyazaki", name: "宮崎県" },
  ],
};

// List of Japanese holidays in 2025 (YYYY-MM-DD)
export const JAPANESE_HOLIDAYS_2025: string[] = [
  "2025-01-01", // New Year's Day
  "2025-01-13", // Coming of Age Day
  "2025-02-11", // National Foundation Day
  "2025-02-23", // Emperor's Birthday
  "2025-02-24", // Emperor's Birthday (Observed)
  "2025-03-20", // Vernal Equinox Day
  "2025-04-29", // Shōwa Day
  "2025-05-03", // Constitution Memorial Day
  "2025-05-04", // Greenery Day
  "2025-05-05", // Children's Day
  "2025-05-06", // Children's Day (Observed)
  "2025-07-21", // Marine Day
  "2025-08-11", // Mountain Day
  "2025-09-15", // Respect for the Aged Day
  "2025-09-23", // Autumnal Equinox Day
  "2025-10-13", // Sports Day
  "2025-11-03", // Culture Day
  "2025-11-23", // Labour Thanksgiving Day
  "2025-11-24", // Labour Thanksgiving Day (Observed)
];

// Replaced with static data from user to fix date discrepancy issues.
export const MOCK_STORE_DATA: StoreHoursResponse[] = [
  {
    store: {
      id: "store_5501",
      numericId: 5501,
      url: "https://www.pub-hub.com/index.php/shop/detail/1",
      name: "HUB六本木店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "12:00",
            close: "14:00",
          },
          {
            open: "22:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "19:00",
          },
          {
            open: "21:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "14:00",
            close: "25:00",
          },
        ],
      },
    ],
    updatedAt: "2025-10-07T06:59:11.835Z",
  },
  {
    store: {
      id: "store_5502",
      numericId: 5502,
      url: "https://www.pub-hub.com/index.php/shop/detail/2",
      name: "HUB渋谷店",
      prefecture: "東京都 渋谷区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "19:00",
          },
          {
            open: "21:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "25:00",
          },
        ],
      },
    ],
    updatedAt: "2025-10-07T06:59:11.846Z",
  },
  {
    store: {
      id: "store_5505",
      numericId: 5505,
      url: "https://www.pub-hub.com/index.php/shop/detail/4",
      name: "HUB三宮ﾑｰﾝﾗｲﾄﾋﾞﾙ店",
      prefecture: "兵庫県 神戸市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "holiday",
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
    ],
    updatedAt: "2025-10-07T06:59:11.856Z",
  },
  {
    store: {
      id: "store_5506",
      numericId: 5506,
      url: "https://www.pub-hub.com/index.php/shop/detail/5",
      name: "HUB新宿南口店 B1F",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "14:30",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.865Z",
  },
  {
    store: {
      id: "store_55066",
      numericId: 55066,
      url: "https://www.pub-hub.com/index.php/shop/detail/5",
      name: "HUB新宿南口店 6F",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "14:30",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.875Z",
  },
  {
    store: {
      id: "store_5507",
      numericId: 5507,
      url: "https://www.pub-hub.com/index.php/shop/detail/6",
      name: "HUB浅草店",
      prefecture: "東京都 台東区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "holiday",
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "28:00",
          },
        ],
      },
    ],
    updatedAt: "2025-10-07T06:59:11.883Z",
  },
  {
    store: {
      id: "store_5513",
      numericId: 5513,
      url: "https://www.pub-hub.com/index.php/shop/detail/10",
      name: "HUB銀座コリドー店",
      prefecture: "東京都 中央区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "14:30",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "15:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "24:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.890Z",
  },
  {
    store: {
      id: "store_5514",
      numericId: 5514,
      url: "https://www.pub-hub.com/index.php/shop/detail/11",
      name: "HUB新浦安店",
      prefecture: "千葉県 浦安市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "27:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "27:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "15:30",
            close: "27:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "16:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "25:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "18:00",
            close: "27:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.898Z",
  },
  {
    store: {
      id: "store_5518",
      numericId: 5518,
      url: "https://www.pub-hub.com/index.php/shop/detail/13",
      name: "HUB池袋東口店",
      prefecture: "東京都 豊島区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.906Z",
  },
  {
    store: {
      id: "store_5520",
      numericId: 5520,
      url: "https://www.pub-hub.com/index.php/shop/detail/15",
      name: "HUB日比谷店",
      prefecture: "東京都 千代田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.915Z",
  },
  {
    store: {
      id: "store_5521",
      numericId: 5521,
      url: "https://www.pub-hub.com/index.php/shop/detail/16",
      name: "HUB東京オペラシティ店",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.922Z",
  },
  {
    store: {
      id: "store_5522",
      numericId: 5522,
      url: "https://www.pub-hub.com/index.php/shop/detail/17",
      name: "HUB高田馬場店",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.929Z",
  },
  {
    store: {
      id: "store_5525",
      numericId: 5525,
      url: "https://www.pub-hub.com/index.php/shop/detail/20",
      name: "HUBなんば戎橋店",
      prefecture: "大阪府 大阪市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.937Z",
  },
  {
    store: {
      id: "store_5528",
      numericId: 5528,
      url: "https://www.pub-hub.com/index.php/shop/detail/22",
      name: "HUB吉祥寺南口店",
      prefecture: "東京都 武蔵野市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.945Z",
  },
  {
    store: {
      id: "store_5529",
      numericId: 5529,
      url: "https://www.pub-hub.com/index.php/shop/detail/23",
      name: "HUB池袋西口公園店",
      prefecture: "東京都 豊島区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.952Z",
  },
  {
    store: {
      id: "store_5530",
      numericId: 5530,
      url: "https://www.pub-hub.com/index.php/shop/detail/24",
      name: "HUB八王子店",
      prefecture: "東京都 八王子市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.958Z",
  },
  {
    store: {
      id: "store_5531",
      numericId: 5531,
      url: "https://www.pub-hub.com/index.php/shop/detail/25",
      name: "HUB上野しのばず通り店",
      prefecture: "東京都 台東区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.965Z",
  },
  {
    store: {
      id: "store_5532",
      numericId: 5532,
      url: "https://www.pub-hub.com/index.php/shop/detail/26",
      name: "HUB池袋東口店ANNEX",
      prefecture: "東京都 豊島区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.972Z",
  },
  {
    store: {
      id: "store_5533",
      numericId: 5533,
      url: "https://www.pub-hub.com/index.php/shop/detail/27",
      name: "HUB川崎店",
      prefecture: "神奈川県 川崎市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.979Z",
  },
  {
    store: {
      id: "store_5534",
      numericId: 5534,
      url: "https://www.pub-hub.com/index.php/shop/detail/28",
      name: "HUB柏西口店",
      prefecture: "千葉県 柏市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.985Z",
  },
  {
    store: {
      id: "store_5535",
      numericId: 5535,
      url: "https://www.pub-hub.com/index.php/shop/detail/29",
      name: "HUB所沢プロペ通り店",
      prefecture: "埼玉県 所沢市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.991Z",
  },
  {
    store: {
      id: "store_5536",
      numericId: 5536,
      url: "https://www.pub-hub.com/index.php/shop/detail/30",
      name: "HUB四条烏丸店",
      prefecture: "京都府 京都市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:11.996Z",
  },
  {
    store: {
      id: "store_5537",
      numericId: 5537,
      url: "https://www.pub-hub.com/index.php/shop/detail/31",
      name: "HUB恵比寿店",
      prefecture: "東京都 渋谷区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.003Z",
  },
  {
    store: {
      id: "store_5539",
      numericId: 5539,
      url: "https://www.pub-hub.com/index.php/shop/detail/33",
      name: "８２神田店",
      prefecture: "東京都 千代田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.009Z",
  },
  {
    store: {
      id: "store_5540",
      numericId: 5540,
      url: "https://www.pub-hub.com/index.php/shop/detail/34",
      name: "HUB池袋西口店",
      prefecture: "東京都 豊島区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.015Z",
  },
  {
    store: {
      id: "store_5541",
      numericId: 5541,
      url: "https://www.pub-hub.com/index.php/shop/detail/35",
      name: "８２品川店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.022Z",
  },
  {
    store: {
      id: "store_5542",
      numericId: 5542,
      url: "https://www.pub-hub.com/index.php/shop/detail/36",
      name: "HUB名古屋栄錦通り店",
      prefecture: "愛知県 名古屋市",
      region: "chubu",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.027Z",
  },
  {
    store: {
      id: "store_5543",
      numericId: 5543,
      url: "https://www.pub-hub.com/index.php/shop/detail/37",
      name: "HUB大宮東口店",
      prefecture: "埼玉県 さいたま市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.034Z",
  },
  {
    store: {
      id: "store_5544",
      numericId: 5544,
      url: "https://www.pub-hub.com/index.php/shop/detail/38",
      name: "８２赤坂店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.042Z",
  },
  {
    store: {
      id: "store_5545",
      numericId: 5545,
      url: "https://www.pub-hub.com/index.php/shop/detail/39",
      name: "８２関内店",
      prefecture: "神奈川県 横浜市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.049Z",
  },
  {
    store: {
      id: "store_5546",
      numericId: 5546,
      url: "https://www.pub-hub.com/index.php/shop/detail/40",
      name: "HUB東京ドームシティ ラクーア店",
      prefecture: "東京都 文京区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.057Z",
  },
  {
    store: {
      id: "store_5547",
      numericId: 5547,
      url: "https://www.pub-hub.com/index.php/shop/detail/41",
      name: "８２三田店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.065Z",
  },
  {
    store: {
      id: "store_5548",
      numericId: 5548,
      url: "https://www.pub-hub.com/index.php/shop/detail/42",
      name: "HUB秋葉原店",
      prefecture: "東京都 千代田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.072Z",
  },
  {
    store: {
      id: "store_5549",
      numericId: 5549,
      url: "https://www.pub-hub.com/index.php/shop/detail/43",
      name: "８２浜松町店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.080Z",
  },
  {
    store: {
      id: "store_5550",
      numericId: 5550,
      url: "https://www.pub-hub.com/index.php/shop/detail/44",
      name: "８２新宿三丁目店",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.088Z",
  },
  {
    store: {
      id: "store_5552",
      numericId: 5552,
      url: "https://www.pub-hub.com/index.php/shop/detail/46",
      name: "HUB北千住店",
      prefecture: "東京都 足立区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.095Z",
  },
  {
    store: {
      id: "store_5553",
      numericId: 5553,
      url: "https://www.pub-hub.com/index.php/shop/detail/47",
      name: "８２AKIBA TOLIM店",
      prefecture: "東京都 千代田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.103Z",
  },
  {
    store: {
      id: "store_5555",
      numericId: 5555,
      url: "https://www.pub-hub.com/index.php/shop/detail/49",
      name: "HUB梅田茶屋町店",
      prefecture: "大阪府 大阪市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.111Z",
  },
  {
    store: {
      id: "store_5556",
      numericId: 5556,
      url: "https://www.pub-hub.com/index.php/shop/detail/50",
      name: "HUB心斎橋店",
      prefecture: "大阪府 大阪市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.118Z",
  },
  {
    store: {
      id: "store_5557",
      numericId: 5557,
      url: "https://www.pub-hub.com/index.php/shop/detail/51",
      name: "HUB慶應日吉店",
      prefecture: "神奈川県 横浜市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.125Z",
  },
  {
    store: {
      id: "store_5558",
      numericId: 5558,
      url: "https://www.pub-hub.com/index.php/shop/detail/52",
      name: "HUB町田店",
      prefecture: "東京都 町田市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.133Z",
  },
  {
    store: {
      id: "store_5559",
      numericId: 5559,
      url: "https://www.pub-hub.com/index.php/shop/detail/53",
      name: "８２築地店",
      prefecture: "東京都 中央区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.140Z",
  },
  {
    store: {
      id: "store_5560",
      numericId: 5560,
      url: "https://www.pub-hub.com/index.php/shop/detail/54",
      name: "HUB横浜鶴屋町店",
      prefecture: "神奈川県 横浜市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.147Z",
  },
  {
    store: {
      id: "store_5561",
      numericId: 5561,
      url: "https://www.pub-hub.com/index.php/shop/detail/55",
      name: "HUB名駅店",
      prefecture: "愛知県 名古屋市",
      region: "chubu",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.155Z",
  },
  {
    store: {
      id: "store_5562",
      numericId: 5562,
      url: "https://www.pub-hub.com/index.php/shop/detail/56",
      name: "HUB横浜西口店",
      prefecture: "神奈川県 横浜市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.162Z",
  },
  {
    store: {
      id: "store_5563",
      numericId: 5563,
      url: "https://www.pub-hub.com/index.php/shop/detail/57",
      name: "HUB八重洲店",
      prefecture: "東京都 中央区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.170Z",
  },
  {
    store: {
      id: "store_5564",
      numericId: 5564,
      url: "https://www.pub-hub.com/index.php/shop/detail/58",
      name: "８２新宿西口大ガード店",
      prefecture: "東京都 新宿区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.179Z",
  },
  {
    store: {
      id: "store_5565",
      numericId: 5565,
      url: "https://www.pub-hub.com/index.php/shop/detail/59",
      name: "HUB千葉富士見店",
      prefecture: "千葉県 千葉市",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.186Z",
  },
  {
    store: {
      id: "store_5566",
      numericId: 5566,
      url: "https://www.pub-hub.com/index.php/shop/detail/60",
      name: "８２東銀座店",
      prefecture: "東京都 中央区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.194Z",
  },
  {
    store: {
      id: "store_5567",
      numericId: 5567,
      url: "https://www.pub-hub.com/index.php/shop/detail/61",
      name: "HUBロッテシティホテル錦糸町店",
      prefecture: "東京都 墨田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.201Z",
  },
  {
    store: {
      id: "store_5568",
      numericId: 5568,
      url: "https://www.pub-hub.com/index.php/shop/detail/62",
      name: "８２ロッテシティホテル錦糸町店",
      prefecture: "東京都 墨田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.209Z",
  },
  {
    store: {
      id: "store_5570",
      numericId: 5570,
      url: "https://www.pub-hub.com/index.php/shop/detail/64",
      name: "HUB代々木西口店",
      prefecture: "東京都 渋谷区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.215Z",
  },
  {
    store: {
      id: "store_5571",
      numericId: 5571,
      url: "https://www.pub-hub.com/index.php/shop/detail/65",
      name: "HUB外苑前店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.222Z",
  },
  {
    store: {
      id: "store_5572",
      numericId: 5572,
      url: "https://www.pub-hub.com/index.php/shop/detail/66",
      name: "８２渋谷宮益坂店",
      prefecture: "東京都 渋谷区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.228Z",
  },
  {
    store: {
      id: "store_5573",
      numericId: 5573,
      url: "https://www.pub-hub.com/index.php/shop/detail/67",
      name: "８２五反田西口店",
      prefecture: "東京都 品川区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.235Z",
  },
  {
    store: {
      id: "store_5575",
      numericId: 5575,
      url: "https://www.pub-hub.com/index.php/shop/detail/69",
      name: "HUBあべのキューズモール店",
      prefecture: "大阪府 大阪市",
      region: "kinki",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.242Z",
  },
  {
    store: {
      id: "store_5576",
      numericId: 5576,
      url: "https://www.pub-hub.com/index.php/shop/detail/70",
      name: "HUB蒲田西口店",
      prefecture: "東京都 大田区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.248Z",
  },
  {
    store: {
      id: "store_5577",
      numericId: 5577,
      url: "https://www.pub-hub.com/index.php/shop/detail/71",
      name: "HUB新橋店",
      prefecture: "東京都 港区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.254Z",
  },
  {
    store: {
      id: "store_5578",
      numericId: 5578,
      url: "https://www.pub-hub.com/index.php/shop/detail/93",
      name: "HUB池袋サンシャイン通り店",
      prefecture: "東京都 豊島区",
      region: "kanto",
    },
    range: {
      from: "2025-10-07",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-10-07",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-08",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-09",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-10",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "16:30",
            close: "28:00",
          },
        ],
      },
      {
        date: "2025-10-11",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "17:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-12",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-13",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-14",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "26:00",
          },
        ],
      },
      {
        date: "2025-10-15",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "19:00",
            close: "28:00",
          },
        ],
      },
      // FIX: The following object was truncated and corrupted. It has been corrected.
      {
        date: "2025-10-16",
        weekday: "木",
        status: "holiday",
      },
    ],
    updatedAt: "2025-10-07T06:59:12.261Z",
  },
  {
    store: {
      id: "store_5648",
      numericId: 5648,
      url: "https://www.pub-hub.com/index.php/shop/detail/140",
      name: "HUB富山MAROOT店",
      prefecture: "富山県 富山市",
      region: "chubu",
    },
    range: {
      from: "2025-12-18",
      days: 10,
      tz: "Asia/Tokyo",
      rollover_at: "07:00",
    },
    days: [
      {
        date: "2025-12-18",
        weekday: "木",
        status: "holiday",
      },
      {
        date: "2025-12-19",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-20",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-21",
        weekday: "日",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-22",
        weekday: "月",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-23",
        weekday: "火",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-24",
        weekday: "水",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-25",
        weekday: "木",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-26",
        weekday: "金",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
      {
        date: "2025-12-27",
        weekday: "土",
        status: "open",
        hours: [
          {
            open: "11:00",
            close: "23:00",
          },
        ],
      },
    ],
    updatedAt: "2025-12-18T03:06:26.478Z",
  },
];
