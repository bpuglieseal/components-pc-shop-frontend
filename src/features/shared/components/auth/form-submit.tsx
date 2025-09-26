import {FC, PropsWithChildren} from 'react'

export const FormSubmit: FC<PropsWithChildren> = ({children}) => {
  return (
    <input
      type="submit"
      value={children as string}
      className="bg-[#999] text-sm font-light text-white rounded-md py-[6px] px-[10px] cursor-pointer hover:bg-[#467197] transition-colors"
    />
  )
}
