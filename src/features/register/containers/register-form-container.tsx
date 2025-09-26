'use client'
import {FC, useState} from 'react'

// Components
import {RegisterForm} from '../components/form-register'
import {useRouter} from 'next/navigation'

// Api
import {register} from '../api/register'

// Types
import {RegisterCredentials} from '../types/types'
import {RegisterFormData} from '../components/form-register'
import {FetchError} from '@/features/shared/api/fetch-error'

function normalize({
  email,
  password,
  username,
  dateOfBirth,
  direction
}: RegisterFormData): RegisterCredentials {
  const formatter = Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return {
    username,
    dateOfBirth: formatter.format(dateOfBirth),
    direction,
    email,
    password
  }
}

export const RegisterFormContainer: FC<object> = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const router = useRouter()

  return (
    <RegisterForm
      error={error}
      isLoading={loading}
      onSubmit={async (form) => {
        setLoading(true)
        const credentials = normalize(form)

        try {
          await register(credentials)
          router.push('/account/login')
        } catch (error) {
          if (error instanceof FetchError) {
            switch (error.getStatus()) {
              case 409:
                setError('Invalid username/email or password')
                break
              default:
                break
            }
          } else {
            setError('Error en el servidor, intente de nuevo mas tarde.')
          }
        } finally {
          setLoading(false)
        }
      }}
    />
  )
}
