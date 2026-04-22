import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";

const rows: { before: React.ReactNode; after: React.ReactNode }[] = [
  {
    before: (
      <>
        施術後のカサつきが
        <br />
        気になっていた
      </>
    ),
    after: (
      <>
        しっとり感が
        <br />
        続きやすくなった※
      </>
    ),
  },
  {
    before: (
      <>
        飼い主への
        <br />
        説明に迷いがあった
      </>
    ),
    after: (
      <>
        「水にもこだわってます」
        <br />
        と自信を持って伝えられる
      </>
    ),
  },
  {
    before: (
      <>
        他店との違いが
        <br />
        うまく伝わらなかった
      </>
    ),
    after: (
      <>
        見えない部分への
        <br />
        こだわりが&quot;差&quot;になった
      </>
    ),
  },
  {
    before: (
      <>
        単価アップの
        <br />
        根拠が見えなかった
      </>
    ),
    after: (
      <>
        &quot;水の質&quot;という
        <br />
        新しい提案軸ができた
      </>
    ),
  },
];

export function Change() {
  return (
    <section id="change" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          Salon Change
        </Reveal>
        <div className="mx-auto my-5 h-px w-8 bg-beige-dk opacity-60" />
        <Reveal as="h2" delay={1} className="mb-9 font-serif text-[22px] font-normal leading-[1.65]">
          Re:pure&nbsp;bubble+ を使い始めた
          <br />
          サロンの変化
        </Reveal>

        <Reveal className="mx-auto mb-8 w-full max-w-4xl">
          <SafeImage
            src="/assets/graf.png"
            alt="水道水と塩素除去水の比較グラフ"
            className="mx-auto block h-auto w-full"
          />
        </Reveal>

        <div className="mb-9 flex flex-col gap-3.5">
          <Reveal className="grid grid-cols-[1fr_24px_1fr] text-center font-latin text-[10px] uppercase tracking-[0.1em] text-mid">
            <span>before</span>
            <span />
            <span>after</span>
          </Reveal>
          {rows.map((r, i) => (
            <Reveal
              key={i}
              delay={((i + 1) as 1 | 2 | 3 | 4)}
              className="grid grid-cols-[1fr_24px_1fr] items-center gap-0 text-[13px] leading-[1.6] sm:text-[14px]"
            >
              <div className="rounded-l-md bg-gray-lt px-3.5 py-4 text-center text-mid">
                {r.before}
              </div>
              <div className="flex h-full items-center justify-center bg-beige-dk text-xs text-white">
                ›
              </div>
              <div className="rounded-r-md bg-beige px-3.5 py-4 text-center font-medium text-charcoal">
                {r.after}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="rounded-md border border-[var(--line-soft)] bg-cream p-4 text-left text-xs leading-[1.85] text-mid">
          ※体感・印象には個人差があります。医療的な効果・効能を保証するものではありません。
        </Reveal>
      </div>
    </section>
  );
}
