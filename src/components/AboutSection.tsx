import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              I'm Joshua, the founder of <span className="text-primary">JETMERCE</span>.
            </h3>
          </div>
          
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              I help ecommerce brands and local businesses turn more visitors into customers and bring past customers back more often, creating more consistent revenue.
            </p>
            <p className="bg-secondary/30 p-6 rounded-2xl border border-border/50 text-foreground font-medium">
              What I do is build and improve the systems that influence how people discover, engage with, and buy from your business.
            </p>
            <p>
              From conversion improvements on your website to customer retention strategies that encourage repeat business, my goal is to help you get more value from the opportunities you already have.
            </p>
            <p>
              Most businesses already have growth potential. They simply need better structure and systems to perform at a higher level.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              "New Ecommerce Founders",
              "Small Ecommerce Brands",
              "Growing Online Stores",
              "Established Retail Brands",
              "Product-Based Businesses"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-2xl border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
