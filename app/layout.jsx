import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Pistache",
  description: "Resto cool",
  favicon: "/images/logo/logo_pistache.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-2">
        <Header />
        {children}
      </body>
    </html>
  );
}
