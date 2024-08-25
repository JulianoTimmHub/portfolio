import { Tooltip } from "@nextui-org/react";
import { useI18nContext } from '../hooks/useI18nContext';

export const Skills = () => {
  const { translator, languageSelected } = useI18nContext();

  return (
    <div className="w-full flex items-center justify-center flex-col pt-[0rem]">
      <div className="w-full flex items-center justify-center mt-10 mb-10">
        <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[2rem] max-[640px]:pr-[2rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t before:border-gray-200 
                before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 text-[#303446] dark:text-white dark:before:border-[#656783] dark:after:border-[#656783]">
          {translator(languageSelected === 'pt-BR' ? 'Habilidades' : 'Skills')}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap pt-[2rem]">
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
    </div>
  )
}