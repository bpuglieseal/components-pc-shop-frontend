import {FC} from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-[#f4f4f3] py-14 border border-solid border-[#ddd]">
      <div className="container flex flex-row justify-between">
        <div className="w-1/4">
          <h3 className="text-[#333] font-light text-xl">Information</h3>
          <ul className="mt-4">
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Home
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Search
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Blog
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Documentation
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-[#333] font-light text-xl">Products</h3>
          <ul className="mt-4">
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Monitors
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Hard Drives
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Keyboard / Mice
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                CPUs
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-[#333] font-light text-xl">Follow us</h3>
          <ul className="mt-4">
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Twitter
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#"
                className="text-sm text-[#999] font-light hover:text-[#467197] transition-colors"
              >
                Google+
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-[#333] font-light text-xl">Contacts</h3>
          <ul className="mt-4">
            <li className="pt-2 text-[#999] font-light text-sm">
              8901 Marmora Road, Glasgow, D04 89GR
            </li>
            <li className="pt-2 text-xl text-[#999] font-light">
              (800)2345-6789
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
