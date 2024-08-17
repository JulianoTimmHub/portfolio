import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10">
      <div className="w-full flex items-center justify-center">
        <div className="w-6/12 flex items-center justify-end">
          <div className="flex flex-col">
            <h1 className="text-6xl m-2">Olá, me chamo <strong>Juliano</strong></h1>
            <p className="text-xl m-2">Sou um desenvolvedor Full Stack apaixonado por programação</p>
          </div>
        </div>
        <div className="w-6/12 flex items-center justify-center">
          <div className="border-4 rounded-full p-3 border-blue-900">
            <Image className="rounded-full" width={300} height={200} src="/profile.png" />
          </div>
        </div>
      </div>
    </main>
  )
}