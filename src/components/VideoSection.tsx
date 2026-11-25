import { Card } from "@/components/ui/card";

const VideoSection = () => {
  const videos = [
    { id: "BtNvn03KH64", title: "Your product is good, so why isn't it showing?" },
    { id: "YPqO4JIEs0I", title: "Turn your creativity into something the world can see" },
    { id: "QjK7sz8Mldc", title: "Is anyone else crafting something warm?" }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-primary font-mono tracking-widest uppercase text-sm">Watch & Learn</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Free Training Videos</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Actionable advice on how to structure your website for more sales.
          </p>
        </div>

        <div className="flex justify-center gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {videos.map((video, i) => (
            <Card key={i} className="min-w-[280px] w-full max-w-[320px] snap-center shrink-0 border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-colors group overflow-hidden flex flex-col">
              <div className="aspect-[9/16] w-full relative bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              <div className="p-6 flex-grow flex items-center justify-center text-center">
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{video.title}</h4>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-muted-foreground text-lg">
            Click the button below to watch more helpful breakdowns on improving ecommerce sales and conversions. And don&apos;t forget to subscribe and like!
          </p>
          <a 
            href="https://www.youtube.com/@jetmerce/shorts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Watch More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;