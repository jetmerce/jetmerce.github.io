import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhoWeHelp from "@/components/WhoWeHelp";
import ProblemSolution from "@/components/ProblemSolution";
import AboutSection from "@/components/AboutSection";
import ConversationScroll from "@/components/ConversationScroll";
import AnalyticsSection from "@/components/AnalyticsSection";
import OfferStack from "@/components/OfferStack";
import ContactSection from "@/components/ContactSection";
import VideoSection from "@/components/VideoSection";
import SafeWorkingSection from "@/components/SafeWorkingSection";
import Testimonials from "@/components/Testimonials";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <WhoWeHelp />
      <ProblemSolution />
      <AboutSection />
      <SafeWorkingSection />
      <ConversationScroll />
      <VideoSection />
      <AnalyticsSection />
      <Testimonials />
      <OfferStack />
      <ContactSection />
      <BackToTop />
    </Layout>
  );
};

export default Index;
