import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const ThankYou = () => (
  <Layout>
    <section className="min-h-[65vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center space-y-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 text-primary flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Thank you for reaching out.</h1>
        <p className="text-lg text-muted-foreground">
          Your details have been sent. I’ll review them and follow up with you shortly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <Button asChild className="rounded-full px-6">
            <a href="https://wa.me/2349162758597?text=Hello%20Jetmerce%2C%20I%20just%20submitted%20my%20website%20details%20for%20review..." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Contact on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/">Back to Jetmerce</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
