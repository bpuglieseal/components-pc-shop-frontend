import { FetchError } from '@/features/shared/api/fetch-error'
import {LoginCredentials} from '../types'

export interface AuthSuccessfully {
  status: number;
  token: string
}

export async function login(credentials: LoginCredentials) {
  const response = await fetch(`${process.env.API_URL}/login`, {
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

  const auth: AuthSuccessfully = await response.json()
  return auth
}
