import "./globals.css";
import { Poppins } from "next/font/google";
const roboto = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
