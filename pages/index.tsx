import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import {motion} from "framer-motion";
import {FADE_DOWN_ANIMATION_VARIANTS} from "@/lib/constants";
import {Instagram} from "@/components/shared/icons";
import Image from "next/image";
import {useSignInModal} from "@/components/layout/join-modal";
import Link from "next/link";

export default function Home() {
    const {SignInModal, setShowSignInModal} = useSignInModal();

    return (
        <Layout>
            <SignInModal/>
            <div className="mt-[-50px] flex min-h-screen w-11/12 flex-col items-center justify-center bg-[#962845]">
                <div className="mt-[-40%] md:mt-[-15%]">
                    <motion.div
                        className="max-w-xl px-9 xl:px-0"
                        initial="hidden"
                        whileInView="show"
                        animate="show"
                        viewport={{once: true}}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        <motion.a
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                            href="https://www.instagram.com/macblockchain/"
                            target="_blank"
                            rel="noreferrer"
                            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-pink-100 px-7 py-2 transition-colors hover:bg-pink-200"
                        >
                            <Instagram className="h-5 w-5 text-[#BE185D]"/>
                            <p className="text-sm font-semibold text-[#BE185D]">
                                @macblockchain
                            </p>
                        </motion.a>
                        <motion.h1
                            className="bg-gradient-to-br from-black to-stone-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-8xl md:leading-[5rem]"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <h1>McMaster Blockchain Club</h1>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-center font-semibold text-white md:text-2xl"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <Balancer>
                                Building the Future of Blockchain at McMaster University.
                            </Balancer>
                        </motion.p>
                        <motion.div
                            className="mx-auto mt-6 flex items-center justify-center space-x-5"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        ></motion.div>
                    </motion.div>
                </div>
                <div className="flex gap-4">
                    <Link href="/events" className="z-20">
                        <button
                            className="z-20 rounded-full border border-black bg-black p-2 px-10 text-lg font-semibold text-white transition-all hover:bg-white hover:text-black">
                            Events
                        </button>
                    </Link>
                    <button
                        className="z-10 rounded-full border border-black bg-black p-2 px-12 text-lg font-semibold text-white transition-all hover:bg-white hover:text-black"
                        onClick={() => setShowSignInModal(true)}
                    >
                        Join
                    </button>
                </div>
            </div>
            <div
                className="z-20 mt-[-50px] flex min-h-screen w-11/12 flex-col items-center justify-center bg-[#0d0c0c] pb-11">
                <div className="absolute top-0 h-screen translate-y-[82%] text-xl text-white">
                    /<br/>\<br/>/<br/>\<br/>/<br/>\<br/>/<br/>\<br/>
                </div>

                <div className="mt-[50px] w-11/12 md:mt-16">
                    <div className="mt-16 mb-[20px] flex flex-row justify-between gap-16 md:mb-0 ">
                        <div className="max-w-xl">
                            <div className="font-semibold text-white md:text-5xl">
                                Everything you need to change the world with Blockchain
                            </div>
                        </div>
                        <div className="text-[#817c73] md:mt-10 md:text-xl">
                            Our mission is to promote the study and implementation of
                            Blockchain to the undergraduate and graduate students of McMaster.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4  md:sm:grid-cols-3 md:mt-14">
                        <div
                            className="flex flex-col gap-5 border-2 border-[#322e2c] bg-[#131211] p-4 shadow-md md:h-56 md:hover:border-[#962845]">
                            <h2 className="text-2xl font-medium text-white">Learn</h2>
                            <p className="mt-2 text-lg text-[#817c73]">
                                Learn about Blockchain through regular tutorials and workshops
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-5 border-2 border-[#322e2c] bg-[#131211] p-4 shadow-md md:h-56 md:hover:border-[#C2EBC4]">
                            <h2 className="text-2xl font-medium text-white">Discuss</h2>
                            <p className="mt-2 text-lg text-[#817c73]">
                                Participate in networking events, socials, meet industry
                                professionals, and more
                            </p>
                        </div>
                        <div
                            className="flex flex-col gap-5 border-2 border-[#322e2c] bg-[#131211] p-4 shadow-md md:h-56 md:hover:border-[#B3D9FF]">
                            <h2 className="text-2xl font-medium text-white">Create</h2>
                            <p className="mt-2 text-lg text-[#817c73]">
                                Work with other members to create meaningful Blockchain projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-20 mt-12 flex min-h-[6rem] w-11/12 flex-col items-start justify-start bg-white">
                <div className="text-3xl font-normal text-black">Our Partners</div>
                <div className="flex flex-col self-center md:flex-row md:gap-20">
                    <a
                        href="https://www.verbwire.com/"
                        className="mt-10 mb-10 self-center"
                    >
                        <Image
                            src="/verbwire.png"
                            alt="Verbwire Sponsor"
                            width="500"
                            height="100"
                        ></Image>
                    </a>
                    <a
                        href="https://www.macengsociety.ca/"
                        className="mb-10 self-center md:mt-8"
                    >
                        <Image
                            src="/mes.png"
                            alt="McMaster Engineering Society Affiliate"
                            width="400"
                            height="100"
                        ></Image>
                    </a>
                </div>

                <div className="grid w-11/12 grid-cols-1 gap-1 self-center md:mt-14 md:ml-[10%] md:grid-cols-2">
                    <div className="flex w-[100%] flex-col items-start justify-center gap-5 bg-black p-4 md:w-[80%]">
                        <div className="ml-[10%]">
                            <h2 className="text-3xl text-white">Work with us</h2>
                            <p className="mt-2 self-center text-lg text-[#817c73]">
                                Join us in building a better future with blockchain.
                            </p>
                            <div className="group mt-5 flex items-center gap-3">
                                <button
                                    className="mt-3 h-9 w-9 rounded-full bg-[#45403d] text-2xl text-white group-hover:bg-[#962845]">
                                    →
                                </button>
                                <h3 className="text-xl text-white underline decoration-[#45403d] underline-offset-8 group-hover:decoration-[#962845]">
                                    Become a Partner
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex w-[100%] flex-col items-start justify-center gap-5 bg-black p-4 md:h-56 md:w-[80%]">
                        <div className="ml-[10%]">
                            <h2 className="text-3xl text-white">Have an Inquiry?</h2>
                            <p className="mt-2 self-center text-lg text-[#817c73]">
                                Let&apos;s Talk.
                            </p>
                            <div className="group mt-5 flex items-center gap-3">
                                {/* change button to <a> when adding link */}
                                <button
                                    className="mt-3 h-9 w-9 rounded-full bg-[#45403d] text-2xl text-white group-hover:bg-[#962845]">
                                    →
                                </button>
                                <h3 className="text-xl text-white underline decoration-[#45403d] underline-offset-8 group-hover:decoration-[#962845]">
                                    Get in Touch
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
