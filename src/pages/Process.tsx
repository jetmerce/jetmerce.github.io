import { Layout } from "@/components/Layout";
import { LeadMagnetIntercept } from "@/components/LeadMagnetIntercept";
import { Button } from "@/components/ui/button";

const Process = () => {
  return (
    <Layout>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-32 px-6 text-center min-h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">Built on clarity, <span className="text-primary italic">not assumptions</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Before anything is improved, everything is understood. So every decision is made with clarity, not guesswork.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-muted-foreground">
          <span className="text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* SECTION 2 — CLARITY BEFORE COMMITMENT */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Clarity before commitment</h2>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>Most sellers are used to being offered solutions before fully understanding the problem. This process starts differently.</p>
            <p>It begins by identifying:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-foreground font-medium">
              <li>where visitors lose interest</li>
              <li>what creates hesitation</li>
              <li>what prevents customers from returning</li>
            </ul>
            <p>So any improvement made is based on what is actually happening, not assumptions.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRANSITION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">Not a collection of changes. A connected system.</h2>
          <p className="text-xl text-muted-foreground">
            Your website isn't improved in isolated parts. It's structured as a complete experience, from first visit to repeat purchase.
          </p>
        </div>
      </section>

      {/* SECTION 4 — SYSTEM GRID */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-3xl border border-border space-y-4">
            <h3 className="text-xl font-bold text-primary">How people arrive</h3>
            <p className="text-muted-foreground leading-relaxed">
              Traffic is only the starting point. What matters is what visitors see first, how quickly they understand your offer, and whether they feel confident to continue.
            </p>
          </div>
          <div className="bg-background p-8 rounded-3xl border border-border space-y-4">
            <h3 className="text-xl font-bold text-primary">How they decide</h3>
            <p className="text-muted-foreground leading-relaxed">
              Buyers don't just look, they evaluate. Clarity, positioning, and flow determine whether they move forward or leave without taking action.
            </p>
          </div>
          <div className="bg-background p-8 rounded-3xl border border-border space-y-4">
            <h3 className="text-xl font-bold text-primary">What happens after</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most websites stop at the first purchase. But long term growth comes from what happens next, whether customers return or disappear.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BUYER BEHAVIOUR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Built around buyer behaviour</h2>
          <div className="text-lg text-muted-foreground space-y-4">
            <p>Most websites are designed from the seller's perspective. This approach focuses on how buyers actually think:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-foreground font-medium">
              <li>what they notice first</li>
              <li>what builds trust</li>
              <li>what creates doubt</li>
              <li>what leads them to take action</li>
            </ul>
            <p>Understanding this is what changes how a website performs.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RETENTION */}
      <section className="py-24 px-6 bg-[#111b21] text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-primary">Revenue shouldn't restart from zero</h2>
          <div className="text-xl text-[#8696a0] space-y-6">
            <p>Without a structured retention system, every sale is a one time event. Customers buy once and don't come back, which means new sales always depend on new traffic.</p>
            <p>When properly structured:</p>
            <ul className="space-y-3 font-medium text-white">
              <li className="flex items-center gap-3"><span className="text-primary">✓</span> past customers return</li>
              <li className="flex items-center gap-3"><span className="text-primary">✓</span> incomplete purchases are recovered</li>
              <li className="flex items-center gap-3"><span className="text-primary">✓</span> revenue builds over time instead of resetting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CONSISTENCY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Designed for consistency</h2>
          <p className="text-xl text-muted-foreground">
            This isn't built for short spikes in sales. It's built for steady, reliable performance, where your website continues to convert and generate revenue over time.
          </p>
        </div>
      </section>

      {/* SECTION 8 — PROCESS */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold text-center">A clear, structured process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="text-sm font-bold text-primary mb-2">Step 01</div>
              <h3 className="text-xl font-bold mb-4">Review</h3>
              <p className="text-muted-foreground">A full breakdown of your website to identify what is affecting conversions and customer behaviour.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="text-sm font-bold text-primary mb-2">Step 02</div>
              <h3 className="text-xl font-bold mb-4">Insight</h3>
              <p className="text-muted-foreground">Clear explanation of what's happening, why it's happening, and where opportunities exist.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="text-sm font-bold text-primary mb-2">Step 03</div>
              <h3 className="text-xl font-bold mb-4">Direction</h3>
              <p className="text-muted-foreground">Defined improvements based on buyer behaviour and conversion flow.</p>
            </div>
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="text-sm font-bold text-primary mb-2">Step 04</div>
              <h3 className="text-xl font-bold mb-4">Implementation (if needed)</h3>
              <p className="text-muted-foreground">Turning those insights into a structured system that performs consistently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">See how this applies to your website</h2>
          <p className="text-xl text-muted-foreground">
            Start with a structured review and get a clear understanding of what's working, what isn't, and what can be improved.
          </p>
          <div className="pt-4">
            <LeadMagnetIntercept>
              <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                Send your website link
              </Button>
            </LeadMagnetIntercept>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;