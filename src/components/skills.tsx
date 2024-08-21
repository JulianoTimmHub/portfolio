import Image from "next/image"
import { Tooltip, Button } from "@nextui-org/react";

export const Skills = () => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap mt-10">
      <Tooltip content="Java" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#e52025] duration-300 m-5" alt="" width={50} height={100} src="/java.svg" />
      </Tooltip>
      <Tooltip content="JavaScript" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#f7e018] duration-300 m-5" alt="" width={50} height={100} src="/javascript.svg" />
      </Tooltip>
      <Tooltip content="React" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#61dafb] duration-300 m-5" alt="" width={50} height={100} src="/react.svg" />
      </Tooltip>
      <Tooltip content="TypeScript" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#3178c6] duration-300 m-5" alt="" width={50} height={100} src="/typescript.svg" />
      </Tooltip>
      <Tooltip content="Postgres" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#0064a5] duration-300 m-5" alt="" width={50} height={100} src="/postgres.svg" />
      </Tooltip>
      <Tooltip content="Docker" color="success" offset={10} closeDelay={1} className="p-1">
        <Image className="cursor-pointer transition ease-in-out delay-50 hover:scale-110 hover:bg-[#0db7ed] duration-300 m-5" alt="" width={50} height={100} src="/docker.svg" />
      </Tooltip>
    </div>
  )
}