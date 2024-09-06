import { useI18nContext } from "@/hooks/useI18nContext";
import Image from "next/image"

export const AboutMe = () => {
    const { translator } = useI18nContext();

    return (
        <div className="w-full flex items-center justify-center flex-col pl-[2rem] pr-[2rem]">
            <Image className="w-[300px] h-[300px] rounded-full object-cover" width={500} height={100} src="/profile.png" alt="Foto de perfil" />
            <h3 className="text-left text-1xl font-semibold max-w-[50%] max-[640px]:max-w-[100%] text-[#303446] dark:text-white mt-[1rem]">
                {translator('Me chamo Juliano Henrique Timm, desenvolvedor full stack com experiência profissional em criar aplicações web e desktop. Formado em Análise e Desenvolvimento de Sistemas pela faculdade Biopark Educação, em Toledo, Paraná, Brasil.')}
            </h3>
            <h3 className="text-left text-1xl font-semibold max-w-[50%] max-[640px]:max-w-[100%] text-[#303446] dark:text-white mt-[1rem]">
                {translator('Apaixonado por todas as etapas de desenvolvimento, desde o design da interface até a integração com o back-end e modelagem do banco de dados. Tenho grande foco em aprendizado contínuo, aprimoramento de habilidades e ganho de conhecimentos.')}
            </h3>
            <h3 className="text-left text-1xl font-semibold max-w-[50%] max-[640px]:max-w-[100%] text-[#303446] dark:text-white mt-[1rem]">
                {translator(`Constantemente criando projetos pessoais que possam gerar valor, encarando desafios sempre acompanhado por uma ótima noite de código, música e café.`)}
            </h3>
        </div>
    )
}