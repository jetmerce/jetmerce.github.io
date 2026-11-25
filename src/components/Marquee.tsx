const Marquee = () => {
  const items = [
    "Website Optimization",
    "Customer Winback",
    "Customer Follow Up",
    "Retention System",
    "Post Creation",
    "Content Creation",
    "Conversion Rate Optimization",
    "Email Marketing",
  ];

  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 py-4 overflow-hidden relative flex items-center">
      <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-primary/80 font-mono text-sm uppercase tracking-widest font-semibold">{item}</span>
            <span className="mx-8 text-primary/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;