import Link from "next/link";
import { siteConfig } from "@/app/data/content";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{siteConfig.name}</Link>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {siteConfig.role}
        </h2>

        <p className="mt-4 max-w-xs leading-normal">{siteConfig.tagline}</p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <NavLinks className="mt-16 w-max" />
        </nav>
      </div>

      <SocialLinks />
    </header>
  );
}
