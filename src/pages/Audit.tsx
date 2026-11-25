import { Layout } from "@/components/Layout";
import StoreAudit from "@/components/StoreAudit";

const Audit = () => {
  return (
    <Layout>
      <div className="py-20">
        <StoreAudit />
      </div>
    </Layout>
  );
};

export default Audit;