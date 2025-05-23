import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'error',
      semi: ['error', 'never'],
      'object-curly-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      quotes: ['error', 'single', {allowTemplateLiterals: true}],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'indent': ['error', 2]
    },
    files: ['src/**/*.{js,ts,jsx,tsx}', '__tests__/**/*.{js,ts,jsx,tsx}'],
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**', '**/.swc/**']
  }
]

export default eslintConfig
