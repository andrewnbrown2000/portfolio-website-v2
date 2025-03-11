import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";

export default function Projects() {
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
              <NavButton href="/blog" text="Blog (WIP)"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base font-bold w-24 h-10 sm:w-30 sm:h-12" />
            </div>
          </div>
        </div>
        {/* end nav bar */}

        <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-10">
          <div>
            <h1 className="text-3xl sm:text-3xl lg:text-5xl text-center">My Solo Projects</h1>
            <p className="text-center w-full italic pt-2 mx-2 sm:mx-0 lg:text-lg">
              When a project is "done" it goes here. They are never truly done though:
            </p>
          </div>

          {/* if u remove "items-start" then it ruins the sizing of the columns */}
          <div className="flex flex-col items-start md:flex-row gap-4 mt-4 flex-grow">
            <div className="flex-1 p-4 bg-foreground text-background rounded-xl">
              <h2 className="text-xl font-bold">On-Demand Paper Minecraft Server</h2>
              <p className="mt-2">
              Initiated via an API call that launches an EC2 instance from a preconfigured AMI,
              returning a DNS address for players to connect and play together. The server
              automatically shuts down when no players remain online, with booting managed by an
              AWS Lambda script. The entire infrastructure can be deployed by anyone with an AWS
              account using the provided Terraform module. Designed as a competitor to Microsoft's
              Minecraft Realms, this project offers a more cost-effective and customizable
              alternative for hosting multiplayer Minecraft servers.
              </p>
              <a href="https://github.com/andrewnbrown2000/paper-server" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
            </div>
            <div className="flex-1 p-4 bg-foreground text-background rounded-xl">
              <h2 className="text-xl font-bold">Cloud Password Manager</h2>
              <p className="mt-2">
              A Python-based Password Manager designed for quick and secure password retrieval while
              adhering to strong security standards. It supports storing, editing, updating, deleting,
              and copying passwords to the clipboard. The database has been migrated to Amazon
              DynamoDB, enabling seamless multi-device synchronization in the future. The project
              balances convenience and security, providing an efficient solution for managing
              credentials while ensuring robust protection.
              </p>
              <a href="https://github.com/andrewnbrown2000/password_manager" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
            </div>
            <div className="flex-1 p-4 bg-foreground text-background rounded-xl">
              <h2 className="text-xl font-bold">This website!</h2>
              <p className="mt-2">
              Although deserving of a description, I think the site mostly speaks for itself.
              </p>
              <p className="mt-2">
              The tech stack includes Next.js and
              </p>
              <a href="https://github.com/andrewnbrown2000/portfolio-website-v2" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
            </div>
          </div>
          {/* end columns section */}
        </div>
      </div>
    </div>
  );
}