import "./globals.css";
import Link from "next/link";

import TopSection from "@/components/topSection/topSection";
import SideNavbar from "@/components/sideNavbar/sideNavbar";
import { NavProvider } from "@/context/NavContext";

import Footer from "@/components/footer/footer";
import ShoppingCartButton from "@/components/shoppingCartButton/shoppingCartButton";
import { NextAuthProvider } from "@/components/providers/providers";


export const metadata = {
  title: "Aphodisias",
  description: "Handmade Bags",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <NextAuthProvider>
        <NavProvider>
          <div className="mx-auto w-full px-4 ">
            <div className="w-full h-8 border-b text-right leading-8 ">
              <Link href="/contact" className="w-full text-sm  ">
                Contact us
              </Link>
            </div>
            <TopSection>
          
              <ShoppingCartButton />
            </TopSection>
          </div>
          <SideNavbar />
   
          {children}
          <Footer />
        </NavProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
