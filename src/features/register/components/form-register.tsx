'use client'
import NextLink from 'next/link'
import {FC} from 'react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'

// Components
import {FormLabel} from '@/features/shared/components/auth/form-label'
import {FormInput} from '@/features/shared/components/auth/input'
import {FormGroup} from '@/features/shared/components/auth/form-group'
import {Alert} from '../../shared/components/alert'
import {FormSubmit} from '@/features/shared/components/auth/form-submit'
import {FormError} from '@/features/shared/components/auth/form-error'

const registerFormScheme = yup.object({
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('The email provided is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'The password should contain 6 characters at least')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'The password are not equals')
    .required('Repeat password is required'),
  direction: yup.string().required('Direction is required'),
  dateOfBirth: yup.date().required('Date of birth is required')
})

export type RegisterFormData = yup.InferType<typeof registerFormScheme>

interface RegisterFormProps {
  onSubmit: (credentials: RegisterFormData) => void
  isLoading: boolean
  error: string | null
}

export const RegisterForm: FC<RegisterFormProps> = ({
  error,
  isLoading,
  onSubmit
}) => {
  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm({
    resolver: yupResolver(registerFormScheme),
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      username: ''
    }
  })

  return (
    <form
      id="register"
      className="flex flex-col py-4 gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!!error && <Alert>{error}</Alert>}
      <FormGroup>
        <FormLabel>Username</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.username?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="text"
            {...register('username')}
          />
          {!!errors.username?.message && (
            <FormError>{errors.username?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Email Address</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.email?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="email"
            {...register('email')}
          />
          {!!errors.email?.message && (
            <FormError>{errors.email?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.password?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="password"
            {...register('password')}
          />
          {!!errors.password?.message && (
            <FormError>{errors.password?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Repeat Password</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.repeatPassword?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="password"
            {...register('repeatPassword')}
          />
          {!!errors.repeatPassword?.message && (
            <FormError>{errors.repeatPassword?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Direction</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.direction?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="text"
            {...register('direction')}
          />
          {!!errors.repeatPassword?.message && (
            <FormError>{errors.direction?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Birthday</FormLabel>
        <div className="w-4/12 px-4">
          <FormInput
            aria-invalid={!!errors.dateOfBirth?.message}
            aria-disabled={isLoading}
            disabled={isLoading}
            type="date"
            {...register('dateOfBirth')}
          />
          {!!errors.repeatPassword?.message && (
            <FormError>{errors.dateOfBirth?.message}</FormError>
          )}
        </div>
      </FormGroup>
      <div className="w-4/12 ml-[33.3%] px-4">
        <FormSubmit>Sign Up</FormSubmit>
        <span className="ml-2 font-normal text-sm">
          or
          <NextLink
            href="/"
            className="ml-2 text-[#467197] hover:underline"
          >
            Return to Store
          </NextLink>
        </span>
      </div>
    </form>
  )
}
