import { Reveal } from "@/components/ui/Reveal";

export function WEffect() {
  return (
    <section id="w-effect" className="bg-beige-lt">
      <div className="mx-auto max-w-[520px] px-7 py-20 text-center">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          Double Approach
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-3 font-serif text-[22px] font-normal leading-[1.65]">
          <em className="not-italic text-beige-dk">「抜く」</em>と
          <em className="not-italic text-beige-dk">「包む」</em>。
          <br />
          ふたつで、水が変わる。
        </Reveal>
        <Reveal as="p" delay={2} className="mb-9 text-[13px] leading-[1.9] text-mid">
          塩素を取り除くだけじゃない。
          <br />
          ウルトラファインバブルが、見えないところまで届く。
        </Reveal>

        <div className="mb-7 flex flex-col gap-4">
          <Reveal delay={1} className="relative rounded-md border border-[var(--line-soft)] bg-white px-[22px] py-[26px] text-left">
            <div className="absolute right-5 top-5 font-latin text-[20px] tracking-[0.05em] text-gray-md">
              01
            </div>
            <div className="mb-2 pr-12 font-serif text-[16px] font-medium text-charcoal">
              <small className="mb-1 block font-latin text-[11px] font-normal uppercase tracking-[0.18em] text-beige-dk">
                Step 01 — Remove
              </small>
              塩素を、しっかり抜く
            </div>
            <div className="text-[13px] leading-[1.9] text-mid">
              水道水に含まれる残留塩素や金属イオンを除去。ワンちゃんの繊細な皮膚や被毛への&quot;見えない負担&quot;を、根本から見直します。
            </div>
          </Reveal>
          <Reveal as="div" delay={2} className="my-1 text-center font-latin text-[36px] font-light leading-none text-beige-dk">
            +
          </Reveal>
          <Reveal delay={3} className="relative rounded-md border border-[var(--line-soft)] bg-white px-[22px] py-[26px] text-left">
            <div className="absolute right-5 top-5 font-latin text-[20px] tracking-[0.05em] text-gray-md">
              02
            </div>
            <div className="mb-2 pr-12 font-serif text-[16px] font-medium text-charcoal">
              <small className="mb-1 block font-latin text-[11px] font-normal uppercase tracking-[0.18em] text-beige-dk">
                Step 02 — Wrap
              </small>
              バブルで、やさしく包む
            </div>
            <div className="text-[13px] leading-[1.9] text-mid">
              水に溶け込む超微細な泡（ウルトラファインバブル）が、被毛のすみずみまで行き届き、汚れを浮かせて流します。擦らず、負担をかけず、仕上がりはふんわり。
            </div>
          </Reveal>
        </div>

        <Reveal as="p" delay={4} className="rounded-md border border-[var(--line-soft)] bg-white p-5 font-serif text-[15px] leading-[1.9] text-charcoal">
          だから、
          <em className="font-medium not-italic text-beige-dk">
            ワンちゃんにとって負担が少なく
          </em>
          、
          <br />
          飼い主さんにも伝わる&quot;ちがい&quot;になる。
        </Reveal>
      </div>
    </section>
  );
}
