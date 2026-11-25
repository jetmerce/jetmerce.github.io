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

export const LeadMagnetIntercept = ({ children, externalLink }: LeadMagnetInterceptProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
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
      console.error("Form submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/2349162758597?text=Hello%20Jetmerce%2C%20I%27m%20messaging%20because%E2%80%A6", "_blank");
    setIsOpen(false);
    if (externalLink) window.open(externalLink, "_blank");
  };

  const handleCancel = () => {
    setIsOpen(false);
    if (externalLink) window.open(externalLink, "_blank");
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
        {!isSubmitted ? (
          <div className="mt-4">
            <div className="pb-4 mb-4 border-b border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">If you are open to discussing about your business, you can reach out here:</p>
              <Button variant="outline" type="button" onClick={handleWhatsApp} className="w-full text-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 border-[#25D366]/30">
                Message on WhatsApp
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="Your Enquiry Has Been Received Successfully" />
              <input type="hidden" name="_autoresponse" value="Hello, your enquiry has been received successfully.&#10;&#10;I will personally review the information you submitted, along with your website and online presence, and get back to you shortly with my observations and recommendations.&#10;&#10;If there is anything specific you would like me to pay particular attention to during my review, simply reply to this email. If replying is unavailable, please contact me directly at:&#10;&#10;jetmerceofficial@gmail.com&#10;&#10;Thank you for reaching out. I look forward to learning more about your business.&#10;&#10;Kind regards,&#10;&#10;Joshua&#10;JETMERCE" />
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
              {isLoading ? "Sending..." : "Submit & Continue"}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-2">
              Response Time: We typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message and we'll prioritize your request.
            </p>

            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary text-2xl">✓</div>
            <h3 className="text-xl font-bold">Your Details Have Been Received!</h3>
            <p className="text-muted-foreground">I'll personally review the details you've submitted and follow up with you shortly.</p>
            <p className="text-muted-foreground text-sm">If you have an urgent question or would prefer a faster response, you're welcome to contact me directly on WhatsApp.</p>
            <div className="flex flex-col gap-3">
              <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white h-auto py-3 whitespace-normal">
                Contact on WhatsApp
              </Button>
              <Button variant="outline" onClick={handleCancel} className="w-full h-auto py-3 whitespace-normal">
                Return to website (I'll Wait for a Reply)
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};