import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type {NextAuthOptions} from 'next-auth'
import {login} from '@/features/login/api/login'
import {FetchError} from '@/features/shared/api/fetch-error'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Auth with email and password',
      credentials: {
        email: {type: 'email'},
        password: {type: 'password'}
      },
      authorize: async (credentials) => {
        try {
          const email = credentials?.email ?? ''
          const password = credentials?.password ?? ''
          const {token} = await login({username: email, password})
          

          return {
            id: token,
            email: email,
            name: email,
            access: token
          }
        } catch (error) {
          if (error instanceof FetchError) {
            switch (error.getStatus()) {
              case 401:
                throw new Error('Bad email or password')
              case 500:
                throw new Error('Try again later')
              default:
                throw new Error('Error: try again later')
            }
          }

          throw error
        }
      }
    })
  ],
  callbacks: {
    jwt: ({token, user}) => {
      const isLogged = !!user

      if (isLogged) {
        token.id = user.id
        token.access = user.access
        token.email = user.email
      }

      return token
    },
    session: ({session, token}) => {
      if (!!token) {
        session.user.access = token.access
        session.user.id = token.id
        session.user.email = token.email ?? ''
      }
      return {...session}
    }
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
