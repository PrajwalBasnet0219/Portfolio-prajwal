import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import NavigationGate from "@/components/layout/NavigationGate";
import ShutterLoader from "@/components/loading/ShutterLoader";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Prajwal Basnet — Portfolio",
  description: "The portfolio of Prajwal Basnet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <ShutterLoader />
        <NavigationGate>
          <Navigation />
          {children}
        </NavigationGate>
      </body>
    </html>
  );
}