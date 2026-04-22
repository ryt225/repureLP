import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";

export function WhatIs() {
  return (
    <section id="what" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 sm:py-24 lg:px-12">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          What is Re:pure&nbsp;bubble+
        </Reveal>
        <div className="mx-auto my-5 h-px w-8 bg-beige-dk opacity-60" />
        <Reveal as="h2" delay={1} className="mb-[22px] font-serif text-[24px] font-light leading-[1.65]">
          Re:pure&nbsp;bubble<span className="text-beige-dk">+</span>は、
          <br />
          <strong className="font-medium text-beige-dk">
            塩素除去と
            <br />
            ウルトラファインバブルを
            <br />
            両立したアクアトリートメントシステム
          </strong>
          です。
        </Reveal>

        <Reveal delay={1} className="mx-auto" >
          <SafeImage
            src="/assets/product.png"
            alt="Re:pure bubble+ 本体"
            className="mx-auto my-2 mb-7 block h-auto w-[55%] max-w-[220px]"
          />
        </Reveal>

        <Reveal delay={2} className="mx-auto mb-8 w-full max-w-4xl">
          <figure className="m-0">
            <SafeImage
              src="/assets/keyvisual.png"
              alt="Re:pure bubble+ 塩素除去とウルトラファインバブルで、やさしい水をペットに"
              className="block h-auto w-full rounded-[10px] shadow-[0_8px_28px_rgba(58,54,48,0.08)]"
            />
            <figcaption className="mt-2.5 block text-center text-xs tracking-[0.08em] text-mid">
              トリミングサロンに、やさしい水という新提案。
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={3} className="mx-auto mb-8 w-full max-w-4xl">
          <SafeImage
            src="/assets/settiimage.png"
            alt="Re:pure bubble+ 設置イメージ"
            className="mx-auto block h-auto w-full"
          />
        </Reveal>

        <Reveal delay={1} className="mb-7 flex flex-wrap justify-center gap-2.5">
          <span className="rounded-[20px] bg-beige px-4 py-2 text-xs font-medium tracking-[0.06em] text-charcoal">
            塩素除去フィルター
          </span>
          <span className="rounded-[20px] bg-charcoal px-4 py-2 text-xs font-medium tracking-[0.06em] text-beige-lt">
            ウルトラファインバブル
          </span>
        </Reveal>

        <Reveal as="p" delay={2} className="mb-8 text-left text-[14px] leading-[2] text-mid">
          水道水に含まれる塩素や金属イオンは、ワンちゃんの繊細な皮膚にとって、見えないストレスになることがあります。
          <br />
          <br />
          Re:pure&nbsp;bubble+ は、塩素をしっかり除去したうえで、さらにウルトラファインバブル（超微細な泡）を水に溶け込ませる設計。
          <br />
          <br />
          シャワー・炭酸泉・泥パック・シンク——サロンで使う「すべての水」を、やさしく、細部まで届く水へと整えます。
        </Reveal>

        <Reveal as="p" delay={3} className="border-y border-[var(--line-soft)] py-5 font-serif text-[16px] italic leading-[1.9] text-beige-dk">
          「そこまで気にするの？」と言われるけど、
          <br />
          本気で考えたら、水まで見直していた。
        </Reveal>
      </div>
    </section>
  );
}
