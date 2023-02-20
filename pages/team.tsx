import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter, Instagram, Google } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
    return (
        <Layout>
            
            <div className="flex flex-col items-start justify-start w-11/12 h-screen bg-white z-20">
                <div className="text-3xl font-normal text-black">Our Leadership</div>
                <div className="grid grid-cols-1 gap-4  md:sm:grid-cols-3 md:mt-14">

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <Image
                            src="/headshot_jaavin.jpg"
                            alt="Blockchain Club logo"
                            width="250"
                            height="2500"
                            className="mr-1 rounded-xl"
                        ></Image>
                        <h2 className="text-black text-2xl font-medium">Jaavin Mohanakumar</h2>
                        <h3 className="text-black text-base font-medium pb-2 border-b-2">Founder and President</h3>
                        <p className="mt-2 text-[#817c73] text-base">Jaavin Mohanakumar is the Founder and President of McMaster Blockchain Club. He is an Engineering 1 student at McMaster University, and has previously worked at Huff, the largest independent Ethereum assembly language.</p>
                        <a href="https://www.linkedin.com/in/jaavin/" target="_blank" rel="noreferrer">
                            <button
                                className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            >
                                <Google className="h-5 w-5 text-white" />
                            </button>
                        </a>
                    </div>

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <h2 className="text-black text-2xl font-medium">Laksh Anand</h2>
                        <h3 className="text-black text-base font-medium">Vice President, Operations</h3>
                        <p className="mt-2 text-[#817c73] text-base">Laksh Anand is the Vice President, Operations of McMaster Blockchain Club.</p>
                    </div>

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <h2 className="text-black text-2xl font-medium">TBD</h2>
                        <h3 className="text-black text-base font-medium">Vice President, TBD</h3>
                        <p className="mt-2 text-[#817c73] text-base">Learn about Blockchain through regular tutorials and workshops</p>
                    </div>


                </div>

            </div>



        </Layout>
    );
}

