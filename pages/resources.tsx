import Layout from "@/components/layout";
import { Google } from "@/components/shared/icons";
import Image from "next/image";
import ResourceGrid from "@/components/layout/resourcegrid";

export default function Home() {
    return (
        <Layout>

            <div className="flex flex-col items-start justify-start w-11/12 min-h-screen bg-white z-20">
                <div className="text-3xl font-normal text-black mb-6">Resources</div>
                <ResourceGrid />

                
                

            </div>



        </Layout>
    );
}

