'use client'
import {FC, useCallback, PropsWithChildren} from 'react'
import {useRouter} from 'next/navigation'
import {signOut} from 'next-auth/react'

type LogoutHeaderButtonProps = {}

export const LogoutHeaderButton: FC<
  PropsWithChildren<LogoutHeaderButtonProps>
> = ({children}) => {
  const router = useRouter()

  const handleSignOut = useCallback(() => {
    signOut().then(() => {
      router.push('/')
    })
  }, [signOut, router])

  return (
    <button
      className="text-white text-sm transition-colors hover:text-[#999]"
      onClick={() => handleSignOut()}
    >
      {children}
    </button>
  )
}
