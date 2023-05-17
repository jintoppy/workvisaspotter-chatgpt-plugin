import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title:
    "WorkVisaSpotter - ChatGPT Plugin to get jobs in US offering visa sponsorship",
  description:
    "WorkVisaSpotter is a ChatGPT Plugin to get jobs in US offering visa sponsorship",
  twitter: {
    card: "summary_large_image",
    title:
      "WorkVisaSpotter - ChatGPT Plugin to get jobs in US offering visa sponsorship",
    description:
      "WorkVisaSpotter is a ChatGPT Plugin to get jobs in US offering visa sponsorship",
    creator: "@jintoppy",
  },
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
