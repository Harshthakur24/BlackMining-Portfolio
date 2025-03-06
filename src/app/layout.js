import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata = {
  title: "Black Mining Junkyard",
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
