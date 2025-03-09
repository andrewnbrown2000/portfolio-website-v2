import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { NavButton } from "../components/NavButton";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="fixed top-6 lg:top-2 left-4 lg:left-auto max-w-screen-lg">
        <Image src="/andrew_logo.png" alt="Logo" width={100} height={100} />
      </div>

      <div className="h-screen">
        {/* nav bar */}
        <div>
          <div className="flex justify-end m-4 lg:mt-7">
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
              <NavButton selector=".about-me-section" text="About"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="/projects" text="Projects"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="/resume" text="Resume"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="/blog" text="Blog (WIP)"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
            </div>
          </div>
        </div>

        {/* profile pic and description */}
        <div className="flex bg-dark justify-center items-center flex-col mt-10 lg:mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-flow-col-dense gap-8">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto sm:ml-12 border-4 border-black sm:w-96 sm:h-96 lg:order-2">
              <Image src="/nycskyline_pfp.jpg" alt="NYC Skyline" width={500} height={500} />
            </div>
            <div className="flex flex-col justify-center items-center lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">Hello! I'm <span className="text-pink-500 font-bold">Andrew Brown</span></h1>
              <p className="text-center max-w-xs italic pt-2 mx-2 sm:mx-0 lg:text-lg">cloud architect, developer, skateboarder, gamer, and occasional baker</p>
            </div>
          </div> {/* Closing the grid container */}

          <div className="animate-bounce mt-[20vh]">
            <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* about me section */}
      <div className="about-me-section bg py-8 min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl">
          <h2 className="text-center text-2xl sm:text-6xl font-bold sm:mb-10">About Me</h2>
          <p className="text-center max-w-4xl mx-auto p-4">&emsp;I grew up spending unhealthy amounts of time on the family computer, and each time
            my mom and dad told me it was time for bed I stayed hoping they would forget. Although I am cursed with this
            computer addiction, it also fuels my career drive and interests.</p>
          <p className="text-center max-w-4xl mx-auto p-4">I graduated from Oklahoma State University in 2022 with a degree in Management Information Systems (MIS).
            From there I moved to Plano, TX where I started my career in IT consulting. Disatisfied with my career growth -- wanting a challenge
            and a change of scenery -- I relocated to NYC, where I am furthering my Cloud Architecture and Software Dev skills.
          </p>
          <p className="text-center max-w-4xl mx-auto p-4">I built this site as a sort of extension of my professional self.
            Please browse my projects and feel free to reach out to connect for any reason!
          </p>
        </div>
      </div>
    </div>
  );
}
