import {FC, PropsWithChildren} from 'react'
import Search from './icons/search'
import Cart from './icons/cart'

type HeaderProps = object

const HeaderTopBarLinkItem: FC<PropsWithChildren<object>> = ({children}) => {
  return (
    <li>
      <a
        href="#"
        className="text-white text-sm hover:text-[#999] transition-colors"
      >
        {children}
      </a>
    </li>
  )
}

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div className="min-h-10 bg-[#2c2c2c] flex items-center">
        <div className="container mx-auto flex flex-row justify-between">
          <ul className="flex-row flex gap-6">
            <HeaderTopBarLinkItem>Log in</HeaderTopBarLinkItem>
            <HeaderTopBarLinkItem>Create an account</HeaderTopBarLinkItem>
            <HeaderTopBarLinkItem>Check out</HeaderTopBarLinkItem>
          </ul>
          <div className="flex items-center">
            <h3 className="text-sm text-[#999]">Welcome to our online store</h3>
          </div>
        </div>
      </div>
      <div className="container flex flex-row justify-between py-6">
        <div className="pt-6">
          <span>
            <a
              href="#"
              className="text-3xl font-light hover:text-[#467197] transition-colors"
            >
              Computers
            </a>
          </span>
        </div>
        <div>
          <div>
            <form
              role="search"
              className="flex flex-row border-b-[#999] border-solid border-b-[1px] pb-1"
            >
              <input
                type="text"
                name="search"
                id="searchbox"
                placeholder="Search store..."
                className="placeholder:text-xs w-80 placeholder:text-[#999] text-sm font-medium text-[#999]"
              />
              <Search
                width={24}
                height={24}
              />
            </form>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="hover:text-[#ce492b] flex flex-row items-center gap-3 text-[#467197]"
            >
              <Cart
                className="text-inherit transition-colors"
                fill="currentColor"
                color="inherit"
              />
              <span className="font-light text-inherit transition-colors">
                My Cart: 0 item(s)
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
