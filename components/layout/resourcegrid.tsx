import Arrow from "../shared/icons/Arrow";
import { resources } from "../../constants/resources";
import { email } from "../../constants/info";

export default function ResourceGrid() {
  return (
    <>
      <section>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map(({ title, description, link, linkText }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition-all duration-200 ease-out hover:translate-y-[-0.25rem] hover:shadow-md"
            >
              <div className="h-55 py-8 px-5">
                <h3 className="font-cal text-xl tracking-wide">{title}</h3>
                <p className="text-md my-2 h-[6em] italic text-gray-600 md:h-[3em]">
                  {description}
                </p>
                <a
                  href={link}
                  className=" mt-5  flex w-full justify-center gap-5 rounded-full border border-gray-300 bg-white py-2.5 text-center hover:border-black"
                >
                  <p className="text-black">{linkText}</p>
                  <Arrow className="black" />
                </a>
              </div>
            </div>
          ))}
          <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-[#26292b] shadow-sm hover:translate-y-[-0.05rem]">
            <div className="h-55 py-8 px-5">
              <h3 className="font-cal text-xl tracking-wide text-white">
                Submit a Resource
              </h3>
              <p className="text-md my-2 h-[6em] italic text-gray-200 md:h-[3em]">
                Do you have a resource that would benefit the community?
              </p>
              <a
                href={email}
                className=" mt-5  flex w-full justify-center gap-5 rounded-full border border-gray-700 bg-[#6d7379] py-2.5 text-center hover:border-white"
              >
                <p className="text-gray-200">Submit Resource</p>
                <Arrow className="rgb(229 231 235)" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
