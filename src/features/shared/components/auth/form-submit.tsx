import {FC, PropsWithChildren} from 'react'
import {BeatLoader} from 'react-spinners'

interface FormSubmitProps {
  isLoading: boolean
}

export const FormSubmit: FC<PropsWithChildren<FormSubmitProps>> = ({
  isLoading,
  children
}) => {
  return (
    <button
      disabled={isLoading}
      aria-disabled={isLoading}
      type="submit"
      className="bg-[#999] text-sm font-light text-white rounded-md py-[6px] px-[10px] cursor-pointer hover:bg-[#467197] transition-colors aria-[disabled=true]:hover:bg-[#999] aria-[disabled=true]:cursor-default"
    >
      {isLoading ? (
        <BeatLoader
          size={4}
          color="white"
        />
      ) : (
        children
      )}
    </button>
  )
}
