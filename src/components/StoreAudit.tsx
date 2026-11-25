import { Calendar as CalendarIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StoreAudit = () => {
  return (
    <section id="audit" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
            <CalendarIcon className="w-4 h-4" />
            Direct Consultation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Book An Audit
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's jump on a 30 minute call. We'll identify the exact bottlenecks holding back your conversions and outline a clear action plan.
          </p>
          
          <Button asChild size="lg" className="rounded-full px-6 sm:px-10 h-auto py-4 sm:py-0 sm:h-16 text-lg sm:text-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 group w-full sm:w-auto">
            <a href="https://calendar.app.google/WJgBsDdgfoqfF2q57" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 whitespace-normal text-center">
              <span>Book on Google Calendar</span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreAudit;
