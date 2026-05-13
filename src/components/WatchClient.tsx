"use client";

import { useEffect, useState } from "react";
import WatchPlayer from "./WatchPlayer";
import WatchExpired from "./WatchExpired";

const STORAGE_KEY = "webinar_first_access";
const VIEWING_WINDOW_MS = 72 * 60 * 60 * 1000;

type State =
  | { kind: "loading" }
  | { kind: "ok"; remainingMs: number; expiresAt: Date }
  | { kind: "expired"; expiresAt: Date };

export default function WatchClient() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let firstAccessAt: Date;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        firstAccessAt = new Date(parseInt(saved, 10));
        if (isNaN(firstAccessAt.getTime())) {
          firstAccessAt = new Date();
          window.localStorage.setItem(STORAGE_KEY, String(firstAccessAt.getTime()));
        }
      } else {
        firstAccessAt = new Date();
        window.localStorage.setItem(STORAGE_KEY, String(firstAccessAt.getTime()));
      }
    } catch {
      // localStorage 利用不可（プライベートブラウジング等）→ 視聴可能扱い
      firstAccessAt = new Date();
    }

    const expiresAt = new Date(firstAccessAt.getTime() + VIEWING_WINDOW_MS);
    const remainingMs = expiresAt.getTime() - Date.now();

    if (remainingMs <= 0) {
      setState({ kind: "expired", expiresAt });
    } else {
      setState({ kind: "ok", remainingMs, expiresAt });
    }
  }, []);

  if (state.kind === "loading") {
    return (
      <main className="min-h-screen bg-soft flex items-center justify-center">
        <p className="text-text-soft text-sm">読み込み中...</p>
      </main>
    );
  }

  if (state.kind === "expired") {
    return <WatchExpired expiresAt={state.expiresAt} />;
  }

  return (
    <WatchPlayer
      remainingMs={state.remainingMs}
      expiresAt={state.expiresAt.toISOString()}
    />
  );
}
