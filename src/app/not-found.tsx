import Link from "next/link";
import { Header } from "@/sections/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <Header />
      <div>
        <p className="font-bold uppercase tracking-widest text-emerald-300">404</p>
        <h1 className="font-serif text-4xl md:text-6xl mt-4">Page not found</h1>
        <p className="text-white/60 mt-5">The page you are looking for does not exist.</p>
        <Link href="/" className="inline-flex mt-8 h-12 items-center rounded-xl bg-white px-6 font-semibold text-gray-950 hover:bg-white/80 transition">Return home</Link>
      </div>
    </main>
  );
}
