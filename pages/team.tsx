import Layout from "@/components/layout";
import { Google } from "@/components/shared/icons";
import Image from "next/image";

export default function Home() {
    return (
        <Layout>
            
            <div className="flex flex-col items-start justify-start w-11/12 h-screen bg-white z-20">
                <div className="text-3xl font-normal text-black">Our Leadership</div>
                <div className="grid grid-cols-1 gap-4  md:sm:grid-cols-4 md:mt-14">

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
                        <a
                            className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            href="https://www.linkedin.com/in/jaavin/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Google className="h-5 w-5 text-white" />
                        </a>
                    </div>

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <Image
                            src="/laksh.png"
                            alt="Blockchain Club logo"
                            width="250"
                            height="2500"
                            className="mr-1 rounded-xl"
                        ></Image>
                        <h2 className="text-black text-2xl font-medium">Laksh Anand</h2>
                        <h3 className="text-black text-base font-medium pb-2 border-b-2">Vice President, Operations</h3>
                        <p className="mt-2 text-[#817c73] text-base">Laksh Anand is the Vice President, Operations of McMaster Blockchain Club.</p>
                        <a
                            className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            href="https://www.linkedin.com/in/laksh-anand/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Google className="h-5 w-5 text-white" />
                        </a>
                    </div>

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <Image
                            src="/isra.png"
                            alt="Blockchain Club logo"
                            width="265"
                            height="2500"
                            className="mr-1 rounded-xl"
                        ></Image>
                        <h2 className="text-black text-2xl font-medium">Isra Zahid</h2>
                        <h3 className="text-black text-base font-medium pb-2 border-b-2">Vice President, Marketing</h3>
                        <p className="mt-2 text-[#817c73] text-base">Isra Zahid is the Vice President, Marketing of McMaster Blockchain Club.</p>
                        <a
                            className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            href="https://www.linkedin.com/in/isra-zahid/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Google className="h-5 w-5 text-white" />
                        </a>
                    </div>

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        {/* <Image
                            src="/"
                            alt="Blockchain Club logo"
                            width="265"
                            height="2500"
                            className="mr-1 rounded-xl"
                        ></Image> */}
                        <h2 className="text-black text-2xl font-medium">Aniket Kabra</h2>
                        <h3 className="text-black text-base font-medium pb-2 border-b-2">Vice President, Finance</h3>
                        <p className="mt-2 text-[#817c73] text-base">Aniket Kabra is the Vice President, Finance of McMaster Blockchain Club.</p>
                        <a
                            className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            href="https://www.linkedin.com/in/aniket-kabra/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Google className="h-5 w-5 text-white" />
                        </a>
                    </div>



                </div>

            </div>

            <div className="flex flex-col items-start h-[400px] pb-12 justify-start w-11/12 bg-white z-20 mt-[1400px] md:mt-[290px] lg:mt-[100px] xl:mt-[70px]">
                <div className="text-3xl font-normal text-black">Advisory Board</div>
                <div className="grid grid-cols-1 gap-4  md:sm:grid-cols-4 md:mt-14">

                    <div className=" p-4  md:h-56 flex flex-col gap-1">
                        <h2 className="text-black text-2xl font-medium">To be confirmed</h2>
                        <h3 className="text-black text-base font-medium pb-2 border-b-2">Faculty Advisor #1</h3>
                        <p className="mt-2 text-[#817c73] text-base">ECE Prof.</p>
                        <a
                            className="rounded-full border w-10 border-[#0173af] bg-[#0172af89] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0173af] hover:text-black mt-2"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Google className="h-5 w-5 text-white" />
                        </a>
                    </div>


                </div>

            </div>



        </Layout>
    );
}

