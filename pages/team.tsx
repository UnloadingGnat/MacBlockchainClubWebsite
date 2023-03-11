import Layout from "@/components/layout";
import TeamGrid from "@/components/layout/ourTeamGrid";

export default function Home() {
  return (
    <Layout>
      <div className="z-20 flex min-h-screen w-11/12 flex-col items-start justify-start bg-white">
        <div className="text-3xl font-normal text-black">Our Leadership</div>
        <TeamGrid team="leadership" />
      </div>
      <div className="z-20 flex min-h-fit w-11/12 flex-col items-start justify-start bg-white pb-12 sm:mt-0 md:mt-80 lg:mt-32 xl:mt-0">
        <div className="text-3xl font-normal text-black">Advisory Board</div>
        <TeamGrid team="advisory" />
      </div>
    </Layout>
  );
}
