import { Reveal } from "@/components/ui/Reveal";

const points = [
  "1週間の無料体験。費用は一切かかりません。",
  "設置・撤去は専門スタッフが対応。サロン側の手間はほぼありません。",
  "体験後に継続するかどうか、じっくりお決めいただけます。",
  "全国対応。まずはお気軽にDMまたはお問い合わせください。",
];

export function Trial() {
  return (
    <section
      id="trial"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F2EDE3 0%, #E8DFD0 60%, #D8D5CE 100%)",
      }}
    >
      {/* Big "7" decoration */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2.5 top-1/2 -translate-y-1/2 font-latin text-[220px] font-light leading-none text-white/35"
      >
        7
      </span>

      <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          Free Trial
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-1.5 font-serif text-[23px] font-normal leading-[1.65]">
          まず、体験してみてください。
        </Reveal>
        <Reveal as="div" delay={2} className="mx-auto mt-4 mb-1.5 font-latin text-[64px] font-light leading-none text-beige-dk">
          7
        </Reveal>
        <Reveal as="div" delay={2} className="mb-7 font-latin text-[13px] tracking-[0.1em] text-mid">
          Days Free Trial
        </Reveal>
        <Reveal as="p" delay={3} className="mb-7 text-[15px] text-mid">
          1週間、サロンで実際に使って、
          <br />
          その違いをご自身の手で感じてください。
        </Reveal>

        <ul className="mb-9 flex flex-col gap-2.5 text-left">
          {points.map((p, i) => (
            <Reveal
              as="li"
              key={i}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="flex items-start gap-2.5 rounded-md bg-white/85 px-4 py-3 text-[13.5px]"
            >
              <span className="shrink-0 text-beige-dk">◎</span>
              <span>{p}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <a
            href="#cta"
            className="mt-2 inline-block rounded-sm bg-charcoal px-9 py-4 text-[13px] font-medium tracking-[0.1em] text-white no-underline transition-colors hover:bg-beige-dk active:scale-[0.98]"
          >
            無料体験を申し込む　›
          </a>
        </Reveal>
      </div>
    </section>
  );
}
