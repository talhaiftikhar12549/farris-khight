import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google"; // Import Instrument Sans
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Instrument Sans
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "My Website - Contact Us",
  description: "Get in touch with us. Send us a message via our contact form.",
  openGraph: {
    title: "My Website - Contact Us",
    description: "Get in touch with us. Send us a message via our contact form.",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

