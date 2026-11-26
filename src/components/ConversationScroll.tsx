import { asset } from "@/lib/assets";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const ConversationScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const messages = [
    { sender: "buyer", text: "I don't understand... I'm getting visitors, people are liking my products... but the sales are not consistent.", time: "10:30 AM" },
    { sender: "me", text: "Yeah... that happens more often than people think. Can I ask—when people land on your website, do you feel like it clearly guides them on what to do next?", time: "10:31 AM" },
    { sender: "buyer", text: "Hmm... not really. I think they just look around and leave sometimes.", time: "10:32 AM" },
    { sender: "me", text: "That's usually where the problem starts. It's not always about getting more traffic... it's about what happens after they arrive. If the website doesn't guide them properly, even interested people will leave without buying.", time: "10:33 AM" },
    { sender: "buyer", text: "So you're saying the issue might not be traffic?", time: "10:33 AM" },
    { sender: "me", text: "Exactly. Most sellers focus on getting more visitors... but if the website isn't structured to convert, more traffic just means more missed sales.", time: "10:34 AM" },
    { sender: "buyer", text: "That actually makes sense...", time: "10:34 AM" },
    { sender: "me", text: "And there's another side most people don't look at... After someone buys from you—do you have anything in place that brings them back again?", time: "10:35 AM" },
    { sender: "buyer", text: "Not really... once they buy, that's it.", time: "10:35 AM" },
    { sender: "me", text: "Yeah... and that's where a lot of revenue quietly disappears. Without a proper system, customers buy once and don't come back. So every time you want more sales, you have to start from zero again.", time: "10:36 AM" },
    { sender: "buyer", text: "Wow... I didn't really think about it like that.", time: "10:36 AM" },
    { sender: "me", text: "Most people don't. But when both parts are working together— your website converts visitors properly, and your system brings customers back. That's when things start to feel consistent.", time: "10:37 AM" },
    { sender: "buyer", text: "So what do you actually help with?", time: "10:37 AM" },
    { sender: "me", text: "I focus on two things: Turning your website into a Visitor to Buyer Conversion System, and setting up a Customer Retention & Repeat Revenue System. So instead of depending on new traffic all the time, your website starts working with the customers you already have.", time: "10:38 AM" },
    { sender: "buyer", text: "Okay... but how do I know what's actually wrong right now?", time: "10:38 AM" },
    { sender: "me", text: "That's a good question. I usually start simple— I go through your website, identify what's affecting your conversions, and show you exactly what to improve. That way, you can clearly see what's happening before making any bigger decisions.", time: "10:39 AM" },
    { sender: "buyer", text: "That actually sounds helpful.", time: "10:39 AM" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#EBE5D9] dark:bg-[#1a1c1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 flex flex-col items-center">
          <h2 className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border/50 shadow-sm text-primary font-mono tracking-widest uppercase text-sm font-bold">A Familiar Story</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#111b21] dark:text-white mt-2">Picture This: A Strategy Chat for Your Business</h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <div className="bg-white dark:bg-[#202c33] p-8 rounded-3xl shadow-lg border border-[#d1d7db] dark:border-[#2a3942]">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#111b21] dark:text-white">
                <span className="text-primary">✅</span> Website System Statement
              </h4>
              <p className="text-[#54656f] dark:text-[#8696a0] leading-relaxed">
                If your website isn't clearly guiding visitors to buy, people will browse and leave without taking action. That means you're already losing sales you've paid or worked to get. But when your website is positioned properly, it will convert more visitors into buyers consistently, without needing more traffic. That's a key difference in high performing websites.
              </p>
            </div>

            <div className="bg-white dark:bg-[#202c33] p-8 rounded-3xl shadow-lg border border-[#d1d7db] dark:border-[#2a3942]">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#111b21] dark:text-white">
                <span className="text-primary">❗</span> Email System Statement
              </h4>
              <p className="text-[#54656f] dark:text-[#8696a0] leading-relaxed">
                Without a retention system in place, your business will keep losing customers after the first purchase, which means you'll constantly depend on new traffic to make sales. But when it's set up properly, it will consistently bring buyers back, recover lost customers, and significantly increase your overall revenue without extra effort. That's what top performing businesses in your space are already doing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#efeae2] dark:bg-[#0b141a] rounded-3xl p-4 md:p-8 shadow-xl border border-[#d1d7db] dark:border-[#2a3942] relative bg-cover bg-center bg-no-repeat bg-blend-soft-light" style={{ backgroundImage: `url(${asset("06fa2bf6-543c-4c6e-a731-3068ba3be161.png")})` }}>
            <div className="absolute inset-0 bg-[#efeae2]/90 dark:bg-[#0b141a]/95 rounded-3xl"></div>
            <div className="relative space-y-6 flex flex-col min-h-[600px] justify-end">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "max-w-[85%] md:max-w-[75%] p-4 rounded-2xl transition-all duration-500 shadow-sm relative",
                    msg.sender === "me" 
                      ? "bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111b21] dark:text-[#e9edef] rounded-tr-sm self-end" 
                      : "bg-white dark:bg-[#202c33] text-[#111b21] dark:text-[#e9edef] rounded-tl-sm self-start",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
                >
                  <div className="text-xs font-bold mb-1 opacity-60">{msg.sender === "me" ? "Joshua" : "Business Owner"}</div>
                  <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                  <div className="text-[10px] text-right mt-2 opacity-60 flex justify-end items-center gap-1">
                    {msg.time}
                    {msg.sender === "me" && <span className="text-[#53bdeb]">✓✓</span>}
                  </div>
                </div>
              ))}
              
              <div 
                className={cn(
                  "mt-8 p-6 bg-white dark:bg-[#202c33] rounded-2xl shadow-lg border border-[#d1d7db] dark:border-[#2a3942] flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                )}
                style={{ transitionDelay: isVisible ? `${messages.length * 100}ms` : "0ms" }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">👉</div>
                  <div>
                    <h4 className="font-bold text-lg text-[#111b21] dark:text-white">If this feels familiar, let's fix it together.</h4>
                    <p className="text-sm text-[#54656f] dark:text-[#8696a0]">Send me your website link and I'll take a look to show you what might be affecting your sales.</p>
                  </div>
                </div>
                <LeadMagnetIntercept>
                  <Button className="shrink-0 bg-[#00a884] hover:bg-[#00a884]/90 text-white rounded-full px-6">
                    Send My Website Link
                  </Button>
                </LeadMagnetIntercept>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationScroll;