import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#080C14",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#10B981",
          fontWeight: 800,
          borderRadius: "8px",
          border: "1.5px solid #10B981",
          fontFamily: "monospace",
          boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
        }}
      >
        AS
      </div>
    ),
    {
      ...size,
    }
  );
}
