import Image from "next/image"

export const AboutMe = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col pl-[2rem] pr-[2rem]">
            <Image className="w-[300px] h-[300px] rounded-full object-cover" width={500} height={100} src="/profile.png" alt="Foto de perfil" />
            <h3 className="text-center max-w-[50%] max-[640px]:max-w-[100%] text-[#303446] dark:text-white mt-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</h3>
        </div>
    )
}