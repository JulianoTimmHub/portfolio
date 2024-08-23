import Image from "next/image"

export const AboutMe = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <Image className="w-[300px] h-[300px] rounded-full object-cover" width={500} height={100} src="/profile.png" alt="Foto de perfil" />
            <h3 className="text-center max-w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</h3>
        </div>
    )
}