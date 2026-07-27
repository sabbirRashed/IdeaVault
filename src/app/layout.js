import { Geist, Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Provider from "./provider";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SparkNest — Share & Discover Startup Ideas",
  description: "Share your startup idea, explore what others are building, and get real feedback from a community that validates ideas together.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Provider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Provider>


      </body>
    </html>
  );
}
