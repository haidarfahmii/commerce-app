import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavbarProvider from "@/providers/NavbarProvider";
import AuthProvider from "@/providers/AuthProvider";
import { ToastContainer } from "react-toastify";

const jetbrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3legant - Commerce App",
  description: "Demo commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <AuthProvider>
          <NavbarProvider>{children}</NavbarProvider>
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
