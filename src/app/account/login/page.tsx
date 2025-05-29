import {LoginForm} from '@/features/login/components/form-login'

export default function Login() {
  return (
    <div id="login">
      <div className="container">
        <h2 className="pb-3 mt-6 text-[#333] font-light border-b-2 border-[#ddd] text-2xl">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  )
}
