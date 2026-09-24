import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aziz Ben Guirat — Full-Stack Developer",
  description:
    "Portfolio of Aziz Ben Guirat, Full-Stack Developer with a 5-year engineering background at ESPRIT and an M2 in Data Science in Business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
