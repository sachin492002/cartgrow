import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StoreProvider from "@/app/StoreProvider";
import {getMerchantData} from "@/actions";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const merchantData = await getMerchantData();
    return (
        <html lang="en">
        <body className={`min-h-screen px-0 md:px-20 py-0 md:py-10 `} style={{
            background : merchantData.theme['--background']
        }}>

            <StoreProvider>
                {children}
            </StoreProvider>

        </body>
        </html>

    );
}
