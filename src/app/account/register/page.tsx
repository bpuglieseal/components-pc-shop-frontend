import {RegisterFormContainer} from '@/features/register/containers/register-form-container'
import {getServerSession} from 'next-auth/next'
import {redirect} from 'next/navigation'

export default async function Register() {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }

  return (
    <div id="login">
      <div className="container">
        <h2 className="pb-3 mt-6 text-[#333] font-light border-b-2 border-[#ddd] text-2xl">
          Create Account
        </h2>
        <RegisterFormContainer />
      </div>
    </div>
  )
}
