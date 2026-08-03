import SectionHeading from "@/app/components/SectionHeading";
import { aboutParagraphs } from "@/app/data/content";

export default function About() {
  return (
    <section id="about" aria-label="About me" className="mb-16 scroll-mt-24">
      <SectionHeading title="About" />
      <div className="space-y-4">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i}>
            {paragraph.map((segment, j) =>
              segment.href ? (
                <a
                  key={j}
                  href={segment.href}
                  className="font-medium text-slate-200 transition hover:text-teal-300 focus-visible:text-teal-300"
                >
                  {segment.text}
                </a>
              ) : (
                <span key={j}>{segment.text}</span>
              ),
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
