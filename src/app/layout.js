import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import { SessionProvider } from "next-auth/react";
import Sessionwrapper from "@/components/Sessionwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Sessionwrapper>

    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-8xl mx-auto  ">
          <div className="hidden sm:inline border-r h-screen ">
            <Sidebar />
          </div>
          <main>
            {children}
          </main>
          <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[30rem] mr-5">
            <div className="sticky top-0 bg-w py-2">
              <input type="text" placeholder="Search"  className="bg-gray-100 border border-gray-200  hover:border-blue-500 rounded-3xl text-sm w-full px-4 py-2"/>
            </div>
            <News />
          </div>
        </div>
      </body>
    </html>
    </Sessionwrapper>
  );
}
