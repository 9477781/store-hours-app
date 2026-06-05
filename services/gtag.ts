// Google Analytics 4 (gtag.js) Utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * GA4 (gtag.js) を初期化し、スクリプトを動的に読み込みます。
 */
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID) {
    console.warn("GA4 Measurement ID (VITE_GA_MEASUREMENT_ID) is not defined. GA4 tracking is disabled.");
    return;
  }

  // 既に初期化されている場合はスキップ
  if (window.gtag) {
    return;
  }

  // dataLayer と gtag 関数の初期化
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // スクリプトタグの追加
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  
  script.onload = () => {
    window.gtag("js", new Date());
    // 自動のpage_view送信はオフにし、SPA側で明示的にコントロールできるようにします
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });
    
    // 初期ロード時のページビューを送信
    trackPageView();
  };

  script.onerror = (err) => {
    console.error("Failed to load GA4 script:", err);
  };

  document.head.appendChild(script);
};

/**
 * ページビューイベントを送信します。
 * @param pagePath 測定対象のパス (デフォルトは現在の location.pathname)
 * @param title ページタイトル (デフォルトは現在の document.title)
 */
export const trackPageView = (pagePath?: string, title?: string): void => {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }
  
  window.gtag("event", "page_view", {
    page_path: pagePath || window.location.pathname,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * カスタムイベントを送信します。
 * @param eventName イベント名
 * @param params イベントパラメータ
 */
export const trackEvent = (eventName: string, params?: Record<string, any>): void => {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }
  
  window.gtag("event", eventName, params);
};
