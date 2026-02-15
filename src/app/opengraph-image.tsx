import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stocky — Precision. Discipline. Edge.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 100,
            right: 100,
            height: 1,
            background: "#1F1F1F",
          }}
        />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 96,
            fontWeight: 600,
            color: "#C9A96E",
            marginBottom: 24,
          }}
        >
          Stocky
        </div>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 32,
            fontWeight: 300,
            color: "#F5F0EB",
            marginBottom: 80,
          }}
        >
          Precision. Discipline. Edge.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            fontFamily: "system-ui, sans-serif",
            fontSize: 16,
            fontWeight: 300,
            letterSpacing: 6,
            color: "#6B6B6B",
          }}
        >
          BY INVITATION ONLY
        </div>
      </div>
    ),
    { ...size }
  );
}
