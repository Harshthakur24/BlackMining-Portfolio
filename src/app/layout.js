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
        <meta name="google-site-verification" content="qh3o8QhgckZ5DLphk1vI3f2ewjWQNsLwhI_PJwGjlWg" />
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

        {/* New Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16912183761"
          strategy="afterInteractive"
        />
        <Script id="google-tag-16912183761" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16912183761');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
