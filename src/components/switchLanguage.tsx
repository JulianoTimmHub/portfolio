import { useState } from 'react'

export const SwitchLanguage = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-[#656783] p-1'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${isChecked && 'hover:bg-[#8689AD]'} ${
            !isChecked ? 'text-primary bg-[#303446]' : 'text-body-color'
          }`}
        >
          <a className={`${!isChecked ? "bg-[url('/brazil-original.png')]" : "bg-[url('/brazil-original.png')]"} bg-cover w-[20px] h-[20px]`} />
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${!isChecked && 'hover:bg-[#8689AD]'} ${
            isChecked ? 'text-primary bg-[#303446]' : 'text-body-color'
          }`}
        >
         <a className={`${isChecked ? "bg-[url('/usa-original.png')]" : "bg-[url('/usa-original.png')]"} bg-cover w-[20px] h-[20px]`} />
        </span>
      </label>
  )
}