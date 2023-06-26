import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Pistache",
  description: "Resto cool"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-2">

        {/* Import the header that contains the nav bar, it will be repeated on each page */}
        <Header />

        {/* The children are the main content of the page */}
        {children}
      </body>
    </html>
  );
}
