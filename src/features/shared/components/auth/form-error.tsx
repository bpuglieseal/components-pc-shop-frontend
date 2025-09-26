import {FC, PropsWithChildren} from 'react'

export const FormError: FC<PropsWithChildren> = ({children}) => {
  return <p className="text-xs text-red-500 font-medium mt-1">{children}</p>
}
