import Section from "@/components/Section";

export default function Personal() {
  return (
    <Section>
      <div className="mb-10 max-w-2xl">
        <p className="text-[14px] md:text-[15px] leading-[1.9] font-mono mb-6">
          I'm Egyptian, American, and Canadian — three passports, one upbringing. I grew up in Alexandria, Egypt
          and spend most of my childhood there, where I attended an American school and met some of my good friends
          to this day.
    
        </p>

        <p className="text-[14px] md:text-[15px] leading-[1.9] font-mono mb-6">
          After I graduated high school, I decided to study at McGill. McGill was a deliberate choice. Strong academic record, serious engineering program, and Montreal 
          is one of the best student cities to live in. The winters were brutal but were worth it.
        </p>

        <p className="text-[14px] md:text-[15px] leading-[1.9] font-mono mb-6">
          After graduating I moved to Dubai. I wanted to be near home and work in a region I actually understood and cared about. As part of consulting, I used to travel frequently to Riyadh. I really enjoyed the city and culture, which was a big part of why I eventually made the move.
        </p>

        <p className="text-[14px] md:text-[15px] leading-[1.9] font-mono mb-6">
          I'm now based in Riyadh, working at Oliver Wyman on different projects including AI strategy and public sector transformation 
          across the GCC. What keeps me here, beyond the work, is the sense that things are actually being 
          built. There's a window open right now in the region and I want to be part of what goes through it.
        </p>

        <h2 className="text-[11px] font-mono text-muted uppercase tracking-wider mb-6">Outside of work</h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <span className="text-[18px]">🏂</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Snowboarding</p>
              <p className="text-[11px] font-mono text-muted italic">started snowboarding in my first year at McGill in Canada</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[18px]">📚</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Reading</p>
              <p className="text-[11px] font-mono text-muted italic">mostly science and autobiographies</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[18px]">🌊</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Wakeboarding</p>
              <p className="text-[11px] font-mono text-muted italic">the most fun watersports activity</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[18px]">✈️</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Travelling</p>
              <p className="text-[11px] font-mono text-muted italic">chasing new cultures through eating a lot</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[18px]">🏃</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Running</p>
              <p className="text-[11px] font-mono text-muted italic">where most of my thinking actually happens</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[18px]">📈</span>
            <div>
              <p className="text-[13px] font-mono text-foreground">Investing</p>
              <p className="text-[11px] font-mono text-muted italic">long-term investing with some short-term investments</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}