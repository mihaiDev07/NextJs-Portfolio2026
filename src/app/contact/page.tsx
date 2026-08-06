import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = { title: "Contact", description: "Get in touch to discuss a frontend or web development project." };

export default function ContactPage() {
  return (
    <><Header /><main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[700px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="container relative mx-auto max-w-3xl">
        <div className="mb-10 text-center"><p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">Let&apos;s work together</p><h1 className="mt-3 font-serif text-4xl md:text-6xl">Tell me about your project</h1><p className="mx-auto mt-4 max-w-2xl text-white/60 md:text-lg">Share what you&apos;re building, your goals, and any timeline you have in mind. I&apos;ll get back to you as soon as possible.</p></div>
        <section aria-label="Contact form" className="rounded-3xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl backdrop-blur md:p-10"><ContactForm /></section>
      </div>
    </main><Footer /></>
  );
}
