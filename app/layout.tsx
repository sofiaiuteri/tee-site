import type { Metadata } from "next";
import "./lovable.css";

const title = "The Experience Exchange | W&L Outdoor Adventure Magazine";
const description =
  "Washington & Lee's premier outdoor adventure magazine. Discover local trails, gear reviews, student stories, and nature photography from the W&L community.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "The Experience Exchange" }],
  keywords: ["Washington Lee", "outdoor magazine", "hiking", "nature", "adventure", "student publication", "Virginia trails"],
  icons: { icon: "/favicon.png" },
  openGraph: { type: "website", title, description, images: ["/og-image.png"] },
  twitter: { card: "summary_large_image", site: "@experienceexchange_wl", title, description, images: ["/og-image.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
