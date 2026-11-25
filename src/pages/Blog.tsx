import { Layout } from "@/components/Layout";
import BlogSection from "@/components/BlogSection";

const Blog = () => {
  return (
    <Layout>
      <div className="py-20">
        <BlogSection />
      </div>
    </Layout>
  );
};

export default Blog;