import "./globals.css";

export const metadata = {
  title: "Cybrox",
  description: "Where Creativity Meets the Digital Art ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
