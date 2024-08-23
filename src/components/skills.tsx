import { Tooltip } from "@nextui-org/react";

export const Skills = () => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap">
      <Tooltip content="Java" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/java.svg')] hover:bg-[url('/skills/java-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="JavaScript" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/javascript.svg')] hover:bg-[url('/skills/javascript-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="React" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/react.svg')] hover:bg-[url('/skills/react-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="TypeScript" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/typescript.svg')] hover:bg-[url('/skills/typescript-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="Postgres" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/postgres.svg')] hover:bg-[url('/skills/postgres-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="Docker" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/docker.svg')] hover:bg-[url('/skills/docker-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
    </div>
  )
}