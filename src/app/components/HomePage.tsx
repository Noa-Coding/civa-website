import { Link } from "react-router";
import { CivaAppPreview } from "./CivaAppPreview";
import { useLang } from "./LanguageContext";
import civaIcon from "@/imports/Civa_icon.png";

const content = {
  zh: {
    tagline: "爱吃饭、爱做饭星人的电子手帐",
    description:
      "Civa 是一款本地厨房电子手帐 App，帮你管理想吃的菜、做过的菜和近期用餐计划。你可以建立自己的菜单库，将菜品一键安排到指定日期，查看冰箱食材与临期提醒，并通过轻量回顾保存日常做饭记忆。",
    ctaSupport: "技术支持",
    ctaPrivacy: "隐私政策",
    contactLabel: "联系我们",
  },
  en: {
    tagline: "A digital journal for those who live to eat and love to cook",
    description:
      "Civa is a local-first kitchen journal App that helps you manage dishes you want to eat, meals you've cooked, and your upcoming meal plans. Build your own menu library, schedule dishes to specific dates in one tap, track fridge ingredients with expiry reminders, and preserve everyday cooking memories through lightweight reflections.",
    ctaSupport: "Support",
    ctaPrivacy: "Privacy Policy",
    contactLabel: "Contact",
  },
};

function SquiggleUnderline({ width = 120 }: { width?: number }) {
  return (
    <svg
      width={width}
      height="8"
      viewBox={`0 0 ${width} 8`}
      fill="none"
      aria-hidden
      style={{ display: "block", marginTop: 2 }}
    >
      <path
        d={`M2 5 C${width * 0.15} 2, ${width * 0.3} 7, ${width * 0.45} 4 C${width * 0.6} 1, ${width * 0.75} 6.5, ${width - 2} 3`}
        stroke="var(--yellow400)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Sparkle({ size = 12, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden style={style}>
      <path
        d="M6 1 L6.7 4.7 L10 6 L6.7 7.3 L6 11 L5.3 7.3 L2 6 L5.3 4.7 Z"
        fill="var(--background4)"
        opacity="0.7"
      />
    </svg>
  );
}

export function HomePage() {
  const { lang } = useLang();
  const c = content[lang];
  const isCn = lang === "zh";

  return (
    <div style={{ fontFamily: isCn ? "'Noto Sans SC', sans-serif" : "'DM Sans', sans-serif" }}>
      {/* Hero section */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* App icon */}
            <div className="mb-7 relative" style={{ width: 88, height: 88 }}>
              <img
                src={civaIcon}
                alt="Civa app icon"
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: 22,
                  objectFit: "cover",
                  boxShadow: "0 8px 28px var(--shadow2), 0 2px 8px var(--shadow1)",
                  border: "1px solid rgba(70,89,79,0.10)",
                  display: "block",
                }}
              />
              <Sparkle size={10} style={{ position: "absolute", top: -4, right: -4 }} />
            </div>

            {/* App name */}
            <div className="mb-1">
              <h1
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "2.25rem",
                  lineHeight: 1.2,
                  fontWeight: 500,
                  color: "var(--background1)",
                  letterSpacing: "-0.02em",
                }}
              >CIVA 刺饭</h1>
              <SquiggleUnderline width={180} />
            </div>

            {/* Tagline */}
            <p
              className="mt-5 mb-4"
              style={{
                fontSize: "1.0625rem",
                color: "var(--accent)",
                fontWeight: 400,
                letterSpacing: isCn ? "0.03em" : "0.01em",
              }}
            >
              {c.tagline}
            </p>

            {/* Description */}
            <p
              className="mb-10"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                color: "var(--background3)",
                maxWidth: "30rem",
              }}
            >
              {c.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/support"
                className="inline-flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: "var(--background1)",
                  color: "var(--yellow50)",
                  borderRadius: "99px",
                  padding: "0.8125rem 1.875rem",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  boxShadow: "0 2px 8px var(--shadow1)",
                  border: "2.5px solid var(--yellow100)",
                  whiteSpace: "nowrap",
                }}
              >
                {c.ctaSupport}
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center justify-center transition-all duration-200"
                style={{
                  background: "var(--yellow50)",
                  color: "var(--background1)",
                  borderRadius: "99px",
                  padding: "0.8125rem 1.875rem",
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  boxShadow: "0 2px 8px var(--shadow1)",
                  border: "2.5px solid var(--yellow50)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--yellow100)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--yellow50)";
                }}
              >
                {c.ctaPrivacy}
              </Link>
            </div>
          </div>

          {/* Right: phone preview */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <CivaAppPreview />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section
        className="py-10 text-center"
        style={{ borderTop: "1px solid var(--shadow1)" }}
      >
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-2">
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--background4)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {c.contactLabel}
          </p>
          <a
            href="mailto:support@civakitchen.site"
            className="hover:opacity-60 transition-opacity duration-200"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1rem",
              color: "var(--background1)",
            }}
          >
            support@civakitchen.site
          </a>
        </div>
      </section>
    </div>
  );
}
