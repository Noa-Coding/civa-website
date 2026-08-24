import { Link, useLocation } from "react-router";
import { useLang } from "./LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

function BrushDivider() {
  return (
    <svg
      width="48"
      height="6"
      viewBox="0 0 48 6"
      fill="none"
      style={{ display: "block" }}
      aria-hidden
    >
      <path
        d="M2 3.5 C8 2, 16 4.5, 24 3 C32 1.5, 40 4, 46 2.5"
        stroke="var(--background4)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { lang, setLang } = useLang();

  const navLinks = [
    { to: "/", label: { zh: "首页", en: "Home" } },
    { to: "/support", label: { zh: "技术支持", en: "Support" } },
    { to: "/privacy", label: { zh: "隐私政策", en: "Privacy" } },
  ];

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Noto Sans SC', sans-serif",
        background: "var(--yellow100)",
        color: "var(--background1)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Nav */}
      <header style={{ borderBottom: "1px solid var(--shadow1)" }}>
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200 shrink-0"
          >
            <span
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "1.1875rem",
                fontWeight: 500,
                color: "var(--background1)",
                letterSpacing: "-0.01em",
              }}
            >
              Civa
            </span>
          </Link>

          {/* Right side: nav links + lang toggle */}
          <div className="flex items-center gap-1 flex-wrap justify-end">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "99px",
                    background: isActive ? "var(--background1)" : "transparent",
                    color: isActive ? "var(--yellow50)" : "var(--background3)",
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: "0.02em",
                    transition: "all 0.18s ease",
                    fontFamily: lang === "zh" ? "'Noto Sans SC', sans-serif" : "'DM Sans', sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label[lang]}
                </Link>
              );
            })}

            {/* Language toggle */}
            <div
              className="flex items-center ml-2 rounded-full p-0.5"
              style={{
                background: "var(--yellow50)",
                border: "1.5px solid var(--shadow1)",
              }}
            >
              {(["zh", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    padding: "0.25rem 0.625rem",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    fontWeight: lang === l ? 600 : 400,
                    background: lang === l ? "var(--background1)" : "transparent",
                    color: lang === l ? "var(--yellow50)" : "var(--background4)",
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    border: "none",
                    lineHeight: 1.4,
                  }}
                >
                  {l === "zh" ? "中" : "EN"}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--shadow1)" }}>
        <div className="max-w-3xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <BrushDivider />
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--background4)",
                letterSpacing: "0.04em",
              }}
            >
              © 2026 [DEVELOPER NAME]
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              style={{ fontSize: "0.8125rem", color: "var(--background3)" }}
              className="hover:opacity-60 transition-opacity duration-200"
            >
              {lang === "zh" ? "隐私政策" : "Privacy"}
            </Link>
            <Link
              to="/support"
              style={{ fontSize: "0.8125rem", color: "var(--background3)" }}
              className="hover:opacity-60 transition-opacity duration-200"
            >
              {lang === "zh" ? "技术支持" : "Support"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
