import Layout from "@/components/layout";
import ResourceGrid from "@/components/layout/resourcegrid";

export default function Home() {
  return (
    <Layout>
      <div className="z-20 flex min-h-screen w-11/12 flex-col items-start justify-start bg-white">
        <div className="mb-6 text-3xl font-normal text-black">Resources</div>
        <ResourceGrid />
      </div>
    </Layout>
  );
}
