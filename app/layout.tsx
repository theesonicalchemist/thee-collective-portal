import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thee Collective Universe",
  description: "Crafted in Sound. Forged in Story. Designed to Resonate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="site-logo">
              Thee Collective Universe
            </Link>

            <div className="nav-links">
              <Link href="/listen">Listen</Link>
              <Link href="/broadcast">Broadcast</Link>
              <Link href="/codex">Codex</Link>
              <Link href="/science">Science</Link>
              <Link href="/about">About</Link>
              <Link href="/links">Link Bridge</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}