import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Search,
  Star,
  Users,
  Zap,
  Calendar,
  BarChart2,
  MapPin,
  Database,
  Globe,
  MessageSquare,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- Reusable fade-in hook ---------- */
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

/* ---------- Pain points ---------- */
const pains = [
  { icon: <Search className="w-5 h-5" />, text: "People can't find me when they search online." },
  { icon: <MessageSquare className="w-5 h-5" />, text: "I rely on word of mouth but it's not consistent." },
  { icon: <Globe className="w-5 h-5" />, text: "I have a website but it's not bringing in customers." },
  { icon: <Star className="w-5 h-5" />, text: "I don't have time to manage reviews or social media." },
  { icon: <BarChart2 className="w-5 h-5" />, text: "I tried ads but wasted money with nothing to show." },
  { icon: <RefreshCw className="w-5 h-5" />, text: "New customers come once and I never hear from them again." },
];

/* ---------- Services ---------- */
const services = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Search Engine Listing & Local SEO",
    what: "Getting found on Google, Bing and Maps.",
    how: "We set up and optimise your Google Business Profile, target local keywords, and get you ranking in the Local Map Pack so customers searching nearby find you first.",
    without: "Without this, your competitors show up while you stay invisible — even if your business is better.",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Business Directory Listings",
    what: "Getting listed and optimised across top directories.",
    how: "We place and optimise your business on Yelp, TripAdvisor, Facebook, Apple Maps, Bing Places and more. Consistent listings build trust and improve your search rankings.",
    without: "Inconsistent or missing listings confuse Google and erode customer trust before they even visit.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Online Reputation Management",
    what: "Monitoring reviews and building a 5-star reputation.",
    how: "We monitor every review platform, help you generate more positive reviews, respond professionally to feedback, and protect your brand from negative press.",
    without: "One unanswered bad review can cost you dozens of new customers.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Lead Generation",
    what: "Systems to attract and capture potential customers.",
    how: "We build targeted landing pages, social funnels and lead capture forms designed to turn online interest into real enquiries you can follow up.",
    without: "Traffic without a capture system means you're paying for strangers who leave and never return.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Collection & Follow-Up",
    what: "Collecting customer data and nurturing leads automatically.",
    how: "We set up systems to capture customer information and then run automated email and SMS follow-up sequences that keep prospects warm and convert them over time.",
    without: "Most leads need multiple touchpoints before buying. Without follow-up, you're leaving sales on the table every single day.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Automation & AI Systems",
    what: "Email automation, SMS reminders, AI chatbots and CRM workflows.",
    how: "We implement smart automation and AI-powered tools that handle repetitive tasks, respond to enquiries instantly and keep your pipeline moving without manual effort.",
    without: "Doing everything manually limits your growth and drains your energy on tasks that a system can handle.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Appointment Setting",
    what: "Online booking integrated with your website and Google.",
    how: "We build and connect booking systems directly into your website and Google profile, with automated reminders to reduce no-shows and keep your calendar full.",
    without: "If booking is difficult or only by phone call, a large percentage of potential clients simply won't bother.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Search Engine Ads (Google Ads)",
    what: "Professionally managed Google Ads for immediate visibility.",
    how: "We set up, manage and optimise Google Ads campaigns that put your business at the top of search results the moment someone looks for what you offer nearby.",
    without: "Without proper management, ad budgets are wasted on broad audiences that never convert into customers.",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Google Analytics & Website Integration",
    what: "Full setup so you know exactly what is working.",
    how: "We integrate Google Analytics properly with your site so you can track visitors, understand where they come from, and make data-driven decisions instead of guessing.",
    without: "Without tracking, you have no idea what is working, what isn't, and where to focus your energy and budget.",
  },
];

/* ---------- Self-assessment questions ---------- */
const questions = [
  "If someone searches your business type near me right now, does your business show up on the first page?",
  "Do you have at least 20 or more genuine Google reviews, and are you actively responding to them?",
  "When a potential customer visits your website, can they easily book, call, or buy from you within 30 seconds?",
  "Do you have a system that automatically follows up with leads and past customers, without you doing it manually?",
  "Do you know exactly how many visitors come to your website each week, and where they come from?",
];

