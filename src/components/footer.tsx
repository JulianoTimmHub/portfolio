import Link from "next/link";
import { ELinks } from "@/enum/e-links";
import { useI18nContext } from "@/hooks/useI18nContext";
import { useSendEmailContext } from "@/hooks/useSendEmailContext";
import { SnackbarMessage } from "./snackbar";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from 'yup';
import { ContactFormType } from "@/types/types";
import { useEffect } from "react";

export const Footer = () => {
  const { translator } = useI18nContext();
  const { sendEmail, statusEmail, openSnackbarEmail } = useSendEmailContext();

  const validateContactForm = object().shape({
    fromEmail: string().trim('Informe seu email').required('Informe seu email'),
    subject: string().trim('Informe seu assunto').required('Informe seu assunto'),
    message: string().trim('Informe sua mensagem').required('Informe sua mensagem'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: yupResolver(validateContactForm)
  });

  useEffect(() => {
    if (openSnackbarEmail)
      reset();
  }, [openSnackbarEmail])

  return (
    <footer id={translator('contatos')} className="bg-gray-900 mt-[5rem]">
      <div className="container mx-auto pt-[5rem] pb-[5rem] max-[640px]:pt-[1rem] max-[640px]:p-[2rem]">
        <div className="w-full flex items-center justify-center mt-[1rem] mb-[1rem]">
          <h1 className="text-4xl m-2 text-center pl-[5rem] pr-[5rem] max-[640px]:pl-[0rem] max-[640px]:pr-[0rem] w-[-webkit-fill-available] flex items-center before:flex-1 before:border-t before:border-gray-200 
                before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 text-white dark:before:border-[#656783] 
                dark:after:border-[#656783]">{translator('Contatos')}</h1>
        </div>
        <div className="w-full flex items-center justify-center gap-[3rem] max-[640px]:justify-between max-[640px]:gap-[0rem]">
          <Link href={ELinks.GITHUB} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
            <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/github-light.svg')] dark:bg-[url('/contacts/github-light.svg')] hover:!bg-[url('/contacts/github-original.svg')] bg-cover w-[40px] h-[40px]"></div>
            <p className="font-normal text-gray-200">Github</p>
          </Link>
          <Link href={ELinks.LINKEDIN} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
            <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/linkedin-light.svg')] dark:bg-[url('/contacts/linkedin-light.svg')] hover:!bg-[url('/contacts/linkedin-original.svg')] bg-cover w-[40px] h-[40px]" />
            <p className="font-normal text-gray-200">Linkedin</p>
          </Link>
          <Link href={ELinks.WHATSAPP} target="_blank" className="flex items-center justify-center flex-col block p-6 max-[640px]:p-[0.5rem] border rounded-lg shadow bg-[#303446] border-gray-700 hover:bg-gray-700">
            <div className="cursor-pointer m-3 transition ease-in-out delay-50 hover:scale-125 duration-300 bg-[url('/contacts/whatsapp-light.svg')] dark:bg-[url('/contacts/whatsapp-light.svg')] hover:!bg-[url('/contacts/whatsapp-original.svg')] bg-cover w-[40px] h-[40px]" />
            <p className="font-normal text-gray-200">WhatsApp</p>
          </Link>
        </div>
        <form onSubmit={handleSubmit(sendEmail)} className="p-[5rem] max-[640px]:pl-[0rem] max-[640px]:pr-[0rem] max-[640px]:pt-[2rem] max-[640px]:pb-[2rem] space-y-8">
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">{translator('Ou caso queira me enviar um email profissional.')}</p>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-white">{translator('Seu email')}</label>
            <input
              type="email"
              id="email"
              {...register("fromEmail")}
              className="border border-gray-300 rounded-lg w-full p-2.5 dark:bg-[#303446] dark:border-gray-600"
              placeholder={translator('exemplo@gmail.com')}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 font-medium text-white">{translator('Assunto')}</label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="border border-gray-300 rounded-lg w-full p-2.5 dark:bg-[#303446] dark:border-gray-600"
              placeholder={translator('O que você gostaria de discutir?')}
              required
            />
            {errors.subject && <p>{errors.subject?.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 font-medium text-white">{translator('Sua mensagem')}</label>
            <textarea
              id="message"
              {...register("message")}
              rows={6}
              className="block p-2.5 w-full rounded-lg border border-gray-300 dark:bg-[#303446] dark:border-gray-600"
              placeholder={translator('Olá Juliano, tudo bem?')}
              required
            />
            {errors.message && <p>{errors.message?.message}</p>}
          </div>
          <button type="submit" className="py-3 px-5 font-medium text-center text-white rounded-lg bg-[#0d6efd] hover:bg-[#0b5ed7] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700">{translator('Enviar mensagem')}</button>
        </form>
      </div>
      {openSnackbarEmail && (
        <SnackbarMessage statusEmail={statusEmail} />
      )}
    </footer>
  )
}