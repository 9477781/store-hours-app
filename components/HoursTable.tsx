import React, { useMemo } from "react";
import { StoreHoursResponse, Day } from "../types";
import { JAPANESE_HOLIDAYS_2025 } from "../constants";

interface HoursTableProps {
  stores: StoreHoursResponse[];
  selectedDates: string[];
  focusedStoreId?: string | null;
  onStoreClick?: (storeId: string) => void;
  language: "ja" | "en";
  favoriteStoreIds: string[];
  onToggleFavorite: (storeId: string) => void;
}

interface HeaderInfo {
  fullDate: string;
  monthDay: string;
  weekday: string;
  day: number;
  isHoliday: boolean;
}

// Helper function to format time display
const formatTime = (time?: string): string => {
  if (!time) {
    return "ー";
  }

  // If time is not in HH:MM format (e.g., contains text), return as is.
  if (!/^\d{2}:\d{2}$/.test(time)) {
    return time;
  }

  const parts = time.split(":");
  const hour = parseInt(parts[0], 10);
  const minute = parts[1];

  // Convert hours 00:00-05:59 to 24:00-29:59
  if (hour >= 0 && hour < 6) {
    const newHour = hour + 24;
    return `${newHour}:${minute}`;
  }

  return time;
};

// Helper to check for non-standard time strings (e.g., containing text)
const isNonStandardTime = (time?: string): boolean => {
  if (!time) return false;
  // Returns true if the string contains any character that is not a digit or a colon
  return /[^0-9:]/.test(time);
};

const renderDayStatus = (day: Day | undefined, language: "ja" | "en") => {
  if (!day || day.status !== "open" || !day.hours || day.hours.length === 0) {
    let content = "ー";
    let className = "text-gray-400";
    if (day?.status === "holiday") {
      content = language === "ja" ? "休 業" : "Closed";
      className = "font-medium text-red-500";
    } else if (day?.status === "error") {
      content = language === "ja" ? "確認中" : "Checking";
      className = "font-semibold text-orange-500";
    }
    return <div className={className}>{content}</div>;
  }

  return (
    <div className="flex flex-col font-mono font-medium text-base">
      {day.hours.map((slot, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span
            className={`${isNonStandardTime(slot.open) ? "text-red-500" : "text-gray-900"}`}
          >
            {formatTime(slot.open)}
          </span>
          <span>-</span>
          <span
            className={`${isNonStandardTime(slot.close) ? "text-red-500" : "text-gray-900"}`}
          >
            {formatTime(slot.close)}
          </span>
        </div>
      ))}
    </div>
  );
};

const HoursTable: React.FC<HoursTableProps> = ({
  stores,
  selectedDates,
  focusedStoreId,
  onStoreClick,
  language,
  favoriteStoreIds,
  onToggleFavorite,
}) => {
  const headers = useMemo((): HeaderInfo[] => {
    if (!stores || stores.length === 0) {
      return [];
    }
    const referenceDays = stores[0].days.slice(0, 7);

    const daysToDisplay =
      selectedDates.length > 0
        ? referenceDays.filter((day) => selectedDates.includes(day.date))
        : referenceDays;

    return daysToDisplay.map((day) => {
      // Use T00:00:00 to treat the date string as local time and avoid timezone shifts
      const currentDate = new Date(day.date + "T00:00:00");
      const dayOfWeekIndex = currentDate.getDay();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();

      return {
        fullDate: day.date,
        monthDay: `${month}/${date}`,
        weekday: day.weekday,
        day: dayOfWeekIndex,
        isHoliday: JAPANESE_HOLIDAYS_2025.includes(day.date),
      };
    });
  }, [stores, selectedDates]);

  const getDayHeaderBgColor = (day: number, isHoliday: boolean) => {
    if (isHoliday || day === 0) return "bg-red-500"; // Holiday or Sunday
    if (day === 6) return "bg-blue-600"; // Saturday
    return "bg-orange-500"; // Weekday
  };

  const renderDayCells = (day: Day | undefined, language: "ja" | "en") => {
    if (!day || day.status !== "open" || !day.hours || day.hours.length === 0) {
      let content = "ー";
      let className = "text-gray-400";
      if (day?.status === "holiday") {
        content = language === "ja" ? "休 業" : "Closed";
        className = "text-base font-medium text-red-500";
      } else if (day?.status === "error") {
        content = language === "ja" ? "確認中" : "Checking";
        className = "font-semibold text-orange-500";
      }
      return (
        <td
          colSpan={2}
          className={`px-2 py-4 whitespace-nowrap text-center text-sm ${className} border-r border-gray-200 align-middle`}
        >
          {content}
        </td>
      );
    }

    return (
      <>
        <td className="px-2 py-4 whitespace-nowrap text-center text-sm font-mono align-middle">
          <div className="flex flex-col space-y-1">
            {day.hours.map((slot, index) => (
              <div
                key={`open-${index}`}
                className={`text-base font-medium ${isNonStandardTime(slot.open) ? "text-red-500" : "text-gray-900"}`}
              >
                {formatTime(slot.open)}
              </div>
            ))}
          </div>
        </td>
        <td className="px-2 py-4 whitespace-nowrap text-center text-sm font-mono border-r border-gray-200 align-middle">
          <div className="flex flex-col space-y-1">
            {day.hours.map((slot, index) => (
              <div
                key={`close-${index}`}
                className={`text-base font-medium ${isNonStandardTime(slot.close) ? "text-red-500" : "text-gray-900"}`}
              >
                {formatTime(slot.close)}
              </div>
            ))}
          </div>
        </td>
      </>
    );
  };

  if (stores.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow">
        <p className="text-lg text-gray-500">
          {language === "ja"
            ? "該当する店舗がありません。"
            : "No stores found."}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-auto shadow-xl shadow-indigo-100/50 rounded-2xl max-h-[70vh] border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100 border-collapse table-fixed bg-white">
          <thead className="text-sm font-bold text-white sticky top-0 z-30 font-outfit">
            <tr>
              <th scope="col" rowSpan={2} className="md:sticky md:left-0 bg-orange-500 p-0 text-left tracking-wider z-40 w-[120px] min-w-[120px] align-middle text-white border-r border-white/30">
                <div className="flex items-center h-full px-4 py-4 uppercase font-bold text-xs">{language === 'ja' ? 'エリア' : 'Area'}</div>
              </th>
              <th scope="col" rowSpan={2} className="md:sticky md:left-[120px] bg-orange-500 p-0 text-center tracking-wider z-40 w-[50px] min-w-[50px] align-middle border-r border-white/30">
                <div className="flex items-center justify-center h-full text-lg text-yellow-300">★</div>
              </th>
              <th scope="col" rowSpan={2} className="md:sticky md:left-[170px] bg-orange-500 p-0 text-left tracking-wider z-40 w-[180px] min-w-[180px] align-middle text-white border-r border-gray-200 shadow-[4px_0_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-center h-full px-4 py-4 uppercase font-bold text-xs">{language === 'ja' ? '店名' : 'Shop'}</div>
              </th>
              {headers.map((header) => (
                <th
                  key={header.fullDate}
                  scope="col"
                  colSpan={2}
                  className={`py-3 text-center tracking-wider border-l border-white/20 ${getDayHeaderBgColor(header.day, header.isHoliday)}`}
                >
                  <div className="text-sm font-bold">
                    {language === "ja"
                      ? `${header.monthDay}(${header.weekday})`
                      : `${header.monthDay} (${stores[0].days.find((d) => d.date === header.fullDate)
                          ?.weekday_en || header.weekday})`}
                  </div>
                </th>
              ))}
            </tr>
            <tr className="bg-blue-900">
              {headers.map((header) => (
                <React.Fragment key={`${header.fullDate}-sub`}>
                  <th
                    scope="col"
                    className="py-2 text-center tracking-wider border-l border-white/10 w-20 bg-blue-900"
                  >
                    OPEN
                  </th>
                  <th
                    scope="col"
                    className="py-2 text-center tracking-wider border-l border-white/10 w-20 bg-blue-900"
                  >
                    CLOSE
                  </th>
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stores.map((storeData, index) => {
              const isFocused = storeData.store.id === focusedStoreId;
              return (
                <tr
                  key={storeData.store.id}
                  onClick={() =>
                    onStoreClick && onStoreClick(storeData.store.id)
                  }
                  className={`${isFocused ? "bg-indigo-50/70" : index % 2 === 0 ? "bg-white" : "bg-gray-50/30"} hover:bg-orange-50 group transition-all duration-200 cursor-pointer`}
                >
                  <td className="md:sticky md:left-0 whitespace-nowrap text-[13px] font-medium text-gray-700 z-20 w-[120px] min-w-[120px] text-left bg-white align-middle font-inter border-r border-gray-200 p-0">
                    <div className="px-4 py-3">{language === "ja" ? storeData.store.prefecture : storeData.store.prefecture_en || storeData.store.prefecture}</div>
                  </td>
                  <td className="md:sticky md:left-[120px] text-sm z-20 w-[50px] min-w-[50px] bg-white align-middle border-r border-gray-200 p-0 text-center">
                    <div className="py-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(storeData.store.id);
                        }}
                        className="focus:outline-none group mx-auto block"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-colors ${favoriteStoreIds.includes(storeData.store.id) ? "fill-yellow-400 text-yellow-400" : "fill-transparent text-gray-300 group-hover:text-yellow-400"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="md:sticky md:left-[170px] text-[13px] z-20 w-[180px] min-w-[180px] bg-white align-middle shadow-[4px_0_8px_rgba(0,0,0,0.1)] border-r border-gray-200 p-0">
                    <div className="flex items-center gap-2 px-4 py-3 font-bold text-gray-800 leading-tight">
                      <a
                        href={storeData.store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline transition-colors block"
                      >
                        {language === "ja"
                          ? storeData.store.name
                          : storeData.store.name_en || storeData.store.name}
                      </a>
                    </div>
                  </td>
                  {headers.map((header) => {
                    const dayData = storeData.days.find((d) =>
                      d.date.startsWith(header.fullDate),
                    );
                    return (
                      <React.Fragment
                        key={`${storeData.store.id}-${header.fullDate}`}
                      >
                        {renderDayCells(dayData, language)}
                      </React.Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {stores.map((storeData) => (
          <div
            key={storeData.store.id}
            className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 p-5 sm:p-6"
          >
            {/* Card Header */}
            <div className="border-b border-gray-200 pb-3 mb-3 text-center">
              <div className="flex items-start justify-center gap-4 mb-1">
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  <a
                    href={storeData.store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 hover:underline"
                    aria-label={
                      language === "ja"
                        ? `${storeData.store.name}の詳細を見る`
                        : `View details for ${storeData.store.name_en || storeData.store.name}`
                    }
                  >
                    {language === "ja"
                      ? storeData.store.name
                      : storeData.store.name_en || storeData.store.name}
                  </a>
                </h3>
                <button
                  onClick={() => onToggleFavorite(storeData.store.id)}
                  className="flex-shrink-0 focus:outline-none"
                  aria-label={
                    favoriteStoreIds.includes(storeData.store.id)
                      ? "お気に入りから削除"
                      : "お気に入りに追加"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${favoriteStoreIds.includes(storeData.store.id) ? "fill-yellow-400 text-yellow-400" : "fill-transparent text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500">
                {language === "ja"
                  ? storeData.store.prefecture
                  : storeData.store.prefecture_en || storeData.store.prefecture}
              </p>
            </div>

            {/* Card Body - Hours */}
            <dl className="space-y-2 text-sm">
              {headers.map((header) => {
                const dayData = storeData.days.find((d) =>
                  d.date.startsWith(header.fullDate),
                );
                let dayColor = "text-gray-800";
                if (header.isHoliday || header.day === 0)
                  dayColor = "text-red-600";
                else if (header.day === 6) dayColor = "text-blue-600";

                return (
                  <div
                    key={header.fullDate}
                    className="grid grid-cols-3 gap-2 items-start"
                  >
                    <dt className={`font-semibold ${dayColor}`}>
                      {header.monthDay}(
                      {language === "ja"
                        ? header.weekday
                        : dayData?.weekday_en || header.weekday}
                      )
                    </dt>
                    <dd className="col-span-2">
                      {renderDayStatus(dayData, language)}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
};

export default HoursTable;
