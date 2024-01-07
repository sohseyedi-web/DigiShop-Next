import vazirFont from "@/constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";

export const metadata = {
  title: "دیجی شاپ / خانه",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
