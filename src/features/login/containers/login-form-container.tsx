'use client'
import {FC, useState} from 'react'
import {LoginForm} from '../components/form-login'
import {signIn} from 'next-auth/react'

export const LoginFormContainer: FC<object> = () => {
  const [loading, setLoading] = useState(false)

  return (
    <LoginForm
      isLoading={loading}
      onSubmit={({email, password}) => {
        const credentials = {email, password}
        setLoading(true)

        signIn('credentials', {
          ...credentials,
          redirect: false
        })
          .then((res) => {
            if (res?.error) {
              console.log(res.error)
            } else {
              console.log('Welcome')
            }
          })
          .finally(() => {
            setLoading(false)
          })
      }}
    />
  )
}
