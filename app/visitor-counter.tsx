"use client";

import { useEffect, useState } from "react";

const COUNTER_URL = "https://counterapi.com/api/toukaihaku.github.io/view/personal-site";
const COUNTED_KEY = "kaibo-site-visitor-counted-v1";
const VISITOR_ID_KEY = "kaibo-site-visitor-id-v1";
const COUNTER_EVENT = "kaibo:visitor-count";
let latestCount: number | null = null;

type VisitorCounterProps = {
  label: string;
};

function getOrCreateVisitorId() {
  try {
    const savedId = window.localStorage.getItem(VISITOR_ID_KEY);
    if (savedId) return savedId;

    const visitorId = typeof window.crypto.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
    return visitorId;
  } catch {
    return null;
  }
}

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
        // The counter service still applies its own anonymous uniqueness filter.
      }

      const shouldIncrement = isPublicSite && !wasCounted;
      const options = new URLSearchParams({ unique: "true" });

      if (shouldIncrement) {
        const visitorId = getOrCreateVisitorId();
        if (visitorId) options.set("userId", visitorId);
      } else {
        options.set("readOnly", "true");
      }

      try {
        const response = await fetch(`${COUNTER_URL}?${options.toString()}`, {
          cache: "no-store",
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Visitor counter is unavailable");

        const data = await response.json() as { value?: number | string };
        const nextCount = Number(data.value);
        if (!Number.isFinite(nextCount) || nextCount < 0) throw new Error("Invalid visitor count");

        if (shouldIncrement) {
          try {
            window.localStorage.setItem(COUNTED_KEY, "1");
          } catch {
            // Some private-browsing modes block local storage.
          }
        }

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
