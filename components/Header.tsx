import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";
import LocationBadge from "./LocationBadge";

export default function Header() {
  return (
    <header className="border-b border-foreground/5 bg-background sticky top-0 z-40 backdrop-blur-sm bg-background/95">
      <nav className="container-custom py-5 md:py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0">
          <div className="flex-1">
            <AnimatedLogo />
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 md:gap-6">
            <ul className="flex items-center gap-3 md:gap-8">
              <li>
                <Link href="/" className="link-underline text-[12px] md:text-[14px] font-mono relative group">
                  <span className="relative z-10 transition-colors group-hover:text-accent">Home</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
              <li>
                <Link href="/personal" className="link-underline text-[12px] md:text-[14px] font-mono relative group">
                  <span className="relative z-10 transition-colors group-hover:text-accent">Personal</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
              <li>
                <Link href="/reads" className="link-underline text-[12px] md:text-[14px] font-mono relative group">
                  <span className="relative z-10 transition-colors group-hover:text-accent">Reads</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </li>
            </ul>

            <div className="scale-90 md:scale-100">
              <LocationBadge />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
