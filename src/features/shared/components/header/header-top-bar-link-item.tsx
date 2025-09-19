import {FC, PropsWithChildren} from 'react'
import Link from 'next/link'

export const HeaderTopBarLinkItem: FC<
  PropsWithChildren<{path: string; classname?: string}>
> = ({children, path, classname}) => {
  return (
    <li className="text-white hover:text-[#999]">
      <Link
        href={path}
        className={`text-sm transition-colors ${classname}`}
      >
        {children}
      </Link>
    </li>
  )
}
