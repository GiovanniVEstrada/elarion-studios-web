export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10"
      style={{
        background: "#040f19",
        borderTop: "1px solid rgba(116,216,255,0.07)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-xs text-luren-muted">
          © {year} Elarion Studios. All rights reserved.
        </p>

        <nav className="flex items-center gap-6" aria-label="Footer">
          <a
            href="/privacy"
            className="text-xs text-luren-muted transition-colors duration-200 hover:text-luren-cyan"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="text-xs text-luren-muted transition-colors duration-200 hover:text-luren-cyan"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
