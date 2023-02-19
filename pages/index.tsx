import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter, Instagram } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-11/12 h-screen bg-[#962845] mt-[-50px]">
        <div className="mt-[-250px]">
            <motion.div
              className="max-w-xl px-9 xl:px-0"
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: true }}
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
                <Instagram className="h-5 w-5 text-[#BE185D]" />
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
                className="mt-6 text-center text-white md:text-2xl font-semibold"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                <Balancer >
                  Building the Future of Blockchain at McMaster University.
                </Balancer>
              </motion.p>
              <motion.div
                className="mx-auto mt-6 flex items-center justify-center space-x-5"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
              </motion.div> 
            </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-11/12 h-screen bg-[#0d0c0c] mt-[-50px]">
        <div className="mt-[-150px] md:mt-[-350px] text-white text-xl">/<br />\<br />/<br />\<br />/<br />\<br />/<br />\<br /></div>

        <div className="w-11/12 md:mt-16 mt-[-10px]">
          <div className="flex flex-row justify-between gap-16 mt-16">
            <div className="max-w-xl">
              <div className="md:text-5xl font-semibold text-white">Everything you need to change the world with Blockchain</div>

            </div>
            <div className="md:text-xl text-[#817c73] md:mt-10">Our mission is to promote the study and implementation of Blockchain to the undergraduate and graduate students of McMaster.</div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-16 md:sm:grid-cols-3">
            <div className="bg-[#131211] p-4 border-[#322e2c] border-2 shadow-md md:h-56 flex flex-col gap-5">
              <h2 className="text-white text-2xl font-medium">Learn</h2>
              <p className="mt-2 text-[#817c73] text-lg">Learn about Blockchain through regular tutorials and workshops</p>
            </div>
            <div className="bg-[#131211] p-4 border-[#322e2c] border-2 shadow-md md:h-56 flex flex-col gap-5">
              <h2 className="text-white text-2xl font-medium">Discuss</h2>
              <p className="mt-2 text-[#817c73] text-lg">Participate in networking events, socials, meet industry professionals, and more</p>
            </div>
            <div className="bg-[#131211] p-4 border-[#322e2c] border-2 shadow-md md:h-56 flex flex-col gap-5">
              <h2 className="text-white text-2xl font-medium">Create</h2>
              <p className="mt-2 text-[#817c73] text-lg">Work with other members to create meaningful Blockchain projects</p>
            </div>


              
          </div>

        </div>
      </div>


    </Layout>
  );
}

