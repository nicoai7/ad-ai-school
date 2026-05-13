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
