import { ImageResponse } from "next/og";
import {
  PSI_BRAND_COLOR,
  PSI_EMBLEM_PATHS,
  PSI_ICON_BG,
} from "@/lib/psi-emblem-svg";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: PSI_ICON_BG,
          borderRadius: 36,
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none">
          {PSI_EMBLEM_PATHS.map((d) => (
            <path
              key={d}
              d={d}
              stroke={PSI_BRAND_COLOR}
              strokeWidth={2.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  );
}
