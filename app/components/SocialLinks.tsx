import { socials, type SocialIcon } from "@/app/data/content";
import { EmailIcon, GithubIcon, LinkedinIcon } from "./icons";

const iconMap: Record<
  SocialIcon,
  (props: { className?: string }) => React.ReactElement
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
};

export default function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul
      className={`ml-1 mt-8 flex items-center ${className}`}
      aria-label="Social media"
    >
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <li key={social.label} className="mr-5 shrink-0 text-xs">
            <a
              href={social.href}
              className="block transition-colors hover:text-slate-200 focus-visible:text-slate-200"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} (opens in a new tab)`}
              title={social.label}
            >
              <span className="sr-only">{social.label}</span>
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
