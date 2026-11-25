import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedItem = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const OfferStack = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 flex flex-col items-center">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">The Ultimate Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold mt-2">Everything You Get</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              "Complete Website Conversion Audit",
              "Customer Winback Email Sequence",
              "Retention System Setup",
              "Post Purchase Follow Up Framework",
              "1 on 1 Strategy Consultation"
            ].map((item, i) => (
              <AnimatedItem key={i} delay={i * 150}>
                <div className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border/50 shadow-sm hover:scale-[1.02] hover:shadow-md transition-all cursor-default">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>

          <Card className="border-primary/30 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
            <CardContent className="p-10 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-bold mb-4">
                  <Zap className="w-4 h-4" /> Limited Availability
                </div>
                <h4 className="text-3xl font-bold">The Conversion Catalyst</h4>
                <p className="text-muted-foreground">Transform your ecommerce website into a revenue-generating machine.</p>
              </div>

              <div className="p-6 bg-secondary/50 rounded-2xl border border-border flex items-start gap-4">
                <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Results Focused Assurance</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can expect a stronger website structure that naturally improves customer retention, recovers lost carts, and positions you for more consistent sales without relying entirely on new traffic.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;