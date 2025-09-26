import {FC, PropsWithChildren} from 'react'

export const FormLabel: FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <label className="w-4/12 text-right px-4 text-sm font-bold text-[#999]">
      {children}
    </label>
  )
}
