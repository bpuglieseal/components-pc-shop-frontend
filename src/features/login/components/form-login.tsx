'use client'
import {FC} from 'react'
import Link from 'next/link'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Form, useForm} from 'react-hook-form'

// Components
import {Alert} from '@/features/shared/components/alert'
import {FormSubmit} from '@/features/shared/components/auth/form-submit'
import {FormLabel} from '@/features/shared/components/auth/form-label'
import {FormInput} from '@/features/shared/components/auth/input'
import {FormGroup} from '@/features/shared/components/auth/form-group'
import {FormError} from '@/features/shared/components/auth/form-error'

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
  error: string | null
}

export const LoginForm: FC<LoginFormProps> = ({isLoading, onSubmit, error}) => {
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
      {!!error && <Alert>{error}</Alert>}
      <FormGroup>
        <FormLabel>
          Email Address
        </FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.email?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="email"
            id="email"
            {...register('email')}
          />
          {!!errors.email?.message && (
            <FormError>
              errors.email?.message
            </FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>
          Password
        </FormLabel>
        <div className="px-4 w-4/12">
          <FormInput
            aria-invalid={!!errors.password?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="password"
            id="password"
            {...register('password')}
          />
          {!!errors.password?.message && (
            <FormError>
              {errors.password?.message}
            </FormError>
          )}
        </div>
      </FormGroup>
      <div className="w-4/12 ml-[33.3%] px-4">
        <a
          href="#"
          className="decoration-[none] text-[#467197] text-sm"
        >
          Forgot your password?
        </a>
      </div>
      <div className="w-4/12 ml-[33.3%] px-4">
        <FormSubmit isLoading={isLoading}>Sign In</FormSubmit>
        <span className="ml-2 font-normal text-sm">
          or
          <Link
            href="/"
            className="ml-2 text-[#467197] hover:underline"
          >
            Return to Store
          </Link>
        </span>
      </div>
    </form>
  )
}
