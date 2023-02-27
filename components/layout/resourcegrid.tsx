import Image from "next/image";
import { resources } from "../../constants/constants";


export default function ResourceGrid() {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 w-full">
                    {resources.map(({ title, description, link, linkText }) => (
                        <a key={title}>
                            <div className="rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm bg-white hover:shadow-md hover:translate-y-[-0.25rem] transition-all ease-out duration-200">
                                    <div className="py-8 px-5 h-55">
                                        <h3 className="font-cal text-xl tracking-wide">{title}</h3>
                                        <p className="text-md italic text-gray-600 my-2 h-[6em] md:h-[3em]">{description}</p>
                                        <a href={link} className=" bg-white  rounded-full border border-gray-300 hover:border-black py-2.5 text-center w-full flex justify-center gap-5 mt-5">
                                            <p className="text-black">{linkText}</p>
                                            <Image src="/arrow.svg" alt={linkText} width={24} height={24} className="no-select-or-drag w-6" />
                                        </a>
                                    </div>
                            </div>
                        </a>
                        
                    ))}                
                </div>
            </section>
        </>
    )
}

