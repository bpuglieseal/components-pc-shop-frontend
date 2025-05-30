'use client'

import {FC, PropsWithChildren} from 'react'
import {SessionProvider} from 'next-auth/react'

type NextAuthProps = PropsWithChildren

export const NextAuthProvider: FC<NextAuthProps> = ({children}) => {
  return <SessionProvider>{children}</SessionProvider>
}
