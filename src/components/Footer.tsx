import { asset } from "@/lib/assets";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideCTA = location.pathname === "/local-businesses" || location.pathname === "/audit";

  return (
    <footer className="py-20 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        {!hideCTA && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Your website can perform better than it currently is.
            </h2>
            <p className="text-xl text-muted-foreground">
              You're likely leaving revenue on the table. Let's fix that.
            </p>
            <LeadMagnetIntercept>
              <Button size="lg" className="rounded-full px-6 md:px-10 h-auto py-4 md:py-6 text-lg md:text-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 group w-full sm:w-auto">
                <span className="flex items-center justify-center gap-3 whitespace-normal text-center">
                  Send Me Your Website
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </LeadMagnetIntercept>
          </div>
        )}

        <div className={`${hideCTA ? "pt-4" : "pt-20 border-t border-border/50"} flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8`}>
          <div className="flex items-center gap-2">
            <img 
              src={asset("2766312f-b9a9-4d50-b1c3-bc573e8d4d12.png")} 
              alt="Jetmerce Logo" 
              className="w-8 h-8 rounded-full object-cover bg-white"
              loading="lazy"
              decoding="async"
            />
            <span className="font-bold tracking-tight">JETMERCE</span>
          </div>
          
          <div className="space-y-2 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2026–2027 Jetmerce. All rights reserved. Founded by{" "}
              <a href="https://www.linkedin.com/in/tobiloba-bamikole-26b5b736b/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">
                Joshua Oluwatobiloba Bamikole
              </a>.
            </p>
            <p className="text-muted-foreground text-sm">
              We are committed to ensuring digital accessibility for everyone. If you experience any difficulty accessing any part of this website, please contact us at{" "}
              <a href="mailto:jetmerceofficial@gmail.com" className="underline underline-offset-4 hover:text-primary">
                jetmerceofficial@gmail.com
              </a>.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Removed Terms and Privacy */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
