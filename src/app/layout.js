import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata = {
  title: "Sell Your Scrap Car for the Best Price | Black Mining Junkyard LLP",
  description: "Get the best price for your scrap car with Black Mining Junkyard LLP – India's trusted scrap car buyer. Hassle-free pickup, instant payment, and eco-friendly disposal. Call now for a free quote!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Move Google Analytics scripts to Script components */}
      </head>
      <body className="antialiased">
        {/* Google Analytics scripts with Next.js Script component */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10806809101"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'AW-10806809101');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}