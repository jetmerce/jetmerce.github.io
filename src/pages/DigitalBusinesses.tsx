import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  Mail,
  BarChart2,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Ecommerce Strategy & Positioning",
    desc: "We help new and growing brands define their structure, position their products effectively, and build a clear path for customer acquisition.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Conversion Optimization",
    desc: "We audit your customer journey to identify friction points, improving your website so more visitors successfully complete their purchases.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Customer Experience Improvement",
    desc: "We streamline the path to purchase, reducing cart abandonment and making it easier for visitors to navigate your online store.",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Customer Retention Systems",
    desc: "We set up automated systems that keep customers engaged after their first purchase, encouraging them to return and buy again.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Ecommerce Performance Reviews",
    desc: "We provide comprehensive reviews of your website's performance, highlighting clear opportunities to improve sales and user experience.",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Revenue Growth Systems",
    desc: "We build structured systems focused on increasing your average order value and maximizing the lifetime value of every customer.",
  },
];

const audiences = [
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Ecommerce Brands" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Online Stores" },
  { icon: <Users className="w-5 h-5" />, label: "Direct-to-Consumer" },
  { icon: <ShoppingBag className="w-5 h-5" />, label: "Retail Brands" },
  { icon: <Target className="w-5 h-5" />, label: "Boutique Stores" },
  { icon: <Zap className="w-5 h-5" />, label: "Product Creators" },
];

const painPoints = [
  "You are launching a new store and need a clear strategy to acquire customers.",
  "Your store gets traffic but sales remain inconsistent or unpredictable.",
  "Customers add products to cart but frequently abandon checkout.",
  "You want to improve product positioning to stand out in the market.",
  "Customers buy once but rarely return for a second purchase.",
  "You know there is potential to grow but aren't sure where to focus next.",
];

const DigitalBusinesses = () => {
  // SEO meta tags
  useEffect(() => {
    document.title = "Jetmerce | Digital Marketing for Ecommerce Brands & Online Stores";
    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Running an ecommerce brand or online store? Jetmerce helps you improve conversion, increase customer retention, and build systems that grow your revenue. Book a free strategy call.");
    setMeta("keywords", "ecommerce marketing, online store growth, ecommerce conversion optimization, customer retention, ecommerce revenue growth, product page optimization, marketing for ecommerce brands");
    setMeta("og:title", "Grow Your Ecommerce Brand — Jetmerce Has the Strategy & Systems for You", true);
    setMeta("og:description", "From conversion optimization to customer retention, Jetmerce helps ecommerce brands build a scalable, profitable online business. Start with a free call.", true);
    setMeta("og:url", "https://jetmerce.github.io/digital-businesses", true);
    setMeta("twitter:title", "Grow Your Ecommerce Brand — Jetmerce Has the Strategy & Systems for You");
    setMeta("twitter:description", "From conversion optimization to customer retention, Jetmerce helps ecommerce brands build a scalable, profitable online business. Start with a free call.");
    const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", "https://jetmerce.github.io/digital-businesses");
    return () => {
      document.title = "Jetmerce | Digital Marketing for Online Businesses & Local Businesses";
      if (canonical) canonical.setAttribute("href", "/");
    };
  }, []);

  const hero = useFadeIn(0.1);
  const audienceSection = useFadeIn(0.1);
  const painSection = useFadeIn(0.1);
  const servicesSection = useFadeIn(0.1);
  const ctaSection = useFadeIn(0.1);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          ref={hero.ref}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
            hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1 mb-6 bg-primary/5">
            ECOMMERCE BRANDS & ONLINE STORES
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Build A Stronger Ecommerce Brand And{" "}
            <span className="text-primary">Drive Consistent Revenue Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are launching a new ecommerce business or growing an existing store, we help build the systems you need. From ecommerce strategy and product positioning to conversion optimization and customer retention, we ensure your website is structured to acquire and keep customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all w-full sm:w-auto h-auto"
            >
              <Link to="/audit" className="flex items-center justify-center gap-2 text-center whitespace-normal">
                <span>Book a free strategy call</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 text-base font-semibold border-primary/30 text-foreground hover:bg-primary/5 transition-all w-full sm:w-auto h-auto"
            >
              <Link to="/work" className="flex items-center justify-center text-center whitespace-normal">
                <span>See our work</span>
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">No obligation. No confusing tech talk. Just a real conversation.</p>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-16 bg-secondary/40 border-y border-border/50">
        <div
          ref={audienceSection.ref}
          className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
            audienceSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-widest mb-8">
            Built for ecommerce brands across every platform
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {audiences.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 text-sm font-medium text-foreground shadow-sm"
              >
                <span className="text-primary">{a.icon}</span>
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-24">
        <div
          ref={painSection.ref}
          className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
            painSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1 mb-4 bg-primary/5">
              Sound Familiar?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              These are the problems we solve every day
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              If any of these describe your situation, you are in the right place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                </span>
                <p className="text-sm text-foreground leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-secondary/40 border-y border-border/50">
        <div
          ref={servicesSection.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
            servicesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1 mb-4 bg-primary/5">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Everything you need to grow your ecommerce brand
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We do not offer isolated tactics. We build connected systems that work together to bring in buyers and keep them coming back.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col gap-4"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded-full px-4 py-1 mb-4 bg-primary/5">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Simple. Clear. Results focused.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Send Your Website", desc: "Share your store URL and tell us about your goals." },
              { step: "02", title: "Store Review", desc: "We review your customer journey, product pages, messaging, and conversion opportunities." },
              { step: "03", title: "Growth Plan", desc: "We explain what is working, what is not, and where improvements can be made." },
              { step: "04", title: "Implementation", desc: "We help put the right systems in place to improve conversion and customer retention." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex gap-5">
                <span className="text-4xl font-black text-primary/20 leading-none flex-shrink-0">{item.step}</span>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-secondary/40 border-t border-border/50">
        <div
          ref={ctaSection.ref}
          className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
            ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Ready To Build Or Grow Your Ecommerce Brand?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Whether you're launching a new store or looking to improve an existing one, we'll review your website, customer journey, and growth opportunities to help identify your next best steps.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 md:px-10 py-4 md:py-6 text-base font-semibold bg-primary text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto h-auto"
          >
            <Link to="/audit" className="flex items-center justify-center gap-2 text-center whitespace-normal">
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-5 flex items-start sm:items-center justify-center gap-2 text-left sm:text-center">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>No long-term contracts. No confusing tech talk. Just results.</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalBusinesses;
