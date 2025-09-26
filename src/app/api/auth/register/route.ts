import {RegisterCredentials} from '@/features/register/types/types'

export async function POST(req: Request) {
  const credentials: RegisterCredentials = await req.json()

  try {
    const response = await fetch(`${process.env.API_URL}/register`, {
      body: JSON.stringify(credentials),
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      return new Response(null, {status: 201})
    } else {
      const body = await response.json()
      return new Response(JSON.stringify({message: body.message}), {
        status: response.status
      })
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Error en el servidor. Intenta de nuevo mas tarde'
      }),
      {status: 500}
    )
  }
}
