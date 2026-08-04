import { siteConfig } from "@/app/data/content";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-xs leading-relaxed text-slate-500 sm:pb-0">
      {siteConfig.footerText.map((segment, i) =>
        segment.href ? (
          <a
            key={i}
            href={segment.href}
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium text-slate-200 transition hover:text-teal-300 focus-visible:text-teal-300"
          >
            {segment.text}
          </a>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </footer>
  );
}
