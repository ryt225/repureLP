import { Reveal } from "@/components/ui/Reveal";
import { FaqItem } from "@/components/ui/FaqItem";

const faqs = [
  {
    q: "設置に工事は必要ですか？",
    a: "大規模な工事は必要ありません。水道管に取り付ける「元付け型」のシステムです。設置・撤去は専門スタッフが行いますので、サロン側のご負担は最小限です。",
  },
  {
    q: "体験期間中にやめることはできますか？",
    a: "はい、1週間の無料体験期間中はいつでも撤去可能です。体験後に継続するかどうかをご判断いただく形ですので、まずは気軽にお試しください。",
  },
  {
    q: "従来モデルとの違いは何ですか？",
    a: "Re:pure bubble+ は、従来の塩素除去に加えて、ウルトラファインバブル（超微細な泡）を水に溶け込ませる機能を両立させたモデルです。\"抜く\"と\"包む\"のW設計で、ワンちゃんの負担への配慮と、仕上がりの質の両立を目指しています。",
  },
  {
    q: "どんなサロンに向いていますか？",
    a: "こだわりを大切にするサロン、肌トラブルの相談が多いサロン、差別化や単価向上を考えているサロンにとくにご好評いただいています。サロンの規模・施術メニューを問わずご相談いただけます。",
  },
  {
    q: "飼い主さんへの訴求はどうすればいいですか？",
    a: "「水にもこだわっています」という一言だけで、伝わる飼い主さんには深く刺さります。ご活用いただける案内素材やSNS用のコピー案もご用意しています。DMにてご相談ください。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-[var(--line-soft)] bg-white">
      <div className="mx-auto max-w-[520px] px-7 py-20 text-center">
        <Reveal as="span" className="mb-[14px] inline-block font-latin text-[11px] uppercase tracking-[0.2em] text-beige-dk">
          よくある質問
        </Reveal>
        <Reveal as="h2" delay={1} className="mb-8 font-serif text-[20px] font-normal">
          FAQ
        </Reveal>
        <div className="flex flex-col gap-0.5">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i < 4 ? ((i + 1) as 1 | 2 | 3 | 4) : 0}>
              <FaqItem question={f.q}>{f.a}</FaqItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
