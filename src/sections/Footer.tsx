import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/taica.rullz/",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/taica.rullz/",
  },
  {
    title: "GitHub",
    href: "https://github.com/mihaiDev07?tab=repositories",
  },
];

export const Footer = () => {
  return (
    <footer className="relative isolate overflow-x-clip">
      <div
        className="pointer-events-none absolute h-[400px] w-[1600px] bottom-0 left-1/2 
        -translate-x-1/2   bg-emerald-300/40
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
      -z-10
      "
      ></div>
      <div className="container">
        <div
          className="border-t border-white/15 py-6
         text-sm flex flex-col  md:flex-row md:justify-between items-center gap-8"
        >
          <div className="flex items-center gap-2 text-white/40">
            <span>&copy;2026. All rights reserved.</span>
            <span aria-hidden="true">&bull;</span>
            <Link href="https://github.com/mihaiDev07" target="_blank" rel="noopener noreferrer" prefetch={false} className="inline-flex cursor-pointer items-center gap-1.5 font-semibold text-white/80 transition hover:text-emerald-300">
              mihaiDev07 <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>
          <div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((link) => (
                <Link
                  className="inline-flex cursor-pointer items-center gap-1.5 transition hover:text-emerald-300"
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
