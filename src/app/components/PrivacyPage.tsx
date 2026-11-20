import { Fragment, type ReactNode } from "react";
import { Link } from "react-router";
import { useLang } from "./LanguageContext";
import previousPolicy from "@/imports/PRIVACY_POLICY_1_1.md?raw";

import currentPolicy from "@/imports/PRIVACY_POLICY_1_2.md?raw";

// Reviewed local policy is rendered as text/React nodes, never raw HTML.
function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|<https?:\/\/[^>]+>|\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} rel="noopener noreferrer" className="underline">{link[1]}</a>;
    if (/^<https?:\/\//.test(part)) return <a key={index} href={part.slice(1, -1)} className="underline">{part.slice(1, -1)}</a>;
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function PolicyBody({ text }: { text: string }) {
  return <article className="space-y-5 py-10 leading-loose break-words" style={{ color: "var(--background2)" }}>
    {text.trim().split(/\n\s*\n/).map((block, i) => {
      if (block === "---") return <hr key={i} style={{ borderColor: "var(--shadow1)" }} />;
      if (block.startsWith("### ")) return <h2 key={i} className="text-xl font-medium pt-4" style={{ color: "var(--background1)" }}>{block.slice(4)}</h2>;
      if (block.startsWith("- ")) return <ul key={i} className="list-disc pl-6 space-y-3">{block.split(/\n- /).map((line, j) => <li key={j}>{inline(line.replace(/^- /, ""))}</li>)}</ul>;
      if (block.startsWith("|")) {
        const rows = block.split("\n").filter(line => !/^\|[\s:|-]+\|$/.test(line));
        return <div key={i} className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr>{rows[0].split("|").slice(1, -1).map((cell, j) => <th className="p-3 align-top" key={j}>{inline(cell.trim())}</th>)}</tr></thead><tbody>{rows.slice(1).map((line, j) => <tr key={j}>{line.split("|").slice(1, -1).map((cell, k) => <td className="p-3 align-top border-t" style={{ borderColor: "var(--shadow1)" }} key={k}>{inline(cell.trim())}</td>)}</tr>)}</tbody></table></div>;
      }
      return <p key={i}>{inline(block)}</p>;
    })}
  </article>;
}

export function PrivacyPage({ previous = false }: { previous?: boolean }) {
  const policy = previous ? previousPolicy : currentPolicy;
  const { lang } = useLang();
  const chinese = lang === "zh";
  const body = chinese ? policy.split("## 中文版\n")[1].split("## English Version\n")[0] : policy.split("## English Version\n")[1];
  return <div className="max-w-2xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-medium">{chinese ? "隐私政策" : "Privacy Policy"}</h1>
    <p className="mt-4 leading-relaxed">{previous
      ? (chinese ? "历史政策 · 更新及生效日期：2026年10月19日。包含1.1功能说明。" : "Historical policy · Updated and effective October 19, 2026. Includes version 1.1 data practices.")
      : (chinese ? "更新及生效日期：2026年11月20日。政策包含1.2功能说明，具体功能以您安装的版本及实际开放状态为准。" : "Updated and effective November 20, 2026. Includes version 1.2 data practices; feature availability depends on your installed version and rollout status.")}</p>
    <nav className="flex flex-wrap gap-5 mt-5 underline">
      <Link to={previous ? "/privacy" : "/privacy/1.1"}>{chinese ? (previous ? "当前政策" : "1.1版政策") : (previous ? "Current policy" : "Version 1.1 policy")}</Link>
      <Link to="/privacy/1.0">{chinese ? "1.0版政策" : "Version 1.0 policy"}</Link>
      <Link to="/support">{chinese ? "联系与删除申请" : "Contact and deletion requests"}</Link>
      <Link to="/update">{chinese ? "更新与数据恢复指南" : "Update and recovery guide"}</Link>
    </nav>
    <PolicyBody text={body} />
  </div>;
}
