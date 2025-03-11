import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";

export default function Blog() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="fixed top-6 md:top-2 left-4 md:left-auto max-w-screen-md">
        <HomeButton />
      </div>

      <div className="h-screen">
        <div>
          <div className="flex justify-end m-4 lg:mt-7 lg:mr-33">
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
              <NavButton href="/projects" text="Projects"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
              <NavButton href="https://misc-publiclyaccessible-things.s3.us-east-1.amazonaws.com/andrewbrown_resume_mar2025.pdf" text="Resume" target="_blank"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
            </div>
          </div>
        </div>
        {/* end nav bar */}

        <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-10">
          <div>
            <h1 className="text-3xl sm:text-3xl lg:text-5xl text-center">Nothing to see here! I'm still working on this.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}