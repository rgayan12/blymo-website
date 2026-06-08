"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  ReactNode,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function PageTransitionInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const previousRoute = useRef("");

  const routeKey = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    previousRoute.current = `${window.location.pathname}${window.location.search}`;
    let transitionTimer: number | undefined;
    let routeWatchTimer: number | undefined;

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");

      if (!anchor?.href || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const nextUrl = new URL(anchor.href);
      const currentUrl = new URL(window.location.href);

      if (
        nextUrl.origin !== currentUrl.origin ||
        nextUrl.pathname + nextUrl.search ===
          currentUrl.pathname + currentUrl.search
      ) {
        return;
      }

      const nextRoute = `${nextUrl.pathname}${nextUrl.search}`;

      window.clearTimeout(transitionTimer);
      window.clearInterval(routeWatchTimer);
      setIsNavigating(true);

      routeWatchTimer = window.setInterval(() => {
        const activeRoute = `${window.location.pathname}${window.location.search}`;

        if (activeRoute === nextRoute) {
          window.clearInterval(routeWatchTimer);
          transitionTimer = window.setTimeout(() => {
            setIsNavigating(false);
            setIsSettling(false);
          }, 420);
        }
      }, 50);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      window.clearTimeout(transitionTimer);
      window.clearInterval(routeWatchTimer);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  useEffect(() => {
    const currentRoute = previousRoute.current;

    if (!currentRoute) {
      previousRoute.current = routeKey;
      return;
    }

    if (currentRoute !== routeKey) {
      previousRoute.current = routeKey;
      setIsSettling(true);

      const settleTimer = window.setTimeout(() => {
        setIsNavigating(false);
        setIsSettling(false);
      }, 420);

      return () => window.clearTimeout(settleTimer);
    }
  }, [routeKey]);

  useEffect(() => {
    if (!isNavigating) return;

    const fallbackTimer = window.setTimeout(() => {
      setIsNavigating(false);
    }, 2600);

    return () => window.clearTimeout(fallbackTimer);
  }, [isNavigating]);

  const showTransition = isNavigating || isSettling;

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-500 shadow-[0_0_24px_rgba(45,212,191,0.55)] transition-transform duration-700 ease-out motion-reduce:hidden ${
          showTransition ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[60] bg-slate-950/10 backdrop-blur-[1px] transition-opacity duration-300 motion-reduce:hidden ${
          showTransition ? "opacity-100" : "opacity-0"
        }`}
      />
      <main
        className={`transition duration-300 ease-out motion-reduce:transition-none ${
          showTransition ? "translate-y-1 opacity-80" : "translate-y-0 opacity-100"
        }`}
      >
        {children}
      </main>
    </>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<main>{children}</main>}>
      <PageTransitionInner>{children}</PageTransitionInner>
    </Suspense>
  );
}
