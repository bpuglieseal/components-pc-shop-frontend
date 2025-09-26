import {FetchError} from '@/features/shared/api/fetch-error'
import {RegisterCredentials} from '../types/types'

export async function register(credentials: RegisterCredentials) {
  const response = await fetch(`/api/auth/register`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
    method: 'POST'
  })

  if (!response.ok) {
    const body = await response.json()
    const {status} = response

    throw new FetchError(body.message, status)
  }
}
