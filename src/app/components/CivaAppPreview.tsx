import { useState } from "react";
import WelcomeScreen from "../../imports/欢迎页/index";
import HomeScreen from "../../imports/首页食谱内为空时/index";
import MenuScreen from "../../imports/37/index";

type Screen = "welcome" | "home" | "menu";

export function CivaAppPreview() {
  const [screen, setScreen] = useState<Screen>("welcome");

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Phone frame */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: 280,
          height: 587,
        }}
      >
        {/* Bezel */}
        <div
          className="absolute inset-0 rounded-[2.8rem] pointer-events-none z-20"
          style={{
            boxShadow:
              "0 0 0 10px #46594F, 0 0 0 11px rgba(70,89,79,0.3), 0 24px 60px rgba(70,89,79,0.35)",
            borderRadius: "2.8rem",
          }}
        />
        {/* Dynamic island */}
        <div
          className="absolute z-30 rounded-full"
          style={{
            background: "#46594F",
            width: 72,
            height: 22,
            top: 16,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Screen viewport — 390×844 design scaled to 280×607 */}
        <div
          className="absolute overflow-hidden rounded-[2.5rem]"
          style={{
            inset: 0,
            background: "#FFF0C9",
          }}
        >
          <div
            style={{
              width: 390,
              height: 844,
              transformOrigin: "top left",
              transform: `scale(${280 / 390})`,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {screen === "welcome" && <WelcomeScreen />}
            {screen === "home" && <HomeScreen />}
            {screen === "menu" && <MenuScreen />}
          </div>
        </div>
      </div>

      {/* Screen selector tabs */}
      <div
        className="flex items-center gap-2 rounded-full p-1.5"
        style={{ background: "var(--yellow50)", border: "1px solid var(--shadow1)" }}
      >
        {(
          [
            { id: "welcome", label: "欢迎页" },
            { id: "home", label: "首页" },
            { id: "menu", label: "菜单" },
          ] as { id: Screen; label: string }[]
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id)}
            className="rounded-full transition-all duration-200"
            style={{
              padding: "0.375rem 1rem",
              fontSize: "0.8125rem",
              letterSpacing: "0.08em",
              background: screen === tab.id ? "var(--background1)" : "transparent",
              color: screen === tab.id ? "var(--yellow50)" : "var(--background3)",
              fontFamily: "'Noto Sans SC', sans-serif",
              fontWeight: screen === tab.id ? 500 : 400,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
