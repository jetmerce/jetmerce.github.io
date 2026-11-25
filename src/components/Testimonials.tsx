import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Oluwasegun Abayomi",
    time: "4 months ago",
    text: "I create handmade porcelain crafts, and Joshua first found my work on Instagram. He reached out kindly and encouraged me, showing me how what I love making can bless more people and also become a real business. He helped me set up my website, list my items on the right marketplaces, and guided me through promotion. I'm truly happy with the results.",
    rating: 5,
    initial: "O"
  },
  {
    name: "Bojesomo Adeolu",
    time: "5 months ago",
    text: "I needed help with marketing and visibility for my online website, and Joshua explained everything to me in a way I could easily understand. His advice matched exactly what I needed , Great experience working with him",
    rating: 5,
    initial: "B"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Success Stories</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Real results from ecommerce brands and local businesses who transformed their websites.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-card border-border/50">
                      <CardContent className="flex flex-col justify-between p-6 h-[300px]">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                              {testimonial.initial}
                            </div>
                            <div>
                              <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{testimonial.time}</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-500">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
