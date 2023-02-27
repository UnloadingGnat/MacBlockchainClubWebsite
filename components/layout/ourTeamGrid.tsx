import Image from "next/image";
import { Google, Github } from "@/components/shared/icons";
import WebsiteLink from "../shared/icons/websitelink";
import { leadershipTeam, advisoryBoard } from "../../constants/ourTeam";


export function LinkedinButton({ url }: any) {
    return (
        <a
            className="rounded-full border w-10 border-[#0172af89] bg-[#0173af] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0172af89] hover:text-black mt-2"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <Google className="h-5 w-5 text-white ml-[0.5px]" />
        </a>
    )
}

export function PersonalWebsite({ url }: any) {
    return (
        <a
            className="rounded-full border w-10 border-blue-900 bg-blue-900 p-1.5 px-2 text-sm text-white transition-all hover:bg-blue-300  mt-2"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <WebsiteLink className="black" />
        </a>
    )
}

export function GithubButton({ url }: any) {
    return (
        <a
            className="rounded-full border w-10 border-gray-800 bg-gray-800 p-1.5 px-2 text-sm text-white transition-all hover:bg-gray-400  mt-2"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <Github className="ml-[0.5px]" />
        </a>
    )
}

interface Props {
    team: string;
}

export default function TeamGrid({team}: Props) {
    const teamData = team === "leadership" ? leadershipTeam : advisoryBoard;
 
    return (
        <>
            <section>
                <div className="grid grid-cols-1 gap-4  md:grid-cols-4 md:mt-14">
                    {teamData.map(({ name, position, description, linkedin, personalWebsite, githubLink ,image, topMargin }) => (
                        <div key={name} className=" p-4  md:h-56 flex flex-col gap-1">
                            <Image
                                src={image}
                                alt={`${name} Profile Picture`}
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{ width: '200px', height: 'auto' }}
                                className="mr-1 rounded-xl"
                            ></Image>
                            <h2 className={`${topMargin} text-black text-2xl font-medium`}>{name}</h2>
                            <h3 className="text-black text-base font-medium pb-2 border-b-2">{position}</h3>
                            <p className="mt-2 text-[#817c73] text-base">{description}</p>
                            <div className="flex flex-row gap-2 mt-2">
                                <LinkedinButton url={linkedin} />
                                {(personalWebsite !== false && personalWebsite !== undefined) && <PersonalWebsite url={personalWebsite} />}
                                {(githubLink !== false && githubLink !== undefined) && <GithubButton url={githubLink} />}   
                            </div>
                        </div>
                    ))}
                </div>      
            </section>
        </>
    )
}



