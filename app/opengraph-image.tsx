import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — web apps and AI agents for business`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e9",
          color: "#16140f",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#16140f",
              color: "#f3f0e9",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6b6459",
            }}
          >
            Meehan Software Development
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            <div style={{ display: "flex" }}>Web apps and AI agents</div>
            <div style={{ display: "flex", color: "#c2431f" }}>for business.</div>
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#322e26", lineHeight: 1.4 }}>
            {"After-hours AI reception \u00b7 knowledge management \u00b7 custom web apps \u00b7 agents that wait for a human to approve."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#6b6459",
            borderTop: "1px solid #16140f30",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>{"Michael Meehan \u00b7 Australia"}</div>
          <div style={{ display: "flex" }}>{site.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
