"use client";

import { useEffect, useState } from "react";

export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-[99] flex gap-2.5 px-5 py-3",
        "border-t border-white/10 bg-[rgba(58,54,48,0.96)] backdrop-blur-md",
        "transition-transform duration-[400ms] ease-out",
        show ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
      aria-hidden={!show}
    >
      <a
        href="mailto:info@repure.jp"
        className="flex-1 rounded-sm bg-white px-2 py-3 text-center text-xs font-medium tracking-[0.07em] text-charcoal transition-opacity active:opacity-80"
      >
        資料・詳細を見る
      </a>
      <a
        href="#trial"
        className="flex-1 rounded-sm bg-beige-dk px-2 py-3 text-center text-xs font-medium tracking-[0.07em] text-white transition-opacity active:opacity-80"
      >
        1週間 無料体験
      </a>
    </div>
  );
}
