import {LoginCredentials} from '../types'

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
    throw new Error(body.message)
  }

  const token = await response.json()
  return token
}
