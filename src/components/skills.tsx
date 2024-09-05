import { Tooltip } from '@nextui-org/react';
import { useI18nContext } from '../hooks/useI18nContext';

export const Skills = () => {
  const { translator, languageSelected } = useI18nContext();

  const defaultClass = "cursor-pointer transition ease-in-out delay-50 hover:scale-125 duration-300 m-5 bg-cover w-[50px] h-[50px]";

  const skills = [
    { name: "Java", element: <div key="Java" className={`${defaultClass} bg-[url('/skills/java-dark.svg')] dark:bg-[url('/skills/java-light.svg')] hover:!bg-[url('/skills/java.svg')]`} /> },
    { name: "JavaScript", element: <div key="JavaScript" className={`${defaultClass} bg-[url('/skills/javascript-dark.svg')] dark:bg-[url('/skills/javascript-light.svg')] hover:!bg-[url('/skills/javascript.svg')]`} /> },
    { name: "React.js", element: <div key="React.js" className={`${defaultClass} bg-[url('/skills/react-dark.svg')] dark:bg-[url('/skills/react-light.svg')] hover:!bg-[url('/skills/react.svg')]`} /> },
    { name: "TypeScript", element: <div key="TypeScript" className={`${defaultClass} bg-[url('/skills/typescript-dark.svg')] dark:bg-[url('/skills/typescript-light.svg')] hover:!bg-[url('/skills/typescript.svg')]`} /> },
    { name: "Next.js", element: <div key="Next.js" className={`${defaultClass} bg-[url('/skills/next-dark.svg')] dark:bg-[url('/skills/next-light.svg')] hover:!bg-[url('/skills/next.png')]`} /> },
    { name: "Nest.js", element: <div key="Nest.js" className={`${defaultClass} bg-[url('/skills/nest-dark.svg')] dark:bg-[url('/skills/nest-light.svg')] hover:!bg-[url('/skills/nest.svg')]`} /> },
    { name: "Node.js", element: <div key="Node.js" className={`${defaultClass} bg-[url('/skills/node-dark.svg')] dark:bg-[url('/skills/node-light.svg')] hover:!bg-[url('/skills/node.svg')]`} /> },
    { name: "Git", element: <div key="Git" className={`${defaultClass} bg-[url('/skills/git-dark.svg')] dark:bg-[url('/skills/git-light.svg')] hover:!bg-[url('/skills/git.svg')]`} /> },
    { name: "Postgres", element: <div key="Postgres" className={`${defaultClass} bg-[url('/skills/postgres-dark.svg')] dark:bg-[url('/skills/postgres-light.svg')] hover:!bg-[url('/skills/postgres.svg')]`} /> },
    { name: "Prisma", element: <div key="Prisma" className={`${defaultClass} bg-[url('/skills/prisma-dark.svg')] dark:bg-[url('/skills/prisma-light.svg')] hover:!bg-[url('/skills/prisma.svg')]`} /> },
    { name: "MongoDB", element: <div key="MongoDB" className={`${defaultClass} bg-[url('/skills/mongodb-dark.svg')] dark:bg-[url('/skills/mongodb-light.svg')] hover:!bg-[url('/skills/mongodb.svg')]`} /> },
    { name: "Docker", element: <div key="Docker" className={`${defaultClass} bg-[url('/skills/docker-dark.svg')] dark:bg-[url('/skills/docker-light.svg')] hover:!bg-[url('/skills/docker.svg')]`} /> },
  ];

  return (
    <div className="w-full flex items-center justify-center mt-10 mb-10 flex-col">
      <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
        <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[2rem] max-[640px]:pr-[2rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t 
                before:me-6 after:flex-1 after:border-t after:ms-6 text-[#303446] dark:text-white before:border-[#303446] after:border-[#303446] dark:before:border-[#656783] dark:after:border-[#656783]">
          {translator(languageSelected === 'pt-BR' ? 'Habilidades' : 'Skills')}
        </h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap pl-[2rem] pr-[2rem]">
        {skills.map((skill) => (
          <Tooltip key={skill.name} content={skill.name} color="foreground" offset={10} closeDelay={1} className="p-1 text-1xl font-semibold">
            {skill.element}
          </Tooltip>
        ))}
      </div >
    </div>
  )
}