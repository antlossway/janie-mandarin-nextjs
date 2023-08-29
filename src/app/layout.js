import GlobalProvider from "@/context/GlobalContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ThemeSwitch from "./components/ThemeSwitch";
// import { Lato } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
// const lato = Lato({ subsets: ['latin'], weight:['300','400']  })

export const metadata = {
  title: "Janie Mandarin",
  description: "Join me to speak Chinese with confidence",
  viewTransition: "same-origin", // for page transition effect, only work for chrome v115+
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body
        className={inter.className + "min-h-screen bg-slate-100 text-darkgrey"}
      >
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
