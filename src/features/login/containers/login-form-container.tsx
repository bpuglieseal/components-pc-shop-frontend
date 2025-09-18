'use client'
import {FC, useState} from 'react'
import {LoginForm} from '../components/form-login'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'

export const LoginFormContainer: FC<object> = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  return (
    <LoginForm
      isLoading={loading}
      error={error}
      onSubmit={({email, password}) => {
        const credentials = {email, password}
        setLoading(true)

        signIn('credentials', {
          ...credentials,
          redirect: false
        })
          .then((res) => {
            if (res?.error) {
              setError(res.error)
            } else {
              router.push('/')
            }
          })
          .finally(() => {
            setLoading(false)
          })
      }}
    />
  )
}
