import "./globals.css";
import Link from "next/link";

import TopSection from "@/components/topSection/topSection";
import SideNavbar from "@/components/sideNavbar/sideNavbar";
import { NavProvider } from "@/context/NavContext";
import SignInSide from "@/components/signInSide/signInSide";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Aphodisias",
  description: "Handmade Bags",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavProvider>
          <div className="mx-auto w-full px-4 ">
            <div className="w-full h-8 border-b text-right leading-8 ">
              <Link href="/contact" className="w-full text-sm  ">
                Contact us
              </Link>
            </div>
            <TopSection />
          </div>
          <SideNavbar />
          <SignInSide />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
