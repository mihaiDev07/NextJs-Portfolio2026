import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my selected frontend development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28">
      <Header />
      <div className="container mb-4">
        <Link href="/" className="text-sm text-white/60 hover:text-white transition">&larr; Back to home</Link>
      </div>
      <ProjectsSection />
      <Footer />
    </main>
  );
}
