import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Black Mining Junkyard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10806809101">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'AW-10806809101');
        </script>
      </head>
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