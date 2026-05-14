"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * SPA ナビゲーション時に追加 PageView を発火するための補助コンポーネント
 * Pixel スクリプト本体は layout.tsx の <head> 内で初期化されるため、
 * このコンポーネントは初回PageViewは発火させず、ルート変更時のみ発火する
 */
export default function MetaPixelRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 初回ロード時はlayout.tsx内のスクリプトでPageViewが発火するためスキップ
    // pathnameが変わったときだけ追加で発火
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