/* ---------- Retention cards ---------- */
const retentionCards = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Email follow-up sequences",
    desc: "Stay in touch with past customers automatically so your business stays top of mind.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Loyalty & reward systems",
    desc: "Give customers a real reason to come back again and again, not just once.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Re-engagement campaigns",
    desc: "Win back customers who haven't visited in a while with targeted, personal outreach.",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Tracking & insights",
    desc: "See what is working so you can double down on what drives the most returns.",
  },
];

/* ---------- SERVICE ACCORDION ITEM ---------- */
const ServiceItem = ({ service, idx }: { service: typeof services[0]; idx: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30"
      style={{ transitionDelay: `${idx * 0.04}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(15,110,86,0.12)", color: "#0F6E56" }}
          >
            {service.icon}
          </span>
          <span className="font-semibold text-foreground pr-2 break-words text-sm sm:text-base">{service.title}</span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 pt-3 bg-card border-t border-border/40 space-y-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">What it is: </span>
            {service.what}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">How it helps you: </span>
            {service.how}
          </p>
          <p className="text-sm text-muted-foreground border-l-2 pl-3" style={{ borderColor: "#0F6E56" }}>
            <span className="font-semibold" style={{ color: "#0F6E56" }}>Without it: </span>
            {service.without}
          </p>
        </div>
      )}
    </div>
  );
};

/* ========== PAGE ========== */
const LocalBusinesses = () => {
  // SEO meta tags
  useEffect(() => {
    document.title = "Jetmerce | Digital Marketing for Local Businesses — Get Found, Grow & Keep Customers";
    const setMeta = (name: string, content: string, prop = false) => {
      const selector = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Is your local business invisible online? Jetmerce helps local businesses get found on Google, manage their reputation, generate leads, and grow with smart digital marketing. Book a free strategy call today.");
    setMeta("keywords", "local business marketing, local SEO, Google Business Profile optimisation, reputation management, lead generation for local businesses, digital marketing for small businesses, appointment setting, Google Ads for local business, business directory listings");
    setMeta("og:title", "Is Your Local Business Hard to Find Online? Let's Fix That — Jetmerce", true);
    setMeta("og:description", "Jetmerce helps local businesses get found on Google, generate more leads, and keep customers coming back. See exactly how we do it, and book a free strategy call.", true);
    setMeta("og:url", "https://jetmerce.vibepreview.com/local-businesses", true);
    setMeta("twitter:title", "Is Your Local Business Hard to Find Online? Let's Fix That — Jetmerce");
    setMeta("twitter:description", "Jetmerce helps local businesses get found on Google, generate more leads, and keep customers coming back. See exactly how we do it, and book a free strategy call.");
    const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", "https://jetmerce.vibepreview.com/local-businesses");
    return () => {
      document.title = "Jetmerce | Digital Marketing for Online Businesses & Local Businesses";
      if (canonical) canonical.setAttribute("href", "/");
    };
  }, []);

  const hero = useFadeIn(0.1);
  const pains = useFadeIn(0.1);
  const servicesSection = useFadeIn(0.1);
  const questions = useFadeIn(0.1);
  const retention = useFadeIn(0.1);
  const cta = useFadeIn(0.1);

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(15,110,86,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          ref={hero.ref}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
            hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1 mb-6"
            style={{
              background: "rgba(15,110,86,0.1)",
              color: "#0F6E56",
              border: "1px solid rgba(15,110,86,0.3)",
            }}
          >
            Local Business Growth
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            You built a great business.{" "}
            <span style={{ color: "#0F6E56" }}>
              Let's make sure the internet knows it.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Local customers are searching online right now. We help local businesses get found, get more bookings, and grow with confidence, without the confusion of doing it all alone.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 md:px-8 py-4 md:py-6 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 h-auto w-full sm:w-auto"
            style={{ background: "#0F6E56" }}
          >
            <Link to="/audit" className="flex items-center justify-center gap-2 text-center whitespace-normal">
              <span>Let's talk about your business</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">No obligation. No confusing tech talk.</p>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-24 bg-secondary/40 border-y border-border/50">
        <div
          ref={pains.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
            pains.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Does any of this sound familiar?
            </h2>
            <p className="text-muted-foreground text-lg">
              You are not alone. These are the exact problems we solve every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <Search className="w-5 h-5" />, text: "People can't find me when they search online." },
              { icon: <MessageSquare className="w-5 h-5" />, text: "I rely on word of mouth but it's not consistent." },
              { icon: <Globe className="w-5 h-5" />, text: "I have a website but it's not bringing in customers." },
              { icon: <Star className="w-5 h-5" />, text: "I don't have time to manage reviews or social media." },
              { icon: <BarChart2 className="w-5 h-5" />, text: "I tried ads but wasted money with nothing to show." },
              { icon: <RefreshCw className="w-5 h-5" />, text: "New customers come once and I never hear from them again." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/60 shadow-sm"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(15,110,86,0.1)", color: "#0F6E56" }}
                >
                  {item.icon}
                </span>
                <p className="text-sm text-foreground font-medium leading-relaxed pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24">
        <div
          ref={servicesSection.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            servicesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1 mb-4"
              style={{ background: "rgba(15,110,86,0.1)", color: "#0F6E56", border: "1px solid rgba(15,110,86,0.3)" }}
            >
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              What we do, and why it matters for your business
            </h2>
            <p className="text-muted-foreground">
              Click any service to see what it is, how it helps, and what you are missing without it.
            </p>
          </div>
          <div className="space-y-3">
            {services.map((s, i) => (
              <ServiceItem key={i} service={s} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SELF-ASSESSMENT ── */}
      <section className="py-24 bg-secondary/40 border-y border-border/50">
        <div
          ref={questions.ref}
          className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
            questions.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              A quick question for you...
            </h2>
            <p className="text-muted-foreground">
              Answer honestly. This helps you see exactly where the gaps are.
            </p>
          </div>
          <div className="space-y-4 mb-10">
            {[
              "If someone searches your business type near me right now, does your business show up on the first page?",
              "Do you have at least 20 or more genuine Google reviews, and are you actively responding to them?",
              "When a potential customer visits your website, can they easily book, call, or buy from you within 30 seconds?",
              "Do you have a system that automatically follows up with leads and past customers, without you doing it manually?",
              "Do you know exactly how many visitors come to your website each week, and where they come from?",
            ].map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/60 shadow-sm"
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{ background: "rgba(15,110,86,0.12)", color: "#0F6E56" }}
                >
                  {i + 1}
                </span>
                <p className="text-foreground text-sm leading-relaxed pt-1">{q}</p>
              </div>
            ))}
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "rgba(15,110,86,0.08)", border: "1px solid rgba(15,110,86,0.25)" }}
          >
            <p className="text-foreground font-semibold mb-5 text-lg leading-relaxed">
              If you answered <em>no</em> or <em>not sure</em> to any of these, there is real money being left on the table. Let's fix that together.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 md:px-8 py-4 md:py-6 font-semibold text-primary-foreground h-auto w-full sm:w-auto mt-2"
              style={{ background: "#0F6E56" }}
            >
              <Link to="/audit" className="flex items-center justify-center gap-2 text-center whitespace-normal">
                <span>Book your free strategy call</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER RETENTION ── */}
      <section className="py-24">
        <div
          ref={retention.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
            retention.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Getting customers is one thing. Keeping them is another.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Most businesses focus on new customers, but your biggest growth lever is often people who already bought from you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {retentionCards.map((card, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-all hover:border-primary/30 flex flex-col gap-3"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(15,110,86,0.12)", color: "#0F6E56" }}
                >
                  {card.icon}
                </span>
                <h4 className="font-semibold text-foreground text-sm">{card.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-secondary/40 border-t border-border/50">
        <div
          ref={cta.ref}
          className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
            cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Ready to grow your local business online?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            You focus on running your business. We'll handle getting more people through your door, online and offline. Let's start with a free, no-obligation strategy discussion.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 md:px-10 py-4 md:py-6 text-base font-semibold text-primary-foreground shadow-xl transition-all hover:opacity-90 h-auto w-full sm:w-auto"
            style={{ background: "#0F6E56" }}
          >
            <Link to="/audit" className="flex items-center justify-center gap-2 text-center whitespace-normal">
              <span>Book a free strategy call today</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-5 flex items-start sm:items-center justify-center gap-2 text-left sm:text-center">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" style={{ color: "#0F6E56" }} />
            <span>No long-term contracts required. No confusing tech talk. Just results.</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default LocalBusinesses;
