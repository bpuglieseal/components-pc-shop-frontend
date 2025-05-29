import {FC} from 'react'
import CartFilled from './icons/cart-filled'
import CreditCard from './icons/credit-card'

export const InfoLinks: FC<object> = () => {
  return (
    <div className="container py-6 flex flex-row items-center justify-between gap-4">
      <div className="w-7/12">
        <a
          href="#"
          className="text-white bg-[#ce492b] px-5 pt-3 pb-[10px] gap-4 flex flex-row hover:bg-[#2c2c2c] transition-colors"
        >
          <CartFilled
            width={72}
            height={72}
          />
          <div className="w-full px-1">
            <h3 className="text-3xl">Free standard delivery on all orders</h3>
            <span className="text-sm">or Reserve and Collect in an hour</span>
          </div>
        </a>
      </div>
      <div className="w-5/12">
        <a
          href="#"
          className="text-white bg-[#467197] px-5 pt-3 pb-[10px] gap-4 items-center flex flex-row hover:bg-[#2c2c2c] transition-colors"
        >
          <CreditCard
            width={72}
            height={72}
          />
          <div className="w-full px-1">
            <h3 className="text-5xl">Gift Cards</h3>
          </div>
        </a>
      </div>
    </div>
  )
}
