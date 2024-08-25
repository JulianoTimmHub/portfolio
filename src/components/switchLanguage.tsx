import { useI18nContext } from '../hooks/useI18nContext';

export const SwitchLanguage = () => {
  const { languageSelected, handleChangeLanguage } = useI18nContext();

  return (
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-[#656783] max-[640px]:bg-[#8689AD] p-1'>
        <input
          type='checkbox'
          className='sr-only'
        />
        <span 
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${languageSelected === 'pt-BR' ? 'hover:bg-[#303446]' : 'hover:bg-[#8689AD] max-[640px]:hover:bg-[#656783]'} ${
            languageSelected === 'pt-BR' ? 'text-primary bg-[#303446]' : 'text-body-color'
          }`}
          onClick={() => handleChangeLanguage('pt-BR')}
        >
          <a className={`${languageSelected !== 'pt-BR' ? "bg-[url('/brazil-original.png')]" : "bg-[url('/brazil-original.png')]"} bg-cover w-[20px] h-[20px]`} />
        </span>
        <span onClick={() => handleChangeLanguage('en-US')}
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${languageSelected === 'en-US' ? 'hover:bg-[#303446]' : 'hover:bg-[#8689AD] max-[640px]:hover:bg-[#656783]'} ${
            languageSelected === 'en-US' ? 'text-primary bg-[#303446]' : 'text-body-color'
          }`}
        >
         <a className={`${languageSelected === 'en-US' ? "bg-[url('/usa-original.png')]" : "bg-[url('/usa-original.png')]"} bg-cover w-[20px] h-[20px]`} />
        </span>
      </label>
  )
}