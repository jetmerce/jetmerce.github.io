import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { submitToFormSubmit } from "@/lib/formSubmit";
import { toast } from "sonner";
import { 
  MessageCircle, 
  Linkedin, 
  Music2, 
  Briefcase, 
  Search,
  CheckCircle2,
  ArrowRight,
  LoaderCircle
} from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await submitToFormSubmit(new FormData(event.currentTarget));
      window.location.assign("https://jetmerce.github.io/thank-you/");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "The form could not be sent. Please try again.", { duration: 10000 });
      setLoading(false);
    }
  };

  const socials = [
    { name: "WhatsApp", icon: <MessageCircle />, href: "https://wa.me/2349162758597?text=Hello%20Jetmerce%2C%20I%27m%20messaging%20because%E2%80%A6", color: "hover:text-[#25D366]" },
    { name: "LinkedIn", icon: <Linkedin />, href: "https://www.linkedin.com/in/tobiloba-bamikole-26b5b736b/", color: "hover:text-[#0A66C2]" },
    { name: "TikTok", icon: <Music2 />, href: "https://www.tiktok.com/@jetmerce", color: "hover:text-[#ff0050]" },
    { name: "Upwork", icon: <Briefcase />, href: "https://www.upwork.com/freelancers/~017527ea2d8d82c882", color: "hover:text-[#60d911]" },
    { name: "Google", icon: <Search />, href: "https://share.google/zcheceC3KGTDwHKUC", color: "hover:text-[#4285F4]" },
  ];

  const qualifications = [
    "You already have a product",
    "You are getting some traffic or sales",
    "You want to improve performance"
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Contact</h2>
              <h3 className="text-5xl font-bold leading-tight">Ready To Build Or Grow <br />Your Ecommerce Brand?</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're launching a new store or looking to improve an existing one, we'll review your website, customer journey, and growth opportunities to help identify your next best steps.
              </p>
            </div>

            <div className="bg-secondary/50 border border-border p-8 rounded-[2rem] space-y-6">
              <h4 className="text-xl font-bold">Before You Reach Out</h4>
              <div className="space-y-4">
                {qualifications.map((q, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold uppercase tracking-widest text-muted-foreground/60">Direct Channels</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-3 px-4 h-12 rounded-2xl bg-secondary border border-border transition-all",
                      social.color
                    )}
                    title={social.name}
                  >
                    {social.icon}
                    <span className="font-medium text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
            <form action="https://formsubmit.co/jetmerceofficial@gmail.com" method="POST" onSubmit={handleSubmit} aria-busy={loading} className="bg-background border border-border/50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl space-y-6 md:space-y-8 relative">
              <input type="hidden" name="_next" value="https://jetmerce.github.io/thank-you/" />
              <input type="hidden" name="_subject" value="Your Enquiry Has Been Received Successfully" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="Name" placeholder="Joshua Bamikole" required className="bg-secondary/50 border-border/50 h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="you@example.com" required className="bg-secondary/50 border-border/50 h-12 rounded-xl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-link">Website link</Label>
                <Input 
                  id="store-link" 
                  name="Website link" 
                  data-custom-field="eBlsAFco1KK6fDGKFqKg" 
                  placeholder="https://yourwebsite.com" 
                  required 
                  className="bg-secondary/50 border-border/50 h-12 rounded-xl" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Note</Label>
                <Textarea id="message" name="Message" placeholder="Tell me a bit about your current struggles..." className="bg-secondary/50 border-border/50 min-h-[150px] rounded-xl resize-none" />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                    <span>Submitting your details…</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Me Your Website
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
              {loading && (
                <p className="text-xs text-center text-muted-foreground" role="status" aria-live="polite">
                  Please keep this page open. You’ll continue when your submission is confirmed.
                </p>
              )}
              
              <div className="text-center space-y-2">
                <p className="text-xs text-muted-foreground/60">
                  By submitting, you agree to a professional review of your website link.
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium">
                  Response Time: We typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message and we'll prioritize your request.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
