import { AboutMe } from "@/components/aboutMe";
import { Skills } from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[70px]">
      <section className="w-full flex items-center justify-center flex-col mt-10 mb-10">
        <div className="w-full flex items-center justify-center max-[640px]:flex-col">
          <div className="w-6/12 max-[640px]:w-full flex items-center justify-end max-[640px]:justify-center">
            <div className="flex flex-col">
              <h1 className="text-5xl m-2">Olá, me chamo <strong>{'<Juliano/>'}</strong></h1>
              <p className="text-xl m-2">Seja bem vindo ao meu portfólio</p>
            </div>
          </div>
          <div className="w-6/12 flex items-center justify-center flex-col">
            <div className="rounded-full p-3 border-blue-900">
              <Image className="rounded-full" alt="" width={300} height={200} src="/header.gif" />
            </div>
          </div>
        </div>
        <Skills />
      </section>
      <section className="w-full flex items-center justify-evenly flex-col mt-10 mb-10">
        <div className="w-full flex items-center justify-center flex-col mt-10 mb-10">
          <h1 className="text-4xl m-2 text-left">Projetos recentes</h1>
          <div className="w-4/12 h-1.5 rounded-full bg-blue-700" />
        </div>

        <div className="w-full flex items-center justify-evenly flex-nowrap mt-20 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
            <div className="w-full px-6 py-4">
              <div className="font-bold text-xl mb-2">Login Boilerplate</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full relative flex items-center justify-evenly mt-20 mb-20">
          <div className="flex items-center justify-evenly flex-row-reverse">
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
            <div className="w-full px-6 py-4">
              <div className="font-bold text-xl mb-2">Api de controle financeiro pessoal</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full relative flex items-center justify-evenly flex-nowrap mt-20 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <Image className="w-full h-96 object-cover cursor-pointer relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" width={500} height={100} src="/profile.png" alt="Sunset in the mountains" />
            </div>
            <div className="w-full px-6 py-4">
              <div className="font-bold text-xl mb-2">Meu banco fácil</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full flex items-center justify-center flex-col mt-10 mb-10">
        <AboutMe />
      </section>
    </main>
  )
}