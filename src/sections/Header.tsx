"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", href: "/", section: "home" },
  { title: "Projects", href: "/projects", section: "projects" },
  { title: "About", href: "/#about", section: "about" },
  { title: "Contact", href: "/contact", section: "contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(
    pathname.startsWith("/projects") ? "projects" : "home",
  );

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.location.hash === "#about") setActiveSection("about");
      else if (window.location.hash === "#contact") setActiveSection("contact");
      else if (pathname.startsWith("/projects")) setActiveSection("projects");
      else if (pathname.startsWith("/contact")) setActiveSection("contact");
      else setActiveSection("home");
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-3 flex justify-center items-center z-10 ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur ">
        {navItems.map((item) => (
          <Link
            key={item.section}
            className={`nav-item ${
              activeSection === item.section
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            href={item.href}
            onClick={() => setActiveSection(item.section)}
            aria-current={activeSection === item.section ? "page" : undefined}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
