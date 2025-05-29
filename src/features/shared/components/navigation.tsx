import {FC, PropsWithChildren} from 'react'

type NavigationProps = PropsWithChildren<object>

const NavigationLinkItem: FC<PropsWithChildren<object>> = ({children}) => {
  return (
    <li className="mr-8">
      <a
        href="#"
        className="font-light text-[#467197] hover:text-[#ce492b] transition-colors text-base"
      >
        {children}
      </a>
    </li>
  )
}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <div className="w-full bg-[#f4f4f3] border border-solid border-[#ddd] z-10">
      <div className="container">
        <nav role="navigation">
          <ul className="flex flex-row py-3">
            {['Home', 'Products', 'Blogs', 'About Us', 'Contact Us'].map(
              (name: string) => (
                <NavigationLinkItem key={name}>{name}</NavigationLinkItem>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
