import {FC, PropsWithChildren} from 'react'

type AlertProps = FC<PropsWithChildren>

export const Alert: AlertProps = ({children}) => {
  return (
    <div className="rounded-md text-[#b94a48] bg-[#f2dede] border-[#ebccd1] border-solid p-4 text-xs">
      <ul>
        <li>{children}</li>
      </ul>
    </div>
  )
}
