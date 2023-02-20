import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./join-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: "McMaster Blockchain Club";
    description?: "The official website of the McMaster Blockchain Club";
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      <div className="fixed h-screen w-full" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between  xl:mx-auto">
          <Link href="/" className="flex items-center font-display md:text-2xl text-base">
            <Image
              src="/block-logo.png"
              alt="Blockchain Club logo"
              width="60"
              height="60"
              className="mr-1 rounded-sm"
            ></Image>
            <p>McMaster Blockchain Club</p>
          </Link>
          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Join
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <div className="absolute w-full border-t border-gray-200 bg-black py-5 text-center md:mt-0 mt-20">

        <div className="p-10 flex md:flex-row flex-col items-center gap-4 ">
          <Link href="/">
            <Image
              src="/block-logo.png"
              alt="Blockchain Club logo"
              width="160"
              height="160"
              className="mr-1 rounded-sm"
            ></Image>
          </Link>

          <Link href="/team" className="text-2xl text-white font-mono md:mt-5 md:mb-0 mb-8">Our Team</Link>

        </div>
        <div className="absolute bottom-0 left-0 text-[#817c73] text-xs">© 2023 McMaster Blockchain Club</div>
        <div className="absolute bottom-0 md:right-0 mb-3 mr-4 text-xs">
          <p className="text-[#817c73]">
            Website Built by{" "}
            <a
              className="text-[#817c73] underline underline-offset-2 transition-colors"
              href="https://jaavin.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jaavin Mohanakumar
            </a>
          </p>

        </div>
      </div>
    </>
  );
}
