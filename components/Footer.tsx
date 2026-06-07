export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 mt-24 md:mt-32">
      <div className="container-custom py-10 md:py-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-4 md:gap-6">
            <a
              href="https://www.linkedin.com/in/karim-abouelseoud-1a7390137/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] md:text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] text-muted/50 font-mono">
            Adapted from Jaidev Jayakumar site source with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}