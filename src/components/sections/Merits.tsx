import { Reveal } from "@/components/ui/Reveal";

const merits = [
  {
    num: "01",
    title: "ワンちゃんへのやさしさ",
    desc: "犬の皮膚は人の約1/3の薄さ。塩素を抜き、細かな泡で包むことで、デリケートな肌への負担に配慮したケアを実現します。",
  },
  {
    num: "02",
    title: "仕上がりの質が変わる",
    desc: "ウルトラファインバブルが被毛のすみずみまで届くことで、乾燥後の手触りやふんわり感に違いを感じるサロンが増えています。",
  },
  {
    num: "03",
    title: "サロンの差別化・単価アップ",
    desc: "「水にまでこだわるサロン」として、飼い主さんへの説明力・信頼感・高付加価値メニュー設定の根拠になります。",
  },
  {
    num: "04",
    title: "スタッフの手荒れ軽減にも",
    desc: "塩素除去によりスタッフの肌への刺激も見直せます。働きやすい環境づくりにもつながります。",
  },
  {
    num: "05",
    title: "既存メニューの底上げに",
    desc: "塩素を抜いた水＋ウルトラファインバブルは、炭酸泉や泥パックなど既存メニューとの相性も高まり、サロン全体の価値向上へ。",
  },
];

export function Merits() {
  return (
    <section id="merits" className="bg-charcoal text-beige-lt">
      <div className="mx-auto max-w-[520px] px-7 py-20 text-center">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige">
          Why Re:pure&nbsp;bubble+
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-11 font-serif text-[22px] font-light leading-[1.7] text-beige-lt">
          水を変えると、
          <br />
          サロン全体が変わっていく。
        </Reveal>
        <div className="flex flex-col gap-0.5">
          {merits.map((m, i) => (
            <Reveal
              key={m.num}
              delay={i < 4 ? ((i + 1) as 1 | 2 | 3 | 4) : 0}
              className="border border-white/10 bg-white/[0.04] px-6 py-7 text-left transition-colors hover:bg-[rgba(232,223,208,0.10)]"
            >
              <div className="mb-2 font-latin text-[32px] font-light leading-none text-[rgba(232,223,208,0.40)]">
                {m.num}
              </div>
              <div className="mb-2 font-serif text-[16px] font-normal text-beige-lt">
                {m.title}
              </div>
              <div className="text-[13px] leading-[1.85] text-[rgba(242,237,227,0.65)]">
                {m.desc}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
