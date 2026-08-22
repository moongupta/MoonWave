import "./globals.css";
import type { Metadata } from "next";
import { AudioProvider } from "./context/AudioProvider";
import { LibraryProvider } from "./context/LibraryProvider";
import { PlaylistProvider } from "./context/PlaylistProvider";
import { SearchProvider } from "./components/search/SearchProvider";
import { ThemeProvider } from "./context/ThemeProvider";


import AnimatedBackground from "./components/effects/AnimatedBackground";
import ThemeGlow from "./components/effects/ThemeGlow";


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
          <ThemeProvider>

            {/* Visual Effects */}
            <AnimatedBackground />
            <ThemeGlow />

            <LibraryProvider>
              <PlaylistProvider>
                <SearchProvider>
                  {children}
                </SearchProvider>
              </PlaylistProvider>
            </LibraryProvider>

          </ThemeProvider>
        </AudioProvider>
      </body>
    </html>
  );
}