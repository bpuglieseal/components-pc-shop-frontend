'use client'
import {FC, PropsWithChildren, useEffect} from 'react'

type MswProviderProps = FC<PropsWithChildren>

export const MswProvider: MswProviderProps = ({children}) => {
  useEffect(() => {
    async function loadMocks() {
      if (process.env.NODE_ENV === 'development') {
        const {browser} = await import('@/__mocks__/browser')
        browser.start()
      }
    }

    loadMocks()
  }, [])

  return null
}
