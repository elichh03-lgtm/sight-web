import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#8B1F1F",
          borderRadius: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 124,
            fontWeight: 600,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          S
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            height: 12,
            transform: "translateY(-50%)",
            background: "#8B1F1F",
          }}
        />
      </div>
    ),
    size
  );
}
