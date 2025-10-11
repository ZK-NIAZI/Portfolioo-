import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Fira_Code, Open_Sans } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeeshan Khan - Flutter Developer Portfolio",
  description: "Professional Flutter Developer specializing in cross-platform mobile applications. View my portfolio of innovative mobile apps and get in touch for your next project.",
  keywords: ["Flutter Developer", "Mobile App Development", "Cross-Platform", "iOS", "Android", "Dart", "React Native", "Portfolio"],
  authors: [{ name: "Zeeshan Khan" }],
  openGraph: {
    title: "Zeeshan Khan - Flutter Developer",
    description: "Professional Flutter Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            // Prevent flash of wrong theme
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.setAttribute('data-theme', theme);
              document.body.classList.add('preload');
            })();
          `}
        </Script>
      </head>
      <body className={`${firaCode.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
