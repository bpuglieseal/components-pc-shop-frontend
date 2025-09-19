import {FC} from 'react'
import {getServerSession} from 'next-auth/next'
import Search from '../icons/search'
import Cart from '../icons/cart'
import {HeaderTopBarLinkItem} from './header-top-bar-link-item'
import {FaUserAlt} from 'react-icons/fa'
import {LogoutHeaderButton} from './logout-header-button'

export const Header: FC<{}> = async () => {
  const session = await getServerSession()

  return (
    <header>
      <div className="min-h-10 bg-[#2c2c2c] flex items-center">
        <div className="container mx-auto flex flex-row justify-between">
          <ul className="flex-row flex gap-6 items-center">
            {session ? (
              <>
                <HeaderTopBarLinkItem
                  path="/account"
                  classname="flex flex-row items-center gap-2"
                >
                  <FaUserAlt className="text-inherit hover:text-inherit" />
                  {session.user.name}
                </HeaderTopBarLinkItem>
                <li>
                  <LogoutHeaderButton>Log out</LogoutHeaderButton>
                </li>
                <HeaderTopBarLinkItem path="#">Check out</HeaderTopBarLinkItem>
              </>
            ) : (
              <>
                <HeaderTopBarLinkItem path="/account/login">
                  Log in
                </HeaderTopBarLinkItem>
                <HeaderTopBarLinkItem path="/account/register">
                  Create an account
                </HeaderTopBarLinkItem>
                <HeaderTopBarLinkItem path="#">Check out</HeaderTopBarLinkItem>
              </>
            )}
          </ul>
          <div className="flex items-center">
            <h3 className="text-sm text-[#999]">Welcome to our online store</h3>
          </div>
        </div>
      </div>
      <div className="container flex flex-row justify-between py-6">
        <div className="self-center">
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
