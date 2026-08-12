"use client";

import { useEffect, useState } from "react";

const COUNTER_ROOT = "https://page-views-api.ratneshc.com/api/v1";
const COUNTER_QUERY = "site=toukaihaku.github.io&path=%2Fsite-visit";
const TRACK_URL = `${COUNTER_ROOT}/track?${COUNTER_QUERY}`;
const VIEWS_URL = `${COUNTER_ROOT}/views?${COUNTER_QUERY}`;
const COUNTED_KEY = "kaibo-site-visitor-counted-v2";
const COUNTER_EVENT = "kaibo:visitor-count";
let latestCount: number | null = null;

type VisitorCounterProps = {
  label: string;
};

export function VisitorTracker() {
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 6000);

    async function loadCount() {
      const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
      const isPublicSite = window.location.protocol === "https:" && !isLocalHost;
      let wasCounted = false;

      try {
        wasCounted = window.localStorage.getItem(COUNTED_KEY) === "1";
      } catch {
        // Some private-browsing modes block local storage.
      }

      const shouldIncrement = isPublicSite && !wasCounted;

      try {
        const requestOptions: RequestInit = {
          cache: "no-store",
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: controller.signal,
        };

        if (shouldIncrement) {
          const trackingResponse = await fetch(TRACK_URL, requestOptions);
          if (!trackingResponse.ok) throw new Error("Visitor tracking is unavailable");

          try {
            window.localStorage.setItem(COUNTED_KEY, "1");
            window.localStorage.removeItem("kaibo-site-visitor-counted-v1");
            window.localStorage.removeItem("kaibo-site-visitor-id-v1");
          } catch {
            // Some private-browsing modes block local storage.
          }
        }

        const response = await fetch(VIEWS_URL, requestOptions);

        if (!response.ok) throw new Error("Visitor counter is unavailable");

        const data = await response.json() as { views?: number | string };
        const nextCount = Number(data.views);
        if (!Number.isFinite(nextCount) || nextCount < 0) throw new Error("Invalid visitor count");

        if (isMounted) {
          latestCount = Math.trunc(nextCount);
          window.dispatchEvent(new CustomEvent(COUNTER_EVENT, { detail: latestCount }));
        }
      } catch {
        if (isMounted) {
          window.dispatchEvent(new CustomEvent(COUNTER_EVENT, { detail: null }));
        }
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    void loadCount();
    return () => {
      isMounted = false;
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

export default function VisitorCounter({ label }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(latestCount);

  useEffect(() => {
    const updateCount = (event: Event) => {
      const nextCount = (event as CustomEvent<number | null>).detail;
      setCount(nextCount);
    };

    window.addEventListener(COUNTER_EVENT, updateCount);
    return () => window.removeEventListener(COUNTER_EVENT, updateCount);
  }, []);

  const displayCount = count === null ? "000000" : String(count).padStart(6, "0");

  return (
    <div
      className={`visitor-counter${count === null ? " is-loading" : ""}`}
      aria-live="polite"
      aria-label={count === null ? label : `${label}: ${count}`}
    >
      <span className="visitor-counter-dot" aria-hidden="true" />
      <span className="visitor-counter-label">{label}</span>
      <strong aria-hidden="true">{displayCount}</strong>
    </div>
  );
}
