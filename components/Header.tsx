import React from 'react';

interface HeaderProps {
  lastUpdated: string | null;
  language: 'ja' | 'en';
}

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

const Header: React.FC<HeaderProps> = ({ lastUpdated, language }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center bg-inherit">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
          {language === 'ja' ? '店舗営業時間一覧' : 'Store Hours List'}
        </h1>
        {lastUpdated && (
          <div className="text-sm text-gray-500">
            {language === 'ja' ? '最終更新:' : 'Last updated:'} {formatDate(lastUpdated)}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
