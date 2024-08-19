import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10">
      <section className="w-full flex items-center justify-center">
        <div className="w-6/12 flex items-center justify-end">
          <div className="flex flex-col">
            <h1 className="text-6xl m-2">Olá, me chamo <strong>Juliano</strong></h1>
            <p className="text-xl m-2">Sou um desenvolvedor Full Stack apaixonado por programação</p>
          </div>
        </div>
        <div className="w-6/12 flex items-center justify-center">
          <div className="border-4 rounded-full p-3 border-blue-900">
            <Image className="rounded-full" alt="" width={300} height={200} src="/profile.png" />
          </div>
        </div>
      </section>
      <h1 className="text-3xl m-2 text-left">Projetos recentes</h1>
      <section className="w-full flex items-center justify-evenly flex-wrap">
        <div className="max-w-sm rounded overflow-hidden">
          <Image className="w-full" width={300} height={200} src="/profile.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4 border-2 border-blue-900">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" width={300} height={200} src="/profile.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" width={300} height={200} src="/profile.png" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}