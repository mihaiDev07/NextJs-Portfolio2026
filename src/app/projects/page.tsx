import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my selected frontend development projects.",
};

const PROJECTS_PER_PAGE = 4;

type ProjectsPageProps = {
  searchParams?: { page?: string | string[] };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const pageValue = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
  const requestedPage = Number.parseInt(pageValue ?? "1", 10);
  const totalPages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE));
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const pageHref = (page: number) =>
    page === 1 ? "/projects" : `/projects?page=${page}`;

  return (
    <main className="min-h-screen pt-28">
      <Header />
      <div className="container mb-4">
        <Link
          href="/"
          className="cursor-pointer text-sm text-white/60 transition hover:text-white"
        >
          &larr; Back to home
        </Link>
      </div>

      <ProjectsSection items={visibleProjects} />

      <nav
        aria-label="Projects pagination"
        className="container -mt-6 mb-20 flex items-center justify-center gap-2"
      >
        {currentPage > 1 ? (
          <Link
            href={pageHref(currentPage - 1)}
            className="inline-flex h-10 cursor-pointer items-center rounded-lg border border-white/15 px-4 text-sm font-semibold transition hover:bg-white/10"
          >
            Previous
          </Link>
        ) : (
          <span className="inline-flex h-10 cursor-not-allowed items-center rounded-lg border border-white/10 px-4 text-sm text-white/30">
            Previous
          </span>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Link
              key={page}
              href={pageHref(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold transition ${
                page === currentPage
                  ? "border-white bg-white text-gray-900"
                  : "border-white/15 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {page}
            </Link>
          ),
        )}

        {currentPage < totalPages ? (
          <Link
            href={pageHref(currentPage + 1)}
            className="inline-flex h-10 cursor-pointer items-center rounded-lg border border-white/15 px-4 text-sm font-semibold transition hover:bg-white/10"
          >
            Next
          </Link>
        ) : (
          <span className="inline-flex h-10 cursor-not-allowed items-center rounded-lg border border-white/10 px-4 text-sm text-white/30">
            Next
          </span>
        )}
      </nav>

      <Footer />
    </main>
  );
}
