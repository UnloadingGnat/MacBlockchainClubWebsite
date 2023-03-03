import Layout from "@/components/layout";
import TeamGrid from "@/components/layout/ourTeamGrid";

export default function Home() {
    return (
        <Layout>
            
            <div className="flex flex-col items-start justify-start w-11/12 min-h-screen bg-white z-20">
                <div className="text-3xl font-normal text-black">Our Leadership</div>
                <TeamGrid team="leadership"/>
            </div>
            {/* <div className="flex flex-col items-start min-h-screen pb-12 justify-start w-11/12 bg-white z-20">
                <div className="text-3xl font-normal text-black">Advisory Board</div>
                <TeamGrid team="advisory"/>
            </div> */}
        </Layout>
    );
}


