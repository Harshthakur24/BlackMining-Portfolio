import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Black Mining Junkyard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
