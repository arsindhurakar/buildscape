import Image from "next/image";
import { projects, siteConfig } from "@/app/data/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="mb-16 scroll-mt-24"
    >
      <SectionHeading title="Projects" />

      <ul className="group/list">
        {projects.map((project) => (
          <li key={project.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              {/* Highlight backdrop, revealed on hover (desktop only) */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-[background-color,box-shadow] motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
              />

              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <div>
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200"
                    >
                      <span>
                        {project.title}
                        <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  </div>
                </h3>

                <p className="mt-2 text-sm leading-normal">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <ul className="mt-2 flex flex-wrap">
                    {project.tech.map((tech) => (
                      <li className="mr-1.5 mt-2" key={tech}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Image
                src={project.image}
                alt={project.imageAlt}
                width={200}
                height={48}
                unoptimized
                className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          href={siteConfig.archiveUrl}
          className="group inline-flex items-center font-medium leading-tight text-teal-300 focus-visible:text-teal-300"
        >
          <span>{siteConfig.archiveLabel}</span>
          <ArrowRightIcon className="ml-2 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
