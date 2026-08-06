"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export default function ActionLink({
  href,
  className,
  ariaLabel,
  children,
}: ActionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    window.location.assign(href);
  };

  return (
    <Link
      href={href}
      prefetch={false}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
