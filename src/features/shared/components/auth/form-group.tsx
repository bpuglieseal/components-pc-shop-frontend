import {FC, PropsWithChildren} from 'react'

export const FormGroup: FC<PropsWithChildren<{}>> = ({children}) => {
  return <div className="flex flex-row items-center">{children}</div>
}
