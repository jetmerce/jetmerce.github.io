import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { LeadMagnetIntercept } from "./LeadMagnetIntercept";


const articles = [
  {
    title: "Why Your Digital Product Is Getting Traffic But No Sales And How To Fix It",
    description: "Discover the hidden bottlenecks in your store layout that are causing visitors to bounce before buying.",
    date: "Latest Insight",
  },
  {
    title: "Why Your Etsy Store Gets Traffic But No Sales (The Real Reason Most Sellers Miss)",
    description: "A breakdown of the exact elements you need on your product pages to turn casual browsers into paying customers.",
    date: "Popular",
  },
  {
    title: "Your Product Page Is Losing Sales And You Don’t Even Know It.",
    description: "Stop relying solely on new traffic. Learn how to bring past buyers back for consistent repeat revenue.",
    date: "Strategy",
  },
  {
    title: "Why People Don’t Buy Your Digital Product (Even If It Looks Good)",
    description: "Uncover the psychological barriers that prevent potential customers from completing their purchase.",
    date: "Conversion",
  },
  {
    title: "Why Getting Views Doesn’t Mean Getting Sales in Digital Products",
    description: "Learn why vanity metrics don't pay the bills and how to shift your focus to actual revenue-generating activities.",
    date: "Growth",
  },
  {
    title: "Unclear Messaging Is Killing Your Digital Product Sales. Fix It Today!",
    description: "How to craft compelling copy that clearly communicates the value of your digital products.",
    date: "Copywriting",
  },
  {
    title: "BUYER PSYCHOLOGY: Why People Save Your Digital Product But Don’t Buy",
    description: "Understand the hesitation behind the 'save for later' button and how to encourage immediate action.",
    date: "Psychology",
  },
  {
    title: "What Buyers Are Really Thinking Before They Purchase A Digital Product",
    description: "Step into the mind of your ideal customer to build a store experience that answers all their objections.",
    date: "Deep Dive",
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Insights & Strategies
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Thoughts on Conversion & Retention
            </h2>
            <p className="text-lg text-muted-foreground">
              I regularly share actionable strategies for digital product sellers on Medium. Read my latest breakdowns and case studies.
            </p>
          </div>
          
          <LeadMagnetIntercept externalLink="https://medium.com/@jetmerceofficial">
            <Button size="lg" className="shrink-0 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border">
              <span className="flex items-center gap-2">
                Read on Medium
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Button>
          </LeadMagnetIntercept>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors group flex flex-col">
              <CardHeader>
                <div className="text-sm font-medium text-primary mb-3">{article.date}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base mb-6 flex-1">
                  {article.description}
                </CardDescription>
                <LeadMagnetIntercept externalLink="https://medium.com/@jetmerceofficial">
                  <span className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-auto">
                    Read Article
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </LeadMagnetIntercept>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
