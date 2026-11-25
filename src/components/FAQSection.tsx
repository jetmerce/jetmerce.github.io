import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "I work with ecommerce brands and local businesses that want to improve their online performance, generate more customers, increase sales, and encourage repeat business.",
  },
  {
    question: "How do you help businesses grow?",
    answer: "I review your website, customer experience, and online presence to identify opportunities that may be limiting growth. My focus is on helping businesses convert more visitors into customers and bring existing customers back more often.",
  },
  {
    question: "Do I need to have a large business to work with you?",
    answer: "No. I work with businesses at different stages of growth. Whether you're just getting started or already established, the goal is to identify practical opportunities that can improve results.",
  },
  {
    question: "Do you only work with online businesses?",
    answer: "No. I work with both ecommerce businesses and local businesses. If customers discover, research, or interact with your business online, there are usually opportunities to improve the customer journey and increase conversions.",
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "Once you submit the form, I will personally review the information you provide, along with your website and online presence. I'll then follow up with my observations and recommendations.",
  },
  {
    question: "Will I receive a response personally from you?",
    answer: "Yes. Every enquiry is reviewed personally by me. I take the time to understand your business before providing feedback or recommendations.",
  },
  {
    question: "How long does it take to receive a response?",
    answer: "Response times vary depending on current workload, but I aim to review enquiries and follow up as promptly as possible.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "The first conversation is designed to understand your business, your goals, and whether I can genuinely help. If I believe there's an opportunity to improve your results, I'll explain what I see and discuss possible next steps.",
  },
  {
    question: "What information should I provide when contacting you?",
    answer: "The more context you can provide about your business, goals, and challenges, the more useful my review and recommendations will be.",
  },
  {
    question: "What if I'm not sure what's holding my business back?",
    answer: "That's perfectly fine. Many business owners know they want better results but aren't sure where the bottlenecks are. Part of my process is identifying areas that may be affecting customer acquisition, conversions, or repeat business.",
  },
  {
    question: "Do you guarantee specific results?",
    answer: "Every business is different, and results depend on many factors. While no specific outcome can be guaranteed, my goal is to identify practical opportunities that can improve performance and support long-term growth.",
  },
  {
    question: "Can I contact you directly?",
    answer: "Yes. If you have questions before or after submitting the form, you can reach me at: jetmerceofficial@gmail.com",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border/50 rounded-2xl px-6 transition-all hover:border-primary/30"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
