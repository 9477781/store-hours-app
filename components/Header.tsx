import React from 'react';

interface HeaderProps {
  lastUpdated: string | null;
}

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `最終更新: ${year}/${month}/${day} ${hours}:${minutes}`;
};

const Header: React.FC<HeaderProps> = ({ lastUpdated }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-baseline">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">店舗営業時間</h1>
            {lastUpdated && (
                <p className="text-xs text-gray-500" aria-live="polite">
                {formatDate(lastUpdated)}
                </p>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
