import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";

export const SwitchTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeSelected, setThemeSelected] = useState<string>(theme || 'dark');

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return null;

  const handleCheckboxChange = (theme: string) => {
    setThemeSelected(theme)
    setTheme(theme)
  }

  return (
    <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-[#656783] max-[640px]:bg-[#8689AD] p-1'>
      <input
        type='checkbox'
        className='sr-only'
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${themeSelected === 'light' ? 'hover:bg-[#303446]' : 'hover:bg-[#8689AD] max-[640px]:hover:bg-[#656783]'} ${
          themeSelected === 'light' ? 'text-primary bg-[#303446]' : 'text-body-color'
        }`}
        onClick={() => handleCheckboxChange('light')}
      >
        <a className="bg-[url('/light-theme.png')] bg-cover w-[20px] h-[20px]" />
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${themeSelected === 'dark' ? 'hover:bg-[#303446]' : 'hover:bg-[#8689AD] max-[640px]:hover:bg-[#656783]'} ${
          themeSelected === 'dark' ? 'text-primary bg-[#303446]' : 'text-body-color'
        }`}
        onClick={() => handleCheckboxChange('dark')}
      >
        <a className="bg-[url('/dark-theme.png')] bg-cover w-[20px] h-[20px]" />
      </span>
    </label>
  )
}