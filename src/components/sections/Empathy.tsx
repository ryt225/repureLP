import { Reveal } from "@/components/ui/Reveal";

const concerns = [
  <>
    シャンプーやケア用品は見直したのに、
    <br />
    なぜかお肌の相談が後を絶たない
  </>,
  <>
    仕上がりのクオリティを上げたいのに、
    <br />
    あと一歩が見えない
  </>,
  <>
    近隣のサロンと差別化したいけれど、
    <br />
    何をすれば&quot;伝わる&quot;のかわからない
  </>,
  <>
    単価を上げるだけの
    <br />
    &quot;根拠&quot;や&quot;価値&quot;が欲しい
  </>,
];

export function Empathy() {
  return (
    <section id="empathy" className="border-t border-[var(--line-soft)] bg-white">
      <div className="mx-auto max-w-[520px] px-7 py-[72px]">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          For Salon Owners
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-9 text-center font-serif text-[21px] font-normal leading-[1.7] text-charcoal">
          こんなこと、
          <br />
          感じたことはありませんか？
        </Reveal>
        <ul className="mb-10 flex flex-col gap-4 list-none">
          {concerns.map((text, i) => (
            <Reveal
              as="li"
              key={i}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className="flex items-start gap-[14px] rounded-r-md border-l-[3px] border-beige-dk bg-beige-lt px-5 py-[18px] text-[14px] leading-[1.75] text-charcoal"
            >
              <span className="mt-0.5 shrink-0 text-[15px] text-beige-dk">▎</span>
              <span>{text}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal
          as="p"
          className="border-t border-[var(--line-soft)] pt-3 text-center font-serif text-[17px] font-normal leading-[1.85] text-charcoal"
        >
          見直してきたシャンプーも、スキンケアも。
          <br />
          でも、<em className="font-medium not-italic text-beige-dk">「水」</em>だけは、変えていなかった。
        </Reveal>
      </div>
    </section>
  );
}
