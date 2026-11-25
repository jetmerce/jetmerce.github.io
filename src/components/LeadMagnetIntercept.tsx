import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LeadMagnetInterceptProps {
  children: React.ReactNode;
  externalLink?: string;
}

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/jetmerceofficial@gmail.com";
const THANK_YOU_URL = "https://jetmerce.github.io/thank-you/";

export const LeadMagnetIntercept = ({ children, externalLink }: LeadMagnetInterceptProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const successDestination = externalLink || THANK_YOU_URL;

  const handleWhatsApp = () => {
    window.open("https://wa.me/2349162758597?text=Hello%20Jetmerce%2C%20I%27m%20messaging%20because%E2%80%A6", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Let's Connect</DialogTitle>
          <DialogDescription className="text-sm">
            Fill out the form to access our free Customer Retention & Growth Checklist. Learn how to reduce customer churn, encourage repeat purchases and visits, re-engage past customers, and build a more profitable business. Whether you operate online, locally, or both.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="pb-4 mb-4 border-b border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">If you are open to discussing your business, you can reach out here:</p>
            <Button variant="outline" type="button" onClick={handleWhatsApp} className="w-full text-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 border-[#25D366]/30">
              Message on WhatsApp
            </Button>
          </div>
          <form
            action={FORMSUBMIT_ENDPOINT}
            method="POST"
            onSubmit={() => setIsLoading(true)}
            className="space-y-4"
          >
            <input type="hidden" name="_next" value={successDestination} />
            <input type="hidden" name="_subject" value="Your Enquiry Has Been Received Successfully" />
            <input type="hidden" name="_autoresponse" value="Hello, your enquiry has been received successfully.\n\nI will personally review the information you submitted, along with your website and online presence, and get back to you shortly with my observations and recommendations.\n\nIf there is anything specific you would like me to pay particular attention to during my review, simply reply to this email. If replying is unavailable, please contact me directly at:\n\njetmerceofficial@gmail.com\n\nThank you for reaching out. I look forward to learning more about your business.\n\nKind regards,\n\nJoshua\nJETMERCE" />
            <input type="hidden" name="_template" value="table" />
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="Name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="store">Website link</Label>
              <Input id="store" name="Website link" type="url" placeholder="https://yourwebsite.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="Message" placeholder="What do you need help with?" required />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg">
              {isLoading ? "Sending and opening your link…" : "Submit & Continue"}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-2">
              After a successful submission, you will continue to the page you selected.
            </p>
            <p className="text-xs text-center text-muted-foreground">
              Response Time: We typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message and we'll prioritize your request.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
