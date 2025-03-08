import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { NavButton } from "../components/NavButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mx-0 my-0">
        <div className="relative ml-4 2xl:mx-96">
          <Image className="mt-6" src="/andrew_logo.png" alt="logo" width={100} height={100} />
            <div className="absolute top-0 right-0 mr-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 lg:top-1/2 lg:right-1/2 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2">
            <NavButton selector=".about-me-section" text="About Me" 
              className="bg-blue-600 text-white font-bold py-1 px-4 rounded
              hover:bg-blue-700 sm:py-4 sm:px-8" />
            <NavButton selector=".contact-me-section" text="Contact Me" 
              className="bg-green-600 text-white font-bold py-1 px-4 rounded
              hover:bg-green-700 sm:py-4 sm:px-8" />
            <NavButton href="/projects" text="Projects" 
              className="bg-red-600 text-white font-bold py-1 px-4 rounded 
              hover:bg-red-700 sm:py-4 sm:px-8" />
            </div>
        </div>
        <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 pb-20`}>
          <main className="flex flex-col items-center">
            <div className="flex gap-4 items-center mt-8">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 px-4"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                Deploy now
              </a>
              <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm h-10 px-4"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                Read our docs
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
