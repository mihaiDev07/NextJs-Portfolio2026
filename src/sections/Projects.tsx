import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ActionLink from "@/components/ActionLink";
import { projects, type Project } from "@/data/projects";

type ProjectsSectionProps = {
  items?: Project[];
  showSeeAll?: boolean;
};

export const ProjectsSection = ({
  items = projects.slice(0, 2),
  showSeeAll = false,
}: ProjectsSectionProps) => {
  return (
    <section id="projects" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="   Real-world Results"
          title=" Featured Projects"
          description=" See how i transform concepts into engaging digital experiences"
        />

        {showSeeAll && (
          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="relative z-20 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-white/15 px-5 font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              See All
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
        )}

        <div className="flex flex-col mt-10 gap-20 md:mt-16">
          {items.map((project) => (
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
                  <ActionLink href={project.live} className="relative z-20 mt-8 inline-flex h-12 w-full cursor-pointer pointer-events-auto items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 transition hover:bg-white/80 md:w-auto md:px-6">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </ActionLink>
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
