import { CheckCircle2, Store, Search, LayoutGrid, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "You send your website link",
      description: "Start by sharing your Shopify, Etsy, Gumroad, or marketplace website URL."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "I review your website",
      description: "I perform a deep dive audit of your current conversion and retention structure."
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "I identify limiting factors",
      description: "I find the specific gaps where you're losing customers and revenue."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "We structure for performance",
      description: "I implement systems that guide visitors to buy and keep them coming back."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Process</h2>
            <h3 className="text-5xl font-bold leading-tight">Simple Steps To <br />Better Performance</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I follow a systematic approach to identify revenue leaks and implement growth structures that actually work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your website is unique, but the psychology of conversion and retention is universal. We'll find what works for you.
            </p>
            
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                More conversions
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                More repeat customers
              </div>
              <div className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Higher revenue from same traffic
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;