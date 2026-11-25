import { useEffect, useRef, useState } from "react";
import { ShoppingBag, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeHelp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/40 border-y border-border/50 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1 mb-4 bg-primary/5">
            Who We Help
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Built for two types of businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you sell online or serve your local community, we have a solution built for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — Digital Sellers */}
          <div
            className={`group relative rounded-2xl border border-border/60 bg-card p-6 md:p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-all duration-500 hover:border-primary/40 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ecommerce Brands & Online Stores
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you're launching a new ecommerce business or looking to improve an existing one, we help build the systems that support customer acquisition, conversion, retention, and long-term growth.
              </p>
            </div>
            <div className="mt-auto">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 group-hover:shadow-primary/30 transition-all w-full sm:w-auto h-auto py-3 md:py-4 px-4 md:px-6"
              >
                <Link to="/digital-businesses" className="flex items-center justify-center gap-2 text-center h-full">
                  <span className="whitespace-normal leading-tight text-sm md:text-base">See How We Help Ecommerce Brands</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Card 2 — Local Businesses */}
          <div
            className={`group relative rounded-2xl border-2 bg-card p-6 md:p-8 flex flex-col gap-5 shadow-sm hover:shadow-lg transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: "0.2s",
              borderColor: "#0F6E56",
            }}
          >
            {/* subtle tinted top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: "#0F6E56" }}
            />
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(15,110,86,0.12)", color: "#0F6E56" }}
            >
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Local Businesses
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You have a physical location or serve customers in your area. We help you get found online, manage your reputation, generate leads, and keep customers coming back so your business thrives in your community.
              </p>
            </div>
            <div className="mt-auto">
              <Button
                asChild
                className="rounded-full text-primary-foreground shadow-md transition-all hover:opacity-90 w-full sm:w-auto h-auto py-3 md:py-4 px-4 md:px-6"
                style={{ background: "#0F6E56" }}
              >
                <Link to="/local-businesses" className="flex items-center justify-center gap-2 text-center h-full">
                  <span className="whitespace-normal leading-tight text-sm md:text-base">See how we help local businesses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
