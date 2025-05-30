'use client'
import {FC} from 'react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'

const loginFormScheme = yup.object({
  email: yup
    .string()
    .email('Email provided is invalid')
    .required('Email is required'),
  password: yup.string().required('Password is required')
})

type LoginFormData = yup.InferType<typeof loginFormScheme>

interface LoginFormProps {
  onSubmit: (credentials: LoginFormData) => void
  isLoading: boolean
}

export const LoginForm: FC<LoginFormProps> = ({isLoading, onSubmit}) => {
  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <form
      id="login"
      className="flex flex-col py-4 gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row items-center">
        <label className="w-4/12 text-right px-4 text-sm font-bold text-[#999]">
          Email Address
        </label>
        <div className="w-4/12 px-4">
          <input
            aria-invalid={!!errors.email?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="email"
            id="email"
            className="p-[6px] border border-[#ddd] text-[#999] text-sm rounded-md w-full focus:border-[#aaa] focus-visible:border-[#aaa] focus:shadow-input-focus transition-colors aria-[invalid=true]:border-red-500"
            {...register('email')}
          />
          {!!errors.email?.message && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center">
        <label className="w-4/12 text-right px-4 text-sm font-bold text-[#999]">
          Password
        </label>
        <div className="px-4 w-4/12">
          <input
            aria-invalid={!!errors.password?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="password"
            id="password"
            className="p-[6px] border border-[#ddd] text-[#999] text-sm rounded-md w-full focus:border-[#aaa] focus-visible:border-[#aaa] focus:shadow-input-focus transition-colors aria-[invalid=true]:border-red-500"
            {...register('password')}
          />
          {!!errors.password?.message && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.password?.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-4/12 ml-[33.3%] px-4">
        <a
          href="#"
          className="decoration-[none] text-[#467197] text-sm"
        >
          Forgot your password?
        </a>
      </div>
      <div className="w-4/12 ml-[33.3%] px-4">
        <input
          type="submit"
          value="Sign In"
          className="bg-[#999] text-sm font-light text-white rounded-md py-[6px] px-[10px] cursor-pointer hover:bg-[#467197] transition-colors"
        />
        <span className="ml-2 font-normal text-sm">
          or
          <a
            href="#"
            className="ml-2 text-[#467197] hover:underline"
          >
            Return to Store
          </a>
        </span>
      </div>
    </form>
  )
}
