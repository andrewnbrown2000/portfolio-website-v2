import { useEffect } from "react";
import Image from "next/image";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";
import ScrollArrow from "../components/ScrollArrow";

export default function Home() {

  // disable horizontal scroll
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    // home button
    <div className="container mx-auto max-w-screen-lg">
      <div className="fixed top-6 md:top-2 left-4 md:left-auto max-w-screen-md">
        <HomeButton />
      </div>

      <div className="h-screen">
        <div>
          <div className="flex justify-end m-4 lg:mt-7 lg:mr-33">
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
              <NavButton selector=".about-me" text="About"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="/projects" text="Projects"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" target="_blank" rel="noopener noreferrer" />
              <NavButton href="https://misc-publiclyaccessible-things.s3.us-east-1.amazonaws.com/andrewbrown_resume_mar2025.pdf" text="Resume" target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="/blog" text="Blog (WIP)"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" target="_blank" rel="noopener noreferrer" />
            </div>
          </div>
        </div>
        {/* end nav bar */}

        {/* profile pic and description */}
        <div className="flex max-h- justify-center items-center flex-col mt-6 lg:mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-flow-col-dense gap-8">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto sm:ml-12 border-4 border-black sm:w-96 sm:h-96 lg:order-2">
              <Image src="/nycskyline_pfp.jpg" alt="NYC Skyline" width={500} height={500} />
            </div>
            <div className="flex flex-col justify-center items-center lg:order-1 w-full px-4 sm:px-0">
              <h1 className="text-3xl sm:text-3xl lg:text-5xl text-center w-full">Hi! I'm <span className="text-pink-500 font-bold">Andrew Brown</span></h1>
              <p className="text-center w-full italic pt-2 mx-2 sm:mx-0 lg:text-lg">cloud architect, developer, skateboarder, gamer, and occasional baker</p>
            </div>
          </div> {/* Closing the grid container */}

            <ScrollArrow className="animate-bounce mt-[8vh] md:mt-[36vh]" />
        </div>
      </div>

      <div>
        {/* about me section */}
        <div className="about-me mb-[15vh] md:mb-[30vh] flex flex-col items-center">
          <div className="max-w-4xl">
            <h2 className="text-center text-2xl sm:text-6xl font-bold sm:mb-10">About Me</h2>
            <p className="text-center max-w-4xl mx-auto p-4">&emsp;I grew up staying up way too late playing video games on the
              family computer, which led me to study <span className="text-pink-500">MIS</span> at <span className="text-pink-500">Oklahoma State University</span> and
              start my career in <span className="text-pink-500">IT Consulting</span>. After starting my career in
              IT consulting in Plano, I discovered cloud computing and eventually made the leap to <span className="text-pink-500">NYC</span> to expand my opportunities.
              In my free time, I build personal projects—mostly in the cloud. Check out the projects section to see what I've been working on!</p>
            <p className="text-center max-w-4xl mx-auto p-4">I built this site as an opportunity to
              learn Next.js and AWS static website hosting, and to showcase my projects. Please reach out to me for any reason, my contacts are below!</p>
          </div>
        </div>

        {/* contact me section */}
        <div className="w-screen absolute left-0 py-8 flex flex-col justify-center items-center bg-[#313131]">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <p className="font-bold">My LinkedIn:</p>
              <a href="https://www.linkedin.com/in/andrew-brown-mis" target="_blank" rel="noopener noreferrer" className="text-blue-500">www.linkedin.com/in/andrew-brown-mis</a>
            </div>
            <div className="text-center">
              <p className="font-bold">My email:</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("andrewbrown.n2000@gmail.com");
                  alert("Email copied to clipboard!");
                }}
                className="text-blue-500 hover:cursor-pointer">andrewbrown.n2000@gmail.com
              </button>
            </div>
            <div className="text-center">
              <p className="font-bold">My GitHub:</p>
              <a href="https://github.com/andrewnbrown2000" target="_blank" rel="noopener noreferrer" className="text-blue-500">github.com/andrewnbrown2000</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
