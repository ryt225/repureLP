"use client";

import { useState, type ReactNode } from "react";

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

export function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-sm border border-[var(--line-soft)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start justify-between gap-3 bg-transparent px-5 py-[18px] text-left font-sans text-[13.5px] font-medium leading-[1.6] text-charcoal transition-colors hover:bg-cream"
      >
        <span className="font-latin text-base font-normal leading-[1.4] text-beige-dk">
          Q
        </span>
        <span className="flex-1">{question}</span>
        <span
          className={[
            "shrink-0 text-lg text-beige-dk transition-transform duration-300",
            open ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <div className="bg-beige-lt px-5 pb-[18px] pl-11 pt-0 text-[13px] leading-[1.9] text-mid">
          {children}
        </div>
      )}
    </div>
  );
}
