import { experience, siteConfig } from "@/app/data/content";
import ExternalLink from "./ExternalLink";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="mb-16 scroll-mt-24"
    >
      <SectionHeading title="Experience" />

      <ol className="group/list">
        {experience.map((job) => (
          <li key={job.company} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
              <div
                aria-hidden="true"
                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
              />

              <header
                aria-label={`${job.startDate} to ${job.endDate}`}
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              >
                {job.startDate} - {job.endDate}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${job.role} at ${job.company} (opens in a new tab)`}
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 group-hover:text-teal-300"
                  >
                    <span>
                      {job.role} ·{" "}
                      <span className="inline-block">
                        {job.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </a>
                </h3>

                <p className="mt-2 text-sm leading-normal">{job.description}</p>

                {job.tech.length > 0 && (
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.tech.map((tech) => (
                      <li className="mr-1.5 mt-2" key={tech}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <ExternalLink
          href={siteConfig.resumeUrl}
          label={siteConfig.resumeLabel}
        />
      </div>
    </section>
  );
}
