import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Cybrox",
  description: "Where Creativity Meets the Digital Art ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar stays fixed at top across all pages */}
        <Navbar />

        {/* Page transition wrapper with smooth fade and slide animations */}
        <div className="page-transition">{children}</div>
      </body>
    </html>
  );
}
