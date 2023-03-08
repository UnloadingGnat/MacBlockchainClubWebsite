import Image from "next/image";
import {Github, Google} from "@/components/shared/icons";
import WebsiteLink from "../shared/icons/websitelink";
import {advisoryBoard, leadershipTeam} from "../../constants/ourTeam";

export function LinkedinButton({url}: any) {
    return (
        <a
            className="mt-2 w-10 rounded-full border border-[#0172af89] bg-[#0173af] p-1.5 px-2 text-sm text-white transition-all hover:bg-[#0172af89] hover:text-black"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <Google className="ml-[0.5px] h-5 w-5 text-white"/>
        </a>
    );
}

export function PersonalWebsite({url}: any) {
    return (
        <a
            className="mt-2 w-10 rounded-full border border-blue-900 bg-blue-900 p-1.5 px-2 text-sm text-white transition-all  hover:bg-blue-300"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <WebsiteLink/>
        </a>
    );
}

export function GithubButton({url}: any) {
    return (
        <a
            className="mt-2 w-10 rounded-full border border-gray-800 bg-gray-800 p-1.5 px-2 text-sm text-white transition-all  hover:bg-gray-400"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <Github className="ml-[0.5px]"/>
        </a>
    );
}

interface Props {
    team: string;
}

export default function TeamGrid({team}: Props) {
    const teamData = team === "leadership" ? leadershipTeam : advisoryBoard;

    return (
        <>
            <section>
                <div className="grid grid-cols-1 gap-4  md:mt-14 md:grid-cols-4">
                    {teamData.map(
                        ({
                             name,
                             position,
                             description,
                             linkedin,
                             personalWebsite,
                             githubLink,
                             image,
                             topMargin,
                         }) => (
                            <div key={name} className=" flex  flex-col gap-1 p-4 md:h-56">
                                {image ? (
                                    <Image
                                        src={image}
                                        alt={`${name} Profile Picture`}
                                        style={{width: "200px", height: "auto"}}
                                        className="mr-1 rounded-xl"
                                    />
                                ) : null}
                                <h2 className={`${topMargin} text-2xl font-medium text-black`}>
                                    {name}
                                </h2>
                                <h3 className="border-b-2 pb-2 text-base font-medium text-black">
                                    {position}
                                </h3>
                                <p className="mt-2 text-base text-[#817c73]">{description}</p>
                                <div className="mt-2 flex flex-row gap-2">
                                    <LinkedinButton url={linkedin}/>
                                    {personalWebsite !== false &&
                                        personalWebsite !== undefined && (
                                            <PersonalWebsite url={personalWebsite}/>
                                        )}
                                    {githubLink !== false && githubLink !== undefined && (
                                        <GithubButton url={githubLink}/>
                                    )}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </section>
        </>
    );
}
