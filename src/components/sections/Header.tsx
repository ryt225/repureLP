export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-[var(--line-soft)] bg-[rgba(250,247,242,0.92)] px-6 py-4 backdrop-blur-md">
      <a
        href="#"
        className="inline-flex items-baseline gap-px font-latin text-[22px] font-normal tracking-[0.04em] text-charcoal no-underline"
      >
        <span>Re:pure&nbsp;bubble</span>
        <span className="ml-0.5 text-[20px] font-light text-beige-dk">+</span>
      </a>
      <a
        href="#cta"
        className="rounded-sm bg-beige-dk px-[18px] py-[9px] font-sans text-[11px] font-medium tracking-[0.06em] text-white no-underline transition-colors hover:bg-charcoal"
      >
        無料体験を申し込む
      </a>
    </header>
  );
}
