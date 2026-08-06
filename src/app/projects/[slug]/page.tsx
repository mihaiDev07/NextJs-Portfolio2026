import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Card from "@/components/Card";
import ActionLink from "@/components/ActionLink";
import { getProjectBySlug, projects } from "@/data/projects";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

type ProjectPageProps = { params: { slug: string } };

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  return project ? { title: project.title, description: project.description } : { title: "Project not found" };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pt-28">
      <Header />
      <article className="container pb-20">
        <Link href="/projects" className="text-sm text-white/60 hover:text-white transition">&larr; All projects</Link>
        <div className="mt-10 text-center">
          <p className="uppercase tracking-widest text-sm font-bold text-emerald-300">{project.company} &bull; {project.year}</p>
          <h1 className="font-serif text-4xl md:text-6xl mt-4">{project.title}</h1>
          <p className="text-white/60 max-w-2xl mx-auto mt-6 md:text-lg">{project.description}</p>
        </div>
        <Card className="mt-12 overflow-hidden p-6 md:p-10">
          <Image src={project.image} alt={`${project.title} project preview`} className="w-full rounded-2xl border border-white/10" priority />
          <div className="grid gap-10 md:grid-cols-2 mt-10">
            <div>
              <h2 className="font-serif text-2xl">Project highlights</h2>
              <ul className="flex flex-col gap-4 mt-5">
                {project.results.map((result) => <li key={result} className="flex gap-3 text-white/60"><CheckCircleIcon className="size-6 shrink-0 text-emerald-300" /><span>{result}</span></li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl">Technologies</h2>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70">{technology}</span>)}
              </div>
            </div>
          </div>
          <ActionLink href={project.live} ariaLabel={`Visit ${project.title} live site`} className="relative z-20 mt-10 inline-flex h-12 cursor-pointer pointer-events-auto items-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Visit Live Site <ArrowUpRightIcon className="size-4" /></ActionLink>
        </Card>
      </article>
      <Footer />
    </main>
  );
}
