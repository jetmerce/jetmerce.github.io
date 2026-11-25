import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex w-fit items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary border border-border text-[11px] sm:text-xs md:text-sm font-medium text-muted-foreground animate-pulse-subtle whitespace-nowrap">
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-primary"></span>
            </span>
            <span className="inline-block animate-wave origin-bottom-right shrink-0">👋</span>
            <span className="truncate">Welcome, Let&apos;s Explore What&apos;s Possible</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            Get More Customers, <span className="text-primary">More Sales</span>, And More <span className="italic">Repeat Business</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            I help ecommerce brands and local businesses turn their website and online presence into a reliable source of customers, sales, and recurring revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all group shadow-xl shadow-primary/20 w-full sm:w-auto">
              <Link to="/work" className="flex items-center justify-center gap-2">
                Explore projects
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
            <LeadMagnetIntercept>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-border hover:bg-secondary transition-all w-full sm:w-auto">
                <span>Let's Talk</span>
              </Button>
            </LeadMagnetIntercept>
          </div>

          <p className="text-sm text-muted-foreground/60 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            No pressure. Just a quick conversation.
          </p>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-secondary shadow-2xl bg-secondary/20">
<img
              src={asset("670b3ac7-f82a-4a9a-a43a-abd0ab308849.png")}
              alt="Joshua Oluwatobiloba Bamikole"
              className="w-full aspect-[4/5] object-cover object-top"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 z-20 bg-background/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-primary/20 animate-bounce duration-[3000ms] flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px]">
            <div className="text-2xl sm:text-3xl font-bold text-primary">CRO</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">Specialist</div>
          </div>
          
          <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 z-20 bg-background/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-primary/20 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
            <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">SEO Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;