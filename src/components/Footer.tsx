import React from "react";
import { siteConfig } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-zinc-500">
          <span>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <span className="hidden sm:inline text-zinc-800">&bull;</span>
          <a
            href={siteConfig.socials.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span>Source Code</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Deployed on Vercel Badge */}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 1155 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m577.3 0 577.4 1000H0z" />
          </svg>
          <span>Deployed on Vercel</span>
        </a>
      </div>
    </footer>
  );
};
