import { Tooltip } from "@nextui-org/react";

export const Skills = () => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap">
      <Tooltip content="Java" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/java.svg')] hover:bg-[url('/java-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="JavaScript" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/javascript.svg')] hover:bg-[url('/javascript-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="React" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/react.svg')] hover:bg-[url('/react-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="TypeScript" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/typescript.svg')] hover:bg-[url('/typescript-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="Postgres" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/postgres.svg')] hover:bg-[url('/postgres-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
      <Tooltip content="Docker" color="success" offset={10} closeDelay={1} className="p-1">
        <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/docker.svg')] hover:bg-[url('/docker-original.svg')] bg-cover w-[50px] h-[50px]" />
      </Tooltip>
    </div>
  )
}