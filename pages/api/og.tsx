/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const sfPro = fetch(
  new URL("../../styles/SF-Pro-Display-Medium.otf", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const [sfProData] = await Promise.all([sfPro]);

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") || "McMaster Blockchain Club";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#962845",
          backgroundImage:
            "linear-gradient(to right,#962845, #962845)",
        }}
      >
        <img
          src={new URL("../../public/block-logo.png", import.meta.url).toString()}
          alt="McMaster Blockchain Club Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfProData,
        },
      ],
    },
  );
}
