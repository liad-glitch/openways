import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-10">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-ink-soft">Singapore</p>
        </div>
        <div className="flex items-center gap-8 text-sm">
          <a
            href="https://www.linkedin.com/in/liadkaikov/"
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@openways.sg"
            className="text-ink-soft transition-colors hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1200px] px-6 text-xs text-ink-soft/80 lg:px-10">
        &copy; {new Date().getFullYear()} OpenWays. All rights reserved.
      </p>
    </footer>
  );
}
