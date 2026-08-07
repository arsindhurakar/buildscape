import Image from "next/image";
import { certificates } from "@/app/data/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./icons";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Selected certificates"
      className="mb-16 scroll-mt-24"
    >
      <SectionHeading title="Certifications" />

      <ul className="group/list">
        {certificates.map((certificate) => {
          // Keep the last word (glued to the arrow) in an inline-block span so
          // it stays together when the title wraps - same as ExternalLink.
          const lastSpace = certificate.title.lastIndexOf(" ");
          const head =
            lastSpace === -1 ? "" : certificate.title.slice(0, lastSpace + 1);
          const lastWord =
            lastSpace === -1
              ? certificate.title
              : certificate.title.slice(lastSpace + 1);

          return (
            <li key={certificate.title} className="mb-12">
              <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                {/* Highlight backdrop, revealed on hover (desktop only) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-[background-color,box-shadow] motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                />

                <Image
                  src={certificate.thumbnail}
                  alt=""
                  width={200}
                  height={48}
                  unoptimized
                  className="z-10 col-span-2 aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:col-span-2"
                />

                <div className="z-10 col-span-6">
                  <p className="-mt-1 text-sm font-semibold leading-6">
                    {certificate.year}
                  </p>
                  <h3 className="-mt-1">
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${certificate.title} (opens in a new tab)`}
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 group-hover:text-teal-300"
                    >
                      <span>
                        {head}
                        <span className="inline-block">
                          {lastWord}
                          <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
