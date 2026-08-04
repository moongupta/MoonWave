import "./globals.css";
import type { Metadata } from "next";
import { AudioProvider } from "./context/AudioProvider";
import { LibraryProvider } from "./context/LibraryProvider";
import { PlaylistProvider } from "./context/PlaylistProvider";

export const metadata: Metadata = {
  title: "Music2030",
  description: "Next Generation Music Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AudioProvider>
          <LibraryProvider>
            <PlaylistProvider>
              {children}
            </PlaylistProvider>
          </LibraryProvider>
        </AudioProvider>
      </body>
    </html>
  );
}