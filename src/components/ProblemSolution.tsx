import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, RefreshCcw, TrendingUp } from "lucide-react";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "Visitors browsing but not buying",
      description: "You're getting traffic, but your bank account isn't feeling it. Most visitors leave without taking action."
    },
    {
      icon: <RefreshCcw className="w-10 h-10 text-primary" />,
      title: "Customers buying once and not returning",
      description: "You're missing out on the easiest revenue: repeat sales. One off buyers are a leaky bucket problem."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Revenue depending only on new traffic",
      description: "Constantly chasing new visitors is exhausting and expensive. You need a system that builds on itself."
    }
  ];

  const systems = [
    {
      id: "01",
      title: "Visitor to Buyer Conversion System",
      description: "I optimize website pages and structure so visitors are clearly guided to make a purchase instead of leaving.",
      features: ["UX Audit", "Copy Optimization", "Social Proof Strategy"]
    },
    {
      id: "02",
      title: "Customer Retention & Repeat Revenue System",
      description: "I build systems that bring customers back, recover abandoned buyers, and generate consistent repeat sales.",
      features: ["Email Automation", "Loyalty Loops", "Abandoned Cart Recovery"]
    }
  ];

  return (
    <section id="systems" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4 flex flex-col items-center">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">The Challenge</h2>
          <h3 className="text-4xl md:text-5xl font-bold mt-2">Stop Leaving Revenue On The Table</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most websites have the traffic, but they lack the structure to turn that traffic into a sustainable business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {problems.map((prob, i) => (
            <Card key={i} className="bg-background border-border/50 hover:border-primary/30 transition-all group overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="p-4 bg-secondary rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {prob.icon}
                </div>
                <h4 className="text-xl font-bold">{prob.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {prob.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-12">
          <div className="text-center space-y-4 flex flex-col items-center">
            <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">My Systems</h2>
            <h3 className="text-4xl md:text-5xl font-bold mt-2">Structured For Growth</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((system) => (
              <div key={system.id} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-background border border-border p-10 rounded-[2rem] h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <span className="text-6xl font-black text-muted/20 font-mono">{system.id}</span>
                    <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{system.title}</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {system.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {system.features.map(f => (
                        <span key={f} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium border border-border">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <LeadMagnetIntercept>
                    <button className="mt-8 pt-8 border-t border-border flex items-center text-primary font-bold group-hover:gap-4 gap-2 transition-all w-full text-left">
                      Learn more <ArrowRight className="w-5 h-5" />
                    </button>
                  </LeadMagnetIntercept>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;