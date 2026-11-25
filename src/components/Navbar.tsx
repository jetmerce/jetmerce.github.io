import { asset } from "@/lib/assets";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

import { Link, useLocation } from "react-router-dom";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Systems", href: "/systems" },
    { name: "Work", href: "/work" },
    { name: "Ecommerce Brands", href: "/digital-businesses" },
    { name: "Local Businesses", href: "/local-businesses" },
    { name: "Blog", href: "/blog" },
    { name: "Audit", href: "/audit" },
    { name: "FAQ", href: "/faq" },
  ];

  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {isNotificationVisible && (
        <div className="bg-primary text-primary-foreground px-4 py-2 sm:py-2.5 text-center text-xs sm:text-sm flex items-center justify-center relative z-[60] font-medium">
          <div className="flex items-center flex-wrap justify-center gap-x-2 gap-y-1 max-w-7xl mx-auto px-6">
            <span>Free Customer Retention & Growth Checklist to build a more profitable business</span>
            <LeadMagnetIntercept>
              <button className="underline underline-offset-2 hover:text-primary-foreground/80 transition-colors whitespace-nowrap">
                Get it now
              </button>
            </LeadMagnetIntercept>
          </div>
          <button 
            onClick={() => setIsNotificationVisible(false)} 
            className="absolute right-2 sm:right-4 p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <nav
        className={cn(
          "w-full transition-all duration-300 px-6 py-4",
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent"
        )}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={asset("2766312f-b9a9-4d50-b1c3-bc573e8d4d12.png")} 
            alt="Jetmerce Logo" 
            className="w-10 h-10 rounded-full object-cover bg-white"
            fetchPriority="high"
            decoding="async"
          />
          <span className="text-xl font-bold tracking-tight">JETMERCE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 bg-secondary/50 backdrop-blur-md px-6 py-2 rounded-full border border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild className="hidden md:flex rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <a href={`${import.meta.env.BASE_URL}#systems`}>Let's Talk</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-secondary/50",
                location.pathname === link.href ? "text-primary bg-primary/10" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-2 rounded-xl h-12 bg-primary text-primary-foreground">
            <a href={`${import.meta.env.BASE_URL}#systems`} onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</a>
          </Button>
        </div>
      )}
    </nav>
    </header>
  );
};

export default Navbar;