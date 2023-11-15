import "./globals.css";
import Link from "next/link";

import TopSection from "@/components/topSection/topSection";
import SideNavbar from "@/components/sideNavbar/sideNavbar";
import { NavProvider } from "@/context/NavContext";
import TopContact from "@/components/topContact/topContact";
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
      <body className="relative overflow-x-hidden">
        <NextAuthProvider>
          <NavProvider>
            <div className="mx-auto w-full px-4 ">
           <TopContact />
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
