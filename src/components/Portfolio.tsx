import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { ExternalLink, MousePointer2, Mail, Layout, TrendingUp, Workflow, Smartphone } from "lucide-react";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const caseStudies = [
    {
      id: "checkout",
      title: "Redesigning the Checkout Flow for a $1M+ Course Seller",
      category: "Conversion Optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      problem: "The client had a high cart abandonment rate due to a clunky, multi step checkout process that confused buyers.",
      strategy: "I simplified the checkout into a seamless one page flow, removed unnecessary form fields, and added trust badges near the payment button.",
      execution: ["One page checkout redesign", "Trust indicators implementation", "Frictionless payment flow"],
      win: "Increased completed sales by 15% within the first 30 days.",
      image: asset("cfa76256-b85f-4218-83c1-7b94c850121c.png")
    },
    {
      id: "onboarding",
      title: "Automating Post,Purchase Onboarding",
      category: "Automation & Systems",
      icon: <Workflow className="w-5 h-5" />,
      problem: "The seller was manually emailing access links and onboarding documents to every new buyer, causing delays and frustration.",
      strategy: "I built an automated logic map using Zapier and their email CRM to instantly deliver digital assets and trigger a 5-day welcome sequence.",
      execution: ["Zapier/Make workflow diagrams", "Automated email sequences", "Instant digital delivery setup"],
      win: "Went from manual fulfillment to a 100% automated system, saving 15+ hours a week and eliminating customer support tickets about missing files.",
      image: asset("177aafed-48a1-4567-a4a1-689331c5e952.png")
    },
    {
      id: "ebook",
      title: "E,Book Sales Page Revamp",
      category: "UX & Strategy",
      icon: <Smartphone className="w-5 h-5" />,
      problem: "The client had a great e,book but a 70% bounce rate on their sales page, especially on mobile devices.",
      strategy: "I implemented a 'Tripwire' offer, restructured the page hierarchy to focus on the core benefits, and completely simplified the mobile UI.",
      execution: ["Mobile UI redesign", "Tripwire funnel strategy", "Copywriting & layout optimization"],
      win: "Drastically reduced bounce rate and resulted in a 40% increase in overall revenue.",
      image: asset("218135e7-ff95-403f-91ee-3457efc10be5.png")
    }
  ];

  const behanceProjects = [
    { title: "Full Etsy Shop Setup & Branding", image: asset("d6d022e9-f54b-4f1a-82ae-fdd542450d14.webp") },
    { title: "Etsy SEO & Ranking Optimization", image: asset("de857296-edc5-4ce2-85d8-f2deba655caf.webp") },
    { title: "Amazon KDP Keyword & Niche Research", image: asset("ebc2578d-2f30-4166-815f-eb40e0c50901.webp") },
    { title: "Amazon KDP Book Publishing & Marketing", image: asset("4b228e77-aafc-4cc9-b184-01b2e6af780b.webp") },
    { title: "High-Converting eBook Landing Page Design", image: asset("c84fa691-9207-441b-923f-691122f04264.webp") }
  ];

  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Real Results</h3>
            <p className="text-muted-foreground max-w-xl">
              I specialize in the structural elements that drive revenue. Here is how I've helped other digital product sellers.
            </p>
          </div>
          <LeadMagnetIntercept externalLink="https://www.behance.net/bamikolejoshuat">
            <Button variant="outline" className="h-12 px-6 rounded-full font-bold group border-primary/20 hover:bg-primary/5">
              View more on Behance <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </LeadMagnetIntercept>
        </div>

        <Tabs defaultValue="checkout" className="w-full mb-24">
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b border-border rounded-none h-auto p-0 mb-8 flex-nowrap">
            {caseStudies.map((study) => (
              <TabsTrigger 
                key={study.id} 
                value={study.id}
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-4 text-muted-foreground whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  {study.icon}
                  {study.category}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold">{study.title}</h4>
                  
                  <div className="space-y-6">
                    <div className="bg-background p-6 rounded-2xl border border-border">
                      <h5 className="font-bold text-primary mb-2">The Challenge</h5>
                      <p className="text-muted-foreground">{study.problem}</p>
                    </div>
                    
                    <div className="bg-background p-6 rounded-2xl border border-border">
                      <h5 className="font-bold text-primary mb-2">The Strategy</h5>
                      <p className="text-muted-foreground mb-4">{study.strategy}</p>
                      <h6 className="font-semibold text-sm mb-2">Execution:</h6>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {study.execution.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                      <h5 className="font-bold text-primary mb-2">The Win</h5>
                      <p className="font-medium">{study.win}</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-square md:aspect-auto md:h-[600px]">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">More from Behance</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behanceProjects.map((project, i) => (
              <LeadMagnetIntercept key={i} externalLink="https://www.behance.net/bamikolejoshuat">
                <div className="group cursor-pointer block rounded-2xl overflow-hidden border border-border relative aspect-square">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold flex items-center gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-medium">{project.title}</p>
                  </div>
                </div>
              </LeadMagnetIntercept>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
