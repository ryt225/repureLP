import { SafeImage } from "@/components/ui/SafeImage";

const badges = ["塩素除去", "ウルトラファインバブル", "W効果", "1週間無料体験"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-[60px]"
    >
      {/* Fallback gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,.5), transparent 40%), radial-gradient(circle at 70% 60%, rgba(216,213,206,.35), transparent 45%), linear-gradient(135deg, #EEEBE5 0%, #E8DFD0 55%, #D8D5CE 100%)",
        }}
      />
      {/* Hero image */}
      <SafeImage
        src="/assets/hi-ro-.jpg"
        alt="シャンプー中の子犬"
        loading="eager"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      {/* Overlay gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(170deg, rgba(250,247,242,0.15) 0%, transparent 45%), linear-gradient(to bottom, rgba(250,247,242,0) 40%, rgba(250,247,242,0.96) 100%)",
        }}
      />
      {/* Water ripple decoration */}
      <div className="anim-ripple absolute -bottom-[60px] -right-[60px] z-[1] h-[260px] w-[260px] rounded-full border border-[rgba(138,126,107,0.2)]">
        <span className="anim-ripple absolute inset-5 rounded-full border border-[rgba(138,126,107,0.14)]" style={{ animationDelay: "1s" }} />
        <span className="anim-ripple absolute inset-[45px] rounded-full border border-[rgba(138,126,107,0.10)]" style={{ animationDelay: "2s" }} />
      </div>
      {/* Tiny bubbles */}
      <span
        className="anim-float-up absolute z-[1] rounded-full"
        style={{
          width: 10,
          height: 10,
          left: "18%",
          bottom: "40%",
          animationDelay: "0.5s",
          background: "rgba(255,255,255,0.55)",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.8)",
        }}
      />
      <span
        className="anim-float-up absolute z-[1] rounded-full"
        style={{
          width: 6,
          height: 6,
          left: "30%",
          bottom: "55%",
          animationDelay: "1.8s",
          background: "rgba(255,255,255,0.55)",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.8)",
        }}
      />
      <span
        className="anim-float-up absolute z-[1] rounded-full"
        style={{
          width: 8,
          height: 8,
          left: "72%",
          bottom: "35%",
          animationDelay: "3s",
          background: "rgba(255,255,255,0.55)",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.8)",
        }}
      />
      <span
        className="anim-float-up absolute z-[1] rounded-full"
        style={{
          width: 4,
          height: 4,
          left: "55%",
          bottom: "62%",
          animationDelay: "2s",
          background: "rgba(255,255,255,0.55)",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.8)",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <span
          className="anim-fade-up mb-[22px] block font-latin text-[11px] uppercase tracking-[0.22em] text-beige-dk"
          style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
        >
          For Grooming Salon &nbsp;|&nbsp; Plus Edition
        </span>
        <h1
          className="anim-fade-up font-serif text-[clamp(28px,7vw,40px)] font-light leading-[1.55] tracking-[0.03em] text-charcoal"
          style={{ animationDelay: "0.5s" }}
        >
          やさしさは、
          <br />
          <em className="not-italic text-beige-dk">泡と水から、生まれる。</em>
        </h1>
        <p
          className="anim-fade-up mt-6 text-[13.5px] leading-[1.9] text-mid"
          style={{ animationDelay: "0.75s" }}
        >
          塩素を、抜く。バブルで、包む。
          <br />
          見えないところまで、ちゃんと届ける水へ。
        </p>
        <div
          className="anim-fade-up mt-7 flex flex-wrap gap-2"
          style={{ animationDelay: "1s" }}
        >
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-[20px] border border-beige-dk bg-white/55 px-3 py-[5px] text-[10.5px] tracking-[0.06em] text-beige-dk backdrop-blur-sm"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="anim-fade-up mt-9" style={{ animationDelay: "1.1s" }}>
          <a
            href="#trial"
            className="inline-block rounded-sm bg-charcoal px-9 py-4 text-[13px] font-medium tracking-[0.1em] text-white no-underline transition-colors duration-200 hover:bg-beige-dk active:scale-[0.98]"
          >
            まず1週間、体験してみる
          </a>
        </div>
      </div>
    </section>
  );
}
