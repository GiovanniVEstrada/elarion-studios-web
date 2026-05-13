import { ImageResponse } from "next/og";

export const alt = "Elarion Studios — Intelligent Systems for Reflection and Alignment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#06131f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cyan orb */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(116,216,255,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Teal orb */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(78,205,196,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          {/* Studio label */}
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8ca8b3",
              margin: 0,
            }}
          >
            Elarion Studios
          </p>

          {/* Main heading */}
          <p
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ecf9ff",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Know yourself.
          </p>
          <p
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ecf9ff",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
              marginTop: -12,
            }}
          >
            Align your life.
          </p>

          {/* Divider */}
          <div
            style={{
              width: 64,
              height: 2,
              background:
                "linear-gradient(to right, transparent, #74d8ff, transparent)",
              borderRadius: 2,
              marginTop: 8,
            }}
          />

          {/* Tagline */}
          <p
            style={{
              fontSize: 20,
              fontWeight: 300,
              color: "#b6d0da",
              margin: 0,
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Luren — an intelligent personal alignment system coming to Android &amp; iOS
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
