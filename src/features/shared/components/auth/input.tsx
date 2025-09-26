import {FC, PropsWithChildren, InputHTMLAttributes} from 'react'

export const FormInput: FC<
  PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
> = (props) => {
  return (
    <input
      className="p-[6px] border border-[#ddd] text-[#999] text-sm rounded-md w-full focus:border-[#aaa] focus-visible:border-[#aaa] focus:shadow-input-focus transition-colors aria-[invalid=true]:border-red-500"
      {...props}
    />
  )
}
