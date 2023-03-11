import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./join-modal";
import { Google, Instagram } from "@/components/shared/icons";

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
  const scrolled = useScroll(20);
  const [open, setOpen] = useState(false);

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
          <Link
            href="/"
            className="flex items-center font-display text-base md:text-2xl"
          >
            <Image
              src="/block-logo.png"
              alt="Blockchain Club logo"
              width="60"
              height="60"
              className="mr-1 rounded-sm"
            ></Image>
            <p>McMaster Blockchain Club</p>
          </Link>
          <div className="flex gap-9">
            {/* Make seprate copmonent later!! */}
            {/* CHANGE MD to LG if you add more items!!!!!!! */}
            <Link
              href="/events"
              className={"mt-1 hidden hover:text-[#962845] md:block"}
            >
              Events
            </Link>
            <Link
              href="/team"
              className={"mt-1 hidden hover:text-[#962845] md:block"}
            >
              Our Team
            </Link>
            <Link
              href="/resources"
              className="mt-1 hidden hover:text-[#962845] md:block"
            >
              Resources
            </Link>
            <div>
              <button
                className="hidden rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black md:block"
                onClick={() => setShowSignInModal(true)}
              >
                Join
              </button>
              {/* Mobile menu */}
            </div>
            <Image
              src="/menu.svg"
              height={20}
              width={20}
              className="no-select-or-drag top-0 left-0 md:hidden"
              onClick={() => setOpen(!open)}
              alt="menu bar img"
            ></Image>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-[8%] z-30 mt-24 flex w-[85%] flex-col gap-5 rounded-3xl border-[1px] border-gray-200 bg-white/50 p-9 backdrop-blur-lg md:hidden`}
      >
        <Link
          href="/events"
          className={`${
            open ? "block" : "hidden"
          } mt-1 self-center hover:text-[#962845] md:hidden`}
        >
          Events
        </Link>
        <Link
          href="/team"
          className={`${
            open ? "block" : "hidden"
          } mt-1 self-center hover:text-[#962845] md:hidden`}
        >
          Our Team
        </Link>
        <Link
          href="/resources"
          className={`${
            open ? "block" : "hidden"
          } mt-1 self-center hover:text-[#962845] md:hidden`}
        >
          Resources
        </Link>
        <button
          className={`${
            open ? "block" : "hidden"
          } rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black md:hidden`}
          onClick={() => setShowSignInModal(true)}
        >
          Join
        </button>
      </div>
      <main className="flex w-full flex-col items-center justify-center pt-32 pb-16">
        {children}
      </main>
      <div className="absolute mt-20 w-full border-t border-gray-200 bg-black py-5 text-center md:mt-0">
        <div className="flex flex-col items-center gap-4 p-10 md:flex-row">
          <Link href="/">
            <Image
              src="/block-logo.png"
              alt="Blockchain Club logo"
              width="160"
              height="160"
              className="mr-1 rounded-sm"
            ></Image>
          </Link>
          <a
            className="mt-5 ml-0 w-10 rounded-full border border-white bg-black p-1.5 px-2 text-sm text-white transition-all hover:bg-white hover:text-black md:ml-7"
            href="https://www.linkedin.com/company/macblockchain/"
            target="_blank"
            rel="noreferrer"
          >
            <Google className="ml-0.5 h-5 w-5" />
          </a>
          <a
            className="mt-5 ml-0 w-10 rounded-full border border-white bg-black p-1.5 px-2 text-sm text-white transition-all hover:bg-white hover:text-black md:ml-2"
            href="https://www.instagram.com/macblockchain/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="ml-0.5 h-5 w-5" />
          </a>
        </div>
        <div className="absolute bottom-0 right-0 mb-2 mr-3 text-xs text-[#817c73] md:mb-3 md:mr-5">
          © 2023 McMaster Blockchain Club
        </div>
      </div>
    </>
  );
}
