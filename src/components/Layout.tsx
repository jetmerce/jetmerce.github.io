import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const popups = [
      "Sarah from the UK just booked a Store Audit!",
      "Michael's Gumroad store conversion increased by 42%!",
      "Emily just downloaded the Conversion Checklist!",
      "A new client from Canada joined the Retention System."
    ];

    const interval = setInterval(() => {
      const randomPop = popups[Math.floor(Math.random() * popups.length)];
      toast.success(randomPop, {
        duration: 4000,
        position: "bottom-left",
      });
    }, 180000); // 3 minutes

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
