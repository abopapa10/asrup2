import { ImageResponse } from "next/og";
import { PSI_BRAND_COLOR, PSI_ICON_BG } from "@/lib/psi-emblem-svg";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.seo.defaultOgImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${PSI_ICON_BG} 0%, #132238 55%, #0d3d4a 100%)`,
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 5v22"
              stroke={PSI_BRAND_COLOR}
              strokeWidth={2.75}
              strokeLinecap="round"
            />
            <path
              d="M16 5C10.5 5 6 9.8 6 15c0 3.2 1.6 6 4 7.8"
              stroke={PSI_BRAND_COLOR}
              strokeWidth={2.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 5c5.5 0 10 4.8 10 10 0 3.2-1.6 6-4 7.8"
              stroke={PSI_BRAND_COLOR}
              strokeWidth={2.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 28,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: PSI_BRAND_COLOR,
              fontWeight: 600,
            }}
          >
            Bursa · Nilüfer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Bursa Psikolog
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 1.25,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 820,
            }}
          >
            Bireysel terapi · Çift terapisi · Online terapi
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.72)" }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
          bursapsikologsancar.com
        </div>
      </div>
    ),
    { ...size }
  );
}
