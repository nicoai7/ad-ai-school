"use client";

import { useEffect, useSyncExternalStore } from "react";
import WatchPlayer from "./WatchPlayer";
import WatchExpired from "./WatchExpired";

// パラメータなしアクセス時のフォールバック。
// 初回アクセスした「日」を起点に、その日を含めて3日間視聴可能とする。
const STORAGE_KEY = "webinar_first_access_date";
const VIEWING_DAYS = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

// ローカルタイムの「その日の0:00」のミリ秒
function startOfLocalDay(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

// 初回アクセス日（ローカル0:00のms）を読む。保存済みならその値、未保存なら当日。
function readFirstAccessDayMs(): number {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && !isNaN(parseInt(saved, 10))) {
      return parseInt(saved, 10);
    }
  } catch {
    // localStorage 利用不可（プライベートブラウジング等）
  }
  return startOfLocalDay(new Date());
}

// localStorage は本コンポーネント自身しか書き換えないため購読は不要
function subscribe(): () => void {
  return () => {};
}

export default function WatchClient() {
  // SSR では null、クライアントマウント後に初回アクセス日が入る
  const firstAccessDayMs = useSyncExternalStore(
    subscribe,
    readFirstAccessDayMs,
    () => null
  );

  // 初回アクセス日をまだ保存していなければ保存する（副作用は effect 側で）
  useEffect(() => {
    if (firstAccessDayMs === null) return;
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        window.localStorage.setItem(STORAGE_KEY, String(firstAccessDayMs));
      }
    } catch {
      // localStorage 利用不可
    }
  }, [firstAccessDayMs]);

  if (firstAccessDayMs === null) {
    return (
      <main className="min-h-screen bg-soft flex items-center justify-center">
        <p className="text-text-soft text-sm">読み込み中...</p>
      </main>
    );
  }

  const expiresMs = firstAccessDayMs + VIEWING_DAYS * DAY_MS;
  const lastViewableMs = firstAccessDayMs + (VIEWING_DAYS - 1) * DAY_MS;
  const lastViewableDate = new Date(lastViewableMs).toISOString();
  const remainingMs = expiresMs - Date.now();

  if (remainingMs <= 0) {
    return <WatchExpired lastViewableDate={lastViewableDate} />;
  }

  return (
    <WatchPlayer remainingMs={remainingMs} lastViewableDate={lastViewableDate} />
  );
}
