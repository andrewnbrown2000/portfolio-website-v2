import Image from "next/image";
import HomeButton from "../components/HomeButton";
import { NavButton } from "../components/NavButton";

export default function Projects() {
  return (
    <div className="justify-center items-center mt-6 lg:mt-40 mx-4 md:mx-auto">
      <h1 className="text-3xl sm:text-3xl lg:text-5xl text-center">My Solo Projects</h1>
      <p className="text-center w-full italic pt-2 mx-2 sm:mx-0 lg:text-lg">
        When a project is "done" it goes here. They are never truly done though:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4">
        <div className="bg-foreground text-background p-4 rounded-lg flex flex-col">
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
          <a href="#" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
        </div>
        <div className="bg-foreground text-background p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold">Cloud Password Manager</h2>
          <p className="mt-2">
            A Python-based Password Manager designed for quick and secure password retrieval while
            adhering to strong security standards. It supports storing, editing, updating, deleting,
            and copying passwords to the clipboard. The database has been migrated to Amazon
            DynamoDB, enabling seamless multi-device synchronization in the future. The project
            balances convenience and security, providing an efficient solution for managing
            credentials while ensuring robust protection.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
        </div>
        <div className="bg-foreground text-background p-4 rounded-lg flex flex-col">
          <h2 className="text-xl font-bold">This website!</h2>
          <p className="mt-2">
            Although deserving of a description, I think the site mostly speaks for itself.
          </p>
          <p className="mt-2">
            The tech stack includes Next.js and TailwindCSS deployed serverlessly using AWS Amplify.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">On GitHub</a>
        </div>
      </div>
    </div>
  );
}