import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: "🔧",
    title: "設置・撤去は専門スタッフ対応",
    desc: "大掛かりな工事は不要。専門スタッフが設置から撤去まで対応します。サロンの営業に支障をきたしません。",
  },
  {
    icon: "💬",
    title: "導入後もサポートが続きます",
    desc: "使い方のご相談、メンテナンスのご案内まで、担当がしっかりフォロー。一人で悩まなくて大丈夫です。",
  },
  {
    icon: "📋",
    title: "導入事例をご紹介できます",
    desc: "「実際に使っているサロンの声を聞きたい」というご要望にもお答えします。DMでお気軽にどうぞ。",
  },
];

export function Support() {
  return (
    <section id="support" className="bg-cream">
      <div className="mx-auto max-w-[520px] px-7 py-20 text-center">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          安心のサポート体制
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-8 font-serif text-[21px] font-normal leading-[1.7]">
          導入のハードルは、
          <br />
          できる限り下げました。
        </Reveal>

        <div className="flex flex-col gap-3">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={((i + 1) as 1 | 2 | 3 | 4)}
              className="flex items-start gap-4 rounded-md border border-[var(--line-soft)] bg-white px-5 py-[22px] text-left"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige text-base text-beige-dk">
                {c.icon}
              </div>
              <div>
                <div className="mb-1 text-[14px] font-medium">{c.title}</div>
                <div className="text-[12.5px] leading-[1.75] text-mid">
                  {c.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
