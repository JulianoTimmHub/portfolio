import { Tooltip } from "@nextui-org/react";
import { useI18nContext } from '../hooks/useI18nContext';

export const Skills = () => {
  const { translator, languageSelected } = useI18nContext();

  return (
    <div className="w-full flex items-center justify-center mt-10 mb-10 flex-col">
      <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
        <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[2rem] max-[640px]:pr-[2rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t 
                before:me-6 after:flex-1 after:border-t after:ms-6 text-[#303446] dark:text-white before:border-[#303446] after:border-[#303446] dark:before:border-[#656783] dark:after:border-[#656783]">
          {translator(languageSelected === 'pt-BR' ? 'Habilidades' : 'Skills')}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap pl-[2rem] pr-[2rem]">
        <Tooltip content="Java" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/java-dark.svg')] dark:bg-[url('/skills/java-light.svg')] hover:!bg-[url('/skills/java-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="JavaScript" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/javascript-dark.svg')] dark:bg-[url('/skills/javascript-light.svg')] hover:!bg-[url('/skills/javascript-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="React.js" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/react-dark.svg')] dark:bg-[url('/skills/react-light.svg')] hover:!bg-[url('/skills/react-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="TypeScript" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/typescript-dark.svg')] dark:bg-[url('/skills/typescript-light.svg')] hover:!bg-[url('/skills/typescript-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Next.js" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/next-dark.svg')] dark:bg-[url('/skills/next-light.svg')] hover:!bg-[url('/skills/next-original.png')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Nest.js" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/nest-dark.svg')] dark:bg-[url('/skills/nest-light.svg')] hover:!bg-[url('/skills/nest-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Node.js" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/node-dark.svg')] dark:bg-[url('/skills/node-light.svg')] hover:!bg-[url('/skills/node-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Git" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/git-dark.svg')] dark:bg-[url('/skills/git-light.svg')] hover:!bg-[url('/skills/git-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Postgres" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/postgres-dark.svg')] dark:bg-[url('/skills/postgres-light.svg')] hover:!bg-[url('/skills/postgres-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        <Tooltip content="Docker" color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
          <div className="cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-[url('/skills/docker-dark.svg')] dark:bg-[url('/skills/docker-light.svg')] hover:!bg-[url('/skills/docker-original.svg')] bg-cover w-[50px] h-[50px]" />
        </Tooltip>
        {/* <div className="relative m-auto w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {skills.map((skill, index) => (
              <div className="slide flex w-[125px] items-center justify-center" key={index}>
                {skill}
              </div>
            ))}
            {skills.map((skill, index) => (
              <div className="slide flex w-[125px] items-center justify-center" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}