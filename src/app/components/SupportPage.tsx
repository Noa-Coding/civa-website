import { Link } from "react-router";
import { Mail } from "lucide-react";
import { useLang } from "./LanguageContext";

const APP_NAME = "Civa";
const SUPPORT_EMAIL = "support@civakitchen.site";

const content = {
  zh: {
    eyebrow: "帮助与反馈",
    title: "技术支持",
    titleSub: "Technical Support",
    intro:
      "如果你在使用 App 时遇到问题、Bug，或者有功能建议，欢迎通过邮件联系开发者。我会尽力在合理时间内回复每一封邮件。",
    ctaLabel: "联系开发者",
    tipsTitle: "邮件中可以包含",
    tips: [
      "遇到的问题或功能建议描述",
      "App 版本号（Settings → About 中可查）",
      "iOS 版本和设备型号",
      "复现问题的步骤（如适用）",
    ],
    backHome: "← 返回首页",
    navPrivacy: "隐私政策",
  },
  en: {
    eyebrow: "Help & Feedback",
    title: "Technical Support",
    titleSub: "技术支持",
    intro:
      "If you encounter any issues, bugs, or have a feature request, feel free to reach out via email. I read every message and do my best to respond.",
    ctaLabel: "Contact Developer",
    tipsTitle: "What to include",
    tips: [
      "Description of the issue or feature request",
      "App version (found in Settings → About)",
      "iOS version and device model",
      "Steps to reproduce the issue (if applicable)",
    ],
    backHome: "← Back to Home",
    navPrivacy: "Privacy Policy",
  },
};

export function SupportPage() {
  const { lang } = useLang();
  const c = content[lang];
  const isCn = lang === "zh";

  const mailtoBody = encodeURIComponent(
    isCn
      ? `请描述你遇到的问题或建议：\n\n\n---\nApp Version: \niOS Version: \nDevice: `
      : `Please describe your issue or feedback:\n\n\n---\nApp Version: \niOS Version: \nDevice: `
  );
  const mailtoSubject = encodeURIComponent(`${APP_NAME} Feedback`);
  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div style={{ fontFamily: isCn ? "'Noto Sans SC', sans-serif" : "'DM Sans', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <section
          className="pt-14 pb-10"
          style={{ borderBottom: "1px solid var(--shadow1)" }}
        >
          <p
            className="mb-3"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--background4)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {c.eyebrow}
          </p>
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "2rem",
              lineHeight: 1.25,
              fontWeight: 500,
              color: "var(--background1)",
              letterSpacing: "-0.02em",
              marginBottom: "0.25rem",
            }}
          >
            {c.title}
          </h1>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontSize: "1.0625rem",
              color: "var(--background3)",
            }}
          >
            {c.titleSub}
          </p>
        </section>

        {/* Body */}
        <section className="py-10">
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "var(--background1)",
              maxWidth: "36rem",
              marginBottom: "2.5rem",
            }}
          >
            {c.intro}
          </p>

          {/* Email card */}
          <div
            className="inline-flex flex-col gap-1 rounded-3xl px-5 py-4 mb-8"
            style={{
              background: "var(--yellow50)",
              border: "1.5px solid var(--shadow1)",
              boxShadow: "0 2px 8px var(--shadow1)",
            }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--background4)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Email
            </span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hover:opacity-60 transition-opacity duration-200"
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "1.0625rem",
                color: "var(--background1)",
              }}
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* CTA button */}
          <div className="flex mb-12">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
              style={{
                background: "var(--background1)",
                color: "var(--yellow50)",
                borderRadius: "99px",
                padding: "0.875rem 1.875rem",
                fontSize: "0.9375rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                boxShadow: "0 2px 8px var(--shadow1)",
                border: "2.5px solid var(--yellow100)",
              }}
            >
              <Mail size={15} strokeWidth={1.75} />
              {c.ctaLabel}
            </a>
          </div>

          {/* Tips card */}
          <div
            className="rounded-3xl p-6"
            style={{
              background: "var(--yellow-20%)",
              border: "1.5px solid var(--shadow1)",
            }}
          >
            <p
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--background1)",
                marginBottom: "1rem",
              }}
            >
              {c.tipsTitle}
            </p>
            <ul className="space-y-2.5">
              {c.tips.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "var(--background2)",
                  }}
                >
                  <span
                    className="mt-2 shrink-0 rounded-full block"
                    style={{ width: 6, height: 6, background: "var(--yellow500)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom nav */}
        <nav
          className="py-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          style={{ borderTop: "1px solid var(--shadow1)" }}
        >
          <Link
            to="/"
            className="hover:opacity-60 transition-opacity duration-200"
            style={{ fontSize: "0.875rem", color: "var(--background3)" }}
          >
            {c.backHome}
          </Link>
          <Link
            to="/privacy"
            className="hover:opacity-60 transition-opacity duration-200"
            style={{ fontSize: "0.875rem", color: "var(--background3)" }}
          >
            {c.navPrivacy}
          </Link>
        </nav>
      </div>
    </div>
  );
}
