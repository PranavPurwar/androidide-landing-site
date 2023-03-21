import "./globals.css";
import Drawer from "@/components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "AndroidIDE",
  description:
    "AndroidIDE is a IDE for Android. Build Android Apps on your phone.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "any" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={roboto.className}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <Drawer>{children}</Drawer>
      </body>
    </html>
  );
}
