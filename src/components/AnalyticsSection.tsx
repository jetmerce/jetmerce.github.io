import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CountUp = ({ end, prefix = "", suffix = "", decimals = 0 }: { end: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, isVisible]);

  return (
    <div ref={ref} className="text-5xl font-bold text-foreground">
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  );
};

const AnalyticsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 flex flex-col items-center">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">Real Results</h2>
          <h3 className="text-4xl md:text-5xl font-bold mt-2">Proven Analytics</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real data from ecommerce brands who implemented the conversion and retention systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors animate-in fade-in slide-in-from-bottom" style={{ animationDelay: "0ms" }}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Online Store</div>
              <CountUp end={145} prefix="+" suffix="%" />
              <div className="text-primary font-medium">in Conversion Rate</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors animate-in fade-in slide-in-from-bottom" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Ecommerce Brand</div>
              <CountUp end={3.2} decimals={1} suffix="x" />
              <div className="text-primary font-medium">Customer Lifetime Value</div>
            </CardContent>
          </Card>
          <Card className="border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors animate-in fade-in slide-in-from-bottom" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Retail Brand</div>
              <CountUp end={12} prefix="$" suffix="k+" />
              <div className="text-primary font-medium">Recovered Revenue</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;