import type { StaticImageData } from "next/image";
import goldenLightsImage from "@/assets/images/dark-saas-landing-page.png";
import rullzShopImage from "@/assets/images/light-saas-landing-page.png";

export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  description: string;
  results: string[];
  technologies: string[];
  live: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    slug: "golden-lights",
    title: "Golden Lights",
    company: "Personal Project",
    year: "2026",
    description:
      "A polished, responsive web experience built with a strong focus on visual hierarchy, smooth interactions, and a consistent experience across screen sizes.",
    results: [
      "Responsive interface for mobile and desktop",
      "Modern visual design and clear content hierarchy",
      "Fast deployment and reliable hosting on Vercel",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://golden-lights-blond.vercel.app/",
    image: goldenLightsImage,
  },
  {
    slug: "rullzshop",
    title: "Rullz Shop",
    company: "E-commerce Project",
    year: "2026",
    description:
      "A modern storefront concept that presents products through a clean, approachable interface designed to make browsing simple and enjoyable.",
    results: [
      "Clear and accessible product presentation",
      "Responsive shopping experience",
      "Reusable components for consistent UI",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://rullzshop.vercel.app/",
    image: rullzShopImage,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
