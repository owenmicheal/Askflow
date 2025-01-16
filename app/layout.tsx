import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], // You can customize subsets (e.g., 'latin', 'latin-ext')
  variable: "--font-inter", // Use a custom CSS variable
  display: "swap", // Ensure a smooth font loading experience
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AskFlow",
  description: `Askflow is a modern Question & Answer platform with AI-powered responses for quick
     answers and encourages community interaction by allowing all users to
     respond to questions. It features  It's designed to enhance user experience and engagement with
     a sleek design options in both light and dark modes.
    `,
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
