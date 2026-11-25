import { Layout } from "@/components/Layout";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

const Work = () => {
  return (
    <Layout>
      <div className="py-20">
        <Portfolio />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default Work;