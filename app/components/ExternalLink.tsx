import { ArrowUpRightIcon } from "./icons";

type Props = {
  href: string;
  label: string;
  ariaLabel?: string;
  className?: string;
};

export default function ExternalLink({
  href,
  label,
  ariaLabel,
  className = "",
}: Props) {
  const lastSpace = label.lastIndexOf(" ");
  const head = lastSpace === -1 ? "" : label.slice(0, lastSpace + 1);
  const lastWord = lastSpace === -1 ? label : label.slice(lastSpace + 1);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabel ?? `${label} (opens in a new tab)`}
      className={`group/link inline-flex items-baseline font-medium leading-tight text-slate-200 text-base hover:text-teal-300 ${className}`}
    >
      <span>
        {head}
        <span className="inline-block">
          {lastWord}
          <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  );
}
