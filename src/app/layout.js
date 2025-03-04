import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Script from "next/script";

export const metadata = {
  title: "Black Mining Junkyard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10806809101">
        </Script>
        <Script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-10806809101');
        </Script>
      </head> */}
      <body
        className={` antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
