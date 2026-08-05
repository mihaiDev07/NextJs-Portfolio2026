import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="   Real-world Results"
          title=" Featured Projects"
          description=" See how i transform concepts into engaging digital experiences"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20 ">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10  
              lg:pt-16 lg-px-20
             "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
                inline-flex gap-2 font-bold uppercase tracking-widest text-sm
               text-transparent bg-clip-text
                "
                  >
                    <span>{project.company} </span>
                    <span>&bull;</span>
                    <span>{project.year} </span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}{" "}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={result}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <button
                      className="bg-white text-gray-950 
                h-12 w-full rounded-xl font-semibold inline-flex
                items-center justify-center gap-2 mt-8 md:w-auto md:px-6
                "
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center h-12 mt-3 md:ml-3 px-6 rounded-xl border border-white/15 font-semibold hover:bg-white/10 transition"
                  >
                    View Case Study
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full
                    lg:w-auto lg:max-w-none
                    "
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
