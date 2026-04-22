import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-charcoal text-center"
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,223,208,.14) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[60px] -right-[60px] h-[220px] w-[220px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,223,208,.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <Reveal className="mx-auto mb-9 w-full max-w-[340px]">
          <SafeImage
            src="/assets/lp_bottom.jpg"
            alt="ふんわり仕上がったワンちゃんと飼い主"
            className="mx-auto block w-full rounded-lg object-cover shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            style={{ aspectRatio: "3 / 4" }}
          />
        </Reveal>

        <Reveal as="span" className="mb-5 block font-latin text-[11px] uppercase tracking-[0.22em] text-beige">
          Take the First Step
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-4 font-serif text-[24px] font-light leading-[1.65] text-beige-lt">
          犬想いは、
          <br />
          <em className="not-italic text-beige">言葉だけじゃない。</em>
        </Reveal>
        <Reveal as="p" delay={2} className="mb-9 text-[13px] leading-[1.9] text-[rgba(242,237,227,0.6)]">
          1週間、水を変えてみてください。
          <br />
          それだけで、何かが変わるかもしれない。
        </Reveal>

        <Reveal delay={3} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:info@repure.jp"
            className="block w-full max-w-[320px] rounded-sm bg-white px-7 py-[18px] text-[14px] font-medium tracking-[0.08em] text-charcoal no-underline transition-colors hover:bg-beige sm:max-w-[220px] sm:flex-1"
          >
            無料体験を申し込む
          </a>
          <a
            href="mailto:info@repure.jp"
            className="block w-full max-w-[320px] rounded-sm border border-[rgba(242,237,227,0.28)] px-7 py-[15px] text-[13px] tracking-[0.08em] text-[rgba(242,237,227,0.75)] no-underline transition-colors hover:border-beige hover:text-beige-lt sm:max-w-[220px] sm:flex-1"
          >
            まずは資料を見る
          </a>
        </Reveal>

        <Reveal as="p" delay={4} className="mt-5 text-[11px] tracking-[0.06em] text-[rgba(242,237,227,0.4)]">
          DMや問い合わせフォームからもお気軽にどうぞ。
        </Reveal>

        <Reveal className="mt-[52px] border-t border-white/10 pt-9">
          <p className="font-serif text-[15px] font-light leading-[2] tracking-[0.05em] text-[rgba(242,237,227,0.5)]">
            見えないところへのこだわりが、
            <br />
            いつかサロンの名前になる。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
