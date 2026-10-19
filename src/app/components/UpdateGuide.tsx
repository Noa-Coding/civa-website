import { Link } from "react-router";
import { useLang } from "./LanguageContext";

const content = {
  zh: {
    title: "更新与数据恢复指南",
    intro: "适用于升级至1.1；版本是否可用以App Store为准。请保留现有 App，从 App Store 直接更新，不要先卸载。升级测试已验证一份包含73道菜及图片的旧版厨房；这不代表每一份用户数据都已完成验证。",
    sections: [
      ["更新前，多留一份备份", "在“我的 → 其他 → 数据迁移”选择导出，将 .civa 文件保存到 iCloud Drive、电脑或其他独立位置。确认文件确实存在，并保留原文件。不要只保存到刺饭自己的 App 文件夹；正常更新不要求重新导入。"],
      ["更新后如何核对", "查看想吃和烧过的菜，打开几道带图片的菜，核对冰箱、计划、食记与个人资料。先确认当前筛选条件，避免把筛选隐藏误认为删除。"],
      ["打不开或发现菜品缺失", "先保留现场，不要卸载、清空厨房或覆盖导入。如果还能导出，另存一份当前备份且不要覆盖旧文件。记录版本、系统、最近操作和发生时间；通过“我的 → 问题诊断”生成并查看诊断文件，再自行决定是否发给支持邮箱。启动失败页也提供诊断入口。"],
      ["恢复 .civa 文件", "先保存当前厨房副本。增量导入保留现有数据，覆盖导入会替换当前厨房；请确认模式与文件来源。新版支持读取已验证的旧格式，但新版导出的文件不保证能被旧版打开，不建议通过降级恢复。"],
      ["iCloud 是同步，不是历史备份", "两台设备首次开启前分别导出备份。使用同一 Apple 账户；同步后的删除可能传播到另一台设备。清除云端副本前阅读确认说明，关闭同步或卸载并不自动清除云端。不要用真实厨房做清除演练。"],
      ["小铺购买与恢复", "装扮使用 Apple 应用内购买，价格以商店确认页为准。更换设备后使用同一 App Store 账户，在小铺或我的餐橱中恢复购买。.civa 备份不包含购买权益；现有免费餐具仍可免费使用。"],
      ["如果没有开启自动更新", "安装1.1后，未来打开 App 时可收到符合条件的新版本提醒，选择稍后不会影响使用。仍在1.0.3的用户需要自行前往 App Store 检查更新。"],
    ],
    contact: "遇到问题，联系支持",
  },
  en: {
    title: "Update and data recovery guide",
    intro: "For upgrading to 1.1 when available in your App Store. Keep the installed app and update directly through the App Store; do not uninstall first. Upgrade testing preserved a legacy kitchen with 73 dishes and photos. This does not mean every user's data has been individually verified.",
    sections: [
      ["Keep a backup before updating", "In Me → Other → Data Transfer, export a .civa file to iCloud Drive, a computer or another independent location. Check that the file exists and keep the original. Do not keep your only copy in Civa's own app folder. A normal update does not require re-importing your data."],
      ["Check your kitchen after updating", "Review wanted and cooked dishes, open several recipes with photos, and check the fridge, plans, food journal and profile. Check active filters before treating a hidden dish as deleted."],
      ["If the app will not open or dishes appear missing", "Preserve the current state. Do not uninstall, clear the kitchen or run a replacement import. If possible, export another current backup without overwriting the old one. Record versions, recent actions and the time of the issue. Generate and inspect a report in Me → Problem Diagnostics, then decide whether to share it with support. The startup failure screen also provides diagnostics."],
      ["Restore a .civa backup", "Back up the current kitchen first. Incremental import keeps existing data; replacement import replaces the current kitchen. Verify the mode and file source. New versions read tested older formats, but newly exported files may not open in an older app. Downgrading is not a recommended recovery method."],
      ["iCloud sync is not a historical backup", "Export each device's kitchen before first enabling sync. Use the same Apple Account. Synced deletions may reach other devices. Read the confirmation before clearing cloud data; turning sync off or uninstalling does not automatically erase cloud copies. Never use your real kitchen for a destructive test."],
      ["Shop purchases and restoration", "Decorations use Apple in-app purchases; the confirmation screen shows the price. On another device, use the same App Store account and restore purchases in the shop or decoration library. A .civa backup does not include purchase entitlements. Existing free tableware remains free."],
      ["Without automatic app updates", "After installing 1.1, opening the app can show an eligible future update reminder. Choosing Later does not block use. Users still on 1.0.3 need to check the App Store themselves."],
    ],
    contact: "Contact support",
  },
};

export function UpdateGuide() {
  const { lang } = useLang();
  const c = content[lang];
  return <div className="max-w-2xl mx-auto px-6 py-12 space-y-8 leading-loose">
    <h1 className="text-3xl font-medium">{c.title}</h1><p>{c.intro}</p>
    {c.sections.map(([title, body]) => <section key={title} className="space-y-3"><h2 className="text-xl font-medium">{title}</h2><p>{body}</p></section>)}
    <Link className="underline" to="/support">{c.contact}</Link>
  </div>;
}
