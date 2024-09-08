'use client'

import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button, Box, Typography, Link } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import Cookies from 'js-cookie'
import LoginService from '@/services/login.service'
import { TLogin } from '@/utilities/types/login.type'
import GSnackbar from '@/app/_components/common/GSnackbar'
import UserRules from '@/utilities/rules/user.rule'
import GUsernameField from '@/app/_components/user/form/GUsernameField'
import GPasswordField from '@/app/_components/user/form/GPasswordField'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const loginService = new LoginService()
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'error' as 'error' | 'success' | 'info' | 'warning',
  })

  const onSubmit = async (data: TLogin) => {
    try {
      const response = await loginService.login(data)
      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: response.data?.message,
          severity: 'success',
        })
        const dateNow = response.data.dateNow
        const expires: number = dateNow + 180 * 1000
        Cookies.set('client_access_token', 'isLogined', {
          expires: new Date(expires),
          sameSite: 'strict',
        })
        router.push(searchParams.get('redirect') || '/')
      } else {
        setSnackbar({
          open: true,
          message: response.data?.message,
          severity: 'error',
        })
      }
    } catch (err: any) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || 'Something went wrong',
        severity: 'error',
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({
      open: false,
      message: '',
      severity: 'error',
    })
  }

  return (
    <Box className="flex items-center justify-center min-h-[calc(100vh_-_6.5rem)]">
      <Box className="bg-white p-8 rounded-lg shadow-md w-96">
        <Typography variant="h4" className="text-center mb-6 !text-gray-600">
          Login
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <GUsernameField name="username" rules={UserRules.username} />
            <GPasswordField name="password" rules={UserRules.password} />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!mt-8 bg-gradient-to-r from-blue-500 to-purple-600"
            >
              Login
            </Button>
          </form>
        </FormProvider>
        <Box className="mt-4 text-center">
          <Link href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password?
          </Link>
        </Box>
        <Box className="mt-2 text-center">
          <Typography variant="body2" className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
      <GSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
      />
    </Box>
  )
}
