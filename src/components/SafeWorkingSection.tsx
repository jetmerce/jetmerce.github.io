import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const SafeWorkingSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary/20 border border-border/50 rounded-[3rem] p-10 md:p-16 text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">
              Why should you feel safe working with me
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mt-4">Why this works (and why businesses stay)</h3>
          </div>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto space-y-6">
            <p>Most websites don't have a traffic problem, they have a structure problem.</p>
            <p>What happens after someone lands on your website, and what happens after they buy, is what actually determines your results.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium">
            <div className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">Built on clarity, not assumptions</div>
            <div className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">Structured as a complete system</div>
            <div className="bg-background px-4 py-2 rounded-xl border border-border shadow-sm">Focused on consistent, long term revenue</div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all group">
              <Link to="/process" className="flex items-center gap-2">
                See how it works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-border hover:bg-secondary transition-all">
              <Link to="/work">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeWorkingSection;