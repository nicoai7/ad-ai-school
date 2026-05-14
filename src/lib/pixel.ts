// Meta Pixel ID
export const META_PIXEL_ID = "206044873573791";

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

/**
 * 標準イベント送信（PageView, Lead, ViewContent, Purchase等）
 */
export function trackEvent(event: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  }
}

/**
 * カスタムイベント送信
 */
export function trackCustomEvent(
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("trackCustom", event, params);
    } else {
      window.fbq("trackCustom", event);
    }
  }
}

/**
 * 外部リンク遷移前にイベントを送信する用のクリックハンドラ
 * - preventDefault でデフォルト遷移を止める
 * - イベント送信
 * - 250ms後にlocation.hrefで遷移（Pixelビーコン送信時間を確保）
 */
export function makeTrackingClickHandler(
  href: string,
  event: string,
  params?: Record<string, unknown>
): (e: React.MouseEvent<HTMLElement>) => void {
  return (e) => {
    // Cmd/Ctrl+クリック・中クリックは新規タブで開く動作を維持
    if (e.metaKey || e.ctrlKey || e.button === 1) {
      trackEvent(event, params);
      return;
    }
    e.preventDefault();
    trackEvent(event, params);
    setTimeout(() => {
      window.location.href = href;
    }, 250);
  };
}
