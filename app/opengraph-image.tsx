import { ImageResponse } from "next/og";

export const alt = "AARYX | Procurement & Business Solutions";
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
          padding: "72px",
          background: "#f7f3ea",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#d24b2f",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            AX
          </div>
          <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: "0.12em" }}>
            AARYX
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, maxWidth: 900 }}>
            Procurement & Business Solutions Between Europe and Asia
          </span>
          <span style={{ fontSize: 28, color: "#3f3a32", maxWidth: 820 }}>
            Sourcing, supplier management and procurement networks.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
