import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { 
  MessageCircle, 
  Linkedin, 
  Music2, 
  Briefcase, 
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      await fetch("https://formsubmit.co/ajax/jetmerceofficial@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data)
      });

      setIsSubmitted(true);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
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
            {isSubmitted ? (
              <div className="bg-background border border-border/50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl text-center space-y-6 relative flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Your Details Have Been Received!</h3>
                <p className="text-muted-foreground">
                  I'll personally review the details you've submitted and follow up with you shortly.
                </p>
                <p className="text-muted-foreground text-sm">
                  If you have an urgent question or would prefer a faster response, you're welcome to contact me directly on WhatsApp.
                </p>
                <div className="flex flex-col gap-3 pt-4 w-full max-w-sm mx-auto">
                  <a 
                    href="https://wa.me/2349162758597?text=Hello%20Jetmerce%2C%20I%20just%20submitted%20my%20website%20details%20for%20review..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-[#25D366] px-8 text-sm font-bold text-white hover:bg-[#25D366]/90 transition-colors"
                  >
                    Contact on WhatsApp
                  </a>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="h-12 rounded-xl">
                    Return to website (I'll Wait for a Reply)
                  </Button>
                </div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="bg-background border border-border/50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl space-y-6 md:space-y-8 relative">
              <input type="hidden" name="_subject" value="Your Enquiry Has Been Received Successfully" />
              <input type="hidden" name="_autoresponse" value="Hello, your enquiry has been received successfully.&#10;&#10;I will personally review the information you submitted, along with your website and online presence, and get back to you shortly with my observations and recommendations.&#10;&#10;If there is anything specific you would like me to pay particular attention to during my review, simply reply to this email. If replying is unavailable, please contact me directly at:&#10;&#10;jetmerceofficial@gmail.com&#10;&#10;Thank you for reaching out. I look forward to learning more about your business.&#10;&#10;Kind regards,&#10;&#10;Joshua&#10;JETMERCE" />
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
                {loading ? "Sending..." : (
                  <span className="flex items-center justify-center gap-2">
                    Send Me Your Website
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
              
              <div className="text-center space-y-2">
                <p className="text-xs text-muted-foreground/60">
                  By submitting, you agree to a professional review of your website link.
                </p>
                <p className="text-xs text-muted-foreground/80 font-medium">
                  Response Time: We typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message and we'll prioritize your request.
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;